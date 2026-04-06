(function initializeMonetag() {
  "use strict";

  function appendScriptFromConfig(scriptUrl, scriptAttributes) {
    if (!scriptUrl) {
      return;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;

    if (scriptAttributes && typeof scriptAttributes === "object") {
      Object.entries(scriptAttributes).forEach(([key, value]) => {
        if (value === undefined || value === null || value === "") {
          return;
        }
        script.setAttribute(key, String(value));
      });
    }

    document.head.appendChild(script);
  }

  function appendInlineScript(inlineScript) {
    if (!inlineScript) {
      return;
    }

    const script = document.createElement("script");
    script.textContent = String(inlineScript);
    document.head.appendChild(script);
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
      document.head.appendChild(script);
    });

    return true;
  }

  function registerServiceWorker(serviceWorkerPath) {
    if (!serviceWorkerPath || typeof navigator === "undefined") {
      return;
    }

    if (!("serviceWorker" in navigator)) {
      return;
    }

    const isLocalhost = /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
    if (!window.isSecureContext && !isLocalhost) {
      return;
    }

    navigator.serviceWorker.register(String(serviceWorkerPath)).catch((error) => {
      console.error("No se pudo registrar el service worker de Monetag:", error);
    });
  }

  const config = window.MONETAG_SETUP || {};

  appendVerificationMeta(config.verificationMetaName, config.verificationMetaContent);

  if (!config.enabled) {
    return;
  }

  if (config.registerServiceWorker) {
    registerServiceWorker(config.serviceWorkerPath || "/sw.js");
  }

  const rawTagWasInjected = appendRawHeadTagHtml(config.rawHeadTagHtml);
  if (!rawTagWasInjected) {
    appendScriptFromConfig(config.scriptUrl, config.scriptAttributes);
    appendInlineScript(config.inlineScript);
  }
})();
