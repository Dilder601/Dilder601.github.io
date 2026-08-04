export default function CoverLetter() {
    return (
        <div className="page cover-letter mt-8 print:mt-0">
            <div className="cover-letter-body pr-4 md:pr-10 text-justify text-[12px] leading-6 text-slate-600 dark:text-slate-305">
                {/* Letterhead Header */}
                <div className="border-b border-slate-200/60 dark:border-slate-800 pb-5 mb-8 flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                    <div>
                        <h2 className="text-xl font-bold uppercase tracking-wider text-slate-900 dark:text-white">Dilder Hossain</h2>
                        <p className="text-xs text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider mt-1">Oracle APEX & PL/SQL Developer</p>
                    </div>
                    <div className="text-left sm:text-right text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                        <p>dilder.hossain.feni@gmail.com</p>
                        <p>+880 1635 000 601</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>

                {/* Recipient Details */}
                <div className="mb-6 space-y-1">
                    <p className="font-bold text-slate-900 dark:text-white">To,</p>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">The Hiring Manager</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Enterprise Applications & Technology Division</p>
                </div>

                {/* Subject */}
                <div className="mb-6 font-bold text-slate-900 dark:text-white border-l-2 border-sky-500 pl-3">
                    Subject: Application for Oracle APEX and PL/SQL Developer Position
                </div>

                <h1 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                    Dear Hiring Manager,
                </h1>

                <div className="mt-2 space-y-4">
                    <p>
                        I have read out the job post, and all the requirements
                        that you have asked for the job, have been occupying me.
                    </p>
                    <p>
                        I am impressed with the {`company's`} mission and
                        values, and I believe my skills and experiences align
                        well with the opportunities available at the company. I
                        am excited about the potential to make a meaningful
                        impact and grow professionally with the team.
                    </p>
                    <p>
                        I am confident that my skills and experiences align well
                        with the requirements of the role, and I am excited
                        about the opportunity to make a meaningful impact and
                        grow professionally with the team. I am also a quick
                        learner, a problem-solver, and a team player who is
                        always ready to go the extra mile.
                    </p>
                    <p>
                        I’ve more than three years of experience and profound
                        knowledge of web development. I am proficient developing
                        Apex applications from scratch, utilizing its
                        declarative features as well as customizing the
                        application behavior through PL/SQL.
                    </p>
                    <p>
                        My skills and experience in designing and developing
                        applications will be of great benefit to your job. I’d
                        love to discuss the further role with you. I have
                        attached my resume, please have at look whenever you
                        want.
                    </p>
                </div>

                <div className="mt-10 space-y-1">
                    <p className="font-semibold text-slate-800 dark:text-slate-200">Thanks & Regards,</p>
                    <p className="font-bold text-slate-900 dark:text-white">Dilder Hossain</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Software Engineer</p>
                    <p className="italic text-xs text-slate-400 dark:text-slate-500">Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    );
}
