import {useQuery} from "react-query";
import {requestGetPrivateGroup, requestStartChatMsg} from "kun-shared/built/apis/send-sys-msg";
import {useHistory} from "react-router";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import {getUserProfileById} from "kun-shared/built/apis/auth/user";
import {FunctionComponent, useCallback} from "react";
import {useDidMount} from "kun-react-tools/built/hooks/use-dit-mount";
import {useImmer} from "use-immer";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import { KunUser } from "kun-shared/built/src_managed/KunUser";
import {ConstDefaultMockConfig} from "../../app/config";
import {goToDirectChat, goToUser} from "../../navigators";

interface Props {
    userId: string;
}

export const  SocialProfile: FunctionComponent<Props> = ({userId}) =>  {

    const history = useHistory();

    const [user,setUser] = useImmer<KunUser|undefined>(undefined)

    const { data: chatGroupData } = useQuery(['chat-user', userId], () => requestGetPrivateGroup({
        userId2: userId
    }))

    useDidMount(async () => {
        const r = await getUserProfileById({uuid: userId});
        setUser(r.record)
    })

    const clickChat = useCallback(async () => {
        if(chatGroupData?.record == null) {
            const r = await requestStartChatMsg({
                userId2: userId
            })
            history.push(goToDirectChat(r.msg))
        }else {
            const id = chatGroupData?.record?.groupId
            history.push(goToDirectChat(id))
        }
    }, [chatGroupData?.record, history, userId])

    return (
        <Center py={6}>
            <Box
                w="full"
                rounded="lg"
                p={6}
                textAlign="center">
                <Avatar
                    size="xl"
                    src={getKunImageUrl(user?.thumbnail ?? ConstDefaultMockConfig.defaultAvatarUrl)}
                    mb={4}
                    pos="relative"
                    _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: 'green.300',
                        border: '2px solid white',
                        rounded: 'full',
                        pos: 'absolute',
                        bottom: 0,
                        right: 3,
                    }}
                />
                <Heading fontSize="2xl" fontFamily="body">
                    {user?.nickName  ?? ''}
                </Heading>
                <Text
                    textAlign="center"
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    {user?.slogan ?? ''}
                </Text>

                <Stack mt={8} direction="row" spacing={4}>
                    <Button
                        flex={1}
                        onClick={clickChat}
                        fontSize="sm"
                        rounded="full"
                        _focus={{
                            bg: 'gray.200',
                        }}>
                        发消息
                    </Button>
                    <Button
                        variant="link"
                        flex={1}
                        fontSize="sm"
                        rounded="full"
                        bg="blue.400"
                        color="white"
                        boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}>
                        查看
                    </Button>
                </Stack>
            </Box>
        </Center>
    )
}
