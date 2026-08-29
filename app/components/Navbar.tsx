'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certs' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
    const [visible, setVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

    // Sync theme on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('theme');
            if (stored === 'dark' || stored === 'light') {
                setTheme(stored as 'dark' | 'light');
            } else {
                setTheme('system');
            }
        }
    }, []);

    const applyTheme = (t: 'light' | 'dark' | 'system') => {
        const root = document.documentElement;
        if (t === 'dark') {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else if (t === 'light') {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.removeItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) root.classList.add('dark');
            else root.classList.remove('dark');
        }
        setTheme(t);
    };

    // Slide navbar in after short delay
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    // Scroll handler for scrollspy active indicator and DILDER logo reveal on scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 80);

            const scrollPos = currentY + 140;
            const sections = navItems.map(item => {
                const el = document.querySelector(item.href);
                if (el) {
                    const top = (el as HTMLElement).offsetTop;
                    const height = (el as HTMLElement).offsetHeight;
                    return { id: item.href, top, bottom: top + height };
                }
                return null;
            }).filter(Boolean);

            let currentSec = '';
            for (const sec of sections) {
                if (sec && scrollPos >= sec.top && scrollPos <= sec.bottom) {
                    currentSec = sec.id;
                    break;
                }
            }
            setActiveSection(currentSec);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

    return (
        <>
            {/* Centered pill nav — desktop */}
            <nav
                aria-label="Primary"
                className={`fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 transition-all duration-700 ease-in-out md:block print:hidden ${
                    visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-24 pointer-events-none'
                }`}
            >
                <ul className="border-foreground/10 flex items-center gap-0.5 rounded-full border border-slate-200/60 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 px-2.5 py-1.5 shadow-lg shadow-emerald-950/5 backdrop-blur-xl transition-all duration-300">
                    {/* Dilder Logo — Hidden at top, smoothly slides and expands from left on scroll */}
                    <li
                        className={`flex items-center overflow-hidden transition-all duration-500 ease-out ${
                            scrolled
                                ? 'max-w-28 opacity-100 translate-x-0'
                                : 'max-w-0 opacity-0 -translate-x-4 pointer-events-none'
                        }`}
                    >
                        <Link
                            aria-label="Home"
                            href="/"
                            className="block py-1.5 pl-1.5 pr-1 rounded-sm text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
                        >
                            <span className="text-sm font-extrabold tracking-[0.16em] whitespace-nowrap uppercase">
                                Dilder
                            </span>
                        </Link>
                        <span aria-hidden="true" className="bg-slate-200 dark:bg-slate-700 h-4 w-px mx-1.5 shrink-0" />
                    </li>

                    {navItems.map(item => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={`block text-sm whitespace-nowrap transition-all duration-200 rounded-full px-3 py-1.5 font-medium ${
                                    activeSection === item.href
                                        ? 'bg-emerald-600 dark:bg-emerald-500 text-white shadow-xs'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                                }`}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li aria-hidden="true" className="bg-slate-200 dark:bg-slate-700 mx-1 h-4 w-px" />
                    <li>
                        <Link
                            href="/articles"
                            className="block text-sm whitespace-nowrap transition-colors rounded-full px-3 py-1.5 font-medium text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                        >
                            Articles
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/now"
                            className="block text-sm whitespace-nowrap transition-colors rounded-full px-3 py-1.5 font-medium text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white"
                        >
                            Now
                        </Link>
                    </li>
                    <li aria-hidden="true" className="bg-slate-200 dark:bg-slate-700 mx-1 h-4 w-px" />
                    <li>
                        <Link
                            href="/resume"
                            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-emerald-600 dark:hover:bg-emerald-400 hover:text-white dark:hover:text-slate-950 flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 shadow-xs"
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Theme toggle — top right, desktop */}
            <div className={`fixed top-4 right-4 z-50 hidden md:block transition-all duration-700 ease-in-out print:hidden ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24 pointer-events-none'
            }`}>
                <button
                    type="button"
                    onClick={() => {
                        const isCurrentlyDark = document.documentElement.classList.contains('dark');
                        applyTheme(isCurrentlyDark ? 'light' : 'dark');
                    }}
                    aria-label="Toggle theme"
                    title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    className="border border-slate-200/80 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 relative flex size-11 cursor-pointer items-center justify-center rounded-full shadow-lg shadow-emerald-950/5 backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-90 hover:border-emerald-300 dark:hover:border-emerald-700"
                >
                    <span className="hidden dark:block transition-transform duration-500 rotate-0 hover:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="4"/>
                            <path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2m-4.93-7.07-1.41 1.41M6.34 17.66l-1.41 1.41"/>
                        </svg>
                    </span>
                    <span className="block dark:hidden transition-transform duration-500 rotate-0 hover:-rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
                        </svg>
                    </span>
                </button>
            </div>

            {/* Mobile nav button + menu */}
            <div className={`fixed top-4 right-4 z-50 md:hidden transition-all duration-700 print:hidden ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24 pointer-events-none'
            }`}>
                <button
                    type="button"
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="border border-slate-200/60 dark:border-slate-700/50 bg-white/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 relative flex size-11 cursor-pointer items-center justify-center rounded-full shadow-lg shadow-black/5 backdrop-blur-lg transition-colors"
                >
                    {mobileOpen ? (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M4 12h16M4 18h16M4 6h16"/></svg>
                    )}
                </button>

                {/* Mobile dropdown */}
                <nav
                    aria-label="Primary"
                    className={`border border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/80 absolute top-full right-0 mt-2 w-52 origin-top-right overflow-y-auto rounded-2xl p-2 shadow-xl backdrop-blur-lg transition-all duration-200 ease-out ${
                        mobileOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none invisible'
                    }`}
                >
                    <Link
                        aria-label="Home"
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 flex min-h-11 items-center rounded-xl px-4 py-3 transition-colors"
                    >
                        <span className="text-sm font-bold tracking-[0.18em] uppercase">Dilder</span>
                    </Link>
                    <div aria-hidden="true" className="bg-slate-200 dark:bg-slate-700 my-1 h-px" />
                    <ul className="flex flex-col gap-0.5 mb-1">
                        {navItems.map(item => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`text-sm whitespace-nowrap transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 flex min-h-11 items-center rounded-xl px-4 ${
                                        activeSection === item.href
                                            ? 'bg-emerald-600 dark:bg-emerald-500 text-white font-semibold'
                                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div aria-hidden="true" className="bg-slate-200 dark:bg-slate-700 my-1 h-px" />
                    <ul className="flex flex-col gap-0.5">
                        <li>
                            <Link
                                href="/articles"
                                onClick={() => setMobileOpen(false)}
                                className="text-sm whitespace-nowrap transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 flex min-h-11 items-center rounded-xl px-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                            >
                                Articles
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/now"
                                onClick={() => setMobileOpen(false)}
                                className="text-sm whitespace-nowrap transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50 flex min-h-11 items-center rounded-xl px-4 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                            >
                                Now
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resume"
                                onClick={() => setMobileOpen(false)}
                                className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center rounded-full mx-2 my-1 py-2 text-sm font-semibold transition-colors"
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                    <div aria-hidden="true" className="bg-slate-200 dark:bg-slate-700 my-1 h-px" />

                    <div className="flex items-center justify-between px-4 py-2">
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Theme</span>
                        <div className="flex items-center gap-0.5">
                            {([
                                { key: 'system', Icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg> },
                                { key: 'light', Icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2m-4.93-7.07-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg> },
                                { key: 'dark', Icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg> },
                            ] as const).map(({ key, Icon }) => (
                                <button
                                    key={key}
                                    type="button"
                                    aria-label={`${key} theme`}
                                    onClick={() => applyTheme(key)}
                                    className={`flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors ${
                                        theme === key
                                            ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                                            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                                    }`}
                                >
                                    <Icon />
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
