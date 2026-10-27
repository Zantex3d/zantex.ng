import type { Metadata } from 'next';

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  robots?: Metadata['robots'],
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      images: ['/images/hero.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hero.png'],
    },
    robots,
  };
}
