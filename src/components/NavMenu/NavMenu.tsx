import { LuMenu } from "react-icons/lu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import LightDarkToggle from "@/components/NavMenu/LightDarkToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavMenu = () => (
    <div className="flex justify-between py-3 px-8">
        <Sheet>
            <SheetTrigger asChild>
                <Button className="lg:hidden" variant="outline" size="icon">
                    <LuMenu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-shadow " />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col gap-2 py-5">
                    <Link href="/" className="text-lg">Home</Link>
                    <Link href="/portfolio" className="text-lg">Portfolio</Link>
                    <Link href="/blog" className="text-lg">Blog</Link>
                    <Link href="/contact-me" className="text-lg">Contact Me</Link>
                </div>
            </SheetContent>
        </Sheet>
        {/* TODO: probably a better way to do the margins between menu items/icons than setting margin between them */}
        <p>Logo</p>
        <nav className="ml-auto mr-14 hidden lg:flex items-center gap-14 font-bold">
            <Button asChild variant="ghost">
                <Link href="/">Home</Link>
            </Button>
            <Button asChild variant="ghost">
                <Link href="/portfolio">Portfolio</Link>
            </Button>
            <Button asChild variant="ghost">
                <Link href="/blog">Blog</Link>
            </Button>
            <Button asChild variant="ghost">
                <Link href="/contact-me">Contact Me</Link>
            </Button>
        </nav>
        <LightDarkToggle />
    </div>
);

export default NavMenu;