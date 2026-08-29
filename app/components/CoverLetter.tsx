export default function CoverLetter() {
    return (
        <div className="page cover-letter mt-8 print:mt-0">
            <div className="cover-letter-body pr-4 text-justify text-[12px] leading-6 text-slate-600 dark:text-slate-305 md:pr-10">
                <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200/60 pb-5 dark:border-slate-800 sm:flex-row sm:items-start">
                    <div>
                        <h2 className="text-xl font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">
                            Dilder Hossain
                        </h2>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-300">
                            Oracle APEX &amp; PL/SQL Developer
                        </p>
                    </div>
                    <div className="space-y-1 text-left text-[11px] text-slate-500 dark:text-slate-400 sm:text-right">
                        <p>dilder.hossain.feni@gmail.com</p>
                        <p>+880 1635 000 601</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>

                <div className="mb-6 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">To</p>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Hiring Manager</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Technology and Enterprise Applications Team</p>
                </div>

                <div className="mb-6 border-l-2 border-amber-600 pl-3 font-bold text-slate-900 dark:text-white">
                    Subject: Application for Oracle APEX / PL/SQL Developer Role
                </div>

                <h1 className="mb-4 text-sm font-bold text-slate-900 dark:text-white">Dear Hiring Manager,</h1>

                <div className="mt-2 space-y-4">
                    <p>
                        I am applying for an Oracle APEX and PL/SQL development role where strong database engineering,
                        ERP understanding and dependable execution are essential. Over the last five years, I have
                        built and supported Oracle-based business applications that help teams manage operations,
                        reporting and day-to-day decision making.
                    </p>
                    <p>
                        In my current role at MononSoft Ltd., I work across Oracle APEX application development, PL/SQL
                        programming, reporting, workflow automation and production support for multiple JMI Group
                        companies. My experience includes translating business requirements into stable solutions,
                        improving existing systems, and supporting high-usage environments with a strong focus on
                        maintainability and accuracy.
                    </p>
                    <p>
                        I bring practical experience in ERP modules, REST integrations, SQL optimization and
                        database-centered application design. I am particularly effective in roles that require both
                        hands-on technical delivery and close collaboration with business users to shape workable
                        solutions.
                    </p>
                    <p>
                        I would welcome the opportunity to discuss how my background in Oracle APEX, PL/SQL and ERP
                        application delivery can support your team. Thank you for your time and consideration.
                    </p>
                </div>

                <div className="mt-10 space-y-1">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Sincerely,</p>
                    <p className="font-bold text-slate-900 dark:text-white">Dilder Hossain</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Software Engineer</p>
                    <p className="text-xs italic text-slate-400 dark:text-slate-500">Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
}
