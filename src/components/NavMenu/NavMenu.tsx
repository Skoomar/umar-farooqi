'use client'

import {IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList} from "@chakra-ui/react";
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
            <MenuDivider />
            <MenuItem>
                Home
            </MenuItem>
            <MenuDivider />
            <MenuItem>
                Projects
            </MenuItem>
            <MenuDivider />
            <MenuItem>
                Contact Me
            </MenuItem>
            <MenuDivider />
        </MenuList>
    </Menu>
);

export default NavMenu;