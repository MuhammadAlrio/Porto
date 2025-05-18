import Header from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}
