import { useEffect } from 'react';
import { useHeroTextAnimation } from './useHeroTextAnimation';
import { useNavMarqueeScroll } from './useNavMarqueeScroll';
import { useBannerAnimation } from './useBannerAnimation';
import { useGreenScrollEffect } from './useGreenScrollEffect';
import { useAutomationPopText } from './useAutomationPopText';
import { useCookieTracking } from './useCookieTracking';
import { useSectionReveal } from './useSectionReveal';
import { initGlobalLibraries, loadChargeflowEffects } from '../lib/initLibraries';

/** Orchestrates all client-side effects — no external CDN scripts */
export function useSiteEffects(): void {
  useHeroTextAnimation();
  useNavMarqueeScroll();
  useBannerAnimation();
  useGreenScrollEffect();
  useAutomationPopText();
  useCookieTracking();
  useSectionReveal();

  useEffect(() => {
    let cancelled = false;

    async function bootstrap() {
      try {
        initGlobalLibraries();
        if (cancelled) return;
        await loadChargeflowEffects();
        if (cancelled) return;
        document.documentElement.classList.add('lottie-loaded', 'w-mod-ix3', 'w-mod-ix');
        window.ScrollTrigger?.refresh();
      } catch (e) {
        console.warn('Effects bootstrap:', e);
      }
    }

    bootstrap();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const imgs = document.querySelectorAll('img:not([loading])');
    imgs.forEach((img, i) => {
      if (i < 2) return;
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
    });
  }, []);
}
