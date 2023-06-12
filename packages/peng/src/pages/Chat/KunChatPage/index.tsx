import {FunctionComponent, memo} from "react";
import {EnumeratumChatGroupType, NoSqlPagingListDataABGroup} from "kun-shared/built/fetch";
import {
    useChat,
    User,
    UserStatus
} from "@chatscope/use-chat";
import {Presence} from "@chatscope/use-chat/dist/Presence";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import {useQuery} from "react-query";
import {getAuthLocalKey} from "kun-tools/built/common/req";
import {
    MainContainer
// @ts-ignore
} from "@chatscope/chat-ui-kit-react";
import {useCurrentUserState} from "../../../state";
import {PengChat} from "../../../components/Chat";
import {chatStorage, createConversationEmpty, useChatContainerStyles} from "../DirectChat";
import {useDefaultApi, useMutationDefaultApi} from "../../../components/Comment/useMuationDefault";
import {defaultApi} from "../../../react-query/api";

export const KunChatPage: FunctionComponent = memo(() => {
    const {classes} = useChatContainerStyles()
    const {user: currentUserOpt, chatUser, userId} = useCurrentUserState()

    const {
        updateState
    } = useChat();

    const {mutate} = useMutationDefaultApi(defaultApi.getApiV1Chat50ChatGroups)
    const {data: l} = useQuery(['a'], () => useDefaultApi(defaultApi.getApiV1Chat50ChatGroupsUser)({
        authorization: getAuthLocalKey()
    }), {
        onSuccess: (l1) => {
            console.log('l1', l1);
            (l1.records ?? []).forEach(item => {
                const u = new User({
                    id: item?.userId ?? '',
                    presence: new Presence({status: UserStatus.Available, description: ""}),
                    firstName: "",
                    lastName: "",
                    username: item?.nickName ?? "nickname",
                    email: "",
                    avatar: item?.thumbnail ? getKunImageUrl(item?.thumbnail ?? '') : '',
                    bio: ""
                });
                console.log('u', u)
                chatStorage.addUser(new User({
                    id: item?.userId ?? '',
                    presence: new Presence({status: UserStatus.Available, description: ""}),
                    firstName: "",
                    lastName: "",
                    username: item?.nickName ?? "nickname",
                    email: "",
                    avatar: item?.thumbnail ? getKunImageUrl(item?.thumbnail ?? '') : '',
                    bio: ""
                }));
                mutate({
                    authorization: getAuthLocalKey()
                }, {
                    onSuccess: (data: NoSqlPagingListDataABGroup) => {
                        console.log('l1', data);
                        (data.records ?? []).filter(item1 => item1.b.groupType === EnumeratumChatGroupType.PrivateChat)
                            .forEach((item1, index) => {
                                const a = item1?.a?.members ?? []
                                const c=  a.filter(r => r !== currentUserOpt?.userId)

                                if(c.length > 0 ) {
                                    const i = createConversationEmpty(item1.b.groupId, c)
                                    console.log('i', i)
                                    chatStorage.addConversation(i);
                                }

                                if(index === 0) {
                                    console.log('setActiveConversation');
                                    chatStorage.setActiveConversation(item1.b.groupId)
                                }

                        })

                        updateState();

                    }
                })

            })
        },
        cacheTime: 9999 * 1000,
        staleTime: 9999 * 1000,
    })

    // const {data: groupList} = useQuery(['chat', 'groups'], () => useDefaultApi(defaultApi.getApiV1Chat50ChatGroups)({
    //     authorization: getAuthLocalKey()
    // }), {
    // })

    // console.log('getApiV1Chat50ChatGroups', groupList)

    // console.log('v2')
    // const bears = useChatStore(state => state.profile)
    // const setGroups = useChatStore(state => state.setGroups)
    // const setCurrentGroup = useChatStore(state => state.setCurrentGroup)
    // const currentGroup = useChatStore(state => state.currentGroup)
    // console.log(bears);
    // const historyMessage = useChatStore(state => state.historyMessage)
    //
    // // useDidMount(async () => {
    // //     const r = await requestGetChatGroups();
    // //     if (checkIfSuccess(r)) {
    // //         setGroups(r);
    // //         if (r.records.length > 0) {
    // //             setCurrentGroup(r.records[0]);
    // //         }
    // //     }
    // // });
    //
    // const fileRef: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null)
    //
    // const [loading, setLoading] = useState(false)
    // console.log('loading loading', loading);
    //
    //
    // const debounceClick = debounce(() => {
    //     fileRef.current?.click?.();
    // }, 1000)
    //
    // const updateImage = useCallback(async (e) => {
    //     const formData = new FormData();
    //     formData.append('file', e.target.files[0]);
    //     const a1 = await requestUploadImage(formData);
    //
    //     if (currentGroup?.groupId != null) {
    //         await execLoading(() => requestChatMsg({
    //                 group: currentGroup?.groupId,
    //                 msgType: EnumMsgFormat_IMAGEInhabitant,
    //                 content: a1.msg,
    //             }), setLoading,
    //             toast.success('ok')
    //         )
    //     }
    //     // TODO send chat message
    //     console.log(a1);
    // }, [currentGroup?.groupId])
    //
    // const debouncedUpdateImage = throttle(updateImage, 1000);
    //
    // const currentUser = useCurrentUser();
    //
    // console.log('currentUser', currentUser?.userId)
    // console.log('currentUser', currentUser?.userId)
    //
    // return (
    //         <Container maxWidth="container.lg" pt="60px">
    //             <div style={{position: "relative", height: "500px"}}>
    //                 <input key="ok" type="file" ref={fileRef} onChange={debouncedUpdateImage}/>
    //                 <MainContainer>
    //                      <ChatGroutList/>
    //                     <ChatContainer>
    //                         <ConversationHeader>
    //                             <Avatar src={getKunImageUrl(ConstDefaultMockConfig.defaultChatAvatar)} name="Emily"/>
    //                             <ConversationHeader.Content userName="Emily" info="Active 10 mins ago"/>
    //                             <ConversationHeader.Actions>
    //                                 <InfoButton/>
    //                             </ConversationHeader.Actions>
    //                         </ConversationHeader>
    //                         <MessageList>
    //                             {
    //                                 (historyMessage?.records ?? []).map(entry => (
    //                                     <Message
    //                                         key={entry.msgId}
    //                                         model={{
    //                                             message: entry.msgContent,
    //                                             sentTime: "just now",
    //                                             direction: entry.fromUser === currentUser?.userId ? 'outgoing':
    //                                                 'incoming',
    //                                             sender: entry.fromUserName,
    //                                         }}
    //                                     >
    //                                         <Avatar src={getKunImageUrl(entry.fromUserAvatar ?? ConstDefaultMockConfig.defaultChatAvatar)} />
    //                                     </Message>
    //                                 ))
    //                             }
    //                         </MessageList>
    //                         <MessageInput
    //                             onAttachClick={(f: any) => {
    //                                 console.log('fffff', f)
    //                                 debounceClick()
    //                             }}
    //                             placeholder="请填写消息" onSend={async (text: string) => {
    //                             if (currentGroup?.groupId == null) {
    //                                 return;
    //                             }
    //                             await execLoading(() => requestSendMsg({
    //                                     group: currentGroup?.groupId,
    //                                     text,
    //                                 }), setLoading
    //                             )
    //                         }}/>
    //                     </ChatContainer>
    //                 </MainContainer>
    //             </div>
    //         </Container>
    // )
    return (
            <MainContainer className={classes.container}>
                {
                    userId != null && (
                        <PengChat user={chatUser} />
                    )
                }
            </MainContainer>
    )
})

export default KunChatPage