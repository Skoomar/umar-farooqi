import { getPosts } from '@/posts';
import { Posts } from '@/components/posts';

const BlogHome = async () => {
    const posts = await getPosts();

    return (
        <main>
            <h1 className="text-4xl text-center mt-5">Blog</h1>
            <Posts posts={posts} />
        </main>
    );
};

export default BlogHome;