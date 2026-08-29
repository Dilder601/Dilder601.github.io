import Link from 'next/link';
import { articles } from './data';

export default function ArticlesPage() {
    return (
        <div className="relative min-h-screen bg-white dark:bg-slate-950 px-5 py-24 md:px-10 selection:bg-indigo-500/30">
            {/* Background blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] h-[60vh] w-[60vw] rounded-full bg-indigo-500/8 mix-blend-multiply blur-[120px] dark:bg-indigo-500/15 dark:mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] h-[50vh] w-[50vw] rounded-full bg-violet-500/8 mix-blend-multiply blur-[100px] dark:bg-violet-500/12 dark:mix-blend-screen" />
            </div>

            <div className="mx-auto max-w-3xl">
                {/* Back link */}
                <Link
                    href="/"
                    className="mb-10 inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to portfolio
                </Link>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                        Articles
                    </h1>
                    <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                        Technical writing on Oracle APEX, PL/SQL engineering, ERP architecture, and database performance tuning.
                    </p>
                </div>

                {/* Article list */}
                <ul className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
                    {articles.map((article) => (
                        <li key={article.slug} className="group py-8 first:pt-0">
                            <article>
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${article.categoryColor}`}>
                                        {article.category}
                                    </span>
                                    <time className="text-xs text-slate-400 dark:text-slate-500">{article.date}</time>
                                    <span className="text-xs text-slate-300 dark:text-slate-600">·</span>
                                    <span className="text-xs text-slate-400 dark:text-slate-500">{article.readTime}</span>
                                </div>

                                <h2 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-2">
                                    <Link href={`/articles/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </h2>
                                <p className="text-sm leading-7 text-slate-600 dark:text-slate-400 mb-4">
                                    {article.summary}
                                </p>
                                <Link
                                    href={`/articles/${article.slug}`}
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:gap-2.5 transition-all"
                                >
                                    Read article
                                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                                    </svg>
                                </Link>
                            </article>
                        </li>
                    ))}
                </ul>

                {/* Footer note */}
                <div className="mt-16 rounded-[24px] border border-dashed border-slate-200 dark:border-slate-800 p-6 text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        More articles coming soon. Follow me on{' '}
                        <a
                            href="https://www.linkedin.com/in/dilder-orclapex/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            LinkedIn
                        </a>
                        {' '}for updates.
                    </p>
                </div>
            </div>
        </div>
    );
}
