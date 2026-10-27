import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'About Zantex',
  'Learn about Zantex, a Nigerian multidisciplinary company working across electrical engineering, solar, connectivity, digital development and electronics.',
  '/about',
);

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
