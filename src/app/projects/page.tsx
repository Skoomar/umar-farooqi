import Link from 'next/link';

const Projects = () => (
    <>
        <header className="pt-10 mb-6 text-center">
            <h1 className="text-3xl lg:text-4xl font-semibold">My Projects</h1>
        </header>
        <section className="pb-80 px-8 lg:px-[10%]">
            <h2 className="text-xl lg:text-2xl font-medium mb-1">Mansfield Cat Rescue</h2>
            <p className="mb-1">I&#39;ve been fostering cats for Mansfield Cat Rescue since last year. As part of my
                volunteering for the
                rescue I&#39;ve been developing a website for them to display cats currently for adoption.</p>
            <Link href="https://mansfieldcatrescue.co.uk/"
                     className="text-blue-800 underline visited:accent-purple-800">mansfieldcatrescue.co.uk</Link>
            <p className="text-sm">
                (Still under construction but you can see the code in my GitHub if you&#39;re interested)
            </p>
            <p className="mt-0.5">For this project I&#39;m using React, Tailwind, Next.js - utilising the server-side
                rendering features of Next.js to fetch and cache cat data from a GraphQL API. This API is hosted by Pawlytics - the
                service the rescue
                uses to catalogue and document their cats.
            </p>
        </section>
    </>
);

export default Projects;