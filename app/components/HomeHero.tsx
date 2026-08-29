'use client';

import Image from 'next/image';

const highlights = [
    { value: '5+', label: 'Years Experience' },
    { value: '15+', label: 'Enterprise Projects' },
    { value: '4000+', label: 'Concurrent Users' }
];

const socials = [
    {
        href: 'https://github.com/Dilder601',
        label: 'GitHub',
        icon: (
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
        )
    },
    {
        href: 'https://www.linkedin.com/in/dilder-orclapex/',
        label: 'LinkedIn',
        icon: (
            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
        )
    },
    {
        href: 'https://leetcode.com/DilderHossain/',
        label: 'LeetCode',
        icon: (
            <svg className="size-5" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.469 23.907l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052.708-.713.735-1.848.047-2.536l-3.473-3.511c-.901-.891-2.032-1.505-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zM27.749 17.349h-13.531c-.932 0-1.692.801-1.692 1.791 0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797 0-.989-.76-1.791-1.693-1.791z"/>
            </svg>
        )
    }
];

const techPills = [
    { name: 'Oracle Database 19c', color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60' },
    { name: 'Oracle APEX Cloud', color: 'bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-800/60' },
    { name: 'PL/SQL Architecture', color: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-200/80 dark:border-rose-800/60' },
    { name: 'ORDS REST APIs', color: 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/60' },
    { name: 'Query Tuning (AWR/ASH)', color: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/60' },
];

export default function HomeHero() {
    return (
        <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-28 pb-16">
            {/* ── National Dashboard Inspired Emerald & Rose Ambient Mesh ── */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
                {/* Lush Emerald Green Top-Right Aurora */}
                <div className="animate-pulse-slow absolute top-[-15%] right-[-10%] h-[75vh] w-[75vw] rounded-full bg-emerald-400/20 mix-blend-multiply blur-[130px] dark:bg-emerald-500/20 dark:mix-blend-screen" />
                {/* Soft Blush Rose / Coral Bottom-Left Aurora */}
                <div className="animate-pulse-slow absolute bottom-[-15%] left-[-10%] h-[65vh] w-[65vw] rounded-full bg-rose-400/15 mix-blend-multiply blur-[120px] [animation-delay:2s] dark:bg-rose-500/15 dark:mix-blend-screen" />
                {/* Mint-Teal Center Glow */}
                <div className="animate-pulse-slow absolute top-[25%] left-[20%] h-[55vh] w-[55vw] rounded-full bg-teal-400/15 mix-blend-multiply blur-[110px] [animation-delay:4s] dark:bg-teal-500/15 dark:mix-blend-screen" />
                {/* Warm Amber Accent */}
                <div className="animate-pulse-slow absolute bottom-[20%] right-[20%] h-[45vh] w-[45vw] rounded-full bg-amber-300/10 mix-blend-multiply blur-[100px] [animation-delay:6s] dark:bg-amber-500/10 dark:mix-blend-screen" />
            </div>

            <div className="container mx-auto max-w-6xl">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
                    {/* Left: Text Content */}
                    <div className="flex flex-col items-start text-left">
                        {/* Availability badge with emerald glow */}
                        <p className="animate-fade-in-up border border-emerald-200/80 dark:border-emerald-800/60 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 mb-8 inline-flex items-center gap-2.5 rounded-full py-1.5 pr-4 pl-3 text-sm font-semibold backdrop-blur-md shadow-xs">
                            <span aria-hidden="true" className="relative grid size-2 place-items-center">
                                <span className="absolute size-2 rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
                                <span className="size-2 rounded-full bg-emerald-500" />
                            </span>
                            Available for exciting opportunities
                        </p>

                        {/* Headline with dashboard pen-mark highlighted words */}
                        <h1 className="animate-fade-in-up font-sans text-[2.6rem] leading-[1.08] tracking-tight font-bold text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                            Hi, I&apos;m{' '}
                            <span className="text-slate-900 dark:text-white">Dilder Hossain</span>
                            <br className="hidden lg:inline" />
                            {' '}I Build{' '}
                            <span className="hero-mark" style={{ '--mark': '#a7f3d0' } as React.CSSProperties}>
                                Reliable
                            </span>
                            <br className="hidden lg:inline" />
                            {' '}Systems That{' '}
                            <span className="hero-mark" style={{ '--mark': '#fecdd3' } as React.CSSProperties}>
                                Empower
                            </span>
                            <br className="hidden lg:inline" />
                            {' '}Real Operations
                        </h1>

                        {/* Lede */}
                        <p className="animate-fade-in-up mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
                            Oracle APEX &amp; PL/SQL Engineer at MononSoft (JMI Group). I design ERP
                            systems for scale with Oracle Database, APEX, and REST APIs — and solve the
                            performance bottlenecks that show up once real users arrive.
                        </p>

                        {/* CTA Buttons with Emerald Primary Accent */}
                        <div className="animate-fade-in-up mt-10 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center">
                            <a
                                href="#contact"
                                className="group inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white w-full sm:w-auto shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 hover:-translate-y-0.5"
                            >
                                Get in touch
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </a>
                            <a
                                href="/articles"
                                className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-all border border-slate-200/80 dark:border-slate-700/60 hover:border-emerald-300 dark:hover:border-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30 text-slate-700 dark:text-slate-300 w-full sm:w-auto backdrop-blur-sm"
                            >
                                Read the writing
                            </a>
                        </div>

                        {/* Stats row */}
                        <div className="animate-fade-in-up mt-12">
                            <dl className="flex flex-wrap gap-x-8 gap-y-4">
                                {highlights.map((h) => (
                                    <div key={h.label}>
                                        <dt className="text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                            {h.label}
                                        </dt>
                                        <dd className="mt-1 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                                            {h.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            {/* Divider + Social icons */}
                            <ul className="mt-5 flex flex-wrap items-center gap-5 border-t border-slate-200/70 dark:border-slate-700/40 pt-5">
                                {socials.map((s) => (
                                    <li key={s.label}>
                                        <a
                                            href={s.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={s.label}
                                            className="block rounded-sm text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                        >
                                            {s.icon}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right: Modern Executive Visual Stage with Non-Overlapping Badges */}
                    <div className="animate-fade-in-up relative mx-auto w-full max-w-[22rem] sm:max-w-md lg:max-w-lg">
                        {/* Multi-layered Ambient Glow Backdrop */}
                        <div className="absolute -inset-4 sm:-inset-8 rounded-[48px] bg-gradient-to-tr from-emerald-500/25 via-teal-500/20 to-rose-400/20 blur-3xl opacity-75 dark:opacity-85 pointer-events-none -z-10 animate-pulse-slow" />
                        
                        {/* Decorative Rings */}
                        <div className="absolute inset-0 rounded-[40px] border border-emerald-200/40 dark:border-emerald-500/15 pointer-events-none -z-10 scale-105" />
                        <div className="absolute inset-0 rounded-[48px] border border-slate-200/30 dark:border-slate-800/40 pointer-events-none -z-10 scale-110" />

                        {/* Main Portrait Card Frame */}
                        <div className="group relative overflow-hidden rounded-[36px] sm:rounded-[40px] border-2 border-white/90 dark:border-slate-700/70 bg-gradient-to-b from-white/90 to-slate-50/90 dark:from-slate-900/90 dark:to-slate-950/90 p-3 sm:p-4 shadow-[0_25px_60px_-15px_rgba(5,150,105,0.15)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-500 hover:shadow-2xl">
                            {/* Inner Photo Container */}
                            <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-[28px] sm:rounded-[32px] bg-slate-100 dark:bg-slate-800">
                                <Image
                                    src="/images/resume-profile.jpg"
                                    alt="Dilder Hossain portrait"
                                    fill
                                    className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                                    sizes="(min-width: 1024px) 460px, 320px"
                                    priority
                                />

                                {/* Subtle Bottom Card Scrim & Identity Badge */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-5 pt-12 text-white">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2 font-heading">
                                                Dilder Hossain
                                                <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                                            </p>
                                            <p className="text-xs text-slate-300 font-medium mt-0.5">
                                                Oracle APEX &amp; PL/SQL Engineer
                                            </p>
                                        </div>
                                        <div className="rounded-full bg-emerald-500/20 backdrop-blur-md px-3 py-1 text-[11px] font-semibold border border-emerald-400/30 text-emerald-200">
                                            MononSoft
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Verified Credential Badge (Cleanly Positioned Above Top-Right) ── */}
                        <div className="absolute -top-4 -right-1 sm:-top-5 sm:-right-4 z-20 rounded-2xl border border-white/90 dark:border-slate-700/80 bg-white/95 dark:bg-slate-900/95 p-2.5 sm:p-3.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <div className="flex size-9 sm:size-10 items-center justify-center rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800/60 text-red-600 dark:text-red-400 shrink-0">
                                    <svg viewBox="0 0 80 80" className="size-5 sm:size-6" fill="none">
                                        <circle cx="40" cy="40" r="38" fill="#FF0000" fillOpacity="0.1" stroke="#FF0000" strokeWidth="2" strokeOpacity="0.5" />
                                        <text x="40" y="38" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#CC0000" className="dark:fill-red-400">ORCL</text>
                                        <text x="40" y="54" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#CC0000" className="dark:fill-red-400">APEX</text>
                                    </svg>
                                </div>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <p className="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap">Oracle Certified</p>
                                        <svg className="size-3.5 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">Cloud Developer (1Z0-771)</p>
                                </div>
                            </div>
                        </div>

                        {/* Cleanly Spaced Tech Stack Pills (100% Unobstructed & Visible) */}
                        <div className="mt-6 sm:mt-7 flex flex-wrap justify-center gap-2 px-1">
                            {techPills.map((pill) => (
                                <span
                                    key={pill.name}
                                    className={`rounded-full border px-3.5 py-1 text-[11px] font-semibold backdrop-blur-md shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${pill.color}`}
                                >
                                    {pill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 dark:text-slate-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors pointer-events-none sm:pointer-events-auto">
                <a href="#about" aria-label="Scroll to About Section" className="flex flex-col items-center">
                    <span className="text-[9px] font-bold tracking-[0.3em] uppercase mb-1">Scroll</span>
                    <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-6l-7 7-7-7" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
