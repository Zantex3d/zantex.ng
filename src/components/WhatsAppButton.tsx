import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONTACTS } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  const contact = WHATSAPP_CONTACTS[0];

  return (
    <a
      href={getWhatsAppUrl(contact.number, 'Hello Zantex, I have an enquiry.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Contact Zantex on WhatsApp at ${contact.label}`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#168f78] text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f455c]"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
