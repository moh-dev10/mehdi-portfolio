import About from './components/About';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  );
}