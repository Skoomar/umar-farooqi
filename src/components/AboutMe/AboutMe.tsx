import Image from "next/image";

// TODO: Should this be in src/app instead of in components?
const AboutMe = () => (
    <div className="bg-reservoir bg-cover h-full w-screen flex justify-center items-center">
        <div className="my-72">
            <Image className="mx-auto" src="/portrait.png" width={300} height={300} alt="Author Portrait" />
            <h1 className="bg-gray-700 text-white text-4xl">Website under construction...</h1>
        </div>
    </div>
);


export default AboutMe;