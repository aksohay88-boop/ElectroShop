/*
  Configuracion de Monetag en modo NO intrusivo.
  Objetivo:
  - Evitar popunder/interstitial.
  - Mostrar anuncios solo dentro de contenedores visibles del sitio.

  Como activarlo:
  1) En Monetag, crea zonas de formato no intrusivo (Banner o In-Page Push).
  2) Pega cada tag en `rawTagHtml` dentro de `placements`.
  3) Cambia `enabled` a true.
*/
window.MONETAG_SETUP = {
  // Desactivado temporalmente para evitar anuncios intrusivos
  // hasta contar con un tag de banner aprobado.
  enabled: false,
  debug: false,

  // Solo se permiten anuncios en contenedores del sitio.
  mode: "non_intrusive",

  // Patrones bloqueados para evitar formatos intrusivos por codigo.
  blockedScriptPatterns: ["vignette.min.js", "popunder", "interstitial"],

  // Si vienes de una configuracion anterior, esto limpia workers antiguos de anuncios.
  unregisterServiceWorkerWhenDisabled: true,
  registerServiceWorker: false,
  serviceWorkerPath: "/sw.js",

  // Espacios de anuncios integrados en el diseno (inicio / catalogo / modal).
  placements: [
    {
      id: "home_inline",
      selector: "#ad-slot-home-inline",
      rawTagHtml: ""
    },
    {
      id: "catalog_inline",
      selector: "#ad-slot-catalog-inline",
      rawTagHtml: ""
    },
    {
      id: "product_modal_inline",
      selector: "#ad-slot-product-inline",
      rawTagHtml: ""
    }
  ],

  // Tag intrusivo guardado en historial pero desactivado.
  intrusiveTags: {}
};
