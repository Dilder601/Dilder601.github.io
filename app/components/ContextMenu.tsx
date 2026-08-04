'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function ContextMenu({ children }: any) {
    const router = useRouter();
    const [dropdown, setDropdownContext] = useState(false);
    const [editable, setEditable] = useState(false);
    const [xYPosition, setXyPosition] = useState({ x: 0, y: 0 });
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Sync theme on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isDark = document.documentElement.classList.contains('dark');
            setTheme(isDark ? 'dark' : 'light');
        }
    }, []);

    const toggleTheme = () => {
        setDropdownContext(false);
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

    const contentEditable = () => {
        setDropdownContext(false);
        const nextState = !editable;
        setEditable(nextState);
        document.body.contentEditable = nextState ? 'true' : 'false';
    };

    const handleContextMenu = (event: any) => {
        event.preventDefault();
        setDropdownContext(false);
        
        // Offset a bit to keep under cursor nicely
        const currentPosition = {
            x: event.clientX,
            y: event.clientY
        };
        
        // Prevent context menu from overflowing the viewport
        if (typeof window !== 'undefined') {
            const screenW = window.innerWidth;
            const screenH = window.innerHeight;
            const menuW = 200; // estimated width
            const menuH = 260; // estimated height
            
            if (currentPosition.x + menuW > screenW) {
                currentPosition.x = screenW - menuW - 10;
            }
            if (currentPosition.y + menuH > screenH) {
                currentPosition.y = screenH - menuH - 10;
            }
        }

        setXyPosition(currentPosition);
        setDropdownContext(true);
    };

    const hideContext = (event: any) => {
        if (!event.target.closest('.context-menu')) {
            setDropdownContext(false);
        }
    };

    const togglePhoto = () => {
        setDropdownContext(false);
        document.querySelector('.resume-photo-panel')?.classList.toggle('hidden');
    };

    const toggleCoverLetter = () => {
        setDropdownContext(false);
        document.querySelector('.cover-letter')?.classList.toggle('hidden');
    };

    return (
        <div onContextMenu={handleContextMenu} onClick={hideContext}>
            {children}
            {dropdown && (
                <div
                    style={{ top: xYPosition.y, left: xYPosition.x }}
                    className="context-menu fixed z-50 w-52 rounded-2xl border border-slate-200/80 bg-white/80 p-1.5 shadow-[0_20px_50px_rgba(15,23,42,0.15)] backdrop-blur-xl transition-all duration-200 dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] print:hidden">
                    <ul className="space-y-0.5 text-xs text-slate-700 dark:text-slate-350">
                        {/* Go Home */}
                        <li>
                            <button
                                onClick={() => { setDropdownContext(false); router.push('/'); }}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white">
                                <span className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span>Go to Home</span>
                                </span>
                            </button>
                        </li>

                        {/* Switch Theme */}
                        <li>
                            <button
                                onClick={toggleTheme}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white">
                                <span className="flex items-center gap-2">
                                    {theme === 'light' ? (
                                        <>
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                            </svg>
                                            <span>Dark Mode</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.062.062a5.002 5.002 0 01-7.01 0l-.002-.002z" />
                                            </svg>
                                            <span>Light Mode</span>
                                        </>
                                    )}
                                </span>
                            </button>
                        </li>

                        <div className="h-[1px] bg-slate-200/70 dark:bg-slate-850 my-1" />

                        {/* Print */}
                        <li>
                            <button
                                onClick={() => { setDropdownContext(false); window.print(); }}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white">
                                <span className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                    </svg>
                                    <span>Print / Save PDF</span>
                                </span>
                                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">Ctrl+P</span>
                            </button>
                        </li>

                        {/* Toggle Editable */}
                        <li>
                            <button
                                onClick={contentEditable}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white">
                                <span className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    <span>{editable ? 'Lock Resume Text' : 'Edit Text Inline'}</span>
                                </span>
                                {editable && (
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.15)]" />
                                )}
                            </button>
                        </li>

                        <div className="h-[1px] bg-slate-200/70 dark:bg-slate-850 my-1" />

                        {/* Photo Toggle */}
                        <li>
                            <button
                                onClick={togglePhoto}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white">
                                <span className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Toggle Photo</span>
                                </span>
                            </button>
                        </li>

                        {/* Cover Letter Toggle */}
                        <li>
                            <button
                                onClick={toggleCoverLetter}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white">
                                <span className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Toggle Cover Letter</span>
                                </span>
                            </button>
                        </li>

                        {/* Direct Download */}
                        <li>
                            <a
                                href="/dilder.pdf"
                                download
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl transition-colors hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white">
                                <span className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span>Download PDF</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default ContextMenu;
