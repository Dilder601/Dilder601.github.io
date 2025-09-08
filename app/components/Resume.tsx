import ActionButton from '@/app/components/ActionButton';
import TimelineIcon from '@/app/components/TimelineIcon';
import Image from 'next/image';
// import Link from 'next/link';

export default function Resume() {
    return (
        <div className="page gradient resume">
            <ActionButton />

            <div className="resume-box with-photo rounded-2xl border border-slate-200/60 dark:border-slate-700/50 shadow-xl bg-white dark:bg-slate-900/70">
                <div className="left-box">
                    <Image
                        src="/images/profile.png"
                        className="profile-photo rounded-full ring-4 ring-primary-500/20"
                        width={150}
                        height={150}
                        alt="Profile photo"
                    />
                    <div className="name--title">
                        <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 to-indigo-600 bg-clip-text text-transparent">
                            DILDER HOSSAIN
                        </h1>
                        <h5 className="subtitle capitalize inline-flex items-center px-3 py-1 mt-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200">
                            Software Engineer
                        </h5>
                    </div>
                    {/* contact info */}
                    <div className="subtitle mt-4">
                        <h5 className="subtitle-text text-slate-600 dark:text-slate-300 tracking-wider uppercase text-sm">
                            Personal Details
                        </h5>
                        <div className="h-0.5 w-10 bg-primary-500/70 rounded mt-2"></div>
                    </div>
                    <ul className="mb-3 space-y-2">
                        <li className="flex items-center">
                            <Image
                                className="contact-icon"
                                src="/images/phone.png"
                                width={20}
                                height={20}
                                alt="phone"
                            />
                            <p className="text-sm">+880 1635 000 601</p>
                        </li>

                        <li className="flex items-center">
                            <Image
                                className="contact-icon"
                                src="/images/email.png"
                                width={20}
                                height={20}
                                alt="email"
                            />
                            <a
                                href="mailto:dilder.hossain.feni@gmail.com"
                                target="_blank"
                                className="resume-link hover:underline underline-offset-4 hover:text-primary-600 transition-colors"
                                rel="noreferrer noopener">
                                dilder.hossain.feni@gmail.com
                            </a>
                        </li>

                        <li className="flex items-center">
                            <Image
                                className="contact-icon"
                                src="/images/leetcode.svg"
                                width={20}
                                height={20}
                                alt="LeetCode profile"
                            />
                            <a
                                href="https://leetcode.com/DilderHossain/"
                                target="_blank"
                                className="resume-link hover:underline underline-offset-4 hover:text-primary-600 transition-colors"
                                rel="noreferrer noopener">
                                leetcode.com/DilderHossain/
                            </a>
                        </li>

                        <li className="flex items-center">
                            <Image
                                className="contact-icon"
                                src="/images/github.png"
                                width={20}
                                height={20}
                                alt="github"
                            />
                            <a
                                href="https://github.com/Dilder601"
                                target="_blank"
                                className="resume-link hover:underline underline-offset-4 hover:text-primary-600 transition-colors"
                                rel="noreferrer noopener">
                                github.com/Dilder601
                            </a>
                        </li>

                        <li className="flex items-center">
                            <Image
                                className="contact-icon"
                                src="/images/linkedin.png"
                                width={20}
                                height={20}
                                alt="github"
                            />
                            <a
                                href="https://www.linkedin.com/in/dilder-orclapex/"
                                target="_blank"
                                className="resume-link hover:underline underline-offset-4 hover:text-primary-600 transition-colors"
                                rel="noreferrer noopener">
                                linkedin.com/in/dilder-orclapex
                            </a>
                        </li>

                        <li className="flex items-center">
                            <Image
                                className="contact-icon"
                                src="/images/location.png"
                                width={20}
                                height={20}
                                alt="location"
                            />
                            <p className="text-sm">
                                Pathan Villa, House No: 331/A
                                <br /> East Nakhal Para , Tejgaon- Dhaka-1215
                            </p>
                        </li>
                    </ul>

                    {/* Education */}
                    <div className="subtitle">
                        <h5 className="subtitle-text">Education</h5>
                    </div>
                    <section className="mb-3 text-sm">
                        <div className="mb-2">
                            <p>
                                <span className="font-bold">
                                    Diploma In DDD(Database Design and Development) - 2020{' '}
                                </span>
                            </p>
                            <p className="italic">IsDB BISEW.</p>
                            <p> – IDB Bhaban (4th Floor) E/8-A, Rokeya Sharani, Dhaka 1207</p>
                        </div>

                        <div>
                            <p>
                                <span className="font-bold">Bachelor of Business Administration </span>
                                <span>BBA(3.17) - 2017</span>
                            </p>
                            <p className="italic">Feni Govt. College.</p>
                        </div>
                    </section>
                    {/* Key Skills */}
                    <div className="subtitle">
                        <h5 className="subtitle-text">Key Skills</h5>
                    </div>
                    <section className="space-y-2">
                        <button className="key-button group from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 focus:ring-pink-200">
                            <span className="key-skill bg-pink-50 text-pink-500 hover:text-white">
                                Oracle SQL/ PLSQL
                            </span>
                        </button>
                        <button className="key-button group from-yellow-500 to-orange-400 group-hover:from-yellow-500 group-hover:to-orange-400 focus:ring-yellow-200">
                            <span className="key-skill bg-yellow-50 text-yellow-500 hover:text-white">Oracle Apex</span>
                        </button>
                        <button className="key-button group from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-lime-200">
                            <span className="key-skill bg-teal-50 text-teal-500 hover:text-black">
                                BI / Dynamic Content Report
                            </span>
                        </button>
                        <button className="key-button group from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-cyan-200">
                            <span className="key-skill bg-cyan-50 text-cyan-500 hover:text-white">
                                SQL Performance Tuning
                            </span>
                        </button>
                    </section>
                    {/* Training */}
                    <div className="subtitle left mt-3">
                        <h5 className="subtitle-text">Training</h5>
                    </div>
                    <section className="space-y-2 text-sm">
                        <div>
                            <p className="resume-link font-bold">Computer Fundamental</p>
                            <p className="italic">New Horizons, Dhaka.</p>
                        </div>
                        <div>
                            <a
                                href="https://learnwithsumit.com/certificates/verify/LWSCTXN-F584A5R7"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="resume-link font-bold">
                                SQL Performance Tuning
                            </a>
                            <p className="italic">Udemy</p>
                        </div>
                    </section>
                </div>
                <div className="right-box">
                    <h5 className="subtitle text-slate-700 dark:text-slate-200 tracking-wider uppercase text-sm">
                        Summary
                    </h5>
                    <div className="h-0.5 w-10 bg-primary-500/70 rounded mb-4"></div>

                    <p className="mb-5 text-sm">
                        I am writing to express my strong interest in the Oracle Apex and PL/SQL Developer. As a skilled
                        and experienced professional with a passion for creating efficient and robust applications, I
                        believe my technical expertise and dedication to delivering high-quality solutions align
                        perfectly with the requirements of the role. Over the course of my career, I have acquired a
                        deep understanding of Oracle Application Express (Apex) and PL/SQL development, along with a
                        strong foundation in database design and management. In my current role as a Software Engineer
                        at MononSoft Ltd. (a sister concern of JMI Group), I have been responsible for developing and
                        maintaining an ERP system built on Oracle PL/SQL. I have worked extensively on the PP
                        (Production Planning), MM (Materials Management), and SD (Sales & Distribution) modules for ERP
                        implementations at Nipro JMI Pharma, Unido Pharma and other concern of JMI Group. My role
                        involved designing robust PL/SQL-based solutions, optimizing database performance, and ensuring
                        seamless integration across different business functions.
                    </p>

                    {/* Experience section */}
                    <h5 className="subtitle mb-2 text-slate-700 dark:text-slate-200 tracking-wider uppercase text-sm">
                        Professional Experience
                    </h5>
                    <div className="h-0.5 w-10 bg-primary-500/70 rounded mb-4"></div>

                    <ol className="relative border-l border-primary-500">
                        <li className="mb-6 ml-6">
                            <TimelineIcon className="-top-1" />
                            <h3 className="mb-1 md:flex print:flex items-center font-bold text-gray-900">
                                <div className="mr-2">Software Engineer</div>
                                <div className="text-sm font-medium text-primary-800 flex space-x-1">
                                    <span>at</span>
                                    <div className="md:flex print:flex items-center space-x-1">
                                        <a
                                            href="https://mononsoft.org"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="underline hover:text-primary-600">
                                            MononSoft Ltd.
                                        </a>
                                        <a
                                            href="https://jmigroup-bd.com"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                            className="underline hover:text-primary-600">
                                            (A Sister Concern of JMI Group)
                                        </a>
                                    </div>
                                </div>
                            </h3>
                            <div className="mb-3 space-y-1 md:space-y-0 print:space-y-0 md:flex print:flex items-center justify-between">
                                <time className="block text-sm font-normal leading-none text-gray-700">
                                    Feb 2021 - Present
                                </time>
                                <address className="text-xs">52 New Eskaton Road, Dhaka-1000.</address>
                            </div>
                            <ul className="bullet-list">
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>Developing an ERP system based on Oracle Database and Oracle Apex.</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>Developing software solutions to meet customer needs.</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>Complex business logic, Packages, stored procedures, triggers, and functions.</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>
                                        Creating function for different purposes like returning JSON for report queries.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>Evaluating existing applications and performing updates and modifications.</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>I am committed to staying updated with the latest technologies.</p>
                                </li>
                            </ul>
                        </li>
                        <li className="mb-6 ml-6">
                            <TimelineIcon />
                            <h3 className="mb-1 md:flex print:flex items-center font-bold text-gray-900">
                                <div>Projects</div>
                                <span className="ml-2 text-sm font-medium text-primary-800">Oracle APEX</span>
                            </h3>

                            <ul className="bullet-list">
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className=""></div>
                                    </div>
                                    <p>
                                        I have completed few projects like Micro Credit Management System, Cash & Carry
                                        Mobile Shop(POS) , Pharmacy Management System(POS) , QC Alter System , Blood
                                        Circulation System etc.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>
                                        URL1:{' '}
                                        <a
                                            className="text-blue-600 hover:underline underline-offset-4"
                                            href={'https://apex.oracle.com/pls/apex/f?p=113484'}
                                            target="_blank"
                                            rel="noreferrer noopener">
                                            https://apex.oracle.com/pls/apex/f?p=113484{' '}
                                        </a>{' '}
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>
                                        URL2:{' '}
                                        <a
                                            className="text-blue-600 hover:underline underline-offset-4"
                                            href={'https://apex.oracle.com/pls/apex/f?p=207615'}
                                            target="_blank"
                                            rel="noreferrer noopener">
                                            https://apex.oracle.com/pls/apex/f?p=207615{' '}
                                        </a>{' '}
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>
                                        Crediantial: <span className="text-blue-600">02030 / 123456 </span>
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <div>
                                        <p>
                                            URL3:{' '}
                                            <a
                                                className="text-blue-600 hover:underline underline-offset-4"
                                                href={'https://apex.oracle.com/pls/apex/f?p=57988'}
                                                target="_blank"
                                                rel="noreferrer noopener">
                                                https://apex.oracle.com/pls/apex/f?p=57988{' '}
                                            </a>{' '}
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>
                                        Crediantial: <span className="text-blue-600">Mithu / 123 </span>
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>
                                        URL4:{' '}
                                        <a
                                            className="text-blue-600 hover:underline underline-offset-4"
                                            href={'https://apex.oracle.com/pls/apex/f?p=157297'}
                                            target="_blank"
                                            rel="noreferrer noopener">
                                            https://apex.oracle.com/pls/apex/f?p=157297{' '}
                                        </a>{' '}
                                    </p>
                                </li>

                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>
                                        Crediantial: <span className="text-blue-600">1001 / 1001 </span>
                                    </p>
                                </li>

                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>
                                        URL5:{' '}
                                        <a
                                            className="text-blue-600 hover:underline underline-offset-4"
                                            href={'https://apex.oracle.com/pls/apex/f?p=224500'}
                                            target="_blank"
                                            rel="noreferrer noopener">
                                            https://apex.oracle.com/pls/apex/f?p=224500{' '}
                                        </a>{' '}
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>
                                        Crediantial: <span className="text-blue-600">Mithu / 123 </span>
                                    </p>
                                </li>
                            </ul>
                        </li>
                    </ol>

                    {/* Additional Skills */}
                    <h5 className="subtitle text-slate-700 dark:text-slate-200 tracking-wider uppercase text-sm">
                        Additional Skills
                    </h5>
                    <div className="h-0.5 w-10 bg-primary-500/70 rounded mb-2"></div>

                    <ul className="bullet-list ml-4">
                        <li className="flex items-center">
                            <div className="mr-4">
                                <div className="bullet"></div>
                            </div>
                            <p>Advance Knowledge on Web Services likes REST API/JSON.</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-4">
                                <div className="bullet"></div>
                            </div>
                            <p>HTML, CSS, Bootstrap, C, C++, and MySQL.</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-4">
                                <div className="bullet"></div>
                            </div>
                            <p>Proficient Understanding of Code Versioning Tools Github Action and SVN.</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-4">
                                <div className="bullet"></div>
                            </div>
                            <p>Knowledge of JIRA, Click Up.</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-4">
                                <div className="bullet"></div>
                            </div>
                            <p>Ability to work individually and independently with minimal supervision.</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-4">
                                <div className="bullet"></div>
                            </div>
                            <p>Problem-solving skills, Self-managed, independent, initiative and proactive.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
