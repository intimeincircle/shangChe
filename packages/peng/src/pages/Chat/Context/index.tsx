import create from 'zustand'
import produce from 'immer'
import {NoSqlPagingListData} from "kun-shared/built/common/NoSqlPagingListData";
import {ChatGroupByUserReturn} from "kun-shared/built/src_managed/ChatGroupByUserReturn";
import {requestGetChatHistory} from "kun-shared/built/apis/get-chat-history";
import {KunMessageReturn} from "kun-shared/built/src_managed/KunMessageReturn";
import {RetLqUser} from "kun-shared/built/src_managed/RetLqUser";
import {reverse} from "lodash"

type ChatState  = {
    profile?: RetLqUser
    groups ?: NoSqlPagingListData<ChatGroupByUserReturn>,
    historyMessage ?: NoSqlPagingListData<KunMessageReturn>,
    currentGroup ?: ChatGroupByUserReturn,
    setGroups : (groups: NoSqlPagingListData<ChatGroupByUserReturn>)  => void,
    setCurrentGroup : (group: ChatGroupByUserReturn) => void,
    setProfile: (profile: RetLqUser) => void,
}

export const useChatStore = create<ChatState>(set => ({
    set: (fn: (r: ChatState) =>  ChatState) => set(produce(fn)),
    profile: undefined,
    setProfile: (profile: RetLqUser) => set(() => ({profile})),
    groups: undefined,
    setCurrentGroup: async (currentGroup: ChatGroupByUserReturn) => {
        const response = await requestGetChatHistory({
            groupId: currentGroup.groupId,
            // timeUUID: currentGroup.lastRead
        })
        set(produce(r => {
            r.currentGroup = currentGroup;
            r.historyMessage = {...response,
                records: reverse(response.records)
            }
        }));
    },
    setGroups : (groups: NoSqlPagingListData<ChatGroupByUserReturn>)  => set(produce(r => {
        r.groups = groups
    })),
}))