import { getPaginatedPosts, postsPerPage } from '@/app/utils/get-posts';
import { Posts } from '@/app/components/blog/post-body';
import { Pagination } from '@/app/components/blog/pagination';

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