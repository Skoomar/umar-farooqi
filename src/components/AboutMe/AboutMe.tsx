import Image from "next/image";

const AboutMe = () => (
    <div className="bg-green-400 h-full w-full flex justify-center items-center">
        <p>About Me</p>
        {/*<div className="relative">*/}
            <Image src="/reservoir.jpeg" fill objectFit="cover" alt="Portrait of author" />
        {/*</div>*/}
    </div>
);

export default AboutMe;