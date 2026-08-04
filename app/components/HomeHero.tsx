'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const navItems = [
    { href: '/resume', label: 'Resume' },
    { href: 'https://github.com/Dilder601', label: 'GitHub', ext: true },
    { href: 'https://www.linkedin.com/in/dilder-orclapex/', label: 'LinkedIn', ext: true }
];

const expertise = ['Oracle APEX', 'PL/SQL', 'ERP Architecture', 'REST API', 'Performance Tuning'];

const trustPoints = [
    'Oracle APEX Cloud Developer Certified',
    '5+ years in ERP delivery',
    'Built solutions for pharma and healthcare operations'
];

const highlights = [
    {
        value: '5+',
        label: 'Years building Oracle ERP workflows'
    },
    {
        value: '4000+',
        label: 'Concurrent users supported in enterprise applications'
    },
    {
        value: 'JMI',
        label: 'Hands-on delivery across multiple JMI Group concerns'
    }
];

const focusCards = [
    {
        title: 'Enterprise Systems',
        text: 'Production-ready APEX applications designed around real operational workflows.'
    },
    {
        title: 'Database Performance',
        text: 'PL/SQL, SQL tuning, report optimization, and reliable backend architecture.'
    },
    {
        title: 'Domain Delivery',
        text: 'Strong delivery experience in pharmaceutical, manufacturing, and healthcare environments.'
    }
];

const socials = [
    { href: 'https://github.com/Dilder601', icon: '/images/github.png', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/dilder-orclapex/', icon: '/images/linkedin.png', label: 'LinkedIn' },
    { href: 'https://leetcode.com/DilderHossain/', icon: '/images/leetcode.svg', label: 'LeetCode' }
];

// Mock database commands and outputs
const terminalCommands = [
    {
        cmd: 'SELECT * FROM skills;',
        output: [
            'SKILL_NAME                | LEVEL       | CERTIFIED',
            '--------------------------|-------------|----------',
            'Oracle APEX Development   | Expert      | YES      ',
            'Oracle SQL & PL/SQL       | Expert      | YES      ',
            'ERP Architecture Design   | Senior      | YES      ',
            'Performance Tuning        | Specialist  | YES      ',
            'REST API & Web Services   | Advanced    | YES      ',
            '',
            '5 rows selected (0.02 seconds).'
        ]
    },
    {
        cmd: 'EXECUTE db_tuner.optimize_query(\'JMI_SALES_REPORT\');',
        output: [
            '*** Oracle Tuning Task Initialized ***',
            '[INFO] Analyzing SQL execution plan...',
            '[WARN] Detected FULL TABLE SCAN on large partition JMI_SALES_DATA (14.8 seconds).',
            '[ACTION] Restructuring nested subqueries to inline WITH clause...',
            '[ACTION] Applying Local Partitioned Index on INVOICE_DATE...',
            '[SUCCESS] SQL Profile generated successfully.',
            '[SUCCESS] Query execution time reduced: 14.8s -> 0.11s!',
            '[STATUS] 99.2% increase in query efficiency.',
            '',
            'PL/SQL procedure successfully completed (0.15 seconds).'
        ]
    },
    {
        cmd: 'SELECT * FROM experience WHERE company = \'MononSoft\';',
        output: [
            'COMPANY    | ROLE              | TENURE            | LOCATION',
            '-----------|-------------------|-------------------|------------------',
            'MononSoft  | Software Engineer | Feb 2021 - Pres.  | Dhaka, BD        ',
            '',
            'Description:',
            'Developing enterprise ERP ecosystems on Oracle Database & APEX.',
            'Maintaining systems supporting 4000+ concurrent pharmaceutical users.',
            '',
            '1 row selected (0.01 seconds).'
        ]
    }
];

export default function HomeHero() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [rightPanel, setRightPanel] = useState<'profile' | 'terminal'>('profile');
    
    // Terminal state
    const [terminalLogs, setTerminalLogs] = useState<string[]>([
        'Oracle Database 19c Enterprise Edition Release 19.0.0.0.0',
        'Connected to instance: DILDER_CORE_PROD',
        'Type a command or click one of the quick queries below...',
        ''
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const terminalEndRef = useRef<HTMLDivElement>(null);

    // Sync theme with document class list
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isDark = document.documentElement.classList.contains('dark');
            setTheme(isDark ? 'dark' : 'light');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    // Auto scroll terminal to bottom
    useEffect(() => {
        if (terminalEndRef.current) {
            terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [terminalLogs]);

    const runTerminalCommand = (cmdText: string) => {
        if (isTyping) return;
        setIsTyping(true);
        
        // Add typed command
        setTerminalLogs(prev => [...prev, `SQL> ${cmdText}`]);
        
        // Find matching output
        const cmdObj = terminalCommands.find(c => c.cmd === cmdText);
        const outputLines = cmdObj ? cmdObj.output : ['[ERROR] ORA-00900: invalid SQL statement.'];
        
        // Simulate typing delay
        setTimeout(() => {
            setTerminalLogs(prev => [...prev, ...outputLines, '']);
            setIsTyping(false);
        }, 800);
    };

    const clearTerminal = () => {
        setTerminalLogs([
            'Oracle Database 19c Enterprise Edition Release 19.0.0.0.0',
            'Connected to instance: DILDER_CORE_PROD',
            ''
        ]);
    };

    return (
        <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#edf4fb_56%,#ffffff_100%)] dark:bg-[linear-gradient(180deg,#030712_0%,#090d16_56%,#020617_100%)] font-sans text-slate-900 dark:text-slate-100 selection:bg-sky-100 dark:selection:bg-sky-950/60 selection:text-sky-900 transition-colors duration-300">
            {/* Ambient Background Graphics */}
            <div className="absolute inset-0 -z-30">
                <Image src="/mesh-2.png" alt="background texture" fill className="object-cover opacity-25 dark:opacity-10" priority />
            </div>
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.15),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(30,64,175,0.14),transparent_26%),radial-gradient(circle_at_bottom,rgba(251,191,36,0.1),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.08),transparent_30%)]" />
            <div className="absolute inset-0 -z-10 opacity-[0.12] dark:opacity-[0.07] bg-dots pan-slow" />
            
            {/* Blurs */}
            <div className="pointer-events-none absolute -left-28 top-16 -z-10 h-80 w-80 rounded-full bg-cyan-300/30 dark:bg-cyan-500/10 blur-[110px] animate-blob md:h-[28rem] md:w-[28rem]" />
            <div className="pointer-events-none absolute right-[-5rem] top-32 -z-10 h-72 w-72 rounded-full bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] animate-blob animation-delay-2000 md:h-[30rem] md:w-[30rem]" />
            <div className="pointer-events-none absolute bottom-[-7rem] left-1/3 -z-10 h-72 w-72 rounded-full bg-amber-300/15 dark:bg-emerald-500/5 blur-[120px] animate-blob" />

            <header className="relative z-30 px-5 pt-6 md:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between rounded-full border border-white/50 dark:border-slate-800/40 bg-white/70 dark:bg-slate-900/60 px-4 py-3 shadow-[0_18px_55px_rgba(15,23,42,0.06)] dark:shadow-[0_18px_55px_rgba(0,0,0,0.3)] backdrop-blur-xl md:px-6 transition-all duration-300">
                        <Link href="/" className="group flex items-center gap-3">
                            <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_100%)] dark:bg-[linear-gradient(135deg,#1e293b_0%,#0284c7_100%)] text-sm font-bold tracking-[0.22em] text-white shadow-lg">
                                DH
                                <span className="absolute inset-0 rounded-full ring-1 ring-white/30" />
                            </span>
                            <div>
                                <p className="font-heading text-lg font-bold tracking-tight text-slate-955 dark:text-white">Dilder Hossain</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
                                    Oracle APEX Developer
                                </p>
                            </div>
                        </Link>

                        <nav className="hidden items-center gap-1 md:flex">
                            {navItems.map((item) =>
                                item.ext ? (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white">
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 transition-all hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-955 dark:hover:text-white">
                                        {item.label}
                                    </Link>
                                )
                            )}
                            
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="mx-2 theme-toggle-btn"
                                aria-label="Toggle theme">
                                {theme === 'light' ? (
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ) : (
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.062.062a5.002 5.002 0 01-7.01 0l-.002-.002z" />
                                    </svg>
                                )}
                            </button>

                            <a
                                href="mailto:dilder.hossain.feni@gmail.com"
                                className="ml-2 inline-flex items-center gap-2 rounded-full bg-slate-950 dark:bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 dark:shadow-sky-950/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 dark:hover:bg-sky-500">
                                Let&apos;s Talk
                            </a>
                        </nav>

                        <div className="flex items-center gap-3 md:hidden">
                            <button
                                onClick={toggleTheme}
                                className="theme-toggle-btn h-9 w-9"
                                aria-label="Toggle theme">
                                {theme === 'light' ? (
                                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ) : (
                                    <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.062.062a5.002 5.002 0 01-7.01 0l-.002-.002z" />
                                    </svg>
                                )}
                            </button>
                            
                            <button
                                aria-label="Toggle menu"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                                onClick={() => setMobileOpen((v) => !v)}>
                                <svg
                                    className={`transition-transform duration-300 ${mobileOpen ? 'rotate-90' : ''}`}
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    {mobileOpen ? (
                                        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    ) : (
                                        <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-500 md:hidden ${mobileOpen ? 'max-h-96 pt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="rounded-[28px] border border-white/60 dark:border-slate-800/40 bg-white/75 dark:bg-slate-900/80 p-3 shadow-xl backdrop-blur-xl">
                            <div className="flex flex-col gap-1">
                                {navItems.map((item) =>
                                    item.ext ? (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60">
                                            {item.label}
                                        </Link>
                                    )
                                )}
                                <a
                                    href="mailto:dilder.hossain.feni@gmail.com"
                                    className="mt-2 inline-flex items-center justify-center rounded-2xl bg-slate-950 dark:bg-sky-600 px-5 py-3 text-sm font-bold text-white">
                                    Let&apos;s Talk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className="relative z-20 mx-auto grid max-w-7xl gap-12 px-5 pb-14 pt-12 md:px-10 md:pb-20 md:pt-16 xl:grid-cols-[minmax(0,1.05fr)_31rem] xl:items-center">
                <div className="min-w-0 max-w-3xl">
                    <div className="inline-flex items-center gap-3 rounded-full border border-sky-200/70 dark:border-sky-800/40 bg-white/80 dark:bg-slate-900/60 px-4.5 py-2 shadow-sm backdrop-blur animate-fade-in-up">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.16)] dark:shadow-[0_0_0_6px_rgba(16,185,129,0.22)]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-800 dark:text-sky-300">
                            Oracle APEX Cloud Developer Certified
                        </span>
                    </div>

                    <div className="mt-7 space-y-6">
                        <p className="text-[11px] font-bold uppercase tracking-[0.34em] text-slate-400 dark:text-slate-450 animate-fade-in-up delay-100">
                            Enterprise Applications. Database Logic. ERP Delivery.
                        </p>
                        <h1 className="font-heading text-[2.75rem] md:text-7xl font-bold leading-[1.02] tracking-[-0.04em] text-slate-950 dark:text-white animate-fade-in-up delay-100">
                            Gorgeous software is nice.
                            <span className="mt-3 block bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-950 dark:from-sky-400 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent">
                                Reliable enterprise systems are better.
                            </span>
                        </h1>
                        <p className="max-w-2xl text-[13px] md:text-sm leading-7 md:leading-8 text-slate-600 dark:text-slate-300 animate-fade-in-up delay-200">
                            I design and ship Oracle APEX and PL/SQL solutions that help real operations move faster,
                            from ERP workflows and reporting systems to performance-critical database applications in
                            pharma and healthcare environments.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in-up delay-300">
                        <Link
                            href="/resume"
                            className="inline-flex items-center gap-3 rounded-full bg-slate-950 dark:bg-sky-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] dark:shadow-[0_18px_40px_rgba(3,105,161,0.25)] transition-all hover:-translate-y-1 hover:bg-slate-800 dark:hover:bg-sky-500">
                            View Resume
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                        <a
                            href="mailto:dilder.hossain.feni@gmail.com"
                            className="inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 px-7 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white">
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-9 flex flex-wrap gap-2 animate-fade-in-up delay-300">
                        {expertise.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-700 dark:text-slate-300 backdrop-blur">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {highlights.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-[28px] border border-white/60 dark:border-slate-800/60 bg-white/75 dark:bg-slate-900/40 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.15)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5">
                                <p className="font-heading text-3xl font-bold tracking-tight text-slate-950 dark:text-white">{item.value}</p>
                                <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400">{item.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-col gap-6 border-t border-slate-200/70 dark:border-slate-800/70 pt-8 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white/85 dark:bg-slate-900/60 shadow-sm transition-all hover:-translate-y-1 hover:border-sky-200 dark:hover:border-sky-900 hover:shadow-md"
                                    title={social.label}>
                                    <Image
                                        src={social.icon}
                                        alt={social.label}
                                        width={20}
                                        height={20}
                                        className="opacity-70 dark:opacity-60 transition-opacity group-hover:opacity-100 group-hover:invert-0 dark:invert-[0.85] dark:group-hover:invert-0"
                                    />
                                </a>
                            ))}
                        </div>

                        <div className="grid gap-2">
                            {trustPoints.map((item) => (
                                <div key={item} className="flex items-start gap-3 text-xs text-slate-600 dark:text-slate-400">
                                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-500 dark:bg-sky-400" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side Panel - Features Toggle tab between Photo Profile and Live PL/SQL Terminal */}
                <div className="relative mx-auto w-full max-w-[31rem] min-w-0 xl:mx-0">
                    <div className="absolute inset-x-8 top-8 h-40 rounded-full bg-cyan-300/20 dark:bg-cyan-500/5 blur-[90px]" />
                    <div className="absolute inset-x-14 bottom-8 h-36 rounded-full bg-blue-600/15 dark:bg-sky-600/5 blur-[90px]" />

                    {/* Toggle Headers */}
                    <div className="flex justify-center gap-2 mb-4">
                        <button 
                            onClick={() => setRightPanel('profile')}
                            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${rightPanel === 'profile' ? 'bg-slate-950 text-white dark:bg-sky-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'}`}>
                            Profile Profile
                        </button>
                        <button 
                            onClick={() => setRightPanel('terminal')}
                            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 ${rightPanel === 'terminal' ? 'bg-slate-950 text-white dark:bg-sky-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'}`}>
                            Live PL/SQL Terminal
                        </button>
                    </div>

                    {/* Panel Container */}
                    <div className="relative rounded-[36px] border border-white/70 dark:border-slate-800 bg-[linear-gradient(160deg,rgba(255,255,255,0.92),rgba(232,242,252,0.82))] dark:bg-[linear-gradient(160deg,rgba(15,23,42,0.95),rgba(9,15,28,0.9))] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl min-h-[500px] flex flex-col justify-between">
                        {rightPanel === 'profile' ? (
                            <div className="rounded-[30px] bg-[linear-gradient(180deg,#0f2749_0%,#173d6b_52%,#205b8f_100%)] dark:bg-[linear-gradient(180deg,#090d16_0%,#111827_52%,#1e293b_100%)] p-5 text-white flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sky-200/90">
                                                Featured Profile
                                            </p>
                                            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight">Dilder Hossain</h2>
                                            <p className="mt-2.5 max-w-xs text-xs leading-6 text-sky-100/85">
                                                Oracle APEX, PL/SQL, ERP modules, reporting systems, and business process automation.
                                            </p>
                                        </div>
                                        <div className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-sky-100">
                                            Dhaka
                                        </div>
                                    </div>

                                    <div className="relative mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4">
                                        <div className="absolute left-1/2 top-4 h-56 w-56 -translate-x-1/2 rounded-full border border-white/10" />
                                        <div className="absolute left-1/2 top-8 h-48 w-48 -translate-x-1/2 rounded-full border border-white/5" />
                                        <div className="relative mx-auto aspect-[4/5] max-w-[17rem] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#e0f2fe_0%,#f8fbff_100%)] shadow-[0_24px_50px_rgba(2,6,23,0.3)]">
                                            <Image
                                                src="/images/resume-profile.jpg"
                                                alt="Dilder Hossain portrait"
                                                fill
                                                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                                                sizes="(max-width: 1024px) 90vw, 30rem"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 grid gap-3">
                                    {focusCards.map((item) => (
                                        <div
                                            key={item.title}
                                            className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur transition-all duration-300 hover:bg-white/15">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-200">{item.title}</p>
                                            <p className="mt-1.5 text-xs leading-5 text-sky-50/90">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            /* Live PL/SQL Terminal Simulator */
                            <div className="terminal-mock flex flex-col h-full bg-slate-950 text-emerald-450 p-4 min-h-[480px]">
                                <div className="terminal-header border-b border-slate-900 pb-3 mb-3 flex items-center justify-between">
                                    <div className="terminal-dots flex gap-1.5">
                                        <span className="terminal-dot bg-red-500 h-2.5 w-2.5 rounded-full" />
                                        <span className="terminal-dot bg-yellow-500 h-2.5 w-2.5 rounded-full" />
                                        <span className="terminal-dot bg-green-500 h-2.5 w-2.5 rounded-full" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                                        SQLPlus Console
                                    </span>
                                    <button 
                                        onClick={clearTerminal} 
                                        className="text-[10px] hover:text-white text-slate-500 uppercase tracking-widest border border-slate-800 rounded px-2 py-0.5 transition-colors">
                                        Clear
                                    </button>
                                </div>

                                {/* Outputs */}
                                <div className="flex-1 overflow-y-auto max-h-[300px] text-[11px] leading-5 pr-2 font-mono scrollbar-thin scrollbar-thumb-slate-800">
                                    {terminalLogs.map((log, index) => (
                                        <div key={index} className={log.startsWith('SQL>') ? 'text-white' : log.startsWith('[SUCCESS]') ? 'text-sky-400' : log.startsWith('[ERROR]') ? 'text-rose-500' : log.startsWith('[WARN]') ? 'text-amber-500' : 'text-emerald-400'}>
                                            {log}
                                        </div>
                                    ))}
                                    {isTyping && (
                                        <div className="flex items-center gap-1 text-white">
                                            <span>{'SQL> Running query...'}</span>
                                            <span className="h-3 w-1.5 bg-white animate-blink" />
                                        </div>
                                    )}
                                    <div ref={terminalEndRef} />
                                </div>

                                {/* Clickable inputs */}
                                <div className="mt-4 border-t border-slate-900 pt-3">
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                                        Execute Query Shortcut:
                                    </p>
                                    <div className="flex flex-col gap-1.5">
                                        <button 
                                            disabled={isTyping}
                                            onClick={() => runTerminalCommand('SELECT * FROM skills;')}
                                            className="text-left text-[11px] font-mono hover:bg-slate-900 disabled:opacity-50 text-sky-400 hover:text-white px-2 py-1.5 border border-slate-800 rounded transition-all">
                                            &gt; SELECT * FROM skills;
                                        </button>
                                        <button 
                                            disabled={isTyping}
                                            onClick={() => runTerminalCommand('EXECUTE db_tuner.optimize_query(\'JMI_SALES_REPORT\');')}
                                            className="text-left text-[11px] font-mono hover:bg-slate-900 disabled:opacity-50 text-sky-400 hover:text-white px-2 py-1.5 border border-slate-800 rounded transition-all">
                                            {"> EXECUTE db_tuner.optimize_query('JMI_SALES_REPORT');"}
                                        </button>
                                        <button 
                                            disabled={isTyping}
                                            onClick={() => runTerminalCommand('SELECT * FROM experience WHERE company = \'MononSoft\';')}
                                            className="text-left text-[11px] font-mono hover:bg-slate-900 disabled:opacity-50 text-sky-400 hover:text-white px-2 py-1.5 border border-slate-800 rounded transition-all">
                                            &gt; SELECT * FROM experience...
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Side tags visible in desktop 2xl only */}
                        <div className="absolute -left-6 top-16 hidden w-40 rounded-[22px] border border-white/60 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-4 shadow-xl backdrop-blur 2xl:block transition-all duration-300">
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Core Focus</p>
                            <p className="mt-1.5 text-sm font-bold text-slate-900 dark:text-white">ERP + Database + Delivery</p>
                            <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">
                                Clean architecture for practical business systems.
                            </p>
                        </div>

                        <div className="absolute -right-5 bottom-20 hidden w-44 rounded-[22px] border border-sky-200/80 dark:border-sky-900/60 bg-sky-50/95 dark:bg-slate-900/95 p-4 shadow-xl 2xl:block transition-all duration-300">
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-400">Impact</p>
                            <p className="mt-1.5 text-3xl font-bold tracking-tight text-sky-950 dark:text-white">4000+</p>
                            <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-455">Concurrent users supported through enterprise ERP delivery.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative z-20 mx-auto max-w-7xl px-5 pb-16 md:px-10 md:pb-24">
                <div className="rounded-[34px] border border-white/60 dark:border-slate-800 bg-white/72 dark:bg-slate-900/50 p-3 shadow-[0_22px_60px_rgba(15,23,42,0.04)] dark:shadow-[0_22px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
                    <div className="grid gap-4 rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(236,246,255,0.92))] dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.85),rgba(17,24,39,0.92))] p-3 lg:grid-cols-3">
                        <div className="rounded-[24px] bg-slate-950 dark:bg-slate-900 px-6 py-6 text-white border border-slate-900 dark:border-slate-800 shadow">
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-400">What I Build</p>
                            <h3 className="mt-3 font-heading text-2xl font-bold">Oracle-backed business platforms</h3>
                            <p className="mt-3 text-xs leading-6 text-slate-300 dark:text-slate-400">
                                ERP modules, dashboards, reports, automation pipelines, APIs, and stable database-heavy systems.
                            </p>
                        </div>

                        <div className="rounded-[24px] bg-white dark:bg-slate-950/60 px-6 py-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Industries</p>
                            <h3 className="mt-3 font-heading text-2xl font-bold text-slate-900 dark:text-white">Pharma, healthcare, operations</h3>
                            <p className="mt-3 text-xs leading-6 text-slate-600 dark:text-slate-400">
                                Delivery experience for organizations including Nipro JMI Pharma, Unido Pharma, Bangladesh Eye Hospital, and related concerns.
                            </p>
                        </div>

                        <div className="rounded-[24px] bg-[linear-gradient(135deg,#e0f2fe_0%,#eff6ff_100%)] dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.45)_0%,rgba(3,105,161,0.2)_100%)] px-6 py-6 border border-sky-100/50 dark:border-sky-900/20 shadow-sm">
                            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-350">Approach</p>
                            <h3 className="mt-3 font-heading text-2xl font-bold text-slate-950 dark:text-white">Business-first engineering</h3>
                            <p className="mt-3 text-xs leading-6 text-slate-700 dark:text-slate-300">
                                I translate complex operational requirements into maintainable applications that teams can trust every day.
                             </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
