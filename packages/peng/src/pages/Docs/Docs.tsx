import React, {FunctionComponent} from "react";
import {Helmet} from "react-helmet";
import {Stack, useColorModeValue} from "@chakra-ui/react";
import {BlogItem} from "kun-shared/built/apis/getKunTable";
import {SimpleHeader} from "../../components/SimpleHeader";
import {KunFooter} from "../../components/Footer";
import {
    reactQuueryGetNotionTable,
    usePrefetch
} from "../../react-query/core";
import {BlogList} from "../../components/BlogList";
import {useQueryParams} from "../../app/params";

const Docs: FunctionComponent = () => {
    // // @ts-ignore
    // const key = queryGetBlogList.fun({id: 10})

    const params = useQueryParams() as {name: string};

    const {data: data1}= usePrefetch(params, reactQuueryGetNotionTable)

    console.log('data1', data1);
    // const {data: data1} = useQuery(key, mockFetchQuery, {
    //     staleTime: Infinity,
    //     cacheTime: Infinity,
    //     useErrorBoundary: false
    // })

    const data = data1 as BlogItem[]

    return (
        <>
            <Helmet title="Docs"/>
            <SimpleHeader/>

            <Stack
                bg={useColorModeValue('gray.50', 'gray.800')}
                py={16}
                px={8}
                pt={10}
                spacing={{base: 8, md: 10}}
                align="center"
                direction="column">
                xxxxxxxxxxxxx
                <BlogList list={data} />
            </Stack>
            <KunFooter/>
        </>
    )
}
export default React.memo(Docs)
