import Image, { getImageProps } from 'next/image';
import { LuMail, LuLinkedin, LuGithub } from 'react-icons/lu';
import { MediaLink } from '@/components/UtilComponents';

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
        <header className="bg-cover max-md:bg-[center_right_-17rem] lg:bg-center" style={{ backgroundImage }}>
            <div className="py-16 px-8 lg:px-[10%] bg-black bg-opacity-5">
                <div className="max-lg:text-center lg:mt-6 lg:flex lg:flex-row-reverse">
                    <Image src="/portrait.webp" alt="Portrait of website author" width={150} height={150}
                           className="mx-auto max-lg:mb-7 lg:ml-auto lg:mr-0 border-white border-2 rounded-[50%] shadow-[0_3px_10px_3px_rgba(100,100,100,1)]" />
                    <div className="lg:my-auto">
                        <h1 className="mb-2 text-4xl lg:text-5xl text-white font-semibold text-stroke">UMAR FAROOQI</h1>
                        <div className="text-white text-2xl lg:text-3xl font-medium text-stroke">Software Engineer
                        </div>
                    </div>
                </div>
                <div className="mt-48 mx-8 text-white flex flex-row justify-between sm:mx-[25%]">
                    <MediaLink href="mailto:umar_farooqi@hotmail.co.uk" Icon={LuMail} overlay />
                    <MediaLink
                        href="https://www.linkedin.com/in/umar-farooqi-09279a184?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzuzGYgYEQQGU1pLjfJTt4w%3D%3D"
                        Icon={LuLinkedin}
                        overlay
                    />
                    <MediaLink href="https://github.com/Skoomar" Icon={LuGithub} overlay />
                </div>
            </div>
        </header>
    );
};

export default Intro;
