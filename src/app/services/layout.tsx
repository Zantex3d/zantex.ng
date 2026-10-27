import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Engineering and Technology Services',
  'Explore Zantex electrical installation, solar power, networking, internet connectivity, software development, electronics and robotics services.',
  '/services',
);

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
