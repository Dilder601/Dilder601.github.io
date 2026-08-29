import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articlesMap, articles } from '../data';

export function generateStaticParams() {
    return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
    const article = articlesMap[params.slug];

    if (!article) {
        notFound();
    }

    return (
        <main className="relative min-h-screen bg-white dark:bg-slate-950 px-5 py-24 md:px-10 selection:bg-indigo-500/30">
            {/* Ambient Background blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] h-[50vh] w-[50vw] rounded-full bg-indigo-500/8 mix-blend-multiply blur-[120px] dark:bg-indigo-500/15 dark:mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] h-[50vh] w-[50vw] rounded-full bg-violet-500/8 mix-blend-multiply blur-[100px] dark:bg-violet-500/12 dark:mix-blend-screen" />
            </div>

            <article className="mx-auto max-w-3xl">
                {/* Navigation Breadcrumb */}
                <div className="mb-10 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Link
                        href="/"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        Home
                    </Link>
                    <span>/</span>
                    <Link
                        href="/articles"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        Articles
                    </Link>
                    <span>/</span>
                    <span className="text-slate-800 dark:text-slate-200 truncate max-w-[200px]">{article.category}</span>
                </div>

                {/* Article Header */}
                <header className="mb-12 border-b border-slate-200/80 dark:border-slate-800 pb-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${article.categoryColor}`}>
                            {article.category}
                        </span>
                        <time className="text-xs text-slate-400 dark:text-slate-500">{article.date}</time>
                        <span className="text-xs text-slate-300 dark:text-slate-600">·</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500">{article.readTime}</span>
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl leading-[1.15]">
                        {article.title}
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        {article.summary}
                    </p>

                    <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                        <div className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold text-sm">
                            DH
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">Dilder Hossain</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Oracle APEX &amp; PL/SQL Engineer</p>
                        </div>
                    </div>
                </header>

                {/* Article Content Sections */}
                <div className="space-y-10 text-slate-700 dark:text-slate-300">
                    {article.content.map((sec, idx) => (
                        <section key={idx} className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                                {sec.heading}
                            </h2>
                            <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
                                {sec.body}
                            </p>
                            {sec.code && (
                                <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
                                    <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 py-2.5">
                                        <div className="flex items-center gap-1.5">
                                            <span className="size-2.5 rounded-full bg-rose-500/80" />
                                            <span className="size-2.5 rounded-full bg-amber-500/80" />
                                            <span className="size-2.5 rounded-full bg-emerald-500/80" />
                                        </div>
                                        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                                            {sec.codeLang || 'sql'}
                                        </span>
                                    </div>
                                    <pre className="overflow-x-auto p-5 font-mono text-xs leading-6 text-slate-200">
                                        <code>{sec.code}</code>
                                    </pre>
                                </div>
                            )}
                        </section>
                    ))}
                </div>

                {/* Article Footer & Call to Action */}
                <footer className="mt-16 rounded-[28px] border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-8 text-center backdrop-blur">
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                        Have thoughts or questions on this topic?
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                        Feel free to connect on LinkedIn or send me an email to discuss Oracle APEX, database architecture, or query optimization.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 dark:bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-white dark:text-slate-950 shadow hover:opacity-90 transition-opacity"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="/articles"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                            ← All Articles
                        </Link>
                    </div>
                </footer>
            </article>
        </main>
    );
}
