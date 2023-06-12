import {FunctionComponent} from "react";
import {Button, useColorModeValue} from "@chakra-ui/react";

export const NavigationItem: FunctionComponent<{
    href ?: string
    asPath: string
}> = props => {
    const isActive = props.asPath === props.href;

    const activeBg = useColorModeValue('orange.500', 'green.900');

    return (
        <Button
            fontSize="sm"
            rounded="md"
            px={3}
            py={2}
            bg={isActive ? activeBg : undefined}
            fontWeight={isActive ? 600 : 400}
            color={
                isActive ? 'white' : 'gray.700'
            }
            _hover={{
                bg: isActive ? activeBg : useColorModeValue('gray.100', 'gray.900'),
            }}>
            {props.children}
        </Button>
    );
}

