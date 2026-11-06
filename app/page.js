import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";
import Education from "./components/Education";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <CaseStudy />
        <Education />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </>
  );
}