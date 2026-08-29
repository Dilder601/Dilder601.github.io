'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

interface CredentialItem {
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    category: 'Cloud & Database' | 'Professional Diploma' | 'Specialization';
    description: string;
    skills: string[];
    verifyUrl: string;
    verified: boolean;
    badgeIcon: React.ReactNode;
    color: string;
    border: string;
    accent: string;
}

const masterCert = {
    name: 'Oracle APEX Cloud Developer Certified Professional',
    examCode: '1Z0-771',
    issuer: 'Oracle University',
    date: 'Nov 2023',
    status: 'Verified Professional',
    description: 'Industry-standard certification validating end-to-end expertise in architecting, developing, securing, and deploying enterprise applications using Oracle APEX on Oracle Cloud Infrastructure (OCI) and Autonomous Database.',
    competencies: [
        'Enterprise APEX Architecture & Page Components',
        'Advanced PL/SQL Packages, Dynamic Actions & Plugins',
        'ORDS RESTful Web Services & External Integrations',
        'Database Security Schemes, Authentication & Authorization',
        'Autonomous Database Deployment & Cloud Scaling'
    ],
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=',
};

const credentials: CredentialItem[] = [
    {
        name: 'SQL (Advanced) Skills Certification',
        issuer: 'HackerRank',
        date: '2023',
        credentialId: 'HR-SQL-ADV',
        category: 'Cloud & Database',
        description: 'Demonstrated mastery in complex SQL queries, hierarchical recursive CTEs, window analytical functions, performance-driven subqueries, and database indexing strategies.',
        skills: ['Hierarchical Queries', 'Window Functions', 'Recursive CTEs', 'Index Optimization'],
        verifyUrl: 'https://www.hackerrank.com/certificates',
        verified: true,
        badgeIcon: (
            <svg viewBox="0 0 80 80" className="size-10" fill="none">
                <circle cx="40" cy="40" r="38" fill="#00EA64" fillOpacity="0.12" stroke="#00EA64" strokeWidth="2" strokeOpacity="0.5" />
                <text x="40" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#008a38" className="dark:fill-emerald-400">HACKERRANK</text>
                <text x="40" y="52" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#008a38" className="dark:fill-emerald-400">SQL (ADV)</text>
            </svg>
        ),
        color: 'from-emerald-500/10 to-teal-500/5',
        border: 'border-emerald-200/80 dark:border-emerald-900/60',
        accent: 'text-emerald-700 dark:text-emerald-400',
    },
    {
        name: 'Oracle SQL Performance Tuning Masterclass',
        issuer: 'Udemy / Expert Oracle Instructors',
        date: '2022',
        credentialId: 'UDEMY-PERF-TUNE',
        category: 'Cloud & Database',
        description: 'Comprehensive practical training covering Cost-Based Optimizer (CBO) internals, AWR & ASH performance analysis, execution plan bottlenecks, and table partitioning.',
        skills: ['AWR / ASH Analysis', 'Execution Plans', 'CBO Internals', 'Partitioning Strategies'],
        verifyUrl: '#',
        verified: true,
        badgeIcon: (
            <svg viewBox="0 0 80 80" className="size-10" fill="none">
                <circle cx="40" cy="40" r="38" fill="#A435F0" fillOpacity="0.12" stroke="#A435F0" strokeWidth="2" strokeOpacity="0.5" />
                <text x="40" y="38" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#A435F0" className="dark:fill-purple-400">ORACLE SQL</text>
                <text x="40" y="52" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#A435F0" className="dark:fill-purple-400">TUNING</text>
            </svg>
        ),
        color: 'from-purple-500/10 to-violet-500/5',
        border: 'border-purple-200/80 dark:border-purple-900/60',
        accent: 'text-purple-700 dark:text-purple-400',
    },
    {
        name: 'IsDB-BISEW Diploma in Database Design & Development',
        issuer: 'IsDB-BISEW IT Scholarship Programme',
        date: '2020',
        credentialId: 'BISEW-DDD-2020',
        category: 'Professional Diploma',
        description: '1-year rigorous full-time professional diploma curriculum focusing on relational database architecture, PL/SQL engineering, Oracle Forms & Reports, and enterprise lifecycle development.',
        skills: ['Oracle Database 11g-19c', 'PL/SQL Packages & Triggers', 'ERD Modeling', 'Enterprise Architecture'],
        verifyUrl: '#',
        verified: true,
        badgeIcon: (
            <svg viewBox="0 0 80 80" className="size-10" fill="none">
                <circle cx="40" cy="40" r="38" fill="#059669" fillOpacity="0.12" stroke="#059669" strokeWidth="2" strokeOpacity="0.5" />
                <text x="40" y="38" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#047857" className="dark:fill-emerald-400">IsDB-BISEW</text>
                <text x="40" y="52" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#047857" className="dark:fill-emerald-400">DIPLOMA (DDD)</text>
            </svg>
        ),
        color: 'from-teal-500/10 to-emerald-500/5',
        border: 'border-teal-200/80 dark:border-teal-900/60',
        accent: 'text-teal-700 dark:text-teal-400',
    },
    {
        name: 'Computer Science & Engineering Fundamentals',
        issuer: 'Phitron',
        date: '2021',
        credentialId: 'PHITRON-CSE-FUND',
        category: 'Specialization',
        description: 'Core computer science fundamentals covering data structures, algorithmic time complexity, memory allocation, pointer manipulation, and foundational problem solving.',
        skills: ['Data Structures', 'Algorithms', 'Memory Optimization', 'Problem Solving'],
        verifyUrl: '#',
        verified: true,
        badgeIcon: (
            <svg viewBox="0 0 80 80" className="size-10" fill="none">
                <circle cx="40" cy="40" r="38" fill="#F59E0B" fillOpacity="0.12" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.5" />
                <text x="40" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D97706" className="dark:fill-amber-400">PHITRON</text>
                <text x="40" y="52" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#D97706" className="dark:fill-amber-400">CSE CORE</text>
            </svg>
        ),
        color: 'from-amber-500/10 to-orange-500/5',
        border: 'border-amber-200/80 dark:border-amber-900/60',
        accent: 'text-amber-700 dark:text-amber-400',
    },
    {
        name: 'Data Analysis Professional Specialization',
        issuer: 'Coursera',
        date: '2023',
        credentialId: 'COURSERA-DA-2023',
        category: 'Specialization',
        description: 'Data analytics specialization covering business intelligence metrics, predictive forecasting, exploratory data modeling, and reporting dashboard architectures.',
        skills: ['Data Modeling', 'Business Intelligence', 'Analytics Dashboards', 'Aggregation Metrics'],
        verifyUrl: 'https://www.coursera.org',
        verified: true,
        badgeIcon: (
            <svg viewBox="0 0 80 80" className="size-10" fill="none">
                <circle cx="40" cy="40" r="38" fill="#0056D2" fillOpacity="0.12" stroke="#0056D2" strokeWidth="2" strokeOpacity="0.5" />
                <text x="40" y="38" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0056D2" className="dark:fill-blue-400">COURSERA</text>
                <text x="40" y="52" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#0056D2" className="dark:fill-blue-400">DATA ANALYTICS</text>
            </svg>
        ),
        color: 'from-blue-500/10 to-sky-500/5',
        border: 'border-blue-200/80 dark:border-blue-900/60',
        accent: 'text-blue-700 dark:text-blue-400',
    },
    {
        name: 'Bachelor of Business Administration (BBA)',
        issuer: 'Feni Govt. College · National University',
        date: '2019',
        credentialId: 'NU-BBA-MGMT',
        category: 'Professional Diploma',
        description: 'Undergraduate business degree with a major in Management, providing a solid foundation in organizational workflows, financial accounting, supply chain logistics, and business operations.',
        skills: ['Operations Management', 'Supply Chain Workflows', 'Financial Accounting', 'Business Analysis'],
        verifyUrl: '#',
        verified: true,
        badgeIcon: (
            <svg viewBox="0 0 80 80" className="size-10" fill="none">
                <circle cx="40" cy="40" r="38" fill="#0284C7" fillOpacity="0.12" stroke="#0284C7" strokeWidth="2" strokeOpacity="0.5" />
                <text x="40" y="38" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0369A1" className="dark:fill-sky-400">BBA</text>
                <text x="40" y="52" textAnchor="middle" fontSize="7.5" fontWeight="bold" fill="#0369A1" className="dark:fill-sky-400">MANAGEMENT</text>
            </svg>
        ),
        color: 'from-sky-500/10 to-blue-500/5',
        border: 'border-sky-200/80 dark:border-sky-900/60',
        accent: 'text-sky-700 dark:text-sky-400',
    }
];

export default function Certifications() {
    const ref = useScrollReveal();

    return (
        <section
            id="certifications"
            ref={ref as React.RefObject<HTMLElement>}
            className="relative px-5 py-20 md:px-10 md:py-28 overflow-hidden bg-gradient-to-b from-transparent via-slate-50/40 to-transparent dark:via-slate-950/20 border-t border-slate-200/60 dark:border-slate-800/80"
        >
            {/* Ambient Background Glow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px] dark:bg-emerald-500/15" />
                <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-rose-400/10 blur-[120px] dark:bg-rose-500/10" />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-12 sm:mb-16 text-center reveal">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-1 rounded-full border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs">
                        Verified Credentials
                    </span>
                    <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        Certifications &amp; Diplomas
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300">
                        Official credentials validating proficiency across Oracle Cloud architecture, database engineering, and core computer science.
                    </p>
                </div>

                {/* ════════ MASTER CERTIFICATION SPOTLIGHT ════════ */}
                <div className="mb-12 reveal reveal-delay-1">
                    <div className="group relative overflow-hidden rounded-[32px] sm:rounded-[36px] border-2 border-red-200/80 dark:border-red-900/60 bg-gradient-to-br from-white via-red-50/30 to-white dark:from-slate-900 dark:via-red-950/20 dark:to-slate-900 p-8 sm:p-10 shadow-xl shadow-red-950/5 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl">
                        {/* Glow corner */}
                        <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-red-500/15 blur-3xl" />

                        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_1.3fr] items-center">
                            {/* Left: Badge & Core Identity */}
                            <div className="space-y-4">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 dark:bg-red-950/80 border border-red-300 dark:border-red-800 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-red-700 dark:text-red-300">
                                        🛡️ Flagship Credential
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-3 py-1 rounded-full">
                                        <svg className="size-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        Oracle University Verified
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 pt-1">
                                    <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-slate-800 border-2 border-red-200 dark:border-red-800 shadow-md">
                                        <svg viewBox="0 0 80 80" className="size-14" fill="none">
                                            <circle cx="40" cy="40" r="38" fill="#FF0000" fillOpacity="0.08" stroke="#FF0000" strokeWidth="2.5" strokeOpacity="0.6" />
                                            <circle cx="40" cy="40" r="28" fill="#FF0000" fillOpacity="0.06" stroke="#FF0000" strokeWidth="1.5" strokeOpacity="0.4" />
                                            <text x="40" y="38" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#CC0000" className="dark:fill-red-400">ORACLE</text>
                                            <text x="40" y="52" textAnchor="middle" fontSize="8.5" fontWeight="bold" fill="#CC0000" className="dark:fill-red-400">CERTIFIED</text>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl sm:text-2xl font-black text-slate-950 dark:text-white leading-tight">
                                            {masterCert.name}
                                        </h3>
                                        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
                                            Exam Code: <span className="font-mono font-bold text-red-600 dark:text-red-400">{masterCert.examCode}</span> &bull; {masterCert.date}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-650 dark:text-slate-300">
                                    {masterCert.description}
                                </p>
                            </div>

                            {/* Right: Validated Competency Matrix */}
                            <div className="rounded-2xl border border-red-200/70 dark:border-red-900/50 bg-white/80 dark:bg-slate-950/60 p-6 backdrop-blur">
                                <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3.5">
                                    Validated Competencies &amp; Domains
                                </p>
                                <ul className="space-y-2 text-xs font-medium text-slate-800 dark:text-slate-200">
                                    {masterCert.competencies.map((comp, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mt-0.5">
                                                <svg className="size-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                            </span>
                                            <span>{comp}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                                        Issuer: <strong className="text-slate-900 dark:text-white">Oracle University</strong>
                                    </span>
                                    <a
                                        href={masterCert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white px-4 py-1.5 text-xs font-bold transition-all shadow-sm shadow-red-600/20"
                                    >
                                        Verify on Oracle &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ════════ CREDENTIALS & DIPLOMAS GRID ════════ */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 reveal reveal-delay-2">
                    {credentials.map((cert) => (
                        <div
                            key={cert.name}
                            className="group relative flex flex-col justify-between rounded-[28px] border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-7 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-700/60"
                        >
                            <div>
                                {/* Top row: Badge Icon + Date */}
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className={`flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.color} border ${cert.border} shadow-2xs group-hover:scale-105 transition-transform`}>
                                        {cert.badgeIcon}
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                        <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                                            {cert.date}
                                        </span>
                                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
                                            {cert.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Title & Issuer */}
                                <h3 className="text-base font-extrabold text-slate-950 dark:text-white leading-snug mb-1 font-heading group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    {cert.name}
                                </h3>
                                <p className={`text-xs font-bold mb-3 ${cert.accent}`}>
                                    {cert.issuer}
                                </p>

                                {/* Description */}
                                <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-5">
                                    {cert.description}
                                </p>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                {/* Skill Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full border border-slate-200/70 dark:border-slate-700/70 bg-slate-50 dark:bg-slate-950 px-2.5 py-0.5 text-[10px] font-semibold text-slate-700 dark:text-slate-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom Meta: ID + Verification */}
                                <div className="flex items-center justify-between text-[11px] pt-1">
                                    <span className="font-mono text-slate-400 text-[10px]">
                                        ID: {cert.credentialId}
                                    </span>
                                    {cert.verifyUrl !== '#' ? (
                                        <a
                                            href={cert.verifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                                        >
                                            <span>Verify</span>
                                            <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <span className="text-[10px] font-semibold text-slate-400">
                                            Completed Diploma
                                        </span>
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
