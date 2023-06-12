import {FunctionComponent, useMemo, useState} from "react";
import {Container, Avatar, Tabs, VStack, Text, HStack, TabList, Tab, Box} from "@chakra-ui/react";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import {WhiteHeader} from "../../components/WhiteHeader";
import {KunFooter} from "../../components/Footer";
import {SeriesByAuthor} from "../../components/SeriesByAuthor";
import {PostByAuthor} from "../../components/PostByAuthor";
import {ConstKunTheme} from "../../app/theme";
import {getQueryAuthorProfile, usePrefetch} from "../../react-query/core";
import {useQueryParams} from "../../app/params";

const Page: FunctionComponent = () => {

    const {userId} = useQueryParams() as {userId: string};
    const [tabIndex, setTabIndex] = useState(0);

    const {data: kunData} = usePrefetch({userId}, getQueryAuthorProfile)
    const profile = useMemo(() => kunData?.record, [kunData?.record])


    if (profile != null) {
        return (
            <>
                <WhiteHeader/>
                <div>
                    <Container maxW="container.md">
                        <HStack spacing="30px" pb="32px" pt="32px">
                            <Avatar src={getKunImageUrl(profile.brandAvatarName ?? '')} width="120px" height="120px"/>
                            <VStack alignItems="flex-start">
                                <Text>
                                    {
                                        profile.brandName
                                    }
                                </Text>
                                <Text>
                                    {
                                        profile.userId
                                    }
                                </Text>

                                <Text>
                                    {
                                        profile.brandDescription
                                    }
                                </Text>
                            </VStack>
                        </HStack>

                        <Tabs isLazy onChange={setTabIndex}>
                            <TabList>
                                <Tab>训练营</Tab>
                                <Tab>文章</Tab>
                            </TabList>
                        </Tabs>
                    </Container>

                    {
                        tabIndex === 0 && (
                            <Box maxW="full" bgColor={ConstKunTheme.bgColor}>
                                <Container maxW="container.md">
                                    <SeriesByAuthor id={userId}/>
                                </Container>

                            </Box>
                        )
                    }
                    {
                        tabIndex === 1 && (
                            <Box maxW="full" bgColor={ConstKunTheme.bgColor}>
                                <Container maxW="container.md">
                                    <PostByAuthor id={userId}/>
                                </Container>
                            </Box>
                        )
                    }
                    <KunFooter/>
                </div>
            </>
        )
    } 
    return <>empty</>
    
}

export default Page;
