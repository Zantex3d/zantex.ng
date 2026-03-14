'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const cards = [
  {
    id: 1,
    style: {
      background: 'linear-gradient(160deg, #1b2836 0%, #2f455c 45%, #1b2836 100%)',
    },
    glowColor: 'rgba(47, 69, 92, 0.45)',
    rotate: '-7deg',
    zIndex: 10,
    translateY: 32,
    cardNum: '8758 **** **** 0047',
    holder: 'ZANTEX DIGITAL',
    expiry: 'Q1/26',
    cvv: '1.0',
  },
  {
    id: 2,
    style: {
      background: 'linear-gradient(160deg, #2f455c 0%, #34f5c6 100%)',
    },
    glowColor: 'rgba(52, 245, 198, 0.5)',
    rotate: '0deg',
    zIndex: 20,
    translateY: 0,
    cardNum: '3759 **** **** 3456',
    holder: 'ZANTEX GLOBAL',
    expiry: 'Q4/25',
    cvv: '2.4',
  },
  {
    id: 3,
    style: {
      background: 'linear-gradient(160deg, #1b2836 0%, #2f455c 100%)',
    },
    glowColor: 'rgba(27, 40, 54, 0.4)',
    rotate: '7deg',
    zIndex: 10,
    translateY: 32,
    cardNum: '9270 **** **** 1554',
    holder: 'ZANTEX ELECTRONICS',
    expiry: 'Q2/25',
    cvv: '0.8',
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[95vh] flex flex-col items-center overflow-hidden bg-white"
    >
      {/* ── Background Elements (Performance Optimized) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Simple Dot Grid - No intense animation to prevent lag */}
        <div 
          className="absolute inset-0 opacity-[0.1]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at center, #2f455c 1px, transparent 1px)', 
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)'
          }}
        />

        {/* Falling Lighting Streaks - Simple & Optimized */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: ['-100%', '200%'],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 6 + i, 
              repeat: Infinity, 
              ease: "linear",
              delay: i * 2.5
            }}
            className={`absolute w-[1.5px] ${i % 2 === 0 ? 'bg-[#2f455c]' : 'bg-[#34f5c6]'}`}
            style={{ 
              left: `${20 + i * 20}%`, 
              height: '350px',
              filter: 'blur(1px)'
            }}
          />
        ))}

        {/* Static Focal Lighting - Low computational cost */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-[0.08]"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, #34f5c6 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Text Content ─────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col items-center text-center pt-32 md:pt-48 pb-0 px-6 max-w-7xl mx-auto w-full">
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full mb-10 shadow-sm border border-slate-100 bg-white/40 backdrop-blur-md"
        >
          <span className="text-slate-400 text-[11px] font-bold uppercase tracking-wider text-center">Empowering the next generation of —</span>
          <a
            href="/about"
            className="text-[#34f5c6] text-[11px] font-extrabold flex items-center gap-1 hover:underline underline-offset-4"
          >
            Engineering Excellence <ArrowRight className="w-3 h-3" />
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-[#2f455c] font-black tracking-tighter mb-4 flex flex-col text-center"
          style={{ fontSize: 'clamp(2rem, 8.5vw, 6.2rem)', lineHeight: 0.85 }}
        >
          <span className="break-words">Engineering Innovation</span>
          <span className="text-slate-400 opacity-40 text-[0.4em] tracking-[0.2em] uppercase font-bold mt-3">Powering the Future</span>
        </motion.h1>

        {/* Subheadline Section (Subtle Style) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-transparent text-slate-400 px-8 py-3 flex items-center gap-6 mb-12"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Creativity</span>
          <div className="w-2.5 h-2.5 rounded-full border border-slate-300 flex items-center justify-center">
             <div className="w-1 h-1 bg-slate-300 rounded-full" />
          </div>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Versatility</span>
          <div className="w-2.5 h-2.5 rounded-full border border-slate-300 flex items-center justify-center">
             <div className="w-1 h-1 bg-slate-300 rounded-full" />
          </div>
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Intelligence</span>
        </motion.div>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-2xl mb-12"
        >
          At Zantex Global Enhancement, we craft powerful solutions in Digital Services, 
          Electrical Engineering, and Electronics Development to drive innovation across industries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <button
            className="inline-flex items-center gap-4 font-black rounded-full transition-all duration-300 hover:scale-[1.05] active:scale-95 group shadow-2xl shadow-[#34f5c6]/10 bg-[#2f455c] text-white"
            style={{
              padding: '14px 20px 14px 32px',
              fontSize: '15px',
            }}
          >
            Explore Services
            <span
              className="inline-flex items-center justify-center rounded-full bg-[#34f5c6] text-[#2f455c] group-hover:rotate-45 transition-transform duration-500"
              style={{
                width: 36,
                height: 36,
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>

          <Link href="/quote">
            <button className="text-[#2f455c] font-bold text-sm px-8 py-4 rounded-full border-2 border-slate-100 hover:border-[#2f455c] transition-colors">
              Get a Quote
            </button>
          </Link>
        </motion.div>
      </div>

      {/* ── Cards Section ────────────────────────────────────────────── */}
      <div
        className="relative w-full flex-1 hidden lg:flex items-end justify-center mt-12"
        style={{ minHeight: 400 }}
      >
        <div className="relative flex items-end justify-center w-full max-w-5xl px-4 pb-0 overflow-visible h-[360px]">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: card.translateY }}
              transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                zIndex: card.zIndex,
                rotate: card.rotate,
                marginLeft: i === 0 ? 0 : -55,
                filter: `drop-shadow(0 45px 90px ${card.glowColor})`,
              }}
              className="group cursor-pointer"
            >
              <div
                style={{
                  width: 210,
                  height: 325,
                  borderRadius: 36,
                  overflow: 'hidden',
                  ...card.style,
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
                className="relative flex flex-col justify-between p-6 hover:scale-[1.02] transition-transform duration-500"
              >
                <div className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
                     style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '4px 4px' }} />

                <div 
                  className="absolute bottom-10 right-[-10px] w-[110%] h-[80%] opacity-40 mix-blend-screen pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%)',
                    maskImage: 'linear-gradient(to top, black, transparent)',
                  }}
                >
                  <div className="absolute inset-0 scale-[1.2]" style={{
                      backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)',
                      backgroundSize: '10px 10px',
                      opacity: 0.15
                  }} />
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <div className="w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    </div>
                    <div className="text-white">
                      <div className="text-[13px] font-black leading-tight tracking-tight">Zantex</div>
                      <div className="text-[11px] font-medium opacity-60 leading-tight">Tech™</div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 mt-auto">
                    <div className="text-white/40 text-[9px] font-bold uppercase tracking-widest mb-1.5">Project Ref.</div>
                    <div className="text-white text-[12px] font-mono tracking-widest mb-5 font-bold">{card.cardNum}</div>
                    
                    <div className="bg-white/20 h-[1.5px] w-full mb-5 rounded-full" />

                    <div className="text-white text-[12px] font-black uppercase tracking-wider mb-4 leading-none">{card.holder}</div>
                    
                    <div className="flex gap-8">
                        <div>
                            <div className="text-white/40 text-[8px] font-bold uppercase tracking-widest mb-1">Release</div>
                            <div className="text-white text-[10px] font-mono font-bold">{card.expiry}</div>
                        </div>
                        <div>
                            <div className="text-white/40 text-[8px] font-bold uppercase tracking-widest mb-1">Ver.</div>
                            <div className="text-white text-[10px] font-mono font-bold">v{card.cvv}</div>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
