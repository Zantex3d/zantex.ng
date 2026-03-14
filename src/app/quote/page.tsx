'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ArrowLeft,
  Send,
  ChevronDown,
  CheckCircle2,
  Monitor,
  Zap,
  Cpu,
  UtensilsCrossed,
  MessageSquare,
  Clock,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const NAVY = '#2f455c';
const TEAL = '#34f5c6';

const divisions = [
  { icon: Monitor, label: 'Zantex Digital', sub: 'Web, Mobile & Branding' },
  { icon: Zap, label: 'Zantex Electrical', sub: 'Installations & Power' },
  { icon: Cpu, label: 'Zantex Electronics', sub: 'Arduino, Robotics & IoT' },
  { icon: UtensilsCrossed, label: 'Zantex Zone', sub: 'Restaurant & Dining' },
  { icon: MessageSquare, label: 'General Enquiry', sub: 'Not sure? We\'ll help' },
];

const perks = [
  { icon: Clock, text: 'Response within 24 hours' },
  { icon: ShieldCheck, text: 'Confidential & secure' },
  { icon: ArrowRight, text: 'No obligation, free quote' },
];

export default function QuotePage() {
  const [selectedDivision, setSelectedDivision] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDivision) return;
    setSubmitted(true);
  };

  return (
    <main
      className="min-h-screen"
      style={{ fontFamily: 'var(--font-epilogue), sans-serif', backgroundColor: '#f8fafc' }}
    >
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
              style={{ color: NAVY }}
            >
              <ArrowLeft
                className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                style={{ color: TEAL }}
              />
              Back to Home
            </Link>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              /* ── SUCCESS STATE ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-24 gap-6 text-center"
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${TEAL}22` }}
                >
                  <CheckCircle2 className="w-12 h-12" style={{ color: TEAL }} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black" style={{ color: NAVY }}>
                  Request Sent!
                </h1>
                <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                  Thanks, <strong style={{ color: NAVY }}>{form.name}</strong>! We have received
                  your request and will be in touch within <strong style={{ color: TEAL }}>24 hours</strong>.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full text-white transition-all active:scale-95 shadow-lg"
                  style={{ backgroundColor: NAVY }}
                >
                  Back to Home
                </Link>
              </motion.div>
            ) : (
              /* ── MAIN LAYOUT ── */
              <motion.div
                key="form-layout"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 items-start"
              >
                {/* ── LEFT PANEL (navy) ── */}
                <div
                  className="rounded-[2.5rem] p-10 flex flex-col gap-10 relative overflow-hidden"
                  style={{ backgroundColor: NAVY }}
                >
                  {/* Decorative blobs */}
                  <div
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
                    style={{ backgroundColor: TEAL }}
                  />
                  <div
                    className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10 blur-2xl pointer-events-none"
                    style={{ backgroundColor: TEAL }}
                  />

                  {/* Top text */}
                  <div className="relative z-10">
                    <span
                      className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border"
                      style={{ color: TEAL, borderColor: `${TEAL}40`, backgroundColor: `${TEAL}15` }}
                    >
                      Zantex Global Enhancement
                    </span>
                    <h1
                      className="text-4xl md:text-5xl font-black leading-[1.05] tracking-tight text-white mb-4"
                    >
                      Let's build{' '}
                      <span style={{ color: TEAL }}>something</span>{' '}
                      great together.
                    </h1>
                    <p className="text-white/50 text-base leading-relaxed">
                      Fill in the form and our team will reach out with a tailored
                      proposal for your project.
                    </p>
                  </div>

                  {/* Perks */}
                  <div className="relative z-10 space-y-3">
                    {perks.map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-center gap-3">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${TEAL}20` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: TEAL }} />
                        </div>
                        <span className="text-white/70 text-sm font-medium">{text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="relative z-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

                  {/* Division picker */}
                  <div className="relative z-10">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-4">
                      Select Division
                    </p>
                    <div className="space-y-2">
                      {divisions.map(({ icon: Icon, label, sub }) => {
                        const isActive = selectedDivision === label;
                        return (
                          <button
                            key={label}
                            type="button"
                            onClick={() => setSelectedDivision(label)}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-left group"
                            style={{
                              backgroundColor: isActive ? `${TEAL}20` : 'transparent',
                              border: `1px solid ${isActive ? TEAL : 'rgba(255,255,255,0.08)'}`,
                            }}
                          >
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: isActive ? TEAL : 'rgba(255,255,255,0.08)' }}
                            >
                              <Icon
                                className="w-4 h-4"
                                style={{ color: isActive ? NAVY : 'rgba(255,255,255,0.5)' }}
                              />
                            </div>
                            <div>
                              <div
                                className="text-sm font-bold"
                                style={{ color: isActive ? TEAL : 'rgba(255,255,255,0.8)' }}
                              >
                                {label}
                              </div>
                              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                                {sub}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* ── RIGHT PANEL (form) ── */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
                  <div className="mb-8">
                    <h2
                      className="text-3xl font-black tracking-tight mb-2"
                      style={{ color: NAVY }}
                    >
                      Request a Quote
                    </h2>
                    <p className="text-slate-500 text-sm">
                      {selectedDivision
                        ? `Enquiring about: `
                        : 'Select a division on the left to get started, then fill in your details.'}
                      {selectedDivision && (
                        <strong style={{ color: TEAL }}>{selectedDivision}</strong>
                      )}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                          Full Name <span style={{ color: TEAL }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-all"
                          style={{ '--tw-ring-color': TEAL } as React.CSSProperties}
                          onFocus={e => {
                            e.currentTarget.style.borderColor = TEAL;
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}20`;
                          }}
                          onBlur={e => {
                            e.currentTarget.style.borderColor = '#e2e8f0';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                          Email Address <span style={{ color: TEAL }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@email.com"
                          className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-all"
                          onFocus={e => {
                            e.currentTarget.style.borderColor = TEAL;
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}20`;
                          }}
                          onBlur={e => {
                            e.currentTarget.style.borderColor = '#e2e8f0';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+234 800 000 0000"
                          className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-all"
                          onFocus={e => {
                            e.currentTarget.style.borderColor = TEAL;
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}20`;
                          }}
                          onBlur={e => {
                            e.currentTarget.style.borderColor = '#e2e8f0';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                          Company / Organisation
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-all"
                          onFocus={e => {
                            e.currentTarget.style.borderColor = TEAL;
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}20`;
                          }}
                          onBlur={e => {
                            e.currentTarget.style.borderColor = '#e2e8f0';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>
                    </div>

                    {/* Selected division indicator */}
                    {!selectedDivision && (
                      <div
                        className="flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-sm font-medium"
                        style={{
                          borderColor: `${TEAL}40`,
                          backgroundColor: `${TEAL}08`,
                          color: NAVY,
                        }}
                      >
                        <ChevronDown className="w-4 h-4" style={{ color: TEAL }} />
                        Please select a division from the left panel
                      </div>
                    )}
                    {selectedDivision && (
                      <div
                        className="flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-sm font-bold"
                        style={{
                          borderColor: `${TEAL}50`,
                          backgroundColor: `${TEAL}12`,
                          color: NAVY,
                        }}
                      >
                        <CheckCircle2 className="w-4 h-4" style={{ color: TEAL }} />
                        {selectedDivision}
                      </div>
                    )}

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                        Project Details <span style={{ color: TEAL }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your project or what you need…"
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-all resize-none"
                        onFocus={e => {
                          e.currentTarget.style.borderColor = TEAL;
                          e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}20`;
                        }}
                        onBlur={e => {
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={!selectedDivision}
                      className="w-full font-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg mt-2 group disabled:opacity-40 disabled:cursor-not-allowed text-white"
                      style={{ backgroundColor: NAVY }}
                      onMouseEnter={e => {
                        if (selectedDivision)
                          (e.currentTarget as HTMLButtonElement).style.backgroundColor = TEAL;
                        (e.currentTarget as HTMLButtonElement).style.color = NAVY;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = NAVY;
                        (e.currentTarget as HTMLButtonElement).style.color = 'white';
                      }}
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Send Request
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      We typically respond within 24 hours on business days.
                    </p>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
