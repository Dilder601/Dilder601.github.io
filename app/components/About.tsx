'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface OrbitalCardProps {
    dotColor: string;
    title: string;
    description: string;
    accentColor: string;
    className?: string;
}

const OrbitalCard = ({ dotColor, title, description, accentColor, className = '' }: OrbitalCardProps) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group relative overflow-hidden rounded-[26px] border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/90 p-7 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-0.5 ${className}`}
        >
            {isHovered && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(360px circle at ${coords.x}px ${coords.y}px, ${accentColor}, transparent 75%)`
                    }}
                />
            )}

            <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${dotColor} shadow-[0_0_8px_currentColor]`} />
                    <h3 className="font-heading text-lg font-bold tracking-tight text-slate-950 dark:text-white">
                        {title}
                    </h3>
                </div>
                <p className="text-xs sm:text-[13px] leading-6 text-slate-600 dark:text-slate-300 font-normal">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default function About() {
    const ref = useScrollReveal();

    const achievements = [
        {
            value: '60% Faster',
            label: 'Report Generation',
            desc: 'Optimized PL/SQL procedures & materialized views, slashing enterprise report runtimes from 12m to < 5m.',
            icon: (
                <svg className="size-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            value: '200+ Hours',
            label: 'Monthly Automated',
            desc: 'Engineered automated PL/SQL workflows replacing manual reconciliation across Finance and HR modules.',
            icon: (
                <svg className="size-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            value: '6 Enterprise',
            label: 'Systems Delivered',
            desc: 'Architected and deployed 6 full-scale applications supporting 4,000+ active users from design to production.',
            icon: (
                <svg className="size-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            value: '99.9%',
            label: 'Database Uptime',
            desc: 'Maintained near-perfect uptime during mission-critical migrations from legacy systems to Oracle 19c.',
            icon: (
                <svg className="size-5 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    return (
        <section id="about" ref={ref as React.RefObject<HTMLElement>} className="relative px-5 py-20 md:px-10 md:py-28 overflow-hidden border-t border-slate-200/60 dark:border-slate-800/80 bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-950/20">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-14 sm:mb-20 text-center reveal">
                    <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        About Me
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300">
                        How I think about system design, what I build with, and the problems I like solving.
                    </p>
                </div>

                {/* ════════════════ 4-CARD ORBITAL CONSTELLATION ════════════════ */}
                <div className="relative mb-24 reveal reveal-delay-1 max-w-5xl mx-auto">
                    {/* Radial SVG Connector Lines for Desktop (Hidden on mobile, visible on lg) */}
                    <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                        <svg className="w-full h-full" viewBox="0 0 1000 560" fill="none" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="line-tl" x1="500" y1="280" x2="350" y2="130" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                                </linearGradient>
                                <linearGradient id="line-tr" x1="500" y1="280" x2="650" y2="130" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
                                </linearGradient>
                                <linearGradient id="line-bl" x1="500" y1="280" x2="350" y2="430" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
                                </linearGradient>
                                <linearGradient id="line-br" x1="500" y1="280" x2="650" y2="430" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            {/* Lines from center avatar (500, 280) to 4 quadrant card anchor points */}
                            <line x1="500" y1="280" x2="340" y2="130" stroke="url(#line-tl)" strokeWidth="2.5" strokeDasharray="4 4" />
                            <line x1="500" y1="280" x2="660" y2="130" stroke="url(#line-tr)" strokeWidth="2.5" strokeDasharray="4 4" />
                            <line x1="500" y1="280" x2="340" y2="430" stroke="url(#line-bl)" strokeWidth="2.5" strokeDasharray="4 4" />
                            <line x1="500" y1="280" x2="660" y2="430" stroke="url(#line-br)" strokeWidth="2.5" strokeDasharray="4 4" />
                        </svg>
                    </div>

                    {/* Responsive Grid Structure */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-24 lg:gap-x-28 items-center relative z-10">
                        {/* Top Left: System Design */}
                        <div className="lg:pr-4">
                            <OrbitalCard
                                dotColor="bg-blue-500"
                                title="System design"
                                description="I draw the boundaries first: schemas, queues, and service edges that keep a feature testable and the next change cheap."
                                accentColor="rgba(59, 130, 246, 0.18)"
                            />
                        </div>

                        {/* Top Right: Problem Solving */}
                        <div className="lg:pl-4">
                            <OrbitalCard
                                dotColor="bg-emerald-500"
                                title="Problem solving"
                                description="Finding the query that got slow as the data grew, and the index, cache, or rewrite that puts it back under budget."
                                accentColor="rgba(16, 185, 129, 0.18)"
                            />
                        </div>

                        {/* Center Profile Avatar (Desktop: Absolute Center; Mobile: Flow between rows or prominent) */}
                        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex justify-center items-center my-4 lg:my-0 z-20">
                            <div className="relative group">
                                {/* Multi-color Rainbow Aurora Glow Behind Avatar */}
                                <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 via-indigo-500 to-emerald-400 opacity-70 dark:opacity-80 blur-xl group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 animate-pulse-slow" />

                                {/* Avatar Ring Container */}
                                <div className="relative size-32 sm:size-40 lg:size-44 rounded-full p-1.5 bg-gradient-to-tr from-amber-400 via-rose-500 via-indigo-500 to-emerald-400 shadow-2xl">
                                    <div className="size-full rounded-full overflow-hidden border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 relative">
                                        <Image
                                            src="/images/resume-profile.jpg"
                                            alt="Dilder Hossain"
                                            fill
                                            className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
                                            sizes="(min-width: 1024px) 180px, 140px"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Left: Now */}
                        <div className="lg:pr-4">
                            <OrbitalCard
                                dotColor="bg-amber-500"
                                title="Now"
                                description="Exploring AI-assisted engineering and agent tooling, and what they change about how software actually gets written."
                                accentColor="rgba(245, 158, 11, 0.18)"
                            />
                        </div>

                        {/* Bottom Right: The stack */}
                        <div className="lg:pl-4">
                            <OrbitalCard
                                dotColor="bg-rose-500"
                                title="The stack"
                                description="5+ years in Oracle APEX, PL/SQL, SQL Tuning, and ORDS — plus PostgreSQL, MySQL, and Docker carrying enterprise systems to production."
                                accentColor="rgba(244, 63, 94, 0.18)"
                            />
                        </div>
                    </div>
                </div>

                {/* ════════════════ KEY ACHIEVEMENTS (from PDF) ════════════════ */}
                <div className="mb-20 reveal reveal-delay-2">
                    <div className="text-center mb-8">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-1 rounded-full border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs">
                            Key Achievements
                        </span>
                        <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                            Measurable Enterprise Impact
                        </h3>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {achievements.map((item) => (
                            <div
                                key={item.label}
                                className="group relative rounded-[24px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-6 backdrop-blur shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-600/60 hover:-translate-y-1"
                            >
                                <div className="size-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <div className="text-2xl font-black tracking-tight text-slate-950 dark:text-white mb-1 font-heading">
                                    {item.value}
                                </div>
                                <div className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-2">
                                    {item.label}
                                </div>
                                <p className="text-xs leading-5 text-slate-600 dark:text-slate-400">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ════════════════ BIOGRAPHY & CREDENTIALS ════════════════ */}
                <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] reveal reveal-delay-3">
                    {/* Bio Box */}
                    <div className="rounded-[30px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-8 backdrop-blur shadow-sm flex flex-col justify-between">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-2 mb-4 block">
                                Professional Background
                            </span>
                            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                                <p>
                                    I am an <strong className="font-bold text-slate-950 dark:text-white">Oracle APEX &amp; ERP Developer</strong> with <strong>5+ years</strong> of progressive experience architecting scalable ERP systems, building RESTful API integrations, and leading database performance tuning initiatives.
                                </p>
                                <p>
                                    At <strong className="font-bold text-slate-950 dark:text-white">MononSoft Ltd.</strong> (a sister concern of JMI Group), I have delivered mission-critical ERP solutions for top pharmaceutical and healthcare organizations, including <span className="font-semibold text-emerald-700 dark:text-emerald-400">Nipro JMI Pharma, Unido Pharma, and Bangladesh Eye Hospital</span>, supporting over <strong>4,000+ concurrent daily users</strong> across 300+ database tables.
                                </p>
                                <p>
                                    I specialize in translating complex multi-division business requirements into robust, high-performance applications with sub-second execution speeds, automated workflows, and high database resilience.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap gap-4 items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Open to new engineering challenges</span>
                            </div>
                            <a
                                href="/resume"
                                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                            >
                                View Interactive CV &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Quick Timeline Details */}
                    <div className="rounded-[30px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-8 backdrop-blur shadow-sm space-y-6">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                                Experience
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-950 dark:text-white">Software Engineer</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">MononSoft Ltd. (JMI Group) &bull; Feb 2021 &ndash; Present</p>
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Enterprise ERP solutions for 4,000+ daily active users across JMI concerns.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
                                Education &amp; Training
                            </h3>
                            <ul className="space-y-3.5">
                                <li className="flex items-start gap-4">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-950 dark:text-white">Diploma in Database Design &amp; Development (DDD)</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">IsDB-BISEW IT Scholarship &bull; 2020</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-500 shadow-[0_0_8px_#8b5cf6]" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-950 dark:text-white">Bachelor of Business Administration (BBA)</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">Feni Govt. College &bull; CGPA: 3.17 &bull; 2017</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
                                    <div>
                                        <p className="text-sm font-bold text-slate-950 dark:text-white">Specialized Technical Training</p>
                                        <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">CSE Fundamentals (Phitron) &bull; Oracle SQL Tuning (Udemy)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
