import {Box, BoxProps, CloseButton,Text, Flex, Icon, FlexProps, Link, useColorModeValue } from "@chakra-ui/react";
import { Search } from "@styled-icons/evil/Search";
import { ReactText } from "react";
import {KLink} from "../KLink";


interface LinkItemProps {
    name: string;
    icon: unknown;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: Search },
    { name: 'Trending', icon: Search },
    { name: 'Explore', icon: Search },
    { name: 'Favourites', icon: Search },
    { name: 'Settings', icon: Search },
];


interface SidebarProps extends BoxProps {
    onClose: () => void;
}

export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            width={80}
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            // w={{ base: 'full', md: 60 }}
            // pos="fixed"
            // h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    Logo
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );

interface NavItemProps extends FlexProps {
    icon: unknown;
    children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => (
        <KLink href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </KLink>
    );