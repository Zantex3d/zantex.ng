'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Header ────────────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-7xl font-black text-[#2f455c] tracking-tight mb-8">
              Let's build <span className="text-[#34f5c6]">together.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Have a question or a project in mind? Reach out to our team 
              and discover how Zantex can transform your ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-[#2f455c]">Get in touch</h2>
                <p className="text-slate-500 font-medium">Prefer direct communication? Use the details below or visit us at our office.</p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#2f455c] group-hover:bg-[#34f5c6] transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#2f455c] uppercase tracking-widest mb-1">Email Us</h4>
                    <p className="text-slate-500 font-bold">hello@zantex.global</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#2f455c] group-hover:bg-[#34f5c6] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#2f455c] uppercase tracking-widest mb-1">Call Us</h4>
                    <p className="text-slate-500 font-bold">+234 800 000 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#2f455c] group-hover:bg-[#34f5c6] transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#2f455c] uppercase tracking-widest mb-1">Our Office</h4>
                    <p className="text-slate-500 font-bold">Zantex Zone, Digital Innovation Hub <br /> Port Harcourt, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#2f455c]">Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-[#34f5c6] focus:ring-4 focus:ring-[#34f5c6]/10 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#2f455c]">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-[#34f5c6] focus:ring-4 focus:ring-[#34f5c6]/10 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#2f455c]">Your Message</label>
                  <textarea 
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    placeholder="How can we help you?"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:border-[#34f5c6] focus:ring-4 focus:ring-[#34f5c6]/10 transition-all font-medium resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#2f455c] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#34f5c6] hover:text-[#2f455c] transition-all shadow-xl active:scale-95 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
