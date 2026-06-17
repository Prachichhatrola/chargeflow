/** Local asset helpers — all assets served from /assets/ in public/ */
export function assetUrl(localPath: string): string {
  if (localPath.startsWith('/assets/')) return localPath;
  if (localPath.startsWith('assets/')) return '/' + localPath;
  return localPath;
}

const lottieCache = new Map<string, unknown>();

export async function lottieData(localPath: string): Promise<unknown> {
  const path = assetUrl(localPath);
  if (lottieCache.has(path)) return lottieCache.get(path);
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load lottie: ${path}`);
  const data = await res.json();
  lottieCache.set(path, data);
  return data;
}

export function lottieDataSync(localPath: string): unknown {
  return lottieCache.get(assetUrl(localPath));
}
