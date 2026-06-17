import { useEffect } from 'react';

/** Automation grid pop-text animation on scroll */
export function useAutomationPopText(): void {
  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.gsap) return;
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      const wrapper = document.querySelector('[automation-grid--2]');
      const items = document.querySelectorAll('[automation-pop-text--2]');
      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      if (isMobile) {
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: '2.5rem' },
            {
              scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play none none reverse' },
              opacity: 1,
              y: '0rem',
              duration: 0.5,
              ease: 'Quad.easeOut',
            },
          );
        });
      } else if (wrapper) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: wrapper,
              start: '75% center',
              toggleActions: 'play none none reverse',
            },
          })
          .fromTo(
            '[automation-pop-text--2]',
            { opacity: 0, y: '2.5rem' },
            { opacity: 1, y: '0rem', duration: 0.5, ease: 'Quad.easeOut', stagger: 0.1 },
            0,
          )
          .to(
            '[automation-main-text--2]',
            { opacity: 0.2, duration: 0.5, ease: 'Quad.easeOut', stagger: 0.1 },
            0,
          );
      }
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
