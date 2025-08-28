import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Works from './components/sections/Works';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';


export default function Home() {
  return (
    <main >
      <Hero/>
      <About/>
      <Works/>
      <Skills/>
      <Contact/>
    </main>
  );
}
