import { notFound, redirect } from 'next/navigation';
import { getPaginatedPosts, getPosts, postsPerPage } from '@/posts';
import { Posts } from '@/components/blog/posts';
import { Pagination } from '@/components/blog/pagination';

export default async function Page({ params }: { params: { page: number } }) {
    let { page } = params;
    page = Number(page);

    if (page < 1) notFound();
    if (page == 1) redirect('/blog');

    const { posts, total } = await getPaginatedPosts({
        page,
        limit: postsPerPage,
    });

    if (!posts.length) notFound();

    return (
        <main>
            <h1>Blog Home</h1>
            <Posts posts={posts} />
            <Pagination baseUrl="/blog" page={page} perPage={postsPerPage} total={total} />
        </main>
    );
}

export async function generateStaticParams() {
    const posts = await getPosts();
    const pages = Math.ceil(posts.length / postsPerPage);

    return [...Array(pages)].map((_, i) => ({
        page: `${i + 1}`
    }));
}