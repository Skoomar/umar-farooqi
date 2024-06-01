import Image from "next/image";

const AboutMe = () => (
    <div>
        <p>About Me</p>
        <Image src="/../../../public/portrait.jpeg" width={500} height={500} alt="Portrait of author" />
    </div>
);

export default AboutMe;