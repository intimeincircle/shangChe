/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsxImportSource @emotion/react */
import {memo} from "react";
import {Box, Container, Flex, useColorModeValue,} from '@chakra-ui/react';
import {useTranslation} from "react-i18next";
import {Header} from "../../components/Header";
import {LoginComp} from "../../components/LoginComp";

export const CONST_SOME = 'kun-user-profile';

function LoginPage(): JSX.Element {
    const {t} = useTranslation();

    return <div>
        <Header title={t('Log in')} />
        <Flex
            minH="100vh"
            align="center"
            justify="center"
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Container mt="24px">
                <Box
                    rounded="lg"
                    bg="white"
                    boxShadow="lg">
                    <LoginComp/>
                </Box>
            </Container>
        </Flex>
    </div>
}

export default memo(LoginPage);
