import { LuMenu } from "react-icons/lu";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import LightDarkToggle from "@/components/NavMenu/LightDarkToggle";
// import { Button } from "@/components/ui/button";

const NavMenu = () => (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                {/*<Button variant="outline">*/}
                    <LuMenu/>
                {/*</Button>*/}
            </DropdownMenuTrigger>
        </DropdownMenu>
        <LightDarkToggle />
    </div>
);

export default NavMenu;