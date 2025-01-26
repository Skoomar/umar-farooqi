import NavMenu from "@/components/NavMenu/NavMenu";
import { Separator } from "@/components/ui/separator";
import background from '../../public/reservoir-large.webp'

import Image from 'next/image';

const Home = () => (
    <div>
        <Image src={background} alt="Background - Bamford Edge" sizes="100vw" style={{ width: '100%', height: 'auto' }} />
        <div>
            <h1>Umar Farooqi</h1>
        {/*<div className="flex justify-center items-center">*/}
        </div>
    </div>
);

export default Home;