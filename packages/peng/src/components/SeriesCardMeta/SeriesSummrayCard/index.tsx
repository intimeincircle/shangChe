import {FunctionComponent} from "react";
import {ConstantSeriesType} from "kun-shared/built/src_managed/ConstantSeriesType";
// import { IoCardSharp } from "react-icons/io5";
// import { BiTask } from "react-icons/bi";
import {Button, StackDivider, Flex, VStack, Box} from "@chakra-ui/react";
import {Icon} from '@chakra-ui/icons'
// import {AiOutlineDollarCircle} from 'react-icons/ai'
import {getSeriesTypeLabel} from "../../../enums";

interface Props {
    price: number;
    article: number;
    seriesType: ConstantSeriesType,
    subscribed : boolean
}

export const SeriesSummaryCard: FunctionComponent<Props> = (props) => (
        <Box borderWidth="1px" borderRadius="lg" maxW="sm" width="320px">
            <VStack                  divider={<StackDivider borderColor="gray.200" />}>
                
                <Box py="2" px="12px">
                    <Button minW="100%" maxW="100%" width="200px">{props.subscribed ? `订阅`: 'Go To'}</Button>
                </Box>
                
                <Flex direction="row" align="center" justify="space-between" width="full" p="12px">
                <Box >
                    {/* <Icon as={AiOutlineDollarCircle} w={5} h={5} mr={2} /> */}
                    价格
                </Box>
                <Box>
                    {props.price}
                </Box>
                </Flex>

                <Flex align="center" justify="space-between" width="full"   p="12px">
                    <Box >
                        {/* <Icon as={IoCardSharp} w={4} h={5} mr={2} /> */}
                        {/* 文章数 */}
                    </Box>
                    <Box>
                        {props.article}
                    </Box>
                </Flex>

                <Flex align="center" justify="space-between" width="full"   p="12px">
                    <Box >
                        <Icon w={5} h={5} mr={2}/>
                        类型
                    </Box>
                    <Box>
                        {getSeriesTypeLabel(props.seriesType)}
                    </Box>
                </Flex>
            </VStack>
        </Box>
    )
