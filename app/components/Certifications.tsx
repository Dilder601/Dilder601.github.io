'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

const certifications = [
    {
        name: 'Oracle APEX Cloud Developer Certified Professional (1Z0-771)',
        issuer: 'Oracle University',
        date: 'Nov 2023',
        credentialId: '1Z0-771',
        description: 'Validates expertise in architecting, developing, deploying, and managing enterprise Oracle APEX applications on Oracle Cloud Infrastructure.',
        verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=',
        badge: (
            <svg viewBox="0 0 80 80" className="size-12" fill="none">
                <circle cx="40" cy="40" r="38" fill="#FF0000" fillOpacity="0.08" stroke="#FF0000" strokeWidth="2" strokeOpacity="0.4" />
                <circle cx="40" cy="40" r="28" fill="#FF0000" fillOpacity="0.06" stroke="#FF0000" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="40" y="38" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#CC0000" className="dark:fill-red-400">ORACLE</text>
                <text x="40" y="52" textAnchor="middle" fontSize="8" fontWeight="600" fill="#CC0000" className="dark:fill-red-400">CERTIFIED</text>
            </svg>
        ),
        color: 'from-red-500/10 to-orange-500/5',
        border: 'border-red-200/60 dark:border-red-900/40',
        accent: 'text-red-600 dark:text-red-400',
    },
    {
        name: 'SQL (Advanced) Skills Certification',
        issuer: 'HackerRank',
        date: '2023',
        credentialId: 'HR-SQL-ADV',
        description: 'Validates expert mastery in complex SQL queries, hierarchical data recursion, indexing, subquery optimization, and analytical functions.',
        verifyUrl: 'https://www.hackerrank.com/certificates',
        badge: (
            <svg viewBox="0 0 80 80" className="size-12" fill="none">
                <circle cx="40" cy="40" r="38" fill="#00EA64" fillOpacity="0.1" stroke="#00EA64" strokeWidth="2" strokeOpacity="0.4" />
                <circle cx="40" cy="40" r="28" fill="#00EA64" fillOpacity="0.07" stroke="#00EA64" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="40" y="38" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#008a38" className="dark:fill-emerald-400">HACKERRANK</text>
                <text x="40" y="52" textAnchor="middle" fontSize="8" fontWeight="600" fill="#008a38" className="dark:fill-emerald-400">SQL ADV</text>
            </svg>
        ),
        color: 'from-emerald-500/10 to-teal-500/5',
        border: 'border-emerald-200/60 dark:border-emerald-900/40',
        accent: 'text-emerald-600 dark:text-emerald-400',
    },
    {
        name: 'Data Analysis Professional Specialization',
        issuer: 'Coursera',
        date: '2023',
        credentialId: 'COURSERA-DA',
        description: 'Covers exploratory data analysis, statistical modeling, database aggregation metrics, and enterprise dashboard reporting.',
        verifyUrl: 'https://www.coursera.org',
        badge: (
            <svg viewBox="0 0 80 80" className="size-12" fill="none">
                <circle cx="40" cy="40" r="38" fill="#0056D2" fillOpacity="0.1" stroke="#0056D2" strokeWidth="2" strokeOpacity="0.4" />
                <circle cx="40" cy="40" r="28" fill="#0056D2" fillOpacity="0.07" stroke="#0056D2" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="40" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0056D2" className="dark:fill-blue-400">COURSERA</text>
                <text x="40" y="52" textAnchor="middle" fontSize="8" fontWeight="600" fill="#0056D2" className="dark:fill-blue-400">DATA ANALYSIS</text>
            </svg>
        ),
        color: 'from-blue-500/10 to-sky-500/5',
        border: 'border-blue-200/60 dark:border-blue-900/40',
        accent: 'text-blue-600 dark:text-blue-400',
    },
    {
        name: 'Oracle SQL Performance Tuning Masterclass',
        issuer: 'Udemy / Expert Instructors',
        date: '2022',
        credentialId: 'UDEMY-PERF-TUNE',
        description: 'Hands-on masterclass focusing on execution plan analysis, AWR/ASH reports, cost-based optimizer internals, indexing strategies, and partitioning.',
        verifyUrl: '#',
        badge: (
            <svg viewBox="0 0 80 80" className="size-12" fill="none">
                <circle cx="40" cy="40" r="38" fill="#A435F0" fillOpacity="0.1" stroke="#A435F0" strokeWidth="2" strokeOpacity="0.4" />
                <circle cx="40" cy="40" r="28" fill="#A435F0" fillOpacity="0.07" stroke="#A435F0" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="40" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#A435F0" className="dark:fill-purple-400">TUNING</text>
                <text x="40" y="52" textAnchor="middle" fontSize="8" fontWeight="600" fill="#A435F0" className="dark:fill-purple-400">MASTERCLASS</text>
            </svg>
        ),
        color: 'from-purple-500/10 to-violet-500/5',
        border: 'border-purple-200/60 dark:border-purple-900/40',
        accent: 'text-purple-600 dark:text-purple-400',
    },
    {
        name: 'Computer Science & Engineering Fundamentals',
        issuer: 'Phitron',
        date: '2021',
        credentialId: 'PHITRON-CSE-FUND',
        description: 'Comprehensive curriculum covering data structures, algorithmic problem solving, memory management, and system architecture fundamentals.',
        verifyUrl: '#',
        badge: (
            <svg viewBox="0 0 80 80" className="size-12" fill="none">
                <circle cx="40" cy="40" r="38" fill="#F59E0B" fillOpacity="0.1" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.4" />
                <circle cx="40" cy="40" r="28" fill="#F59E0B" fillOpacity="0.07" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="40" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D97706" className="dark:fill-amber-400">PHITRON</text>
                <text x="40" y="52" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#D97706" className="dark:fill-amber-400">CSE CORE</text>
            </svg>
        ),
        color: 'from-amber-500/10 to-orange-500/5',
        border: 'border-amber-200/60 dark:border-amber-900/40',
        accent: 'text-amber-600 dark:text-amber-400',
    },
    {
        name: 'IsDB-BISEW Professional Diploma — Database Design & Development',
        issuer: 'IsDB-BISEW IT Scholarship Programme',
        date: '2020',
        credentialId: 'BISEW-DDD-2020',
        description: 'Rigorous 1-year professional diploma covering relational database modeling, PL/SQL architecture, Oracle Forms & Reports, and enterprise software engineering.',
        verifyUrl: '#',
        badge: (
            <svg viewBox="0 0 80 80" className="size-12" fill="none">
                <circle cx="40" cy="40" r="38" fill="#059669" fillOpacity="0.1" stroke="#059669" strokeWidth="2" strokeOpacity="0.4" />
                <circle cx="40" cy="40" r="28" fill="#059669" fillOpacity="0.07" stroke="#059669" strokeWidth="1.5" strokeOpacity="0.3" />
                <text x="40" y="38" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#047857" className="dark:fill-emerald-400">IsDB-BISEW</text>
                <text x="40" y="52" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#047857" className="dark:fill-emerald-400">DIPLOMA</text>
            </svg>
        ),
        color: 'from-emerald-500/10 to-teal-500/5',
        border: 'border-emerald-200/60 dark:border-emerald-900/40',
        accent: 'text-emerald-600 dark:text-emerald-400',
    }
];

export default function Certifications() {
    const ref = useScrollReveal();

    return (
        <section
            id="certifications"
            ref={ref as React.RefObject<HTMLElement>}
            className="relative px-5 py-20 md:px-10 md:py-28 overflow-hidden border-t border-slate-200/60 dark:border-slate-800/80"
        >
            {/* subtle bg gradient */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[50vh] w-[70vw] rounded-full bg-amber-500/5 blur-[100px]" />
            </div>

            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center reveal">
                    <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        Certifications
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300">
                        Professionally validated expertise in Oracle Cloud, database engineering, and enterprise software development.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((cert, i) => (
                        <div
                            key={cert.name}
                            className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-[28px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-7 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            {/* shine overlay on hover */}
                            <div className={`pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10">
                                {/* Top row: badge + issuer */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.color} border ${cert.border}`}>
                                        {cert.badge}
                                    </div>
                                    <span className={`mt-1 text-[10px] font-bold uppercase tracking-wider ${cert.accent} bg-current/5 rounded-full px-2.5 py-1 border border-current/20`}
                                        style={{ color: 'inherit' }}>
                                        {cert.date}
                                    </span>
                                </div>

                                <h3 className="text-sm font-bold text-slate-950 dark:text-white leading-snug mb-1">
                                    {cert.name}
                                </h3>
                                <p className={`text-xs font-semibold mb-3 ${cert.accent}`}>
                                    {cert.issuer}
                                </p>
                                <p className="text-xs leading-6 text-slate-650 dark:text-slate-300 mb-5">
                                    {cert.description}
                                </p>

                                {/* Credential ID + verify link */}
                                <div className="flex items-center justify-between gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                                    <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 truncate">
                                        ID: {cert.credentialId}
                                    </span>
                                    {cert.verifyUrl !== '#' && (
                                        <a
                                            href={cert.verifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider ${cert.accent} hover:underline`}
                                        >
                                            Verify
                                            <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
