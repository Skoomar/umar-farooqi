import Link from 'next/link'
import { DateTime } from 'luxon';
import { type Post } from '@/posts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BlogCard = ({slug, title, description, publishDate}: {slug: string, title: string, description: string, publishDate: string}) => (
    <Link  href={`/blog/${slug}`}>
        <Card className="w-60 m-2">
            <CardHeader>
                <CardTitle className="hover:underline">{title}</CardTitle>
                <CardDescription>{publishDate}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
            </CardContent>
        </Card>
    </Link>
);

export function Posts({ posts }: { posts: Post[] }) {
    return (
        <div className="flex">
            {posts.map(({ slug, title, description, publishDate }) => (
                <BlogCard key={slug} slug={slug} title={title} description={description} publishDate={publishDate} />
            ))}
        </div>
    )
}