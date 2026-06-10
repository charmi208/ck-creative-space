'use client';

import { motion } from 'framer-motion';
import { socialPosters, occasionPosters, editorialAssets } from '@/lib/images';

export default function SocialDiary() {
  const all = [...socialPosters, ...occasionPosters, ...editorialAssets.bookCovers, ...editorialAssets.graphicDesign];
  const rotations = [-4, 3, -2.5, 4, -3.5, 2.5, -5, 1.8, -2.2, 4.5, -1.6, 3.2, -3.8, 2.2, 0, -4.4, 3.4];

  return (
    <section id="social-diary" className="section-pad relative overflow-hidden">
      <div className="shell">
        <div className="mt-24 md:mt-32">
          <div className="mx-auto max-w-[840px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.8 }}
              className="hand text-3xl text-accent"
            >
              social diary
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.95, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-3 font-display text-4xl font-light leading-[1] text-paper-light md:text-6xl"
            >
              Posters, occasions and small print runs.
            </motion.h3>
            <p className="mx-auto mt-5 max-w-[42ch] text-[14px] font-semibold text-muted">
              A rolling notebook of festival posts, brand drops and editorial covers — a few stitched together below.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative mx-auto mt-12 max-w-[1100px] rounded-[16px] bg-paper-light/[0.04] p-4 md:p-6"
          >
            <span className="tape left-[14%] top-[-12px]" />
            <span className="tape right-[18%] top-[-12px] rotate-[6deg]" />

            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {all.slice(0, 15).map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 30, rotate: rotations[index % rotations.length] - 2 }}
                  whileInView={{ opacity: 1, y: 0, rotate: rotations[index % rotations.length] }}
                  whileHover={{ y: -10, rotate: rotations[index % rotations.length] * 0.35, scale: 1.05, zIndex: 30 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.75, delay: (index % 5) * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
                  className="polaroid aspect-[4/5] overflow-hidden"
                  data-cursor="hover"
                >
                  <img
                    src={src}
                    alt={`Poster ${index + 1}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
