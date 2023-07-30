import DocExport from '@/components/DocExport';
import Image from 'next/image';

export default function Resume() {
    return (
        <div id='resume' className='page'>
            <DocExport />

            <div className='resume-box'>
                <div className='left-box'>
                    <Image
                        src='/images/profile.png'
                        className='mx-auto rounded-full bg-primary-400 object-cover'
                        width={150}
                        height={150}
                        alt='profile'
                    />
                    <h1 className='mt-4 text-center text-xl font-bold uppercase'>DILDER HOSSAIN</h1>
                    <p className='subtitle mb-6 text-center capitalize'>Software Engineer</p>
                    {/* contact info */}
                    <div className='subtitle left'>
                        <p className='subtitle-border'>Personal Details</p>
                    </div>
                    <ul className='mb-3 space-y-2'>
                        <li className='flex items-center'>
                            <Image
                                className='contact-icon'
                                src='/images/phone.png'
                                width={20}
                                height={20}
                                alt='phone'
                            />
                            <p className='text-sm'>+880 1635 000 601</p>
                        </li>

                        <li className='flex items-center'>
                            <Image
                                className='contact-icon'
                                src='/images/email.png'
                                width={20}
                                height={20}
                                alt='email'
                            />
                            <a
                                href='mailto:kzamanbn@gmail.com'
                                target='_blank'
                                className='resume-link'
                                rel='noreferrer'>
                                dilder.hossain.feni@gmail.com
                            </a>
                        </li>

                        <li className='flex items-center'>
                            <Image
                                className='contact-icon'
                                src='/images/location.png'
                                width={20}
                                height={20}
                                alt='location'
                            />
                            <p className='text-sm'>
                                Tejgaon Industrial Area,
                                <br /> 29/C & 29/D, Dhaka
                            </p>
                        </li>

                        <li className='flex items-center'>
                            <Image
                                className='contact-icon'
                                src='/images/github.png'
                                width={20}
                                height={20}
                                alt='github'
                            />
                            <a
                                href='https://github.com/Dilder601'
                                target='_blank'
                                className='resume-link'
                                rel='noreferrer'>
                                github.com/Dilder601
                            </a>
                        </li>
                        <li className='flex items-center'>
                            <Image
                                className='contact-icon'
                                src='/images/linkedin.png'
                                width={20}
                                height={20}
                                alt='github'
                            />
                            <a
                                href='https://www.linkedin.com/in/dilder-orclapex/'
                                target='_blank'
                                className='resume-link'
                                rel='noreferrer'>
                                linkedin.com/in/dilder-orclapex
                            </a>
                        </li>
                    </ul>

                    {/* Education */}
                    <div className='subtitle left'>
                        <p className='subtitle-border'>Education</p>
                    </div>
                    <div className='mb-3 text-sm'>
                        <div>
                            <p>
                                <span className='font-bold'>Diploma In DDD</span>
                                <span className='font-bold'>(Database Design and Development) - 2020</span> <br />
                                <span className='italic'>IsDB BISEW</span>
                                <span> –  IDB Bhaban (4th Floor) E/8-A, Rokeya Sharani, Dhaka 1207</span>
                            </p>
                        </div>
                    </div>


                    <div className='mb-3 text-sm'>
                        <div>
                            <p>
                                <span>Bachelor of Business Administration</span><br />
                                <span className='font-bold'>BBA</span> 
                                <span className='font-bold'>(3.17) - 2017</span>
                                <br />
                                <span className='italic'>Feni Govt. College.</span>
                            </p>
                        </div>
                    </div>

                    {/* Key Skills */}
                    <div className='subtitle left'>
                        <p className='subtitle-border'>Key Skills</p>
                    </div>
                    <div className='mb-3 space-y-4'>
                        <button className='gradient-btn group from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500'>
                            <span className='gradient-content'>Oracle SQL / PLSQL</span>
                        </button>
                        <button className='gradient-btn group from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500'>
                            <span className='gradient-content'>Oracle APEX</span>
                        </button>
                        <button className='gradient-btn group from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600'>
                            <span className='gradient-content'>PL SQL Dynamic Content</span>
                        </button>
                        <button className='gradient-btn group from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500'>
                            <span className='gradient-content'>BI Publisher Report</span>
                        </button>
                    </div>
                    {/* Training */}
                    <div className='subtitle left'>
                        <span className='subtitle-border'>Training</span>
                    </div>
                    <div className='space-y-2 text-sm'>
                        <div>
                            <p className='font-bold'>Computer Fundamental</p>
                            <p className='italic'>New Horizons, Dhaka.</p>
                        </div>
                        
                    </div>
                </div>
                <div className='right-box'>
                    <p className='subtitle'>Summary</p>

                    <p className='mb-6 text-sm'>
                        I am writing to express my strong interest in the Oracle Apex and PL/SQL Developer. As a skilled and experienced professional with a passion for creating efficient and robust applications, I believe my technical expertise and dedication to delivering high-quality solutions align perfectly with the requirements of the role.

                        Over the course of my career, I have acquired a deep understanding of Oracle Application Express (Apex) and PL/SQL development, along with a strong foundation in database design and management. I have successfully developed and implemented a wide range of applications, including data-driven web applications, reports, and interactive dashboards. 
                    </p>

                    {/* Experience section */}
                    <p className='subtitle'>Professional Experience</p>
                    <div className='mb-6'>
                        {/* last job Experience */}
                        <div className='grid grid-cols-5 gap-16'>
                            <div className='section-box col-span-2'>
                                <p className='text-sm font-bold'>Feb 2021 - Present</p>
                            </div>
                            <div className='col-span-3 flex flex-col justify-center text-xs'>
                                <a
                                    href='https://mononsoft.org'
                                    target='_blank'
                                    className='resume-link'
                                    rel='noreferrer'>
                                    https://mononsoft.org
                                </a>
                                <p>TMC Building (6th Floor), 52 New Eskaton Road, Dhaka 1000.</p>
                            </div>
                        </div>
                        <p className='mt-4'>
                            <span className='font-bold'>Software Engineer</span>
                            <span className='ml-2 text-sm'>at MononSoft Ltd. (A Sister Concern of JMI Group)</span>
                        </p>
                        <ul className='bullet-list'>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Developing an ERP system based on Oracle Database and Oracle Apex. </p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Developing software solutions to meet customer needs.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Complex business logic, Packages, stored procedures, triggers, and functions.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Creating function for different purposes like returning JSON for report queries.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>Evaluating existing applications and performing updates and modifications.</p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>
                                I am committed to staying updated with the latest  technologies.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <p className='subtitle'>Professional Experience</p>
                    <div className='mb-6'>
                        {/* last job Experience */}
                        
                        <p className='mt-4'>
                            <span className='font-bold'>Project of APEX:</span>
                        </p>
                        <ul className='bullet-list'>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>I have completed few projects like Cash & Carry Mobile Shop ,  Pharmacy Management System ,  QC Alter System , Blood Circulation System etc. </p>
                            </li>
                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <a href="https://apex.oracle.com/pls/apex/f?p=57988" className='resume-link' target='_blank'>URL1: https://apex.oracle.com/pls/apex/f?p=57988</a>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>USER: Mithu Password:123</p>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <a href="https://apex.oracle.com/pls/apex/f?p=157297" className='resume-link' target='_blank'>URL2: https://apex.oracle.com/pls/apex/f?p=157297</a>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>USER: 1001 Password: 1001</p>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <a href="https://apex.oracle.com/pls/apex/f?p=224500" className='resume-link' target='_blank'>URL2: https://apex.oracle.com/pls/apex/f?p=224500</a>
                            </li>

                            <li className='flex items-center'>
                                <div className='mr-4'>
                                    <div className='bullet'></div>
                                </div>
                                <p>USER: Mithu Password: Mithu#123</p>
                            </li>
                        </ul>
                    </div>
                    

                    {/* Additional Skills */}
                    <p className='subtitle'>Additional Skills</p>

                    <ul className='bullet-list'>
                        <li className='flex items-center'>
                            <div className='mr-4'>
                                <div className='bullet'></div>
                            </div>
                            <p>Good Knowledge on Web Services likes REST API/JSON.</p>
                        </li>
                        <li className='flex items-center'>
                            <div className='mr-4'>
                                <div className='bullet'></div>
                            </div>
                            <p>HTML, CSS, Bootstrap, Javascript and MySQL</p>
                        </li>
                        <li className='flex items-center'>
                            <div className='mr-4'>
                                <div className='bullet'></div>
                            </div>
                            <p>Proficient Understanding of Code Versioning Tools Github Action and SVN.</p>
                        </li>
                        
                        <li className='flex items-center'>
                            <div className='mr-4'>
                                <div className='bullet'></div>
                            </div>
                            <p>Knowledge of JIRA, Click Up.</p>
                        </li>
                        <li className='flex items-center'>
                            <div className='mr-4'>
                                <div className='bullet'></div>
                            </div>
                            <p>Ability to work individually and independently with minimal supervision.</p>
                        </li>
                        <li className='flex items-center'>
                            <div className='mr-4'>
                                <div className='bullet'></div>
                            </div>
                            <p>Self-managed, independent, initiative and proactive.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
