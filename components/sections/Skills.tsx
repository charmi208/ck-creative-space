'use client';

import { motion } from 'framer-motion';
import { Doodle } from '@/components/ScrapbookVisuals';

const groups = [
  { nm: 'Design', items: ['Visual identity', 'UI/UX design', 'Editorial layout', 'Responsive web', 'Wireframing', 'Prototyping'], rotate: -3 },
  { nm: 'Tools', items: ['Photoshop', 'Illustrator', 'Adobe XD', 'Figma', 'After Effects', 'Premiere Pro'], rotate: 2 },
  { nm: 'Front-end', items: ['HTML & CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress', 'Electron.js'], rotate: -1 },
  { nm: 'Studio', items: ['Brand strategy', 'Motion direction', 'Social systems', 'Video editing', 'SEO-aware structure', 'Calm typography'], rotate: 3 },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <Doodle kind="stack" className="absolute left-[8%] bottom-16 hidden h-20 w-20 rotate-[-8deg] md:block" data-gsap-float="9" />

      <div className="shell">
        <div className="mx-auto max-w-[980px]">
          <div className="paper-card p-7 md:p-10">
            <div className="grid gap-9 md:grid-cols-[0.82fr_1.18fr]">
              <div>
                <div className="hand text-3xl text-accent">toolkit</div>
                <h2 className="mt-3 font-display text-4xl font-light leading-[0.98] text-ink md:text-5xl">
                  Skills arranged like a studio desk.
                </h2>
                <p className="mt-5 max-w-[28ch] text-[15px] font-semibold leading-[1.6] text-ink-soft">
                  Practical tools, visual instincts and production habits that help carry an
                  idea from rough note to finished artifact.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {groups.map((group, index) => (
                  <motion.div
                    key={group.nm}
                    initial={{ opacity: 0, y: 28, rotate: group.rotate - 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: group.rotate }}
                    whileHover={{ rotate: 0, y: -8 }}
                    viewport={{ once: true, margin: '-12%' }}
                    transition={{ duration: 0.85, delay: index * 0.06 }}
                    className="paper-strip p-5"
                    data-cursor="hover"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="hand text-4xl leading-none text-accent">{group.nm}</h3>
                      <span className="text-[12px] font-bold text-ink-soft">0{index + 1}</span>
                    </div>
                    <ul className="mt-5 grid gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-[13px] font-bold text-ink">
                          <span className="h-2 w-2 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
