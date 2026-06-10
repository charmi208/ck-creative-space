'use client';

import { motion } from 'framer-motion';

const cases = [
  {
    title: 'Plasma Motors',
    subtitle: 'EV configurator · 0 → 1',
    metrics: ['+38% conv.', '–22% bounce', '12k MAU'],
    desc: 'A configurator where the car drives the page. Spec scrolls, color trims, soft swaps — all keyed to motion timing and weight.',
    accent: 'gold',
  },
  {
    title: 'Ice Cream App',
    subtitle: 'D2C mobile experience',
    metrics: ['4.8★ rating', '+54% AOV', '2 weeks'],
    desc: 'Hyper-tactile food UI: cards that scoop, transitions that drip, micro-interactions that taste sweet. Built around impulse browsing.',
    accent: 'rose',
  },
];

export default function UIUX() {
  return (
    <section id="uiux" className="relative px-6 md:px-10 py-32 md:py-48 border-t border-white/5">
      <div className="mb-20">
        <div className="eyebrow mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-gold" />
          <span>04 — UI/UX Case Studies</span>
        </div>
        <h2 className="h-display text-5xl md:text-7xl">
          Interfaces that <span className="italic gradient-text">feel inevitable</span>.
        </h2>
      </div>

      <div className="space-y-16">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20%' }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
              i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="md:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden glass">
              <DeviceMock title={c.title} accent={c.accent} index={i} />
            </div>
            <div className="md:col-span-5">
              <div className="eyebrow text-bone/40 mb-2">Case Study · 0{i + 1}</div>
              <h3 className="h-display text-4xl md:text-5xl mb-2">{c.title}</h3>
              <div className="text-gold eyebrow mb-6">{c.subtitle}</div>
              <p className="text-bone/70 leading-relaxed mb-8">{c.desc}</p>
              <div className="grid grid-cols-3 gap-4">
                {c.metrics.map((m) => (
                  <div key={m} className="border-t border-white/10 pt-3">
                    <div className="font-display text-2xl text-bone">{m}</div>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-flex items-center gap-3 mt-8 eyebrow text-gold hover:gap-5 transition-all">
                Read case study <span>→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function DeviceMock({ title, accent, index }: { title: string; accent: string; index: number }) {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-full">
      <defs>
        <linearGradient id={`uix${index}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0b0b0f" />
          <stop offset="100%" stopColor="#1a1a22" />
        </linearGradient>
        <linearGradient id={`uixacc${index}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={accent === 'gold' ? '#c9a25a' : '#e9b5a8'} />
          <stop offset="100%" stopColor="#8a7dff" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill={`url(#uix${index})`} />
      {/* sidebar */}
      <rect x="40" y="40" width="120" height="420" rx="14" fill="#0b0b0f" stroke="#1a1a22" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="56" y={70 + i * 36} width="88" height="20" rx="6" fill={i === 1 ? `url(#uixacc${index})` : '#1a1a22'} opacity={i === 1 ? 1 : 0.7} />
      ))}
      {/* main canvas */}
      <rect x="180" y="40" width="580" height="80" rx="14" fill="#0b0b0f" />
      <text x="200" y="80" fill="#f4efe6" fontFamily="Fraunces" fontSize="22" fontWeight="300">{title}</text>
      <text x="200" y="102" fill="#c9a25a" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="3">DASHBOARD · OVERVIEW</text>

      <rect x="180" y="140" width="280" height="180" rx="14" fill={`url(#uixacc${index})`} opacity="0.85" />
      <rect x="476" y="140" width="284" height="180" rx="14" fill="#0b0b0f" stroke="#1a1a22" />
      <polyline points="490,290 540,250 590,265 640,220 690,235 740,200" fill="none" stroke="#c9a25a" strokeWidth="2" />

      <rect x="180" y="336" width="180" height="124" rx="12" fill="#0b0b0f" stroke="#1a1a22" />
      <rect x="376" y="336" width="180" height="124" rx="12" fill="#0b0b0f" stroke="#1a1a22" />
      <rect x="572" y="336" width="188" height="124" rx="12" fill="#0b0b0f" stroke="#1a1a22" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={224 + i * 196} cy={398} r="22" fill={`url(#uixacc${index})`} opacity="0.6" />
      ))}
    </svg>
  );
}
