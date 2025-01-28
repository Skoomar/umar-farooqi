import NavMenu from "@/components/NavMenu/NavMenu";
import { Separator } from "@/components/ui/separator";
import background from '../../public/reservoir-large.webp';

import Image from 'next/image';

const Home = () => {

    return (
        <div className="relative h-[60rem]">
            <Image src={background} alt="Background - Bamford Edge"
                   placeholder="blur" className="backgroundImage" />
            <div className="z-10 bg-white">
                <h1>Umar Farooqi</h1>
                {/*<div className="flex justify-center items-center">*/}
            </div>
        </div>
    );
};

export default Home;
