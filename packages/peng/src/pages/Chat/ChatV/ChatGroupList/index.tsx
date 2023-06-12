import {FunctionComponent} from "react";
// @ts-ignore
import {formatTime} from "kun-tools/built/common/date";
import {
    Avatar,
    Conversation,
    ConversationList,
    // @ts-ignore
} from '@chatscope/chat-ui-kit-react';
import {NoSqlPagingListData} from "kun-shared/built/common/NoSqlPagingListData";
import {ChatGroupByUserReturn} from "kun-shared/built/src_managed/ChatGroupByUserReturn";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import {useChatStore} from "../../Context";
import {ConstDefaultMockConfig} from "../../../../app/config";

export const ChatGroutList: FunctionComponent = () => {

    const groups: NoSqlPagingListData<ChatGroupByUserReturn> | undefined = useChatStore(state => state.groups)
    const activeGroupId = useChatStore(state => state.currentGroup?.groupId)
    const setCurrentGroup = useChatStore(state => state.setCurrentGroup)

    if(groups == null) {
        return null;
    }

    return (
        <ConversationList>
            {
                (groups.records ?? []).map(group => (
                    <Conversation name={group.groupName} lastActivityTime={formatTime(group.updateAtTime)}  unreadCnt={group.toRead} lastSenderName={group.nickNameInGroup} info={group.nickNameInGroup} active={group.groupId === activeGroupId}
                                  onClick={() => {
                                      setCurrentGroup(group)
                                  }}
                    >
                        <Avatar src={getKunImageUrl(group.toAvatar ?? ConstDefaultMockConfig.defaultChatAvatar)} name={group.groupName} />
                    </Conversation>
                ))
            }
        </ConversationList>
    );
}
