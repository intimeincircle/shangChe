import {FunctionComponent} from "react";
import {Button, StackDivider, Flex, VStack, Box} from "@chakra-ui/react";
import { InfoIcon } from '@chakra-ui/icons'

interface Props {
    price: number;
    article: number;
}

// borderColor="gray.100"
// spacing="24px"
export const SeriesCard: FunctionComponent<Props> = (props) => (
    <Box borderWidth="1px" borderRadius="lg" maxW="sm" width="320px">
        <VStack                  divider={<StackDivider borderColor="gray.200" />}>

            <Box py="2" px="12px">
                <Button minW="100%" maxW="100%" width="200px">购买</Button>
            </Box>

            <Flex direction="row" align="center" justify="space-between" width="full" p="12px">
                <Box >
                    <InfoIcon mr={2}/>
                    价格
                </Box>
                <Box>
                    {props.price}
                </Box>
            </Flex>

            <Flex align="center" justify="space-between" width="full"   p="12px">
                <Box >
                    <InfoIcon mr={2}/>
                    文章数
                </Box>
                <Box>
                    {props.article}
                </Box>
            </Flex>
        </VStack>
    </Box>
)
