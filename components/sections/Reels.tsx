'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Doodle } from '@/components/ScrapbookVisuals';
import { reels, featuredReel, type Reel } from '@/lib/images';

const tilts = [-4, 3, -2.5, 4, -3.5, 2.5, -5, 1.8, -2.2, 4.5, -1.6, 3.2];

export default function Reels() {
  const [active, setActive] = useState<Reel | null>(null);

  return (
    <section id="reels" className="section-pad relative overflow-hidden">
      <Doodle kind="monitor" className="absolute left-[10%] top-16 hidden h-20 w-20 rotate-[-12deg] md:block" />
      <Doodle kind="spark" className="absolute right-[12%] top-24 hidden h-16 w-16 rotate-[14deg] md:block" data-gsap-float="10" />
      <Doodle kind="cursor" className="absolute bottom-24 right-[18%] hidden h-16 w-16 rotate-[8deg] md:block" />

      <div className="shell">
        <div className="mx-auto max-w-[920px] text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 0.8 }}
            className="hand text-3xl text-accent"
          >
            motion reel
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-3 font-display text-5xl font-light leading-[0.98] text-paper-light md:text-7xl"
          >
            Cuts, transitions and tiny stories.
          </motion.h2>
          <p className="mx-auto mt-5 max-w-[44ch] text-[14px] font-semibold text-muted">
            Hover any card to peek the edit. Tap or click to open a full preview &mdash; vertical 9:16, the way they were shipped.
          </p>
        </div>

        <FeaturedReel reel={featuredReel} onOpen={() => setActive(featuredReel)} />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.95, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative mx-auto mt-16 max-w-[1180px] rounded-[18px] bg-paper-light/[0.04] p-5 md:p-7"
        >
          <span className="tape left-[12%] top-[-12px]" />
          <span className="tape right-[16%] top-[-12px] rotate-[7deg]" />

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {reels.map((r, i) => (
              <ReelCard
                key={r.slug}
                reel={r}
                tilt={tilts[i % tilts.length]}
                delay={(i % 5) * 0.05}
                onOpen={() => setActive(r)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <ReelModal reel={active} onClose={() => setActive(null)} />
    </section>
  );
}

function FeaturedReel({ reel, onOpen }: { reel: Reel; onOpen: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const onEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };
  const onLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 46 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative mx-auto mt-16 grid max-w-[1100px] items-center gap-10 md:grid-cols-[0.95fr_1.05fr]"
    >
      <motion.button
        type="button"
        onClick={onOpen}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        whileHover={{ rotate: -1, y: -8, scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 160, damping: 20 }}
        className="polaroid relative mx-auto aspect-[9/16] w-[260px] rotate-[-3deg] overflow-hidden text-left md:w-[300px]"
        data-cursor="hover"
        aria-label={`Play ${reel.title}`}
      >
        <span className="tape left-1/2 top-[-12px] -translate-x-1/2" />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={reel.src}
          poster={reel.poster}
          muted
          playsInline
          loop
          preload="none"
        />
        <PlayBadge />
        <div className="absolute bottom-3 left-4 right-4 flex items-baseline justify-between">
          <span className="hand text-2xl leading-none text-accent">{reel.title}</span>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-soft">9:16</span>
        </div>
      </motion.button>

      <div>
        <div className="hand text-3xl text-accent">featured reel</div>
        <h3 className="mt-3 font-display text-4xl font-light leading-[1] text-paper-light md:text-5xl">
          A short edit, paced to feel collected.
        </h3>
        <p className="mt-5 max-w-[44ch] text-[15px] font-semibold leading-[1.55] text-muted">
          Most of these are Reels and shorts cut between brand drops, retail rides and studio
          rehearsals &mdash; built around restraint and rhythm rather than tricks.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Motion'].map((tool) => (
            <span key={tool} className="rounded-full border border-paper-light/30 px-3 py-1 text-[11px] font-bold text-paper-light/80">
              {tool}
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent px-4 py-2 text-[12px] font-bold uppercase tracking-[0.18em] text-accent transition hover:bg-accent hover:text-paper-light"
          data-cursor="hover"
        >
          play featured reel
          <span aria-hidden>→</span>
        </button>
      </div>
    </motion.div>
  );
}

function ReelCard({
  reel,
  tilt,
  delay,
  onOpen,
}: {
  reel: Reel;
  tilt: number;
  delay: number;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const onEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play()
      .then(() => setPlaying(true))
      .catch(() => {});
  };
  const onLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30, rotate: tilt - 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      whileHover={{ y: -10, rotate: tilt * 0.4, scale: 1.05, zIndex: 25 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className="polaroid relative aspect-[9/16] overflow-hidden text-left"
      data-cursor="hover"
      aria-label={`Play ${reel.title}`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={reel.src}
        poster={reel.poster}
        muted
        playsInline
        loop
        preload="none"
      />
      <PlayBadge small show={!playing} />
      <div className="absolute bottom-2 left-3 right-3 flex items-baseline justify-between">
        <span className="hand text-base leading-none text-accent">{reel.title}</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink-soft">
          {reel.tag.split(' / ')[0]}
        </span>
      </div>
    </motion.button>
  );
}

function PlayBadge({ small = false, show = true }: { small?: boolean; show?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 grid place-items-center transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`grid place-items-center rounded-full border border-paper-light/70 bg-bg/45 backdrop-blur-[3px] ${
          small ? 'h-10 w-10' : 'h-16 w-16'
        }`}
      >
        <span
          className="ml-[2px] block"
          style={{
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: small ? '6px 0 6px 10px' : '10px 0 10px 16px',
            borderColor: 'transparent transparent transparent var(--paper-light, #f8efe2)',
          }}
        />
      </div>
    </div>
  );
}

function ReelModal({ reel, onClose }: { reel: Reel | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {reel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[120] grid place-items-center bg-bg/85 px-5 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-full max-w-[420px]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="tape left-1/2 top-[-12px] -translate-x-1/2" />
            <div className="polaroid relative aspect-[9/16] w-full overflow-hidden">
              <video
                key={reel.slug}
                src={reel.src}
                poster={reel.poster}
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                controls
                playsInline
                loop
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between text-paper-light">
              <div>
                <div className="hand text-2xl text-accent">{reel.title}</div>
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">{reel.tag}</div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-paper-light/40 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-paper-light/80 transition hover:border-accent hover:text-accent"
                data-cursor="hover"
              >
                close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
