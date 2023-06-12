import {Language} from "@styled-icons/material/Language";
import {MantineTheme, ActionIcon, createStyles, Menu} from '@mantine/core';
import {Icon} from "@chakra-ui/react";
import {FunctionComponent} from "react";
import { Search } from '@styled-icons/evil/Search';
import {useCookies} from "react-cookie";
import {useTranslation} from "react-i18next";
import {getUniLanguage} from "../../pages/LoginPage/GetUniLanguage";

const useStyles = createStyles((theme: MantineTheme) => ({
    itemHovered: {
        // backgroundColor: theme.colors[theme.primaryColor][4],
        backgroundColor: theme.colors.gray[3],
        color: theme.white,
    },
}));

export const SwitchLanguage: FunctionComponent = () => {
    const {i18n} = useTranslation();
    const [_,setCookie] = useCookies(['lang']);

    const { classes } = useStyles();

    return (
        <Menu size="auto" classNames={classes} withArrow closeOnItemClick control={
            <ActionIcon size="md">
                <Icon
                    as={Language}
                    width="22px" height="22px"
                    color="gray.400"
                    _hover={{
                        color: 'gray.500',
                    }}
                />
            </ActionIcon>
        }>
            <Menu.Item onClick={() => {
                    i18n.changeLanguage('zh')
                   setCookie('lang', getUniLanguage('zh'), { path: '/' });
            }}>
                ZH
            </Menu.Item>
            <Menu.Item onClick={() => {
                i18n.changeLanguage('en')
                setCookie('lang', getUniLanguage('en'), { path: '/' });
            }}>
                EN
            </Menu.Item>
        </Menu>
    )
}