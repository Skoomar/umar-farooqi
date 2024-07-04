import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';
// import { Heading } from '@/components/blog-markdown/heading';

function Heading(props: ComponentPropsWithoutRef<'h1'>) {
    return <h1 className="text-4xl text-center mt-5" {...props} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: Heading,
        ...components,
    };
}