'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ClipboardList } from 'lucide-react';
import Link from 'next/link';
import { getWhatsAppUrl, WHATSAPP_CONTACTS } from '@/lib/whatsapp';

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
                Let&apos;s build something <br /> <span className="text-[#34f5c6] italic">Extraordinary</span>.
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Have a project in mind? Contact Zantex on WhatsApp or prepare a quotation request.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-slate-600 font-medium">
                Use either of the official WhatsApp contact numbers to reach the team.
              </p>
              {WHATSAPP_CONTACTS.map((contact) => (
                <a
                  key={contact.number}
                  href={getWhatsAppUrl(contact.number, 'Hello Zantex, I have an enquiry.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-black text-[#2f455c] hover:text-[#168f78]"
                >
                  <MessageCircle className="h-5 w-5 text-[#168f78]" aria-hidden="true" />
                  WhatsApp {contact.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6 rounded-[3.5rem] border border-slate-100 bg-white p-10 shadow-2xl shadow-slate-200 md:p-12"
          >
            <h3 className="text-2xl font-black text-[#2f455c]">Need a project quotation?</h3>
            <p className="text-slate-600">
              Share your requirements in the quotation form and choose which WhatsApp number to contact.
            </p>
            <Link href="/quote" className="inline-flex items-center gap-3 self-start rounded-2xl bg-[#2f455c] px-6 py-4 font-black text-white hover:bg-[#168f78]">
              <ClipboardList className="h-5 w-5" aria-hidden="true" />
              Prepare a quotation
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
