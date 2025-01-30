import Image, { getImageProps } from 'next/image';
import { LuMapPin } from 'react-icons/lu';

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

const IntroSection = () => {
    const {
        props: { srcSet },
    } = getImageProps({ alt: '', width: 4032, height: 2268, src: '/reservoir-large.webp' });
    const backgroundImage = getBackgroundImage(srcSet);

    return (
        <section className="bg-cover bg-[center_right_-17rem]" style={{ backgroundImage }}>
            <div className="py-16 px-8 bg-black bg-opacity-5">
                <Image src="/portrait.webp" alt="Portrait of website author" width={180} height={180}
                       className="mx-auto mb-7 border-2 rounded-[50%] shadow-[0_3px_10px_3px_rgba(100,100,100,1)]" />
                <h1 className="text-white font-bold text-4xl text-center text-shadow mb-2">UMAR FAROOQI</h1>
                <div className="text-white font-semibold text-2xl text-center text-shadow">Software Engineer</div>
                <div className="mt-48 flex flex-row justify-center mr-4">
                    <LuMapPin className="size-5 text-white text-shadow mr-1 mt-1" />
                    <div className="text-white font-medium text-xl text-shadow">Nottingham</div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
