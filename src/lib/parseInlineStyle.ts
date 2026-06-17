import type { CSSProperties } from 'react';

/** Parse HTML style attribute string to React CSSProperties (preserves Webflow IX initial states) */
export function parseInlineStyle(css: string): CSSProperties {
  const result: Record<string, string> = {};
  css.split(';').forEach((part) => {
    const colon = part.indexOf(':');
    if (colon === -1) return;
    const key = part.slice(0, colon).trim();
    const value = part.slice(colon + 1).trim();
    if (!key || !value) return;
    const camelKey = key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    result[camelKey] = value;
  });
  return result as CSSProperties;
}
