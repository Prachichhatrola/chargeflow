/** Load a script tag and return a promise when loaded */
export function loadScript(
  src: string,
  options: { type?: string; defer?: boolean; async?: boolean } = {},
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    if (options.type) script.type = options.type;
    if (options.defer) script.defer = true;
    if (options.async) script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });
}

/** Load local chargeflow effects bundle from public/ */
export function loadChargeflowEffectsScript(): Promise<void> {
  return loadScript('/assets/js/chargeflow-effects.js', { type: 'module', defer: true });
}
