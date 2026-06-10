import type { Metadata } from 'next';
import { Caveat, Fraunces, Inter, Italiana } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Cursor from '@/components/Cursor';
import Navigation from '@/components/Navigation';
import Loader from '@/components/Loader';
import SideRails from '@/components/SideRails';
import ScrapbookEffects from '@/components/ScrapbookEffects';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-hand',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
});

const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-editorial',
});

export const metadata: Metadata = {
  title: 'Charmi Kanazariya - Designer / Editor / Storyteller',
  description:
    'Editorial portfolio of Charmi Kanazariya, a multidisciplinary designer working across brand, interface, and motion.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${caveat.variable} ${fraunces.variable} ${inter.variable} ${italiana.variable}`}>
      <body className="bg-bg text-chalk">
        <Loader />
        <Cursor />
        <SideRails />
        <ScrapbookEffects />
        <SmoothScroll>
          <Navigation />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
