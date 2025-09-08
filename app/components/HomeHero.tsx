import Image from 'next/image';
import Link from 'next/link';

export default function HomeHero() {
    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* background */}
            <div className="absolute inset-0 -z-20">
                <Image src="/mesh-2.png" alt="background" fill className="object-cover opacity-20" />
            </div>
            {/* animated dots layer */}
            <div className="absolute inset-0 -z-10 opacity-[.10] bg-dots pan-slow" />
            {/* animated blobs */}
            <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary-400/30 blur-3xl lg:-left-12 lg:h-96 lg:w-96 animate-blob" />
            <div className="pointer-events-none absolute -right-24 top-48 -z-10 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl lg:-right-12 lg:h-96 lg:w-96 animate-blob animation-delay-2000" />
            {/* aurora beams */}
            <div className="aurora -z-10">
                <div className="beam" style={{ left: '-10%', top: '10%', background: 'radial-gradient(closest-side, rgba(59,130,246,0.6), transparent 60%)' }} />
                <div className="beam" style={{ right: '-5%', top: '30%', background: 'radial-gradient(closest-side, rgba(99,102,241,0.6), transparent 60%)', animationDelay: '4s' }} />
                <div className="beam" style={{ left: '20%', bottom: '-10%', background: 'radial-gradient(closest-side, rgba(16,185,129,0.5), transparent 60%)', animationDelay: '8s' }} />
            </div>

            {/* navbar */}
            <header className="mx-auto max-w-6xl px-6 md:px-10 pt-6 flex items-center justify-between">
                <Link href="/" className="font-extrabold tracking-tight text-xl">
                    <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">Dilder</span>
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
                    <Link href="/resume" className="hover:text-primary-600">Resume</Link>
                    <a href="https://github.com/Dilder601" target="_blank" rel="noreferrer noopener" className="hover:text-primary-600">GitHub</a>
                    <a href="https://www.linkedin.com/in/dilder-orclapex/" target="_blank" rel="noreferrer noopener" className="hover:text-primary-600">LinkedIn</a>
                    <Link href="/resume" className="inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-white shadow hover:bg-primary-700">Download</Link>
                </nav>
            </header>

            <section className="mx-auto max-w-6xl px-6 md:px-10 py-10 md:py-16 grid gap-12 md:grid-cols-2 items-center">
                {/* Left: Heading + CTA */}
                <div>
                    <p className="mb-2 text-sm tracking-widest text-primary-600 uppercase">Software Engineer</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        <span className="bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                            Dilder Hossain
                        </span>
                    </h1>
                    <p className="mt-4 text-slate-600 max-w-xl">
                        Oracle APEX and PL/SQL developer focusing on scalable ERP modules, data-driven web apps, and
                        performance-tuned databases.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                            href="/resume"
                            aria-label="Download Resume"
                            className="btn-animated animate-breath inline-flex items-center rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 px-6 py-3 text-white shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5">
                            Download Resume
                        </Link>
                        <a
                            href="mailto:dilder.hossain.feni@gmail.com"
                            className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2.5 text-slate-700 hover:bg-slate-50">
                            Contact Me
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="mt-6 flex items-center gap-4">
                        <a href="https://github.com/Dilder601" target="_blank" rel="noreferrer noopener" title="GitHub">
                            <Image src="/images/github.png" alt="GitHub" width={22} height={22} className="opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://www.linkedin.com/in/dilder-orclapex/" target="_blank" rel="noreferrer noopener" title="LinkedIn">
                            <Image src="/images/linkedin.png" alt="LinkedIn" width={22} height={22} className="opacity-80 hover:opacity-100" />
                        </a>
                        <a href="https://leetcode.com/DilderHossain/" target="_blank" rel="noreferrer noopener" title="LeetCode">
                            <Image src="/images/leetcode.svg" alt="LeetCode" width={22} height={22} className="opacity-80 hover:opacity-100" />
                        </a>
                    </div>

                    {/* quick skills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {['Oracle APEX', 'PL/SQL', 'ERP Modules', 'REST/JSON'].map((t) => (
                            <span key={t} className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 shadow-sm">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: Avatar */}
                <div className="relative mx-auto h-60 w-60 md:h-[22rem] md:w-[22rem]">
                    <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary-200 to-indigo-200 blur-2xl" />
                    <div className="relative h-full w-full rounded-full ring-8 ring-white shadow-2xl">
                        <Image
                            src="/images/profile.png"
                            alt="Profile"
                            fill
                            className="object-cover rounded-full"
                            sizes="(max-width: 768px) 15rem, 22rem"
                        />
                    </div>
                </div>
            </section>

            {/* stats/footer strip */}
            <section className="mx-auto max-w-6xl px-6 md:px-10 pb-12">
                <div className="grid grid-cols-1 gap-4 rounded-2xl border bg-white/60 p-4 md:grid-cols-3">
                    <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-primary-500"></span>
                        <p className="text-sm text-slate-700">4+ years building APEX/PLSQL & ERP</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-indigo-500"></span>
                        <p className="text-sm text-slate-700">Performance tuning & reporting expertise</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        <p className="text-sm text-slate-700">Available for full‑time opportunities</p>
                    </div>
                </div>
            </section>

            {/* animated waves */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10">
                <div className="relative h-32 md:h-48 overflow-hidden">
                    {/* back wave */}
                    <svg
                        className="absolute bottom-0 left-0 h-full w-[200%] animate-wave-slow will-change-transform"
                        viewBox="0 0 1800 240"
                        fill="none"
                        preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="waveGradBack" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0 120 C 150 200 350 40 500 120 S 850 200 1000 120 S 1150 40 1300 120 S 1650 200 1800 120 V 240 H 0 Z"
                            fill="url(#waveGradBack)"
                        />
                    </svg>
                    {/* front wave */}
                    <svg
                        className="absolute bottom-0 left-0 h-full w-[200%] animate-wave-fast will-change-transform"
                        viewBox="0 0 1800 240"
                        fill="none"
                        preserveAspectRatio="none"
                        style={{ animationDirection: 'reverse' }}>
                        <defs>
                            <linearGradient id="waveGradFront" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.35" />
                                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0 140 C 140 220 360 60 520 140 S 860 220 1020 140 S 1180 60 1340 140 S 1660 220 1800 140 V 240 H 0 Z"
                            fill="url(#waveGradFront)"
                        />
                    </svg>
                </div>
            </div>
        </main>
    );
}
