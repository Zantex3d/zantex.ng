import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata(
  'Privacy Policy',
  'Read the Zantex website privacy policy and information about personal data submitted through the site.',
  '/privacy',
);

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
