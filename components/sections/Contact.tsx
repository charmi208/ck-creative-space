'use client';

import { motion } from 'framer-motion';
import { Doodle } from '@/components/ScrapbookVisuals';
import { portraits } from '@/lib/images';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 pb-24 pt-20 md:pb-28 md:pt-28">
      <Doodle kind="flower" className="absolute left-[20%] top-[32%] hidden h-28 w-28 rotate-[-14deg] md:block" />
      <Doodle kind="monitor" className="absolute bottom-10 left-[30%] hidden h-16 w-16 rotate-[4deg] opacity-60 md:block" data-gsap-float="9" />
      <Doodle kind="leaf" className="absolute right-[22%] top-[30%] hidden h-24 w-24 rotate-[12deg] md:block" />

      <div className="relative mx-auto max-w-[560px]">
        <motion.div
          initial={{ opacity: 0, y: -10, rotate: -8 }}
          whileInView={{ opacity: 1, y: 0, rotate: -8 }}
          whileHover={{ rotate: -3, y: -6, scale: 1.03 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="polaroid absolute -left-4 -top-12 z-10 hidden h-[170px] w-[140px] md:block"
          data-cursor="hover"
        >
          <img
            src={portraits.candid}
            alt="Charmi candid"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-2 left-3 hand text-xl text-accent">say hi</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 42, rotate: 1.4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1.4 }}
          whileHover={{ rotate: 0, y: -6 }}
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="paper-card relative p-6 md:p-8"
          data-cursor="hover"
        >
          <div className="grid gap-7 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <div className="border-b border-accent pb-3 font-display text-3xl font-light text-accent">
                What I look for
              </div>
              <ul className="mt-5 grid gap-3 text-[14px] font-bold text-ink-soft">
                {['Impactful work', 'Meaningful teams', 'Beautifully useful systems'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="grid h-4 w-4 place-items-center border border-accent text-[10px] text-accent">+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:charmik208@gmail.com"
                className="mt-7 inline-flex rounded-md border-2 border-accent px-4 py-2 text-[13px] font-bold text-accent transition hover:bg-accent hover:text-paper-light"
              >
                let us chat
              </a>
            </div>

            <div className="relative min-h-[220px]">
              <span className="tape left-1/2 top-[-10px] hidden -translate-x-1/2 md:block" />
              <motion.div
                whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 160, damping: 18 }}
                className="polaroid absolute inset-x-2 top-1 h-[200px] rotate-[5deg]"
                data-cursor="hover"
              >
                <img
                  src={portraits.primary}
                  alt="Charmi at the desk"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-2 left-3 hand text-2xl leading-none text-accent">open</div>
                <div className="absolute bottom-2 right-3 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">
                  for collabs
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            href="mailto:charmik208@gmail.com"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="soft-link font-display text-3xl font-light text-paper-light md:text-5xl"
          >
            charmik208@gmail.com
          </motion.a>
          <div className="mt-6 flex flex-wrap justify-center gap-5 text-[13px] font-bold text-muted">
            <a href="tel:+919512910990" className="soft-link">
              +91 95129 10990
            </a>
            <a href="https://linkedin.com/in/charmikanazariya-b01487214" target="_blank" rel="noreferrer" className="soft-link">
              LinkedIn
            </a>
            <a href="#top" className="soft-link">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
