import {FunctionComponent} from "react";

import {
    Tooltip,
    MenuList,
    MenuItem,
    Menu,
    Button,
    MenuButton,
} from '@chakra-ui/react';

import {ChevronDownIcon} from "@chakra-ui/icons";

export const A1: FunctionComponent= () => (

    <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
        </MenuButton>
        <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
            Hover me
        </Tooltip>
        <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
    </Menu>
);

