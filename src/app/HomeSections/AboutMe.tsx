import { JSX } from 'react';
import { Separator } from '@/components/ui/separator';
import { HeadingUnderline, Subsection } from '@/components/UtilComponents';

// TODO: add default heading and <ul> styles to Tailwind base rather than repeating them again and again

const ExperienceContent = ({ institution, tenure, separator = false, children }: {
    institution: string,
    tenure: string,
    separator?: boolean,
    children: JSX.Element
}) => (
    <div className="mb-3">
        <div className="flex flex-row justify-between">
            <h4 className="text-md font-medium mb-0.5">{institution}</h4>
            <p className="text-muted-foreground text-xs italic my-auto">{tenure}</p>
        </div>
        <div className="text-sm">
            {children}
        </div>
        {separator && (<Separator className="mt-3" />)}
    </div>
);

const AboutMe = () => (
    <section className="pt-8 pb-3 px-8 shadow">
        <Subsection>
            <h2 className="text-2xl font-semibold">About Me</h2>
            <HeadingUnderline />
            <p>I&#39;m a software engineer currently working at Capital One to develop our web apps and
                enhance
                experience for both users and developers.</p>
        </Subsection>
        <Subsection>
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
        </Subsection>
        <Subsection>
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
        </Subsection>
        <Subsection>
            <h3 className="text-xl font-semibold">Education</h3>
            <HeadingUnderline />
            <ExperienceContent institution="University of York" tenure="2017 - 2021">
                <p>BEng Computer Science with Year in Industry</p>
            </ExperienceContent>
        </Subsection>
        <Subsection>
            <h3 className="text-xl font-semibold">Hobbies & Interests</h3>
            <HeadingUnderline />
            <ul className="text-sm pl-4 list-disc">
                <li>Rock Climbing</li>
                <li>Music - listening to music and playing guitar/bass/drums</li>
                <li>Motorsport - viewing and taking part in real & virtual racing</li>
                <li>Cats - too many to count currently in the house</li>
            </ul>
        </Subsection>
    </section>
);

export default AboutMe;