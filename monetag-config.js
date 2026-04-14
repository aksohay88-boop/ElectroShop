/*
  Configuracion de Monetag (preparada para activar cuando publiques).
  Pasos:
  1) Crea tu cuenta y sitio en Monetag.
  2) Copia el tag exacto que te da Monetag.
  3) Pegalo en `rawHeadTagHtml` (o usa scriptUrl + scriptAttributes).
  4) Cambia `enabled` a true.
*/
window.MONETAG_SETUP = {
  // Cambiar a false si quieres pausar anuncios temporalmente.
  enabled: true,

  // Muestra mensajes de diagnostico en consola (recomendado mientras configuras).
  debug: true,

  // Opcion recomendada: pega aqui el HTML del tag que entrega Monetag para <head>.
  // Pega el tag completo entre las comillas invertidas (backticks) para evitar errores por comillas.
  // Tag activo de Monetag.
  rawHeadTagHtml: `<script src="https://quge5.com/88/tag.min.js" data-zone="229526" async data-cfasync="false"></script>`,

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
  // Desactivado temporalmente porque el sw.js actual no coincide con este tag.
  // Activalo cuando subas el sw.js de la misma zona 229526.
  registerServiceWorker: false,
  serviceWorkerPath: "/sw.js"
};
