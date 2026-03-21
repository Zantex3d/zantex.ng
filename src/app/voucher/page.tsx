'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wifi, Smartphone, Check, ArrowRight, MessageCircle, Clock, Zap, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
    {
        id: 'daily',
        name: 'Daily Plan',
        price: '500',
        duration: '24 Hours',
        features: ['Unlimited Data', 'High Speed', 'Single Device'],
        highlight: false,
    },
    {
        id: 'weekly',
        name: 'Weekly Plan',
        price: '1,500',
        duration: '7 Days',
        features: ['Unlimited Data', 'High Speed', 'Single Device'],
        highlight: true,
    },
    {
        id: 'monthly',
        name: 'Monthly Plan',
        price: '5,000',
        duration: '30 Days',
        features: ['Unlimited Data', 'High Speed', 'Single Device'],
        highlight: false,
    },
];

const locations = [
    { id: 'umth', name: 'UMTH Male Hostel', description: 'Available in all blocks' },
    { id: 'unimaid-girls', name: 'Unimaid Girls Hostel', description: 'Aisha Buhari / Ali Monguno / BOT' },
];

export default function VoucherPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(locations[0].id);
    const [selectedPlan, setSelectedPlan] = useState(plans[1].id);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/paystack/initialize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fullname: fullName,
                    email,
                    phone: phoneNumber,
                    hostel: selectedLocation,
                    plan: selectedPlan,
                }),
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                alert(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert('Failed to connect to payment server.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* ── Hero Section ────────────────────────────────────────── */}
            <section className="relative pt-32 md:pt-48 pb-20 overflow-hidden bg-[#2f455c] text-white">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#34f5c6]/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#34f5c6] text-[10px] font-black uppercase tracking-widest mb-8"
                    >
                        <Wifi className="w-3 h-3" /> Smart Campus Wi-Fi
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-6"
                    >
                        Get Connected <span className="text-[#34f5c6]">Instantly.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-300 text-sm md:text-lg font-medium max-w-2xl mx-auto mb-16"
                    >
                        Purchase your Zantex WiFi voucher online and enjoy blazing fast internet speeds
                        across your campus hostels. Reliable, secure, and always active.
                    </motion.p>
                </div>
            </section>

            {/* ── Form Section ────────────────────────────────────────── */}
            <section className="relative -mt-20 pb-32 z-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Left: Input Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-5 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100"
                        >
                            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                                {/* Full Name */}
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-[#2f455c]">Full Name</label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Ibrahim Shettima"
                                        className="w-full px-4 sm:px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#34f5c6] focus:bg-white outline-none transition-all font-bold text-[#2f455c]"
                                        required
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-[#2f455c]">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="nabilah123@example.com"
                                        className="w-full px-4 sm:px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#34f5c6] focus:bg-white outline-none transition-all font-bold text-[#2f455c]"
                                        required
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-[#2f455c] flex items-center gap-2">
                                        <Smartphone className="w-4 h-4 text-[#34f5c6]" />
                                        Account / Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        placeholder="+234XXXXXXXXXX"
                                        className="w-full px-4 sm:px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#34f5c6] focus:bg-white outline-none transition-all font-mono font-bold text-base sm:text-lg text-[#2f455c]"
                                        required
                                    />
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest pl-2">Format: 234 followed by your number</p>
                                </div>

                                {/* Location Select */}
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-[#2f455c]">Select Location</label>
                                    <div className="grid grid-cols-1 gap-3">
                                        {locations.map((loc) => (
                                            <button
                                                key={loc.id}
                                                type="button"
                                                onClick={() => setSelectedLocation(loc.id)}
                                                className={cn(
                                                    "flex items-center justify-between p-4 sm:p-5 rounded-2xl border-2 transition-all text-left group",
                                                    selectedLocation === loc.id
                                                        ? "bg-[#2f455c] border-[#2f455c] text-white"
                                                        : "bg-white border-slate-100 text-[#2f455c] hover:border-slate-200"
                                                )}
                                            >
                                                <div>
                                                    <div className="font-black text-sm">{loc.name}</div>
                                                    <div className={cn("text-[10px] font-bold opacity-60", selectedLocation === loc.id ? "text-white" : "text-slate-400")}>{loc.description}</div>
                                                </div>
                                                {selectedLocation === loc.id && <Check className="w-5 h-5 text-[#34f5c6]" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#2f455c] text-[#34f5c6] py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#2f455c]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Processing...' : 'Proceed to Payment'}
                                    {!loading && <ArrowRight className="w-5 h-5" />}
                                </button>

                                {/* Help Link */}
                                <div className="pt-6 border-t border-slate-50">
                                    <a
                                        href="https://wa.me/2349068702472"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 text-slate-400 hover:text-[#2f455c] transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5 text-green-500" />
                                        <span className="text-xs font-bold font-medium">Need help? WhatsApp Support</span>
                                    </a>
                                </div>
                            </form>
                        </motion.div>

                        {/* Right: Plan Comparison */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {plans.map((plan) => (
                                    <motion.div
                                        key={plan.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        onClick={() => setSelectedPlan(plan.id)}
                                        className={cn(
                                            "relative p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 flex flex-col justify-between min-h-[300px] h-auto lg:h-[380px] group",
                                            selectedPlan === plan.id
                                                ? "bg-white border-[#34f5c6] shadow-2xl shadow-[#34f5c6]/10 scale-[1.02]"
                                                : "bg-slate-50 border-transparent hover:border-slate-200"
                                        )}
                                    >
                                        {plan.highlight && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#34f5c6] text-[#2f455c] text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                                Popular
                                            </div>
                                        )}

                                        <div>
                                            <h4 className="text-xl font-black text-[#2f455c] mb-2">{plan.name}</h4>
                                            <div className="flex items-baseline gap-1 mb-6">
                                                <span className="text-3xl font-black text-[#2f455c]">₦{plan.price}</span>
                                                <span className="text-slate-400 text-xs font-bold uppercase">/ {plan.duration}</span>
                                            </div>
                                            <div className="space-y-4">
                                                {plan.features.map((f, i) => (
                                                    <div key={i} className="flex items-center gap-2">
                                                        <div className="w-4 h-4 rounded-full bg-[#34f5c6]/10 flex items-center justify-center">
                                                            <Check className="w-2.5 h-2.5 text-[#34f5c6]" />
                                                        </div>
                                                        <span className="text-[11px] font-bold text-slate-500">{f}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className={cn(
                                            "mt-8 w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest text-center transition-all",
                                            selectedPlan === plan.id
                                                ? "bg-[#2f455c] text-white"
                                                : "bg-white text-slate-400 border border-slate-100 group-hover:bg-[#2f455c] group-hover:text-white"
                                        )}>
                                            {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Features Banner */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="bg-[#2f455c] rounded-[3rem] p-10 relative overflow-hidden group border border-white/5"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#34f5c6]/5 blur-3xl rounded-full" />
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#34f5c6]">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black text-sm mb-1">Ultra-Fast</div>
                                            <div className="text-white/40 text-[10px] font-medium font-bold">Low latency connection</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#34f5c6]">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black text-sm mb-1">Secure</div>
                                            <div className="text-white/40 text-[10px] font-medium font-bold">Enterprise grade security</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#34f5c6]">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black text-sm mb-1">24/7 Access</div>
                                            <div className="text-white/40 text-[10px] font-medium font-bold">Uninterrupted service</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Instructions Section ────────────────────────────────── */}
            <section className="pb-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-[#2f455c] mb-12">How to Connect</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mx-auto text-2xl font-black text-[#34f5c6]">1</div>
                            <h4 className="font-black text-[#2f455c]">Purchase Voucher</h4>
                            <p className="text-slate-500 text-xs font-medium leading-relaxed">Enter your phone number and select a plan above to pay online.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mx-auto text-2xl font-black text-[#34f5c6]">2</div>
                            <h4 className="font-black text-[#2f455c]">Connect to Wi-Fi</h4>
                            <p className="text-slate-500 text-xs font-medium leading-relaxed">Enable Wi-Fi on your device and select the "Hostel Wi-Fi" network.</p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mx-auto text-2xl font-black text-[#34f5c6]">3</div>
                            <h4 className="font-black text-[#2f455c]">Login & Browse</h4>
                            <p className="text-slate-500 text-xs font-medium leading-relaxed">Log in using your account details and enjoy unlimited internet access.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
