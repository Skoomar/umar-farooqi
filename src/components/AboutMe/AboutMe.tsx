import Image from "next/image";

const AboutMe = () => (
    <div>
        <p>About Me</p>
        <Image src="/portrait.png" width={300} height={300} alt="Portrait of author" />
    </div>
);

export default AboutMe;