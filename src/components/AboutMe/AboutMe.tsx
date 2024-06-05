import Image from "next/image";

const AboutMe = () => (
    <div className="bg-green-400 h-full w-full flex justify-center items-center">
        <p>About Me</p>
        <Image className="object-cover" src="/reservoir.jpeg" fill alt="Portrait of author" />
    </div>
);

export default AboutMe;