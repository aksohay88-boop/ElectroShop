(() => {
  const BUILD = "2026-05-25-1";

  function normalizeGooglePhotoUrl(rawUrl) {
    const value = String(rawUrl || "").trim();
    if (!/^https?:\/\/lh3\.googleusercontent\.com\/pw\//i.test(value)) {
      return value;
    }
    if (/[\?&]authuser=/i.test(value)) {
      return value;
    }
    return `${value}${value.includes("?") ? "&" : "?"}authuser=0`;
  }

  function patchImageElement(img) {
    if (!(img instanceof HTMLImageElement)) {
      return;
    }

    const normalizedSrc = normalizeGooglePhotoUrl(img.getAttribute("src") || img.src || "");
    if (normalizedSrc && normalizedSrc !== img.getAttribute("src")) {
      img.setAttribute("src", normalizedSrc);
    }

    // Algunos hosts (como Google Photos) pueden fallar con CORS anónimo en img simple.
    if (img.hasAttribute("crossorigin")) {
      img.removeAttribute("crossorigin");
    }
    try {
      img.crossOrigin = null;
    } catch (error) {
      // Ignorar.
    }
  }

  function patchAllImages(root = document) {
    root.querySelectorAll("img").forEach((img) => patchImageElement(img));
  }

  function observeDynamicImages() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.target instanceof HTMLImageElement) {
          patchImageElement(mutation.target);
          return;
        }

        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLImageElement) {
            patchImageElement(node);
            return;
          }
          if (node instanceof HTMLElement) {
            patchAllImages(node);
          }
        });
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["src", "crossorigin"],
      childList: true,
      subtree: true
    });
  }

  function init() {
    patchAllImages();
    observeDynamicImages();
    console.info("[ElectroShop] Runtime fixes loaded", BUILD);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

