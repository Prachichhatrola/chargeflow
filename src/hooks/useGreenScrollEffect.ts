import { useEffect } from 'react';

/** Green highlight scale/color on scroll for .cc-green500-onscroll */
export function useGreenScrollEffect(): void {
  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.gsap) return;
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.cc-green500-onscroll').forEach((el) => {
        gsap.fromTo(
          el as Element,
          { scale: 1, color: '#fff' },
          {
            scale: 1.05,
            color: '#c3f967',
            duration: 0.3,
            ease: 'ease.out',
            scrollTrigger: {
              trigger: el as Element,
              start: 'top 55%',
              end: 'top 45%',
              toggleActions: 'play reverse play reverse',
              scrub: false,
            },
          },
        );
      });
    };

    const id = window.setInterval(() => {
      if (window.gsap && window.ScrollTrigger) {
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
