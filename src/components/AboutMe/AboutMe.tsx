import Image from "next/image";

const AboutMe = () => (
    <div className="bg-green-400 h-full w-full flex justify-center items-center">
        <div className="z-10">
            <Image className="mt-40" src="/portrait-alpha.png" width={300} height={300} alt="Portrait" />
            <p>About Me</p>
        </div>
        <Image className="object-cover" src="/reservoir.jpeg" fill alt="Portrait of author" />
    </div>
);

export default AboutMe;