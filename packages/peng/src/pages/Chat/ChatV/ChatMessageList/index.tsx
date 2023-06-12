import {FunctionComponent} from "react";
// @ts-ignore
import {Message, MessageList} from "@chatscope/chat-ui-kit-react";
import {useChatStore} from "../../Context";

export const ChatMessageList: FunctionComponent = () => {

    const historyMessage = useChatStore(state => state.historyMessage)

    console.log('h', historyMessage)

    return (
        <MessageList>
            {
                (historyMessage?.records ?? []).map(entry  => (
                    <Message
                        key={entry.msgId}
                        model={{
                            message: entry.msgContent,
                            sentTime: "just now",
                            sender: entry.fromUserName,
                        }}
                    />
                ))
            }
        </MessageList>
    )
}
