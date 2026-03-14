'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Starlink in Nigeria',
    slug: 'starlink-future-nigeria',
    excerpt: 'How satellite internet is transforming remote connectivity across West Africa...',
    date: 'March 12, 2024',
    author: 'Zantex Engineering',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2670&auto=format&fit=crop',
    category: 'Internet',
  },
  {
    title: 'Modern Web Performance Standards',
    slug: 'modern-web-performance',
    excerpt: 'Why speed and core web vitals are the most critical factors for your digital presence in 2024...',
    date: 'March 08, 2024',
    author: 'Zantex Digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    category: 'Digital',
  },
  {
    title: 'IoT: Connecting the Unconnected',
    slug: 'iot-connecting-unconnected',
    excerpt: 'Exploring how our custom embedded systems are solving industrial challenges...',
    date: 'March 01, 2024',
    author: 'Zantex Labs',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
    category: 'Innovation',
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-100 text-[#2f455c] text-[10px] font-black uppercase tracking-widest mb-8 shadow-sm"
          >
            Insights & Updates
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-8xl font-black text-[#2f455c] tracking-tighter leading-[0.9] mb-8"
          >
            Zantex <span className="text-[#34f5c6]">Journal.</span>
          </motion.h1>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            Stay updated with the latest in technology, engineering, 
            and digital innovation from the heart of Zantex.
          </p>
        </div>
      </section>

      {/* ── Posts Grid ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-xl shadow-slate-200/50">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-[#2f455c] text-[10px] font-black uppercase tracking-widest shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="px-2 space-y-4">
                    <div className="flex items-center gap-6 text-[11px] font-black text-slate-400 uppercase tracking-widest">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-black text-[#2f455c] group-hover:text-[#34f5c6] transition-colors leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-500 font-medium line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="pt-4">
                      <div className="flex items-center gap-2 text-sm font-black text-[#2f455c] group-hover:gap-4 transition-all">
                        Read Article <ArrowRight className="w-4 h-4 text-[#34f5c6]" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
