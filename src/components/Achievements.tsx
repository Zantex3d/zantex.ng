import Link from 'next/link';
import { ArrowUpRight, Sun, Wifi, Network, Cpu } from 'lucide-react';

const achievements = [
  {
    icon: Sun,
    title: 'Solar installations',
    description:
      'Solar power systems have been installed across Zantex projects, bringing practical renewable-energy experience to the company’s engineering work.',
  },
  {
    icon: Wifi,
    title: 'UNIMAID hostel connectivity',
    description:
      'Zantex has deployed internet connectivity across all hostels at the University of Maiduguri.',
  },
  {
    icon: Network,
    title: 'UMTH hostel connectivity',
    description:
      'Zantex has also deployed internet connectivity across all hostels at the University of Maiduguri Teaching Hospital.',
  },
  {
    icon: Cpu,
    title: 'Integrated engineering and technology',
    description:
      'The company brings electrical infrastructure, connectivity, solar power, digital development and electronics capabilities together.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-[#f8fafc] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#2f455c]/60">
              Demonstrated experience
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#2f455c] md:text-5xl">
              Work that connects people and infrastructure.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 font-black text-[#2f455c] hover:text-[#168f78] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#168f78]"
          >
            Explore projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#34f5c6]/20 text-[#2f455c]">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-black text-[#2f455c]">{title}</h3>
              <p className="leading-relaxed text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
