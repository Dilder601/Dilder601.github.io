"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomeHero() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <main className="relative min-h-screen overflow-hidden font-sans selection:bg-primary-100 selection:text-primary-900">
            {/* background */}
            <div className="absolute inset-0 -z-20">
                <Image src="/mesh-2.png" alt="background" fill className="object-cover opacity-30" priority />
            </div>
            {/* animated dots layer */}
            <div className="absolute inset-0 -z-10 opacity-[.15] bg-dots pan-slow" />
            
            {/* animated blobs - enhanced colors */}
            <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary-400/40 blur-[100px] lg:-left-12 lg:h-96 lg:w-96 animate-blob" />
            <div className="pointer-events-none absolute -right-24 top-48 -z-10 h-72 w-72 rounded-full bg-indigo-400/40 blur-[100px] lg:-right-12 lg:h-96 lg:w-96 animate-blob animation-delay-2000" />
            
            {/* aurora beams */}
            <div className="aurora -z-10 opacity-50">
                <div className="beam" style={{ left: '-10%', top: '10%', background: 'radial-gradient(closest-side, rgba(59,130,246,0.6), transparent 60%)' }} />
                <div className="beam" style={{ right: '-5%', top: '30%', background: 'radial-gradient(closest-side, rgba(99,102,241,0.6), transparent 60%)', animationDelay: '4s' }} />
                <div className="beam" style={{ left: '20%', bottom: '-10%', background: 'radial-gradient(closest-side, rgba(16,185,129,0.5), transparent 60%)', animationDelay: '8s' }} />
            </div>

            {/* navbar */}
            <header className="sticky top-6 z-50 transition-all duration-300">
                <div className="mx-auto max-w-6xl px-6 md:px-10">
                    <div className="glass-card flex items-center justify-between rounded-full px-6 py-3 transition-all hover:shadow-xl hover:bg-white/70">
                        {/* brand */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-indigo-500 text-white font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                                D
                                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </span>
                            <span className="font-heading font-bold tracking-tight text-xl">
                                <span className="text-gradient">Dilder</span>
                            </span>
                        </Link>

                        {/* desktop nav */}
                        <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600">
                            {[
                                { href: '/resume', label: 'Resume' },
                                { href: 'https://github.com/Dilder601', label: 'GitHub', ext: true },
                                { href: 'https://www.linkedin.com/in/dilder-orclapex/', label: 'LinkedIn', ext: true },
                            ].map((item) => (
                                item.ext ? (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="group relative px-4 py-2 hover:text-primary-600 transition-colors">
                                        {item.label}
                                        <span className="absolute inset-x-4 -bottom-0.5 h-0.5 scale-x-0 bg-gradient-to-r from-primary-600 to-indigo-600 transition-transform duration-300 group-hover:scale-x-100" />
                                    </a>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="group relative px-4 py-2 hover:text-primary-600 transition-colors">
                                        {item.label}
                                        <span className="absolute inset-x-4 -bottom-0.5 h-0.5 scale-x-0 bg-gradient-to-r from-primary-600 to-indigo-600 transition-transform duration-300 group-hover:scale-x-100" />
                                    </Link>
                                )
                            ))}
                            <Link
                                href="/resume"
                                aria-label="Download Resume"
                                className="ml-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 px-6 py-2.5 text-white font-medium shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 transition-all duration-300">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Download
                            </Link>
                        </nav>

                        {/* mobile toggle */}
                        <button
                            aria-label="Toggle menu"
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/50 backdrop-blur text-slate-700 hover:bg-white transition-colors"
                            onClick={() => setMobileOpen((v) => !v)}>
                            <svg
                                className={`transition-transform duration-300 ${mobileOpen ? 'rotate-90' : ''}`}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                {mobileOpen ? (
                                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                ) : (
                                    <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* mobile panel */}
                    <div
                        className={`md:hidden mt-4 overflow-hidden rounded-3xl glass-card transition-[max-height,opacity,transform] duration-500 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}>
                        <div className="flex flex-col p-2">
                            {[
                                { href: '/resume', label: 'Resume' },
                                { href: 'https://github.com/Dilder601', label: 'GitHub', ext: true },
                                { href: 'https://www.linkedin.com/in/dilder-orclapex/', label: 'LinkedIn', ext: true },
                            ].map((item) => (
                                item.ext ? (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="px-6 py-4 text-slate-700 hover:bg-white/50 rounded-2xl transition-colors font-medium"
                                        onClick={() => setMobileOpen(false)}>
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="px-6 py-4 text-slate-700 hover:bg-white/50 rounded-2xl transition-colors font-medium"
                                        onClick={() => setMobileOpen(false)}>
                                        {item.label}
                                    </Link>
                                )
                            ))}
                            <div className="p-2">
                                <Link
                                    href="/resume"
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 px-6 py-4 text-white font-bold shadow-lg"
                                    onClick={() => setMobileOpen(false)}>
                                    Download Resume
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="mx-auto max-w-6xl px-6 md:px-10 py-12 md:py-24 grid gap-12 md:grid-cols-2 items-center relative z-10">
                {/* Left: Heading + CTA */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/50 px-4 py-1.5 backdrop-blur-sm animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        <span className="text-xs font-bold tracking-wide text-primary-700 uppercase">Available for hire</span>
                    </div>
                    
                    <div className="space-y-4">
                        <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 animate-fade-in-up delay-100">
                            Building <br/>
                            <span className="text-gradient">Scalable</span> Solutions
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed animate-fade-in-up delay-200">
                            Oracle APEX and PL/SQL developer specializing in high-performance ERP modules, data-driven applications, and database optimization.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 animate-fade-in-up delay-300">
                        <Link
                            href="/resume"
                            className="btn-animated animate-breath group relative inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-white shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-800">
                            <span className="font-semibold">View Resume</span>
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <a
                            href="mailto:dilder.hossain.feni@gmail.com"
                            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-8 py-4 text-slate-700 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1">
                            <span className="font-semibold">Contact Me</span>
                        </a>
                    </div>

                    {/* Socials & Skills */}
                    <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row gap-6 md:items-center">
                        <div className="flex items-center gap-4">
                            {[
                                { href: 'https://github.com/Dilder601', icon: '/images/github.png', label: 'GitHub' },
                                { href: 'https://www.linkedin.com/in/dilder-orclapex/', icon: '/images/linkedin.png', label: 'LinkedIn' },
                                { href: 'https://leetcode.com/DilderHossain/', icon: '/images/leetcode.svg', label: 'LeetCode' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm transition-all hover:scale-110 hover:shadow-md hover:border-primary-200"
                                    title={social.label}>
                                    <Image src={social.icon} alt={social.label} width={24} height={24} className="opacity-75 group-hover:opacity-100 transition-opacity" />
                                </a>
                            ))}
                        </div>
                        <div className="h-8 w-px bg-slate-200 hidden md:block" />
                        <div className="flex flex-wrap gap-2">
                            {['Oracle APEX', 'PL/SQL', 'ERP', 'REST API'].map((t) => (
                                <span key={t} className="rounded-full border border-slate-200 bg-white/40 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Avatar */}
                <div className="relative mx-auto w-full max-w-md aspect-square md:aspect-auto md:h-[32rem] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/40 to-indigo-200/40 rounded-full blur-3xl animate-pulse" />
                    <div className="relative h-[280px] w-[280px] md:h-[400px] md:w-[400px]">
                        <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-[spin_10s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full border border-white/30 animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100 to-indigo-100 p-2 shadow-2xl ring-1 ring-white/50">
                            <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
                                <Image
                                    src="/images/profile.png"
                                    alt="Profile"
                                    fill
                                    className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>
                        
                        {/* Floating badges */}
                        <div className="absolute -left-4 top-1/4 animate-bounce duration-[3000ms]">
                            <div className="glass-card flex items-center gap-2 rounded-2xl px-4 py-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                </span>
                                <div className="text-xs font-bold text-slate-700">
                                    Full Stack<br/>Developer
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute -right-8 bottom-1/3 animate-bounce duration-[4000ms]">
                            <div className="glass-card flex items-center gap-2 rounded-2xl px-4 py-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                </span>
                                <div className="text-xs font-bold text-slate-700">
                                    Verified<br/>Expert
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* stats/footer strip */}
            <section className="mx-auto max-w-6xl px-6 md:px-10 pb-12 relative z-10">
                <div className="glass-card rounded-3xl p-1 bg-gradient-to-r from-white/40 to-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/50 bg-white/40 rounded-[22px]">
                        {/* Item 1 */}
                        <div className="group flex items-center gap-4 px-8 py-6 hover:bg-white/40 transition rounded-t-[22px] md:rounded-l-[22px] md:rounded-tr-none">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M10 4H6a2 2 0 00-2 2v12h2v-6h4v6h2V6a2 2 0 00-2-2zm8 4h-4a2 2 0 00-2 2v8h2v-4h4v4h2v-8a2 2 0 00-2-2zm-6 4v-2a2 2 0 012-2h4"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">4+ Years Exp.</h3>
                                <p className="text-sm text-slate-600">APEX, PL/SQL & ERP</p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="group flex items-center gap-4 px-8 py-6 hover:bg-white/40 transition">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                    <path d="M22 12a10 10 0 1 1-10-10"/>
                                    <path d="M22 12A10 10 0 0 0 12 2v10z" fill="currentColor"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Performance</h3>
                                <p className="text-sm text-slate-600">Database Tuning & Reports</p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="group flex items-center gap-4 px-8 py-6 hover:bg-white/40 transition rounded-b-[22px] md:rounded-r-[22px] md:rounded-bl-none">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                    <path d="M20 6L9 17l-5-5"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Available</h3>
                                <p className="text-sm text-slate-600">For Full-time Roles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* animated waves */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10">
                <div className="relative h-40 md:h-64 overflow-hidden">
                    {/* back wave */}
                    <svg
                        className="absolute bottom-0 left-0 h-full w-[200%] animate-wave-slow will-change-transform opacity-50"
                        viewBox="0 0 1800 240"
                        fill="none"
                        preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="waveGradBack" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0 120 C 150 200 350 40 500 120 S 850 200 1000 120 S 1150 40 1300 120 S 1650 200 1800 120 V 240 H 0 Z"
                            fill="url(#waveGradBack)"
                        />
                    </svg>
                    {/* front wave */}
                    <svg
                        className="absolute bottom-0 left-0 h-full w-[200%] animate-wave-fast will-change-transform"
                        viewBox="0 0 1800 240"
                        fill="none"
                        preserveAspectRatio="none"
                        style={{ animationDirection: 'reverse' }}>
                        <defs>
                            <linearGradient id="waveGradFront" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0 140 C 140 220 360 60 520 140 S 860 220 1020 140 S 1180 60 1340 140 S 1660 220 1800 140 V 240 H 0 Z"
                            fill="url(#waveGradFront)"
                        />
                    </svg>
                </div>
            </div>
        </main>
    );
}
