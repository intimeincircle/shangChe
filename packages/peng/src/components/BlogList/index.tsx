import {FunctionComponent, useMemo} from "react";
import { Pagination } from '@mantine/core';
import { usePagination , useScrollIntoView } from '@mantine/hooks';
import {BlogItem} from "kun-shared/built/apis/getKunTable";
import {Box, Heading, Image, Link, Text, useColorModeValue} from "@chakra-ui/react";





const pageSize = 2;

export const EMPTY_ARRAY : ReadonlyArray<BlogItem> = []

export const BlogList: FunctionComponent<{
    list: BlogItem[]
}> = ({list = EMPTY_ARRAY}) => {
    const total = useMemo(() => Math.ceil(list.length/pageSize), [list.length])
    const pagination = usePagination({ total , initialPage: 1 });

    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });

    const truncateList = useMemo(()  => list.slice((pagination.active - 1)* pageSize , (pagination.active)* pageSize), [
        pagination.active, list]);

    return (
        <>
            <div ref={targetRef}/>
            {
                truncateList.map(item => (
                    <>
                        <Box
                            marginTop={{base: '1', sm: '5'}}
                            display="flex"
                            flexDirection={{base: 'column', sm: 'row'}}
                            justifyContent="space-between">
                            <Box
                                display="flex"
                                flex="1"
                                marginRight="3"
                                position="relative"
                                alignItems="center">
                                <Box
                                    width={{base: '100%', sm: '85%'}}
                                    zIndex="2"
                                    marginLeft={{base: '0', sm: '5%'}}
                                    marginTop="5%">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <Link textDecoration="none" _hover={{textDecoration: 'none'}}>
                                        <Image
                                            borderRadius="lg"
                                            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                                            alt="some good alt text"
                                            objectFit="contain"
                                        />
                                    </Link>
                                </Box>
                                <Box zIndex="1" width="100%" position="absolute" height="100%">
                                    <Box
                                        bgGradient={useColorModeValue(
                                            'radial(orange.600 1px, transparent 1px)',
                                            'radial(orange.300 1px, transparent 1px)'
                                        )}
                                        backgroundSize="20px 20px"
                                        opacity="0.4"
                                        height="100%"
                                    />
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            flex="1"
                            flexDirection="column"
                            justifyContent="center"
                            marginTop={{base: '3', sm: '0'}}>
                            <Heading marginTop="1">
                                <a href={`/live/p/${item.id}`} target="_blank" rel="noreferrer">
                                    {item.name}
                                </a>
                            </Heading>
                            <Text
                                as="p"
                                marginTop="2"
                                color={useColorModeValue('gray.700', 'gray.200')}
                                fontSize="lg">
                                {
                                    item.name
                                }
                            </Text>
                        </Box>
                    </>
                ))
            }
            <Pagination total={total} page={pagination.active} onChange={(p) => {
                 scrollIntoView()
                 pagination.setPage(p)
            }} />
        </>
    )
}