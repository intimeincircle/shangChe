import {ChatMessage, MessageContentType} from "@chatscope/use-chat";
import {MessageDirection} from "@chatscope/use-chat/dist/enums";
import { MessageGroup } from "@chatscope/use-chat/dist/MessageGroup";

interface KunMessageGroupParams {
    id: string;
    senderId: string;
    direction: MessageDirection;
    createAt: number;
}

export class KunMessageGroup extends MessageGroup {

    createAt: number;

    constructor({ id, senderId, direction, createAt }: KunMessageGroupParams){
        super({id, senderId, direction})
        this.createAt = createAt
    }

   override replaceMessage(
        message: ChatMessage<MessageContentType>,
        index: number
    ): boolean {
        if (this.messages.length -1 > index) {
            console.log('2222222222 return false');
            return false;
        }

        this.messages.splice(index, 1, message)

        return true;
    }

    addMessagesToHead(
        message: ChatMessage<MessageContentType>,
    ): boolean {
        this.messages.splice(0, 0, message)
        return true;
    }

    removeMessage(
        id: string,
    ): boolean {
        const itemIndex = this.messages.findIndex(item => item.id === id)

        if(itemIndex > -1 ) {
            this.messages.splice(itemIndex, 1)
        }
        return true;
    }

}