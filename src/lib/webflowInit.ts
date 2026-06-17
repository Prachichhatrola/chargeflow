/** Webflow document class initialization – matches original inline script */
export function initWebflowDocumentClasses(): void {
  const docEl = document.documentElement;
  const prefix = ' w-mod-';
  docEl.className += prefix + 'js';
  if ('ontouchstart' in window) {
    docEl.className += prefix + 'touch';
  }
}
