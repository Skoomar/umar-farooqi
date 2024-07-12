import Link from 'next/link'
import { type Post } from '@/posts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BlogCard = ({slug, title, description, publishDate}: {slug: string, title: string, description: string, publishDate: string}) => (
    // <Card onClick={() => redirect(`/blog/${slug}`)}>
    <Card>
        <CardHeader>
            <CardTitle className="hover:underline"><Link href={`/blog/${slug}`}>{title}</Link></CardTitle>
            <CardDescription>{publishDate}</CardDescription>
        </CardHeader>
        <CardContent>
            <p>{description}</p>
        </CardContent>
    </Card>
);

export function Posts({ posts }: { posts: Post[] }) {
    return (
        <div>
            {posts.map(({ slug, title, description, publishDate }) => (
                <BlogCard key={slug} slug={slug} title={title} description={description} publishDate={publishDate} />
            ))}
        </div>
    )
}
// export function Posts({ posts }: { posts: Post[] }) {
//     return (
//         <ol>
//             {posts.map(({ slug, title, description, publishDate }) => (
//                 <li key={slug}>
//                     <h2>
//                         <Link href={`/blog/${slug}`}>{title}</Link>
//                     </h2>
//                     <p>
//                         <strong>Published:</strong>{' '}
//                         {new Date(publishDate).toLocaleDateString()}{' '}
//                     </p>
//                 </li>
//             ))}
//         </ol>
//     )
// }