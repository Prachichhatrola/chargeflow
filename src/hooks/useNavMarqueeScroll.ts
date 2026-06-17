import { useEffect } from 'react';

/** Hide nav marquee on scroll + swap sign-up / schedule buttons (desktop) */
export function useNavMarqueeScroll(): void {
  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.gsap?.registerPlugin) return;

      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);

      const targets = gsap.utils.toArray('[hide-marquee]') as HTMLElement[];
      if (!targets.length) return;

      const btnSwitch = document.querySelector('.c-nav_buttons-switch') as HTMLElement | null;
      const btnSchedule = document.querySelector('.c-nav_buttons-schedule_on_scroll') as HTMLElement | null;
      const mm = gsap.matchMedia();

      targets.forEach((el) => {
        const setNaturalHeight = () => {
          gsap.set(el, { height: el.scrollHeight });
        };

        gsap.set(el, { overflow: 'hidden', willChange: 'opacity, height' });
        setNaturalHeight();
        ScrollTrigger.addEventListener('refreshInit', setNaturalHeight);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: '+=100',
            scrub: true,
            invalidateOnRefresh: true,
          },
        });

        tl.to(el, { opacity: 0, ease: 'none', duration: 0.5 }, 0);

        mm.add('(min-width: 769px)', () => {
          if (!btnSwitch || !btnSchedule) return;

          gsap.set([btnSwitch, btnSchedule], { willChange: 'transform, opacity' });
          gsap.set(btnSwitch, { autoAlpha: 1, y: 0 });
          gsap.set(btnSchedule, { autoAlpha: 0, y: 8, pointerEvents: 'none' });

          tl.to(btnSwitch, { autoAlpha: 0, y: -8, ease: 'none', duration: 0.5 }, 0);
          tl.to(btnSchedule, { autoAlpha: 1, y: 0, ease: 'none', duration: 0.5 }, 0);

          tl.call(() => {
            btnSwitch.style.pointerEvents = 'none';
            btnSchedule.style.pointerEvents = 'auto';
          }, undefined, 0.5);

          tl.call(() => {
            btnSwitch.style.pointerEvents = 'auto';
            btnSchedule.style.pointerEvents = 'none';
          }, undefined, 0);
        });

        tl.to(el, { height: 0, ease: 'none', duration: 0.5 }, 0.5);
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
