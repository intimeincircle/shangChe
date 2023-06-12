import {FC, FunctionComponent, memo, useMemo, useState} from "react";
import {useTranslation} from "react-i18next";
import {ActionIcon} from "@mantine/core";
import {Search} from "@styled-icons/evil/Search"
import {Chat} from '@styled-icons/bootstrap/Chat'
import {
    Box,
    Flex,
    MenuButton,
    MenuList,
    Container,
    MenuDivider,
    Text,
    IconButton,
    Avatar,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    Menu,
    MenuItem,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {useHistory} from "react-router";
import {Language} from '@styled-icons/material/Language';
import {

    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
// import { BiBell, BiSearch} from "react-icons/bi"
// import {getUserProfile} from "kun-shared/built/apis/get-user-profile";
// import {checkIfSuccess} from "kun-shared/built/apis/check-if-success";
import {Link as RouteLink, Link as LLink} from "react-router-dom"
import {getCdnUrl} from "kun-tools/built/common/get-cdn-url";
// import {useDidMount} from "kun-react-tools/built/hooks/use-dit-mount";
// import {requestGetChatUnReadCount} from "kun-shared/built/apis/get-chat-groups";
import {Helmet} from "react-helmet";
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";
import {Logo} from "../Logo";
import {goToCollection} from "../../navigators";
import {useUserSession} from "../../react-query/useUserSession";
import {SwitchLanguage} from "../Language";
import { KLink } from "../KLink";

export const Header: FunctionComponent<{ title?: string }> = memo(({title}) => {
    const {isOpen, onToggle} = useDisclosure();
    const [count, _] = useState(0)
    // const {profile, setProfile} = useProfile();
    const history = useHistory();
    const {t}= useTranslation();
    const {data: userSession} = useUserSession();
    // useDidMount(async () => {
    //     // const gotProfile = await getUserProfile()
    //     console.log('got', gotProfile)
    //     if (checkIfSuccess(gotProfile) && gotProfile?.record != null) {
    //         console.log('got', gotProfile.record)
    //         // setProfile(gotProfile.record)
    //     }else {
    //         console.log('clear')
    //         localStorage.setItem(CONST_SOME, JSON.stringify(undefined));
    //         // setProfile(undefined)
    //     }
    //     const got = await requestGetChatUnReadCount()
    //     if(checkIfSuccess(got)) {
    //         setCount(got.record ?? 0)
    //     }
    // })
    console.log(count);
    console.log('userSession', userSession);

    const collectionUrl = useMemo(() => goToCollection(userSession?.record?.userId ?? ''), [userSession?.record?.userId])

    return (
        <Box>
            {
                title && (
                    <Helmet title={title}/>
                )
            }
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH="60px"
                py={{base: 2}}
                px={{base: 4}}
                borderBottom={1}
                borderStyle="solid"
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align="center">
                <Container
                    display="flex"
                    alignItems="center"
                    maxW="container.xl"
                >
                    <Flex
                        flex={{base: 1, md: 'auto'}}
                        ml={{base: -2}}
                        display={{base: 'flex', md: 'none'}}>
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon w={5} h={5}/>
                            }
                            variant="ghost"
                            aria-label="Toggle Navigation"
                        />
                    </Flex>
                    <Flex flex={{base: 1}} justify={{base: 'center', md: 'start'}}>
                        <Logo/>
                        <Flex display={{base: 'none', md: 'flex'}} ml={10}>
                            {/* <DesktopNav/> */}
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{base: 1, md: 0}}
                        isInline
                        justify="flex-end"
                        direction="row"
                        align="center"
                        spacing={6}>
                        {
                            userSession?.record == null && (
                                <KLink href={CONSTANT_ROUTES.Login}>
                                    {
                                        t('Log in')
                                    }
                                </KLink>
                            )
                        }
                        <Flex alignItems="center">
                            <Box
                                cursor="pointer"
                                pr={2}
                                pt={1}>
                                <SwitchLanguage/>
                            </Box>
                            <Box
                                cursor="pointer"
                                pr={2}
                                pt={1}
                                onClick={() => {
                                    history.push(CONSTANT_ROUTES.Search)
                                }}>
                                <ActionIcon>
                                    <Icon
                                        as={Search}
                                        width="26px" height="26px"
                                        color="gray.400"
                                        _hover={{
                                            color: 'gray.500',
                                        }}
                                    />
                                </ActionIcon>
                            </Box>
                            {
                                userSession?.record != null && (
                                    <Box
                                        pr={2}
                                        cursor="pointer"
                                        onClick={() => {
                                            history.push(CONSTANT_ROUTES.Chat)
                                        }}>
                                        <ActionIcon>
                                            <Icon
                                                as={Chat}
                                                width="20px" height="20px"
                                                color="gray.400"
                                                _hover={{
                                                    color: 'gray.500',
                                                }}
                                            />
                                        </ActionIcon>
                                    </Box>
                                )}
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded="full"
                                    variant="link"
                                    cursor="pointer">
                                    {
                                        userSession?.record?.thumbnail != null && (
                                            <Avatar
                                                size="sm"
                                                src={getCdnUrl(userSession?.record?.thumbnail)}
                                            />
                                        )
                                    }
                                </MenuButton>
                                <MenuList>
                                    <Link as={LLink} to={CONSTANT_ROUTES.Home}>
                                        <MenuItem
                                            fontSize="sm"
                                            fontWeight={500}
                                            color={useColorModeValue('gray.600', 'gray.200')}
                                            _hover={{
                                                textDecoration: 'none',
                                                color: useColorModeValue('gray.800', 'white'),
                                            }}>
                                            {t('Home')}
                                        </MenuItem>
                                    </Link>
                                    <Link
                                        as={LLink}
                                        to={CONSTANT_ROUTES.Setting}
                                        fontSize="sm"
                                        fontWeight={500}
                                        color={useColorModeValue('gray.600', 'gray.200')}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: useColorModeValue('gray.800', 'white'),
                                        }}>
                                        <MenuItem>
                                            {t('Setting')}
                                        </MenuItem>
                                    </Link>
                                    <Link
                                        href={CONSTANT_ROUTES.Chat}
                                        fontSize="sm"
                                        fontWeight={500}
                                        color={useColorModeValue('gray.600', 'gray.200')}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: useColorModeValue('gray.800', 'white'),
                                        }}>
                                        <MenuItem>
                                            {t('_Chat')}
                                        </MenuItem>
                                    </Link>
                                    <MenuDivider/>

                                    <Link
                                        href={CONSTANT_ROUTES.CurrentLearning}
                                        fontSize="sm"
                                        fontWeight={500}
                                        color={useColorModeValue('gray.600', 'gray.200')}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: useColorModeValue('gray.800', 'white'),
                                        }}>
                                        <MenuItem>
                                            {t('Board')}
                                        </MenuItem>
                                    </Link>

                                    <Link
                                        href={CONSTANT_ROUTES.Write}
                                        fontSize="sm"
                                        fontWeight={500}
                                        color={useColorModeValue('gray.600', 'gray.200')}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: useColorModeValue('gray.800', 'white'),
                                        }}>
                                        <MenuItem>
                                            {t('Write')}
                                        </MenuItem>
                                    </Link>

                                    <Link
                                        href={CONSTANT_ROUTES.ExerciseList}
                                        fontSize="sm"
                                        fontWeight={500}
                                        color={useColorModeValue('gray.600', 'gray.200')}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: useColorModeValue('gray.800', 'white'),
                                        }}>
                                        <MenuItem>
                                            {t('Excercise List')}
                                        </MenuItem>
                                    </Link>

                                    <Link
                                        href={collectionUrl}
                                        fontSize="sm"
                                        fontWeight={500}
                                        color={useColorModeValue('gray.600', 'gray.200')}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: useColorModeValue('gray.800', 'white'),
                                        }}>
                                        <MenuItem>
                                            {t('My Collection')}
                                        </MenuItem>
                                    </Link>
                                    <Link
                                        href={CONSTANT_ROUTES.MySeries}
                                        fontSize="sm"
                                        fontWeight={500}
                                        color={useColorModeValue('gray.600', 'gray.200')}
                                        _hover={{
                                            textDecoration: 'none',
                                            color: useColorModeValue('gray.800', 'white'),
                                        }}>
                                        <MenuItem>
                                            我的训练营
                                        </MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Stack>
                </Container>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav/>
            </Collapse>
        </Box>
    );
})

export const DesktopNav: FC = () => (
    <Stack direction="row" spacing={4}>
        {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
                <Popover trigger="hover" placement="bottom-start">
                    <PopoverTrigger>
                        <Link
                            p={2}
                            href={navItem.href ?? '#'}
                            fontSize="sm"
                            fontWeight={500}
                            color={useColorModeValue('gray.600', 'gray.200')}
                            _hover={{
                                textDecoration: 'none',
                                color: useColorModeValue('gray.800', 'white'),
                            }}>
                            {navItem.label}
                        </Link>
                    </PopoverTrigger>
                    {navItem.children && (
                        <PopoverContent
                            border={0}
                            boxShadow="xl"
                            bg={useColorModeValue('white', 'gray.800')}
                            p={4}
                            rounded="xl"
                            minW="sm">
                            <Stack>
                                {navItem.children.map((child) => (
                                    <DesktopSubNav key={child.label} {...child} />
                                ))}
                            </Stack>
                        </PopoverContent>
                    )}
                </Popover>
            </Box>
        ))}
    </Stack>
);

function DesktopSubNav({label, href, subLabel}: NavItem) {
    return <Link
        href={href}
        role="group"
        display="block"
        p={2}
        rounded="md"
        _hover={{bg: useColorModeValue('pink.50', 'gray.900')}}>
        <Stack direction="row" align="center">
            <Box>
                <Text
                    transition="all .3s ease"
                    _groupHover={{color: 'pink.400'}}
                    fontWeight={500}>
                    {label}
                </Text>
                <Text fontSize="sm">{subLabel}</Text>
            </Box>
            <Flex
                transition="all .3s ease"
                transform="translateX(-10px)"
                opacity={0}
                _groupHover={{opacity: '100%', transform: 'translateX(0)'}}
                justify="flex-end"
                align="center"
                flex={1}>
                <Icon color="pink.400" w={5} h={5} as={ChevronRightIcon}/>
            </Flex>
        </Stack>
    </Link>
}

function MobileNav() {
    return <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{md: 'none'}}>
        {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
        ))}
    </Stack>
}

function MobileNavItem({label, children, href}: NavItem) {
    const {isOpen, onToggle} = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify="space-between"
                align="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition="all .25s ease-in-out"
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{marginTop: '0 !important'}}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle="solid"
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align="start">
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
}

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: '马上训练营',
        href: CONSTANT_ROUTES.MySeries,
    },
    {
        label: '帮助中心',
        href: CONSTANT_ROUTES.Help,
    },
];
