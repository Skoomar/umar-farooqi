import { getPaginatedPosts, postsPerPage } from '@/posts';
import { Posts } from '@/components/blog/posts';
import { Pagination } from '@/components/blog/pagination';

const BlogHome = async () => {
    const { posts, total } = await getPaginatedPosts({
        page: 1,
        limit: postsPerPage,
    })

    return (
        <main>
            <h1 className="text-4xl text-center mt-5">Blog</h1>
            <div className="px-6">
                <Posts posts={posts} />
                <Pagination baseUrl="/blog" page={1} perPage={postsPerPage} total={total} />
            </div>
        </main>
    );
};

export default BlogHome;