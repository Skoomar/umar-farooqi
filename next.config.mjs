// import withMdx from '@next/mdx';
import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = nextMDX({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    }
})

export default withMDX(nextConfig);
