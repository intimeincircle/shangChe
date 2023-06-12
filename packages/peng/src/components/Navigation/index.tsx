import {FunctionComponent} from "react";
import {useLocation} from "react-use";
import {Box, Group, Navbar } from "@mantine/core";
import {Heading, StackProps} from '@chakra-ui/react';
import {useHistory} from "react-router";
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";
import {NavigationItem} from './NavigationItem'
import {primarySchema} from "../../app/theme";

export interface LabelItem {
    key?: string;
    title: string;
    href ?: string;
}

export interface NavigationItem {
    key?: string;
    title: string;
    children?: LabelItem[]
}

export const defaultNavigations: NavigationItem[] = [
    {
        key: '1',
        title: 'Profile',
        children: [
            {
                title:  '简介',
                href:  CONSTANT_ROUTES.Setting
            },
            {
                title:  '练习方式',
                href:  CONSTANT_ROUTES.Contacts
            },
            {
                title:  '提醒设置',
                href:  CONSTANT_ROUTES.NoticeSetting
            }
        ]
    },
    {
        key: '2',
        title: 'Profile',
        children: [
            {
                title:  '钱包',
                href:  CONSTANT_ROUTES.Wallet
            },
        ]
    },
    {
        key: '3',
        title: '我的关注',
        children: [
            {
                title:  '我的关注',
                href:  CONSTANT_ROUTES.ConcernMembers
            },
        ]
    },

]

export const Navigation: FunctionComponent<{navigation: NavigationItem[], stackProps ?:StackProps  }> = (props) => {

    const history = useHistory();
    console.log('history.location.pathname', history.location.pathname);

    const a = useLocation()
    return (
        <Navbar height={600} width={{ base: 160 }} sx={{
            borderRight: 'none',
        }}>
                 {props.navigation.map((category:NavigationItem) => (
                     <>
                         <Heading size="md" pt="10px" pb="20px">
                             {category.title}
                         </Heading>

                         <Group direction="column" spacing="xs" sx={{marginBottom: '26px'}}>
                             {
                                 category.children?.map((subCategory) => (
                                         <Box
                                             onClick={() => {
                                                 history.push(
                                                     subCategory.href
                                                 )
                                             }}
                                             sx={(theme) => ({
                                                 cursor: 'pointer',
                                                 backgroundColor: a.pathname === subCategory.href  ? theme.colors[primarySchema][3] : theme.colors.gray[0],
                                                 color: a.pathname === subCategory.href  ? 'white' : theme.colors.gray[6],
                                                 textAlign: 'left',
                                                 lineHeight: '32px',
                                                 height: '32px',
                                                 paddingLeft: '6px',
                                                 width: '100%',
                                                 borderRadius: theme.radius.md,
                                                 '&:hover': {
                                                     backgroundColor: a.pathname === subCategory.href  ? theme.colors[primarySchema][3] : theme.colors.gray[1],
                                                     // backgroundColor: theme.colors.gray[1],
                                                 },
                                             })}
                                         >
                                             {subCategory.title}
                                         </Box>
                                 ))
                             }
                         </Group>
                     </>
                 ))}
        </Navbar>
    )
}

