import getPosts, { getPost } from '@/app/utils/get-posts';
import { PostBody } from '@/app/components/blog/post-body';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({ slug: post?.slug }))
}

const PostPage = async ({ params }: { params: { slug: string } }) => {
    const post = await getPost(params.slug);

    if (!post) {
        return notFound();
    }

    return <PostBody>{post?.body}</PostBody>;
};

export default PostPage;