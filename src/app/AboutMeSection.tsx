const AboutMeSection = () => (
    <section className="py-8 px-8 shadow">
        <div className="mb-3">
            <h2 className="text-2xl font-bold mb-1">About Me</h2>
            <p>I&#39;m a software engineer currently working at Capital One to develop our web apps and
                enhance
                experience for both users and developers.</p>
        </div>
        <div>
            <h3 className="text-xl font-semibold mt-4 mb-1">Skills & Experience</h3>
            <h4 className="font-semibold">Languages & Tools:</h4>
            <ul className="pl-7 list-disc mb-3">
                <li>JavaScript/TypeScript</li>
                <li>CSS</li>
                <ul className="pl-7 list-disc">
                    <li>styled-components</li>
                    <li>Tailwind</li>
                </ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Python</li>
            </ul>
            <h4 className="font-semibold">Tools</h4>
            <ul className="pl-7 list-disc mb-3">
                <li>AWS</li>
                <ul className="pl-7 list-disc">
                    <li>Lambda</li>
                    <li>CloudFront</li>
                </ul>
                <li>Jenkins</li>
                <li>Git</li>
            </ul>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>
);

export default AboutMeSection;