'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { use } from 'react';
import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const posts = {
  'starlink-future-nigeria': {
    title: 'The Future of Starlink in Nigeria',
    date: 'March 12, 2024',
    author: 'Zantex Engineering',
    category: 'Internet',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2670&auto=format&fit=crop',
    content: `
      <p>Starlink's entry into the Nigerian market marks a pivotal shift in how connectivity is perceived and delivered in West Africa. For years, businesses and individuals in remote areas have struggled with inconsistent terrestrial infrastructure. Zantex is at the forefront of this transformation, providing professional enterprise-grade installation and management services for Starlink systems.</p>
      
      <h3>Bridging the Digital Divide</h3>
      <p>Satellite technology is no longer a luxury but a necessity for business continuity. Our team has successfully deployed low-latency solutions in regions where traditional fiber or microwave links were previously impossible. This isn't just about speed; it's about reliability and global integration.</p>
      
      <blockquote>"The reliability of low-earth orbit satellite internet is fundamentally changing the operational landscape for Nigerian SMEs."</blockquote>

      <h3>Zantex Professional Installation</h3>
      <p>A successful Starlink deployment requires more than just unboxing the equipment. Our engineers ensure optimal positioning, industrial-grade mounting, and seamless integration into existing corporate networks. We provide shielded cabling and lightning protection to guarantee system longevity in tropical climates.</p>
      
      <ul>
        <li>Strategic Site Surveys</li>
        <li>Industrial Mounting Solutions</li>
        <li>Custom Network Integration</li>
        <li>24/7 Remote Monitoring</li>
      </ul>

      <p>As we look toward the remainder of 2024, Zantex continues to expand its reach, ensuring that every corner of the country can participate in the digital economy with world-class connectivity.</p>
    `
  },
  'modern-web-performance': {
    title: 'Modern Web Performance Standards',
    date: 'March 08, 2024',
    author: 'Zantex Digital',
    category: 'Digital',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    content: `
      <p>In 2024, web performance is no longer a "nice to have"—it's a critical business KPI. Search engines and users alike demand instantaneous interactions. At Zantex Digital, we build with a performance-first mindset, ensuring that every pixel serves a purpose and every script is optimized.</p>
      
      <h3>The Core Web Vitals Era</h3>
      <p>Google's emphasis on Core Web Vitals has changed the game. Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) are the new benchmarks of success. We utilize modern frameworks like Next.js and Tailwind CSS to achieve near-perfect Lighthouse scores out of the box.</p>
      
      <h3>Minimalism in Design and Code</h3>
      <p>Reducing the 'weight' of a website is the first step toward speed. This includes optimizing images with next-gen formats like WebP and AVIF, and implementing aggressive tree-shaking for JavaScript libraries.</p>

      <h3>Why it matters for your business:</h3>
      <ul>
        <li>Improved SEO Rankings</li>
        <li>Higher Conversion Rates</li>
        <li>Lower Bounce Rates</li>
        <li>Better User Retention</li>
      </ul>

      <p>Performance optimization is a journey, not a destination. Regular audits and continuous integration of performance-enhancing techniques keep our clients ahead of the competition.</p>
    `
  },
  'iot-connecting-unconnected': {
    title: 'IoT: Connecting the Unconnected',
    date: 'March 01, 2024',
    author: 'Zantex Labs',
    category: 'Innovation',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
    content: `
      <p>The Internet of Things (IoT) is moving beyond consumer gadgets and into the heart of industrial engineering. Zantex Labs is developing custom embedded systems that allow traditional machinery to speak the language of data, providing real-time insights that were previously locked away.</p>
      
      <h3>Custom Embedded Systems</h3>
      <p>Our approach starts at the hardware level. We design and prototype custom PCBs using microcontrollers like Arduino and ESP32 to solve specific industrial problems—from automated climate control in smart greenhouses to power usage monitoring in factory environments.</p>
      
      <h3>Data-Driven Decision Making</h3>
      <p>Connectivity is only valuable if the data it generates is actionable. We bridge the gap between sensors and dashboards, creating seamless data pipelines that empower managers to make decisions based on reality, not estimation.</p>

      <blockquote>"Connectivity in the industrial sector is the next frontier of operational efficiency."</blockquote>

      <p>Through our technical training programs, we are also building the next generation of electronics engineers ready to tackle the challenges of a connected world.</p>
    `
  }
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = posts[resolvedParams.slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-[#2f455c]">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#34f5c6] font-bold underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── Article Header ────────────────────────────────────── */}
      <section className="pt-32 md:pt-48 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link href="/blog" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#2f455c] hover:bg-[#34f5c6] transition-all">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="px-4 py-1.5 rounded-full bg-slate-50 text-[#2f455c] text-[10px] font-black uppercase tracking-widest border border-slate-100">
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black text-[#2f455c] tracking-tight leading-[1.1] mb-12"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-between pb-12 border-b border-slate-100 gap-8"
          >
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-[#2f455c]">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Written by</p>
                  <p className="text-sm font-black text-[#2f455c]">{post.author}</p>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-slate-100" />
              <div className="flex items-center gap-6">
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Date</p>
                   <div className="flex items-center gap-2 text-sm font-bold text-[#2f455c]">
                      <Calendar className="w-4 h-4 text-[#34f5c6]" />
                      {post.date}
                   </div>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Read Time</p>
                   <div className="flex items-center gap-2 text-sm font-bold text-[#2f455c]">
                      <Clock className="w-4 h-4 text-[#34f5c6]" />
                      {post.readTime}
                   </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
               <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#2f455c] hover:bg-[#34f5c6] transition-all">
                  <Share2 className="w-4 h-4" />
               </button>
               <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#2f455c] hover:bg-[#34f5c6] transition-all">
                  <Linkedin className="w-4 h-4" />
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Image ────────────────────────────────────── */}
      <section className="px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-6xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* ── Content Body ──────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg max-w-none prose-slate"
          >
            <div 
              className="blog-content font-medium text-slate-600 leading-relaxed space-y-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Social Links Footer */}
          <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
               <h4 className="text-lg font-black text-[#2f455c] mb-2">Like what you see?</h4>
               <p className="text-slate-500 font-medium">Share this article with your network.</p>
            </div>
            <div className="flex gap-4">
               <button className="bg-slate-50 px-6 py-3 rounded-2xl flex items-center gap-3 font-black text-[#2f455c] hover:bg-[#34f5c6] transition-all">
                  <Twitter className="w-4 h-4" /> Twitter
               </button>
               <button className="bg-slate-50 px-6 py-3 rounded-2xl flex items-center gap-3 font-black text-[#2f455c] hover:bg-[#34f5c6] transition-all">
                  <Linkedin className="w-4 h-4" /> LinkedIn
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── More Posts Section ────────────────────────────────── */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto bg-slate-50 rounded-[4rem] p-12 md:p-24 text-center">
           <h2 className="text-3xl md:text-4xl font-black text-[#2f455c] mb-8">Want more technological insights?</h2>
           <Link href="/blog">
              <button className="bg-[#2f455c] text-white px-10 py-4 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-xl">
                 Return to Journal
              </button>
           </Link>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .blog-content h3 {
          font-weight: 900;
          color: #2f455c;
          font-size: 1.875rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
        }
        .blog-content p {
          margin-bottom: 1.5rem;
        }
        .blog-content blockquote {
          border-left: 5px solid #34f5c6;
          padding-left: 2rem;
          font-weight: 800;
          font-size: 1.5rem;
          color: #2f455c;
          margin: 3rem 0;
          line-height: 1.2;
          font-style: italic;
        }
        .blog-content ul {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }
        .blog-content ul li {
          position: relative;
          padding-left: 2rem;
          margin-bottom: 1rem;
          font-weight: 700;
          color: #2f455c;
        }
        .blog-content ul li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #34f5c6;
          font-weight: 900;
        }
      `}</style>
    </main>
  );
}
