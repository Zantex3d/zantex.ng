'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Scale, Book, ShieldAlert, CheckCircle2 } from 'lucide-react';

const sections = [
  {
    icon: Scale,
    title: 'Acceptance of Terms',
    content: "By accessing and using the Zantex Global Enhancement website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
  },
  {
    icon: Book,
    title: 'Service Provision',
    content: "Zantex provides multidisciplinary engineering and digital services. While we strive for excellence, we reserve the right to modify or discontinue any part of our services without prior notice. Project-specific terms will be governed by individual service agreements.",
  },
  {
    icon: ShieldAlert,
    title: 'Intellectual Property',
    content: "All content, logos, designs, and code on this website are the intellectual property of Zantex and DIFINITO. Unauthorized use, reproduction, or distribution of any materials on this site is strictly prohibited.",
  },
  {
    icon: CheckCircle2,
    title: 'User Obligations',
    content: "Users agree not to use the site for any unlawful purpose or to engage in any activity that could damage, disable, or impair the performance and security of the Zantex infrastructure.",
  }
];

export default function TermsPage() {
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
            Terms of <span className="text-[#34f5c6]">Service</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg font-medium"
          >
            Please read these terms carefully before using our platform.
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
            <h3 className="text-xl font-black text-[#2f455c] mb-4">Agreement Information</h3>
            <p className="text-slate-500 font-medium mb-6 leading-relaxed">
              These terms constitute a binding agreement between you and Zantex Global. 
              By continuing to browse this site, you acknowledge that you have read, 
              understood, and agree to be bound by these terms.
            </p>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 italic text-slate-400 text-sm">
              Note: This document is provided for informational purposes as part of the Zantex website development.
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
