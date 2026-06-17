import { useEffect } from 'react';

const DAYS = 30;

function getReadableUrl(url: string): string {
  const parsed = new URL(url);
  return `${parsed.protocol}//${parsed.host}${parsed.pathname}`;
}

function setCookie(name: string, value: string, days: number): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/; SameSite=Lax`;
}

function getCookies(): Record<string, string> {
  return document.cookie.split('; ').reduce<Record<string, string>>((acc, cookie) => {
    const [name, value] = cookie.split('=');
    if (name) acc[name] = decodeURIComponent(value ?? '');
    return acc;
  }, {});
}

/** UTM / landing page cookie tracking from original script */
export function useCookieTracking(): void {
  useEffect(() => {
    const cookies = getCookies();
    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
      if (cookies[key]) return;
      setCookie(key, value, DAYS);
    });
    setCookie('cf_page_visited', 'true', DAYS);
    setCookie('referrer', document.referrer, DAYS);

    if (!cookies.initial_landing_page) {
      setCookie('initial_landing_page', getReadableUrl(window.location.href), DAYS);
      setCookie('initial_landing_page_timestamp', new Date().toISOString(), DAYS);
    }

    const onLoad = () => {
      setCookie('last_landing_page', window.location.href, DAYS);
      setCookie('last_landing_page_timestamp', new Date().toISOString(), DAYS);
    };

    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);
}
