'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, Copy, Printer, Wifi, User, Mail, Phone, Home, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function VerifyContent() {
  const searchParams = useSearchParams();
  const reference = searchParams.get('reference');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (reference) {
      verifyPayment();
    } else {
      setStatus('error');
      setError('No transaction reference found.');
    }
  }, [reference]);

  const verifyPayment = async () => {
    try {
      const response = await fetch(`/api/paystack/verify?reference=${reference}`);
      const result = await response.json();

      if (result.success) {
        setData(result);
        setStatus('success');
      } else {
        setStatus('error');
        setError(result.error || 'Verification failed.');
      }
    } catch (e) {
      setStatus('error');
      setError('Failed to connect to verification server.');
    }
  };

  const copyVoucher = () => {
    if (data?.voucher_code) {
      navigator.clipboard.writeText(data.voucher_code);
      alert('Voucher code copied to clipboard!');
    }
  };

  const printVoucher = () => {
    window.print();
  };

  if (status === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-[#34f5c6] border-t-transparent rounded-full animate-spin mb-6"></div>
        <h2 className="text-2xl font-black text-[#2f455c]">Verifying Payment...</h2>
        <p className="text-slate-500 font-bold mt-2">Please do not close this window.</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
        <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-6">
          <Zap className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-[#2f455c] mb-4">Verification Failed</h2>
        <p className="text-slate-500 font-bold max-w-md mx-auto mb-8">{error}</p>
        <a href="/voucher" className="bg-[#2f455c] text-white px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all">
          Try Again
        </a>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto py-12 px-6"
    >
      <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#34f5c6]/10 rounded-bl-full -mr-8 -mt-8" />
        
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-black text-[#2f455c] mb-2">Payment Successful!</h1>
          <p className="text-slate-500 font-bold">Your WiFi voucher has been issued.</p>
        </div>

        <div className="space-y-6">
          <div className="p-8 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 text-center relative group">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Voucher Code</p>
            <h2 className="text-5xl font-black text-[#2f455c] tracking-widest mb-4">
              {data.voucher_code}
            </h2>
            <button 
              onClick={copyVoucher}
              className="absolute top-4 right-4 p-2 bg-white rounded-lg text-slate-400 hover:text-[#34f5c6] transition-colors shadow-sm"
              title="Copy Code"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailItem icon={<User className="w-4 h-4" />} label="Full Name" value={data.fullname} />
            <DetailItem icon={<Phone className="w-4 h-4" />} label="Phone Number" value={data.phone} />
            <DetailItem icon={<Mail className="w-4 h-4" />} label="Email Address" value={data.email} />
            <DetailItem icon={<Home className="w-4 h-4" />} label="Hostel" value={data.hostel === 'girls' ? 'Girls Hostel' : 'UMTH Male Hostel'} />
            <DetailItem icon={<Zap className="w-4 h-4" />} label="Plan" value={data.plan.toUpperCase()} />
            <DetailItem icon={<Wifi className="w-4 h-4" />} label="Network" value={`ZANTEX WIFI - ${data.hostel.toUpperCase()}`} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button 
              onClick={printVoucher}
              className="flex-1 bg-slate-50 text-[#2f455c] py-4 rounded-2xl font-black flex items-center justify-center gap-3 border border-slate-100 hover:bg-slate-100 transition-all"
            >
              <Printer className="w-5 h-5" />
              Print Receipt
            </button>
            <button 
              onClick={copyVoucher}
              className="flex-1 bg-[#2f455c] text-[#34f5c6] py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#2f455c]/20"
            >
              <Copy className="w-5 h-5" />
              Copy Code
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-slate-400">
        <p className="text-xs font-bold uppercase tracking-widest mb-4">Instructions</p>
        <p className="text-sm font-medium max-w-md mx-auto leading-relaxed">
          1. Connect to the <span className="text-[#2f455c] font-black">Zantex Smart Wi-Fi</span> network.
          <br />
          2. Open your browser and enter the voucher code when prompted.
          <br />
          3. Enjoy uninterrupted high-speed internet.
        </p>
      </div>
    </motion.div>
  );
}

function DetailItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100/50">
      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#34f5c6] shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">{label}</p>
        <p className="text-sm font-black text-[#2f455c]">{value}</p>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <main className="min-h-screen bg-slate-50/50">
      <Navbar />
      <div className="pt-32 pb-20">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-16 h-16 border-4 border-[#34f5c6] border-t-transparent rounded-full animate-spin mb-6"></div>
            <h2 className="text-2xl font-black text-[#2f455c]">Loading...</h2>
          </div>
        }>
          <VerifyContent />
        </Suspense>
      </div>
      <Footer />
    </main>
  );
}
