const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Samsung Galaxy A55 256GB",
    price: 16500,
    category: "Celulares",
    subcategory: "Samsung",
    icon: "S",
    description: "Smartphone de gama media premium con gran pantalla, bateria duradera y muy buen rendimiento diario.",
    specs: ["256GB de almacenamiento", "Camara principal de 50MP", "Pantalla Super AMOLED"],
    images: [
      "https://picsum.photos/seed/a55-front/900/900",
      "https://picsum.photos/seed/a55-back/900/900",
      "https://picsum.photos/seed/a55-side/900/900"
    ]
  },
  {
    id: 2,
    name: "iPhone 14 128GB",
    price: 29500,
    category: "Celulares",
    subcategory: "Iphone",
    icon: "A",
    description: "Equipo potente con excelente ecosistema Apple, ideal para contenido, redes y trabajo movil.",
    specs: ["Chip de alto rendimiento", "Camara con gran estabilizacion", "128GB de almacenamiento"],
    images: [
      "https://picsum.photos/seed/iphone14-front/900/900",
      "https://picsum.photos/seed/iphone14-back/900/900",
      "https://picsum.photos/seed/iphone14-detail/900/900"
    ]
  },
  {
    id: 3,
    name: "Xiaomi Redmi Note 13",
    price: 11000,
    category: "Celulares",
    subcategory: "Redmi",
    icon: "X",
    description: "Excelente opcion precio-beneficio para uso diario, estudio, redes y entretenimiento.",
    specs: ["Bateria de larga duracion", "Carga rapida", "Pantalla FHD+"],
    images: [
      "https://picsum.photos/seed/redminote13-front/900/900",
      "https://picsum.photos/seed/redminote13-back/900/900",
      "https://picsum.photos/seed/redminote13-detail/900/900"
    ]
  },
  {
    id: 4,
    name: "Honor X8b 256GB",
    price: 11800,
    category: "Celulares",
    subcategory: "Honor",
    icon: "M",
    description: "Celular equilibrado para multitarea, fotos y conectividad 5G.",
    specs: ["Conectividad 5G", "Buena autonomia", "Pantalla fluida"],
    images: [
      "https://picsum.photos/seed/g84-front/900/900",
      "https://picsum.photos/seed/g84-back/900/900",
      "https://picsum.photos/seed/g84-detail/900/900"
    ]
  },
  {
    id: 5,
    name: "Samsung Galaxy S24",
    price: 38500,
    category: "Celulares",
    subcategory: "Samsung",
    icon: "S",
    description: "Telefono premium para quien busca potencia, camara avanzada y experiencia fluida.",
    specs: ["Procesador de ultima generacion", "Camara de nivel profesional", "Pantalla premium"],
    images: [
      "https://picsum.photos/seed/s24-front/900/900",
      "https://picsum.photos/seed/s24-back/900/900",
      "https://picsum.photos/seed/s24-detail/900/900"
    ]
  },
  {
    id: 6,
    name: "iPhone 15 Pro 256GB",
    price: 49500,
    category: "Celulares",
    subcategory: "Iphone",
    icon: "A",
    description: "Modelo profesional para creadores y usuarios exigentes en foto, video y productividad.",
    specs: ["256GB de almacenamiento", "Camara avanzada", "Acabado premium"],
    images: [
      "https://picsum.photos/seed/iphone15pro-front/900/900",
      "https://picsum.photos/seed/iphone15pro-back/900/900",
      "https://picsum.photos/seed/iphone15pro-detail/900/900"
    ]
  },
  {
    id: 7,
    name: "Refrigeradora Mabe 11 Pies",
    price: 23500,
    category: "Electrodomesticos",
    subcategory: "Refrigeradoras",
    icon: "R",
    description: "Refrigeradora eficiente y espaciosa para hogares que buscan practicidad y ahorro.",
    specs: ["11 pies", "Sistema de enfriamiento estable", "Diseno funcional"],
    images: [
      "https://picsum.photos/seed/mabe-front/900/900",
      "https://picsum.photos/seed/mabe-open/900/900",
      "https://picsum.photos/seed/mabe-detail/900/900"
    ]
  },
  {
    id: 8,
    name: "Microondas Panasonic 1.1 Cu Ft",
    price: 4200,
    category: "Electrodomesticos",
    subcategory: "Microondas",
    icon: "MW",
    description: "Microondas compacto y potente para calentar y cocinar de forma rapida.",
    specs: ["Capacidad 1.1 Cu Ft", "Controles simples", "Ideal para cocina diaria"],
    images: [
      "https://picsum.photos/seed/panasonic-micro-front/900/900",
      "https://picsum.photos/seed/panasonic-micro-open/900/900",
      "https://picsum.photos/seed/panasonic-micro-detail/900/900"
    ]
  },
  {
    id: 9,
    name: "Licuadora Oster 12 Velocidades",
    price: 2200,
    category: "Electrodomesticos",
    subcategory: "Licuadoras",
    icon: "LQ",
    description: "Licuadora resistente para jugos, salsas y mezclas del dia a dia.",
    specs: ["12 velocidades", "Vaso de gran capacidad", "Motor durable"],
    images: [
      "https://picsum.photos/seed/oster-blender-front/900/900",
      "https://picsum.photos/seed/oster-blender-use/900/900",
      "https://picsum.photos/seed/oster-blender-detail/900/900"
    ]
  },
  {
    id: 10,
    name: "Lavadora Whirlpool 18kg",
    price: 28900,
    category: "Electrodomesticos",
    subcategory: "Lavadoras",
    icon: "LV",
    description: "Capacidad amplia para familias, con ciclos practicos y lavado eficiente.",
    specs: ["18kg", "Programas de lavado", "Bajo consumo"],
    images: [
      "https://picsum.photos/seed/whirlpool-washer-front/900/900",
      "https://picsum.photos/seed/whirlpool-washer-open/900/900",
      "https://picsum.photos/seed/whirlpool-washer-detail/900/900"
    ]
  },
  {
    id: 11,
    name: "Cafetera Black+Decker 12 Tazas",
    price: 1800,
    category: "Electrodomesticos",
    subcategory: "Cafeteras",
    icon: "CF",
    description: "Prepara cafe para toda la familia con funcionamiento sencillo y rapido.",
    specs: ["Capacidad 12 tazas", "Sistema antigoteo", "Uso intuitivo"],
    images: [
      "https://picsum.photos/seed/bd-coffee-front/900/900",
      "https://picsum.photos/seed/bd-coffee-use/900/900",
      "https://picsum.photos/seed/bd-coffee-detail/900/900"
    ]
  },
  {
    id: 12,
    name: "Abanico de pedestal 18 pulgadas",
    price: 16900,
    category: "Electrodomesticos",
    subcategory: "Abanicos",
    icon: "AC",
    description: "Abanico potente para refrescar espacios amplios con funcionamiento estable.",
    specs: ["Aspa de 18 pulgadas", "Base resistente", "Niveles de velocidad"],
    images: [
      "https://picsum.photos/seed/inverter-ac-front/900/900",
      "https://picsum.photos/seed/inverter-ac-room/900/900",
      "https://picsum.photos/seed/inverter-ac-detail/900/900"
    ]
  }
];

let products = [...DEFAULT_PRODUCTS];

const state = {
  category: "all",
  subcategory: "all",
  search: ""
};

const WHATSAPP_NUMBER = "50582108899";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
const MAX_CREDIT_MONTHS = 12;
const DOWN_PAYMENT_PERCENT = 0.1;
const MIN_DOWN_PAYMENT = 1000;
const CELLPHONE_MONTHLY_INTEREST = 0.055;
const HOME_APPLIANCE_MONTHLY_INTEREST = 0.05;
const HOME_PREVIEW_LIMIT = 8;
const CELLPHONE_SUBCATEGORIES = [
  "Alexas",
  "Auriculares",
  "Bater\u00EDas port\u00E1tiles",
  "Blu",
  "Bocinas JBL",
  "C\u00E1maras de Seguridad",
  "Accesorios",
  "Juguetes",
  "Laptops",
  "PlayStation",
  "Honor",
  "Samsung",
  "Iphone",
  "Impresoras",
  "Infinix",
  "Micr\u00F3fonos",
  "Nintendo",
  "Memorias Micro",
  "Redmi",
  "Realme",
  "Protectores de Voltaje",
  "Gaming",
  "Tablets",
  "Teclado",
  "Tecno",
  "Relojes",
  "Xbox"
];
const ELECTRODOMESTIC_SUBCATEGORIES = [
  "Abanicos",
  "Camas",
  "Ni\u00F1os",
  "Arroceras",
  "Equipos de Sonido",
  "Batidora",
  "Bicicletas",
  "Cafeteras",
  "Utensilios",
  "Belleza",
  "Chineros",
  "Cocina",
  "Colchones",
  "Comedores",
  "Dispensadores",
  "Oficina",
  "Estantes",
  "Exhibidores",
  "Freezers",
  "Freidoras",
  "Gabinetes",
  "Gaveteros",
  "Hieleras",
  "Hornos",
  "Sof\u00E1s",
  "Lavadoras",
  "Licuadoras",
  "M\u00E1quinas para pelo",
  "M\u00E1quinas de coser",
  "Mesas",
  "Microondas",
  "Ollas de presi\u00F3n",
  "Muebles",
  "Pantallas",
  "Zapateras",
  "Parlantes",
  "Picador el\u00E9ctrico",
  "Planchas",
  "Plancha de pelo",
  "Piscinas",
  "Refrigeradoras",
  "Roperos",
  "Sandwichera",
  "Secadora de pelo",
  "Sillas",
  "Soporte de pantalla"
];
const HOME_SECTION_LAYOUT = [
  {
    title: "Celulares por marca",
    category: "Celulares",
    subcategories: ["Samsung", "Iphone", "Honor", "Redmi"],
    ctaLabel: "Ver más en celulares"
  },
  {
    title: "Audio y accesorios",
    category: "Celulares",
    subcategories: ["Bocinas JBL", "Auriculares", "Baterías portátiles", "Accesorios"],
    ctaLabel: "Explorar accesorios"
  },
  {
    title: "Consolas y gaming",
    category: "Celulares",
    subcategories: ["PlayStation", "Nintendo", "Xbox", "Gaming"],
    ctaLabel: "Ver línea gaming"
  },
  {
    title: "Cocina y preparación",
    category: "Electrodomesticos",
    subcategories: ["Microondas", "Cafeteras", "Freidoras", "Licuadoras"],
    ctaLabel: "Ver electrodomésticos de cocina"
  },
  {
    title: "Hogar y confort",
    category: "Electrodomesticos",
    subcategories: ["Refrigeradoras", "Lavadoras", "Camas", "Colchones"],
    ctaLabel: "Ver línea de hogar"
  },
  {
    title: "Muebles y entretenimiento",
    category: "Electrodomesticos",
    subcategories: ["Muebles", "Mesas", "Pantallas", "Equipos de Sonido"],
    ctaLabel: "Ver más para el hogar"
  }
];
const HERO_SLIDE_LAYOUT = [
  {
    label: "Electrodomésticos",
    category: "Electrodomesticos",
    subcategory: "all",
    imagePath: "./assets/hero/exhibidores.jpg",
    keywords: ["refrigeradoras", "lavadoras", "microondas", "freidoras", "licuadoras"]
  },
  {
    label: "Hogar y descanso",
    category: "Electrodomesticos",
    subcategory: "Camas",
    imagePath: "./assets/hero/camas.jpg",
    keywords: ["camas", "colchones", "muebles", "hogar"]
  },
  {
    label: "Laptops",
    category: "Celulares",
    subcategory: "Laptops",
    imagePath: "./assets/hero/laptop2.jpg",
    keywords: ["laptops", "laptop", "portátil", "portatil"],
    strictKeywords: true
  },
  {
    label: "Bocinas JBL",
    category: "Celulares",
    subcategory: "Bocinas JBL",
    imagePath: "./assets/hero/pexels-a-darmel-7862491.jpg",
    keywords: ["bocinas jbl", "jbl", "bocina"],
    strictKeywords: true
  },
  {
    label: "Videojuegos",
    category: "Celulares",
    subcategory: "PlayStation",
    imagePath: "./assets/hero/playstation.jpg",
    keywords: ["playstation", "nintendo", "xbox", "gaming", "videojuegos"],
    strictKeywords: true
  },
  {
    label: "Zona gaming",
    category: "Celulares",
    subcategory: "Gaming",
    imagePath: "./assets/hero/gaming.jpg",
    keywords: ["gaming", "videojuegos", "xbox", "nintendo"]
  },
  {
    label: "Celulares Samsung",
    category: "Celulares",
    subcategory: "Samsung",
    imagePath: "./assets/hero/samsung.jpg",
    keywords: ["samsung", "android", "celular", "smartphone"]
  },
  {
    label: "Celulares iPhone",
    category: "Celulares",
    subcategory: "Iphone",
    imagePath: "./assets/hero/celulares.jpg",
    keywords: ["samsung", "iphone", "redmi", "honor", "tecno", "infinix", "realme", "blu"]
  }
];
const GOOGLE_SHEETS_CONFIG = {
  // Pega aquí los enlaces públicos de Google Sheets (permiso: Cualquiera con el enlace - Lector).
  celularesUrl: "https://docs.google.com/spreadsheets/d/14ZidwoLWp34f7ILn0wmPTvYpgYrcBOzbXV20FOjmRW4/edit?usp=sharing",
  electrodomesticosUrl: "https://docs.google.com/spreadsheets/d/1OinPkeR9C7_xHZN81SssNOg9rdKvBKIlBJutNbD9jAQ/edit?usp=sharing"
};
const LOCAL_CSV_CONFIG = {
  // CSV locales dentro del proyecto (si existen, tienen prioridad sobre Google Sheets).
  celularesPath: "./data/celulares.csv",
  electrodomesticosPath: "./data/electrodomesticos.csv"
};

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toFiniteNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  const raw = String(value ?? "").trim();
  if (!raw) {
    return null;
  }

  const firstNumberChunk = raw.match(/-?\d[\d\s.,]*/);
  if (!firstNumberChunk) {
    return null;
  }

  let cleaned = firstNumberChunk[0].replace(/\s+/g, "").replace(/[^\d,.-]/g, "");
  if (!cleaned || cleaned === "-" || cleaned === "." || cleaned === ",") {
    return null;
  }

  const commaCount = (cleaned.match(/,/g) || []).length;
  const dotCount = (cleaned.match(/\./g) || []).length;
  const lastComma = cleaned.lastIndexOf(",");
  const lastDot = cleaned.lastIndexOf(".");
  let decimalSeparator = "";

  if (commaCount > 0 || dotCount > 0) {
    decimalSeparator = lastComma > lastDot ? "," : ".";

    const lastSeparatorIndex = Math.max(lastComma, lastDot);
    const digitsAfterLastSeparator = cleaned.length - lastSeparatorIndex - 1;
    const totalSeparatorCount = commaCount + dotCount;

    if (digitsAfterLastSeparator === 3 && totalSeparatorCount === 1) {
      decimalSeparator = "";
    }
  }

  let normalized = cleaned;
  if (decimalSeparator === ",") {
    normalized = normalized.replace(/\./g, "").replace(",", ".");
  } else if (decimalSeparator === ".") {
    normalized = normalized.replace(/,/g, "");
  } else {
    normalized = normalized.replace(/[.,]/g, "");
  }

  const parsed = Number.parseFloat(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeImageUrl(rawUrl) {
  const value = String(rawUrl ?? "").trim().replace(/^['"]|['"]$/g, "").replace(/[);,.\s]+$/g, "");
  if (!value) {
    return "";
  }

  const fileMatch = value.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/i);
  if (fileMatch) {
    return `https://drive.google.com/uc?export=view&id=${fileMatch[1]}`;
  }

  const openMatch = value.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/i);
  if (openMatch) {
    return `https://drive.google.com/uc?export=view&id=${openMatch[1]}`;
  }

  const ucMatch = value.match(/(?:docs|drive)\.google\.com\/uc\?(?:export=view&)?id=([a-zA-Z0-9_-]+)/i);
  if (ucMatch) {
    return `https://drive.google.com/uc?export=view&id=${ucMatch[1]}`;
  }

  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return "";
}

function extractImageUrlsFromValue(value) {
  const raw = String(value ?? "").trim();
  if (!raw) {
    return [];
  }

  const urls = [];
  const imageFormulaMatch = raw.match(/=IMAGE\(\s*"([^"]+)"/i);
  if (imageFormulaMatch) {
    urls.push(imageFormulaMatch[1]);
  }

  const hyperlinkFormulaMatch = raw.match(/=HYPERLINK\(\s*"([^"]+)"/i);
  if (hyperlinkFormulaMatch) {
    urls.push(hyperlinkFormulaMatch[1]);
  }

  const directMatches = raw.match(/https?:\/\/[^\s"'<>]+/gi) || [];
  urls.push(...directMatches);

  return [...new Set(urls.map(normalizeImageUrl).filter((item) => item.length > 0))];
}

function looksLikeImageUrl(url) {
  const value = String(url ?? "");
  if (!value) {
    return false;
  }

  return (
    /\.(png|jpe?g|webp|gif|bmp|svg|avif)(\?|$)/i.test(value) ||
    /drive\.google\.com\/uc\?export=view&id=/i.test(value) ||
    /googleusercontent\.com|imgur|cloudinary|images|fotos?/i.test(value)
  );
}

function parseCsv(text) {
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

    if (char === "," && !inQuotes) {
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
  rows.push(row);
  return rows.filter((item) => item.some((value) => String(value).trim() !== ""));
}

function scoreDecodedCsvText(text) {
  let score = 0;
  if (!text) {
    return -999;
  }

  if (text.charCodeAt(0) === 0xfeff) {
    score += 2;
  }

  const replacementCount = (text.match(/\uFFFD/g) || []).length;
  const mojibakeCount = (text.match(/Ã.|Â./g) || []).length;
  const spanishChars = (text.match(/[ñÑáéíóúÁÉÍÓÚ]/g) || []).length;

  score -= replacementCount * 5;
  score -= mojibakeCount * 2;
  score += spanishChars;
  return score;
}

function decodeCsvBuffer(arrayBuffer) {
  const utf8 = new TextDecoder("utf-8", { fatal: false }).decode(arrayBuffer);
  const latin1 = new TextDecoder("latin1").decode(arrayBuffer);
  const utf8Score = scoreDecodedCsvText(utf8);
  const latin1Score = scoreDecodedCsvText(latin1);

  const selected = latin1Score > utf8Score ? latin1 : utf8;
  return selected.charCodeAt(0) === 0xfeff ? selected.slice(1) : selected;
}

function csvToObjects(csvText) {
  const rows = parseCsv(csvText);
  if (rows.length === 0) {
    return [];
  }

  const headers = rows[0].map((header) => normalizeText(header).replace(/[^a-z0-9]+/g, "_"));
  return rows
    .slice(1)
    .filter((values) => values.some((value) => String(value).trim() !== ""))
    .map((values) => {
      const objectRow = {};
      headers.forEach((header, index) => {
        objectRow[header] = String(values[index] ?? "").trim();
      });
      return objectRow;
    });
}

function findFieldValue(row, aliases) {
  for (const alias of aliases) {
    if (row[alias]) {
      return row[alias];
    }
  }

  for (const [key, value] of Object.entries(row)) {
    if (!value) {
      continue;
    }

    for (const alias of aliases) {
      if (key.includes(alias)) {
        return value;
      }
    }
  }

  return "";
}

function toGoogleCsvUrl(rawUrl) {
  const value = String(rawUrl ?? "").trim();
  if (!value) {
    return "";
  }

  if (value.includes("output=csv") || value.includes("format=csv")) {
    return value;
  }

  const idMatch = value.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (!idMatch) {
    return value;
  }

  const sheetId = idMatch[1];
  const gidMatch = value.match(/[#&?]gid=([0-9]+)/);
  const gidParam = gidMatch ? `&gid=${gidMatch[1]}` : "";
  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv${gidParam}`;
}

function getAllowedSubcategories(category) {
  return category === "Celulares" ? CELLPHONE_SUBCATEGORIES : ELECTRODOMESTIC_SUBCATEGORIES;
}

function normalizeCategoryKey(value) {
  const stopWords = new Set(["de", "del", "para", "con", "y", "la", "el", "los", "las"]);
  return normalizeText(value)
    .split(" ")
    .filter((token) => token && !stopWords.has(token))
    .join(" ");
}

function resolveSubcategory(category, rawSubcategory) {
  const allowed = getAllowedSubcategories(category);
  const normalizedRaw = normalizeText(rawSubcategory);
  const normalizedRawKey = normalizeCategoryKey(rawSubcategory);

  if (!normalizedRaw) {
    return category === "Celulares" ? "Accesorios" : "Muebles";
  }

  const exactMatch = allowed.find((item) => normalizeText(item) === normalizedRaw);
  if (exactMatch) {
    return exactMatch;
  }

  const normalizedMatch = allowed.find((item) => normalizeCategoryKey(item) === normalizedRawKey);
  if (normalizedMatch) {
    return normalizedMatch;
  }

  const partialMatch = allowed.find(
    (item) => normalizedRaw.includes(normalizeText(item)) || normalizeText(item).includes(normalizedRaw)
  );
  if (partialMatch) {
    return partialMatch;
  }

  return category === "Celulares" ? "Accesorios" : "Muebles";
}

function isCamasProduct(category, subcategory, productName) {
  if (category !== "Electrodomesticos") {
    return false;
  }

  return normalizeText(subcategory) === "camas" || normalizeText(productName).includes("cama");
}

function isMattressProduct(category, subcategory, productName) {
  if (category !== "Electrodomesticos") {
    return false;
  }

  const normalizedSubcategory = normalizeText(subcategory);
  const normalizedName = normalizeText(productName);
  return normalizedSubcategory === "colchones" || normalizedName.includes("colchon");
}

function isIndufoamProduct(row, productName) {
  const brand = normalizeText(findFieldValue(row, ["marca", "brand"]));
  const normalizedName = normalizeText(productName);
  return brand.includes("indufoam") || normalizedName.includes("indufoam");
}

function isAvailableByStock(row, category, subcategory, productName) {
  const isIndufoamMattress = isMattressProduct(category, subcategory, productName) && isIndufoamProduct(row, productName);
  if (isCamasProduct(category, subcategory, productName) || isIndufoamMattress) {
    return true;
  }

  const stockValue = findFieldValue(row, [
    "stock",
    "existencia",
    "inventario",
    "cantidad",
    "disponible",
    "disponibilidad",
    "availability"
  ]);
  const statusValue = normalizeText(
    findFieldValue(row, ["estado", "estatus", "status", "disponibilidad", "availability"])
  );
  const stockNumber = parseNumber(stockValue);

  if (stockNumber !== null) {
    return stockNumber > 0;
  }

  if (statusValue) {
    if (/(agotad|sin stock|no disponible|out of stock|sold out)/.test(statusValue)) {
      return false;
    }
  }

  return true;
}

function buildProductName(row) {
  const baseName = findFieldValue(row, [
    "name",
    "nombre",
    "producto",
    "articulo",
    "item",
    "titulo",
    "title",
    "descripcion"
  ]);
  const name = String(baseName || "Producto").trim();
  return { name };
}

function sanitizeIdentifierValue(value) {
  const normalizedValue = String(value || "").trim();
  const normalizedToken = normalizeText(normalizedValue);
  if (!normalizedValue) {
    return "";
  }

  if (["0", "n/a", "na", "none", "null", "-"].includes(normalizedToken)) {
    return "";
  }

  return normalizedValue;
}

function getProductIdentifiers(row) {
  const sku = sanitizeIdentifierValue(findFieldValue(row, ["sku", "codigo", "referencia", "cod"]));
  const model = sanitizeIdentifierValue(findFieldValue(row, ["modelo", "model"]));
  const identifier = model || sku;
  return { sku, model, identifier };
}

function formatStockLabel(stockNumber) {
  const safeStock = toFiniteNumber(stockNumber, 0);
  if (Number.isInteger(safeStock)) {
    return String(safeStock);
  }
  return safeStock.toFixed(2);
}

function inferFeaturesFromModel(name, identifier, category) {
  const text = `${name} ${identifier}`.trim();
  const normalized = normalizeText(text);
  const features = [];

  if (category === "Celulares") {
    const storageMatch = text.match(/(\d{2,4})\s?GB/i);
    const ramMatch = text.match(/(\d{1,2})\s?RAM/i);
    if (storageMatch) {
      features.push(`Almacenamiento: ${storageMatch[1]} GB`);
    }
    if (ramMatch) {
      features.push(`Memoria RAM: ${ramMatch[1]} GB`);
    }
    if (/5g/i.test(text)) {
      features.push("Conectividad 5G");
    }
    if (normalized.includes("seminuevo")) {
      features.push("Equipo seminuevo");
    }
  } else {
    const litersMatch = text.match(/(\d+(?:[.,]\d+)?)\s?(?:L|LT)\b/i);
    const kgMatch = text.match(/(\d+(?:[.,]\d+)?)\s?KG\b/i);
    const cupsMatch = text.match(/(\d+)\s?T(?:AZAS?)\b/i);
    const wattsMatch = text.match(/(\d{3,4})\s?W\b/i);
    const inchesMatch = text.match(/(\d{2,3})\s?(?:\"|PULGADAS?)/i);

    if (litersMatch) {
      features.push(`Capacidad: ${litersMatch[1].replace(",", ".")} L`);
    }
    if (kgMatch) {
      features.push(`Capacidad: ${kgMatch[1].replace(",", ".")} kg`);
    }
    if (cupsMatch) {
      features.push(`Capacidad: ${cupsMatch[1]} tazas`);
    }
    if (wattsMatch) {
      features.push(`Potencia: ${wattsMatch[1]} W`);
    }
    if (inchesMatch) {
      features.push(`Tamaño: ${inchesMatch[1]} pulgadas`);
    }
  }

  return [...new Set(features)];
}

function buildGeneratedDescription(category, subcategory, identifier, inferredFeatures) {
  const categoryLabel = formatCategoryLabel(category);
  const idText = identifier ? ` Modelo ${identifier}.` : "";
  if (inferredFeatures.length > 0) {
    return `Producto original de ${subcategory} en ${categoryLabel}.${idText} Caracter\u00EDsticas destacadas: ${inferredFeatures
      .slice(0, 3)
      .join(", ")}.`;
  }

  return `Producto original de ${subcategory} en ${categoryLabel}.${idText}`;
}

function buildImages(row, seed) {
  const preferredValues = Object.entries(row)
    .filter(([key, value]) => /(imagen|image|foto|img|url|enlace)/.test(key) && String(value).trim() !== "")
    .map(([, value]) => value);
  const fallbackValues = Object.values(row).filter((value) => String(value).trim() !== "");
  const preferredUrls = preferredValues.flatMap((value) => extractImageUrlsFromValue(value));
  const fallbackUrls = fallbackValues.flatMap((value) => extractImageUrlsFromValue(value));
  const prioritizedUrls = [...new Set([...preferredUrls, ...fallbackUrls])];
  let uniqueImages = prioritizedUrls.filter((url) => looksLikeImageUrl(url)).slice(0, 3);

  if (uniqueImages.length === 0) {
    uniqueImages = prioritizedUrls.slice(0, 3);
  }

  if (uniqueImages.length > 0) {
    while (uniqueImages.length < 3) {
      uniqueImages.push(uniqueImages[uniqueImages.length - 1]);
    }
    return uniqueImages;
  }

  return [
    `https://picsum.photos/seed/${seed}-1/900/900`,
    `https://picsum.photos/seed/${seed}-2/900/900`,
    `https://picsum.photos/seed/${seed}-3/900/900`
  ];
}

function mapSheetRowsToProducts(rows, category) {
  const mapped = [];

  rows.forEach((row) => {
    const { name } = buildProductName(row);
    const { sku, model, identifier } = getProductIdentifiers(row);
    const priceValue = findFieldValue(row, ["precio", "contado", "pvp", "valor", "price"]);
    const parsedPrice = parseNumber(priceValue);
    const safePrice = toFiniteNumber(parsedPrice, 0);

    if (safePrice <= 0) {
      return;
    }

    const rawSubcategory = findFieldValue(row, [
      "subcategory",
      "subcategoria",
      "sub_category",
      "sub_categoria",
      "categoria",
      "tipo",
      "marca"
    ]);
    const subcategory = resolveSubcategory(category, rawSubcategory);

    if (!isAvailableByStock(row, category, subcategory, name)) {
      return;
    }

    const stockValue = findFieldValue(row, [
      "stock",
      "existencia",
      "inventario",
      "cantidad",
      "disponible",
      "disponibilidad",
      "availability"
    ]);
    const stockNumber = parseNumber(stockValue);
    const statusValue = String(
      findFieldValue(row, ["estado", "estatus", "status", "disponibilidad", "availability"]) || ""
    ).trim();
    const brand = findFieldValue(row, ["marca", "brand"]);
    const inferredFeatures = inferFeaturesFromModel(name, identifier, category);
    const customFeatureText = String(
      findFieldValue(row, ["caracteristicas", "especificaciones", "features", "feature", "detalles"])
    ).trim();
    const customFeatures = customFeatureText
      ? customFeatureText
          .split(/[|;,\n]+/)
          .map((item) => item.trim())
          .filter((item) => item.length > 0)
      : [];
    const mergedFeatures = [...new Set([...customFeatures, ...inferredFeatures])];
    const description =
      findFieldValue(row, ["descripcion_larga", "descripcion", "detalle", "description"]) ||
      buildGeneratedDescription(category, subcategory, identifier, mergedFeatures);
    const specs = [];

    if (brand) {
      specs.push(`Marca: ${brand}`);
    }
    if (model) {
      specs.push(`Modelo: ${model}`);
    }
    if (sku && sku !== model) {
      specs.push(`SKU: ${sku}`);
    }
    if (!model && !sku && identifier) {
      specs.push(`Modelo/SKU: ${identifier}`);
    }
    if (stockNumber !== null) {
      specs.push(`Stock disponible: ${formatStockLabel(stockNumber)}`);
    } else if (statusValue) {
      specs.push(`Disponibilidad: ${statusValue}`);
    }
    mergedFeatures.forEach((feature) => {
      specs.push(feature);
    });
    if (specs.length === 0) {
      specs.push("Consulta especificaciones completas por WhatsApp.");
    }

    mapped.push({
      id: mapped.length + 1,
      name,
      price: safePrice,
      category,
      subcategory,
      icon: category === "Celulares" ? "C" : "E",
      description,
      specs,
      images: buildImages(row, `${category}-${name}`.replace(/\s+/g, "-").toLowerCase())
    });
  });

  return mapped;
}

async function fetchProductsFromSheet(source) {
  const csvUrl = toGoogleCsvUrl(source.url);
  if (!csvUrl) {
    return [];
  }

  const response = await fetch(csvUrl, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`No se pudo leer Google Sheet (${response.status})`);
  }

  const csvText = decodeCsvBuffer(await response.arrayBuffer());
  const rows = csvToObjects(csvText);
  return mapSheetRowsToProducts(rows, source.category);
}

async function fetchProductsFromLocalCsv(source) {
  const csvPath = String(source.path || "").trim();
  if (!csvPath) {
    return [];
  }

  const response = await fetch(csvPath, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`No se pudo leer CSV local (${response.status})`);
  }

  const csvText = decodeCsvBuffer(await response.arrayBuffer());
  const rows = csvToObjects(csvText);
  return mapSheetRowsToProducts(rows, source.category);
}

async function collectProductsFromGoogleSheets(categoriesToLoad = ["Celulares", "Electrodomesticos"]) {
  const sources = [
    { category: "Celulares", url: GOOGLE_SHEETS_CONFIG.celularesUrl },
    { category: "Electrodomesticos", url: GOOGLE_SHEETS_CONFIG.electrodomesticosUrl }
  ];
  const configuredSources = sources.filter(
    (source) => String(source.url).trim() !== "" && categoriesToLoad.includes(source.category)
  );

  const importedByCategory = new Map();
  for (const source of configuredSources) {
    try {
      const productsFromSheet = await fetchProductsFromSheet(source);
      if (productsFromSheet.length > 0) {
        importedByCategory.set(source.category, productsFromSheet);
      }
    } catch (error) {
      console.error("Error leyendo Google Sheet:", error);
    }
  }

  return importedByCategory;
}

async function collectProductsFromLocalCsv() {
  const sources = [
    { category: "Celulares", path: LOCAL_CSV_CONFIG.celularesPath },
    { category: "Electrodomesticos", path: LOCAL_CSV_CONFIG.electrodomesticosPath }
  ];
  const configuredSources = sources.filter((source) => String(source.path).trim() !== "");

  const importedByCategory = new Map();
  for (const source of configuredSources) {
    try {
      const productsFromCsv = await fetchProductsFromLocalCsv(source);
      if (productsFromCsv.length > 0) {
        importedByCategory.set(source.category, productsFromCsv);
      }
    } catch (error) {
      console.error("Error leyendo CSV local:", error);
    }
  }

  return importedByCategory;
}

async function loadProductsFromDataSources() {
  const categories = ["Celulares", "Electrodomesticos"];
  const localProducts = await collectProductsFromLocalCsv();
  const missingCategories = categories.filter((category) => !localProducts.has(category));
  const googleProducts =
    missingCategories.length > 0 ? await collectProductsFromGoogleSheets(missingCategories) : new Map();

  const mergedProducts = [];

  categories.forEach((category) => {
    if (localProducts.has(category)) {
      mergedProducts.push(...localProducts.get(category));
      return;
    }

    if (googleProducts.has(category)) {
      mergedProducts.push(...googleProducts.get(category));
      return;
    }

    mergedProducts.push(...DEFAULT_PRODUCTS.filter((item) => item.category === category));
  });

  products = mergedProducts.map((item, index) => ({ ...item, id: index + 1 }));
}

const productGrid = document.getElementById("productGrid");
const productsTitle = document.getElementById("productsTitle");
const resultCounter = document.getElementById("resultCounter");
const subcategoryFilters = document.getElementById("subcategoryFilters");
const searchInput = document.getElementById("searchInput");
const searchActionButton = document.getElementById("searchActionButton");
const refreshCatalogButton = document.getElementById("refreshCatalogButton");
const whatsappButton = document.getElementById("whatsappButton");
const categoryButtons = document.querySelectorAll('[data-filter-type="category"]');
const topCategoryButtons = document.querySelectorAll(".subnav [data-category]");
const homeSectionsWrap = document.getElementById("homeSectionsWrap");
const homeSections = document.getElementById("homeSections");
const breadcrumbsList = document.getElementById("breadcrumbsList");
const menuToggle = document.getElementById("menuToggle");
const subnavMenu = document.getElementById("subnavMenu");
const heroCarousel = document.getElementById("heroCarousel");
const heroTrack = document.getElementById("heroTrack");
const heroDots = document.getElementById("heroDots");
const heroPrev = document.getElementById("heroPrev");
const heroNext = document.getElementById("heroNext");

const productModal = document.getElementById("productModal");
const closeProductModal = document.getElementById("closeProductModal");
const mainProductImage = document.getElementById("mainProductImage");
const thumbGallery = document.getElementById("thumbGallery");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalSpecs = document.getElementById("modalSpecs");
const modalCashPrice = document.getElementById("modalCashPrice");
const modalCreditForm = document.getElementById("modalCreditForm");
const modalCreditMonths = document.getElementById("modalCreditMonths");
const modalCreditResult = document.getElementById("modalCreditResult");
const modalCreditWhatsapp = document.getElementById("modalCreditWhatsapp");

let currentModalProduct = null;
let heroSlides = [];
let currentHeroSlideIndex = 0;
let heroAutoplayId = null;
function formatPrice(value) {
  const safeValue = toFiniteNumber(value, 0);
  return new Intl.NumberFormat("es-NI", {
    style: "currency",
    currency: "NIO",
    maximumFractionDigits: 2
  }).format(safeValue);
}

function openWhatsApp(message) {
  const cleanMessage = String(message ?? "").replace(/\s+/g, " ").trim();
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(cleanMessage)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function formatCategoryLabel(category) {
  if (category === "Electrodomesticos") {
    return "Electrodom\u00E9sticos";
  }

  return category;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function getSafePrimaryImage(product) {
  if (Array.isArray(product.images) && product.images.length > 0 && typeof product.images[0] === "string") {
    return product.images[0];
  }

  return "";
}

function hasHeroKeywordMatch(product, keywords) {
  const haystack = normalizeText(`${product.name} ${product.subcategory} ${product.description}`);
  return keywords.some((keyword) => haystack.includes(normalizeText(keyword)));
}

function findHeroSlideProduct(config) {
  const inCategory = products.filter((item) => item.category === config.category);
  const withImages = inCategory.filter((item) => getSafePrimaryImage(item));

  const directMatch = withImages.find((item) => hasHeroKeywordMatch(item, config.keywords));
  if (directMatch) {
    return directMatch;
  }

  if (config.strictKeywords) {
    return null;
  }

  return withImages[0] || inCategory[0] || null;
}

function buildHeroSlides() {
  const fallbackByLabel = {
    Electrodomésticos: "https://source.unsplash.com/1600x760/?home,appliance",
    "Hogar y descanso": "https://source.unsplash.com/1600x760/?bedroom,interior",
    Laptops: "https://source.unsplash.com/1600x760/?laptop,computer",
    "Bocinas JBL": "https://source.unsplash.com/1600x760/?speaker,audio",
    Videojuegos: "https://source.unsplash.com/1600x760/?gaming,console",
    "Zona gaming": "https://source.unsplash.com/1600x760/?esports,gaming",
    "Celulares Samsung": "https://source.unsplash.com/1600x760/?samsung,phone",
    "Celulares iPhone": "https://source.unsplash.com/1600x760/?iphone,mobile"
  };

  return HERO_SLIDE_LAYOUT.map((slideConfig) => {
    const product = findHeroSlideProduct(slideConfig);
    const image =
      slideConfig.imagePath ||
      (product ? getSafePrimaryImage(product) : "") ||
      fallbackByLabel[slideConfig.label] ||
      "";
    const subcategory = slideConfig.subcategory || (product ? product.subcategory : "all");

    return {
      label: slideConfig.label,
      category: slideConfig.category,
      subcategory,
      image,
      productName: product ? product.name : slideConfig.label
    };
  }).filter((slide) => slide.image);
}

function stopHeroAutoplay() {
  if (heroAutoplayId) {
    clearInterval(heroAutoplayId);
    heroAutoplayId = null;
  }
}

function setHeroSlide(index) {
  if (!heroTrack || heroSlides.length === 0) {
    return;
  }

  const safeIndex = (index + heroSlides.length) % heroSlides.length;
  currentHeroSlideIndex = safeIndex;
  heroTrack.style.transform = `translateX(-${safeIndex * 100}%)`;

  if (heroDots) {
    heroDots.querySelectorAll(".hero-dot").forEach((dot) => {
      dot.classList.toggle("active", Number(dot.dataset.slideIndex) === safeIndex);
    });
  }
}

function startHeroAutoplay() {
  if (!heroCarousel || heroSlides.length <= 1) {
    return;
  }

  stopHeroAutoplay();
  heroAutoplayId = window.setInterval(() => {
    setHeroSlide(currentHeroSlideIndex + 1);
  }, 5200);
}

function renderHeroCarousel() {
  if (!heroTrack || !heroDots) {
    return;
  }

  heroSlides = buildHeroSlides();
  if (heroSlides.length === 0) {
    heroTrack.innerHTML = "";
    heroDots.innerHTML = "";
    stopHeroAutoplay();
    return;
  }

  heroTrack.innerHTML = heroSlides
    .map(
      (slide) => `
      <article
        class="hero-slide"
        data-slide-category="${escapeAttribute(slide.category)}"
        data-slide-subcategory="${escapeAttribute(slide.subcategory)}"
      >
        <img src="${escapeAttribute(slide.image)}" alt="${escapeAttribute(slide.label)}" loading="eager" />
        <div class="hero-slide-caption">${escapeHtml(slide.label)}</div>
      </article>
    `
    )
    .join("");

  heroDots.innerHTML = heroSlides
    .map(
      (_, index) =>
        `<button class="hero-dot ${index === 0 ? "active" : ""}" data-slide-index="${index}" type="button" aria-label="Ir a imagen ${index + 1}"></button>`
    )
    .join("");

  currentHeroSlideIndex = 0;
  heroTrack.style.transform = "translateX(0)";
  startHeroAutoplay();
}

function buildInterestMessage(product) {
  const productName = String(product?.name ?? "").trim();
  return `Hola ElectroShop, me interesa este producto: ${productName} (${formatPrice(product?.price)}).`;
}

function buildCreditMessage(product, months) {
  const plan = calculateCreditPlan(product, months);
  const productName = String(product?.name ?? "").trim();
  return (
    `Hola ElectroShop, quiero financiar ${productName}. ` +
    `Plazo ${plan.months} meses. ` +
    `Precio de contado ${formatPrice(plan.cashPrice)}. ` +
    `Total financiado ${formatPrice(plan.financedTotal)}. ` +
    `Prima ${formatPrice(plan.downPayment)}. ` +
    `Cuota mensual ${formatPrice(plan.monthlyInstallment)}. ` +
    `Cuota quincenal ${formatPrice(plan.biweeklyInstallment)}.`
  );
}

function getMonthlyInterestRate(category) {
  return category === "Celulares" ? CELLPHONE_MONTHLY_INTEREST : HOME_APPLIANCE_MONTHLY_INTEREST;
}

function calculateCreditPlan(product, months) {
  const safeMonths = Math.min(MAX_CREDIT_MONTHS, Math.max(1, Number(months) || 1));
  const monthlyRate = toFiniteNumber(getMonthlyInterestRate(product.category), 0);
  const cashPrice = Math.max(0, toFiniteNumber(product.price, 0));
  const financedTotal = cashPrice * (1 + monthlyRate * safeMonths);
  const requestedDownPayment = financedTotal * DOWN_PAYMENT_PERCENT;
  const downPayment = Math.min(financedTotal, Math.max(requestedDownPayment, MIN_DOWN_PAYMENT));
  const creditBalance = financedTotal - downPayment;
  const monthlyInstallment = creditBalance / safeMonths;
  const biweeklyInstallment = monthlyInstallment / 2;

  return {
    months: safeMonths,
    cashPrice,
    financedTotal,
    downPayment,
    monthlyInstallment,
    biweeklyInstallment
  };
}

function getSubcategories(category) {
  if (category === "Celulares") {
    return CELLPHONE_SUBCATEGORIES;
  }

  if (category === "Electrodomesticos") {
    return ELECTRODOMESTIC_SUBCATEGORIES;
  }

  const filtered = category === "all" ? products : products.filter((item) => item.category === category);
  return [...new Set(filtered.map((item) => item.subcategory))].sort((a, b) => a.localeCompare(b));
}

function isSameSubcategory(left, right) {
  return normalizeText(left) === normalizeText(right);
}

function isHomeViewActive() {
  return state.category === "all" && state.subcategory === "all" && state.search.trim().length === 0;
}

function findProductsByCategoryAndSubcategory(category, subcategory) {
  return products.filter((item) => item.category === category && isSameSubcategory(item.subcategory, subcategory));
}

function resolveExistingSubcategory(category, rawSubcategory) {
  if (!rawSubcategory || rawSubcategory === "all") {
    return "all";
  }

  const availableSubcategories = getSubcategories(category);
  const match = availableSubcategories.find((item) => isSameSubcategory(item, rawSubcategory));
  return match || "all";
}

function renderHomeSections() {
  if (!homeSections) {
    return;
  }

  const cardsMarkup = HOME_SECTION_LAYOUT.map((section) => {
    const categorySubcategories = [
      ...new Set(products.filter((item) => item.category === section.category).map((item) => item.subcategory))
    ];

    const preferredSubcategories = section.subcategories.filter(
      (subcategory) => findProductsByCategoryAndSubcategory(section.category, subcategory).length > 0
    );

    const fallbackSubcategories = categorySubcategories.filter(
      (subcategory) => !preferredSubcategories.some((item) => isSameSubcategory(item, subcategory))
    );

    const displaySubcategories = [...preferredSubcategories, ...fallbackSubcategories].slice(0, 4);

    const totalItems = displaySubcategories.reduce((accumulator, subcategory) => {
      return accumulator + findProductsByCategoryAndSubcategory(section.category, subcategory).length;
    }, 0);

    const tilesMarkup = displaySubcategories.map((subcategory) => {
      const subcategoryProducts = findProductsByCategoryAndSubcategory(section.category, subcategory);
      const featuredProduct = subcategoryProducts[0];
      const tileImage = featuredProduct ? getSafePrimaryImage(featuredProduct) : "";
      const tileMedia = tileImage
        ? `<span class="home-tile-media"><img src="${escapeAttribute(tileImage)}" alt="${escapeAttribute(subcategory)}" loading="lazy" /></span>`
        : `<span class="home-tile-media">${escapeHtml(subcategory.slice(0, 1).toUpperCase())}</span>`;

      return `
        <button
          class="home-tile"
          type="button"
          data-home-category="${escapeAttribute(section.category)}"
          data-home-subcategory="${escapeAttribute(subcategory)}"
        >
          ${tileMedia}
          <span class="home-tile-label">${escapeHtml(subcategory)}</span>
        </button>
      `;
    });

    return `
      <article class="home-card">
        <h3>${escapeHtml(section.title)}</h3>
        <p>${totalItems} artículo(s) disponibles</p>
        <div class="home-tile-grid">${tilesMarkup.join("")}</div>
        <button
          class="home-link"
          type="button"
          data-home-category="${escapeAttribute(section.category)}"
          data-home-subcategory="all"
        >
          ${escapeHtml(section.ctaLabel)}
        </button>
      </article>
    `;
  }).join("");

  homeSections.innerHTML = cardsMarkup;
}

function renderSubcategoryFilters() {
  const options = getSubcategories(state.category);
  const chips = ['<button class="chip active" data-filter-type="subcategory" data-filter-value="all">Todo</button>'];

  options.forEach((subcategory) => {
    chips.push(
      `<button class="chip" data-filter-type="subcategory" data-filter-value="${subcategory}">${subcategory}</button>`
    );
  });

  subcategoryFilters.innerHTML = chips.join("");
}

function getVisibleProducts() {
  const query = state.search.trim().toLowerCase();

  return products.filter((item) => {
    const matchCategory = state.category === "all" || item.category === state.category;
    const matchSubcategory = state.subcategory === "all" || item.subcategory === state.subcategory;
    const searchable = `${item.name} ${item.category} ${item.subcategory}`.toLowerCase();
    const matchSearch = query.length === 0 || searchable.includes(query);

    return matchCategory && matchSubcategory && matchSearch;
  });
}

function renderProducts() {
  const visible = getVisibleProducts();
  const homeViewActive = isHomeViewActive();
  const toRender = homeViewActive ? visible.slice(0, HOME_PREVIEW_LIMIT) : visible;

  if (productsTitle) {
    productsTitle.textContent = homeViewActive ? "Productos destacados" : "Resultados del catálogo";
  }

  if (homeViewActive && visible.length > toRender.length) {
    resultCounter.textContent = `Mostrando ${toRender.length} de ${visible.length} producto(s)`;
  } else {
    resultCounter.textContent = `${visible.length} producto(s) encontrados`;
  }

  if (toRender.length === 0) {
    productGrid.innerHTML = `
      <article class="empty">
        No encontramos productos con esos filtros. Prueba con otra marca, tipo o palabra.
      </article>
    `;
    return;
  }

  productGrid.innerHTML = toRender
    .map((item) => {
      const primaryImage = getSafePrimaryImage(item);
      const categoryLabel = escapeHtml(formatCategoryLabel(item.category));
      const subcategoryLabel = escapeHtml(item.subcategory);
      const productName = escapeHtml(item.name);
      const imageMarkup = primaryImage
        ? `<img src="${escapeAttribute(primaryImage)}" alt="${productName}" loading="lazy" />`
        : escapeHtml(item.icon);

      return `
      <article class="card product-card" data-product-id="${item.id}">
        <div class="card-image">${imageMarkup}</div>
        <div class="card-body">
          <span class="meta">${categoryLabel} | ${subcategoryLabel}</span>
            <h3 class="title">${productName}</h3>
            <span class="price">${formatPrice(item.price)}</span>
            <div class="card-actions">
              <button class="buy-btn" data-product-id="${item.id}" type="button">Pedir por WhatsApp</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function getBreadcrumbItems() {
  const hasSearch = state.search.trim().length > 0;
  const hasCategory = state.category !== "all";
  const hasSubcategory = state.subcategory !== "all" && hasCategory;

  if (isHomeViewActive() && !currentModalProduct) {
    return [{ label: "Inicio", isLink: false }];
  }

  const items = [
    { label: "Inicio", action: "home", isLink: true },
    { label: "Catálogo", action: "catalog", isLink: true }
  ];

  if (hasCategory) {
    items.push({
      label: formatCategoryLabel(state.category),
      action: "category",
      category: state.category,
      isLink: true
    });
  }

  if (hasSubcategory) {
    items.push({
      label: state.subcategory,
      action: "subcategory",
      category: state.category,
      subcategory: state.subcategory,
      isLink: true
    });
  }

  if (hasSearch) {
    items.push({ label: `Búsqueda: "${state.search.trim()}"`, isLink: false });
  }

  if (currentModalProduct) {
    items.push({ label: currentModalProduct.name, isLink: false });
  }

  return items;
}

function renderBreadcrumbs() {
  if (!breadcrumbsList) {
    return;
  }

  const items = getBreadcrumbItems();
  breadcrumbsList.innerHTML = items
    .map((item, index) => {
      const isLast = index === items.length - 1;
      const shouldRenderLink = item.isLink && !isLast;
      const categoryAttr = item.category ? ` data-crumb-category="${escapeAttribute(item.category)}"` : "";
      const subcategoryAttr = item.subcategory ? ` data-crumb-subcategory="${escapeAttribute(item.subcategory)}"` : "";
      const crumbMarkup = shouldRenderLink
        ? `<button class="crumb-link" type="button" data-crumb-action="${escapeAttribute(item.action || "")}"${categoryAttr}${subcategoryAttr}>${escapeHtml(item.label)}</button>`
        : `<span class="crumb-current">${escapeHtml(item.label)}</span>`;
      const separator = isLast ? "" : '<li class="crumb-separator" aria-hidden="true">/</li>';

      return `<li class="crumb-item">${crumbMarkup}</li>${separator}`;
    })
    .join("");
}

function syncCategoryUi() {
  categoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filterValue === state.category);
  });

  topCategoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === state.category);
  });
}

function syncSubcategoryUi() {
  document.querySelectorAll('[data-filter-type="subcategory"]').forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filterValue === state.subcategory);
  });
}

function updateView() {
  if (homeSectionsWrap) {
    homeSectionsWrap.classList.toggle("hidden", !isHomeViewActive());
  }

  renderHomeSections();
  renderProducts();
  renderBreadcrumbs();
  syncCategoryUi();
  syncSubcategoryUi();
}

async function refreshCatalog() {
  const previousCategory = state.category;
  const previousSubcategory = state.subcategory;
  const previousSearch = state.search;

  await loadProductsFromDataSources();
  renderHeroCarousel();

  state.category = previousCategory;
  state.search = previousSearch;

  const validSubcategories = getSubcategories(state.category);
  state.subcategory =
    previousSubcategory === "all" || validSubcategories.includes(previousSubcategory) ? previousSubcategory : "all";

  renderSubcategoryFilters();
  updateView();
}

function setModalImage(imageUrl, activeIndex) {
  const fallbackImage = "https://picsum.photos/seed/product-fallback/900/900";
  const safeImageUrl = imageUrl || fallbackImage;
  mainProductImage.onerror = () => {
    mainProductImage.onerror = null;
    mainProductImage.src = fallbackImage;
  };
  mainProductImage.src = safeImageUrl;
  document.querySelectorAll(".thumb-btn").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.imageIndex) === activeIndex);
  });
}

function renderModalGallery(images) {
  thumbGallery.innerHTML = images
    .map(
      (imageUrl, index) =>
        `<button class="thumb-btn ${index === 0 ? "active" : ""}" type="button" data-image-index="${index}" data-image-url="${escapeAttribute(imageUrl)}">
          <img src="${escapeAttribute(imageUrl)}" alt="Vista ${index + 1} del producto" loading="lazy" />
        </button>`
    )
    .join("");

  thumbGallery.querySelectorAll("img").forEach((imageElement, index) => {
    imageElement.onerror = () => {
      imageElement.onerror = null;
      imageElement.src = `https://picsum.photos/seed/thumb-fallback-${index + 1}/900/900`;
    };
  });

  setModalImage(images[0], 0);
}

function renderModalCredit(product) {
  const months = Number(modalCreditMonths.value);
  const plan = calculateCreditPlan(product, months);

  modalCreditResult.innerHTML = `
    <article class="result-item">
      <h4>Precio de contado</h4>
      <strong>${formatPrice(plan.cashPrice)}</strong>
    </article>
    <article class="result-item">
      <h4>Total financiado</h4>
      <strong>${formatPrice(plan.financedTotal)}</strong>
    </article>
    <article class="result-item">
      <h4>Prima</h4>
      <strong>${formatPrice(plan.downPayment)}</strong>
    </article>
    <article class="result-item">
      <h4>Cuota mensual</h4>
      <strong>${formatPrice(plan.monthlyInstallment)}</strong>
    </article>
    <article class="result-item focus">
      <h4>Cuota quincenal</h4>
      <strong>${formatPrice(plan.biweeklyInstallment)}</strong>
    </article>
  `;

}

function openProductDetails(product) {
  currentModalProduct = product;
  modalCategory.textContent = `${formatCategoryLabel(product.category)} | ${product.subcategory}`;
  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalCashPrice.textContent = formatPrice(product.price);
  modalSpecs.innerHTML = product.specs.map((spec) => `<li>${escapeHtml(spec)}</li>`).join("");

  modalCreditMonths.value = "12";
  renderModalGallery(product.images);
  renderModalCredit(product);

  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  renderBreadcrumbs();
}

function closeModal() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentModalProduct = null;
  renderBreadcrumbs();
}

function closeMobileMenu() {
  if (!subnavMenu || !menuToggle) {
    return;
  }

  subnavMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

if (menuToggle && subnavMenu) {
  menuToggle.addEventListener("click", () => {
    const shouldOpen = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(shouldOpen));
    subnavMenu.classList.toggle("open", shouldOpen);
  });
}

if (heroPrev) {
  heroPrev.addEventListener("click", () => {
    setHeroSlide(currentHeroSlideIndex - 1);
    startHeroAutoplay();
  });
}

if (heroNext) {
  heroNext.addEventListener("click", () => {
    setHeroSlide(currentHeroSlideIndex + 1);
    startHeroAutoplay();
  });
}

if (heroDots) {
  heroDots.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slide-index]");
    if (!button) {
      return;
    }

    setHeroSlide(Number(button.dataset.slideIndex));
    startHeroAutoplay();
  });
}

if (heroCarousel) {
  heroCarousel.addEventListener("mouseenter", stopHeroAutoplay);
  heroCarousel.addEventListener("mouseleave", startHeroAutoplay);
}

if (heroTrack) {
  heroTrack.addEventListener("click", (event) => {
    const slide = event.target.closest(".hero-slide");
    if (!slide) {
      return;
    }

    state.category = slide.dataset.slideCategory || "all";
    state.subcategory = resolveExistingSubcategory(state.category, slide.dataset.slideSubcategory || "all");
    state.search = "";
    if (searchInput) {
      searchInput.value = "";
    }

    renderSubcategoryFilters();
    updateView();
    closeMobileMenu();

    const catalogSection = document.getElementById("catalogo");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.filterValue;
    state.subcategory = "all";
    renderSubcategoryFilters();
    updateView();
  });
});

topCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.category = button.dataset.category;
    state.subcategory = "all";
    renderSubcategoryFilters();
    updateView();
    closeMobileMenu();
  });
});

if (subnavMenu) {
  subnavMenu.addEventListener("click", (event) => {
    if (event.target.closest(".subnav-link")) {
      closeMobileMenu();
    }
  });
}

if (breadcrumbsList) {
  breadcrumbsList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-crumb-action]");
    if (!button) {
      return;
    }

    const action = button.dataset.crumbAction;
    if (currentModalProduct) {
      closeModal();
    }

    if (action === "home") {
      state.category = "all";
      state.subcategory = "all";
      state.search = "";
      if (searchInput) {
        searchInput.value = "";
      }

      renderSubcategoryFilters();
      updateView();
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action === "catalog") {
      state.category = "all";
      state.subcategory = "all";
      state.search = "";
      if (searchInput) {
        searchInput.value = "";
      }

      renderSubcategoryFilters();
      updateView();
      const catalogSection = document.getElementById("catalogo");
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    if (action === "category") {
      state.category = button.dataset.crumbCategory || "all";
      state.subcategory = "all";
      state.search = "";
      if (searchInput) {
        searchInput.value = "";
      }

      renderSubcategoryFilters();
      updateView();
      return;
    }

    if (action === "subcategory") {
      state.category = button.dataset.crumbCategory || "all";
      state.subcategory = resolveExistingSubcategory(state.category, button.dataset.crumbSubcategory || "all");
      state.search = "";
      if (searchInput) {
        searchInput.value = "";
      }

      renderSubcategoryFilters();
      updateView();
    }
  });
}

if (homeSectionsWrap) {
  homeSectionsWrap.addEventListener("click", (event) => {
    const target = event.target.closest("[data-home-category]");
    if (!target) {
      return;
    }

    state.category = target.dataset.homeCategory || "all";
    state.subcategory = resolveExistingSubcategory(state.category, target.dataset.homeSubcategory || "all");
    state.search = "";
    if (searchInput) {
      searchInput.value = "";
    }

    renderSubcategoryFilters();
    updateView();
    closeMobileMenu();

    const catalogSection = document.getElementById("catalogo");
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

subcategoryFilters.addEventListener("click", (event) => {
  const element = event.target;
  if (!element.matches('[data-filter-type="subcategory"]')) {
    return;
  }

  state.subcategory = element.dataset.filterValue;
  updateView();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  updateView();
});

if (searchActionButton) {
  searchActionButton.addEventListener("click", () => {
    state.search = searchInput ? searchInput.value : "";
    updateView();
    if (searchInput) {
      searchInput.focus();
    }
  });
}

if (refreshCatalogButton) {
  refreshCatalogButton.addEventListener("click", async () => {
    const originalText = refreshCatalogButton.textContent;
    refreshCatalogButton.disabled = true;
    refreshCatalogButton.textContent = "Actualizando...";

    try {
      await refreshCatalog();
    } catch (error) {
      console.error("No se pudo actualizar el catálogo:", error);
    } finally {
      refreshCatalogButton.disabled = false;
      refreshCatalogButton.textContent = originalText;
    }
  });
}

if (whatsappButton) {
  whatsappButton.addEventListener("click", () => {
    openWhatsApp("Hola ElectroShop, quiero informacion sobre sus productos.");
  });
}

productGrid.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (button) {
    const productId = Number(button.dataset.productId);
    const product = products.find((item) => item.id === productId);
    if (!product) {
      return;
    }

      if (button.matches(".buy-btn")) {
        openWhatsApp(buildInterestMessage(product));
        return;
      }
    }

  const card = event.target.closest(".product-card");
  if (!card) {
    return;
  }

  const productId = Number(card.dataset.productId);
  const product = products.find((item) => item.id === productId);
  if (product) {
    openProductDetails(product);
  }
});

if (modalCreditForm) {
  modalCreditForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!currentModalProduct) {
      return;
    }

    renderModalCredit(currentModalProduct);
  });
}

if (modalCreditMonths) {
  modalCreditMonths.addEventListener("change", () => {
    if (!currentModalProduct) {
      return;
    }

    renderModalCredit(currentModalProduct);
  });
}

if (modalCreditWhatsapp) {
  modalCreditWhatsapp.addEventListener("click", () => {
    if (!currentModalProduct) {
      return;
    }

    openWhatsApp(buildCreditMessage(currentModalProduct, modalCreditMonths.value));
  });
}

if (thumbGallery) {
  thumbGallery.addEventListener("click", (event) => {
    const button = event.target.closest(".thumb-btn");
    if (!button) {
      return;
    }

    setModalImage(button.dataset.imageUrl, Number(button.dataset.imageIndex));
  });
}

if (closeProductModal) {
  closeProductModal.addEventListener("click", closeModal);
}

if (productModal) {
  productModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && productModal.classList.contains("open")) {
    closeModal();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) {
    closeMobileMenu();
  }
});

async function initializeStore() {
  await loadProductsFromDataSources();
  renderHeroCarousel();
  renderSubcategoryFilters();
  updateView();
}

initializeStore();

