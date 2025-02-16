import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { LuFileUser, LuGithub, LuLinkedin, LuMail } from 'react-icons/lu';  // TODO: should probably use lucide-react like I have everywhere else instead of react-icons. But lucide-react has deprecated branded icons so need to look at it further

export const Subsection = ({ children }: { children: ReactNode }) => <div className="mb-5">{children}</div>;
export const HeadingUnderline = () => <Separator className="mt-0.5 mb-2" />;

export const StyledExternalLink = ({ href, children }: { href: string; children: ReactNode }) => (
    <Link className="text-blue-600 dark:text-blue-500 hover:underline visited:accent-purple-600" href={href} target="_blank" rel="noopener noreferrer">{children}</Link>)

export const MediaLink = ({ href, Icon, translucentBg = false }: { href: string, Icon: IconType, translucentBg?: boolean }) => (
    <div className={`size-[40px] py-1.5 ${translucentBg && "bg-black bg-opacity-40 rounded-lg"}`}>
        <Link href={href} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300">
            <Icon size={30} className="mx-auto align-middle" />
        </Link>
    </div>
);

export const MediaLinkPanel = ({ translucentBg = false, forcewhiteIcons = false }: { translucentBg?: boolean, forcewhiteIcons?: boolean }) => (
    <div className={`${forcewhiteIcons && 'text-white'} flex justify-between gap-1 mx-5 sm:mx-[25%]`}>
        <MediaLink href="/umar_farooqi_cv.pdf" Icon={LuFileUser} translucentBg={translucentBg}/>
        <MediaLink href="mailto:umar_farooqi@hotmail.co.uk" Icon={LuMail} translucentBg={translucentBg} />
        <MediaLink
            href="https://www.linkedin.com/in/umar-farooqi-09279a184"
            Icon={LuLinkedin}
            translucentBg={translucentBg}
        />
        <MediaLink href="https://github.com/Skoomar" Icon={LuGithub} translucentBg={translucentBg} />
    </div>
);
