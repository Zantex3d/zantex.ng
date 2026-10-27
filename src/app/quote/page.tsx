'use client';

import { Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ArrowLeft,
  Send,
  Monitor,
  Zap,
  Cpu,
  Wifi,
  MessageSquare,
  Clock,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { buildQuoteMessage, getWhatsAppUrl, WHATSAPP_CONTACTS } from '@/lib/whatsapp';

const NAVY = '#2f455c';
const TEAL = '#34f5c6';

const divisions = [
  { icon: Monitor, label: 'Zantex Digital', sub: 'Web, Mobile & Branding' },
  { icon: Zap, label: 'Zantex Electrical', sub: 'Installations & Power' },
  { icon: Cpu, label: 'Zantex Electronics', sub: 'Arduino, Robotics & IoT' },
  { icon: Wifi, label: 'Zantex Internet', sub: 'Campus & enterprise connectivity' },
  { icon: MessageSquare, label: 'General Enquiry', sub: 'Not sure? We\'ll help' },
];

const services = [
  'Electrical installation',
  'Solar installation',
  'Networking',
  'Starlink installation',
  'Hostel Wi-Fi',
  'Web development',
  'Mobile development',
  'AI and robotics',
  'IoT development',
  'Electronics',
  'Technical training',
  'Other',
];

const divisionDefaults: Record<string, string> = {
  'Zantex Digital': 'Web development',
  'Zantex Electrical': 'Electrical installation',
  'Zantex Electronics': 'Electronics',
  'Zantex Internet': 'Hostel Wi-Fi',
  'General Enquiry': 'Other',
};

const perks = [
  { icon: Clock, text: 'Select the service you need' },
  { icon: ShieldCheck, text: 'Add optional project context' },
  { icon: ArrowRight, text: 'Choose a WhatsApp contact' },
];

export default function QuotePage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-50" />}>
      <QuoteForm />
    </Suspense>
  );
}

function QuoteForm() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get('service');
  const [selectedDivision, setSelectedDivision] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: requestedService && services.includes(requestedService) ? requestedService : '',
    location: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [validationError, setValidationError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setValidationError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.service || !form.message.trim()) {
      setValidationError('Please enter your name, phone number, service and project details.');
      return;
    }
    setValidationError('');
    setSubmitted(true);
  };

  const whatsappMessage = buildQuoteMessage({
    name: form.name.trim(),
    phone: form.phone.trim(),
    email: form.email.trim(),
    company: form.company.trim(),
    service: form.service,
    location: form.location.trim(),
    projectType: form.projectType.trim(),
    budget: form.budget.trim(),
    message: form.message.trim(),
  });

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
              /* ── WHATSAPP HANDOFF ── */
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
                  <MessageSquare className="w-12 h-12" style={{ color: TEAL }} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black" style={{ color: NAVY }}>
                  Your enquiry is ready
                </h1>
                <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                  Choose a WhatsApp number below to send your project details to Zantex. Your
                  enquiry has not been sent until you send it in WhatsApp.
                </p>
                <div className="flex w-full max-w-md flex-col gap-3 pt-2">
                  {WHATSAPP_CONTACTS.map((contact) => (
                    <a
                      key={contact.number}
                      href={getWhatsAppUrl(contact.number, whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#2f455c] px-8 py-4 font-bold text-white transition-colors hover:bg-[#168f78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168f78]"
                    >
                      WhatsApp {contact.label}
                    </a>
                  ))}
                </div>
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
                      Let&apos;s build{' '}
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
                            onClick={() => {
                              setSelectedDivision(label);
                              setForm((current) => ({ ...current, service: divisionDefaults[label] }));
                              setValidationError('');
                            }}
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
                      {selectedDivision ? `Selected division: ${selectedDivision}. ` : ''}
                      Choose a service and share a few project details to prepare your enquiry.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="quote-name" className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                          Full Name <span style={{ color: TEAL }}>*</span>
                        </label>
                        <input
                          type="text"
                          id="quote-name"
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
                        <label htmlFor="quote-email" className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                          Email Address (optional)
                        </label>
                        <input
                          type="email"
                          id="quote-email"
                          name="email"
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
                        <label htmlFor="quote-phone" className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                          Phone Number <span style={{ color: TEAL }}>*</span>
                        </label>
                        <input
                          type="tel"
                          id="quote-phone"
                          name="phone"
                          required
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
                        <label htmlFor="quote-company" className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                          Company / Organisation
                        </label>
                        <input
                          type="text"
                          id="quote-company"
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

                    <div className="space-y-1.5">
                      <label htmlFor="service" className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                        Service required <span style={{ color: TEAL }}>*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#34f5c6]"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => <option key={service} value={service}>{service}</option>)}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label htmlFor="location" className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>Project location</label>
                        <input id="location" name="location" value={form.location} onChange={handleChange} placeholder="Town or state" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#34f5c6]" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="projectType" className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>Project type</label>
                        <input id="projectType" name="projectType" value={form.projectType} onChange={handleChange} placeholder="New installation, upgrade…" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#34f5c6]" />
                      </div>
                      <div className="space-y-1.5 sm:col-span-2">
                        <label htmlFor="budget" className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>Estimated budget (optional)</label>
                        <input id="budget" name="budget" value={form.budget} onChange={handleChange} placeholder="Optional" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#34f5c6]" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="quote-message" className="text-xs font-black uppercase tracking-wider" style={{ color: NAVY }}>
                        Project Details <span style={{ color: TEAL }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        id="quote-message"
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
                      disabled={submitted}
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
                      Prepare WhatsApp Enquiry
                    </button>

                    {validationError && (
                      <p role="alert" className="text-center text-sm font-semibold text-red-700">
                        {validationError}
                      </p>
                    )}
                    <p className="text-center text-xs text-slate-400">
                      Your details are placed into a WhatsApp message. Nothing is sent until you choose a contact and send it.
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
