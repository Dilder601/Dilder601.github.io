import ActionButton from '@/app/components/ActionButton';
import Image from 'next/image';

const contacts = [
    {
        label: 'Phone',
        value: '+880 1635 000 601',
        href: 'tel:+8801635000601'
    },
    {
        label: 'Email',
        value: 'dilder.hossain.feni@gmail.com',
        href: 'mailto:dilder.hossain.feni@gmail.com'
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/dilder-orclapex',
        href: 'https://www.linkedin.com/in/dilder-orclapex/'
    },
    {
        label: 'GitHub',
        value: 'github.com/Dilder601',
        href: 'https://github.com/Dilder601'
    },
    {
        label: 'LeetCode',
        value: 'leetcode.com/DilderHossain',
        href: 'https://leetcode.com/DilderHossain/'
    },
    {
        label: 'Address',
        value: 'Tejgaon, Dhaka-1215, Bangladesh'
    }
];

const expertise = [
    'Oracle APEX application development',
    'Oracle SQL and PL/SQL architecture',
    'ERP process design and module support',
    'REST API, JSON and web service integration',
    'Performance tuning and query optimization',
    'Dynamic reports, dashboards and BI outputs'
];

const tools = [
    'Oracle Database',
    'Oracle APEX',
    'PL/SQL',
    'REST API',
    'JSON',
    'HTML',
    'CSS',
    'Bootstrap',
    'GitHub',
    'SVN',
    'JIRA',
    'ClickUp'
];

const domainAreas = ['PP', 'MM', 'SD', 'HRM', 'POS', 'QC', 'Inventory', 'Reporting'];

const highlights = ['5+ years ERP delivery', 'Oracle APEX and PL/SQL specialist', 'Production support and optimization'];

const education = [
    {
        degree: 'Diploma in DDD (Database Design & Development)',
        institute: 'IsDB-BISEW',
        meta: '2020'
    },
    {
        degree: 'Bachelor of Business Administration',
        institute: 'Feni Govt. College',
        meta: '2017 | CGPA 3.17'
    }
];

const training = [
    {
        title: 'Computer Fundamental',
        provider: 'New Horizons, Dhaka'
    },
    {
        title: 'SQL Performance Tuning',
        provider: 'Udemy',
        href: 'https://learnwithsumit.com/certificates/verify/LWSCTXN-F584A5R7'
    }
];

const experienceBullets = [
    'Develop and maintain enterprise ERP solutions on Oracle Database and Oracle APEX.',
    'Build packages, procedures, triggers and functions for complex business workflows.',
    'Design report queries, JSON-producing functions and reusable database components.',
    'Improve existing applications through optimization, feature enhancement and issue resolution.',
    'Support manufacturing, supply chain, sales and HR teams with stable production-ready modules.'
];

const projectHighlights = [
    {
        name: 'Micro Credit Management System',
        summary: 'End-to-end Oracle APEX solution for onboarding, loan operations, collections and reporting.',
        href: 'https://apex.oracle.com/pls/apex/f?p=113484'
    },
    {
        name: 'Cash and Carry POS',
        summary: 'Retail POS with invoicing, stock monitoring and daily sales insights for business users.',
        href: 'https://apex.oracle.com/pls/apex/f?p=207615',
        credentials: 'Demo: 02030 / 123456'
    },
    {
        name: 'Pharmacy Management System',
        summary: 'POS and inventory workflow covering billing, purchases, expiry tracking and stock control.',
        href: 'https://apex.oracle.com/pls/apex/f?p=157297',
        credentials: 'Demo: 1001 / 1001'
    },
    {
        name: 'QC Alert System',
        summary: 'Quality control alerts, approvals, dashboards and audit history for operational teams.',
        href: 'https://apex.oracle.com/pls/apex/f?p=57988',
        credentials: 'Demo: Mithu / 123'
    }
];

const getContactIcon = (label: string) => {
    switch (label.toLowerCase()) {
        case 'phone':
            return (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            );
        case 'email':
            return (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            );
        case 'linkedin':
            return (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
            );
        case 'github':
            return (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            );
        case 'leetcode':
            return (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M16.102 17.93l-2.69 2.6c-.77.68-1.76 1.005-2.9 1.005-.88 0-1.62-.25-2.22-.8l-4.9-4.73c-.37-.37-.6-.82-.6-1.37 0-.41.12-.77.37-1.07l2.69-2.6 1.34 1.28-2.69 2.6c-.05.05-.08.13-.08.23 0 .15.1.25.25.25.07 0 .13-.02.18-.08l4.9-4.73c.2-.22.47-.35.85-.35.35 0 .62.13.82.35l3.4 3.48c.37.35.6.8.6 1.37 0 .43-.12.8-.37 1.07zm-2.07-5.83l-3.4-3.48c-.2-.22-.47-.35-.85-.35-.35 0-.62.13-.82.35l-4.9 4.73c-.05.05-.08.12-.08.23 0 .15.1.25.25.25.07 0 .13-.02.18-.08l2.69-2.6 1.34 1.28-2.69 2.6c-.37.37-.6.82-.6 1.37 0 .41.12.77.37 1.07l2.69-2.6 1.34 1.28-2.69 2.6c-.05.05-.08.13-.08.23 0 .15.1.25.25.25.07 0 .13-.02.18-.08l4.9-4.73c.2-.22.47-.35.85-.35.35 0 .62.13.82.35l3.4 3.48c.37.35.6.8.6 1.37 0 .43-.12.8-.37 1.07z"/>
                </svg>
            );
        case 'address':
            return (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        default:
            return null;
    }
};

export default function Resume() {
    return (
        <div className="page resume-page">
            <ActionButton />

            <div className="resume-shell">
                {/* Left Sidebar */}
                <aside className="resume-sidebar">
                    <div className="resume-sidebar-top">
                        <div className="resume-photo-wrap resume-photo-panel">
                            <Image
                                src="/images/resume-profile.jpg"
                                className="resume-photo"
                                width={220}
                                height={286}
                                alt="Dilder Hossain portrait"
                                priority
                            />
                        </div>

                        <div>
                            <p className="resume-kicker resume-kicker-light">Contact</p>
                            <ul className="resume-contact-list">
                                {contacts.map((item) => (
                                    <li key={item.label} className="flex items-start gap-3">
                                        <span className="mt-0.5 shrink-0 text-sky-300 print:text-white">
                                            {getContactIcon(item.label)}
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <span className="resume-contact-label">{item.label}</span>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                                    rel={item.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                                                    className="resume-contact-link">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="resume-contact-text">{item.value}</p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="resume-side-block">
                        <p className="resume-kicker resume-kicker-light">Core Expertise</p>
                        <ul className="resume-side-list">
                            {expertise.map((item) => (
                                <li key={item} className="resume-side-list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="resume-side-block">
                        <p className="resume-kicker resume-kicker-light">Education</p>
                        <div className="relative border-l border-white/10 dark:border-white/5 pl-4 ml-1.5 space-y-5 print:border-l print:border-white/20">
                            {education.map((item) => (
                                <div key={item.degree} className="relative">
                                    <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full border border-sky-400 dark:border-sky-300 bg-slate-900 print:border-white print:bg-white" />
                                    <p className="resume-side-heading">{item.degree}</p>
                                    <p className="resume-side-copy">{item.institute}</p>
                                    <p className="resume-side-meta">{item.meta}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="resume-side-block">
                        <p className="resume-kicker resume-kicker-light">Training</p>
                        <div className="relative border-l border-white/10 dark:border-white/5 pl-4 ml-1.5 space-y-5 print:border-l print:border-white/20">
                            {training.map((item) => (
                                <div key={item.title} className="relative">
                                    <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full border border-sky-400 dark:border-sky-300 bg-slate-900 print:border-white print:bg-white" />
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="resume-side-heading resume-side-link">
                                            {item.title}
                                        </a>
                                    ) : (
                                        <p className="resume-side-heading">{item.title}</p>
                                    )}
                                    <p className="resume-side-copy">{item.provider}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Right Main Body */}
                <main className="resume-main">
                    <header className="resume-header">
                        <div>
                            <p className="resume-kicker">Software Engineer</p>
                            <h1 className="resume-name">Dilder Hossain</h1>
                            <p className="resume-role">Oracle APEX | PL/SQL | ERP Application Developer</p>
                            <div className="resume-highlight-row">
                                {highlights.map((item) => (
                                    <span key={item} className="resume-highlight-pill">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </header>

                    {/* Professional Summary */}
                    <section className="resume-section">
                        <div className="resume-section-heading">
                            <h2 className="resume-section-title">Professional Summary</h2>
                            <span className="resume-divider" aria-hidden></span>
                        </div>
                        <p className="resume-copy">
                            Results-driven <strong>Oracle APEX and ERP Developer</strong> with <strong>5+ years</strong>{' '}
                            of progressive experience designing, developing, and optimizing enterprise-grade
                            applications using <strong>Oracle APEX</strong>, <strong>Oracle Database</strong>,{' '}
                            <strong>SQL</strong>, and <strong>PL/SQL</strong>. Proven expertise in architecting
                            scalable <strong>ERP systems</strong>, building <strong>RESTful API integrations</strong>,
                            and leading <strong>database performance tuning</strong> initiatives that improve speed,
                            reliability, and business efficiency. Specialized in delivering tailored solutions for the{' '}
                            <strong>pharmaceutical and healthcare sectors</strong>, including <strong>Nipro JMI Pharma</strong>,{' '}
                            <strong>Unido Pharma</strong>, <strong>Bangladesh Eye Hospital</strong>, and several other{' '}
                            <strong>JMI Group</strong> concerns. Adept at translating complex business requirements into
                            robust technical solutions, automating mission-critical workflows, and delivering
                            enterprise applications that support <strong>4000+ concurrent users</strong>. An{' '}
                            <strong>Oracle APEX Cloud Developer Certified</strong> professional with a strong record of
                            leading end-to-end software delivery in agile environments.
                        </p>
                    </section>

                    {/* Technical Snapshot */}
                    <section className="resume-section">
                        <div className="resume-section-heading">
                            <h2 className="resume-section-title">Technical Snapshot</h2>
                            <span className="resume-divider" aria-hidden></span>
                        </div>
                        <div className="resume-chip-grid">
                            {tools.map((item) => (
                                <span key={item} className="resume-chip">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="resume-section">
                        <div className="resume-section-heading">
                            <h2 className="resume-section-title">Professional Experience</h2>
                            <span className="resume-divider" aria-hidden></span>
                        </div>

                        <article className="resume-experience">
                            <div className="resume-experience-top">
                                <div>
                                    <h3 className="resume-item-title">Software Engineer</h3>
                                    <p className="resume-company">
                                        MononSoft Ltd. <span className="resume-company-muted">| Sister concern of JMI Group</span>
                                    </p>
                                </div>
                                <div className="resume-meta-block">
                                    <p className="resume-meta">Feb 2021 - Present</p>
                                    <p className="resume-meta">Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            <p className="resume-copy">
                                Contributing to a full ERP ecosystem built on Oracle technology, including business
                                process automation, report development, database programming and ongoing production
                                support for multiple companies under JMI Group.
                            </p>

                            <ul className="resume-bullet-list">
                                {experienceBullets.map((item) => (
                                    <li key={item} className="resume-bullet-item">
                                        <span className="resume-bullet" aria-hidden></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="resume-domain-row">
                                <span className="resume-domain-label">ERP Exposure</span>
                                <div className="resume-chip-grid">
                                    {domainAreas.map((item) => (
                                        <span key={item} className="resume-chip resume-chip-soft">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </section>

                    {/* Projects */}
                    <section className="resume-section">
                        <div className="resume-section-heading">
                            <h2 className="resume-section-title">Selected Projects</h2>
                            <span className="resume-divider" aria-hidden></span>
                        </div>

                        <div className="resume-project-list">
                            {projectHighlights.map((project) => (
                                <article key={project.name} className="resume-project-card">
                                    <div className="resume-project-top">
                                        <h3 className="resume-item-title">{project.name}</h3>
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="resume-project-link inline-flex items-center gap-1">
                                            <span>Live Demo</span>
                                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                    <p className="resume-copy resume-copy-sm">{project.summary}</p>
                                    {project.credentials ? (
                                        <p className="resume-project-meta">{project.credentials}</p>
                                    ) : null}
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Professional Strengths */}
                    <section className="resume-section resume-section-compact">
                        <div className="resume-section-heading">
                            <h2 className="resume-section-title">Professional Strengths</h2>
                            <span className="resume-divider" aria-hidden></span>
                        </div>
                        <div className="resume-strength-list">
                            <p className="resume-strength-card">Strong ownership of database-centric business applications</p>
                            <p className="resume-strength-card">Comfortable with independent execution and production support</p>
                            <p className="resume-strength-card">Focused on clean logic, maintainability and practical outcomes</p>
                            <p className="resume-strength-card">Adaptable across business domains, stakeholders and workflows</p>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
