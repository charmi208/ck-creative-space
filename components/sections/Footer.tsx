'use client';

import { Doodle } from '@/components/ScrapbookVisuals';

export default function Footer() {
  return (
    <footer className="relative px-5 pb-12 text-center text-chalk">
      <Doodle kind="spark" coral className="mx-auto mb-3 h-12 w-12" />
      <div className="hand text-4xl leading-none text-accent">Charmi</div>
      <div className="mt-4 flex flex-wrap justify-center gap-5 text-[12px] font-bold uppercase text-muted">
        <span>Gujarat / 2026</span>
        <a href="mailto:charmik208@gmail.com" className="soft-link">
          Email
        </a>
        <a href="https://linkedin.com/in/charmikanazariya-b01487214" className="soft-link">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
