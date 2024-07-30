import matter from 'gray-matter';
import path from 'path';
import fs from 'fs/promises';
import { cache } from 'react';

export type Post = {
    slug: string | undefined
    title: string
    description: string
    date: string
    body: string
    views?: number;
    href?: string
}

// cache is a React 18 feature that allows you to cache a function for the lifetime of the request
// so it'll only be run once per build even if it's called multiple times when rendering the page
export const getPosts = cache(async () => {
    const posts = await fs.readdir('./posts');

    return Promise.all(
        posts
            .filter((file) => path.extname(file) === 'mdx')
            .map(async (file) => {
                const filePath = `./posts/${file}`;
                const postContent = await fs.readFile(filePath, 'utf-8');
                const { data, content } = matter(postContent);

                if (!data.published) {
                    return null;
                }

                return { ...data, body: content } as Post;
            })
    );
});

export const getPost = async (slug: string) => {
    const posts = await getPosts();
    return posts.find((post) => post.slug === slug);
}

export default getPosts;
