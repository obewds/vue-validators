const e = [
  "up",
  "down",
  "left",
  "right",
  ""
], t = [
  "address",
  "article",
  "aside",
  "blockquote",
  "details",
  "dialog",
  "dd",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  /*'hr',*/
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "pre",
  "section",
  "table",
  "ul"
], a = [
  "bottom",
  "top"
], o = [
  "button",
  "submit",
  "reset"
], s = [
  // HTML Main root element
  /*'html',*/
  // HTML Document metadata elements
  /*'base',*/
  /*'head',*/
  /*'link',*/
  /*'meta',*/
  "style",
  "title",
  // HTML Sectioning root element
  /*'body',*/
  // HTML Content sectioning elements
  "address",
  "article",
  "aside",
  "footer",
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "main",
  "nav",
  "section",
  // HTML Text content elements
  "blockquote",
  "dd",
  "div",
  "dl",
  "dt",
  "figcaption",
  "figure",
  /*'hr',*/
  "li",
  "menu",
  "ol",
  "p",
  "pre",
  "ul",
  // HTML Inline text semantic elements
  "a",
  "abbr",
  "b",
  "bdi",
  "bdo",
  /*'br',*/
  "cite",
  "code",
  "data",
  "dfn",
  "em",
  "i",
  "kbd",
  "mark",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "time",
  "u",
  "var",
  /*'wbr',*/
  // HTML Image and multimedia elements
  /*'area',*/
  "audio",
  /*'img',*/
  "map",
  /*'track',*/
  "video",
  // HTML Embedded content elements
  /*'embed',*/
  "iframe",
  "object",
  /*'param',*/
  "picture",
  "portal",
  /*'source',*/
  // HTML SVG and MathML elements
  "svg",
  "math",
  // HTML Scripting  elements
  "canvas",
  /*'noscript',*/
  /*'script',*/
  // HTML Demarcating edits elements
  "del",
  "ins",
  // HTML Table content elements
  "caption",
  /*'col',*/
  "colgroup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  // HTML Forms elements
  "button",
  "datalist",
  "fieldset",
  "form",
  /*'input',*/
  "label",
  "legend",
  "meter",
  "optgroup",
  "option",
  "output",
  "progress",
  "select",
  "textarea",
  // HTML Interactive elements
  "details",
  "dialog",
  "summary"
  // HTML Web Components elements
  /*'slot',*/
  /*'template',*/
], i = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
], d = [
  "fab",
  "fad",
  "fal",
  "far",
  "fas",
  "fat"
], r = [
  "xs",
  "sm",
  "1x",
  // '1x' is effectively size 'md' - aka icon size inherits font size
  "lg",
  "2x",
  "3x",
  "4x",
  "5x",
  "6x",
  "7x",
  "8x",
  "9x",
  "10x"
], l = [
  1,
  2,
  3,
  4,
  5,
  6
], n = [
  "a",
  "abbr",
  "acronym",
  "audio",
  // if it has visible controls
  "b",
  "bdi",
  "bdo",
  "big",
  /*'br',*/
  "button",
  "canvas",
  "cite",
  "code",
  "data",
  "datalist",
  "del",
  "dfn",
  "em",
  /*'embed',*/
  "i",
  "iframe",
  /*'img',*/
  /*'input',*/
  "ins",
  "kbd",
  "label",
  "map",
  "mark",
  "meter",
  /*'noscript',*/
  "object",
  "output",
  "picture",
  "progress",
  "q",
  "ruby",
  "s",
  "samp",
  /*'script',*/
  "select",
  /*'slot',*/
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "svg",
  /*'template',*/
  "textarea",
  "time",
  "u",
  "tt",
  "var",
  "video"
  /*'wbr',*/
], m = [
  // 'button',
  // 'checkbox',
  "color",
  "date",
  "datetime-local",
  "email",
  // 'file',
  // 'hidden',
  // 'image',
  "month",
  "number",
  "password",
  // 'radio',
  // 'range',
  // 'reset',
  "search",
  // 'submit',
  "tel",
  "text",
  "time",
  "url"
  // 'week',
], c = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
], p = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
], u = [
  "video/mp4",
  "video/ogg",
  "video/webm"
], b = [
  "body",
  "head",
  "html",
  "noscript",
  "script",
  "slot",
  "template"
];
export {
  e as animationDirections,
  t as blockLevelElementTags,
  a as blockOrders,
  o as buttonTypes,
  s as elementTags,
  i as emptyElementTags,
  d as fontAwesomeFamilies,
  r as fontAwesomeSizes,
  l as headingLevels,
  n as inlineLevelElementTags,
  m as inputTypes,
  c as sourceAudioTypes,
  p as sourceImageTypes,
  u as sourceVideoTypes,
  b as unsupportedElementTags
};
