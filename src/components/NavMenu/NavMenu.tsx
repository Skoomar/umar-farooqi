import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { LuMenu } from "react-icons/lu";

const NavMenu = () => (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger></DropdownMenuTrigger>
        </DropdownMenu>
    </div>
);

export default NavMenu;