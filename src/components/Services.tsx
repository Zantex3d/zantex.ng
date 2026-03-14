'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MoveLeft, MoveRight } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';

const divisions = [
  {
    title: 'Zantex Digital',
    badge: 'Digital Solutions',
    description: 'Elite web design, mobile apps, UI/UX design, and strategic branding for startups and premium enterprises.',
    accent: 'bg-[#34f5c6]',
    href: '/divisions/zantex-digital',
  },
  {
    title: 'Zantex Electrical',
    badge: 'Electrical Engineering',
    description: 'Expert installations, power distribution, network design, and specialized internet infrastructure like Starlink.',
    accent: 'bg-[#2f455c]',
    href: '/divisions/zantex-electrical',
  },
  {
    title: 'Zantex Electronics',
    badge: 'Electronics & IoT',
    description: 'Arduino, Robotics, and IoT training programs designed to empower the next generation of tech innovators.',
    accent: 'bg-[#34f5c6]',
    href: '/divisions/zantex-electronics',
  },
  {
    title: 'Zantex Zone',
    badge: 'Restaurant & Dining',
    description: 'A premium dining experience inside Zantex HQ, featuring smart food ordering and a curated menu system.',
    accent: 'bg-[#2f455c]',
    href: '/divisions/zantex-zone',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[5.5rem] font-black text-[#2f455c] leading-[0.9] tracking-tight"
            >
              Our <br />
              <span className="text-slate-300 font-black">Divisions</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-sm text-left md:text-right pb-4"
          >
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
              We provide a wide range of technology divisions. <br />
              Covering all of your business and innovation needs.
            </p>
          </motion.div>
        </div>

        {/* Draggable/Scrollable Cards Section */}
        <div className="relative">
          <motion.div 
            ref={containerRef}
            drag="x"
            dragConstraints={{ right: 0, left: -600 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-auto lg:overflow-x-visible pb-12 lg:pb-0 no-scrollbar snap-x snap-mandatory lg:snap-none"
            dragListener={typeof window !== 'undefined' && window.innerWidth >= 1024}
          >
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] md:w-[400px] h-[580px] rounded-[3rem] bg-white border border-slate-100 p-10 flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#2f455c]/10 transition-all duration-500 snap-start"
              >
                {/* Visual Vector Accents */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                   <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <pattern id={`pattern-${index}`} width="10" height="10" patternUnits="userSpaceOnUse">
                         <circle cx="1" cy="1" r="1" fill="currentColor" className="text-slate-900" />
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                   </svg>
                   <div className={`absolute top-0 right-0 w-48 h-48 blur-[100px] opacity-20 ${division.accent}`} />
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#2f455c]/5 rounded-full scale-150 group-hover:scale-100 transition-transform duration-1000" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Badge */}
                  <div className="mb-8">
                    <span className="bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl text-[#2f455c] text-[10px] font-black uppercase tracking-widest border border-slate-100">
                      {division.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-auto mb-10">
                    <div 
                      className="w-12 h-1.5 mb-8 rounded-full group-hover:w-24 transition-all duration-500" 
                      style={{ backgroundColor: '#34f5c6' }}
                    />
                    <h3 className="text-3xl md:text-4xl font-black text-[#2f455c] mb-6 tracking-tight leading-[1.1]">
                      {division.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed line-clamp-4 font-medium">
                      {division.description}
                    </p>
                  </div>

                  {/* Learn More + Icon */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={division.href}
                      className="inline-flex items-center gap-2 text-xs font-black text-[#2f455c] hover:text-[#34f5c6] transition-colors group/link uppercase tracking-widest"
                    >
                      Explore
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                    <Link
                      href={division.href}
                      className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#2f455c] group-hover:bg-[#2f455c] group-hover:text-[#34f5c6] transition-all shadow-sm active:scale-95"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* User Hint - "DRAG" circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:flex flex-col items-center">
             <div className="w-24 h-24 rounded-full bg-white/80 backdrop-blur-md border border-slate-100 flex items-center justify-center animate-bounce shadow-xl">
                <span className="text-[10px] font-black text-[#2f455c] flex items-center gap-1.5 tracking-widest">
                   <MoveLeft className="w-3 h-3 text-[#34f5c6]" /> DRAG <MoveRight className="w-3 h-3 text-[#34f5c6]" />
                </span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
