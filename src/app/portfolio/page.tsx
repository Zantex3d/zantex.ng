'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight, Cpu, Sun, Wifi } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'UNIMAID hostel connectivity',
    category: 'Campus and hostel connectivity',
    context: 'University of Maiduguri',
    service: 'Hostel Wi-Fi',
    icon: Wifi,
    description: 'Zantex has deployed internet connectivity across all hostels at the University of Maiduguri.',
  },
  {
    title: 'UMTH hostel connectivity',
    category: 'Campus and hostel connectivity',
    context: 'University of Maiduguri Teaching Hospital',
    service: 'Hostel Wi-Fi',
    icon: Wifi,
    description: 'Zantex has deployed internet connectivity across all hostels at the University of Maiduguri Teaching Hospital.',
  },
  {
    title: 'Solar power installations',
    category: 'Solar and renewable energy',
    context: 'Solar installation experience across Zantex projects',
    service: 'Solar installation',
    icon: Sun,
    description: 'Zantex has installed solar systems across its projects, adding practical renewable-energy experience to its engineering work.',
  },
  {
    title: 'Digital and electronics development',
    category: 'Digital development and electronics',
    context: 'Digital development and electronics service capability',
    service: 'IoT development',
    icon: Cpu,
    description: 'Explore Zantex digital, IoT and electronics services, or contact the team to discuss a project suited to your requirements.',
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
                className="group"
              >
                <div className="relative mb-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[2.5rem] bg-[#2f455c] shadow-xl shadow-slate-200/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#34f5c6]/30 via-transparent to-black/20" />
                  <p.icon className="relative h-20 w-20 text-[#34f5c6]" aria-hidden="true" />
                  <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-[#2f455c]/70 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                    {p.category}
                  </div>
                </div>

                <div className="px-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">{p.context}</p>
                  <h3 className="mb-2 text-xl font-black text-[#2f455c]">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">
                    {p.description}
                  </p>
                  <Link
                    href={`/quote?service=${encodeURIComponent(p.service)}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#2f455c] hover:text-[#168f78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168f78]"
                  >
                    Discuss a related project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
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
