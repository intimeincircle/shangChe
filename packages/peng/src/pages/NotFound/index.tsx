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
import {ConstKunTheme} from "../../app/theme";

interface Props {
  staticContext?: { status: string };
}

function NotFound({ staticContext }: Props) {
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
                        没找到该网页，可能该网页已经移动
                    </Text>
                </Stack>
                <Flex>
                    <Link as={RLink} to={CONSTANT_ROUTES.Home}>
                        <Button
                            as="a"
                            colorScheme="green"
                            rounded="full"
                            bg={ConstKunTheme.primaryColor}
                            _hover={{ bg: ConstKunTheme.primaryHoverColor }}>
                            回到首页addd SAd
                        </Button>
                    </Link>
                </Flex>
            </Stack>
        </Flex>

    </div>
  );
}

NotFound.defaultProps = {
  staticContext: null,
};

export default memo(NotFound);
