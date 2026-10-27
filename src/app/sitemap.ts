import type { MetadataRoute } from 'next';

const siteUrl = 'https://zantex.ng';

const paths = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/internet',
  '/quote',
  '/contact',
  '/voucher',
  '/privacy',
  '/terms',
  '/divisions/zantex-digital',
  '/divisions/zantex-electrical',
  '/divisions/zantex-electronics',
  '/divisions/zantex-zone',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
