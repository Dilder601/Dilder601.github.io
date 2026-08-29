'use client';

import ActionButton from '@/app/components/ActionButton';
import Image from 'next/image';

export default function Resume() {
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0 print:m-0">
            <ActionButton />

            {/* Resume Container — A4 Dimensions & Clean Single-Column Layout */}
            <div className="mx-auto max-w-4xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-xl border border-slate-200/80 dark:border-slate-800 p-8 sm:p-12 md:p-14 print:shadow-none print:border-none print:p-8 print:max-w-none print:text-black print:bg-white transition-colors">
                
                {/* ════════════════ PAGE 1 ════════════════ */}
                <div className="relative">
                    {/* Header Section */}
                    <header className="flex flex-col-reverse sm:flex-row items-start justify-between gap-6 pb-6 border-b-2 border-slate-900 dark:border-slate-100 print:border-black">
                        <div className="flex-1 space-y-2">
                            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase font-sans print:text-black">
                                DILDER HOSSAIN
                            </h1>
                            <p className="text-lg font-bold text-slate-800 dark:text-slate-200 print:text-black">
                                Oracle APEX &amp; PL/SQL Engineer
                            </p>
                            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 tracking-wide print:text-slate-700">
                                Oracle APEX &bull; PL/SQL &bull; Oracle Database 19c &bull; SQL Tuning &bull; REST APIs &bull; ERP Architecture
                            </p>

                            {/* Contact Info Line */}
                            <div className="pt-2 text-[12px] text-slate-700 dark:text-slate-300 space-y-1 print:text-slate-800">
                                <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                    <span><strong>Phone:</strong> <a href="tel:+8801635000601" className="hover:underline">+880 1635-000601</a></span>
                                    <span>&bull;</span>
                                    <span><strong>Email:</strong> <a href="mailto:dilder.hossain.feni@gmail.com" className="hover:underline">dilder.hossain.feni@gmail.com</a></span>
                                    <span>&bull;</span>
                                    <span><strong>Address:</strong> Dhaka, Bangladesh</span>
                                </p>
                                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-600 dark:text-slate-400 print:text-slate-700 text-[11.5px]">
                                    <a href="https://github.com/Dilder601" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">github.com/Dilder601</a>
                                    <span>&bull;</span>
                                    <a href="https://www.linkedin.com/in/dilder-orclapex/" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">linkedin.com/in/dilder-orclapex</a>
                                    <span>&bull;</span>
                                    <a href="https://leetcode.com/DilderHossain/" target="_blank" rel="noopener noreferrer" className="hover:underline font-medium">leetcode.com/DilderHossain</a>
                                </p>
                            </div>
                        </div>

                        {/* Profile Image (Top-Right like Reference) */}
                        <div id="resume-profile-photo" className="shrink-0 self-center sm:self-start">
                            <div className="relative h-28 w-24 sm:h-32 sm:w-28 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 shadow-sm print:border-slate-300">
                                <Image
                                    src="/images/resume-profile.jpg"
                                    alt="Dilder Hossain"
                                    fill
                                    className="object-cover object-top"
                                    sizes="120px"
                                    priority
                                />
                            </div>
                        </div>
                    </header>

                    {/* ─── PROFESSIONAL SUMMARY ─── */}
                    <section className="mt-6">
                        <h2 className="text-sm font-bold tracking-wider text-slate-950 dark:text-white uppercase pb-1 border-b border-slate-300 dark:border-slate-700 font-sans print:text-black print:border-slate-400">
                            PROFESSIONAL SUMMARY
                        </h2>
                        <p className="mt-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300 text-justify print:text-black">
                            Results-driven <strong>Oracle APEX &amp; PL/SQL Engineer</strong> with <strong>5+ years</strong> of hands-on experience designing, developing, and optimizing high-concurrency enterprise ERP applications, database schemas, and RESTful web services. Oracle APEX Cloud Developer Certified with a proven track record supporting <strong>4,000+ daily operational users</strong> across pharmaceutical, healthcare, and retail businesses under JMI Group. Deep expertise in SQL query tuning, partitioning, bulk processing, and building scalable business process automation.
                        </p>
                    </section>

                    {/* ─── TECHNICAL SKILLS ─── */}
                    <section className="mt-6">
                        <h2 className="text-sm font-bold tracking-wider text-slate-950 dark:text-white uppercase pb-1 border-b border-slate-300 dark:border-slate-700 font-sans print:text-black print:border-slate-400">
                            TECHNICAL SKILLS
                        </h2>
                        <div className="mt-3 space-y-2 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white print:text-black">Languages &amp; Core:</strong>{' '}
                                SQL, PL/SQL (Packages, Procedures, Functions, Triggers), JavaScript, HTML5, CSS3, Bootstrap
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white print:text-black">Databases &amp; Architecture:</strong>{' '}
                                Oracle Database (11g, 12c, 19c, 21c), Schema Design, Normalization, Query Tuning (Explain Plans, Indexing, Partitioning), Bulk Collect &amp; FORALL
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white print:text-black">APEX &amp; Interface Engineering:</strong>{' '}
                                Oracle APEX (18.x - 23.x), Dynamic Actions, Interactive Reports, Interactive Grids, Custom Plugins, Theme Customization, Responsive Layouts
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white print:text-black">APIs &amp; Integration:</strong>{' '}
                                RESTful Web Services, ORDS (Oracle REST Data Services), OAuth2 Authentication, APEX_JSON, JSON_TABLE, JSON_VALUE, Webhooks
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white print:text-black">ERP Domains:</strong>{' '}
                                Production Planning, Inventory &amp; Materials Management, Sales &amp; Distribution, HRM, POS, Quality Control (QC), Financial Dashboards
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white print:text-black">DevOps &amp; Tools:</strong>{' '}
                                Git, GitHub, SVN (Subversion), JIRA, ClickUp, Oracle SQL Developer, PL/SQL Developer, Toad, Postman
                            </p>
                            <p>
                                <strong className="font-semibold text-slate-900 dark:text-white print:text-black">Engineering Practices:</strong>{' '}
                                Relational Modeling, Performance Profiling, Multi-tenant Architecture, Code Reviews, Agile/Scrum
                            </p>
                        </div>
                    </section>

                    {/* ─── PROFESSIONAL EXPERIENCE ─── */}
                    <section className="mt-6">
                        <h2 className="text-sm font-bold tracking-wider text-slate-950 dark:text-white uppercase pb-1 border-b border-slate-300 dark:border-slate-700 font-sans print:text-black print:border-slate-400">
                            PROFESSIONAL EXPERIENCE
                        </h2>

                        <div className="mt-4 space-y-6">
                            {/* Role 1 */}
                            <div>
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                    <h3 className="text-xs font-bold text-slate-950 dark:text-white print:text-black">
                                        Software Engineer (Oracle APEX &amp; Database)
                                    </h3>
                                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 print:text-slate-700">
                                        February 2021 &ndash; Present
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 text-[11.5px] text-slate-600 dark:text-slate-400 print:text-slate-700 mb-2">
                                    <span className="font-semibold text-slate-800 dark:text-slate-200 print:text-black flex items-center gap-1.5">
                                        <span className="inline-block size-2 rounded-full bg-indigo-600 print:bg-black"></span>
                                        MononSoft Ltd. (JMI Group)
                                    </span>
                                    <span>50/B New Eskaton Road, Dhaka 1000</span>
                                </div>

                                <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                                    <li>
                                        Architect and maintain mission-critical Oracle APEX applications and database backends supporting <strong>4,000+ active concurrent users</strong> across pharmaceutical concerns (Nipro JMI Pharma, Unido Pharma, Bangladesh Eye Hospital).
                                    </li>
                                    <li>
                                        Designed and shipped core ERP modules across Production Planning, Inventory Management, Quality Control, and Sales Distribution.
                                    </li>
                                    <li>
                                        Profiled and tuned heavy database reporting queries, utilizing composite B-tree indexes, partition pruning, and materialized views to <strong>reduce peak execution times from 30s+ to under 0.3s</strong>.
                                    </li>
                                    <li>
                                        Developed secure RESTful Web Services via ORDS with OAuth2 token validation, enabling seamless JSON data exchange with external logistics and accounting microservices.
                                    </li>
                                    <li>
                                        Engineered automated approval workflows, batch job schedulers (DBMS_SCHEDULER), and transactional validation triggers handling high daily volumes.
                                    </li>
                                    <li>
                                        Collaborate closely with plant managers, QA teams, and business analysts to translate complex pharmaceutical operating standards into reliable software solutions.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Page 1 Footer */}
                    <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end text-[10px] text-slate-400 font-mono print:text-slate-500">
                        <span>Page 1 of 2</span>
                    </div>
                </div>

                {/* ════════════════ PAGE 2 ════════════════ */}
                <div className="mt-12 pt-8 border-t-2 border-dashed border-slate-300 dark:border-slate-700 print:border-none print:mt-0 print:pt-6 print:break-before-page">
                    
                    {/* ─── KEY PROJECTS ─── */}
                    <section>
                        <h2 className="text-sm font-bold tracking-wider text-slate-950 dark:text-white uppercase pb-1 border-b border-slate-300 dark:border-slate-700 font-sans print:text-black print:border-slate-400">
                            SELECTED ENTERPRISE &amp; PRODUCTION PROJECTS
                        </h2>

                        <div className="mt-4 space-y-4 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                            {/* Project 1 */}
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                                        Emojud ERP System
                                    </h3>
                                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 print:text-slate-700">
                                        500+ Daily Active Users
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                                    <strong>Stack:</strong> Oracle APEX, PL/SQL, Oracle 19c, ORDS REST Services
                                </p>
                                <p>
                                    Comprehensive ERP platform supporting Finance, HR &amp; Payroll, Inventory, Procurement, Sales, and Production Planning across business divisions with role-based access control and audit logging.
                                </p>
                            </div>

                            {/* Project 2 */}
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                                        Micro Credit Management System
                                    </h3>
                                    <a
                                        href="https://apex.oracle.com/pls/apex/f?p=113484"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline print:text-black"
                                    >
                                        Live Demo: apex.oracle.com &rarr;
                                    </a>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                                    <strong>Stack:</strong> Oracle APEX, PL/SQL, REST API, Oracle 12c
                                </p>
                                <p>
                                    End-to-end loan lifecycle management platform for microfinance institutions, automating loan origination, disbursement, repayment tracking, and delinquency reporting for 10,000+ accounts with automated SMS alerts.
                                </p>
                            </div>

                            {/* Project 3 */}
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                                        Pharmacy Management System
                                    </h3>
                                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                                        Demo Login: 1001 / 1001
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                                    <strong>Stack:</strong> Oracle APEX, PL/SQL, Barcode Integration, Oracle 19c
                                </p>
                                <p>
                                    Integrated pharmacy operations platform with real-time inventory tracking, expiry management, prescription processing, and automated purchase orders. Reduced stock discrepancies by 45% and improved fulfillment speed by 35%.
                                </p>
                            </div>

                            {/* Project 4 */}
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                                        Cash and Carry POS System
                                    </h3>
                                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                                        Demo Login: 02030 / 123456
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                                    <strong>Stack:</strong> Oracle APEX, PL/SQL Triggers, REST API, Thermal Printing
                                </p>
                                <p>
                                    High-performance retail Point of Sale system with real-time inventory synchronization, multi-payment processing, dynamic pricing, and automated end-of-day reconciliation handling 1,000+ daily transactions.
                                </p>
                            </div>

                            {/* Project 5 */}
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                                        QC Alter System
                                    </h3>
                                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                                        Demo Login: Mithu / 123
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                                    <strong>Stack:</strong> Oracle APEX, PL/SQL, Oracle 19c, Compliance Audit
                                </p>
                                <p>
                                    Manufacturing quality control tracking platform with real-time defect reporting, root cause analysis, and corrective action workflows. Improved QC cycle time by 40% across production lines.
                                </p>
                            </div>

                            {/* Project 6 */}
                            <div className="space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                                    <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                                        Blood Circulation System
                                    </h3>
                                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 print:text-slate-700">
                                        15+ Connected Healthcare Facilities
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                                    <strong>Stack:</strong> Oracle APEX, PL/SQL, REST API, SMS Gateway
                                </p>
                                <p>
                                    Centralized blood bank management platform with donor registry, blood group matching, cross-matching workflows, and emergency request dispatching with automated donor notifications.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ─── EDUCATION ─── */}
                    <section className="mt-6">
                        <h2 className="text-sm font-bold tracking-wider text-slate-950 dark:text-white uppercase pb-1 border-b border-slate-300 dark:border-slate-700 font-sans print:text-black print:border-slate-400">
                            EDUCATION
                        </h2>

                        <div className="mt-3 space-y-3 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                                        Diploma in Database Design &amp; Development (DDD)
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                                        IsDB-BISEW IT Scholarship Programme
                                    </p>
                                </div>
                                <div className="text-left sm:text-right text-[11px] text-slate-600 dark:text-slate-400 print:text-slate-700">
                                    <p className="font-semibold">2020</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white print:text-black">
                                        Bachelor of Business Administration (BBA)
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
                                        Feni Govt. College &bull; CGPA: 3.17 / 4.00
                                    </p>
                                </div>
                                <div className="text-left sm:text-right text-[11px] text-slate-600 dark:text-slate-400 print:text-slate-700">
                                    <p className="font-semibold">2017</p>
                                    <p>Feni, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ─── CERTIFICATIONS ─── */}
                    <section className="mt-6">
                        <h2 className="text-sm font-bold tracking-wider text-slate-950 dark:text-white uppercase pb-1 border-b border-slate-300 dark:border-slate-700 font-sans print:text-black print:border-slate-400">
                            CERTIFICATIONS &amp; PROFESSIONAL TRAINING
                        </h2>

                        <ul className="mt-3 list-disc list-outside ml-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                            <li>
                                <strong>Oracle APEX Cloud Developer Certified Professional (1Z0-771)</strong> &ndash; Oracle University
                            </li>
                            <li>
                                <strong>SQL (Advanced) Skills Certification</strong> &ndash; HackerRank
                            </li>
                            <li>
                                <strong>Data Analysis Specialization</strong> &ndash; Coursera
                            </li>
                            <li>
                                <strong>Oracle SQL Performance Tuning Masterclass</strong> &ndash; Udemy
                            </li>
                            <li>
                                <strong>CSE Fundamentals &amp; Problem Solving</strong> &ndash; Phitron
                            </li>
                            <li>
                                <strong>Computer Fundamental &amp; Information Systems</strong> &ndash; New Horizons, Dhaka
                            </li>
                        </ul>
                    </section>

                    {/* ─── MEMBERSHIPS & ADDITIONAL INFORMATION ─── */}
                    <section className="mt-6">
                        <h2 className="text-sm font-bold tracking-wider text-slate-950 dark:text-white uppercase pb-1 border-b border-slate-300 dark:border-slate-700 font-sans print:text-black print:border-slate-400">
                            MEMBERSHIPS &amp; ADDITIONAL INFORMATION
                        </h2>

                        <ul className="mt-3 list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-black">
                            <li><strong>Professional Societies:</strong> Active Member, Database Graduates Platform &ndash; IsDB-BISEW; Active Member, Phitron Programming Community.</li>
                            <li><strong>Languages:</strong> Bengali (Native), English (Professional Working Proficiency).</li>
                            <li><strong>Methodologies:</strong> Agile, Scrum, Waterfall, SDLC.</li>
                            <li><strong>Interests:</strong> Open Source Contributions, Competitive Programming, Database Architecture, Technical Writing.</li>
                        </ul>
                    </section>

                    {/* Page 2 Footer */}
                    <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end text-[10px] text-slate-400 font-mono print:text-slate-500">
                        <span>Page 2 of 2</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
