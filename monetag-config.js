/*
  Configuracion de Monetag (preparada para activar cuando publiques).
  Pasos:
  1) Crea tu cuenta y sitio en Monetag.
  2) Copia el tag exacto que te da Monetag.
  3) Pegalo en `rawHeadTagHtml` (o usa scriptUrl + scriptAttributes).
  4) Cambia `enabled` a true.
*/
window.MONETAG_SETUP = {
  enabled: false,

  // Opcion recomendada: pega aqui el HTML del tag que entrega Monetag para <head>.
  // Ejemplo:
  // rawHeadTagHtml: '<script async src="..."></script>',
  rawHeadTagHtml: "",

  // Opcion alternativa si prefieres separar URL + atributos.
  scriptUrl: "",
  scriptAttributes: {
    // "data-zone": "TU_ZONE_ID",
    // "data-cfasync": "false"
  },

  // Si Monetag te entrega un script inline adicional, pegalo aqui.
  inlineScript: "",

  // Opcional: meta tag de verificacion (si Monetag lo solicita).
  verificationMetaName: "",
  verificationMetaContent: "",

  // Service Worker de Monetag (archivo en la raiz del sitio).
  // Se registrara solo cuando `enabled` sea true.
  registerServiceWorker: true,
  serviceWorkerPath: "/sw.js"
};
