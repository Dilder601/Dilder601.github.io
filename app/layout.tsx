import './globals.css';

const description = `Professional portfolio of Dilder Hossain — Oracle APEX Cloud Developer Certified. Expert in PL/SQL, ERP architecture, and enterprise database engineering for pharmaceutical and healthcare operations.`;

const authorName = 'Dilder Hossain';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var mode = localStorage.getItem('theme');
                                    var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    if (mode === 'dark' || (!mode && supportDark)) {
                                        document.documentElement.classList.add('dark');
                                    } else {
                                        document.documentElement.classList.remove('dark');
                                    }
                                } catch (e) {}
                            })();
                        `
                    }}
                />
                {/* Google Fonts — Inter */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <title>{authorName} — Oracle APEX &amp; PL/SQL Engineer</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />

                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
                <meta name="theme-color" content="#111827" />
                <meta name="apple-mobile-web-app-status-bar" content="#111827" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content={authorName} />
                <meta name="application-name" content={authorName} />
                <meta name="description" content={description} />
                <meta name="keywords" content="Oracle APEX, PL/SQL, ERP developer, software engineer, database engineer, Oracle Cloud, resume" />
                <meta name="author" content={authorName} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://dilder601.github.io" />
                <meta name="twitter:title" content={authorName} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:creator" content="@DilderHossain8" />
                <meta name="title" property="og:title" content={authorName} key="title" />
                <meta name="description" property="og:description" content={description} key="desc" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={authorName} />
                <meta property="og:url" content="https://dilder601.github.io" />
            </head>
            <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300" suppressHydrationWarning={true}>
                <div className="font-sans antialiased min-h-screen">{children}</div>
            </body>
        </html>
    );
}
