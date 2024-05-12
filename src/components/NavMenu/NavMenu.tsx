'use client'

import {IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

const NavMenu = () => (
    <Menu>
        <MenuButton
            as={IconButton}
            aria-label="Menu"
            icon={<HamburgerIcon />}
            variant="outline"
        />
        <MenuList>
            <MenuItem>
                Home
            </MenuItem>
            <MenuItem>
                Projects
            </MenuItem>
            <MenuItem>
                Contact Me
            </MenuItem>
        </MenuList>
    </Menu>
);

export default NavMenu;