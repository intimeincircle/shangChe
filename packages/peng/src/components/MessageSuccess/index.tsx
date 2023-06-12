import React, {useState, FunctionComponent, useEffect} from "react";
import {Helmet} from "react-helmet";
import {Container, Link, Box, Button,Text, Stack, Heading} from "@chakra-ui/react";
import {getParameter} from "kun-tools/built/common/get-parameter";
import {NavigationMessageInfo} from "../../navigators/NavigationMessageInfo";
import {NavigateMsgInfos} from "../../navigators";
import {Header} from "../Header";
import {ConstKunTheme} from "../../app/theme";
import {KunFooter} from "../Footer";

// TODO you can do it later
const  MessageSuccessComp : FunctionComponent = () => {

    const [url, setUrl] = useState<string>()
    const [urlNext, setUrlNext] = useState<string>()
    const  [msg, setMessage] = useState<{msg: string, button: string, buttonNext ?: string, subMessage?: string}|undefined>()

    useEffect(()  => {
        const url1 = getParameter('url')
        const urlNext1 = getParameter('urlNext')
        const msg1 = getParameter('msg') as NavigationMessageInfo;
        const msgInfos  = NavigateMsgInfos[msg1]
        setMessage(msgInfos)
        setUrl(url1)
        setUrlNext(urlNext1)
    }, [])

    if(msg== null) {
        return null
    }

    return (
        <>
            <Helmet title="提示"/>
            <Header/>
            <Container maxW="3xl">
                <Stack
                    as={Box}
                    textAlign="center"
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        lineHeight="110%">
                        {msg?.msg}  <br />
                    </Heading>
                    <Text color="gray.500">
                        {
                            msg.subMessage
                        }
                    </Text>
                    <Stack
                        direction="column"
                        spacing={3}
                        align="center"
                        alignSelf="center"
                        position="relative">
                        <Link to={url} href={url}>
                            <Button
                                colorScheme="green"
                                bg={ConstKunTheme.primaryColor}
                                rounded="full"
                                px={6}
                                _hover={{
                                    bg: ConstKunTheme.primaryHoverColor
                                }}>
                                {
                                    msg.button
                                }
                            </Button>
                        </Link>


                        {
                            msg.buttonNext != null  && (
                                <Link to={urlNext} href={urlNext}>
                            <Button variant="link" colorScheme="blue" size="sm">
                        {
                            msg.buttonNext
                        }
                            </Button>
                                </Link>
                            )
                        }
                    </Stack>
                </Stack>
            </Container>
            <KunFooter/>
        </>
    )
}
export const MessageSuccess =  React.memo(MessageSuccessComp);