import React, {FunctionComponent} from "react";
import {Helmet} from "react-helmet";
import {Text, Box, Stack, useColorModeValue, Avatar} from "@chakra-ui/react";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import {SimpleHeader} from "../../components/SimpleHeader";
import {KunFooter} from "../../components/Footer";
import {ConstDefaultMockConfig} from "../../app/config";

const About: FunctionComponent = () => (
    <>
        <Helmet title="关于我们"/>
        <SimpleHeader />
        <Stack
            bg={useColorModeValue('gray.50', 'gray.800')}
            py={16}
            px={8}
            pt={10}
            spacing={{ base: 8, md: 10 }}
            align="center"
            direction="column">
            <Text
                fontSize={{ base: 'xl', md: '2xl' }}
                textAlign="center"
                maxW="3xl">
                Help one find other one!
            </Text>
            <Box textAlign="center">
                 <Avatar 
                    src={ 
                        getKunImageUrl(ConstDefaultMockConfig.defaultChatAvatar)
                    } 
                    alt="大壮"
                    mb={2} 
                 /> 

                <Text fontWeight={600}>大壮</Text>
                <Text fontSize="sm" color={useColorModeValue('gray.400', 'gray.400')}>
                    产品负责人
                </Text>
            </Box>
        </Stack>
        <KunFooter/>
    </>
)
export default React.memo(About)
