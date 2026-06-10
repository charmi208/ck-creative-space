"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import { Doodle } from "@/components/ScrapbookVisuals";
import { portraits } from "@/lib/images";

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smoothX = useSpring(mx, { stiffness: 70, damping: 22, mass: 0.5 });
  const smoothY = useSpring(my, { stiffness: 70, damping: 22, mass: 0.5 });
  const cardRotateX = useTransform(smoothY, [-1, 1], [3, -3]);
  const cardRotateY = useTransform(smoothX, [-1, 1], [-3, 3]);
  const artX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const artY = useTransform(smoothY, [-1, 1], [-14, 14]);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    my.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      className="relative min-h-[720px] overflow-hidden px-5 pb-24 pt-32 md:min-h-[860px] md:pt-40"
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <Doodle
        kind="stack"
        className="absolute left-[8%] top-[34%] hidden h-20 w-20 rotate-[-15deg] md:block"
        data-gsap-float="10"
      />
      <Doodle
        kind="swirl"
        className="absolute right-[17%] top-[30%] hidden h-28 w-28 rotate-[10deg] md:block"
      />
      <Doodle
        kind="cursor"
        className="absolute right-[9%] top-[46%] hidden h-16 w-16 rotate-[14deg] md:block"
        data-gsap-float="8"
      />
      <Doodle
        kind="flower"
        className="absolute bottom-[15%] left-[13%] hidden h-28 w-28 rotate-[-12deg] md:block"
      />
      <Doodle
        kind="leaf"
        className="absolute bottom-[13%] right-[15%] hidden h-28 w-28 rotate-[10deg] md:block"
        data-gsap-float="12"
      />

      <div className="mx-auto max-w-[820px]">
        <motion.div
          initial={{ opacity: 0, y: 46, rotate: -1.6 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 1.25, duration: 1.15, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ rotateX: cardRotateX, rotateY: cardRotateY }}
          className="paper-card mx-auto flex min-h-[500px] flex-col overflow-hidden p-6 md:min-h-[540px] md:p-9"
          data-cursor="hover"
        >
          <span className="tape left-[-30px] top-[54%] hidden md:block" />
          <span className="tape right-[-24px] top-[52%] hidden rotate-[10deg] md:block" />

          <div className="grid flex-1 min-h-[360px] gap-6 md:grid-cols-[0.86fr_1.14fr] md:items-center md:gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.58, duration: 0.8 }}
                className="hand text-3xl leading-none text-accent"
              >
                Charmi
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.68, duration: 0.85 }}
                className="label mt-2 text-ink-soft"
              >
                Graphic Designer / Video Editor / UI/UX Designer
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.78,
                  duration: 0.95,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="mt-3 font-display text-4xl font-light leading-[0.98] text-accent md:text-5xl"
              >
                Visual stories should feel intentional.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.95, duration: 0.85 }}
                className="mt-4 max-w-[28ch] text-[13.5px] font-medium leading-[1.55] text-ink-soft"
              >
                Brand systems, interfaces and motion pieces shaped with
                editorial calm, playful detail and enough polish to feel
                collected.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.08, duration: 0.8 }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {["Branding", "Motion", "Product UI"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-accent px-3 py-1 text-[11px] font-bold text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              style={{ x: artX, y: artY }}
              className="relative min-h-[260px]"
            >
              <HeroPortrait />
            </motion.div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-accent/50 pt-4 text-[11px] font-bold uppercase tracking-[0.06em] text-accent md:mt-10">
            <span>Gujarat, India</span>
            <span>Selected Archive · 2022–2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroPortrait() {
  return (
    <div className="relative h-full min-h-[300px] w-full">
      <span className="tape left-1/2 top-[-12px] hidden -translate-x-1/2 md:block" />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, rotate: -1.5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 1.4, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        whileHover={{ scale: 1.015, rotate: -0.6 }}
        className="relative mx-auto flex h-full w-full max-w-[520px] items-center justify-center"
        data-cursor="hover"
      >
        <img
          src="/illustrations/hero-doodle.svg"
          alt="Charmi at her creative desk — hand drawn illustration"
          loading="eager"
          className="h-auto w-full select-none"
          draggable={false}
        />
      </motion.div>
      <Doodle
        kind="asterisk"
        coral
        className="absolute right-[6%] top-[2%] h-10 w-10 rotate-[12deg]"
      />
    </div>
  );
}
