'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <div className="text-[#34f5c6] font-black text-sm tracking-[0.2em] mb-4">CONTACT US</div>
              <h2 className="text-4xl md:text-5xl font-black text-[#2f455c] mb-6 tracking-tight">
                Let's build something <br /> <span className="text-[#34f5c6] italic">Extraordinary</span>.
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Have a project in mind? Reach out to us today and let's discuss how we can help you achieve your goals.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#34f5c6] border border-slate-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#2f455c]">Email us</h4>
                  <p className="text-slate-600 font-medium">contact@zantex.ng</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#34f5c6] border border-slate-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#2f455c]">Call us</h4>
                  <p className="text-slate-600 font-medium">+234 812 345 6789</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#34f5c6] border border-slate-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#2f455c]">Visit us</h4>
                  <p className="text-slate-600 font-medium">123 Tech Avenue, Victoria Island, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200 border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-black text-[#2f455c]">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#34f5c6] outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-black text-[#2f455c]">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#34f5c6] outline-none transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-[#2f455c]">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#34f5c6] outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-[#2f455c]">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Tell us about your project..." 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#34f5c6] outline-none transition-all resize-none font-medium"
                />
              </div>
              <button className="w-full bg-[#2f455c] text-[#34f5c6] py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#2f455c]/90 transition-all shadow-xl shadow-[#2f455c]/20 active:scale-95">
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
