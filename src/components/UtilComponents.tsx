import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';
import { IconType } from 'react-icons';
import Link from 'next/link';

export const Subsection = ({ children }: { children: ReactNode }) => <div className="mb-5">{children}</div>;
export const HeadingUnderline = () => <Separator className="mt-0.5 mb-2" />;

export const MediaLink = ({ href, Icon, overlay = false }: { href: string, Icon: IconType, overlay?: boolean }) => (
    <div className={`size-[35px] py-0.5 ${overlay && "bg-black bg-opacity-50 rounded-lg"}`}>
        <Link href={href} target="_blank" className="hover:text-emerald-300">
            <Icon size={30} className="mx-auto align-middle" />
        </Link>
    </div>
);
