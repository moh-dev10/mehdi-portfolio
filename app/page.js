import About from './components/About';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee/>
      <About/>
      <Skills/>
    </main>
  );
}