'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight, CheckCircle2, Monitor, Zap, Cpu, UtensilsCrossed, Wifi } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Zap,
    title: 'Zantex Electrical',
    description: 'Electrical planning, building installations, power distribution, solar systems and maintenance.',
    features: ['Electrical design and installations', 'Load assessment and power distribution', 'Solar and backup power systems', 'Maintenance and troubleshooting'],
    color: '#34f5c6',
    href: '/divisions/zantex-electrical',
    external: false,
  },
  {
    icon: Wifi,
    title: 'Zantex Internet',
    description: 'Connectivity infrastructure for campuses, hostels, homes and enterprise environments.',
    features: ['Starlink installation and integration', 'Campus and hostel Wi-Fi', 'Structured and wireless networks', 'Subscriber access and voucher systems'],
    color: '#34f5c6',
    href: '/internet',
    external: false,
  },
  {
    icon: Monitor,
    title: 'Zantex Digital',
    description: 'Websites, mobile applications, business software, user experience, branding and digital systems.',
    features: ['Web and mobile development', 'UI/UX and e-commerce', 'Business automation', 'Branding and coding lessons'],
    color: '#34f5c6',
    href: '/divisions/zantex-digital',
    external: false,
  },
  {
    icon: Cpu,
    title: 'Zantex Electronics',
    description: 'Practical electronics engineering, embedded systems, robotics, IoT and technical training.',
    features: ['Arduino, ESP8266 and ESP32', 'Embedded systems and PCB prototyping', 'IoT and smart automation', 'Robotics and practical training'],
    color: '#34f5c6',
    href: '/divisions/zantex-electronics',
    external: false,
  },
  {
    icon: UtensilsCrossed,
    title: 'Zantex Zone',
    description: 'Zantex Zone is the company’s restaurant in TH. Visit its online ordering platform to view the menu and order.',
    features: ['Restaurant located in TH', 'Online menu and ordering', 'Order directly from Zantex Zone'],
    color: '#34f5c6',
    href: 'https://order.zantexee.com',
    external: true,
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
            Explore Zantex services across electrical systems, solar energy, connectivity,
            digital development and electronics.
          </motion.p>
        </div>
      </section>

      {/* ── Services Grid ────────────────────────────────────── */}
      <section id="divisions" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                className="block rounded-[3rem] md:rounded-[3.5rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168f78]"
              >
              <motion.div
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
                  <span className="text-sm font-black uppercase tracking-widest text-[#2f455c] transition-colors group-hover:text-[#34f5c6]">
                    {s.external ? 'Order online' : 'Explore services'}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-[#2f455c] shadow-sm transition-all group-hover:border-[#34f5c6] group-hover:bg-[#34f5c6]">
                    <ArrowUpRight className="w-6 h-6" />
                  </span>
                </div>
              </motion.div>
              </Link>
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
            Let&apos;s discuss how our multidisciplinary team can help you achieve extraordinary results.
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
