import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';
import { Separator } from '@/components/ui/separator';

function HeadingOne(props: ComponentPropsWithoutRef<'h1'>) {
    return (
        <div className="mb-10">
            <h1 className="text-4xl text-center mb-3" {...props} />
            <Separator />
        </div>
    );
}

function Paragraph(props: ComponentPropsWithoutRef<'p'>) {
    return (
        <p className="mb-5" {...props} />
    );
}

function Hyperlink(props: ComponentPropsWithoutRef<'a'>) {
    return (
        <a className="text-blue-800 font-bold hover:underline" {...props} />
    );
}

function Image(props: ComponentPropsWithoutRef<'img'>) {
    return (
        <img {...props} />
    );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: HeadingOne,
        p: Paragraph,
        a: Hyperlink,
        img: Image,
        ...components,
    };
}