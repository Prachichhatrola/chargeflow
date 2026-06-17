import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { lottieData } from '../../assets/registry';

interface LottiePlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  renderer?: 'svg' | 'canvas' | 'html';
  preserveAspectRatio?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function LottiePlayer({
  src,
  autoplay = true,
  loop = true,
  renderer = 'svg',
  preserveAspectRatio = 'xMidYMid slice',
  style,
  className,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState<any>(null);

  // Load Lottie JSON data asynchronously from local path
  useEffect(() => {
    let active = true;
    lottieData(src)
      .then((data) => {
        if (active) setAnimationData(data);
      })
      .catch((err) => {
        console.error('Error loading Lottie JSON:', err);
      });
    return () => {
      active = false;
    };
  }, [src]);

  // Load and control the lottie-web player instance once container and data are ready
  useEffect(() => {
    if (!containerRef.current || !animationData) return;

    let animInstance: any = null;

    // Use IntersectionObserver to lazy load/play when in view and pause when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!animInstance) {
              animInstance = lottie.loadAnimation({
                container: containerRef.current!,
                renderer,
                loop,
                autoplay,
                animationData,
                rendererSettings: {
                  preserveAspectRatio,
                },
              });
            } else {
              if (autoplay) animInstance.play();
            }
          } else {
            if (animInstance) {
              animInstance.pause();
            }
          }
        });
      },
      { rootMargin: '100px' }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (animInstance) {
        animInstance.destroy();
      }
    };
  }, [animationData, autoplay, loop, renderer, preserveAspectRatio]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    />
  );
}
