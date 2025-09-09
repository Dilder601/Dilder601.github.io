"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomeHero() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* background */}
            <div className="absolute inset-0 -z-20">
                <Image src="/mesh-2.png" alt="background" fill className="object-cover opacity-20" />
            </div>
            {/* animated dots layer */}
            <div className="absolute inset-0 -z-10 opacity-[.10] bg-dots pan-slow" />
            {/* animated blobs */}
            <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary-400/30 blur-3xl lg:-left-12 lg:h-96 lg:w-96 animate-blob" />
            <div className="pointer-events-none absolute -right-24 top-48 -z-10 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl lg:-right-12 lg:h-96 lg:w-96 animate-blob animation-delay-2000" />
            {/* aurora beams */}
            <div className="aurora -z-10">
                <div className="beam" style={{ left: '-10%', top: '10%', background: 'radial-gradient(closest-side, rgba(59,130,246,0.6), transparent 60%)' }} />
                <div className="beam" style={{ right: '-5%', top: '30%', background: 'radial-gradient(closest-side, rgba(99,102,241,0.6), transparent 60%)', animationDelay: '4s' }} />
                <div className="beam" style={{ left: '20%', bottom: '-10%', background: 'radial-gradient(closest-side, rgba(16,185,129,0.5), transparent 60%)', animationDelay: '8s' }} />
            </div>

            {/* navbar */}
            <header className="sticky top-4 z-50">
                <div className="mx-auto max-w-6xl px-6 md:px-10">
                    <div
                        className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl px-4 py-3 shadow-lg ring-1 ring-black/5">
                        {/* brand */}
                        <Link href="/" className="flex items-center gap-2">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-indigo-500 text-white font-bold shadow-sm">D</span>
                            <span className="font-extrabold tracking-tight text-lg">
                                <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">Dilder</span>
                            </span>
                        </Link>

                        {/* desktop nav */}
                        <nav className="hidden md:flex items-center gap-1 text-sm text-slate-700">
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
                                        className="group rounded-full px-3 py-2 hover:text-primary-700">
                                        <span className="relative">
                                            {item.label}
                                            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-primary-600 to-indigo-600 transition-all duration-300 group-hover:w-full" />
                                        </span>
                                    </a>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="group rounded-full px-3 py-2 hover:text-primary-700">
                                        <span className="relative">
                                            {item.label}
                                            <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-primary-600 to-indigo-600 transition-all duration-300 group-hover:w-full" />
                                        </span>
                                    </Link>
                                )
                            ))}
                            <Link
                                href="/resume"
                                aria-label="Download Resume"
                                className="ml-1 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 px-4 py-2 text-white shadow hover:shadow-md transition">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Download
                            </Link>
                        </nav>

                        {/* mobile toggle */}
                        <button
                            aria-label="Toggle menu"
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/70 backdrop-blur text-slate-700 shadow-sm"
                            onClick={() => setMobileOpen((v) => !v)}>
                            <svg
                                className={`transition-transform duration-300 ${mobileOpen ? 'rotate-90' : ''}`}
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                {mobileOpen ? (
                                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                ) : (
                                    <>
                                        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </>
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* mobile panel */}
                    <div
                        className={`md:hidden mt-2 overflow-hidden rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-lg ring-1 ring-black/5 transition-[max-height,opacity] duration-300 ${mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                        onClick={() => setMobileOpen(false)}>
                        <div className="flex flex-col divide-y divide-slate-200/60">
                            <Link href="/resume" className="px-5 py-3 text-slate-700 hover:bg-white">Resume</Link>
                            <a href="https://github.com/Dilder601" target="_blank" rel="noreferrer noopener" className="px-5 py-3 text-slate-700 hover:bg-white">GitHub</a>
                            <a href="https://www.linkedin.com/in/dilder-orclapex/" target="_blank" rel="noreferrer noopener" className="px-5 py-3 text-slate-700 hover:bg-white">LinkedIn</a>
                            <Link href="/resume" className="px-5 py-3 font-medium text-primary-700 hover:bg-white">Download Resume</Link>
                        </div>
                    </div>
                </div>
            </header>

            <section className="mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-16 grid gap-12 md:grid-cols-2 items-center">
                {/* Left: Heading + CTA */}
                <div>
                    <p className="mb-2 text-sm tracking-widest text-primary-600 uppercase">Software Engineer</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                            Dilder Hossain
                        </span>
                    </h1>
                    <p className="mt-4 text-slate-600 max-w-xl">
                        Oracle APEX and PL/SQL developer focusing on scalable ERP modules, data-driven web apps, and
                        performance-tuned databases.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                            href="/resume"
                            aria-label="Download Resume"
                            className="btn-animated animate-breath inline-flex items-center rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 px-6 py-3 text-white shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5">
                            Download Resume
                        </Link>
                        <a
                            href="mailto:dilder.hossain.feni@gmail.com"
                            className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-slate-700 hover:bg-slate-50">
                            Contact Me
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="mt-6 flex items-center gap-4">
                        <a href="https://github.com/Dilder601" target="_blank" rel="noreferrer noopener" title="GitHub">
                            <Image src="/images/github.png" alt="GitHub" width={22} height={22} className="opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://www.linkedin.com/in/dilder-orclapex/" target="_blank" rel="noreferrer noopener" title="LinkedIn">
                            <Image src="/images/linkedin.png" alt="LinkedIn" width={22} height={22} className="opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://leetcode.com/DilderHossain/" target="_blank" rel="noreferrer noopener" title="LeetCode">
                            <Image src="/images/leetcode.svg" alt="LeetCode" width={22} height={22} className="opacity-80 hover:opacity-100" />
                        </a>
                    </div>

                    {/* quick skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {['Oracle APEX', 'PL/SQL', 'ERP Modules', 'REST/JSON'].map((t) => (
                            <span key={t} className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 shadow-sm">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: Avatar */}
                <div className="relative mx-auto h-60 w-60 md:h-[22rem] md:w-[22rem]">
                    <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary-200 to-indigo-200 blur-2xl" />
                    <div className="relative h-full w-full rounded-full ring-8 ring-white shadow-2xl">
                        <Image
                            src="/images/profile.png"
                            alt="Profile"
                            fill
                            className="object-cover rounded-full"
                            sizes="(max-width: 768px) 15rem, 22rem"
                        />
                    </div>
                </div>
            </section>

            {/* stats/footer strip */}
            <section className="mx-auto max-w-6xl px-6 md:px-10 pb-12">
                {/* gradient bordered, glassy pill */}
                <div className="rounded-2xl p-[1px] bg-gradient-to-r from-primary-200 via-indigo-200 to-emerald-200 shadow-lg">
                    <div className="rounded-2xl bg-white/70 backdrop-blur-xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
                        {/* Item 1 */}
                        <div className="group flex items-center gap-3 px-5 py-4 md:py-5 hover:bg-white/60 transition rounded-t-2xl md:rounded-t-none">
                            <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
                                <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-primary-500"></span>
                                <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-primary-400 opacity-60 animate-ping"></span>
                            </span>
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-primary-50 text-primary-600 ring-1 ring-primary-200">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M10 4H6a2 2 0 00-2 2v12h2v-6h4v6h2V6a2 2 0 00-2-2zm8 4h-4a2 2 0 00-2 2v8h2v-4h4v4h2v-8a2 2 0 00-2-2zm-6 4v-2a2 2 0 012-2h4"/>
                                </svg>
                            </span>
                            <p className="text-sm text-slate-700">4+ years building APEX/PLSQL & ERP</p>
                        </div>
                        {/* Item 2 */}
                        <div className="group flex items-center gap-3 px-5 py-4 md:py-5 hover:bg-white/60 transition">
                            <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
                                <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-indigo-500"></span>
                                <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-indigo-400 opacity-60 animate-ping"></span>
                            </span>
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                    <path d="M22 12a10 10 0 1 1-10-10"/>
                                    <path d="M22 12A10 10 0 0 0 12 2v10z" fill="currentColor"/>
                                </svg>
                            </span>
                            <p className="text-sm text-slate-700">Performance tuning & reporting expertise</p>
                        </div>
                        {/* Item 3 */}
                        <div className="group flex items-center gap-3 px-5 py-4 md:py-5 hover:bg-white/60 transition rounded-b-2xl md:rounded-b-none">
                            <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center">
                                <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500"></span>
                                <span className="absolute inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 opacity-60 animate-ping"></span>
                            </span>
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                    <path d="M20 6L9 17l-5-5"/>
                                </svg>
                            </span>
                            <p className="text-sm text-slate-700">Available for full‑time opportunities</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* animated waves */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10">
                <div className="relative h-32 md:h-48 overflow-hidden">
                    {/* back wave */}
                    <svg
                        className="absolute bottom-0 left-0 h-full w-[200%] animate-wave-slow will-change-transform"
                        viewBox="0 0 1800 240"
                        fill="none"
                        preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="waveGradBack" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.25" />
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
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
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
