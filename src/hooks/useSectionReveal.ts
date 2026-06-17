import { useEffect } from 'react';

/** GSAP ScrollTrigger animations for section reveals */
export function useSectionReveal(): void {
  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.gsap) return;
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      // Reveal animations for elements with [data-reveal="box"]
      gsap.utils.toArray('[data-reveal="box"]').forEach((el) => {
        gsap.fromTo(
          el as Element,
          { 
            y: 50, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el as Element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      // Reveal animations for elements with [data-reveal="small-title"]
      gsap.utils.toArray('[data-reveal="small-title"]').forEach((el) => {
        gsap.fromTo(
          el as Element,
          { 
            y: 30, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el as Element,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      // Staggered reveal for card grids
      gsap.utils.toArray('.c-cards-solution-wrapper, .c-bento-grid, .c-cs_tab-wrapper').forEach((container) => {
        const items = (container as Element).querySelectorAll(':scope > *');
        gsap.fromTo(
          items,
          { 
            y: 40, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: container as Element,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      // Section header reveals
      gsap.utils.toArray('.c-section-builder_header-wrapper').forEach((el) => {
        gsap.fromTo(
          el as Element,
          { 
            y: 40, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el as Element,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });

      // Automation Section strike-through animation
      const strike = document.querySelector('.c-hp-strike__1');
      if (strike) {
        gsap.fromTo(
          strike,
          { scaleX: 0, transformOrigin: 'left center' },
          {
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: strike,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Chargebacks Section interactive elements animation
      const cbWrapper = document.querySelector('.c-chargebackos-img-wrapper');
      if (cbWrapper) {
        const logo = cbWrapper.querySelector('.c-chargebakos-logo');
        const tags = cbWrapper.querySelectorAll('.c-charebakos-tag-wrapper');
        const dashLine = cbWrapper.querySelector('.c-dash-line');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cbWrapper,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        });

        if (logo) {
          tl.fromTo(logo, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }, 0.2);
        }
        if (tags.length) {
          tl.fromTo(tags, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, 0.4);
        }
        if (dashLine) {
          tl.fromTo(dashLine, { width: '0%' }, { width: '100%', duration: 0.8, ease: 'power2.inOut' }, 0);
        }
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
