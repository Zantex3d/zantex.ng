'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Award, Users, Rocket, ShieldCheck } from 'lucide-react';

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We push the boundaries of what is possible in digital and electrical engineering.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Quality',
    description: 'Every project we undertake is executed with precision and a commitment to excellence.',
  },
  {
    icon: Users,
    title: 'Client Centric',
    description: 'Your vision is our priority. We work as partners to achieve your business goals.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We believe in transparent communication and building long-lasting trust.',
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero Section ───────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#34f5c6]/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[#2f455c] text-[10px] font-black uppercase tracking-widest mb-8"
          >
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-[#2f455c] tracking-tight mb-8 leading-[1.1]"
          >
            Engineering the <span className="text-[#34f5c6]">Future</span> <br /> of Global Enhancement.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Zantex is a multi-disciplinary technology firm dedicated to delivering high-end solutions 
            across digital services, electrical engineering, and electronics innovation.
          </motion.p>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-slate-200/50 border border-white"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#34f5c6]/10 flex items-center justify-center text-[#34f5c6] mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-[#2f455c] mb-6">Our Mission</h2>
              <p className="text-slate-600 font-medium leading-relaxed">
                To empower businesses and individuals by providing cutting-edge technological enhancements 
                that drive efficiency, foster innovation, and create sustainable value in an 
                ever-evolving global landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#2f455c] p-12 rounded-[3.5rem] shadow-xl shadow-[#2f455c]/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#34f5c6]/20 flex items-center justify-center text-[#34f5c6] mb-8">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black text-white mb-6">Our Vision</h2>
              <p className="text-white/70 font-medium leading-relaxed">
                To be the global leader in multi-sector technology integration, recognized for 
                engineering excellence and our ability to transform complex challenges into 
                seamless, extraordinary experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
            <h2 className="text-4xl font-black text-[#2f455c] tracking-tight mb-4">Core Values</h2>
            <div className="w-20 h-1.5 bg-[#34f5c6] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2.5rem] hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#2f455c] mb-6 group-hover:bg-[#34f5c6] group-hover:text-[#2f455c] transition-all">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#2f455c] mb-4">{v.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Section ─────────────────────────────────────── */}
      <section className="pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto h-[500px] rounded-[4rem] overflow-hidden relative shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
            alt="Zantex HQ" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2f455c]/40 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="text-center text-white max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Built on a legacy of excellence.</h2>
              <p className="text-white/80 font-medium text-lg">
                Since our inception, Zantex has been at the forefront of technical innovation, 
                helping our clients navigate the complex intersection of engineering and digital growth.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
