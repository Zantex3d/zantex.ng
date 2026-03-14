'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const sections = [
  {
    icon: Shield,
    title: 'Data Collection',
    content: "We collect information you provide directly to us, such as when you request a quote, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and company details.",
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. Your data is stored on secure servers with restricted access.",
  },
  {
    icon: Eye,
    title: 'Use of Information',
    content: "Your information is used solely to provide and improve our services, communicate with you about your projects, and send updates regarding Zantex Global Enhancement. We do not sell your data to third parties.",
  },
  {
    icon: FileText,
    title: 'Cookie Policy',
    content: "Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings, though this may affect some site functionality.",
  }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 bg-[#2f455c] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#34f5c6] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-white tracking-tight mb-6"
          >
            Privacy <span className="text-[#34f5c6]">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg font-medium"
          >
            Last Updated: March 2026. Your privacy is our highest priority at Zantex.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#34f5c6]/10 flex items-center justify-center text-[#34f5c6] flex-shrink-0">
                  <section.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-[#2f455c] mb-4 tracking-tight uppercase">
                    {section.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed font-medium text-lg">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 p-12 rounded-[3rem] bg-slate-50 border border-slate-100"
          >
            <h3 className="text-xl font-black text-[#2f455c] mb-4">Contact Our Privacy Team</h3>
            <p className="text-slate-500 font-medium mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please reach out to our legal department.
            </p>
            <a 
              href="mailto:privacy@zantex.com" 
              className="inline-block text-[#34f5c6] font-black hover:underline"
            >
              privacy@zantex.com
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
