import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Request a Project Quotation',
  'Prepare an enquiry for Zantex electrical, solar, networking, Starlink, digital development, IoT, electronics or training services.',
  '/quote',
);

export default function QuoteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
