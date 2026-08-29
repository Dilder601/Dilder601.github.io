import Link from 'next/link';

export default function NowPage() {
    return (
        <main className="relative min-h-screen bg-white dark:bg-slate-950 px-5 py-24 md:px-10 selection:bg-indigo-500/30">
            {/* Ambient Background blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] h-[50vh] w-[50vw] rounded-full bg-emerald-500/8 mix-blend-multiply blur-[120px] dark:bg-emerald-500/15 dark:mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] h-[50vh] w-[50vw] rounded-full bg-indigo-500/8 mix-blend-multiply blur-[100px] dark:bg-indigo-500/12 dark:mix-blend-screen" />
            </div>

            <div className="mx-auto max-w-3xl">
                {/* Back link */}
                <Link
                    href="/"
                    className="mb-10 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to portfolio
                </Link>

                {/* Header */}
                <header className="mb-12 border-b border-slate-200/80 dark:border-slate-800 pb-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-4">
                        <span className="relative flex size-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
                        </span>
                        Live Status
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        What I&apos;m Doing Now
                    </h1>
                    <p className="mt-3 text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-mono">
                        Last updated: August 2026 · Dhaka, Bangladesh
                    </p>
                </header>

                {/* Content Sections */}
                <div className="space-y-10 text-slate-700 dark:text-slate-300">
                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
                            <span>💼</span> Core Work &amp; Engineering
                        </h2>
                        <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                            Leading database architecture and Oracle APEX modules for enterprise pharmaceutical supply chains at <strong>MononSoft Ltd. (JMI Group)</strong>. Current focus areas include migrating legacy batch dispatching systems to real-time partitioned query execution engines handling 4,000+ daily operational transactions.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
                            <span>🚀</span> Side Projects &amp; Tooling
                        </h2>
                        <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                            Refining reusable PL/SQL utility packages for automated JSON payload parsing, multi-tenant auditing triggers, and dynamic interactive reporting modules for Oracle APEX.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
                            <span>📚</span> Continuous Learning
                        </h2>
                        <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                            Deepening advanced Oracle 23ai AI Vector Search integration with PL/SQL, exploring microservice bridges between Node.js/TypeScript and Oracle Database, and solving algorithmic challenges on LeetCode.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
                            <span>🎯</span> 2026 Milestones
                        </h2>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                            <li className="flex items-center gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                Expanded Oracle APEX Cloud Developer Certified solutions across sister concerns
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="text-emerald-500 font-bold">✓</span>
                                Optimized critical ERP reporting queries from 30s to under 0.3s
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="text-indigo-500 font-bold">→</span>
                                Authoring technical deep dives on PL/SQL scalability and enterprise database modeling
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Footer Note */}
                <footer className="mt-16 border-t border-slate-200/80 dark:border-slate-800 pt-8 text-xs text-slate-500 dark:text-slate-400">
                    <p>
                        This is a{' '}
                        <a
                            href="https://nownownow.com/about"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-slate-900 dark:hover:text-white"
                        >
                            /now page
                        </a>
                        . If you have your own website, you should make one too!
                    </p>
                </footer>
            </div>
        </main>
    );
}
