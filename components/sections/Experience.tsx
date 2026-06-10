'use client';

import { motion } from 'framer-motion';
import { Doodle } from '@/components/ScrapbookVisuals';

const rows = [
  {
    yr: '2025 - Present',
    co: 'Element Retail',
    ro: 'Graphic Designer & Video Editor',
    ds: 'In-house creative across brand, social systems, reels, banner kits and campaign visuals for a cycling lifestyle audience.',
  },
  {
    yr: '2024 - 2025',
    co: 'Elite Cloud Books',
    ro: 'Web Designer',
    ds: 'Responsive web redesign, interaction details and front-end delivery across HTML, CSS, JavaScript, jQuery and Bootstrap.',
  },
  {
    yr: '2022 - 2024',
    co: 'WebNX',
    ro: 'Web Developer & Designer',
    ds: 'WordPress websites, Electron.js desktop applications, social creatives and SEO-aware digital presentation.',
  },
  {
    yr: '2022',
    co: 'Elsner Technology',
    ro: 'Web Development Intern',
    ds: 'A focused introduction to front-end practice through HTML, CSS, Bootstrap and production web habits.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <Doodle kind="monitor" className="absolute right-[8%] top-20 hidden h-24 w-24 rotate-[9deg] md:block" data-gsap-float="8" />

      <div className="shell">
        <div className="mx-auto grid max-w-[980px] gap-10 md:grid-cols-[0.78fr_1.22fr] md:items-start">
          <div className="md:sticky md:top-32">
            <div className="hand text-3xl text-accent">experience notes</div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.9 }}
              className="mt-3 font-display text-4xl font-light leading-[0.98] text-paper-light md:text-5xl"
            >
              A timeline of making things useful and beautiful.
            </motion.h2>
            <div className="paper-strip mt-8 max-w-[280px] rotate-[-2deg] p-5">
              <div className="label">Recognition</div>
              <div className="mt-2 font-display text-2xl font-light leading-none text-ink">Positive Attitude Award</div>
              <p className="mt-3 text-[13px] font-semibold leading-[1.45] text-ink-soft">WebNX letter of recommendation</p>
            </div>
          </div>

          <div className="grid gap-5">
            {rows.map((row, index) => (
              <motion.article
                key={row.co}
                initial={{ opacity: 0, x: index % 2 === 0 ? 32 : -32, rotate: index % 2 === 0 ? 1.5 : -1.5 }}
                whileInView={{ opacity: 1, x: 0, rotate: index % 2 === 0 ? 1.5 : -1.5 }}
                whileHover={{ rotate: 0, x: index % 2 === 0 ? -6 : 6 }}
                viewport={{ once: true, margin: '-12%' }}
                transition={{ duration: 0.85, delay: index * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
                className="paper-strip p-5"
                data-cursor="hover"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-accent/35 pb-4">
                  <div>
                    <div className="label">{row.yr}</div>
                    <h3 className="mt-2 font-display text-3xl font-light leading-none text-ink">{row.co}</h3>
                  </div>
                  <div className="hand text-3xl text-accent">0{index + 1}</div>
                </div>
                <div className="mt-4 font-bold text-ink">{row.ro}</div>
                <p className="mt-3 text-[14px] font-medium leading-[1.58] text-ink-soft">{row.ds}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
