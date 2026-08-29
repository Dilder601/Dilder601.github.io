'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
    {
        name: 'Syed Ariful Islam',
        role: 'Chief Technology Officer (CTO)',
        module: 'Overall ERP Architecture & Database',
        company: 'MononSoft Ltd. (JMI Group)',
        initials: 'AI',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/80',
        color: 'from-emerald-600 to-teal-700',
        quote: "Dilder is a standout database engineer and Oracle APEX developer. Across our entire ERP ecosystem serving 4,000+ concurrent enterprise users, his architectural discipline, schema designs, and advanced PL/SQL tuning have kept our mission-critical systems exceptionally fast and stable.",
    },
    {
        name: 'Sere Buland Khan',
        role: 'Project Manager',
        module: 'MM (Materials Management) & HRM Modules',
        company: 'MononSoft Ltd. (JMI Group)',
        initials: 'SK',
        badgeColor: 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/80',
        color: 'from-blue-600 to-indigo-700',
        quote: "Working with Dilder on the MM and HRM modules was a great experience. He automated intricate multi-warehouse inventory valuation and complex payroll algorithms with high precision. His procedural code cut month-end reconciliation time dramatically.",
    },
    {
        name: 'Ferdous Ahmed',
        role: 'Project Manager',
        module: 'PP (Production Planning) Module',
        company: 'MononSoft Ltd. (JMI Group)',
        initials: 'FA',
        badgeColor: 'bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800/80',
        color: 'from-purple-600 to-violet-700',
        quote: "Dilder translated our manufacturing requirements into intuitive Production Planning tools. From multi-level Bill of Materials (BOM) to live shop-floor tracking dashboards, his APEX implementations gave plant managers real-time visibility into active production runs.",
    },
    {
        name: 'Wahiduzzaman',
        role: 'Project Manager',
        module: 'SD (Sales & Distribution) Module',
        company: 'MononSoft Ltd. (JMI Group)',
        initials: 'WZ',
        badgeColor: 'bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800/80',
        color: 'from-teal-600 to-emerald-700',
        quote: "Dilder's engineering in the Sales & Distribution module was critical to our nationwide rollout. He built high-throughput order-to-cash pipelines and automated multi-branch invoicing that handle heavy daily commercial transaction loads without latency.",
    },
    {
        name: 'Sumar Rajbhar',
        role: 'Project Manager',
        module: 'SD (Sales & Distribution) Module',
        company: 'MononSoft Ltd. (JMI Group)',
        initials: 'SR',
        badgeColor: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/80',
        color: 'from-amber-600 to-orange-700',
        quote: "Dilder's technical depth in Oracle ORDS REST APIs and dynamic pricing engines solved complex distribution bottlenecks. He is reliable, proactive in solving edge cases, and always delivers secure, user-friendly enterprise interfaces.",
    },
];

export default function Testimonials() {
    const ref = useScrollReveal();

    return (
        <section
            id="testimonials"
            ref={ref as React.RefObject<HTMLElement>}
            className="relative px-5 py-20 md:px-10 md:py-28 overflow-hidden bg-gradient-to-b from-transparent via-slate-50/40 to-transparent dark:via-slate-950/30 border-t border-slate-200/60 dark:border-slate-800/80"
        >
            {/* Soft Ambient Aurora Mesh Glow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/3 right-10 h-72 w-96 rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/15" />
                <div className="absolute bottom-10 left-10 h-72 w-96 rounded-full bg-rose-400/10 blur-[120px] dark:bg-rose-500/10" />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-14 sm:mb-18 text-center reveal">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-1 rounded-full border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs">
                        Recommendations
                    </span>
                    <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        What Leadership &amp; Colleagues Say
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300">
                        Direct endorsements from the CTO and Project Managers I collaborate with across enterprise ERP modules.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className={`testimonial-quote reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-[30px] border border-slate-200/80 dark:border-slate-800 bg-white/85 dark:bg-slate-900/85 p-7 backdrop-blur-md shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-700/60 flex flex-col justify-between`}
                        >
                            {/* Top row: Module Tag + 5 Stars */}
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className={`inline-block rounded-full border px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${t.badgeColor}`}>
                                        {t.module}
                                    </span>
                                    <div className="flex items-center text-amber-400 gap-0.5 text-xs">
                                        {'★'.repeat(5)}
                                    </div>
                                </div>

                                {/* Quote */}
                                <p className="relative z-10 text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-200 italic mb-6">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                            </div>

                            {/* Author Card */}
                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-3.5">
                                {/* Avatar */}
                                <div className={`flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${t.color} text-white text-xs font-bold shadow-md`}>
                                    {t.initials}
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-1.5">
                                        <p className="text-sm font-bold text-slate-950 dark:text-white truncate font-heading">
                                            {t.name}
                                        </p>
                                        <svg className="size-3.5 shrink-0 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold truncate">
                                        {t.role}
                                    </p>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                                        {t.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
