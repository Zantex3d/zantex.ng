import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Internet, Starlink and Campus Wi-Fi Solutions',
  'Zantex provides Starlink installations, wireless networks, campus and hostel Wi-Fi, and connectivity infrastructure in Nigeria.',
  '/internet',
);

export default function InternetLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
