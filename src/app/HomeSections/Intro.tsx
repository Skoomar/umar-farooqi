import Image, { getImageProps } from 'next/image';
import { LuMail, LuLinkedin, LuGithub } from 'react-icons/lu';
import Link from 'next/link';

const getBackgroundImage = (srcSet = '') => {
    const imageSet = srcSet
        .split(', ')
        .map((str) => {
            const [url, dpi] = str.split(' ');
            return `url("${url}") ${dpi}`;
        })
        .join(', ');
    return `image-set(${imageSet})`;
};

const Intro = () => {
    const {
        props: { srcSet },
    } = getImageProps({ alt: '', width: 4032, height: 2268, src: '/reservoir-large.webp' });
    const backgroundImage = getBackgroundImage(srcSet);

    return (
        <section className="bg-cover bg-[center_right_-17rem]" style={{ backgroundImage }}>
            <div className="py-16 px-8 bg-black bg-opacity-5">
                <Image src="/portrait.webp" alt="Portrait of website author" width={180} height={180}
                       className="mx-auto mb-7 border-white border-2 rounded-[50%] shadow-[0_3px_10px_3px_rgba(100,100,100,1)]" />
                <h1 className="text-white font-semibold text-4xl text-center text-shadow mb-2">UMAR FAROOQI</h1>
                <div className="text-white font-semibold text-2xl text-center text-shadow">Software Engineer</div>
                {/* TODO: add icons for these */}
                <div className="mt-48 px-8 text-white flex flex-row justify-between">
                    <Link href="mailto:umar_farooqi@hotmail.co.uk"><LuMail size={30} /></Link>
                    <Link
                        href="https://www.linkedin.com/in/umar-farooqi-09279a184?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzuzGYgYEQQGU1pLjfJTt4w%3D%3D"><LuLinkedin
                        size={30} /></Link>
                    <Link href="https://github.com/Skoomar"><LuGithub size={30} /></Link>
                </div>
            </div>
        </section>
    );
};

export default Intro;
