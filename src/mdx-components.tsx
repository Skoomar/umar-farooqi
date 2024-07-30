import type { MDXComponents } from 'mdx/types';
import type { ComponentPropsWithoutRef } from 'react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

function HeadingOne(props: ComponentPropsWithoutRef<'h1'>) {
    return (
        <div className="mb-10">
            <h1 className="text-4xl text-center mb-3" {...props} />
            <Separator />
        </div>
    );
}

function Img(props: ComponentPropsWithoutRef<'img'>) {
    return (
        <Image src={props.src} alt={props.alt} width="300" height="300" />
    );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: HeadingOne,
        h2: (props) => <h2 className="text-xl font-bold mb-1" {...props} />,
        p: (props) => <p className="mb-5" {...props} />,
        a: (props) => <a className="text-blue-600 font-bold hover:underline" {...props} />,
        img: Img,
        ...components,
    };
}