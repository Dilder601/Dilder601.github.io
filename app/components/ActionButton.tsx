'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ActionButton() {
    const [editable, setEditable] = useState(false);
    const [showCoverLetter, setShowCoverLetter] = useState(true);
    const [showPhoto, setShowPhoto] = useState(true);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    // Sync theme on load
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
            triggerToast('Dark mode enabled');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
            triggerToast('Light mode enabled');
        }
    };

    const triggerToast = (msg: string) => {
        setToastMessage(msg);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 4000);
    };

    const toggleEditMode = () => {
        const nextState = !editable;
        setEditable(nextState);
        document.body.contentEditable = nextState ? 'true' : 'false';
        
        if (nextState) {
            triggerToast('Edit Mode Enabled. Click any text on the page to customize it!');
        } else {
            triggerToast('Edit Mode Disabled. Changes are locked.');
        }
    };

    const triggerPrint = () => {
        window.print();
    };

    const togglePhotoVisibility = () => {
        const panel = document.querySelector('.resume-photo-panel');
        if (panel) {
            panel.classList.toggle('hidden');
            const isHidden = panel.classList.contains('hidden');
            setShowPhoto(!isHidden);
            triggerToast(isHidden ? 'Profile photo hidden' : 'Profile photo visible');
        }
    };

    const toggleCoverLetterVisibility = () => {
        const letter = document.querySelector('.cover-letter');
        if (letter) {
            letter.classList.toggle('hidden');
            const isHidden = letter.classList.contains('hidden');
            setShowCoverLetter(!isHidden);
            triggerToast(isHidden ? 'Cover letter hidden' : 'Cover letter visible');
        }
    };

    return (
        <>
            {/* Desktop Side Dock (Fixed Right, centered vertically) */}
            <div className="floating-dock">
                <Link href="/" className="dock-btn" title="Go back to Home">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="dock-tooltip">Go Home</span>
                </Link>

                <button onClick={toggleTheme} className="dock-btn" title="Toggle Light/Dark Theme">
                    {theme === 'light' ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.062.062a5.002 5.002 0 01-7.01 0l-.002-.002z" />
                        </svg>
                    )}
                    <span className="dock-tooltip">Switch Theme</span>
                </button>

                <div className="w-6 h-[1px] bg-slate-200 dark:bg-slate-800 my-1" />

                <button 
                    onClick={toggleEditMode} 
                    className={`dock-btn ${editable ? 'dock-btn-active' : ''}`} 
                    title="Toggle Editable Mode">
                    {editable ? (
                        <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    )}
                    <span className="dock-tooltip">{editable ? 'Lock Text' : 'Edit Resume'}</span>
                </button>

                <button onClick={togglePhotoVisibility} className={`dock-btn ${!showPhoto ? 'opacity-60' : ''}`} title="Toggle Profile Photo">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="dock-tooltip">{showPhoto ? 'Hide Photo' : 'Show Photo'}</span>
                </button>

                <button onClick={toggleCoverLetterVisibility} className={`dock-btn ${!showCoverLetter ? 'opacity-60' : ''}`} title="Toggle Cover Letter">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="dock-tooltip">{showCoverLetter ? 'Hide Cover Letter' : 'Show Cover Letter'}</span>
                </button>

                <div className="w-6 h-[1px] bg-slate-200 dark:bg-slate-800 my-1" />

                <button onClick={triggerPrint} className="dock-btn" title="Print Resume / Save as PDF">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    <span className="dock-tooltip">Print / PDF</span>
                </button>

                <a href="/dilder.pdf" download className="dock-btn" title="Download Standard PDF">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="dock-tooltip">Download PDF</span>
                </a>
            </div>

            {/* Mobile Bottom Glass Dock (Horizontal layout centered at bottom) */}
            <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-2 rounded-full border border-white/50 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-2 shadow-lg backdrop-blur-md max-w-[92vw] overflow-x-auto print:hidden">
                <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </Link>

                <button onClick={toggleTheme} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
                    {theme === 'light' ? (
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    ) : (
                        <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 9H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.062.062a5.002 5.002 0 01-7.01 0l-.002-.002z" />
                        </svg>
                    )}
                </button>

                <button 
                    onClick={toggleEditMode} 
                    className={`flex h-9 w-9 items-center justify-center rounded-full border text-slate-600 dark:text-slate-300 ${editable ? 'border-emerald-500 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}`}>
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>

                <button onClick={togglePhotoVisibility} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </button>

                <button onClick={toggleCoverLetterVisibility} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </button>

                <button onClick={triggerPrint} className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                </button>
            </div>

            {/* Custom Toast Message */}
            <div className={`toast-container ${showToast ? 'toast-active' : ''}`}>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-emerald-100">
                    {toastMessage}
                </span>
            </div>
        </>
    );
}
