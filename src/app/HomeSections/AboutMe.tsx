import { JSX } from 'react';
import { Separator } from '@/components/ui/separator';

const HeadingUnderline = () => <Separator className="mt-0.5 mb-2" />;


const ExperienceContent = ({ institution, tenure, separator = false, children }: { institution: string, tenure: string, separator?: boolean, children: JSX.Element }) => (
    <div className="mb-3">
        <div className="flex flex-row justify-between">
            <h4 className="text-md font-medium mb-0.5">{institution}</h4>
            <p className="text-gray-600 text-xs italic my-auto">{tenure}</p>
        </div>
        <div className="text-sm">
            {children}
        </div>
        {separator && (<Separator className="mt-3" />)}
    </div>
);

const AboutMe = () => (
    <section className="py-8 px-8 shadow">
        <div className="mb-5">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <HeadingUnderline />
            <p>I&#39;m a software engineer currently working at Capital One to develop our web apps and
                enhance
                experience for both users and developers.</p>
        </div>
        <div className="mb-5">
            <h3 className="text-xl font-semibold">Skills & Experience</h3>
            <HeadingUnderline />
            <h4 className="text-lg font-medium">Languages & Tools:</h4>
            <ul className="pl-7 list-disc mb-3">
                <li>JavaScript/TypeScript</li>
                <ul className="pl-7 list-disc">
                    <li>React.js</li>
                    <li>Next.js</li>
                </ul>
                <li>CSS</li>
                <ul className="pl-7 list-disc">
                    <li>styled-components</li>
                    <li>Tailwind</li>
                </ul>
                <li>Python</li>
                <li>Java</li>
                <li>AWS</li>
                <ul className="pl-7 list-disc">
                    <li>Lambda</li>
                    <li>CloudFront</li>
                    <li>EC2</li>
                </ul>
                <li>Jenkins</li>
                <li>Git</li>
            </ul>
        </div>
        <div className="mb-5">
            <h3 className="text-xl font-semibold">Work History</h3>
            <HeadingUnderline />
            <ExperienceContent institution="Capital One" tenure="Sept 2021 - Present" separator>
                <div>
                    <p>
                        Started on the graduate scheme with rotations across various teams working on Java backend
                        services,
                        DevOps, and web applications. Settled into a web team at the end of the rotations and have been
                        working since then on Capital One&#39;s customer acquisition web journeys.
                    </p>
                    <br />
                    <p>Main technologies used
                        in my current role are JavaScript/TypeScript, React, Next.js, CSS (styled-components), AWS
                        (Lambda,
                        CloudFront, S3), Jenkins for CI/CD, Git + GitHub.
                    </p>
                </div>
            </ExperienceContent>
            <ExperienceContent institution="Met Office" tenure="July 2019 - June 2020">
                <div>
                    <p>
                        Completed a placement year between my 2nd and 3rd year of university working as a Scientific
                        Software Engineer at the Met Office. I started the placement working in Weather Science IT on
                        LFRic - the Met Office&#39;s next generation weather model. This involved using Python and
                        Fortran to efficiently input thousands of weather data fields into the model.
                    </p>
                    <br />
                    <p>
                        I also got the opportunity to work on a project in the Met Office&#39;s Innovation Lab to enable
                        scientists to easily integrate machine learning models into the weather model. This involved
                        taking Tensorflow models built with Python, compiling them down, and creating an interface with
                        C++/Fortran to get input/output from the weather model.
                    </p>
                </div>
            </ExperienceContent>
        </div>
        <div>
            <h3 className="text-xl font-semibold">Education</h3>
            <HeadingUnderline />
            <ExperienceContent institution="University of York" tenure="2017 - 2021">
                <p>BEng Computer Science with Year in Industry</p>
            </ExperienceContent>
        </div>
    </section>
);

export default AboutMe;