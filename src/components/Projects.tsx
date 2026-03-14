'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, LayoutGrid, Sparkles } from 'lucide-react';

export default function Projects() {
  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ── Header ────────────────────────────────────────────── */}
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-400"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#34f5c6]" />
            Benefits
            <div className="w-1.5 h-1.5 rounded-full bg-[#34f5c6]" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-[#2f455c] tracking-tight"
          >
            Your Benefits
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          >
            Harnessing the power of advanced technology to revolutionize industries 
            and enhance human experiences.
          </motion.p>
        </div>

        {/* ── 3-Card Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-[2.5rem] p-8 pb-0 flex flex-col overflow-hidden border border-slate-100 group h-[450px]"
          >
            <div className="mb-10">
              <h3 className="text-xl font-black text-[#2f455c] tracking-tight mb-3">Innovative Essential Platforms</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Witness our groundbreaking platforms that seamlessly connect users worldwide with unprecedented efficiency.
              </p>
            </div>
            
            <div className="flex-1 relative mt-auto w-[120%] -ml-[10%] opacity-80 group-hover:opacity-100 transition-opacity">
               <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />
               <div className="grid grid-cols-4 gap-3 rotate-[-5deg] scale-110 translate-y-4">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="aspect-square bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100">
                      <LayoutGrid className="w-6 h-6 text-slate-200" />
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 rounded-[2.5rem] p-8 pb-0 flex flex-col overflow-hidden border border-slate-100 group h-[450px]"
          >
            <div className="mb-8">
              <h3 className="text-xl font-black text-[#2f455c] tracking-tight mb-3">Effortless Personalization</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our technology tailors the user experience to each visitor, learning preferences to recommend relevant content.
              </p>
            </div>
            
            <div className="flex-1 relative bg-white border border-slate-200 border-b-0 rounded-t-3xl shadow-sm p-4 overflow-hidden translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                <div className="w-full h-4 border-b border-slate-100 flex gap-1.5 mb-4">
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                </div>
                <div className="grid grid-cols-4 grid-rows-3 gap-2 h-32 opacity-20">
                   {[...Array(12)].map((_, i) => <div key={i} className="bg-slate-300 rounded-sm" />)}
                </div>
                <div className="absolute bottom-10 right-[-10px] w-24 h-24 bg-[#34f5c6]/10 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#34f5c6] rounded-full absolute top-2 right-2 shadow-lg" />
                </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 rounded-[2.5rem] p-8 pb-0 flex flex-col overflow-hidden border border-slate-100 group h-[450px]"
          >
            <div className="mb-8">
              <h3 className="text-xl font-black text-[#2f455c] tracking-tight mb-3">Continual Improvement</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We constantly learn from interactions and data. This ongoing process guarantees your systems stay optimized.
              </p>
            </div>
            
            <div className="flex-1 space-y-4 translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                <div className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 border border-slate-200 shadow-sm">
                   <Sparkles className="w-5 h-5 text-[#34f5c6]" />
                   <div className="text-sm border-r border-slate-200 pr-2 mr-0 text-slate-300">Ask system to...</div>
                   <div className="w-6 h-6 rounded-full bg-[#2f455c] flex items-center justify-center ml-auto">
                      <ArrowRight className="w-3 h-3 text-white" />
                   </div>
                </div>

                <div className="w-full bg-white rounded-t-2xl p-5 border border-slate-200 border-b-0 shadow-sm flex-1">
                   <div className="text-xs font-bold text-slate-400 mb-4">Generate With Intelligence</div>
                   <div className="space-y-3">
                      <div className="bg-slate-50 p-3 rounded-xl text-sm font-medium text-slate-600 flex items-center gap-2">
                         <div className="w-4 h-4 rounded-md bg-white border border-slate-200" /> Brainstorm ideas
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl text-sm font-medium text-slate-600 flex items-center gap-2">
                         <div className="w-4 h-4 rounded-md bg-white border border-slate-200" /> Optimize Workflow
                      </div>
                   </div>
                </div>
            </div>
          </motion.div>
        </div>

        {/* ── 2-Card Grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          
          {/* Wide Card 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-slate-100 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-black text-[#2f455c] tracking-tight">Boost Efficiency & Productivity</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Automate repetitive tasks like data analysis and updates. Free up your team to focus on strategic initiatives.
              </p>
              
              <div className="mt-8 relative w-40 h-40">
                 {/* Circular progress mockup */}
                 <svg className="w-full h-full transform -rotate-90">
                    <circle cx="80" cy="80" r="70" stroke="#eff6ff" strokeWidth="12" fill="none" />
                    <circle cx="80" cy="80" r="70" stroke="#34f5c6" strokeWidth="12" fill="none" strokeDasharray="440" strokeDashoffset="140" strokeLinecap="round" className="animate-pulse" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Zap className="w-5 h-5 text-[#34f5c6] mb-1" />
                    <span className="text-3xl font-black text-[#2f455c]">68%</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Current Load</span>
                 </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4 w-full">
               <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">Efficiency</div>
                    <div className="text-lg font-black text-[#2f455c]">+20%</div>
                  </div>
                  <div className="w-16 h-8 bg-[#34f5c6]/10 rounded overflow-hidden relative">
                     <svg viewBox="0 0 100 40" className="absolute bottom-0 w-full h-full stroke-[#34f5c6] stroke-2 fill-none" preserveAspectRatio="none">
                       <path d="M0 30 Q 10 20 20 25 T 40 10 T 60 20 T 80 5 T 100 15" />
                     </svg>
                  </div>
               </div>
               
               <div className="bg-[#2f455c] p-4 rounded-2xl shadow-lg flex items-center justify-between group cursor-pointer hover:bg-black transition-colors">
                  <div>
                    <div className="text-[10px] text-slate-300 uppercase font-bold">Consumption</div>
                    <div className="text-lg font-black text-white">163W/km</div>
                  </div>
                  <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center">
                     <Zap className="w-5 h-5 text-[#34f5c6]" />
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Wide Card 2 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-slate-100 flex flex-col justify-between"
          >
            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-black text-[#2f455c] tracking-tight">Actionable Insights</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Analyze user behavior and traffic data. These insights help you understand your audience better and optimize your impact.
              </p>
            </div>

            <div className="flex gap-4">
               <div className="w-1/3 rounded-2xl overflow-hidden shadow-sm">
                  <img src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
               </div>
               
               <div className="w-2/3 flex flex-col gap-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
                     <div>
                       <div className="text-[10px] text-slate-400 uppercase font-bold">Today's Users</div>
                       <div className="text-lg font-black text-[#2f455c]">2,300 <span className="text-[#34f5c6] text-xs">+5%</span></div>
                     </div>
                     <div className="w-8 h-8 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-slate-400 -rotate-45" />
                     </div>
                  </div>

                  <div className="bg-[#2f455c] p-5 rounded-2xl shadow-lg relative overflow-hidden">
                     <div className="absolute right-0 top-0 w-32 h-32 bg-[#34f5c6]/20 blur-3xl rounded-full" />
                     <div className="flex items-start gap-3 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#34f5c6] flex items-center justify-center text-[#2f455c] font-black text-xs">Z</div>
                        <div>
                           <div className="text-white font-black text-sm">Zantex Operations</div>
                           <div className="text-slate-400 text-xs mb-2">Automated system check successful.</div>
                           <div className="flex items-center gap-2">
                              <span className="text-white font-black text-xs">+99.9% Uptime</span>
                              <svg className="w-12 h-4 stroke-[#34f5c6] stroke-2 fill-none"><path d="M0 10 Q 5 2 10 8 T 20 2" /></svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>

        {/* Explore More Button */}
        <div className="text-center mb-32">
          <button className="px-8 py-3 rounded-full border-2 border-slate-100 text-[#2f455c] font-black text-sm hover:border-[#2f455c] transition-colors inline-flex items-center gap-2">
            Explore More <ArrowRight className="w-4 h-4" />
          </button>
        </div>


        {/* ── Indicator Section ─────────────────────────────────── */}
        <div className="mt-16 md:mt-24 border-t border-slate-50 pt-16 md:pt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            <div>
               <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34f5c6]" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Indicator</span>
                  <div className="w-8 h-[1px] bg-slate-200" />
               </div>
               <h2 className="text-3xl md:text-5xl font-black text-[#2f455c] tracking-tight leading-[1.1] mb-6">
                 We are proud to have <br /> great indicators
               </h2>
               <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-2.5 px-4 rounded-full w-fit">
                  <div className="flex -space-x-3">
                     <div className="w-8 h-8 rounded-full border-2 border-slate-50 bg-slate-200"><img src="https://i.pravatar.cc/100?img=1" className="rounded-full" /></div>
                     <div className="w-8 h-8 rounded-full border-2 border-slate-50 bg-slate-300"><img src="https://i.pravatar.cc/100?img=2" className="rounded-full" /></div>
                     <div className="w-8 h-8 rounded-full border-2 border-slate-50 bg-slate-400"><img src="https://i.pravatar.cc/100?img=3" className="rounded-full" /></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="font-black text-[#2f455c] text-sm">4.9/5</span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                      </div>
                    </div>
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">Based on 24 reviews on Clutch</div>
                  </div>
               </div>
            </div>

            <div className="text-left md:text-right">
               <div className="text-5xl md:text-7xl font-black text-[#2f455c] tracking-tighter mb-2 inline-block">
                  5,000+
               </div>
               <div className="text-sm md:text-base text-slate-400 font-bold tracking-wide">
                  Users active in the first month of launch.
               </div>
            </div>
          </div>

          {/* Trusted Logos */}
          <div className="text-center pt-10">
             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">
               Trusted by 500+ Brands & Companies
             </div>
             <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale px-4">
                <div className="text-lg md:text-xl font-black text-slate-900 tracking-tighter">Panda</div>
                <div className="text-lg md:text-xl font-black text-slate-900 italic">Tollbase</div>
                <div className="text-lg md:text-xl font-bold text-slate-900 tracking-widest">Polltree</div>
                <div className="text-lg md:text-xl font-black text-slate-900 flex items-center gap-2"><Sparkles className="w-5 h-5"/> KRATE</div>
                <div className="text-lg md:text-xl font-serif text-slate-900 italic">Kinua</div>
                <div className="text-lg md:text-xl font-black text-slate-900 tracking-tighter hidden lg:block">Panda</div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
