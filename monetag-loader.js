(function initializeMonetag() {
  "use strict";

  const config = window.MONETAG_SETUP || {};
  const debugEnabled = config.debug === true;
  const status = {
    enabled: Boolean(config.enabled),
    headTagInjected: false,
    scriptUrlInjected: false,
    inlineInjected: false,
    serviceWorkerAttempted: false,
    serviceWorkerRegistered: false,
    serviceWorkerUnregisterAttempted: false,
    serviceWorkerUnregisteredCount: 0,
    warnings: []
  };

  window.MONETAG_STATUS = status;

  function logDebug(message, ...rest) {
    if (!debugEnabled) {
      return;
    }

    console.info("[Monetag]", message, ...rest);
  }

  function warn(message, ...rest) {
    status.warnings.push(String(message));
    console.warn("[Monetag]", message, ...rest);
  }

  function appendScriptFromConfig(scriptUrl, scriptAttributes) {
    if (!scriptUrl) {
      return false;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    script.addEventListener("load", () => {
      logDebug(`Script cargado correctamente: ${scriptUrl}`);
    });
    script.addEventListener("error", () => {
      warn(`No se pudo cargar el script de Monetag: ${scriptUrl}`);
    });

    if (scriptAttributes && typeof scriptAttributes === "object") {
      Object.entries(scriptAttributes).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "") {
          return;
        }
        script.setAttribute(key, String(value));
      });
    }

    document.head.appendChild(script);
    return true;
  }

  function appendInlineScript(inlineScript) {
    if (!inlineScript) {
      return false;
    }

    const script = document.createElement("script");
    script.textContent = String(inlineScript);
    document.head.appendChild(script);
    return true;
  }

  function appendVerificationMeta(name, content) {
    if (!name || !content) {
      return;
    }

    const existing = document.querySelector(`meta[name="${name}"]`);
    if (existing) {
      existing.setAttribute("content", content);
      return;
    }

    const meta = document.createElement("meta");
    meta.setAttribute("name", String(name));
    meta.setAttribute("content", String(content));
    document.head.appendChild(meta);
  }

  function appendRawHeadTagHtml(rawHtml) {
    if (!rawHtml) {
      return false;
    }

    const template = document.createElement("template");
    template.innerHTML = String(rawHtml).trim();
    const nodes = Array.from(template.content.childNodes);

    if (nodes.length === 0) {
      return false;
    }

    nodes.forEach((node) => {
      if (node.nodeType !== Node.ELEMENT_NODE) {
        return;
      }

      if (node.tagName.toLowerCase() !== "script") {
        document.head.appendChild(node.cloneNode(true));
        return;
      }

      const script = document.createElement("script");
      Array.from(node.attributes).forEach((attribute) => {
        script.setAttribute(attribute.name, attribute.value);
      });
      script.textContent = node.textContent || "";

      const scriptSrc = script.getAttribute("src");
      if (scriptSrc) {
        script.addEventListener("load", () => {
          logDebug(`Script cargado correctamente: ${scriptSrc}`);
        });
        script.addEventListener("error", () => {
          warn(`No se pudo cargar el script de Monetag: ${scriptSrc}`);
        });
      }

      document.head.appendChild(script);
    });

    return true;
  }

  function registerServiceWorker(serviceWorkerPath) {
    status.serviceWorkerAttempted = true;

    if (!serviceWorkerPath || typeof navigator === "undefined") {
      warn("No se pudo registrar Service Worker: ruta no valida o navegador no compatible.");
      return;
    }

    if (!("serviceWorker" in navigator)) {
      warn("Este navegador no soporta Service Worker.");
      return;
    }

    const isLocalhost = /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
    if (!window.isSecureContext && !isLocalhost) {
      warn("Service Worker requiere HTTPS en produccion.");
      return;
    }

    navigator.serviceWorker
      .register(String(serviceWorkerPath))
      .then(() => {
        status.serviceWorkerRegistered = true;
        logDebug(`Service Worker registrado en: ${serviceWorkerPath}`);
      })
      .catch((error) => {
        warn("No se pudo registrar el Service Worker de Monetag.");
        console.error("No se pudo registrar el service worker de Monetag:", error);
      });
  }

  function getWorkerScriptUrl(registration) {
    return (
      registration?.active?.scriptURL || registration?.waiting?.scriptURL || registration?.installing?.scriptURL || ""
    );
  }

  function resolvePathname(urlLike) {
    try {
      return new URL(String(urlLike), window.location.origin).pathname;
    } catch (error) {
      return String(urlLike || "");
    }
  }

  function unregisterServiceWorkersByPath(serviceWorkerPath) {
    status.serviceWorkerUnregisterAttempted = true;

    if (!serviceWorkerPath || typeof navigator === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    const expectedPathname = resolvePathname(serviceWorkerPath);
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => {
        const targets = registrations.filter((registration) => {
          const workerPathname = resolvePathname(getWorkerScriptUrl(registration));
          return workerPathname === expectedPathname;
        });

        if (targets.length === 0) {
          return Promise.resolve([]);
        }

        return Promise.all(
          targets.map((registration) =>
            registration.unregister().then((didUnregister) => (didUnregister ? 1 : 0))
          )
        );
      })
      .then((results) => {
        if (!Array.isArray(results)) {
          return;
        }

        const total = results.reduce((sum, value) => sum + value, 0);
        status.serviceWorkerUnregisteredCount = total;
        if (total > 0) {
          logDebug(`Service Worker desregistrado (${total}) para ruta: ${expectedPathname}`);
        }
      })
      .catch((error) => {
        warn("No se pudo desregistrar el Service Worker existente.");
        console.error("No se pudo desregistrar el service worker:", error);
      });
  }

  appendVerificationMeta(config.verificationMetaName, config.verificationMetaContent);

  if (!config.enabled) {
    logDebug("Monetag esta desactivado en la configuracion.");
    return;
  }

  if (/^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname)) {
    warn("Estas probando en localhost. Algunos formatos pueden no mostrar anuncios.");
  }

  if (navigator?.brave) {
    warn("Brave Shield puede bloquear scripts de anuncios. Prueba en una ventana sin bloqueadores.");
  }

  const hasRawTag = String(config.rawHeadTagHtml || "").trim().length > 0;
  const hasScriptUrl = String(config.scriptUrl || "").trim().length > 0;
  const hasInlineScript = String(config.inlineScript || "").trim().length > 0;
  if (!hasRawTag && !hasScriptUrl && !hasInlineScript) {
    warn(
      "Monetag esta activado, pero falta el Ad Tag. Pega el tag en rawHeadTagHtml o completa scriptUrl."
    );
  }

  if (config.registerServiceWorker) {
    registerServiceWorker(config.serviceWorkerPath || "/sw.js");
  } else if (config.unregisterServiceWorkerWhenDisabled !== false) {
    unregisterServiceWorkersByPath(config.serviceWorkerPath || "/sw.js");
  }

  const rawTagWasInjected = appendRawHeadTagHtml(config.rawHeadTagHtml);
  status.headTagInjected = rawTagWasInjected;
  if (!rawTagWasInjected) {
    status.scriptUrlInjected = appendScriptFromConfig(config.scriptUrl, config.scriptAttributes);
    status.inlineInjected = appendInlineScript(config.inlineScript);
  }

  if (!status.headTagInjected && !status.scriptUrlInjected && !status.inlineInjected) {
    warn("No se inyecto ningun script de anuncios de Monetag.");
  }

  logDebug("Estado de Monetag:", status);
})();
