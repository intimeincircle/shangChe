import {FunctionComponent, useState} from "react";
import {
    Flex,
    Stack,
    Heading,
    Text,
    Input,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import {requestSendSysMsg} from "kun-shared/built/apis/send-sys-msg";
import { toast } from "react-hot-toast";
import {ToAuditTask} from "./ToAuditTask/ToAudit";
import {ToBankSomeOne} from "./ToBankSomeOne";

const Page: FunctionComponent = () => {

    const [txt, setTxt] = useState('');

    return (
        <div>
            <Flex
                minH="100vh"
                align="center"
                justify="center"
                py={12}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <ToAuditTask/>

                <ToBankSomeOne/>

                <Stack
                    boxShadow="2xl"
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded="xl"
                    p={10}
                    spacing={8}
                    align="center">
                    <Stack align="center" spacing={2}>
                        <Heading
                            textTransform="uppercase"
                            fontSize="3xl"
                            color={useColorModeValue('gray.800', 'gray.200')}>
                            Subscribe
                        </Heading>
                        <Text fontSize="lg" color="gray.500">
                            Subscribe to our newsletter & stay up to date!
                        </Text>
                    </Stack>
                    <Stack spacing={4} direction={{ base: 'column', md: 'row' }} w="full">
                        <Input
                            type="text"
                            placeholder="john@doe.net"
                            color={useColorModeValue('gray.800', 'gray.200')}
                            bg={useColorModeValue('gray.100', 'gray.600')}
                            rounded="full"
                            onChange={v => setTxt(v.target.value)}
                            border={0}
                            _focus={{
                                bg: useColorModeValue('gray.200', 'gray.800'),
                                outline: 'none',
                            }}
                        />
                        <Button
                            bg="blue.400"
                            rounded="full"
                            color="white"
                            flex="1 0 auto"
                            _hover={{ bg: 'blue.500' }}
                            onClick={ async () => {
                                await requestSendSysMsg({
        msg: txt
                                })
                                toast.success('Ok')
                            }}
                            _focus={{ bg: 'blue.500' }}>
                            Send
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </div>
    )
}

export default Page;
