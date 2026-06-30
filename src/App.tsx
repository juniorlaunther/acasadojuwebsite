import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Projects from './components/Projects';
import Audience from './components/Audience';
import InstagramFeed from './components/InstagramFeed';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] selection:bg-pink-500 selection:text-white">
      <Hero />
      <Stats />
      <About />
      <Projects />
      <Audience />
      <InstagramFeed />
      <Partners />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
