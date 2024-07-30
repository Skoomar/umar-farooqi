import { MDXRemote } from 'next-mdx-remote/rsc';

import { mdxComponents } from '@/mdx-components';

export const PostBody = ({ children }: { children: string }) => (
    <MDXRemote
        source={children}
        components={mdxComponents}
    />
);