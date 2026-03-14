'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Internet', href: '/internet' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Voucher', href: '/voucher' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages that have a dark hero section
  const isDarkPage = ['/internet', '/services', '/privacy', '/terms', '/voucher'].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text color logic
  const linkColor = isScrolled 
    ? 'text-[#2f455c] hover:text-[#34f5c6]' 
    : isDarkPage 
      ? 'text-white hover:text-[#34f5c6]' 
      : 'text-[#2f455c] hover:text-[#34f5c6]';

  const logoBrightness = !isScrolled && isDarkPage ? 'brightness-200' : '';

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6',
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.05)]'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/zantext logo.png"
            alt="Zantex Logo"
            className={cn("h-11 w-auto object-contain transition-all", logoBrightness)}
          />
        </Link>

        {/* Center Nav */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-bold transition-all rounded-full tracking-tight",
                linkColor,
                !isScrolled && isDarkPage ? "hover:bg-white/10" : "hover:bg-[#34f5c6]/10"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Nav */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/quote"
            className={cn(
              "px-8 py-2.5 rounded-full text-sm font-bold active:scale-95 transition-all shadow-xl",
              isScrolled
                ? "bg-[#2f455c] text-[#34f5c6] hover:shadow-[#2f455c]/20"
                : isDarkPage
                  ? "bg-[#34f5c6] text-[#2f455c] hover:bg-white"
                  : "bg-[#2f455c] text-[#34f5c6] hover:shadow-[#2f455c]/20"
            )}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-all",
            isScrolled || !isDarkPage ? "bg-slate-50 text-[#2f455c]" : "bg-white/10 text-white"
          )}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-slate-100">
               <img src="/zantext logo.png" alt="Zantex" className="h-8 w-auto object-contain" />
               <button 
                 onClick={() => setMobileMenuOpen(false)}
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-[#2f455c]"
               >
                 <X className="w-5 h-5" />
               </button>
            </div>
            <div className="p-8 flex flex-col gap-8 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-3xl font-bold text-[#2f455c] hover:text-[#34f5c6] transition-colors flex items-center justify-between group tracking-tighter",
                    pathname === link.href && "text-[#34f5c6]"
                  )}
                >
                  {link.name}
                  <ChevronRight className="w-8 h-8 opacity-20 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
            <div className="mt-auto p-8">
              <Link
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#2f455c] text-[#34f5c6] py-5 rounded-[2rem] font-black text-center block shadow-2xl active:scale-95 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
