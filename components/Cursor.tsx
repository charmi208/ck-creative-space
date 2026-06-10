'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let frame = 0;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;

    const move = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
    };

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target || !dot.current) return;

      if (target.closest('a, button, [data-cursor="hover"]')) {
        dot.current.classList.add('hover');
      }

      if (target.closest('p, h1, h2, h3, h4, blockquote')) {
        dot.current.classList.add('text');
      }
    };

    const out = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target || !dot.current) return;

      if (target.closest('a, button, [data-cursor="hover"]')) {
        dot.current.classList.remove('hover');
      }

      if (target.closest('p, h1, h2, h3, h4, blockquote')) {
        dot.current.classList.remove('text');
      }
    };

    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cx - 6}px, ${cy - 6}px, 0)`;
      }
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
    };
  }, []);

  return <div ref={dot} className="cursor" />;
}
