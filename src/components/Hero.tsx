'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
          <span className="break-words">Engineering. Technology.</span>
          <span className="mt-3 text-[0.4em] font-bold uppercase tracking-[0.2em] text-slate-400 opacity-70">Digital Innovation.</span>
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
          Zantex delivers integrated electrical engineering, solar power systems, network
          infrastructure, digital solutions and intelligent electronics for homes, businesses,
          institutions and communities.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link href="/quote">
            <button
              className="inline-flex items-center gap-4 font-black rounded-full transition-all duration-300 hover:scale-[1.05] active:scale-95 group shadow-2xl shadow-[#34f5c6]/10 bg-[#2f455c] text-white"
              style={{
                padding: '14px 20px 14px 32px',
                fontSize: '15px',
              }}
            >
              Get a Quotation
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
          </Link>

          <Link href="/portfolio">
            <button className="text-[#2f455c] font-bold text-sm px-8 py-4 rounded-full border-2 border-slate-100 hover:border-[#2f455c] transition-colors">
              Explore Our Projects
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative mx-auto mt-12 w-full max-w-5xl px-6 pb-12"
      >
        <img
          src="/images/hero.png"
          alt="Abstract circuit-board illustration representing Zantex engineering and technology services"
          className="h-52 w-full rounded-3xl object-cover shadow-xl shadow-[#2f455c]/10 sm:h-72 md:h-[22rem]"
        />
      </motion.div>
    </section>
  );
}
