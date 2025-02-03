import LightDarkToggle from "@/components/NavMenu/LightDarkToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from '@/components/NavMenu/Logo';
import MobileSidebar from '@/components/NavMenu/MobileSidebar';

const links = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/projects',
        label: 'Projects',
    },
    {
        href: '/blog',
        label: 'Blog'
    },
];

// TODO: extend to allow page-specific links to be added through props
const NavMenu = () => (
    <nav className="sticky top-0 left-0 z-50 bg-background w-full py-2 px-4 flex justify-between shadow lg:px-[5%]">
        <MobileSidebar links={links} />
        <Link href="/"><Logo /></Link>
        <div className="ml-auto mr-14 hidden lg:flex items-center gap-14 font-bold">
            {
                links.map(link => (
                        <Button key={link.label.toLowerCase()} asChild variant="ghost">
                            <Link href={link.href}>{link.label}</Link>
                        </Button>
                    )
                )
            }
        </div>
        <LightDarkToggle />
    </nav>
);

export default NavMenu;