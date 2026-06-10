'use client';

import { motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'about' },
  { href: '#work', label: 'work' },
  { href: '#reels', label: 'reels' },
  { href: '#contact', label: 'connect' },
];

export default function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.15, duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-5 py-8 text-chalk"
    >
      <nav className="flex items-center gap-7 rounded-full bg-bg/18 px-5 py-2 text-[13px] font-bold backdrop-blur-md">
        <a href="#top" className="hand text-lg leading-none text-accent">
          ck
        </a>
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hand soft-link leading-none text-chalk/90">
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
