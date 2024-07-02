import withMdx from '@next/mdx';
/** @type {import('next').NextConfig} */
/** @type {import('next').NextMDXOptions} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMdx(nextConfig);
