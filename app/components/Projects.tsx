'use client';

import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type ProjectCategory = 'All' | 'Enterprise ERP' | 'Finance & POS' | 'Healthcare & QC';

interface Project {
    name: string;
    category: 'Enterprise ERP' | 'Finance ERP' | 'Healthcare ERP' | 'Retail POS' | 'Manufacturing QC' | 'Healthcare IT';
    filterCategory: 'Enterprise ERP' | 'Finance & POS' | 'Healthcare & QC';
    role: string;
    impact: string;
    summary: string;
    highlights: string[];
    href: string;
    tags: string[];
    credentials?: string;
    color: string;
}

const projects: Project[] = [
    {
        name: 'Emojud ERP System',
        category: 'Enterprise ERP',
        filterCategory: 'Enterprise ERP',
        role: 'Full-Stack & Database Architect',
        impact: '500+ Active Daily Users',
        summary: 'Comprehensive multi-tenant ERP platform supporting Finance, HR & Payroll, Inventory, Procurement, Sales, and Production Planning with role-based access control (RBAC) and complete audit trails.',
        highlights: [
            'Multi-tenant database schema supporting 6 core business divisions',
            'Automated PL/SQL batch workflows for real-time inventory reconciliation',
            'Secure ORDS REST APIs with Node.js microservices integration'
        ],
        href: 'https://emojud.vercel.app/login?redirect=%2F',
        tags: ['Oracle APEX', 'PL/SQL', 'Node.js', 'PostgreSQL', 'ORDS REST'],
        color: 'from-emerald-500/10 via-teal-500/5 to-slate-900/0'
    },
    {
        name: 'Micro Credit Management System',
        category: 'Finance ERP',
        filterCategory: 'Finance & POS',
        role: 'Lead APEX & PL/SQL Engineer',
        impact: '10,000+ Loan Accounts Processed',
        summary: 'End-to-end loan lifecycle management system for microfinance institutions, automating loan origination, disbursement, repayment schedules, and delinquency tracking with sub-second interest calculations.',
        highlights: [
            'Complex amortization algorithms and automated penalty processing',
            'Automated SMS gateway integration for installment due alerts',
            'Analytical dashboards tracking Portfolio at Risk (PAR) and recovery rates'
        ],
        href: 'https://apex.oracle.com/pls/apex/f?p=113484',
        tags: ['Oracle APEX', 'PL/SQL', 'Oracle 12c/19c', 'SMS Gateway', 'Financial Analytics'],
        color: 'from-blue-500/10 via-indigo-500/5 to-slate-900/0'
    },
    {
        name: 'Pharmacy Management System',
        category: 'Healthcare ERP',
        filterCategory: 'Healthcare & QC',
        role: 'ERP Database Architect',
        impact: '45% Stock Discrepancy Reduction',
        summary: 'Integrated hospital pharmacy operations platform featuring real-time inventory control, batch-wise expiry tracking, digital prescription fulfillment, and automated reorder point calculations.',
        highlights: [
            'Barcode scanning integration for high-speed dispensing workflows',
            'Automated purchase order generation based on predictive minimum stock levels',
            'Sub-second stock valuation across 10,000+ medicine SKUs'
        ],
        href: 'https://apex.oracle.com/pls/apex/f?p=157297',
        tags: ['Oracle APEX', 'PL/SQL Packages', 'Barcode POS', 'Oracle 19c', 'Inventory FIFO'],
        credentials: 'Demo: 1001 / 1001',
        color: 'from-teal-500/10 via-emerald-500/5 to-slate-900/0'
    },
    {
        name: 'Cash and Carry POS System',
        category: 'Retail POS',
        filterCategory: 'Finance & POS',
        role: 'Lead Systems Developer',
        impact: '1,000+ Daily Transactions',
        summary: 'High-throughput Point of Sale and retail back-office platform engineered for multi-counter checkout, dynamic tier pricing, promotional discounting, and automated end-of-day cash reconciliation.',
        highlights: [
            'Direct thermal printer and cash drawer hardware integration via JavaScript APIs',
            'Multi-payment splitting (Cash, Mobile Wallets, Cards) with zero lockups',
            'Instant daily sales summary and cashier shift audit reports'
        ],
        href: 'https://apex.oracle.com/pls/apex/f?p=207615',
        tags: ['Oracle APEX', 'PL/SQL', 'Hardware API', 'Thermal Printing', 'Retail POS'],
        credentials: 'Demo: 02030 / 123456',
        color: 'from-amber-500/10 via-orange-500/5 to-slate-900/0'
    },
    {
        name: 'QC Alter System',
        category: 'Manufacturing QC',
        filterCategory: 'Healthcare & QC',
        role: 'Database & APEX Developer',
        impact: '40% Faster QC Cycle Time',
        summary: 'Industrial quality control and defect tracking system for manufacturing assembly lines, enabling instant non-conformance logging, root cause analysis, and automated corrective action workflows.',
        highlights: [
            'Real-time defect tracking matrix across multiple shop-floor production stages',
            'Comprehensive audit logging complying with international manufacturing standards',
            'Automated email alerts dispatched to quality assurance heads upon defect spikes'
        ],
        href: 'https://apex.oracle.com/pls/apex/f?p=57988',
        tags: ['Oracle APEX', 'PL/SQL', 'Oracle 19c', 'Audit Trails', 'QC Workflow'],
        credentials: 'Demo: Mithu / 123',
        color: 'from-purple-500/10 via-violet-500/5 to-slate-900/0'
    },
    {
        name: 'Blood Circulation Management System',
        category: 'Healthcare IT',
        filterCategory: 'Healthcare & QC',
        role: 'Lead Database Developer',
        impact: '15+ Facilities Connected',
        summary: 'Centralized blood bank management platform with donor registry, blood group compatibility matrix, cold-chain inventory tracking, cross-matching workflows, and emergency hospital request dispatch.',
        highlights: [
            'Smart donor eligibility algorithm and automated donation recall scheduling',
            'Real-time emergency request broadcast to matched registered donors',
            'Cross-matching audit verification preventing transfusion protocol errors'
        ],
        href: 'https://apex.oracle.com/pls/apex/f?p=113484',
        tags: ['Oracle APEX', 'PL/SQL', 'Healthcare Security', 'REST APIs', 'Emergency Dispatch'],
        color: 'from-rose-500/10 via-red-500/5 to-slate-900/0'
    }
];

const filterTabs: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects (6)', value: 'All' },
    { label: 'Enterprise ERP', value: 'Enterprise ERP' },
    { label: 'Finance & POS', value: 'Finance & POS' },
    { label: 'Healthcare & QC', value: 'Healthcare & QC' },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const ref = useScrollReveal();

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.filterCategory === activeFilter);

    const handleCopy = (creds: string, idx: number) => {
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(creds);
            setCopiedIndex(idx);
            setTimeout(() => setCopiedIndex(null), 2500);
        }
    };

    return (
        <section
            id="projects"
            ref={ref as React.RefObject<HTMLElement>}
            className="relative px-5 py-20 md:px-10 md:py-28 overflow-hidden bg-gradient-to-b from-transparent via-slate-50/50 to-transparent dark:via-slate-950/20 border-t border-slate-200/60 dark:border-slate-800/80"
        >
            {/* Ambient Background Glow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-10 h-80 w-[450px] rounded-full bg-emerald-500/10 blur-[130px] dark:bg-emerald-500/15" />
                <div className="absolute bottom-1/4 right-10 h-80 w-[450px] rounded-full bg-rose-400/10 blur-[120px] dark:bg-rose-500/10" />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mb-12 sm:mb-16 text-center reveal">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-1 rounded-full border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs">
                        Production Portfolio
                    </span>
                    <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        Featured Enterprise Projects
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300">
                        Mission-critical ERP systems, high-volume POS solutions, and database architectures deployed in production and handling real enterprise workloads.
                    </p>

                    {/* Interactive Filter Tabs */}
                    <div className="mt-8 flex flex-wrap justify-center gap-2">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.value}
                                type="button"
                                onClick={() => setActiveFilter(tab.value)}
                                className={`cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 border ${
                                    activeFilter === tab.value
                                        ? 'bg-emerald-600 dark:bg-emerald-500 text-white border-emerald-600 dark:border-emerald-500 shadow-md shadow-emerald-600/20'
                                        : 'border-slate-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/80 text-slate-600 dark:text-slate-300 hover:border-emerald-300 dark:hover:border-emerald-700 hover:text-slate-900 dark:hover:text-white'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 reveal reveal-delay-1 items-stretch">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={project.name}
                            className="group relative flex flex-col justify-between rounded-[32px] border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-7 sm:p-8 backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:border-emerald-300 dark:hover:border-emerald-600/70 hover:-translate-y-1"
                        >
                            <div>
                                {/* Top Header Bar: Category + Impact Badge */}
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                                    <div className="flex items-center gap-2">
                                        <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60">
                                            {project.category}
                                        </span>
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/70 px-3 py-1 text-[11px] font-bold text-emerald-800 dark:text-emerald-300">
                                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        {project.impact}
                                    </span>
                                </div>

                                {/* Title & Live Demo Link */}
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div>
                                        <h3 className="font-heading text-2xl font-extrabold text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mt-0.5">
                                            Role: {project.role}
                                        </p>
                                    </div>

                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-400 group-hover:text-white dark:group-hover:text-slate-950 px-3.5 py-1.5 text-xs font-bold transition-all duration-200 shadow-sm"
                                        aria-label={`Open live demo for ${project.name}`}
                                    >
                                        <span>Live Demo</span>
                                        <svg className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Executive Summary */}
                                <p className="text-xs sm:text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 mb-5">
                                    {project.summary}
                                </p>

                                {/* Technical Highlights */}
                                <div className="mb-6 space-y-2 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 p-4 border border-slate-100 dark:border-slate-800/80">
                                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                        Architectural Highlights
                                    </p>
                                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                                        {project.highlights.map((h, hIdx) => (
                                            <li key={hIdx} className="flex items-start gap-2">
                                                <span className="text-emerald-500 dark:text-emerald-400 font-bold shrink-0 mt-0.5">&bull;</span>
                                                <span className="leading-snug">{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                                {/* Demo Credentials with One-Click Copy */}
                                {project.credentials && (
                                    <div className="flex items-center justify-between rounded-xl border border-dashed border-emerald-200 dark:border-emerald-800/80 bg-emerald-50/50 dark:bg-emerald-950/30 px-3.5 py-2 text-xs">
                                        <div className="font-mono text-[11px] text-emerald-900 dark:text-emerald-200">
                                            🔑 <span className="font-bold">{project.credentials}</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => handleCopy(project.credentials!, idx)}
                                            className="cursor-pointer text-[11px] font-bold text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-100 hover:underline transition-colors"
                                        >
                                            {copiedIndex === idx ? '✓ Copied!' : 'Copy'}
                                        </button>
                                    </div>
                                )}

                                {/* Technology Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-950/80 px-3 py-1 text-[10px] font-bold text-slate-700 dark:text-slate-300 shadow-2xs"
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
