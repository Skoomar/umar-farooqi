import { readdir } from 'node:fs/promises';

export interface Post {
    slug: string;
    title: string;
    publishDate: string;
    tags: string[];
}

export async function getPosts(): Promise<Post[]> {
    // Retrieve slugs from post routes
    const slugs = (
        await readdir('./src/app/blog/(posts)', { withFileTypes: true })
    ).filter(dirent => dirent.isDirectory());

    // Retieve metadata from MDX files
    const posts = await Promise.all(
        slugs.map(async ({ name }) => {
            const { metadata } = await import(`./app/blog/(posts)/${name}/page.mdx`);
            return { slug: name, ...metadata };
        })
    );

    // Sort posts from newest to oldest
    posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

    return posts;
}