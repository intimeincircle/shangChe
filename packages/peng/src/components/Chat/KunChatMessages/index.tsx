import {MessageContentType} from "@chatscope/use-chat/dist/enums";
import {ChatMessageParams} from "@chatscope/use-chat/dist/ChatMessage";
import {ChatMessage} from "@chatscope/use-chat";

export declare enum KunMessageStatus {
    Pending = 0,
    Sent = 1,
    DeliveredToCloud = 2,
    DeliveredToDevice = 3,
    Seen = 4,
    Obselete = 5
}

type KunChatMessageParams<T extends MessageContentType>  = ChatMessageParams<T> & {
    messageStatus: KunMessageStatus;
}

export declare class KunChatMessage<T extends MessageContentType> extends ChatMessage<T> {
    messageStatus: KunMessageStatus;

    constructor({ id, status, messageStatus, contentType, senderId, direction, content, }: KunChatMessageParams<MessageContentType>) {
        super({ id, status, contentType, senderId, direction, content, });
        this.messageStatus = messageStatus
    }

}
