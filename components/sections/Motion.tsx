'use client';

import { motion } from 'framer-motion';

const items = [
  { title: 'Title Sequence — Cryo', tag: 'After Effects · 18s' },
  { title: 'Brand Reel — Element', tag: 'Premiere · 32s' },
  { title: 'Product Loop — Plasma', tag: 'AE · Loop · 6s' },
  { title: 'IG Drop — GRC', tag: 'AE · 9:16 · 14s' },
  { title: 'Lower-thirds Kit', tag: 'AE · System' },
  { title: 'Type Animation', tag: 'AE · Kinetic' },
];

export default function MotionSection() {
  return (
    <section id="motion" className="relative px-6 md:px-10 py-32 md:py-48 border-t border-white/5">
      <div className="mb-20 flex justify-between items-end">
        <div>
          <div className="eyebrow mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            <span>05 — Motion Graphics</span>
          </div>
          <h2 className="h-display text-5xl md:text-7xl">
            Frame by <span className="italic">frame</span>.
          </h2>
        </div>
        <div className="hidden md:block eyebrow text-bone/50 max-w-xs">
          After Effects loops, kinetic type, transitions & brand motion systems.
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.05 }}
            className="relative aspect-square glass rounded-2xl overflow-hidden group"
          >
            <MotionTile index={i} />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="eyebrow text-bone/50 mb-1">{it.tag}</div>
              <h3 className="font-display text-xl text-bone">{it.title}</h3>
            </div>
            <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-bone/90 grid place-items-center text-ink-950 opacity-0 group-hover:opacity-100 transition">
              ▶
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function MotionTile({ index }: { index: number }) {
  const palettes = [
    ['#c9a25a', '#e9b5a8'],
    ['#8a7dff', '#c9a25a'],
    ['#e9b5a8', '#8a7dff'],
    ['#c9a25a', '#8a7dff'],
    ['#e9b5a8', '#c9a25a'],
    ['#8a7dff', '#e9b5a8'],
  ];
  const [a, b] = palettes[index % palettes.length];
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full">
      <defs>
        <linearGradient id={`mo${index}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={a} />
          <stop offset="100%" stopColor={b} />
        </linearGradient>
        <radialGradient id={`mor${index}`}>
          <stop offset="0%" stopColor={a} stopOpacity="0.8" />
          <stop offset="100%" stopColor="#070708" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="#0b0b0f" />
      <circle cx="200" cy="200" r="180" fill={`url(#mor${index})`} />
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 30 + index * 4, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '200px 200px' }}
      >
        <circle cx="200" cy="200" r="120" fill="none" stroke={`url(#mo${index})`} strokeWidth="1" />
        <circle cx="200" cy="80" r="6" fill={a} />
      </motion.g>
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 22 + index * 3, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: '200px 200px' }}
      >
        <rect x="160" y="160" width="80" height="80" fill="none" stroke={b} strokeWidth="1.2" />
      </motion.g>
      <text x="200" y="210" textAnchor="middle" fill="#f4efe6" fontFamily="Fraunces" fontSize="44" fontWeight="300">
        {String(index + 1).padStart(2, '0')}
      </text>
    </svg>
  );
}
