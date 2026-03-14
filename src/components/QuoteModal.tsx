'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ChevronDown, CheckCircle2 } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAVY = '#2f455c';
const TEAL = '#34f5c6';

const divisions = [
  'Zantex Digital — Web, Mobile & Branding',
  'Zantex Electrical — Installations & Power',
  'Zantex Electronics — Arduino, Robotics & IoT',
  'Zantex Zone — Restaurant & Dining',
  'General Enquiry',
];

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    division: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', company: '', division: '', message: '' });
      onClose();
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg pointer-events-auto overflow-hidden border border-slate-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div 
                className="relative px-8 pt-8 pb-10"
                style={{ backgroundColor: NAVY }}
              >
                {/* Close */}
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Decorative */}
                <div 
                  className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl translate-x-10 translate-y-10 pointer-events-none opacity-20"
                  style={{ backgroundColor: TEAL }}
                />

                <span 
                  className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: TEAL, borderColor: `${TEAL}40` }}
                >
                  Zantex Global Enhancement
                </span>
                <h2 className="text-3xl font-black text-white leading-tight tracking-tight">
                  Request a <span style={{ color: TEAL }}>Quote</span>
                </h2>
                <p className="text-white/50 text-sm mt-2 font-medium">
                  Tell us about your project and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Form / Success */}
              <div className="px-8 py-7 max-h-[70vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-10 gap-4"
                    >
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${TEAL}20` }}
                      >
                        <CheckCircle2 className="w-9 h-9" style={{ color: TEAL }} />
                      </div>
                      <h3 className="text-xl font-black" style={{ color: NAVY }}>Request Sent!</h3>
                      <p className="text-slate-500 text-sm text-center max-w-xs font-medium">
                        Thanks, <strong style={{ color: NAVY }}>{form.name}</strong>! We've received your request and will be in touch shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest" style={{ color: NAVY }}>
                            Full Name <span style={{ color: TEAL }}>*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-all font-medium"
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = TEAL;
                              e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}15`;
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = '#e2e8f0';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest" style={{ color: NAVY }}>
                            Email Address <span style={{ color: TEAL }}>*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="you@email.com"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-all font-medium"
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = TEAL;
                              e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}15`;
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = '#e2e8f0';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      </div>

                      {/* Phone + Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest" style={{ color: NAVY }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+234 800 000 0000"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-all font-medium"
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = TEAL;
                              e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}15`;
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = '#e2e8f0';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-black uppercase tracking-widest" style={{ color: NAVY }}>
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your company"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-all font-medium"
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = TEAL;
                              e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}15`;
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = '#e2e8f0';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          />
                        </div>
                      </div>

                      {/* Division */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest" style={{ color: NAVY }}>
                          Division / Service <span style={{ color: TEAL }}>*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="division"
                            required
                            value={form.division}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm appearance-none focus:outline-none transition-all pr-10 font-bold"
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = TEAL;
                              e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}15`;
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = '#e2e8f0';
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <option value="" disabled>Select a division…</option>
                            {divisions.map((d) => (
                              <option key={d} value={d}>{d}</option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black uppercase tracking-widest" style={{ color: NAVY }}>
                          Project Details <span style={{ color: TEAL }}>*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your project or request…"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none transition-all resize-none font-medium"
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = TEAL;
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${TEAL}15`;
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = '#e2e8f0';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="w-full text-white font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-xl mt-4 group"
                        style={{ backgroundColor: NAVY }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = TEAL;
                          e.currentTarget.style.color = NAVY;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = NAVY;
                          e.currentTarget.style.color = 'white';
                        }}
                      >
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Send Request
                      </button>

                      <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
                        Typically responds within 24 hours
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
