import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Terms of Service',
  'Read the terms that apply when using the Zantex website and services.',
  '/terms',
);

export default function TermsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
