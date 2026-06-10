'use client';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function ScrapbookEffects() {
  useEffect(() => {
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-gsap-float]').forEach((element, index) => {
        const distance = Number(element.dataset.gsapFloat || 12);
        gsap.to(element, {
          y: index % 2 === 0 ? distance : -distance,
          rotation: index % 3 === 0 ? 1.4 : -1.1,
          duration: 3.8 + index * 0.22,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
