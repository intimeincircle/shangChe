import {FunctionComponent, memo, useState} from "react";
import { Helmet } from "react-helmet";
import {Container, Box, Flex,  VStack, StackDivider, Heading} from '@chakra-ui/react';
import {useEffectAsync} from "kun-react-tools/built/hooks/use-async-effect";
import {reqGetAppConfig} from "kun-shared/built/apis/appconfig/req-get-appconfig";
// eslint-disable-next-line camelcase
import {EnumLqChannel_KUN_HorseInhabitant} from "kun-shared/built/src_managed/EnumLqChannel_KUN_Horse";
import {AppConfig} from "kun-shared/built/src_managed/AppConfig";
// @ts-ignore
import {defaultNavigations, Navigation} from "../../components/Navigation";
import {Header} from "../../components/Header";
import {checkIfAuthSuccess} from "../../util/check-auth-success";
import ChangeNoticeTime from "../SettingPage/ChangeNoticeTime";
import SettingWechatNotice from "../SettingPage/SettingWechatNotice";
import {Scaffold} from "../../components/Scaffold";
import {SwitchesCard} from "./SwithCards";

const ContactsPage: FunctionComponent = () => {
    const [setting, setSetting] = useState<AppConfig|undefined>(undefined);

    const refresh = async ():Promise<void> => {
        const  res = await reqGetAppConfig(EnumLqChannel_KUN_HorseInhabitant);
        console.log('resssssss');
        if(checkIfAuthSuccess(res)) {
            console.log(res);
            setSetting(res.record)
        }
    }
    useEffectAsync(async () => {
        await refresh();
    },[])

    if(setting == null) {
        return null;
    }

    return (
        <Scaffold title="Contacts" >
            <Container maxW="container.lg">
                <Flex direction="row" mt="24px">
                    <Box mr="32px">
                        <Navigation navigation={defaultNavigations} />
                    </Box>
                    <Box minW="container.md" pt="24px" >
                        <VStack
                            width="100%"
                            spacing="24px"
                            divider={<StackDivider borderColor="gray.200" />}
                        >
                            <SwitchesCard title="title" description="description" data ={[
                                {
                                    title: 'title',
                                    description: 'description'
                                },
    {
        title: 'title',
        description: 'description'
    },
]}/>
                            <Container maxW="container.lg">
                                <Flex justifyContent="space-between" >
                                    <Heading as="h4" size="md">
                                        Email
                                    </Heading>
                                    <ChangeNoticeTime config={setting} onRefresh={refresh}/>
                                </Flex>
                            </Container>

                        </VStack>
                    </Box>
                </Flex>
            </Container>
        </Scaffold>
    );
};

export default memo(ContactsPage);
