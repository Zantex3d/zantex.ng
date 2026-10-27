'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { MessageCircle, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import { WHATSAPP_CONTACTS, getWhatsAppUrl } from '@/lib/whatsapp';

export default function ContactPage() {
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
              Let&apos;s build <span className="text-[#34f5c6]">together.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Tell us what you are planning. Contact Zantex directly on WhatsApp or prepare a
              detailed project quotation request.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-black text-[#2f455c]">Talk to the Zantex team</h2>
              <p className="mt-3 text-slate-600">
                Choose either WhatsApp contact, or use the quotation form to include project
                requirements before opening WhatsApp.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {WHATSAPP_CONTACTS.map((contact) => (
                <a
                  key={contact.number}
                  href={getWhatsAppUrl(contact.number, 'Hello Zantex, I have an enquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-[#2f455c] px-6 py-5 font-black text-white transition-colors hover:bg-[#168f78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168f78]"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp {contact.label}
                </a>
              ))}
            </div>
            <Link
              href="/quote"
              className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-5 font-black text-[#2f455c] transition-colors hover:border-[#2f455c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168f78]"
            >
              <ClipboardList className="h-5 w-5" aria-hidden="true" />
              Prepare a project quotation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
