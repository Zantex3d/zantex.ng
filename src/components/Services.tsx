'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MoveLeft, MoveRight } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';

const divisions = [
  {
    title: 'Zantex Electrical',
    badge: 'Electrical Engineering',
    description: 'Electrical system planning, building installations, power distribution and solar energy solutions.',
    accent: 'bg-[#2f455c]',
    href: '/divisions/zantex-electrical',
    external: false,
  },
  {
    title: 'Zantex Electronics',
    badge: 'Electronics & IoT',
    description: 'Arduino, Robotics, and IoT training programs designed to empower the next generation of tech innovators.',
    accent: 'bg-[#34f5c6]',
    href: '/divisions/zantex-electronics',
    external: false,
  },
  {
    title: 'Zantex Internet',
    badge: 'Connectivity & Networks',
    description: 'Starlink, enterprise networking and campus-wide hostel connectivity infrastructure.',
    accent: 'bg-[#2f455c]',
    href: '/internet',
    external: false,
  },
  {
    title: 'Zantex Digital',
    badge: 'Digital Solutions',
    description: 'Websites, mobile applications, business software, user experience, branding and digital systems.',
    accent: 'bg-[#34f5c6]',
    href: '/divisions/zantex-digital',
    external: false,
  },
  {
    title: 'Zantex Zone',
    badge: 'Restaurant & Dining',
    description: 'Visit Zantex Zone, the Zantex restaurant in TH, and place an order online.',
    accent: 'bg-[#2f455c]',
    href: 'https://order.zantexee.com',
    external: true,
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
            dragConstraints={{ right: 0, left: -1400 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-auto lg:overflow-x-visible pb-12 lg:pb-0 no-scrollbar snap-x snap-mandatory lg:snap-none"
            dragListener={typeof window !== 'undefined' && window.innerWidth >= 1024}
          >
            {divisions.map((division, index) => (
              <Link
                key={division.title}
                href={division.href}
                target={division.external ? '_blank' : undefined}
                rel={division.external ? 'noopener noreferrer' : undefined}
                className="block rounded-[3rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168f78]"
              >
              <motion.div
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
                    <span className="text-xs font-black uppercase tracking-widest text-[#2f455c] group-hover:text-[#168f78]">
                      {division.external ? 'Order online' : 'Explore division'}
                    </span>
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-[#2f455c] transition-all group-hover:bg-[#2f455c] group-hover:text-[#34f5c6]">
                      <ArrowUpRight className="h-6 w-6" />
                    </span>
                  </div>
                </div>
              </motion.div>
              </Link>
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
