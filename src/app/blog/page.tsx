import { getPosts } from '@/app/utils/get-posts';

const BlogHome = async () => {
    const posts = await getPosts();

    return (
        <main>
            <h1 className="text-4xl text-center mt-5">Blog</h1>
            <div className="px-6">

            </div>
        </main>
    );
};

export default BlogHome;