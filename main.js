// Classic-script loader. The widget itself is an ES module split into chunks
// under ./esm/, so sites keep one plain tag:
//   <div id="chat-widget" data-key="WIDGET_ID"></div>
//   <script src="https://cdn.jsdelivr.net/gh/helio-ai/widget@<version>/main.js" defer></script>
// Generated files live in ./esm/ (apps/craft: npm run build:widget:cdn). Do not overwrite this file with a build.
(function () {
  var self =
    document.currentScript ||
    document.querySelector('script[src*="helio-ai/widget"][src$="main.js"]');
  if (!self || !self.src) return;

  var script = document.createElement('script');
  script.type = 'module';
  script.src = new URL('esm/main.js', self.src).href;
  document.head.appendChild(script);
})();
