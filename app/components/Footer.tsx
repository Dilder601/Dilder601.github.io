'use client';

import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <footer className="relative bg-slate-50/80 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 print:hidden overflow-hidden">
            {/* Soft Ambient Aurora Mesh Glow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -bottom-24 left-1/3 h-64 w-96 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/15" />
                <div className="absolute -bottom-20 right-1/4 h-56 w-80 rounded-full bg-rose-400/10 blur-3xl dark:bg-rose-500/10" />
            </div>

            <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 sm:px-8 lg:pt-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Brand Column (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <span className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                Dilder Hossain
                            </span>
                            <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                        </Link>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-md">
                            Oracle APEX Cloud Developer Certified &amp; PL/SQL Engineer at MononSoft (JMI Group). Designing high-concurrency ERP architectures, ORDS REST APIs, and database solutions serving 4,000+ active enterprise users.
                        </p>
                        <div className="pt-2 flex items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 px-3 py-1 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Available for New Opportunities
                            </span>
                        </div>
                    </div>

                    {/* Navigation Column (2 cols) */}
                    <div className="lg:col-span-2 space-y-3">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-950 dark:text-white">
                            Navigation
                        </p>
                        <ul className="space-y-2 text-xs font-medium">
                            <li>
                                <a href="#about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About Me</a>
                            </li>
                            <li>
                                <a href="#skills" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Technical Skills</a>
                            </li>
                            <li>
                                <a href="#certifications" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Certifications</a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Enterprise Projects</a>
                            </li>
                            <li>
                                <Link href="/articles" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Technical Writing</Link>
                            </li>
                            <li>
                                <Link href="/now" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">What I&apos;m Doing Now</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Credentials Column (2 cols) */}
                    <div className="lg:col-span-2 space-y-3">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-950 dark:text-white">
                            Credentials
                        </p>
                        <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
                            <li>Oracle APEX Certified (1Z0-771)</li>
                            <li>SQL Advanced (HackerRank)</li>
                            <li>IsDB-BISEW Diploma (DDD)</li>
                            <li>Udemy SQL Performance Masterclass</li>
                            <li>Bachelor of Business Admin (BBA)</li>
                        </ul>
                    </div>

                    {/* Connect & Resume Column (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-slate-950 dark:text-white">
                            Connect
                        </p>
                        <div className="flex flex-col gap-2 text-xs font-medium">
                            <a
                                href="https://www.linkedin.com/in/dilder-orclapex/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                <svg className="size-4 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                                <span>LinkedIn / dilder-orclapex</span>
                            </a>
                            <a
                                href="https://github.com/Dilder601"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                <svg className="size-4 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                                <span>GitHub / Dilder601</span>
                            </a>
                            <a
                                href="mailto:dilder.hossain.feni@gmail.com"
                                className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                <span className="truncate">dilder.hossain.feni@gmail.com</span>
                            </a>
                        </div>
                        <div className="pt-1">
                            <Link
                                href="/resume"
                                className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-950 px-4 py-2 text-xs font-bold transition-all duration-200 shadow-sm"
                            >
                                View Interactive CV &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Divider */}
                <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                    <p className="font-medium text-slate-500 dark:text-slate-400 text-center sm:text-left">
                        &copy; {currentYear} Dilder Hossain. Designed &amp; Engineered with Next.js &amp; Tailwind CSS.
                    </p>

                    {/* Back to top button */}
                    <button
                        type="button"
                        onClick={scrollToTop}
                        className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                        aria-label="Back to top"
                    >
                        <span>Back to top</span>
                        <span className="size-7 rounded-full bg-slate-200/70 dark:bg-slate-800 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-200">
                            <svg className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
