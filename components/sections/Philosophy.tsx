'use client';

import { motion } from 'framer-motion';
import { Doodle } from '@/components/ScrapbookVisuals';

const beliefs = [
  {
    title: 'clarity before decoration',
    text: 'A strong idea should still be visible after the color, texture and movement arrive.',
    rotate: -4,
  },
  {
    title: 'motion has manners',
    text: 'Transitions should guide the eye, not compete for it. The best movement feels inevitable.',
    rotate: 3,
  },
  {
    title: 'systems need softness',
    text: 'Grids keep the work reliable. Human details make the work memorable.',
    rotate: -2,
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section-pad relative overflow-hidden">
      <Doodle kind="swirl" className="absolute left-[11%] top-20 hidden h-24 w-24 rotate-[-8deg] md:block" />
      <Doodle kind="leaf" className="absolute right-[13%] bottom-12 hidden h-28 w-28 rotate-[12deg] md:block" data-gsap-float="12" />

      <div className="shell">
        <div className="mx-auto max-w-[900px]">
          <div className="hand text-3xl text-accent">things I believe in</div>
          <motion.h2
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-3 max-w-[12ch] font-display text-5xl font-light leading-[1] text-paper-light md:text-7xl"
          >
            Design should feel like someone cared.
          </motion.h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-[850px] gap-8 md:grid-cols-3">
          {beliefs.map((belief, index) => (
            <motion.article
              key={belief.title}
              initial={{ opacity: 0, y: 38, rotate: belief.rotate - 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: belief.rotate }}
              whileHover={{ y: -10, rotate: belief.rotate * 0.35 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.9, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className="paper-strip relative min-h-[250px] p-6"
              data-cursor="hover"
            >
              <span className="tape left-1/2 top-[-15px] -translate-x-1/2" />
              <div className="hand text-4xl leading-[0.95] text-ink">{belief.title}</div>
              <p className="mt-6 text-[15px] font-semibold leading-[1.55] text-ink-soft">{belief.text}</p>
              <div className="absolute bottom-5 right-5 hand text-3xl text-accent">0{index + 1}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
