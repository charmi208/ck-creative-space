'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { Doodle } from '@/components/ScrapbookVisuals';
import { projectImages, type ProjectKey } from '@/lib/images';

type Project = {
  title: ProjectKey;
  type: string;
  year: string;
  top: string;
  left: string;
  width: string;
  rotate: number;
};

// Dense zig-zag — 2 cards per band, ~12% vertical step, last card centered.
// All percentages target the md+ container (min-h-[1720px]) so cards pack close
// with no empty void between rows.
const projects: Project[] = [
  { title: 'AltTask', type: 'Productivity OS / UI / Brand', year: '2024', top: '1%', left: '8%', width: '19rem', rotate: -5 },
  { title: 'WebNX', type: 'Web systems / WordPress', year: '2022-2024', top: '4%', left: '54%', width: '20rem', rotate: 4 },
  { title: 'Cryo India', type: 'Scientific web identity', year: '2023', top: '17%', left: '11%', width: '21rem', rotate: -3 },
  { title: 'Plasma Motors', type: 'EV configurator / UX', year: '2024', top: '20%', left: '58%', width: '19rem', rotate: 3 },
  { title: 'Ice Cream App', type: 'D2C mobile interface', year: '2023', top: '33%', left: '6%', width: '19rem', rotate: 5 },
  { title: 'Element Retail', type: 'Retail brand / video', year: '2025', top: '36%', left: '52%', width: '22rem', rotate: -4 },
  { title: 'NovaPath', type: 'Identity / UI direction', year: '2024', top: '49%', left: '13%', width: '20rem', rotate: -2 },
  { title: 'CrypttoShala', type: 'Crypto literacy identity', year: '2023', top: '52%', left: '57%', width: '19rem', rotate: 5 },
  { title: 'Giant Riding Club', type: 'Motion / social campaign', year: '2025', top: '65%', left: '8%', width: '21rem', rotate: -5 },
  { title: 'The EcoGenesis', type: 'Brand / editorial', year: '2024', top: '68%', left: '55%', width: '20rem', rotate: 3 },
  { title: 'Sahil Foods', type: 'Food brand / social', year: '2023', top: '82%', left: '33%', width: '19rem', rotate: -2 },
];

const boardProjects = projects.slice(0, 9);

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const noteY = useTransform(scrollYProgress, [0, 1], [-40, 80]);
  const boardY = useTransform(scrollYProgress, [0, 1], [40, -35]);

  return (
    <section id="work" ref={ref} className="section-pad relative overflow-hidden">
      <Doodle kind="spark" className="absolute left-[16%] top-24 hidden h-16 w-16 rotate-[-16deg] md:block" />
      <Doodle kind="flower" className="absolute right-[10%] top-[24rem] hidden h-28 w-28 rotate-[16deg] md:block" />
      <Doodle kind="monitor" className="absolute bottom-[25rem] left-[13%] hidden h-20 w-20 rotate-[-10deg] md:block" data-gsap-float="12" />

      <div className="shell">
        <div className="mx-auto max-w-[850px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.8 }}
            className="hand text-3xl text-accent"
          >
            selected project field
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-3 font-display text-5xl font-light leading-[0.98] text-paper-light md:text-7xl"
          >
            Pieces scattered like a working studio wall.
          </motion.h2>
        </div>

        <div className="relative mt-16 grid gap-10 md:mt-20 md:min-h-[1720px] md:block">
          <motion.div
            style={{ y: noteY }}
            className="paper-strip mx-auto w-[230px] rotate-[-2deg] p-3 text-center md:absolute md:left-[37%] md:top-[10%]"
            data-gsap-float="9"
          >
            <div className="hand text-[2rem] leading-none text-ink">pursue clarity</div>
          </motion.div>

          <motion.div
            style={{ y: noteY }}
            className="paper-strip mx-auto w-[230px] rotate-[3deg] p-3 text-center md:absolute md:left-[36%] md:top-[42%]"
            data-gsap-float="11"
          >
            <div className="hand text-[2rem] leading-none text-ink">make it feel held</div>
          </motion.div>

          {projects.map((project, index) => (
            <FloatingProject key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div style={{ y: boardY }} className="relative mx-auto mt-8 max-w-[900px] md:mt-0">
          <Doodle kind="leaf" coral className="mx-auto mb-[-6px] h-24 w-24" />
          <motion.div
            initial={{ opacity: 0, y: 46, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
            viewport={{ once: true, margin: '-14%' }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative rounded-[12px] bg-accent p-4 shadow-[0_28px_70px_rgba(0,0,0,0.44)] md:p-5"
          >
            <div className="relative min-h-[560px] overflow-hidden rounded-[12px] border border-paper-light/70 bg-bg p-5 md:min-h-[860px]">
              <div className="absolute inset-5 rounded-[10px] border border-paper-light/35 bg-[linear-gradient(rgba(248,239,226,0.17)_1px,transparent_1px),linear-gradient(90deg,rgba(248,239,226,0.13)_1px,transparent_1px)] bg-[length:54px_54px]" />
              <div className="absolute bottom-6 right-7 hand text-xl text-paper-light/85">
                every surface should carry intention.
              </div>

              <div className="relative grid grid-cols-2 gap-4 md:absolute md:inset-5 md:block">
                {boardProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 26, rotate: boardRotation(index) }}
                    whileInView={{ opacity: 1, y: 0, rotate: boardRotation(index) }}
                    whileHover={{ scale: 1.05, rotate: boardRotation(index) * 0.45, zIndex: 20 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.04 }}
                    className="polaroid aspect-[4/3] overflow-hidden md:absolute md:w-[var(--w,210px)]"
                    style={boardPosition(index)}
                    data-cursor="hover"
                  >
                    <img
                      src={projectImages[project.title].hero}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between hand text-[15px] leading-none text-accent">
                      <span className="truncate">{project.title}</span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">{project.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingProject({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 55, rotate: project.rotate }}
      whileInView={{ opacity: 1, y: 0, rotate: project.rotate }}
      whileHover={{ y: -14, rotate: project.rotate * 0.35, scale: 1.045, zIndex: 15 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.9, delay: (index % 4) * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
      className="group w-full md:absolute md:left-[var(--left)] md:top-[var(--top)] md:w-[var(--width)]"
      style={
        {
          '--top': project.top,
          '--left': project.left,
          '--width': project.width,
        } as CSSProperties
      }
      data-cursor="hover"
    >
      <div className="polaroid aspect-[4/3] overflow-hidden">
        <img
          src={projectImages[project.title].hero}
          alt={`${project.title} cover`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute bottom-2 left-3 hand text-2xl leading-none text-accent">
          {project.title.split(' ')[0].toLowerCase()}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-[auto_1fr] gap-3 text-chalk">
        <span className="hand text-3xl leading-none text-accent">{String(index + 1).padStart(2, '0')}</span>
        <div>
          <h3 className="font-display text-2xl font-light leading-none text-paper-light">{project.title}</h3>
          <p className="mt-1 text-[12px] font-semibold text-muted">
            {project.type} / {project.year}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

function boardRotation(index: number) {
  return [-6, 3, -4, 4.5, -2, 5, -5, 3.2, -3.4][index] || 0;
}

function boardPosition(index: number): CSSProperties {
  // 3 vertical bands x 3 horizontal lanes — full canvas spread.
  // Top values run from 3% to 73% so cards inhabit the whole board height.
  // `--w` drives md+ width via Tailwind arbitrary class; mobile keeps the 2-col grid.
  const positions: CSSProperties[] = [
    { left: '3%',  top: '4%' },   // 0 AltTask
    { left: '40%', top: '7%' },   // 1 WebNX
    { left: '73%', top: '3%' },   // 2 Cryo India
    { left: '6%',  top: '38%' },  // 3 Plasma
    { left: '42%', top: '40%' },  // 4 Ice Cream App
    { left: '74%', top: '36%' },  // 5 Element Retail
    { left: '4%',  top: '70%' },  // 6 NovaPath
    { left: '40%', top: '73%' },  // 7 CrypttoShala
    { left: '72%', top: '68%' },  // 8 Giant Riding Club
  ];
  const widths = ['220px', '200px', '210px', '215px', '205px', '220px', '215px', '215px', '220px'];

  const base = positions[index] ?? {};
  const out: Record<string, string | number | undefined> = { ...base };
  out['--w'] = widths[index] ?? '210px';
  return out as CSSProperties;
}
