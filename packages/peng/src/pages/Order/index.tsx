import { memo } from "react";
import { Helmet } from "react-helmet";
import {
    Container,
    Link,
    Stack,
    Flex,
    Heading,
    Text,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import {Link as RLink} from 'react-router-dom';
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";

interface Props {
    staticContext?: { status: string };
}

function Order({ staticContext }: Props) {
    // We have to check if staticContext exists
    // because it will be undefined if rendered through a BrowserRoute
    /* istanbul ignore next */
    if (staticContext) staticContext.status = "404";

    return (
        <div>
            <Helmet title="Oops" />
            <Flex align="center" justify="center" h="100vh" w="full">
                <Stack
                    as={Container}
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    rounded="xl"
                    p={8}
                    spacing={6}
                    maxW="lg"
                    align="center"
                    textAlign="center">
                    <Stack spacing={2}>
                        <Heading>404</Heading>
                        <Text>
                            Order
                        </Text>
                    </Stack>
                    <Flex>
                        <Link as={RLink} to={CONSTANT_ROUTES.Home}>
                            <Button
                                as="a"
                                colorScheme="green"
                                rounded="full"
                                bg="green.400"
                                _hover={{ bg: 'green.500' }}>
                                Order
                            </Button>
                        </Link>
                    </Flex>
                </Stack>
            </Flex>

        </div>
    );
}

Order.defaultProps = {
    staticContext: null,
};

export default memo(Order);
