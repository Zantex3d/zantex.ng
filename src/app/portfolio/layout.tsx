import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Projects and Deployment Experience',
  'Explore Zantex solar installation experience and hostel connectivity deployments at the University of Maiduguri and University of Maiduguri Teaching Hospital.',
  '/portfolio',
);

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
