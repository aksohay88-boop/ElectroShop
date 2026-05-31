import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT_DIR = process.cwd();
const CSV_FILES = ["data/celulares.csv", "data/electrodomesticos.csv"];
const OUTPUT_DIR = "assets/productos";
const MAX_IMAGES_PER_PRODUCT = 3;
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 76;

function normalizeHeader(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function detectDelimiter(text) {
  const firstLine = String(text || "")
    .split(/\r?\n/)
    .find((line) => line.trim().length > 0);

  if (!firstLine) {
    return ",";
  }

  const delimiters = [",", ";", "\t"];
  let bestDelimiter = ",";
  let bestCount = -1;

  delimiters.forEach((delimiter) => {
    const count = firstLine.split(delimiter).length - 1;
    if (count > bestCount) {
      bestCount = count;
      bestDelimiter = delimiter;
    }
  });

  return bestDelimiter;
}

function parseCsv(text, delimiter) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === "\"") {
      if (inQuotes && next === "\"") {
        cell += "\"";
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === delimiter && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell);
  if (row.length > 1 || String(row[0] || "").trim().length > 0) {
    rows.push(row);
  }

  const [header = [], ...body] = rows;
  const normalizedBody = body
    .map((currentRow) => {
      const next = [...currentRow];
      while (next.length < header.length) {
        next.push("");
      }
      return next.slice(0, header.length);
    })
    .filter((currentRow) => currentRow.some((cellValue) => String(cellValue || "").trim().length > 0));

  return { header, rows: normalizedBody };
}

function escapeCsvValue(value, delimiter) {
  const text = String(value ?? "");
  if (text.includes("\"")) {
    return `"${text.replace(/"/g, "\"\"")}"`;
  }
  if (text.includes(delimiter) || text.includes("\n") || text.includes("\r")) {
    return `"${text}"`;
  }
  return text;
}

function stringifyCsv(header, rows, delimiter) {
  const lines = [];
  lines.push(header.map((value) => escapeCsvValue(value, delimiter)).join(delimiter));
  rows.forEach((row) => {
    lines.push(row.map((value) => escapeCsvValue(value, delimiter)).join(delimiter));
  });
  return `${lines.join("\r\n")}\r\n`;
}

function splitImageValues(rawValue) {
  return String(rawValue || "")
    .split("|")
    .map((value) => value.trim())
    .filter((value) => value.length > 0);
}

function normalizeImageUrl(rawUrl) {
  const value = String(rawUrl || "").trim().replace(/^['"]|['"]$/g, "");
  if (!value) {
    return "";
  }

  if (/^https?:\/\/lh3\.googleusercontent\.com\/pw\//i.test(value) && !/[\?&]authuser=/i.test(value)) {
    return `${value}${value.includes("?") ? "&" : "?"}authuser=0`;
  }

  return value;
}

function isRemoteImage(url) {
  return /^https?:\/\//i.test(url);
}

function sanitizeSlug(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

async function downloadImageBuffer(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "ElectroShop-ImageOptimizer/1.0"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function optimizeAndSaveImage({ url, baseName, index, cacheMap }) {
  if (cacheMap.has(url)) {
    return cacheMap.get(url);
  }

  const hash = createHash("md5").update(url).digest("hex").slice(0, 8);
  const fileName = `${baseName}-${index + 1}-${hash}.webp`;
  const relativePath = `./${OUTPUT_DIR}/${fileName}`.replace(/\\/g, "/");
  const absolutePath = path.join(ROOT_DIR, OUTPUT_DIR, fileName);

  const sourceBuffer = await downloadImageBuffer(url);

  await sharp(sourceBuffer)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(absolutePath);

  cacheMap.set(url, relativePath);
  return relativePath;
}

function resolveColumnIndex(header, candidates) {
  const index = header.findIndex((value) => candidates.includes(normalizeHeader(value)));
  return index === -1 ? null : index;
}

async function processCsvFile(filePath, cacheMap) {
  const absoluteCsvPath = path.join(ROOT_DIR, filePath);
  const rawCsv = await readFile(absoluteCsvPath, "utf8");
  const delimiter = detectDelimiter(rawCsv);
  const { header, rows } = parseCsv(rawCsv, delimiter);

  const imageCol = resolveColumnIndex(header, ["imagen", "image", "foto", "img", "url"]);
  if (imageCol === null) {
    console.warn(`[skip] ${filePath}: no se encontro columna IMAGEN.`);
    return { updatedRows: 0, imagesOptimized: 0, failures: 0 };
  }

  const nameCol = resolveColumnIndex(header, ["nombre", "name"]);
  const skuCol = resolveColumnIndex(header, ["sku", "modelo", "model"]);

  let updatedRows = 0;
  let imagesOptimized = 0;
  let failures = 0;

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex];
    const rawImages = splitImageValues(row[imageCol]);
    if (rawImages.length === 0) {
      continue;
    }

    const baseSeed = row[nameCol ?? 0] || row[skuCol ?? 0] || `producto-${rowIndex + 1}`;
    const baseName = sanitizeSlug(baseSeed) || `producto-${rowIndex + 1}`;

    const optimizedValues = [];
    const uniqueUrls = [...new Set(rawImages.map(normalizeImageUrl))].slice(0, MAX_IMAGES_PER_PRODUCT);

    for (let imageIndex = 0; imageIndex < uniqueUrls.length; imageIndex += 1) {
      const imageUrl = uniqueUrls[imageIndex];
      if (!imageUrl) {
        continue;
      }

      if (!isRemoteImage(imageUrl)) {
        optimizedValues.push(imageUrl);
        continue;
      }

      try {
        const optimizedPath = await optimizeAndSaveImage({
          url: imageUrl,
          baseName,
          index: imageIndex,
          cacheMap
        });
        optimizedValues.push(optimizedPath);
        imagesOptimized += 1;
      } catch (error) {
        failures += 1;
        console.warn(`[warn] No se pudo optimizar ${imageUrl}: ${error.message}`);
      }
    }

    if (optimizedValues.length > 0) {
      row[imageCol] = optimizedValues.join("|");
      updatedRows += 1;
    }
  }

  const outputCsv = stringifyCsv(header, rows, delimiter);
  await writeFile(absoluteCsvPath, outputCsv, "utf8");

  return { updatedRows, imagesOptimized, failures };
}

async function main() {
  await mkdir(path.join(ROOT_DIR, OUTPUT_DIR), { recursive: true });

  const cacheMap = new Map();
  let totalRows = 0;
  let totalOptimized = 0;
  let totalFailures = 0;

  for (const csvFile of CSV_FILES) {
    const result = await processCsvFile(csvFile, cacheMap);
    totalRows += result.updatedRows;
    totalOptimized += result.imagesOptimized;
    totalFailures += result.failures;
    console.log(
      `[ok] ${csvFile}: filas actualizadas=${result.updatedRows}, imagenes optimizadas=${result.imagesOptimized}, fallos=${result.failures}`
    );
  }

  console.log("---- Resumen ----");
  console.log(`Filas actualizadas: ${totalRows}`);
  console.log(`Imagenes optimizadas: ${totalOptimized}`);
  console.log(`Fallos: ${totalFailures}`);
  console.log(`Salida: ${OUTPUT_DIR}`);
}

main().catch((error) => {
  console.error("[error] Fallo en optimizacion:", error);
  process.exit(1);
});

