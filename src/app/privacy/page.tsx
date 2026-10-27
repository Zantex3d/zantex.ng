'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const sections = [
  {
    icon: Shield,
    title: 'Data Collection',
    content: "When you purchase a Wi-Fi voucher, the checkout sends the name, email address, phone number, hostel and plan you provide to Paystack. Successful purchase details are recorded to issue and manage the voucher. A quotation form only prepares a WhatsApp message; the details are shared if you choose a contact and send that message.",
  },
  {
    icon: Lock,
    title: 'Data Security',
    content: "Voucher payments are processed through Paystack. Purchase records are handled by the Zantex voucher service, and WhatsApp enquiries are sent only when you choose to send the prepared message. No website can guarantee the security of third-party platforms, so please review their privacy information as well.",
  },
  {
    icon: Eye,
    title: 'Use of Information',
    content: "Information submitted for a voucher is used to verify payment, allocate the selected voucher, record the purchase and deliver voucher details. Paystack handles payment processing and Termii may be used to send voucher SMS messages. The website does not include a newsletter subscription form.",
  },
  {
    icon: FileText,
    title: 'External Services',
    content: "The website links to WhatsApp for enquiries and to a separate restaurant ordering website for Zantex Zone. Those services operate under their own privacy policies and terms.",
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
            Last Updated: March 2026.
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
            <h3 className="text-xl font-black text-[#2f455c] mb-4">Questions about privacy?</h3>
            <p className="text-slate-500 font-medium mb-6">
              Contact Zantex using the WhatsApp options on our contact page.
            </p>
            <a
              href="/contact"
              className="inline-block font-black text-[#168f78] hover:underline"
            >
              Open contact options
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
