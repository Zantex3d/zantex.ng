'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, ShieldCheck, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-400"
          >
            Innovation
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#2f455c] tracking-tight"
          >
            Why tech visionaries choose Zantex
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Exceptional services and unparalleled engineering that set the standard for digital transformation and infrastructure.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
          
          {/* Left Tall Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative group border border-slate-100/50"
          >
            <div className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden mb-10 shadow-sm border border-white">
               <img 
                 src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
                 alt="Premium Engineering" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="relative z-10 space-y-6">
              <h3 className="text-2xl md:text-3xl font-black text-[#2f455c] leading-[1.1] tracking-tight">
                Handcrafted by master engineers to power the future of global enhancement.
              </h3>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 bg-[#2f455c] text-white font-black p-1 pr-6 rounded-full group/btn hover:bg-[#34f5c6] hover:text-[#2f455c] transition-all"
                style={{ fontSize: '13px' }}
              >
                <span className="w-10 h-10 rounded-full bg-white text-[#2f455c] flex items-center justify-center group-hover/btn:scale-95 transition-transform shadow-sm">
                  <ArrowRight className="w-5 h-5" />
                </span>
                Our Vision
              </Link>
            </div>
          </motion.div>

          {/* Right Side Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Top Row: Two Small Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
              {/* Trusted Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50 rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden relative border border-slate-100/50"
              >
                <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 shadow-sm border border-white">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-black text-[#2f455c] tracking-tight">
                  Trusted by <span className="text-slate-400 font-normal">top brands & companies.</span>
                </h4>
              </motion.div>

              {/* 100% / Stat Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-50 rounded-[2.5rem] p-8 flex items-center gap-6 overflow-hidden relative border border-slate-100/50"
              >
                <div className="space-y-2">
                  <div className="text-5xl font-black text-[#2f455c]">99%</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
                    Uptime on Zantex <br /> network infrastructure.
                  </div>
                </div>
                <div className="flex-1 h-32 flex justify-end">
                   <div className="w-20 h-full rounded-2xl bg-[#34f5c6]/10 flex items-center justify-center">
                      <ShieldCheck className="w-10 h-10 text-[#34f5c6] animate-pulse" />
                   </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Wide Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-50 rounded-[2.5rem] flex-1 min-h-[300px] flex flex-col md:flex-row items-center gap-8 overflow-hidden relative border border-slate-100/50 p-0"
            >
              <div className="p-8 md:p-12 md:w-3/5 space-y-6">
                <h3 className="text-2xl md:text-3xl font-black text-[#2f455c] tracking-tight leading-[1.1]">
                  Powering innovation through <span className="text-slate-400 font-normal">advanced engineering, digital crafts and electronics mastery.</span>
                </h3>
              </div>
              <div className="md:w-2/5 h-full relative">
                 <img 
                   src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop" 
                   alt="Tech Transformation" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Make Conversations Happen Banner ────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[240px] md:h-[300px] rounded-[2.5rem] overflow-hidden flex items-center justify-center group cursor-pointer shadow-2xl shadow-[#34f5c6]/10"
        >
          {/* Wavy Background Gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-[#2f455c] via-[#3d5a78] to-[#2f455c] transition-transform duration-700 group-hover:scale-110"
          >
            {/* Pseudo-wavy patterns using radial gradients */}
            <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] bg-[radial-gradient(circle_at_center,_#34f5c622_0%,_transparent_50%)] blur-3xl animate-pulse" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[100%] h-[200%] bg-[radial-gradient(circle_at_center,_#34f5c611_0%,_transparent_50%)] blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* SVG Wave Pattern for more literal 'waviness' */}
            <svg className="absolute inset-0 w-full h-full opacity-10 mix-blend-overlay" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 50 Q 25 20 50 50 T 100 50 V 100 H 0 Z" fill="#34f5c6" />
              <path d="M0 60 Q 25 30 50 60 T 100 60 V 100 H 0 Z" fill="#34f5c6" opacity="0.5" />
            </svg>
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-sm">
              Make Conversations <span className="text-[#34f5c6]">Happen</span>
            </h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
