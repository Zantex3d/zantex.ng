'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const guides = [
  {
    title: 'The Future of Starlink in Nigeria',
    slug: 'starlink-future-nigeria',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2670&auto=format&fit=crop',
    isVideo: true,
  },
  {
    title: 'Modern Web Performance Standards',
    slug: 'modern-web-performance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    isVideo: false,
  },
  {
    title: "IoT: Connecting the Unconnected",
    slug: 'iot-connecting-unconnected',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop',
    isVideo: false,
  }
];

export default function BlogPreview() {
  return (
    <section id="guides" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#2f455c] tracking-tight max-w-xl leading-[1.1]"
          >
            See our free guides on growing your business
          </motion.h2>
          
          <Link href="/blog">
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#2f455c] hover:bg-[#2f455c]/90 text-[#34f5c6] px-8 py-3.5 rounded-full text-sm font-black flex items-center gap-2 transition-all shrink-0 shadow-lg active:scale-95"
            >
              Read the blog <ArrowRight className="w-4 h-4 ml-1" />
            </motion.button>
          </Link>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Link key={index} href={`/blog/${guide.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="group cursor-pointer relative h-[450px] md:h-[580px] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#2f455c]/20 transition-all duration-500"
              >
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#2f455c] via-[#2f455c]/40 to-transparent opacity-90" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-white font-black text-xl leading-tight w-[80%] tracking-tight">
                      {guide.title}
                    </h3>
                    {guide.isVideo && (
                      <div className="w-12 h-12 rounded-full bg-[#34f5c6] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                         <Play className="w-5 h-5 text-[#2f455c] fill-current ml-0.5" />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
