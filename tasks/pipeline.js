// Js files to inject in `layout/_partial/script.ejs`
var hydexoJsFilesToInject = [
  'jquery.js',
  'jquery.fancybox.js',
  'jquery.fancybox-thumbs.js',
  'hydexo.js'
];

// Css files to inject in `layout/_partial/head.ejs`
var hydexoCssFilesToInject = [
  'font-awesome.css',
  'jquery.fancybox.css',
  'jquery.fancybox-thumbs.css',
  'hydexo.css'
];

module.exports.hydexoCssFilesToInject = hydexoCssFilesToInject.map(function(path) {
  return 'source/assets/css/' + path;
});

module.exports.hydexoJsFilesToInject = hydexoJsFilesToInject.map(function(path) {
  return 'source/assets/js/' + path;
});
