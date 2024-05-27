import { LuMenu } from "react-icons/lu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import LightDarkToggle from "@/components/NavMenu/LightDarkToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavMenu = () => (
    <div className="flex justify-between pt-4 px-8">
        <Sheet>
            <SheetTrigger asChild>
                <Button className="lg:hidden" variant="outline" size="icon">
                    <LuMenu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-shadow " />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col gap-2 py-5">
                    <Link href="/" className="text-lg">Home</Link>
                    <Link href="/" className="text-lg">Portfolio</Link>
                </div>
            </SheetContent>
        </Sheet>
        <nav className="m-auto hidden lg:flex gap-8 font-bold">
            <Link href="/">Home</Link>
            <Link href="/portfolio">Portfolio</Link>
        </nav>
        <LightDarkToggle />
    </div>
);

export default NavMenu;