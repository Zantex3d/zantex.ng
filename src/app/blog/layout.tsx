import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Technology Insights',
  'Articles from Zantex about connectivity, digital development and electronics.',
  '/blog',
  { index: false, follow: false },
);

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
