import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Contact Zantex',
  'Contact Zantex Digital and Electronics through WhatsApp or prepare a project quotation request.',
  '/contact',
);

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
