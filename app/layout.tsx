import './globals.css';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

const description = `I am writing to express my strong interest in the Oracle Apex and PL/SQL Developer. As a skilled and experienced professional with a passion for creating efficient and robust applications, I believe my technical expertise and dedication to delivering high-quality solutions align perfectly with the requirements of the role. Over the course of my career, I have acquired a deep understanding of Oracle Application Express (Apex) and PL/SQL development, along with a strong foundation in database design and management. I have successfully developed and implemented a wide range of applications, including data-driven web applications, reports, and interactive dashboards.`;

const authorName = 'DILDER HOSSAIN';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>{authorName}</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />

                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
                <meta name="theme-color" content="#009EF7" />
                <meta name="apple-mobile-web-app-status-bar" content="#009EF7" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content={authorName} />
                <meta name="application-name" content={authorName} />
                <meta name="description" content={description} />
                <meta name="keywords" content="software engineer, problem solving" />
                <meta name="author" content={authorName} />
                <meta name="theme-color" content="#009EF7" />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://dilder.vercel.app" />
                <meta name="twitter:title" content={authorName} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content="/images/icons/android-chrome-192x192.png" />
                <meta name="twitter:creator" content="@DilderHossain8" />
                <meta name="title" property="og:title" content={authorName} key="title" />
                <meta name="description" property="og:description" content={description} key="desc" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={authorName} />
                <meta property="og:url" content="https://dilder.vercel.app" />
                <meta property="og:image" content="/images/icons/android-chrome-192x192.png" />
            </head>
            <body suppressHydrationWarning={true}>
                <div className={`${inter.variable} ${outfit.variable} font-sans`}>{children}</div>
            </body>
        </html>
    );
}
