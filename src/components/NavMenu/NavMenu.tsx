import { LuMenu } from "react-icons/lu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import LightDarkToggle from "@/components/NavMenu/LightDarkToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavMenu = () => (
    <div>
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <LuMenu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-shadow " />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="grid gap-2 py-6">
                    <Link href="/">Home</Link>
                    <Link href="/">Portfolio</Link>
                </div>
            </SheetContent>
        </Sheet>
        <LightDarkToggle />
    </div>
);

export default NavMenu;