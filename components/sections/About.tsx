'use client';

import { motion } from 'framer-motion';
import { Doodle } from '@/components/ScrapbookVisuals';
import { portraits } from '@/lib/images';

const notes = [
  'Three years in creative and front-end work, with a practice that moves between brand systems, UI structure and motion rhythm.',
  'Currently building in-house creative for Element Retail, after web and design roles at Elite Cloud Books, WebNX and Elsner Technology.',
  'I like work that feels hand-touched, but still precise: a good grid, a soft edge, a thoughtful transition and a clear story.',
];

const facts = [
  ['Based in', 'Gujarat, India'],
  ['Education', 'B.Tech Computer Engineering'],
  ['Practice', 'Brand / UI / Motion'],
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <Doodle kind="flower" className="absolute left-[6%] top-16 hidden h-24 w-24 rotate-[-12deg] md:block" />
      <Doodle kind="asterisk" className="absolute right-[9%] bottom-20 hidden h-20 w-20 rotate-[8deg] md:block" data-gsap-float="10" />

      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 46 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="paper-card mx-auto grid max-w-[980px] gap-10 p-7 md:grid-cols-[0.85fr_1.15fr] md:p-10"
        >
          <div className="relative min-h-[430px]">
            <span className="tape left-[28%] top-[-10px]" />
            <motion.div
              whileHover={{ rotate: -2, y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              className="polaroid absolute left-2 top-7 h-[300px] w-[230px] rotate-[-5deg] md:left-4"
              data-cursor="hover"
            >
              <img
                src={portraits.soft}
                alt="Charmi Kanazariya portrait"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute bottom-3 left-4 hand text-3xl text-accent">Charmi</div>
            </motion.div>
            <motion.div
              whileHover={{ rotate: 2, y: -6 }}
              transition={{ type: 'spring', stiffness: 160, damping: 18 }}
              className="polaroid absolute right-2 top-[26%] h-[150px] w-[160px] rotate-[6deg]"
              data-cursor="hover"
            >
              <img
                src={portraits.candid}
                alt="Charmi candid"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </motion.div>
            <div className="paper-strip absolute bottom-8 right-2 w-[230px] rotate-[5deg] p-5">
              <div className="hand text-4xl leading-none text-ink">Design for moments</div>
              <p className="mt-3 text-[13px] font-semibold leading-[1.4] text-ink-soft">
                Brand, interface and edit decisions should all carry the same feeling.
              </p>
            </div>
          </div>

          <div>
            <div className="label text-ink-soft">About Charmi</div>
            <h2 className="mt-4 font-display text-4xl font-light leading-[0.98] text-accent md:text-5xl">
              Calm systems with a playful human edge.
            </h2>
            <div className="mt-7 grid gap-5">
              {notes.map((note, index) => (
                <motion.p
                  key={note}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-12%' }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                  className="font-display text-[15px] font-light leading-[1.55] text-ink-soft"
                >
                  {note}
                </motion.p>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {facts.map(([label, value]) => (
                <div key={label} className="border-t border-accent/45 pt-3">
                  <div className="label text-accent">{label}</div>
                  <div className="mt-2 text-[13px] font-bold leading-[1.35] text-ink">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

