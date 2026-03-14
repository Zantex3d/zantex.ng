'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight, CheckCircle2, Monitor, Zap, Cpu, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Monitor,
    title: 'Zantex Digital',
    description: 'We build world-class digital products that combine stunning aesthetics with robust performance.',
    features: ['Custom Web Applications', 'Mobile App Development (iOS/Android)', 'Premium UI/UX Design', 'Brand Identity & Strategy'],
    color: '#34f5c6',
    href: '/divisions/zantex-digital',
  },
  {
    icon: Zap,
    title: 'Zantex Electrical',
    description: 'Specialized electrical engineering services focused on power systems and network infrastructure.',
    features: ['Industrial Power Installations', 'Starlink & VSAT Installations', 'Solar Power Solutions', 'Network Design & Cabling'],
    color: '#34f5c6',
    href: '/divisions/zantex-electrical',
  },
  {
    icon: Cpu,
    title: 'Zantex Electronics',
    description: 'Advancing the future through embedded systems, robotics, and comprehensive IoT training.',
    features: ['Arduino & Microcontrollers', 'Robotics Systems Design', 'IoT Product Development', 'Technical Training Programs'],
    color: '#34f5c6',
    href: '/divisions/zantex-electronics',
  },
  {
    icon: UtensilsCrossed,
    title: 'Zantex Zone',
    description: 'Experience the intersection of fine dining and technology in our smart restaurant environments.',
    features: ['Smart Food Systems', 'Curated Menu Experience', 'Tech-Enabled Dining', 'Hospitality Excellence'],
    color: '#34f5c6',
    href: '/divisions/zantex-zone',
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-[#2f455c]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#34f5c6] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8"
          >
            Solutions that define <br /> the <span className="text-[#34f5c6]">Standard.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-base md:text-xl max-w-3xl mx-auto font-medium"
          >
            From high-end software development to complex electrical systems, 
            Zantex delivers engineering excellence across all sectors.
          </motion.p>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 md:p-14 rounded-[3rem] md:rounded-[3.5rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:bg-[#2f455c] transition-all duration-500 h-auto md:h-[650px]"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#2f455c] text-white flex items-center justify-center mb-10 group-hover:bg-[#34f5c6] group-hover:text-[#2f455c] transition-all ring-8 ring-[#2f455c]/5">
                    <s.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-[#2f455c] mb-6 tracking-tight group-hover:text-white transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-slate-500 font-medium group-hover:text-slate-300 transition-colors mb-10 leading-relaxed">
                    {s.description}
                  </p>
                  
                  <div className="space-y-4">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#34f5c6]" />
                        <span className="text-sm font-bold text-[#2f455c] group-hover:text-white transition-colors">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-10 flex items-center justify-between">
                  <Link
                    href={s.href}
                    className="text-sm font-black uppercase tracking-widest text-[#2f455c] group-hover:text-[#34f5c6] transition-colors"
                  >
                    View Division
                  </Link>
                  <Link
                    href={s.href}
                    className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#2f455c] group-hover:bg-[#34f5c6] group-hover:border-[#34f5c6] transition-all shadow-sm"
                  >
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ready to start? ──────────────────────────────────── */}
      <section className="pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-[#34f5c6] rounded-[4rem] p-16 md:p-24 text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-black text-[#2f455c] tracking-tight">
            Ready to enhance <br /> your vision?
          </h2>
          <p className="text-[#2f455c]/70 max-w-xl mx-auto font-bold text-lg">
            Let's discuss how our multidisciplinary team can help you achieve extraordinary results.
          </p>
          <div className="pt-4">
            <Link href="/quote">
              <button className="bg-[#2f455c] text-white px-12 py-5 rounded-[2rem] font-black text-lg hover:scale-105 transition-all shadow-2xl active:scale-95 shadow-[#2f455c]/20">
                Get a Quote
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
