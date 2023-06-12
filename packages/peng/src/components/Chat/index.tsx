import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {getAuthLocalKey, getLocalStorageItem} from "kun-tools/built/common/req";
import {EnumMsgFormat_AUDIOInhabitant} from "kun-shared/built/src_managed/EnumMsgFormat_AUDIO";
import {
    NoSqlPagingListDataKunMessageReturn
} from "kun-shared/built/fetch";

import {SendJsonChatMsgToChannel} from "kun-shared/built/src_managed/SendJsonChatMsgToChannel";
import {EnumMsgFormat_TEXTInhabitant} from "kun-shared/built/src_managed/EnumMsgFormat_TEXT";
import {SendMsgToChannelOutgoing} from "kun-shared/built/src_managed/SendMsgToChannelOutgoing";
import uuid from 'uuid-random';
import {NewMsgInComing} from "kun-shared/built/src_managed/NewMsgInComing";
// @ts-ignore
import {useScroll} from 'react-use';

// @ts-ignore
import ClippPlayer from 'clipp-player'

import {
    Avatar,
    ChatContainer,
    Conversation,
    ConversationHeader,
    ConversationList,
    MainContainer,
    Message,
    MessageGroup,
    MessageInput,
    MessageList,
    Sidebar,
    TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import { KunMessage } from "kun-shared/built/src_managed/KunMessage";
import { KunChatMessage} from "kun-shared/built/src_managed/KunChatMessage";
import {
    ChatMessage,
    MessageContent,
    MessageContentType,
    MessageDirection,
    MessageStatus,
    TextContent,
    useChat,
    User
} from "@chatscope/use-chat";
import {Button, createStyles, Group, ScrollArea} from "@mantine/core";
import toast from "react-hot-toast";
import Uppy from "@uppy/core";
import FileInput from "@uppy/file-input";
import XHRUpload from "@uppy/xhr-upload";
import {checkIsServer} from "kun-tools/built/common/check-is-server";
import {ImageContent, VideoContent} from "@chatscope/use-chat/dist/interfaces/MessageContent";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import { EnumMsgFormat_IMAGEInhabitant } from "kun-shared/built/src_managed/EnumMsgFormat_IMAGE";
import {MarkMessageOselete} from "kun-shared/built/src_managed/MarkMessageOselete";
import {MessageOseleted} from "kun-shared/built/src_managed/MessageOseleted";
import {chatStorage} from "../../pages/Chat/DirectChat";
import {useCurrentSocket} from "../BA";
import {defaultApi} from "../../react-query/api";
import {useMutationDefaultApi} from "../Comment/useMuationDefault";
import {useCurrentUserState} from "../../state";
import {checkIfAuthSuccess} from "../../util/check-auth-success";

interface MoreMessage {
    hasMore: boolean,
    pageState?: string
}

const coverMWithNewUUID = (item: KunChatMessage, userId: string, newId: string) => {
    let a;
    let content = {}
    switch(item.msgType) {
        case EnumMsgFormat_IMAGEInhabitant: {
            a= MessageContentType.Image
            content = {
                url:  getKunImageUrl(item.content!),
            } as ImageContent
            break;
        }
        case EnumMsgFormat_AUDIOInhabitant: {
            a= MessageContentType.Video
            content = {
                url:  getKunImageUrl(item.content!),
            } as ImageContent
            break;
        }
        default:
            content = {
                content:  item.content
            } as TextContent;
            a = MessageContentType.TextPlain
    }

    const message = new ChatMessage({
        id: newId,
        content: content as MessageContent<MessageContentType>,
        contentType: a as unknown as MessageContentType,
        senderId: item.fromUserId,
        direction: (item.fromUserId ?? '') === userId ? MessageDirection.Outgoing : MessageDirection.Incoming,
        status: MessageStatus.DeliveredToDevice
    });
    return message;
}

const coverM = (item: KunMessage, userId: string) => {
    let a;
    let content = {}
    switch(item.msgType) {
        case EnumMsgFormat_AUDIOInhabitant: {
            a= MessageContentType.Video
            content = {
                url:  getKunImageUrl(item.msgContent!),
            } as ImageContent
            break;
        }
        case EnumMsgFormat_IMAGEInhabitant: {
            a= MessageContentType.Image
            content = {
                url:  getKunImageUrl(item.msgContent!),
            } as ImageContent
            break;
        }
        default:
            content = {
                content:  item.msgContent
            } as TextContent;
            a = MessageContentType.TextPlain
    }

    const m = item as KunMessage & {
        fromUserId: string
    }
    const message = new ChatMessage({
        id: item.msgId,
        content: content as MessageContent<MessageContentType>,
        contentType: a as unknown as MessageContentType,
        senderId:(m.fromUser ?? m.fromUserId ?? '') === userId ? MessageDirection.Outgoing : MessageDirection.Incoming,
        direction: (m.fromUser ?? m.fromUserId ?? '') === userId ? MessageDirection.Outgoing : MessageDirection.Incoming,
        status: MessageStatus.DeliveredToDevice
    });
    return message;
}

const useStyles = createStyles(() => ({
    container: {
        height: '80vh',
    },
    sidebard: {
        height: '80vh',
        width: '200px',
    },
}));

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function PengChat1({user}: { user: User }) {
    const { userId } = useCurrentUserState();


    const {
        addMessage,
        currentMessages,
        conversations,
        updateMessage,
        activeConversation,
        setActiveConversation,
        sendMessage,
        getUser,
        currentMessage,
        setCurrentMessage,
        sendTyping,
        updateState
    } = useChat();


    const {lastMessage, sendJsonMessage} = useCurrentSocket()
    const cId: React.MutableRefObject<string|null> = useRef<string|null>(null)

    const handleSendAudio = useCallback((imageUrl: string, activeConversationId: string) => {
        const id = uuid().replaceAll('-', '')

        const co: MessageContent<ImageContent> = {
            url: getKunImageUrl(imageUrl),
        } as unknown as MessageContent<ImageContent>

        const message = new ChatMessage({
            id,
            content: co,
            contentType: MessageContentType.Video, // Video management
            senderId: userId ?? '', // userItem?.record?.user_id ?? user.id,
            direction: MessageDirection.Outgoing,
            status: MessageStatus.Pending
        });

        sendMessage({
            message,
            conversationId: activeConversationId,
            senderId: userId ?? '', // userItem?.record?.user_id ?? user.id,
            generateId: false
        });

        const m: SendJsonChatMsgToChannel = {
            msgType: EnumMsgFormat_AUDIOInhabitant,
            fromUserId: userId ?? '',
            msg: imageUrl,
            ackUUID: id,
            channelId: activeConversationId,
        }
        console.log('sendMessagem', m);
        console.log('userId', userId);
        console.log('sendMessage', m);
        sendJsonMessage(m)
    }, [sendJsonMessage, sendMessage, userId]);

    const handleSendImage = useCallback((imageUrl: string, activeConversationId: string) => {
        const id = uuid().replaceAll('-', '')
        const co: MessageContent<ImageContent> = {
            url: getKunImageUrl(imageUrl),
        } as unknown as MessageContent<ImageContent>

        const message = new ChatMessage({
            id,
            content: co,
            contentType: MessageContentType.Image,
            senderId: userId ?? '', // userItem?.record?.user_id ?? user.id,
            direction: MessageDirection.Outgoing,
            status: MessageStatus.Pending
        });

        sendMessage({
            message,
            conversationId: activeConversationId,
            senderId: userId ?? '', // userItem?.record?.user_id ?? user.id,
            generateId: false
        });

        const m: SendJsonChatMsgToChannel = {
            msgType: EnumMsgFormat_IMAGEInhabitant,
            fromUserId: userId ?? '',
            msg: imageUrl,
            ackUUID: id,
            channelId: activeConversationId,
        }
        console.log('sendMessagem', m);
        console.log('userId', userId);
        console.log('sendMessage', m);
        console.log('sendMessage', m);

        sendJsonMessage(m)
    }, [sendJsonMessage, sendMessage, userId]);

    useEffect(() => {
        // @ts-ignore
        if (lastMessage?.data != null) {
            console.log(typeof lastMessage.data)
            const data = JSON.parse(lastMessage.data) as NewMsgInComing;
            const dataAck = JSON.parse(lastMessage.data) as SendMsgToChannelOutgoing;
            const dataDelete = JSON.parse(lastMessage.data) as MessageOseleted;
            console.log('item item data1', data);
            console.log('item item data1', data);
            console.log('item item data1', data);
            if (data?.msg != null && data.uuid != null) { // handle kun messages
               const message =  coverM(data?.msg!, userId!)
                addMessage(message, data?.msg?.groupId, false)
                // addMessage: (message: ChatMessage<MessageContentType>, conversationId: ConversationId, generateId: boolean) => void;
            } else if (dataAck.ackUUID != null && dataAck.strHello != null) {
                const msg = dataAck.kunMessage
                if(userId != null){
                    chatStorage.updateMessageById(coverMWithNewUUID(msg, userId, dataAck.newUUID), dataAck.ackUUID)
                }
                updateState();
            } else if(dataDelete.markMessageOselete) {
                const d = dataDelete.markMessageOselete;
                chatStorage.removeMessage(d.channelId, d.msg)
                updateState();
            } else {
                toast.success(lastMessage?.data);
            }
        }
    }, [addMessage, lastMessage, updateState, user, userId])

    console.log('currentMessages', currentMessages)

    const {classes: chatClasses} = useStyles();
    const mutation = useMutationDefaultApi(defaultApi.postApiTapirV1Chat50ChatMessagesHistory)

    console.log('data data data xx', user)
    useEffect(() => {
        const uppy = new Uppy({
            autoProceed: true
        })
        uppy.setOptions({
            locale: {
                strings: {
                    'Choose files': '上传图片',
                    'chooseFiles': '上传图片',
                },
            },
        })
        console.log('Uppy')
        uppy.use(FileInput, {
            target: '.Uppy',
            inputName: 'Input',
            // target
        })
        uppy.use(XHRUpload, {
            endpoint: process.env.BACKEND_SAVA_IMAGE_API,
            formData: true,
            fieldName: 'file',
            headers: () => {
                console.log('x');
                return {
                    authorization: !checkIsServer() ? getLocalStorageItem("AUTH") ?? 'mock' : 'mock'
                }
            },
            getResponseData: (v, item) => {
                const a = JSON.parse(v);
                console.log('vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv', item);

                if(checkIfAuthSuccess(a)) {
                    const fileName = a.msg;
                    if(fileName.endsWith("mp3")) {
                        handleSendAudio(fileName, cId.current!)
                    } else {
                        handleSendImage(fileName, cId.current !)
                    }
                }else {
                    toast.success(a.msg)
                }
            }
        })
        return () => {
            uppy.close();
        }
    }, [handleSendAudio, handleSendImage])

    const [moreState,setMoreState] =useState<MoreMessage>({
        hasMore: true,
        pageState: undefined
    })

    const handleChannelChange =useCallback ((id: string, moreState1: MoreMessage) => {
        mutation.mutate({
            authorization: getAuthLocalKey(),
            reqGetHistoryMessage: {
                pageState: moreState1?.pageState,
                groupId: id,
                pageSize: 10,
            }
        }, {
            onSuccess: (data: NoSqlPagingListDataKunMessageReturn) => {
                const l = data?.records ?? []
                console.log('data xxxxxxx1', data);
                setMoreState({
                    hasMore: data?.pageState != null,
                    pageState: data?.pageState,
                })

                l.forEach(item => {

                    let a = null;
                    let content = {}
                    switch(item.msgType) {
                        case EnumMsgFormat_AUDIOInhabitant: {
                            a= MessageContentType.Video
                            content = {
                                url:  getKunImageUrl(item.msgContent!),
                            } as ImageContent
                            break;
                        }
                        case EnumMsgFormat_IMAGEInhabitant: {
                            a= MessageContentType.Image
                            content = {
                                url:  getKunImageUrl(item.msgContent!),
                            } as ImageContent
                            break;
                        }
                        default:
                            content = {
                                content:  item.msgContent
                            } as TextContent;
                            a = MessageContentType.TextPlain
                    }

                    const message = new ChatMessage({
                        id: item.msgId,
                        content: content as MessageContent<MessageContentType>,
                        contentType: a,
                        senderId: item.fromUser ?? '',
                        direction: (item.fromUser) === user.id ? MessageDirection.Outgoing : MessageDirection.Incoming,
                        status: MessageStatus.DeliveredToDevice
                    });
                    chatStorage.addHistoryMessage(message, activeConversation?.id!, false)
                    console.log('message', message);
                    addMessage(message, id, false)
                })
            }
        })
    },[activeConversation?.id, addMessage, mutation, user.id])

    const [currentUserAvatar, currentUserName] = useMemo(() => {

        if (activeConversation) {
            const participant = activeConversation.participants.length > 0 ? activeConversation.participants[0] : undefined;

            if (participant) {
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const user = getUser(participant.id);
                if (user) {
                    return [<Avatar src={user.avatar}/>, user.username]
                }
            }
        }

        return [undefined, undefined];

    }, [activeConversation, getUser]);

    const handleChange = useCallback((value: string) => {
        // Send typing indicator to the active conversation
        // You can call this method on each onChange event
        // because sendTyping method can throttle sending this event
        // So typing event will not be send to often to the server
        setCurrentMessage(value);
        if (activeConversation) {
            sendTyping({
                conversationId: activeConversation?.id,
                isTyping: true,
                userId: user.id,
                content: value, // Note! Most often you don't want to send what the user types, as this can violate his privacy!
                throttle: true
            });
        }
    },[activeConversation, sendTyping, setCurrentMessage, user.id])

    const handleSend = useCallback((text: MessageContent<TextContent>) => {

        const id = uuid().replaceAll('-', '')
        // uuid().replace('-', ''), // Id will be generated by storage generator, so here you can pass an empty string
        console.log('text', text);
        console.log('text', text);
        console.log('text', text);
        console.log('text', text);
        const message = new ChatMessage({
            id,
            content: {
               content: text as unknown as  string,
            } as  MessageContent<TextContent>,
            contentType: MessageContentType.TextHtml,
            senderId: user.id,
            direction: MessageDirection.Outgoing,
            status: MessageStatus.Pending
        });

        console.log('ssssssssssssssssss', JSON.stringify(message));
        console.log('ssssssssssssssssss', JSON.stringify(message));
        console.log('ssssssssssssssssss', JSON.stringify(message));

        if (activeConversation) {


            // channelId: string;
            // msg: string;
            // fromUserId: string;
            const m: SendJsonChatMsgToChannel = {
                msgType: EnumMsgFormat_TEXTInhabitant,
                fromUserId: user.id,
                msg: text as unknown as string,
                ackUUID: id,
                channelId: activeConversation.id,
            }

            sendJsonMessage(m)

            sendMessage({
                message,
                conversationId: activeConversation.id,
                senderId: user.id,
                generateId: false
            });
        }

    }, [activeConversation, sendJsonMessage, sendMessage, user.id]);

    const clickDelete = useCallback((messageId: string, senderId: string) => {
        if(activeConversation) {
            const m: MarkMessageOselete = {
                channelId: activeConversation.id,
                msg: messageId,
                obsoleted: true,
                fromUserId: senderId
            }
            console.log('MarkMessageOselete', m);
            sendJsonMessage(m)
        }
    }, [activeConversation, sendJsonMessage])

    const getTypingIndicator = useCallback(
        () => {

            if (activeConversation) {

                const {typingUsers} = activeConversation;

                if (typingUsers.length > 0) {

                    const typingUserId = typingUsers.items[0].userId;

                    // Check if typing user participates in the conversation
                    if (activeConversation.participantExists(typingUserId)) {

                        const typingUser = getUser(typingUserId);

                        if (typingUser) {
                            return <TypingIndicator content={`${typingUser.username} is typing`}/>
                        }

                    }

                }

            }


            return undefined;

        }, [activeConversation, getUser],
    );


    const fetchHistoryMessage  =useCallback (() => {
        console.log('fetchHistoryMessage')
        if(mutation.isLoading) {
            return;
        }
        console.log('hasMore', moreState.hasMore)
        console.log('activeConversation', activeConversation)

        if(moreState.hasMore && activeConversation !=null) {
            console.log('handleChannelChange', handleChannelChange);
            handleChannelChange(activeConversation.id!, moreState)
        }
        console.log('fetchHistoryMessage');
    }, [activeConversation, handleChannelChange, moreState, mutation.isLoading])

    return (<>
        <div className="Uppy">
        </div>
        <MainContainer responsive className={chatClasses.container}>
            <Sidebar position="left" scrollable className={chatClasses.sidebard}>
                <ConversationHeader style={{backgroundColor: "#fff"}}>
                    <Avatar src={user.avatar}/>
                    <ConversationHeader.Content>
                        {user.username}
                    </ConversationHeader.Content>
                </ConversationHeader>
                <ConversationList>
                    {conversations.map(c => {
                        // Helper for getting the data of the first participant
                        const [avatar, name] = (() => {

                            const participant = c.participants.length > 0 ? c.participants[0] : undefined;

                            if (participant) {
                                // eslint-disable-next-line @typescript-eslint/no-shadow
                                const user = getUser(participant.id);
                                if (user) {

                                    return [<Avatar src={user.avatar}/>, user.username]

                                }
                            }

                            return [undefined, undefined]
                        })();

                        return <Conversation key={c.id}
                                             name={name}
                                             info={c.draft ? `Draft: ${c.draft.replace(/<br>/g, "\n").replace(/&nbsp;/g, " ")}` : ``}
                                             active={activeConversation?.id === c.id}
                                             unreadCnt={c.unreadCounter}
                                             onClick={() => {
                                                 handleChannelChange(c.id, {
                                                     hasMore: true,
                                                 })
                                                 setActiveConversation(c.id)
                                             }}>
                            {avatar}
                        </Conversation>
                    })}
                </ConversationList>
            </Sidebar>

            <ChatContainer className={chatClasses.container}>
                {activeConversation && <ConversationHeader>
                    {currentUserAvatar}
                    <ConversationHeader.Content userName={currentUserName}/>
                </ConversationHeader>}
                <MessageList typingIndicator={getTypingIndicator()} >
                        <ScrollArea
                            style={{ width: '100%', height: 500 }}
                            onScrollPositionChange={(x) => {
                                console.log('xxxxxxxxlla', x.y)
                                if(x.y < 20) {
                                    fetchHistoryMessage()
                                }
                            }}
                        >
                    <div>{mutation.isLoading ? 'loading': ''}</div>
                            {
                               ! mutation.isLoading && (
                                    <div>{moreState.hasMore ? 'hasMore': 'noMore'}</div>
                                )
                            }
                    {activeConversation && currentMessages.map((g: MessageGroup) => <MessageGroup key={g.id}
                                                                                                  direction={g.direction}>
                        <MessageGroup.Messages>
                            {g.messages.map((m: ChatMessage<MessageContentType>) => {
                                console.log('mmmmmmmm', m)
                                let render;
                                switch(m.contentType) {
                                    case  MessageContentType.TextHtml : {
                                        render =  (
                                            <Message key={m.id} model={{
                                                type: "html",
                                                payload: m.content.content
                                            }}/>
                                        )
                                        break;
                                    }
                                    case  MessageContentType.Video : {
                                        const i = m as  ChatMessage<MessageContentType.Video>
                                        const msrc = i.content as VideoContent

                                        console.log('i', i);
                                        render =  (
                                            <Message key={m.id} model={{
                                                type: "custom",
                                                payload:  {
                                                    width: '100px',
                                                    src: msrc.url
                                                }
                                            }}>
                                                <Message.CustomContent>
                                                    <ClippPlayer
                                                        className="clipp-player"
                                                        src={msrc.url}
                                                        btnStyle={{
                                                            color: '#FFF',
                                                            background: '#49368B',
                                                            borderRadius: '30px',
                                                        }}
                                                        counterStyle={{
                                                            color: '#49368B',
                                                        }}
                                                        volume={1}
                                                        zoom={1}
                                                        options={{
                                                            audioRate: 1,
                                                            autoCenter: false,
                                                            barGap: 1,
                                                            cursorColor: '#FFF',
                                                            cursorWidth: 1,
                                                            fillParent: true,
                                                            height: 50,
                                                            hideScrollbar: true,
                                                            normalize: true,
                                                            partialRender: true,
                                                            progressColor: '#49368B',
                                                            responsive: true,
                                                            waveColor: '#e1e5ea',
                                                        }}
                                                    />
                                                </Message.CustomContent>
                                            </Message>
                                        )
                                        break;
                                    }
                                    case  MessageContentType.Image : {
                                        const i = m as  ChatMessage<MessageContentType.Image>
                                        const msrc = i.content as ImageContent

                                        console.log('i', i);
                                        render =  (
                                            <Message key={m.id} model={{
                                                type: "image",
                                                payload:  {
                                                    width: '100px',
                                                    src: msrc.url
                                                }
                                            }}/>
                                        )
                                        break;
                                    }
                                    case  MessageContentType.TextPlain : {
                                        render =  (
                                            <Message key={m.id} model={{
                                                type: "html",
                                                payload: m.content.content
                                            }}/>
                                        )
                                        break;
                                    }
                                    default: {
                                        render = (<Message key={m.id} model={{
                                            type: "html",
                                                payload: m.content.content
                                        }}/>)
                                    }
                                }

                               return  (
                                    <>
                                        {m.id}
                                        status: {m.status}
                                        {m.status === MessageStatus.Pending ? 'pending' : 'ddd'}
                                        {render}
                                        <Group direction="row" align="right" position="right">
                                            <Button onClick={() => {
                                                clickDelete(m.id, m.senderId)
                                            }}>delete</Button>
                                        </Group>
                                    </>
                                )
                            })}
                        </MessageGroup.Messages>
                    </MessageGroup>)}
                        </ScrollArea>
                </MessageList>
                <MessageInput value={currentMessage} onAttachClick={() => {
                    if (!activeConversation) {
                        return;
                    }
                    cId.current = activeConversation.id
                    const a = document.getElementsByClassName('uppy-FileInput-btn')[0] as HTMLElement
                    a.click();
                }} onChange={handleChange} onSend={handleSend} disabled={!activeConversation} attachButton
                              placeholder="Type here..."/>
            </ChatContainer>
        </MainContainer>
    </>)
}

export const PengChat = memo(PengChat1)
