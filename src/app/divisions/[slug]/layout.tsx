import { createPageMetadata } from '@/lib/metadata';

const divisions: Record<string, { title: string; description: string }> = {
  'zantex-digital': {
    title: 'Zantex Digital',
    description: 'Websites, mobile applications, UI/UX, digital branding and business software from Zantex Digital in Nigeria.',
  },
  'zantex-electrical': {
    title: 'Zantex Electrical Engineering',
    description: 'Electrical installations, power distribution, system design, solar energy and maintenance from Zantex.',
  },
  'zantex-electronics': {
    title: 'Zantex Electronics, IoT and Robotics',
    description: 'Explore Zantex electronics engineering, embedded systems, Arduino, IoT, robotics and technical training.',
  },
  'zantex-zone': {
    title: 'Zantex Zone Restaurant',
    description: 'Visit Zantex Zone, the company’s restaurant in TH, and order online.',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const division = divisions[slug];
  if (!division) {
    return createPageMetadata('Division Not Found', 'The requested Zantex division could not be found.', '/services');
  }
  return createPageMetadata(division.title, division.description, `/divisions/${slug}`);
}

export default function DivisionLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
