'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const NAME = 'Charmi Kanazariya';

export default function Loader() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((current) => {
        if (current >= 100) {
          clearInterval(id);
          setTimeout(() => setShow(false), 380);
          return 100;
        }
        return Math.min(100, current + Math.floor(Math.random() * 8) + 5);
      });
    }, 56);

    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] grid place-items-center bg-bg text-chalk"
          exit={{ y: '-100%', transition: { duration: 1, ease: [0.72, 0, 0.28, 1] } }}
        >
          <div className="paper-card w-[min(86vw,520px)] p-8 text-center">
            <div className="hand text-3xl text-accent">opening archive</div>
            <div className="mt-4 overflow-hidden">
              <div className="editorial text-5xl leading-none text-ink md:text-7xl">{NAME}</div>
            </div>
            <div className="mt-8 h-2 overflow-hidden rounded-full border border-accent bg-paper-light">
              <motion.div
                className="h-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: count / 100 }}
                transition={{ ease: 'easeOut' }}
              />
            </div>
            <div className="label mt-4">{String(count).padStart(2, '0')} / 100</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
