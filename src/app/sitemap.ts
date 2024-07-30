import { getPosts } from './utils/get-posts';

const sitemap = async () => {
    const posts = await getPosts();
    const blogs = posts.map((post) => ({
        url: `https://umarfarooqi.co.uk/blog/${post.slug}`,
    }));

    const routes = ['', '/blog'].map((route) => ({
        url: `https://umarfarooqi.co.uk${route}`,
        // lastModified: new Date().toISOString().split('T')[0],
    }));

    return [...routes, ...blogs];
};