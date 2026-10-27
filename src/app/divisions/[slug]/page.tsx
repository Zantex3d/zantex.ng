'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  ArrowUpRight,
  Monitor,
  Smartphone,
  Palette,
  Globe,
  Zap,
  Network,
  Wifi,
  Server,
  BookOpen,
  Cpu,
  Bot,
  Layers,
  UtensilsCrossed,
} from 'lucide-react';

// ─── Division Data ─────────────────────────────────────────────────────────────

const divisions: Record<
  string,
  {
    label: string;
    heading: string[];
    accentLine: string;
    description: string;
    cta: string;
    accentClass: string;        // bg color
    accentTextClass: string;    // text color
    accentLightClass: string;   // light bg
    accentBorderClass: string;  // border color
    image: string;
    about: string[];
    services: { icon: React.ElementType; title: string; description: string }[];
  }
> = {
  'zantex-digital': {
    label: 'Digital Solutions',
    heading: ['Building the', 'future of digital'],
    accentLine: 'experiences.',
    description:
      'Website and mobile development, digital products, user experience, business software and branding services.',
    cta: 'Start a Project',
    accentClass: 'bg-[#34f5c6]',
    accentTextClass: 'text-[#2f455c]',
    accentLightClass: 'bg-[#34f5c6]/10',
    accentBorderClass: 'border-[#34f5c6]/20',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    about: [
      'Zantex Digital provides web and mobile development, UI/UX, e-commerce, business software, branding and digital systems.',
      'The division works with clients to plan and develop digital products suited to their business needs.',
    ],
    services: [
      { icon: Monitor, title: 'Web Development', description: 'Websites, web applications and business platforms.' },
      { icon: Smartphone, title: 'Mobile Applications', description: 'Mobile app development for business and service needs.' },
      { icon: Palette, title: 'UI/UX and E-commerce', description: 'User experience design and online store development.' },
      { icon: Globe, title: 'Branding and Graphic Design', description: 'Digital brand identity, graphic design and marketing support.' },
      { icon: Layers, title: 'Business Systems', description: 'Database development, automation and system integration.' },
      { icon: Bot, title: 'Programming Lessons', description: 'Coding lessons and practical digital technology training.' },
    ],
  },

  'zantex-electrical': {
    label: 'Electrical Engineering',
    heading: ['Engineering power', 'infrastructure'],
    accentLine: 'that lasts.',
    description:
      'Electrical system design, building installations, solar power solutions, load assessment and maintenance.',
    cta: 'Get a Quote',
    accentClass: 'bg-amber-500',
    accentTextClass: 'text-amber-600',
    accentLightClass: 'bg-amber-50',
    accentBorderClass: 'border-amber-100',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop',
    about: [
      'Zantex Electrical provides electrical design, building wiring, power distribution, solar energy systems and electrical maintenance.',
      'The team can plan electrical and solar work separately or scope them together as an integrated project.',
    ],
    services: [
      { icon: Zap, title: 'Electrical Design and Installation', description: 'Building wiring, lighting, power distribution and protection systems.' },
      { icon: Server, title: 'Load Assessment and Costing', description: 'Electrical load calculations, system planning and installation costing.' },
      { icon: Network, title: 'Electrical Maintenance', description: 'Troubleshooting, maintenance and upgrades for electrical systems.' },
      { icon: Layers, title: 'Solar System Design', description: 'Solar sizing, energy audits, load analysis and backup-power planning.' },
      { icon: Wifi, title: 'Solar Installation', description: 'Solar panels, inverters, batteries and hybrid or off-grid systems.' },
      { icon: Zap, title: 'Solar Maintenance', description: 'Solar system maintenance, upgrades and expansion.' },
    ],
  },

  'zantex-electronics': {
    label: 'Electronics & IoT',
    heading: ['Empowering the', 'next generation'],
    accentLine: 'of innovators.',
    description:
      'Arduino, Robotics, and IoT programmes designed to empower the next generation of technology creators and builders.',
    cta: 'Visit Us',
    accentClass: 'bg-indigo-600',
    accentTextClass: 'text-indigo-600',
    accentLightClass: 'bg-indigo-50',
    accentBorderClass: 'border-indigo-100',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
    about: [
      'Zantex Electronics offers practical work across embedded systems, Arduino, ESP devices, Raspberry Pi, robotics, AI, IoT and electronics training.',
      'Training and project work focus on applying electronics and software concepts to practical builds.',
    ],
    services: [
      { icon: Cpu, title: 'Arduino, ESP and Raspberry Pi', description: 'Microcontroller and single-board computer development for electronics projects.' },
      { icon: Bot, title: 'Robotics Engineering', description: 'Hands-on robotics courses teaching design, build, and programming of autonomous systems.' },
      { icon: Wifi, title: 'IoT Development', description: 'Internet of Things training covering connected devices, cloud integration, and data systems.' },
      { icon: BookOpen, title: 'Electronics and PCB Design', description: 'Electronics fundamentals, circuit design and PCB prototyping.' },
      { icon: Layers, title: 'Smart Systems and Automation', description: 'IoT, sensor-based monitoring, smart-home automation and AI projects.' },
    ],
  },

  'zantex-zone': {
    label: 'Zantex Zone Restaurant',
    heading: ['Visit Zantex', 'Zone in TH'],
    accentLine: 'Order online.',
    description:
      'Zantex Zone is the company’s restaurant in TH. Visit its online ordering platform to view the menu and place an order.',
    cta: 'Order Online',
    accentClass: 'bg-rose-500',
    accentTextClass: 'text-rose-500',
    accentLightClass: 'bg-rose-50',
    accentBorderClass: 'border-rose-100',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop',
    about: [
      'Zantex Zone is a restaurant located in TH. Its dedicated online ordering website is the place to view the current menu and place an order.',
    ],
    services: [
      { icon: UtensilsCrossed, title: 'Restaurant in TH', description: 'Zantex Zone is a restaurant serving customers in TH.' },
      { icon: Smartphone, title: 'Online Ordering', description: 'Use the Zantex Zone ordering website to view the menu and order.' },
    ],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DivisionPage() {
  const { slug } = useParams<{ slug: string }>();
  const d = divisions[slug];
  const isRestaurant = slug === 'zantex-zone';
  const serviceBySlug: Record<string, string> = {
    'zantex-digital': 'Web development',
    'zantex-electrical': 'Electrical installation',
    'zantex-electronics': 'Electronics',
  };
  const primaryHref = isRestaurant
    ? 'https://order.zantexee.com'
    : `/quote?service=${encodeURIComponent(serviceBySlug[slug] ?? 'Other')}`;

  if (!d) notFound();

  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: 'var(--font-epilogue), sans-serif' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-32 pb-0 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${d.accentLightClass} ${d.accentBorderClass} border text-xs font-bold uppercase tracking-widest ${d.accentTextClass}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${d.accentClass} animate-pulse`} />
              {d.label}
            </span>
          </motion.div>

          {/* Headline + right description */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-14">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-7xl lg:text-[7rem] font-black text-[#2f455c] leading-[0.9] tracking-tight"
            >
              {d.heading.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
              <span className={`block ${d.accentTextClass}`}>{d.accentLine}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:max-w-[340px] lg:pb-4 space-y-6 flex-shrink-0"
            >
              <p className="text-slate-500 text-base leading-relaxed font-medium">
                {d.description}
              </p>
              <Link
                href={primaryHref}
                target={isRestaurant ? '_blank' : undefined}
                rel={isRestaurant ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center gap-3 ${d.accentClass} ${slug === 'zantex-digital' || slug === 'zantex-electrical' || isRestaurant ? 'text-[#2f455c]' : 'text-white'} font-black p-1.5 pr-6 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-lg group`}
              >
                <span className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center group-hover:bg-white/60 transition-colors">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
                {d.cta}
              </Link>
            </motion.div>
          </div>

          {/* Large Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="w-full h-[340px] md:h-[520px] lg:h-[680px] rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <img
              src={d.image}
              alt={`${d.label} representative image`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT + SERVICES ── */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">

          {/* About row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-12 h-1 ${d.accentClass} rounded-full mb-8`} />
              <h2 className="text-4xl md:text-5xl font-black text-[#2f455c] mb-6 leading-tight tracking-tight">
                About this<br />
                <span className="text-slate-400 font-light">Division</span>
              </h2>
              <div className="space-y-4 text-slate-500 text-base leading-relaxed">
                {d.about.map((para, i) => <p key={i}>{para}</p>)}
              </div>
              <div className="mt-10 flex gap-4">
                <Link
                  href={primaryHref}
                  target={isRestaurant ? '_blank' : undefined}
                  rel={isRestaurant ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center gap-2 ${d.accentClass} ${slug === 'zantex-digital' || slug === 'zantex-electrical' || isRestaurant ? 'text-[#2f455c]' : 'text-white'} font-black px-6 py-3 rounded-full text-sm hover:opacity-90 active:scale-95 transition-all shadow-sm`}
                >
                  {d.cta}
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex items-center gap-2 border border-slate-200 text-[#2f455c] font-black px-6 py-3 rounded-full text-sm hover:bg-slate-50 transition-all"
                >
                  Other Divisions
                </Link>
              </div>
            </motion.div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`${d.accentLightClass} rounded-[2.5rem] p-12 flex flex-col justify-between min-h-[300px] relative overflow-hidden border ${d.accentBorderClass}`}
            >
              {/* Decorative circle */}
              <div className={`absolute -top-16 -right-16 w-64 h-64 rounded-full ${d.accentClass} opacity-10`} />
              <div className={`w-16 h-16 rounded-3xl ${d.accentClass} flex items-center justify-center`}>
                <ArrowUpRight className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  {d.label}
                </p>
                <p className={`text-2xl font-black ${d.accentTextClass} leading-snug`}>
                  Practical services shaped around each client’s project requirements.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Services Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-[5rem] font-black text-[#2f455c] leading-[0.9] tracking-tight"
              >
                What We<br />
                <span className="text-slate-400 font-light">Offer</span>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-sm text-slate-500 text-sm leading-relaxed md:text-right pb-2"
            >
              Every service we offer is built with precision and care.<br />
              Designed for results, engineered for excellence.
            </motion.p>
          </div>

          {/* Big service cards — same big card style as home */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {d.services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="h-[380px] rounded-[2.5rem] bg-white border border-slate-100 p-8 flex flex-col justify-between group relative overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-500"
                >
                  {/* Dot pattern bg */}
                  <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <pattern id={`dots-${index}`} width="8" height="8" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="1" fill="currentColor" className="text-slate-900" />
                      </pattern>
                      <rect width="100%" height="100%" fill={`url(#dots-${index})`} />
                    </svg>
                  </div>

                  {/* Top: badge */}
                  <div>
                    <span className={`${d.accentLightClass} ${d.accentTextClass} text-xs font-bold px-4 py-2 rounded-2xl border ${d.accentBorderClass} inline-block`}>
                      {d.label}
                    </span>
                  </div>

                  {/* Bottom: content */}
                  <div className="relative z-10">
                    {/* Accent bar */}
                    <div className={`w-10 h-1 ${d.accentClass} rounded-full mb-5 group-hover:w-16 transition-all duration-500`} />

                    {/* Icon + Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${d.accentLightClass} border ${d.accentBorderClass} flex items-center justify-center flex-shrink-0 group-hover:${d.accentClass} transition-all duration-300`}>
                        <Icon className={`w-5 h-5 ${d.accentTextClass} ${slug === 'zantex-digital' ? '' : 'group-hover:text-white'} transition-colors duration-300`} />
                      </div>
                      <h3 className="text-xl font-black text-[#2f455c] leading-tight tracking-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
