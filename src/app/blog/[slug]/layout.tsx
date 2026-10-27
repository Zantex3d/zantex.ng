import { createPageMetadata } from '@/lib/metadata';

const posts: Record<string, { title: string; description: string }> = {
  'starlink-future-nigeria': {
    title: 'Starlink and Connectivity in Nigeria',
    description: 'An overview of satellite internet and connectivity considerations for Nigerian businesses and communities.',
  },
  'modern-web-performance': {
    title: 'Modern Web Performance',
    description: 'An introduction to web performance concepts, user experience and modern development practices.',
  },
  'iot-connecting-unconnected': {
    title: 'IoT and Connected Systems',
    description: 'An overview of embedded systems, connected devices and practical IoT development.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) {
    return createPageMetadata('Article Not Found', 'The requested Zantex article could not be found.', '/blog');
  }
  return createPageMetadata(post.title, post.description, `/blog/${slug}`);
}

export default function BlogPostLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
