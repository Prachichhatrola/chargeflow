import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { SplitText } from 'gsap/SplitText';
import lottie from 'lottie-web';
import jQuery from 'jquery';

/** Expose animation libraries globally for chargeflow-effects.js and legacy hooks */
export function initGlobalLibraries(): void {
  window.gsap = gsap;
  window.ScrollTrigger = ScrollTrigger;
  window.DrawSVGPlugin = DrawSVGPlugin;
  window.MotionPathPlugin = MotionPathPlugin;
  window.SplitText = SplitText as unknown as typeof window.SplitText;
  window.lottie = lottie as unknown as typeof window.lottie;
  window.jQuery = jQuery;
  window.$ = jQuery;

  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, SplitText);
}

export async function loadChargeflowEffects(): Promise<void> {
  await loadChargeflowEffectsScript();
}

import { loadChargeflowEffectsScript } from './loadScript';

declare global {
  interface Window {
    gsap: typeof gsap;
    ScrollTrigger: typeof ScrollTrigger;
    DrawSVGPlugin: typeof DrawSVGPlugin;
    MotionPathPlugin: typeof MotionPathPlugin;
    SplitText: new (target: Element | string, vars?: object) => { lines: Element[]; revert: () => void };
    lottie: {
      loadAnimation: (opts: {
        container: Element;
        renderer: string;
        loop: boolean;
        autoplay: boolean;
        path?: string;
        animationData?: object;
      }) => { destroy: () => void };
    };
    jQuery: typeof jQuery;
    $: typeof jQuery;
  }
}
