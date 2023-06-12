import React, {FunctionComponent, memo} from "react";
import {AutoDraft, ChatProvider} from "@chatscope/use-chat";
import {chatStorage, serviceFactory} from "../DirectChat";
import {CurrentSocketProvider} from "../../../components/BA";

export const KunChatProvider: FunctionComponent = memo(({children}) => (
        <CurrentSocketProvider >
        <ChatProvider serviceFactory={serviceFactory} storage={chatStorage} config={{
            typingThrottleTime: 250,
            typingDebounceTime: 900,
            debounceTyping: true,
            autoDraft: AutoDraft.Save || AutoDraft.Restore
        }}>
            <div>
                {children}
            </div>
        </ChatProvider>
        </CurrentSocketProvider>
    ))

export default KunChatProvider