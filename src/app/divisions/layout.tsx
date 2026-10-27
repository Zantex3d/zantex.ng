import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Zantex Divisions',
  'Discover Zantex Digital, Electrical, Electronics, Internet and Zantex Zone restaurant.',
  '/services#divisions',
);

export default function DivisionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
