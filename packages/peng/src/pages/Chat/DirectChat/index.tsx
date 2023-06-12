import {useEffect, FunctionComponent, memo} from "react";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import {createStyles} from "@mantine/core";
import {Presence} from "@chatscope/use-chat/dist/Presence";
import {nanoid} from "nanoid";
import {useMutation, useQuery} from "react-query";
import {requestGetGroupDetail, requestSendMsg} from "kun-shared/built/apis/send-sys-msg";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {MainContainer,

    // @ts-ignore
} from "@chatscope/chat-ui-kit-react";
import {
    Conversation, ConversationId,
    ConversationRole, Participant, TypingUsersList, useChat, User, UserStatus
} from "@chatscope/use-chat";
import {PengChat} from "../../../components/Chat";
import {E12xampleChatService} from "../../../components/Chat/C";
import {useCurrentUserState} from "../../../state";
import {useSeeUserDetail} from "../../../react-query/useUserSession";
import {KunBasicStorage} from "./BasicS";

export const joeModel = new User(
    {
        id: '1',
        username: "Joe",
        firstName: "Joe",
        lastName: "Joe",
    }
)

const messageIdGenerator = () => nanoid();
const groupIdGenerator = () => nanoid();

export const chatStorage = new KunBasicStorage({groupIdGenerator, messageIdGenerator})

export function createConversationEmpty(id: ConversationId, membersList: string[]): Conversation {
    return new Conversation({
        id,
        participants: membersList.map(item =>
            new Participant({
                id: item,
                role: new ConversationRole([])
            })
        ),
        unreadCounter: 0,
        typingUsers: new TypingUsersList({items: []}),
        draft: `chat ${id}`
    });
}

export function createConversation(id: ConversationId, userId: string): Conversation {
    return new Conversation({
        id,
        participants: [
            new Participant({
                id: userId,
                role: new ConversationRole([])
            })
        ],
        unreadCounter: 0,
        typingUsers: new TypingUsersList({items: []}),
        draft: ""
    });
}

export const useChatContainerStyles = createStyles(() => ({
    container: {
        minHeight: '430px',
    }}));


const conversationId = nanoid()
const conversationIdUser1 = nanoid()

// @ts-ignore
export const serviceFactory = (storage, updateState) => new E12xampleChatService(storage, updateState);

export const DirectChat: FunctionComponent<{groupId: string , userId: string}> =  memo(({groupId, userId}) => {

    const {data} = useQuery(['groupId', groupId], () => requestGetGroupDetail({
        groupId
    }), {
        enabled: groupId !== ''
    })

    const {data: userDetail} =useSeeUserDetail(userId)

    const {classes} = useChatContainerStyles()

    const requestData = useMutation(async (text: string) => {
        await requestSendMsg({
             group: groupId,
            text,
        })
    })


    const {
        addMessage,
        currentMessages, conversations, activeConversation, setActiveConversation,  sendMessage, getUser, currentMessage, setCurrentMessage,
        sendTyping, setCurrentUser, updateState
    } = useChat();

    // @ts-ignore

    // @ts-ignore

    const {user: currentUserOpt, chatUser} = useCurrentUserState()

    useEffect(() => {
        if(userDetail?.record != null && currentUserOpt?.userId != null) {
            console.log("con1 addUser");
            const userName2 = userDetail?.record?.nickName ??  userDetail?.record?.userName  ?? 'user'
            const userId2 = userDetail?.record?.userId ?? ''
            const userNameMe = currentUserOpt?.nickName ?? currentUserOpt?.userName ?? 'me';
                console.log("con1 addUser2");
                chatStorage.addUser(new User({
                    id: currentUserOpt?.userId ?? '',
                    presence: new Presence({status: UserStatus.Available, description: ""}),
                    firstName: "",
                    lastName: "",
                    username: userNameMe,
                    email: "",
                    avatar: currentUserOpt?.thumbnail ? getKunImageUrl(currentUserOpt?.thumbnail ?? '') : '',
                    bio: ""
                }));
            // }
            chatStorage.addUser(new User({
                id: userDetail?.record?.userId,
                presence: new Presence({status: UserStatus.Available, description: ""}),
                firstName: "",
                lastName: "",
                username: userName2,
                email: "",
                avatar: userDetail?.record?.thumbnail ? getKunImageUrl(userDetail?.record?.thumbnail ?? '') : '',
                bio: ""
            }));

            console.log("con1 addConversation");
            chatStorage.addConversation(createConversation(groupId, userId2));
        }
    }, [currentUserOpt?.nickName, currentUserOpt?.thumbnail, currentUserOpt?.userId, currentUserOpt?.userName, groupId, updateState, userDetail?.record])

   return  (
       <div>
           <MainContainer className={classes.container}>
                <PengChat user={chatUser}/>
           </MainContainer>
        </div>
   )
})
