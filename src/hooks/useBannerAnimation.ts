import { useEffect } from 'react';

/** Banner card tilt + glare on hover (desktop) and scroll (mobile) */
export function useBannerAnimation(): void {
  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.gsap) return;

      const { gsap } = window;
      const cards = document.querySelectorAll('.banner_animation');
      const isMobile = () => window.innerWidth <= 768;

      cards.forEach((card) => {
        const glare = card.querySelector('.light-glare') as HTMLElement | null;
        if (!glare) return;

        card.addEventListener('mousemove', (e: Event) => {
          if (isMobile()) return;
          const me = e as MouseEvent;
          const bounds = (card as HTMLElement).getBoundingClientRect();
          const centerX = bounds.left + bounds.width / 2;
          const centerY = bounds.top + bounds.height / 2;
          const percentX = (me.clientX - centerX) / (bounds.width / 2);
          const percentY = (me.clientY - centerY) / (bounds.height / 2);

          gsap.to(card, {
            duration: 0.4,
            rotateY: -percentX * 3.5,
            rotateX: percentY * 1,
            ease: 'power2.out',
            transformPerspective: 800,
            transformOrigin: 'center center',
          });

          const posX = ((me.clientX - bounds.left) / bounds.width) * 100;
          const posY = ((me.clientY - bounds.top) / bounds.height) * 100;
          glare.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(255,255,255,0.2), transparent 60%)`;
          glare.style.opacity = '0.5';
        });

        card.addEventListener('mouseleave', () => {
          if (isMobile()) return;
          gsap.to(card, { duration: 0.6, rotateY: 0, rotateX: 0, ease: 'power3.out' });
          glare.style.opacity = '0';
        });
      });

      window.addEventListener('scroll', () => {
        if (!isMobile()) return;
        cards.forEach((card) => {
          const glare = card.querySelector('.light-glare') as HTMLElement | null;
          if (!glare) return;
          const bounds = (card as HTMLElement).getBoundingClientRect();
          const progress = 1 - bounds.bottom / (window.innerHeight + bounds.height);
          const clamped = Math.min(Math.max(progress, 0), 1);
          const percentX = clamped * 2 - 1;
          const percentY = clamped * 2 - 1;

          gsap.to(card, {
            duration: 0.4,
            rotateY: -percentX * 7,
            rotateX: percentY * 2,
            ease: 'power2.out',
            transformPerspective: 800,
            transformOrigin: 'center center',
          });

          const posX = clamped * 100;
          const posY = clamped * 100;
          glare.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(255,255,255,0.2), transparent 60%)`;
          glare.style.opacity = clamped > 0 && clamped < 1 ? '0.5' : '0';
        });
      });
    };

    const id = window.setInterval(() => {
      if (window.gsap) {
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
