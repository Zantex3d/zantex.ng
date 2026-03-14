'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "I use Zantex to organize my entire business operations. What started as an experiment became a habit I didn't expect. Now we are three months in.",
    name: "Amara Okonkwo",
    role: "Product Manager",
  },
  {
    id: 2,
    content: "The AI integration actually reads and responds to my data, which so many tools don't. It's been like thinking through problems with a sounding board.",
    name: "Daniel Reyes",
    role: "Freelance Developer",
  },
  {
    id: 3,
    content: "I was looking for something that combined scalable infrastructure and intelligent automation in one place without switching apps constantly. Zantex does that well enough that I stopped looking for alternatives.",
    name: "Sophia Hartmann",
    role: "UX Designer",
  },
  {
    id: 4,
    content: "Staying on top of tasks and projects is incredibly easy. The global infrastructure means I'm connected miles away from my desk.",
    name: "Marcus Thorne",
    role: "Operations Director",
  },
  {
    id: 5,
    content: "I don't try to do too much manual planning for my week anymore. It's reliable every single step of the way.",
    name: "Elena Rostova",
    role: "Startup Founder",
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2); // Center on Sophia

  // Helper to reorder the array so the active index is always in the center
  const getVisibleCards = () => {
    const total = testimonials.length;
    let visible = [];

    for (let i = -2; i <= 2; i++) {
      let index = (activeIndex + i) % total;
      if (index < 0) index += total;
      
      let position = i; // -2, -1, 0, 1, 2
      visible.push({ ...testimonials[index], position });
    }
    return visible;
  };

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-white relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      
      {/* ── Background Elements ───────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Wireframe Grid */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)', 
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 10%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 10%, transparent 60%)'
          }}
        />
        
        {/* Subtle wireframe globe mockup with SVG lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.1]">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-slate-400 fill-none stroke-[0.2]">
             <circle cx="50" cy="50" r="45" />
             <ellipse cx="50" cy="50" rx="45" ry="15" />
             <ellipse cx="50" cy="50" rx="15" ry="45" />
             <path d="M5 50 L95 50" />
             <path d="M50 5 L50 95" />
          </svg>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#34f5c6]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* ── Header ───────────────────────────────────────── */}
        <div className="text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-3">
             <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#34f5c6]/30" />
             <div className="w-1.5 h-1.5 rounded-full bg-[#34f5c6]/60" />
             <span className="text-[10px] font-bold text-[#2f455c] uppercase tracking-widest">Testimonial</span>
             <div className="w-1.5 h-1.5 rounded-full bg-[#34f5c6]/60" />
             <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#34f5c6]/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#2f455c] tracking-tight leading-tight">
            Real People, Real Results <br /> with Zantex
          </h2>
          <p className="text-slate-500 text-sm font-medium">
            See how users are transforming their productivity with Zantex
          </p>
        </div>

        {/* ── Fanned Cards ─────────────────────────────────── */}
        <div className="relative w-full max-w-6xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center mt-10">
          
          <AnimatePresence>
            {getVisibleCards().map((item) => {
              // Calculate transforms based on position (-2, -1, 0, 1, 2)
              const isCenter = item.position === 0;
              const xOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 160;
              const xPos = item.position * xOffset;
              const rotateAmt = item.position * (typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 8); 
              const yPos = Math.abs(item.position) * (typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 30); 
              const scaleAmt = isCenter ? 1 : 1 - Math.abs(item.position) * 0.15;
              const zIndex = 10 - Math.abs(item.position);
              const opacity = isCenter ? 1 : 1 - Math.abs(item.position) * 0.3;

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    x: xPos,
                    y: yPos,
                    rotate: rotateAmt,
                    scale: scaleAmt,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 1,
                  }}
                  onClick={() => {
                    if (item.position < 0) handlePrev();
                    if (item.position > 0) handleNext();
                  }}
                  className={`absolute w-[340px] md:w-[480px] cursor-pointer rounded-[2rem] md:rounded-[3rem] p-10 md:p-14 flex flex-col justify-between shadow-xl
                    ${isCenter 
                      ? 'bg-white border-2 border-[#34f5c6]/20 shadow-[#34f5c6]/5' 
                      : 'bg-slate-50 border border-slate-100 shadow-slate-200/50'
                    }
                  `}
                  style={{ 
                    height: isCenter ? '480px' : '420px',
                    transformOrigin: "bottom center"
                  }}
                >
                  <p className={`text-sm md:text-base leading-relaxed font-medium ${isCenter ? 'text-slate-700' : 'text-slate-500'}`}>
                    "{item.content}"
                  </p>
                  
                  <div className="flex items-end justify-between mt-8 relative z-10">
                    <div>
                      <div className={`font-black text-sm mb-1 ${isCenter ? 'text-[#2f455c]' : 'text-slate-700'}`}>
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400 font-bold tracking-wide">
                        {item.role}
                      </div>
                    </div>
                    
                    {/* Glowing Quote Icon */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md
                      ${isCenter ? 'bg-[#34f5c6]/5 border border-[#34f5c6]/20 shadow-[#34f5c6]/10' : 'bg-white border border-slate-100'}
                    `}>
                      <Quote className={`w-4 h-4 fill-current ${isCenter ? 'text-[#34f5c6]' : 'text-slate-300'}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* ── Dot Indicators ───────────────────────────────────── */}
        <div className="flex items-center justify-center gap-3 mt-16 relative z-20">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-8 bg-[#34f5c6] shadow-sm' : 'w-4 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
