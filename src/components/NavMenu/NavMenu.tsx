import { LuMenu } from "react-icons/lu";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import LightDarkToggle from "@/components/NavMenu/LightDarkToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from '@/components/NavMenu/Logo';

const NavMenu = () => (
    <nav className="sticky top-0 left-0 bg-white z-50 w-full py-2 px-8 flex justify-between shadow">
        <Sheet>
            <SheetTrigger asChild>
                <Button className="shadow lg:hidden" variant="outline" size="icon">
                    <LuMenu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-shadow " />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" aria-describedby="Navigation Menu">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Select a page</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col gap-2 py-5">
                    <Link href="/" className="text-lg">Home</Link>
                    <Link href="/portfolio" className="text-lg">Portfolio</Link>
                    <Link href="/blog" className="text-lg">Blog</Link>
                    <Link href="/contact-me" className="text-lg">Contact Me</Link>
                </div>
            </SheetContent>
        </Sheet>
        <Logo />
        <div className="ml-auto mr-14 hidden lg:flex items-center gap-14 font-bold">
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
        </div>
        <LightDarkToggle />
    </nav>
);

export default NavMenu;