'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    n: '01',
    title: 'AltTask',
    tag: 'Web · UI/UX · Brand',
    year: '2024',
    desc: 'A productivity OS — interface, identity, and motion language built end-to-end.',
    color: 'from-violet/40 via-rose/20 to-transparent',
  },
  {
    n: '02',
    title: 'Plasma Motors',
    tag: 'UI/UX · Product',
    year: '2024',
    desc: 'Configurator-led mobility experience; cinematic states for EV browsing.',
    color: 'from-gold/40 via-rose/20 to-transparent',
  },
  {
    n: '03',
    title: 'Cryo India',
    tag: 'Web · Brand · Motion',
    year: '2023',
    desc: 'Bringing scientific precision to the web with type, grid, and restraint.',
    color: 'from-rose/40 via-violet/20 to-transparent',
  },
  {
    n: '04',
    title: 'Element Retail',
    tag: 'Brand · Social · Video',
    year: '2025',
    desc: 'A complete in-house creative system — banners, social, motion, ads.',
    color: 'from-gold/40 via-violet/20 to-transparent',
  },
];

export default function FeaturedProjects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section id="work" ref={ref} className="relative py-32 md:py-48">
      <div className="px-6 md:px-10 mb-20 flex justify-between items-end">
        <div>
          <div className="eyebrow mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            <span>02 — Featured Work</span>
          </div>
          <h2 className="h-display text-5xl md:text-7xl">
            Selected <span className="italic">projects</span>.
          </h2>
        </div>
        <div className="hidden md:block eyebrow text-bone/50 max-w-xs">
          A look at recent collaborations spanning brand, interface, and motion.
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-white/5">
        {projects.map((p, i) => (
          <ProjectCard key={p.n} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

type Project = {
  n: string;
  title: string;
  tag: string;
  year: string;
  desc: string;
  color: string;
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-15%' }}
      transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.08 }}
      className="proj-card relative group block bg-ink-900 p-8 md:p-12 overflow-hidden"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
      />
      <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-xl bg-ink-800">
        <div className="proj-img absolute inset-0">
          <svg viewBox="0 0 800 600" className="w-full h-full">
            <defs>
              <linearGradient id={`g${index}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c9a25a" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8a7dff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#e9b5a8" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <rect width="800" height="600" fill={`url(#g${index})`} />
            <g opacity="0.4" fill="none" stroke="#f4efe6" strokeWidth="0.5">
              {Array.from({ length: 30 }).map((_, i) => (
                <line key={i} x1={i * 28} y1="0" x2={i * 28} y2="600" />
              ))}
            </g>
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#f4efe6"
              fontFamily="Fraunces, serif"
              fontSize="84"
              fontWeight="300"
              opacity="0.9"
            >
              {project.title}
            </text>
          </svg>
        </div>
      </div>

      <div className="relative flex items-start justify-between">
        <div>
          <div className="eyebrow text-bone/40 mb-2">
            {project.n} / {project.tag}
          </div>
          <h3 className="h-display text-3xl md:text-4xl mb-2">{project.title}</h3>
          <p className="text-bone/60 max-w-md">{project.desc}</p>
        </div>
        <div className="flex flex-col items-end gap-4">
          <span className="eyebrow text-bone/40">{project.year}</span>
          <div className="w-12 h-12 rounded-full border border-white/20 grid place-items-center group-hover:border-gold group-hover:bg-gold group-hover:text-ink-950 transition">
            →
          </div>
        </div>
      </div>
    </motion.a>
  );
}
