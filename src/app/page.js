
// app/page.tsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Destinations from '../components/Destinations';
import Tours from '../components/Tours';
import HowWeWork from '../components/HowWeWork';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import About from '../components/About';
export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Destinations />
      <Tours />
      <HowWeWork />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}