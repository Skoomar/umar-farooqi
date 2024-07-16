import Image from 'next/image';

const Home = () => (
    <div>
        <div className="bg-reservoir bg-cover h-full w-screen flex justify-center items-center">
            <div className="my-72">
                <Image className="mx-auto" src="/portrait.png" width={300} height={300} alt="Author Portrait" />
                <h1 className="bg-gray-700 text-white text-4xl font-headingSans">Website under construction...</h1>
            </div>
        </div>
    </div>

);

export default Home;
