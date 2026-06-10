'use client';

import { motion } from 'framer-motion';

const reels = [
  {
    title: 'Element Retail — Spring Drop',
    desc: 'Brand film cut for 30s · 15s · 9:16 deliverables. Pace, hits, and reveals tuned to retail rhythm.',
    duration: '00:30',
    fmt: '9:16 · 16:9',
  },
  {
    title: 'Giant Bicycles India — Trail',
    desc: 'Action-led edit, dynamic title sequence, and color-graded to feel cinematic on the smallest phone.',
    duration: '00:48',
    fmt: '16:9',
  },
  {
    title: 'AltTask — Launch',
    desc: 'Product-led narrative cut from screen-record → motion poster → conversion CTA.',
    duration: '01:12',
    fmt: '16:9',
  },
];

export default function VideoShowcase() {
  return (
    <section id="video" className="relative px-6 md:px-10 py-32 md:py-48 border-t border-white/5">
      <div className="mb-20">
        <div className="eyebrow mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-gold" />
          <span>06 — Video Editing</span>
        </div>
        <h2 className="h-display text-5xl md:text-7xl">
          Cuts with <span className="italic gradient-text">rhythm</span>.
        </h2>
      </div>

      <div className="space-y-6">
        {reels.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.08 }}
            className="group glass rounded-2xl overflow-hidden grid md:grid-cols-12 gap-0 items-stretch"
          >
            <div className="md:col-span-7 relative aspect-video overflow-hidden">
              <VideoFrame index={i} />
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full glass grid place-items-center group-hover:scale-110 transition">
                  <span className="text-bone text-xl">▶</span>
                </div>
              </div>
              <div className="absolute top-4 left-4 eyebrow text-bone/80 px-3 py-1 rounded-full bg-ink-950/60 backdrop-blur">
                {r.duration}
              </div>
            </div>
            <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-center">
              <div className="eyebrow text-gold mb-2">Reel · 0{i + 1}</div>
              <h3 className="h-display text-3xl md:text-4xl mb-3">{r.title}</h3>
              <p className="text-bone/65 leading-relaxed mb-6">{r.desc}</p>
              <div className="flex items-center gap-3 eyebrow text-bone/50">
                <span>Premiere Pro</span>
                <span>·</span>
                <span>After Effects</span>
                <span>·</span>
                <span>{r.fmt}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function VideoFrame({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full">
      <defs>
        <linearGradient id={`v${index}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1a1a22" />
          <stop offset="50%" stopColor={index % 2 === 0 ? '#c9a25a' : '#8a7dff'} stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0b0b0f" />
        </linearGradient>
      </defs>
      <rect width="800" height="450" fill={`url(#v${index})`} />
      <rect x="0" y="0" width="800" height="40" fill="#070708" opacity="0.55" />
      <rect x="0" y="410" width="800" height="40" fill="#070708" opacity="0.55" />
      <text x="40" y="430" fill="#f4efe6" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="3">
        REEL · 0{index + 1}
      </text>
      <text x="760" y="430" textAnchor="end" fill="#f4efe6" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="3">
        24fps · 4K
      </text>
      <g opacity="0.35">
        {Array.from({ length: 40 }).map((_, i) => (
          <rect key={i} x={i * 22} y="200" width="2" height={20 + ((i * 7) % 60)} fill="#f4efe6" />
        ))}
      </g>
    </svg>
  );
}
