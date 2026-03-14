'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wifi, Radio, Zap, Shield, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    icon: Globe,
    title: 'Starlink Enterprise',
    description: 'High-speed, low-latency satellite internet for businesses in remote locations. Professional installation and management.',
    features: ['Professional Mounting', 'Network Integration', '247 Monitoring', 'Static IP Options'],
  },
  {
    icon: Radio,
    title: 'VSAT Solutions',
    description: 'Reliable satellite communication for critical infrastructure and enterprises requiring dedicated bandwidth.',
    features: ['Dedicated Bandwidth', 'Secure VPN', 'Auto-Deployment Antennas', 'Scalable Plans'],
  },
  {
    icon: Wifi,
    title: 'Campus Wi-Fi',
    description: 'End-to-end wireless infrastructure for estates, hospitals, and educational institutions.',
    features: ['Mesh Networking', 'User Management', 'Content Filtering', 'High Concurency'],
  }
];

export default function InternetPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-48 pb-32 overflow-hidden bg-[#2f455c] text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#34f5c6]/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#34f5c6] text-[10px] font-black uppercase tracking-widest mb-10"
          >
            <Wifi className="w-3 h-3" /> Connectivity Solutions
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
              >
                Connecting the <br /> <span className="text-[#34f5c6]">Unreachable.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate-300 text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-10"
              >
                Zantex Internet provides next-generation satellite and infrastructure solutions 
                to ensure your business remains online, no matter the location.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/quote">
                  <button className="bg-[#34f5c6] text-[#2f455c] px-10 py-4 rounded-2xl font-black text-sm hover:scale-105 transition-all shadow-xl shadow-[#34f5c6]/10">
                    Get an Installation Quote
                  </button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Global Connectivity"
              />
              <div className="absolute inset-0 bg-[#2f455c]/30 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Solutions ────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-[#2f455c] tracking-tight mb-4">Enterprise-Grade Connectivity</h2>
            <p className="text-slate-500 font-medium">Reliable infrastructure for every business need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#2f455c] text-[#34f5c6] flex items-center justify-center mb-8">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-[#2f455c] mb-6">{s.title}</h3>
                  <p className="text-slate-500 text-sm font-medium mb-10 leading-relaxed">
                    {s.description}
                  </p>
                  
                  <div className="space-y-4">
                    {s.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#34f5c6]" />
                        <span className="text-[13px] font-bold text-slate-600">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-12">
                  <Link href="/quote">
                    <button className="flex items-center gap-2 text-xs font-black text-[#2f455c] uppercase tracking-widest hover:gap-4 transition-all">
                      Consultation <ArrowRight className="w-4 h-4 text-[#34f5c6]" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Zantex Internet? ─────────────────────────────── */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto rounded-[4rem] bg-slate-900 border border-white/5 p-16 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#34f5c6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Elite Installation <br /> & Expert Support.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#34f5c6]/10 border border-[#34f5c6]/20 flex items-center justify-center text-[#34f5c6]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-black mb-1">Professional Grade</h4>
                    <p className="text-white/50 text-sm font-medium">We use industrial mounting equipment and shielded cabling for every setup.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#34f5c6]/10 border border-[#34f5c6]/20 flex items-center justify-center text-[#34f5c6]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-black mb-1">Secure Networking</h4>
                    <p className="text-white/50 text-sm font-medium">Built-in firewall configuration and VPN routing for enterprise security.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#34f5c6] to-[#2f455c] aspect-square rounded-[3rem] p-1 shadow-2xl">
                 <div className="bg-slate-900 h-full w-full rounded-[2.8rem] flex flex-col items-center justify-center p-12 text-center space-y-4">
                    <span className="text-[#34f5c6] text-6xl font-black">99.9%</span>
                    <span className="text-white font-bold uppercase tracking-widest text-xs opacity-50">SLA Guaranteed Uptime</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
