import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <Achievements />
        <Services />
        <About />
        <Footer />
      </div>
    </main>
  );
}
