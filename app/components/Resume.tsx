import ActionButton from '@/app/components/ActionButton';
import TimelineIcon from '@/app/components/TimelineIcon';
import Image from 'next/image';
import Link from 'next/link';

export default function Resume() {
    const textColor:any = {
        color: 'blue'}
    return (
        <div className="page gradient resume">
            <ActionButton />

            <div className="resume-box with-photo">
                <div className="left-box">
                    <Image src="/images/profile.png" className="profile-photo" width={150} height={150} alt="profile" />
                    <div className="name--title">
                        <h1 className="text-xl font-bold">DILDER HOSSAIN</h1>
                        <h5 className="subtitle capitalize">Software Engineer</h5>
                    </div>
                    {/* contact info */}
                    <div className="subtitle">
                        <h5 className="subtitle-text">Personal Details</h5>
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
                                className="resume-link"
                                rel="noreferrer">
                                dilder.hossain.feni@gmail.com
                            </a>
                        </li>

                        <li className="flex items-center">
                            <Image
                                className="contact-icon"
                                src="/images/leetcode.svg"
                                width="0"
                                height="0"
                                alt="leetcode kzamanbd"
                            />
                            <a
                                href="https://leetcode.com/DilderHossain/"
                                target="_blank"
                                className="resume-link"
                                rel="noreferrer">
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
                                className="resume-link"
                                rel="noreferrer">
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
                                className="resume-link"
                                rel="noreferrer">
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
                                Tejgaon Industrial Area,
                                <br /> 29/C & 29/D, Dhaka
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
                                <span className="font-bold">Diploma In DDD(Database Design and Development) - 2020 </span>
                                <span>(Continuing)</span>
                            </p>
                            <p className="italic">IsDB BISEW.</p>
                            <p> –  IDB Bhaban (4th Floor) E/8-A, Rokeya Sharani, Dhaka 1207</p>
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
                            <span className="key-skill bg-pink-50 text-pink-500 hover:text-white">Oracle SQL/ PLSQL</span>
                        </button>
                        <button className="key-button group from-yellow-500 to-orange-400 group-hover:from-yellow-500 group-hover:to-orange-400 focus:ring-yellow-200">
                            <span className="key-skill bg-yellow-50 text-yellow-500 hover:text-white">Oracle Apex</span>
                        </button>
                        <button className="key-button group from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-lime-200">
                            <span className="key-skill bg-teal-50 text-teal-500 hover:text-black">BI / Dynamic Content Report</span>
                        </button>
                        <button className="key-button group from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-cyan-200">
                            <span className="key-skill bg-cyan-50 text-cyan-500 hover:text-white">SQL Performace Tuning</span>
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
                                className="resume-link font-bold">
                                SQL Performace Tuning
                            </a>
                            <p className="italic">Udemy</p>
                        </div>
                    </section>
                </div>
                <div className="right-box">
                    <h5 className="subtitle">Summary</h5>

                    <p className="mb-5 text-sm">
                        I am writing to express my strong interest in the Oracle Apex and PL/SQL Developer. 
                        As a skilled and experienced professional with a passion for creating efficient and
                        robust applications, I believe my technical expertise and dedication to delivering 
                        high-quality solutions align perfectly with the requirements of the role. Over the 
                        course of my career, I have acquired a deep understanding of Oracle Application Express (Apex) 
                        and PL/SQL development, along with a strong foundation in database design and management. 
                        I have successfully developed and implemented a wide range of applications, including 
                        data-driven web applications, reports, and interactive dashboards.
                    </p>

                    {/* Experience section */}
                    <h5 className="subtitle mb-5">Professional Experience</h5>

                    <ol className="relative border-l border-primary-500">
                        <li className="mb-6 ml-6">
                            <TimelineIcon className="-top-1" />
                            <h3 className="mb-1 md:flex print:flex items-center font-bold text-gray-900">
                                <div className="mr-2">Software Engineer</div>
                                <div className="text-sm font-medium text-primary-800 flex space-x-1">
                                    <span>at</span>
                                    <div className="md:flex print:flex items-center space-x-1">
                                        <a href="https://mononsoft.org" target="_blank" className="underline">
                                            MononSoft Ltd.
                                        </a>
                                        <a href="https://jmigroup-bd.com" target="_blank" className="underline">
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
                                    <p>Creating function for different purposes like returning JSON for report queries.</p>
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
                                    <p>
                                    I am committed to staying updated with the latest technologies.
                                    </p>
                                </li>
                            </ul>
                        </li>
                        <li className="mb-6 ml-6">
                            <TimelineIcon />
                            <h3 className="mb-1 md:flex print:flex items-center font-bold text-gray-900">
                                <div>PROFESSIONAL EXPERIENCE</div>
                                <a
                                    href="#"
                                    className="ml-2 text-sm font-medium text-primary-800"
                                    target="_blank">
                                    at <span className="underline">Project of APEX:</span>
                                </a>
                            </h3>

                            <ul className="bullet-list"> 
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className=""></div>
                                    </div>
                                    <p>I have completed few projects like Micro Credit Management System, Cash & Carry Mobile Shop(POS) , Pharmacy Management System(POS) , QC Alter System , Blood Circulation System etc.</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div> 
                                    <p>URL1: <a className="text-blue-600"  href={'https://apex.oracle.com/pls/apex/f?p=113484'}  target='_blank' >https://apex.oracle.com/pls/apex/f?p=113484 </a> </p> 
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div> 
                                    <p>Crediantial: <span className="text-blue-600">02030 / 123456  </span></p> 
                                    
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <div>
                                        <p>URL2: <a className="text-blue-600"  href={'https://apex.oracle.com/pls/apex/f?p=57988'} target='_blank'  >https://apex.oracle.com/pls/apex/f?p=57988 </a> </p> 
                                    </div>
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div> 
                                    <p>Crediantial: <span className="text-blue-600">Mithu / 123  </span></p>  
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>URL3: <a className="text-blue-600"  href={'https://apex.oracle.com/pls/apex/f?p=157297'}  target='_blank' >https://apex.oracle.com/pls/apex/f?p=157297 </a> </p> 
                                </li>

                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div> 
                                    <p>Crediantial: <span className="text-blue-600">1001 / 1001  </span></p> 
                                    
                                </li>

                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div>
                                    <p>URL4: <a className="text-blue-600"  href={'https://apex.oracle.com/pls/apex/f?p=224500'} target='_blank' >https://apex.oracle.com/pls/apex/f?p=224500 </a> </p> 
                                </li>
                                <li className="flex items-center">
                                    <div className="mr-4">
                                        <div className="bullet"></div>
                                    </div> 
                                    <p>Crediantial: <span className="text-blue-600">Mithu / 123  </span></p>  
                                </li>
                            </ul>
                        </li>
                    </ol>

                    {/* Additional Skills */}
                    <h5 className="subtitle">Additional Skills</h5>

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
                            <p>HTML, CSS, Bootstrap, Javascript, PHP and MySQL.</p>
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
                            <p>
                            Ability to work individually and independently with minimal supervision.
                            </p>
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
