import { useEffect } from 'react';

/** Hero text-animation="1" and text-animation="2" – GSAP SplitText reveal */
export function useHeroTextAnimation(): void {
  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.gsap || !window.SplitText) return;

      const { gsap, SplitText, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger, SplitText);

      const heroEl = document.querySelector('[text-animation="1"]');
      if (!heroEl) return;

      const split = new SplitText(heroEl, { type: 'lines', linesClass: 'line' });
      gsap.from(split.lines, {
        y: '100%',
        autoAlpha: 0,
        filter: 'blur(15px)',
        duration: 1.5,
        ease: 'power3.out',
        delay: 1.2,
        stagger: 0.05,
      });

      document.querySelectorAll('[text-animation="2"]').forEach((element) => {
        const split = new SplitText(element, { type: 'lines', linesClass: 'line' });
        gsap.from(split.lines, {
          y: '100%',
          autoAlpha: 0,
          filter: 'blur(15px)',
          duration: 1.5,
          ease: 'power3.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: element,
            start: 'center bottom-=5%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    };

    const id = window.setInterval(() => {
      if (window.gsap && window.SplitText) {
        window.clearInterval(id);
        init();
      }
    }, 100);

    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);
}
