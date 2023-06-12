import {FunctionComponent} from "react";
import {Container, Flex, useColorModeValue} from "@chakra-ui/react";
import {Logo} from "../Logo";

export const SimpleHeader: FunctionComponent = () => (
        <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH="60px"
            py={{base: 2}}
            px={{base: 4}}
            borderBottom={1}
            borderStyle="solid"
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align="center">
            <Container
                display="flex"
                align="center"
                alignItems="center"
                maxW="container.lg"
            >
                <Flex
                    flex={{base: 1, md: 'auto'}}
                    ml={{base: -2}}
                >
                    <Logo/>
                </Flex>
            </Container>
        </Flex>
    )
