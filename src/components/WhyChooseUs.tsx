'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Zap, Shield, HeartHandshake, Rocket, Award } from 'lucide-react';

const reasons = [
  {
    title: 'Innovative Thinking',
    description: 'We don\'t just follow trends; we set them. Our team is dedicated to finding creative solutions to your toughest challenges.',
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    title: 'Lightning Speed',
    description: 'We prioritize performance and efficiency, ensuring your projects are delivered on time without compromising quality.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Rock-Solid Security',
    description: 'Security is at the heart of everything we do. We build systems that are robust and resilient to threats.',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Customer-First',
    description: 'Your success is our success. We work closely with you to understand your goals and deliver beyond expectations.',
    icon: <HeartHandshake className="w-6 h-6" />,
  },
  {
    title: 'Scalable Growth',
    description: 'We build solutions that grow with your business, ensuring you\'re always prepared for the next level.',
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: 'Award-Winning Quality',
    description: 'Our commitment to excellence has been recognized industry-wide. We deliver nothing but the best.',
    icon: <Award className="w-6 h-6" />,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#2f455c] rounded-[4rem] mx-6 my-24 overflow-hidden relative shadow-2xl shadow-[#34f5c6]/5">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#34f5c6] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#34f5c6] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 text-[#34f5c6] text-xs font-black uppercase tracking-widest mb-6 border border-[#34f5c6]/20"
          >
            WHY WORK WITH US
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
          >
            The Zantex Difference.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto font-medium"
          >
            We combine technical expertise with a passion for innovation to deliver results that truly move the needle for your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#34f5c6] mb-6 group-hover:bg-[#34f5c6] group-hover:text-[#2f455c] transition-all duration-300 transform group-hover:rotate-12 border border-white/10 group-hover:border-[#34f5c6]">
                {reason.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
