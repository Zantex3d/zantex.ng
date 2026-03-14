import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-20 grayscale pointer-events-none overflow-hidden h-auto">
          {/* Placeholder for trusted companies */}
          <div className="text-lg md:text-xl font-black italic tracking-widest text-[#2f455c]">TECHLOGIX</div>
          <div className="text-lg md:text-xl font-black italic tracking-widest text-[#2f455c]">QUANTUM</div>
          <div className="text-lg md:text-xl font-black italic tracking-widest text-[#2f455c]">NEXUS</div>
          <div className="text-lg md:text-xl font-black italic tracking-widest text-[#2f455c]">ORBIT</div>
          <div className="text-lg md:text-xl font-black italic tracking-widest text-[#2f455c]">VANTAGE</div>
        </div>
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <BlogPreview />
        <Footer />
      </div>
    </main>
  );
}
