import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import SocialDiary from '@/components/sections/SocialDiary';
import Work from '@/components/sections/Work';
import Reels from '@/components/sections/Reels';
import Philosophy from '@/components/sections/Philosophy';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <About />
      <SocialDiary />
      <Reels />
      <Work />
      <Philosophy />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
