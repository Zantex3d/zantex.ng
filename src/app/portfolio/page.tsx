'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'Quantum Dashboard',
    category: 'Digital Service',
    image: 'https://images.unsplash.com/photo-1551288049-bb8c803er9a8?q=80&w=2670&auto=format&fit=crop',
    description: 'A high-performance analytics platform for global logistics tracking.',
  },
  {
    title: 'Smart Power Grid',
    category: 'Electrical Engineering',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop',
    description: 'Industrial-scale solar integration and power management system.',
  },
  {
    title: 'Vantage Mobile App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop',
    description: 'Seamless user experience for premium e-commerce services.',
  },
  {
    title: 'IoT Training Kit',
    category: 'Electronics & IoT',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
    description: 'Advanced Arduino-based learning system for tech enthusiasts.',
  },
  {
    title: 'Zantex Zone Smart Ordering',
    category: 'Restaurant Tech',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2670&auto=format&fit=crop',
    description: 'Interactive menu and automated food management system for the Zantex dining experience.',
  },
  {
    title: 'Starlink Enterprise Setup',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2670&auto=format&fit=crop',
    description: 'High-speed satellite internet deployment for remote locations.',
  }
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[#2f455c] text-[10px] font-black uppercase tracking-widest mb-8"
          >
            Our Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black text-[#2f455c] tracking-tighter leading-[0.9] mb-12"
          >
            Engineering <br /> <span className="text-[#34f5c6]">Impact.</span>
          </motion.h1>
          <div className="w-full h-px bg-slate-100" />
        </div>
      </section>

      {/* ── Portfolio Grid ───────────────────────────────────── */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-xl shadow-slate-200/50">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2f455c]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-4">
                       <button className="p-3 bg-white rounded-full text-[#2f455c] hover:bg-[#34f5c6] transition-colors shadow-lg">
                          <ExternalLink className="w-5 h-5" />
                       </button>
                       <button className="p-3 bg-white rounded-full text-[#2f455c] hover:bg-[#34f5c6] transition-colors shadow-lg">
                          <Github className="w-5 h-5" />
                       </button>
                    </div>
                  </div>
                </div>

                <div className="px-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#34f5c6] mb-2 inline-block">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-black text-[#2f455c] mb-2 group-hover:text-[#34f5c6] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#2f455c] tracking-tight mb-8">
            Have a project in mind?
          </h2>
          <Link href="/quote">
            <button className="bg-[#2f455c] text-white px-10 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl active:scale-95">
              Start a Conversation
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
