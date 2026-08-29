'use client';

import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const topics = [
    'Oracle APEX ERP',
    'SQL Performance Tuning',
    'ORDS REST APIs',
    'Job Opportunity',
    'General Inquiry'
];

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('Oracle APEX ERP');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

    const ref = useScrollReveal();

    const validate = () => {
        const e: typeof errors = {};
        if (!name.trim()) e.name = 'Name is required.';
        if (!email.trim()) e.email = 'Email is required.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.';
        if (!message.trim()) e.message = 'Message is required.';
        return e;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setErrors({});
        setStatus('submitting');

        const subject = encodeURIComponent(`[${selectedTopic}] Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${selectedTopic}\n\nMessage:\n${message}`);
        const mailtoHref = `mailto:dilder.hossain.feni@gmail.com?subject=${subject}&body=${body}`;

        setTimeout(() => {
            window.location.href = mailtoHref;
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
            setTimeout(() => setStatus('idle'), 5000);
        }, 500);
    };

    return (
        <section
            id="contact"
            ref={ref as React.RefObject<HTMLElement>}
            className="relative px-5 py-20 md:px-10 md:py-28 overflow-hidden bg-gradient-to-b from-transparent via-emerald-50/20 to-transparent dark:via-emerald-950/10 border-t border-slate-200/60 dark:border-slate-800/80"
        >
            {/* Ambient background glow */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[400px] w-[500px] rounded-full bg-emerald-500/10 blur-[130px] dark:bg-emerald-500/15" />
                <div className="absolute bottom-0 right-1/4 h-[350px] w-[450px] rounded-full bg-rose-400/10 blur-[120px] dark:bg-rose-500/10" />
            </div>

            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-14 sm:mb-18 text-center reveal">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-3.5 py-1 rounded-full border border-emerald-200/80 dark:border-emerald-800/60 shadow-xs">
                        Get In Touch
                    </span>
                    <h2 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        Let&apos;s Build Something Resilient
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base leading-7 text-slate-600 dark:text-slate-300">
                        Whether you want to optimize mission-critical database queries, architect an enterprise ERP solution, or discuss exciting technical opportunities — my inbox is always open.
                    </p>
                </div>

                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start">
                    {/* Left Column: Direct Contacts & Availability */}
                    <div className="space-y-4 reveal reveal-delay-1">
                        {/* Status Card */}
                        <div className="rounded-[28px] border border-emerald-200/80 dark:border-emerald-800/60 bg-gradient-to-br from-emerald-50/80 to-teal-50/40 dark:from-emerald-950/40 dark:to-slate-900/60 p-6 backdrop-blur shadow-sm">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 dark:text-emerald-200 font-heading">
                                    Current Availability
                                </h3>
                            </div>
                            <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                                Available for Engineering Roles &amp; High-Impact Consulting
                            </p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                                Based in Dhaka, Bangladesh (UTC+6). Response time typically within 24 hours.
                            </p>
                        </div>

                        {/* Phone */}
                        <a
                            href="tel:+8801635000601"
                            className="group rounded-[26px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-5 backdrop-blur shadow-sm flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700/60"
                        >
                            <div className="flex items-center gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40 group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Direct Phone / WhatsApp</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        +880 1635 000 601
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-semibold text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all">
                                &rarr;
                            </span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:dilder.hossain.feni@gmail.com"
                            className="group rounded-[26px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-5 backdrop-blur shadow-sm flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700/60"
                        >
                            <div className="flex items-center gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-900/40 group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Direct Email</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                        dilder.hossain.feni@gmail.com
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-semibold text-slate-400 group-hover:text-teal-500 group-hover:translate-x-0.5 transition-all">
                                &rarr;
                            </span>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/dilder-orclapex/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group rounded-[26px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-5 backdrop-blur shadow-sm flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700/60"
                        >
                            <div className="flex items-center gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/40 group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Professional Network</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        linkedin.com/in/dilder-orclapex
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all">
                                &rarr;
                            </span>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/Dilder601"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group rounded-[26px] border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-5 backdrop-blur shadow-sm flex items-center justify-between transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-slate-400 dark:hover:border-slate-600"
                        >
                            <div className="flex items-center gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Open Source &amp; Code</p>
                                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                                        github.com/Dilder601
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-700 group-hover:translate-x-0.5 transition-all">
                                &rarr;
                            </span>
                        </a>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="rounded-[32px] border border-slate-200/90 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-8 sm:p-10 backdrop-blur-xl shadow-lg shadow-emerald-950/5 reveal reveal-delay-2">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                                <div className="flex size-16 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                                    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-950 dark:text-white font-heading">Your email client is opening!</h3>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm leading-relaxed">
                                    A pre-filled message has been prepared for <strong className="text-emerald-700 dark:text-emerald-300">dilder.hossain.feni@gmail.com</strong>. Hit send in your mail app to connect directly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                {/* Topic Selection Pills */}
                                <div>
                                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-3">
                                        What would you like to discuss?
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {topics.map((t) => (
                                            <button
                                                key={t}
                                                type="button"
                                                onClick={() => setSelectedTopic(t)}
                                                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 border ${
                                                    selectedTopic === t
                                                        ? 'bg-emerald-600 dark:bg-emerald-500 text-white border-emerald-600 dark:border-emerald-500 shadow-xs'
                                                        : 'border-slate-200/80 dark:border-slate-700/80 bg-slate-50 dark:bg-slate-950/60 text-slate-650 dark:text-slate-300 hover:border-emerald-300 dark:hover:border-emerald-700'
                                                }`}
                                            >
                                                {t}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="form-name" className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="form-name"
                                            value={name}
                                            onChange={(e) => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: '' })); }}
                                            placeholder="e.g. John Doe"
                                            className={`w-full rounded-2xl border px-4 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50/50 dark:bg-slate-950/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors ${errors.name ? 'border-rose-400' : 'border-slate-200 dark:border-slate-700'}`}
                                        />
                                        {errors.name && <p className="mt-1.5 text-[11px] text-rose-500">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="form-email" className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="form-email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: '' })); }}
                                            placeholder="john@company.com"
                                            className={`w-full rounded-2xl border px-4 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50/50 dark:bg-slate-950/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors ${errors.email ? 'border-rose-400' : 'border-slate-200 dark:border-slate-700'}`}
                                        />
                                        {errors.email && <p className="mt-1.5 text-[11px] text-rose-500">{errors.email}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="form-message" className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="form-message"
                                        rows={4}
                                        value={message}
                                        onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors(p => ({ ...p, message: '' })); }}
                                        placeholder="Describe your project, database optimization need, or role..."
                                        className={`w-full rounded-2xl border px-4 py-3 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50/50 dark:bg-slate-950/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors resize-none ${errors.message ? 'border-rose-400' : 'border-slate-200 dark:border-slate-700'}`}
                                    />
                                    {errors.message && <p className="mt-1.5 text-[11px] text-rose-500">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    id="contact-submit-btn"
                                    className="group w-full inline-flex justify-center items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 hover:-translate-y-0.5 disabled:opacity-50 disabled:translate-y-0 transition-all duration-200"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            <span>Preparing Message…</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                                    Opens your default mail app pre-filled with your message.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
