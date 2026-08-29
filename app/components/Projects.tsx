'use client';

import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
    {
        name: 'Emojud ERP System',
        category: 'Enterprise ERP',
        summary: 'Designed and developed a comprehensive multi-tenant ERP platform supporting Finance, HR & Payroll, Inventory, Procurement, Sales, and Production Planning. Served 500+ daily users across multiple business divisions with RBAC and full audit logging.',
        href: 'https://emojud.vercel.app/login?redirect=%2F',
        tags: ['Oracle APEX', 'PL/SQL', 'NODE.js', 'PostgreSQL', 'ORDS REST'],
        color: 'from-indigo-500/10 to-blue-500/10'
    },
    {
        name: 'Micro Credit Management System',
        category: 'Finance ERP',
        summary: 'Built an end-to-end loan lifecycle management platform for microfinance institutions, automating loan origination, disbursement, repayment tracking, and delinquency reporting. Processed 10,000+ loan accounts with automated interest calculations and SMS notifications.',
        href: 'https://apex.oracle.com/pls/apex/f?p=113484',
        tags: ['Oracle APEX', 'PL/SQL', 'REST API', 'Oracle 12c'],
        color: 'from-blue-500/10 to-indigo-500/10'
    },
    {
        name: 'Pharmacy Management System',
        category: 'Healthcare ERP',
        summary: 'Developed an integrated pharmacy operations platform with real-time inventory tracking, expiry management, prescription processing, and automated purchase order generation. Reduced stock discrepancies by 45% and improved fulfillment speed by 35%.',
        href: 'https://apex.oracle.com/pls/apex/f?p=157297',
        tags: ['Oracle APEX', 'PL/SQL', 'Barcode Integration', 'Oracle 19c'],
        credentials: 'Demo: 1001 / 1001',
        color: 'from-sky-500/10 to-blue-500/10'
    },
    {
        name: 'Cash and Carry POS System',
        category: 'Retail POS',
        summary: 'Engineered a high-performance Point of Sale system for retail operations with real-time inventory synchronization, multi-payment processing, dynamic pricing, and automated end-of-day reconciliation. Handled 1,000+ daily transactions with sub-second response times.',
        href: 'https://apex.oracle.com/pls/apex/f?p=207615',
        tags: ['Oracle APEX', 'PL/SQL', 'REST API', 'Thermal Printing'],
        credentials: 'Demo: 02030 / 123456',
        color: 'from-emerald-500/10 to-teal-500/10'
    },
    {
        name: 'QC Alter System',
        category: 'Manufacturing QC',
        summary: 'Created a quality control tracking platform for manufacturing operations, enabling real-time defect reporting, root cause analysis, and corrective action workflows. Improved QC cycle time by 40% and enhanced product compliance tracking across production lines.',
        href: 'https://apex.oracle.com/pls/apex/f?p=57988',
        tags: ['Oracle APEX', 'PL/SQL', 'Oracle 19c', 'Audit Logs'],
        credentials: 'Demo: Mithu / 123',
        color: 'from-purple-500/10 to-violet-500/10'
    },
    {
        name: 'Blood Circulation System',
        category: 'Healthcare IT',
        summary: 'Developed a blood bank management platform with donor registry, blood group matching, inventory tracking, cross-matching workflows, and emergency request dispatching. Connected 15+ healthcare facilities with centralized availability monitoring.',
        href: 'https://apex.oracle.com/pls/apex/f?p=113484',
        tags: ['Oracle APEX', 'PL/SQL', 'REST API', 'SMS Gateway'],
        color: 'from-rose-500/10 to-pink-500/10'
    }
];

export default function Projects() {
    const ref = useScrollReveal();
    return (
        <section id="projects" ref={ref as React.RefObject<HTMLElement>} className="relative px-5 py-20 md:px-10 md:py-28 overflow-hidden border-t border-slate-200/60 dark:border-slate-800/80">
            <div className="mx-auto max-w-7xl">
                <div className="mb-14 text-center reveal">
                    <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        Selected Projects
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300">
                        A catalog of custom enterprise platforms, POS modules, and operations tools I have shipped and tuned.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 reveal reveal-delay-1">
                    {projects.map((project) => (
                        <div 
                            key={project.name}
                            className="group flex flex-col justify-between rounded-[30px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-7 backdrop-blur shadow-sm transition-all duration-300 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-600/60 hover:-translate-y-0.5"
                        >
                            <div>
                                {/* Category Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                                        {project.category}
                                    </span>
                                    
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5 font-sans text-xs font-bold"
                                    >
                                        <span>Live Demo</span>
                                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                                <h3 className="font-heading text-xl font-bold text-slate-950 dark:text-white mb-3">
                                    {project.name}
                                </h3>
                                <p className="text-xs leading-6 text-slate-600 dark:text-slate-300 mb-5">
                                    {project.summary}
                                </p>
                            </div>

                            <div className="space-y-4">
                                {/* Demo Credentials box */}
                                {project.credentials ? (
                                    <div className="rounded-xl border border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/60 px-3.5 py-2.5 font-mono text-[11px] text-slate-700 dark:text-slate-300">
                                        🔑 <span className="font-semibold text-slate-900 dark:text-slate-200">{project.credentials}</span>
                                    </div>
                                ) : null}

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span 
                                            key={tag}
                                            className="rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950/80 px-3.5 py-1 text-[10px] font-bold text-slate-700 dark:text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
