import React, {FunctionComponent} from "react";
import loadable from "@loadable/component";
import NoSSR from "@mpth/react-no-ssr";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {KunPage} from "../../containers";
import {Scaffold} from "../../components/Scaffold";
import {Loading} from "../../components";

const KunChatPage = loadable(/* #__LOADABLE__ */ () => import("./KunChatPage"), {
    fallback: <Loading />,
    ssr: false,
});

const Comp = loadable(/* #__LOADABLE__ */ () => import("./KunChatProvider"), {
    fallback: <Loading />,
    ssr: false,
});

const Chat: FunctionComponent = () => (
    <Scaffold title="聊天">
        <KunPage>
            <NoSSR>
                        <Comp>
                            <KunChatPage/>
                        </Comp>
            </NoSSR>
        </KunPage>
    </Scaffold>
)

export default Chat;