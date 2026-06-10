'use client';

import { motion } from 'framer-motion';
import { Doodle } from '@/components/ScrapbookVisuals';

const marks = [
  ['CS', 'CrypttoShala'],
  ['AT', 'AltTask'],
  ['NP', 'NovaPath'],
  ['ER', 'Element Retail'],
  ['GI', 'Giant Riding Club'],
  ['CI', 'Cryo India'],
  ['LK', 'Leiktro'],
  ['SF', 'Sahil Foods'],
];

export default function Branding() {
  return (
    <section id="branding" className="section-pad relative overflow-hidden">
      <Doodle kind="spark" className="absolute right-[9%] top-20 hidden h-20 w-20 rotate-[9deg] md:block" />

      <div className="shell">
        <div className="paper-card mx-auto max-w-[1020px] p-7 md:p-10">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="hand text-3xl text-accent">identity drawer</div>
              <h2 className="mt-3 font-display text-4xl font-light leading-[0.98] text-ink md:text-5xl">
                Marks that behave well across messy worlds.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {marks.map(([glyph, name], index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20, rotate: index % 2 ? 2 : -2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 2 : -2 }}
                  whileHover={{ y: -8, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: index * 0.04 }}
                  className="paper-strip aspect-square p-4 text-center"
                >
                  <div className="grid h-full place-items-center border border-accent/35">
                    <div>
                      <div className="editorial text-5xl text-accent">{glyph}</div>
                      <div className="mt-3 text-[11px] font-bold uppercase text-ink-soft">{name}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
