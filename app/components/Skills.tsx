'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

const skills = [
    {
        category: 'Oracle Database & Backend Architecture',
        description: 'Where relational data models, PL/SQL packages, and transactional performance reside.',
        color: 'from-indigo-500/20 to-blue-500/10',
        accent: 'bg-indigo-500',
        items: [
            { name: 'Oracle Database (11g - 23ai / 26AI)', level: 'Expert', pct: 96 },
            { name: 'PL/SQL Packages, Procedures & Triggers', level: 'Expert', pct: 95 },
            { name: 'Query Tuning, AWR/ASH & Partitioning', level: 'Expert', pct: 92 },
            { name: 'Bulk Operations (FORALL / BULK COLLECT)', level: 'Expert', pct: 90 },
            { name: 'PostgreSQL & MySQL Engineering', level: 'Proficient', pct: 82 },
        ]
    },
    {
        category: 'Oracle APEX & Modern Interfaces',
        description: 'Building responsive enterprise applications, Interactive Grids, and reporting dashboards.',
        color: 'from-violet-500/20 to-purple-500/10',
        accent: 'bg-violet-500',
        items: [
            { name: 'Oracle APEX Cloud & On-Prem (18.x - 24.x)', level: 'Expert', pct: 95 },
            { name: 'ORDS REST Services & JSON/XML APIs', level: 'Expert', pct: 92 },
            { name: 'JavaScript & Dynamic Actions', level: 'Proficient', pct: 85 },
            { name: 'Oracle Forms & Reports Migration', level: 'Proficient', pct: 82 },
            { name: 'HTML5, CSS3 & Responsive UI', level: 'Proficient', pct: 80 },
        ]
    },
    {
        category: 'Enterprise ERP Modules & DevOps',
        description: 'End-to-end domain delivery, version control, and multi-facility deployment pipelines.',
        color: 'from-emerald-500/20 to-teal-500/10',
        accent: 'bg-emerald-500',
        items: [
            { name: 'Finance, HR, Payroll & Inventory ERP', level: 'Expert', pct: 94 },
            { name: 'Procurement, Sales & POS Systems', level: 'Expert', pct: 92 },
            { name: 'Git, GitHub, GitLab & Branching Strategies', level: 'Proficient', pct: 88 },
            { name: 'Docker Containers & CI/CD Pipelines', level: 'Proficient', pct: 80 },
            { name: 'Jira, Confluence & Agile/Scrum Workflows', level: 'Proficient', pct: 85 },
        ]
    }
];

const levelColor: Record<string, string> = {
    Expert:     'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-900/60',
    Proficient: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900/60',
    Familiar:   'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-100 dark:border-amber-900/60',
};

const barColor: Record<string, string> = {
    Expert:     'bg-indigo-500',
    Proficient: 'bg-emerald-500',
    Familiar:   'bg-amber-500',
};

export default function Skills() {
    const ref = useScrollReveal();
    return (
        <section
            id="skills"
            ref={ref as React.RefObject<HTMLElement>}
            className="relative px-5 py-20 md:px-10 md:py-28 overflow-hidden bg-slate-50/60 dark:bg-slate-950/40 border-t border-slate-200/60 dark:border-slate-800/80"
        >
            {/* Background grid */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(99,102,241,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />

            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center reveal">
                    <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        Skills &amp; Expertise
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300">
                        The tech stack and domain expertise I reach for day-to-day, structured from databases to interfaces.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {skills.map((group, gi) => (
                        <div
                            key={group.category}
                            className={`reveal reveal-delay-${gi + 1} rounded-[30px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-6 backdrop-blur shadow-sm flex flex-col hover:border-indigo-300 dark:hover:border-indigo-600/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`}
                        >
                            {/* Category header */}
                            <div className={`mb-5 rounded-2xl bg-gradient-to-br ${group.color} p-4`}>
                                <h3 className="font-heading text-base font-bold text-slate-950 dark:text-white">
                                    {group.category}
                                </h3>
                                <p className="mt-1 text-xs leading-5 text-slate-650 dark:text-slate-300">
                                    {group.description}
                                </p>
                            </div>

                            {/* Skill bars */}
                            <div className="flex flex-col gap-4">
                                {group.items.map((skill) => (
                                    <div key={skill.name}>
                                        <div className="mb-1.5 flex items-center justify-between gap-2">
                                            <span className="text-[12px] font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                                                {skill.name}
                                            </span>
                                            <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${levelColor[skill.level]}`}>
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                                            <div
                                                className={`skill-bar-fill h-full rounded-full ${barColor[skill.level]}`}
                                                style={{ '--pct': `${skill.pct}%`, animationDelay: `${gi * 0.1 + 0.1}s` } as React.CSSProperties}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
