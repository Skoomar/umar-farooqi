'use client'

import { Box, Divider, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavMenu = () => (
    <Box>
        <Flex justifyContent={['space-between']}>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Menu"
                    icon={<HamburgerIcon/>}
                    variant="outline"
                    mt={['1']}
                    mb={['1']}
                />
                <MenuList>
                    <MenuDivider/>
                    <MenuItem>
                        Home
                    </MenuItem>
                    <MenuDivider/>
                    <MenuItem>
                        Projects
                    </MenuItem>
                    <MenuDivider/>
                    <MenuItem>
                        Contact Me
                    </MenuItem>
                    <MenuDivider/>
                </MenuList>
            </Menu>

        </Flex>
        <Divider/>
    </Box>
);

export default NavMenu;