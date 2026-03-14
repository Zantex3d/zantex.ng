'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const footerLinks = {
  product: [
    { name: 'Digital Services', href: '/services' },
    { name: 'Internet Solutions', href: '/internet' },
    { name: 'Buy Voucher', href: '/voucher' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Get a Quote', href: '/quote' },
  ],
  resources: [
    { name: 'Case Studies', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/contact' },
    { name: 'Documentation', href: '#' },
  ],
  company: [
    { name: 'About Zantex', href: '/about' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 overflow-hidden relative">
      {/* ── CTA Section (Turn your data into clarity) ──────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full bg-[#34f5c6] rounded-[3rem] p-16 md:p-24 text-center space-y-8 overflow-hidden relative"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/20 blur-[120px] rounded-full" />
          
          <h2 className="text-4xl md:text-6xl font-black text-[#2f455c] tracking-tight relative z-10">
            Ready to scale your vision?
          </h2>
          <p className="text-[#2f455c]/70 max-w-lg mx-auto text-sm md:text-base relative z-10 font-medium leading-relaxed">
            Get an instant quote tailored to your business needs 
            and discover the true potential of your next technological breakthrough.
          </p>
          <div className="pt-4 relative z-10">
            <Link href="/quote">
              <button className="bg-[#2f455c] text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10">
                Get a Quote
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── Actual Footer Card ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="bg-white rounded-[2.5rem] p-12 md:p-16 border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Brand Column */}
            <div className="lg:col-span-5 space-y-8">
              <Link href="/" className="flex items-center group">
                <img
                  src="/zantext logo.png"
                  alt="Zantex Logo"
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Zantex helps teams transform complex engineering problems into clean, 
                scalable digital solutions — everything you need in one place.
              </p>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 text-left">
              <div>
                <h4 className="text-[#2f455c] font-black text-sm mb-8 uppercase tracking-widest">Product</h4>
                <ul className="space-y-4">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-500 hover:text-[#34f5c6] transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-[#2f455c] font-black text-sm mb-8 uppercase tracking-widest">Resources</h4>
                <ul className="space-y-4">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-500 hover:text-[#34f5c6] transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[#2f455c] font-black text-sm mb-8 uppercase tracking-widest">Company</h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-slate-500 hover:text-[#34f5c6] transition-colors">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[12px] text-slate-400 font-medium">
              © {new Date().getFullYear()} Zantex Global. All rights reserved. <span className="ml-2 text-slate-300 font-black">POWERED BY DIFINITO</span>
            </p>
            <div className="flex gap-8">
              <Link href="/terms" className="text-[12px] font-bold text-slate-400 hover:text-[#2f455c] transition-colors underline underline-offset-4">Terms of Service</Link>
              <Link href="/privacy" className="text-[12px] font-bold text-slate-400 hover:text-[#2f455c] transition-colors underline underline-offset-4">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Large Background Brand Text ────────────────────────────── */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.05]">
        <h2 className="text-[30vw] font-black tracking-tighter text-[#2f455c] leading-none">
          Zantex
        </h2>
      </div>
    </footer>
  );
}
