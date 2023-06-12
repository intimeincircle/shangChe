
// https://github.com/chatscope/chat-ui-kit-react/issues/39

declare module "@chatscope/chat-ui-kit-react" {
    import * as React from 'react';

    type Avatar = React.ComponentClass<any>
    export const Avatar: Avatar;

    type ChatContainer = React.ComponentClass<any>
    export const ChatContainer: ChatContainer;

    interface ConversationHeader extends React.ComponentClass<any> {
        Back: any
        Content: any
        Actions: any
    }

    type ConversationHeaderImpl = ConversationHeader

    export const ConversationHeader: ConversationHeader;
}