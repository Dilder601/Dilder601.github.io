'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
    {
        quote: "Dilder's Oracle APEX work on our ERP system was outstanding. He built modules that handle thousands of concurrent transactions daily without breaking a sweat. His PL/SQL optimization reduced our reporting query times by over 60%.",
        name: 'Md. Zahirul Islam',
        role: 'Sr. Software Engineer',
        company: 'MononSoft Ltd. (JMI Group)',
        initials: 'ZI',
        color: 'from-indigo-500 to-violet-600',
    },
    {
        quote: "Working with Dilder on the Pharmacy Management System was a pleasure. He understood the complex healthcare domain requirements quickly and delivered a clean, intuitive APEX interface that our pharmacy staff adopted with minimal training.",
        name: 'Nafis Rahman',
        role: 'Project Manager',
        company: 'JMI Hospital Requisite',
        initials: 'NR',
        color: 'from-emerald-500 to-teal-600',
    },
    {
        quote: "Dilder is one of the most disciplined developers I have collaborated with. His attention to database schema integrity and audit trail design in the QC Alert System set a standard for the entire team.",
        name: 'Ashraful Karim',
        role: 'Team Lead — Operations IT',
        company: 'Nipro JMI Pharma',
        initials: 'AK',
        color: 'from-sky-500 to-blue-600',
    },
];

export default function Testimonials() {
    const ref = useScrollReveal();

    return (
        <section
            id="testimonials"
            ref={ref as React.RefObject<HTMLElement>}
            className="relative px-5 py-20 md:px-10 md:py-28 overflow-hidden bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-200/60 dark:border-slate-800/80"
        >
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute bottom-0 right-0 h-[40vh] w-[50vw] rounded-full bg-indigo-500/5 blur-[80px]" />
                <div className="absolute top-0 left-0 h-[30vh] w-[40vw] rounded-full bg-violet-500/5 blur-[80px]" />
            </div>

            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center reveal">
                    <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        What Colleagues Say
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300">
                        Feedback from engineers and managers I have worked closely with across enterprise ERP projects.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div
                            key={t.name}
                            className={`testimonial-quote reveal reveal-delay-${i + 1} relative overflow-hidden rounded-[28px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-8 pt-10 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600/60 flex flex-col justify-between`}
                        >
                            <p className="relative z-10 text-sm leading-7 text-slate-700 dark:text-slate-200 italic mb-6">
                                {t.quote}
                            </p>

                            <div className="flex items-center gap-3">
                                {/* Avatar */}
                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-white text-xs font-bold shadow`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-slate-950 dark:text-white">{t.name}</p>
                                    <p className="text-[11px] text-slate-600 dark:text-slate-300 font-medium">{t.role} · {t.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
