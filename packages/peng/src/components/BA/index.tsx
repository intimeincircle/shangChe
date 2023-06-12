import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
import constate from "constate";
import {useCurrentUserState} from "../../state";

export const socketUrl1 =  ""

export const useSocketState = () => useWebSocket(socketUrl1, {
    shouldReconnect: (closeEvent) => {
        console.log('closeEvent', closeEvent)
        return false;
    },
})

export const [
    CurrentSocketProvider,
    useCurrentSocket
] =
    constate(
        useSocketState,
    )

export function WebSocketDemo() {
    // Public API that will echo messages sent to it back to the client
    const [socketUrl, setSocketUrl] =  useState("")
    const [messageHistory, setMessageHistory] = useState([]);

    const {
        sendMessage,
        lastMessage,
        readyState,
    } = useWebSocket(socketUrl);

    useEffect(() => {
        if (lastMessage !== null) {
            // @ts-ignore
            setMessageHistory(prev => prev.concat(lastMessage));
        }
    }, [lastMessage, setMessageHistory]);

    const handleClickChangeSocketUrl = useCallback(() =>
        setSocketUrl('wss://demos.kaazing.com/echo'), []);

    const handleClickSendMessage = useCallback(() =>
        sendMessage('Hello'), [sendMessage]);

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    // @ts-ignore
    return (
        <div>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
                onClick={handleClickChangeSocketUrl}
            >
                Click Me to change Socket Url
            </button>
            {/* eslint-disable-next-line react/button-has-type */}
            <button
                onClick={handleClickSendMessage}
                disabled={readyState !== ReadyState.OPEN}
            >
                Click Me to send
            </button>
            <span>The WebSocket is currently {connectionStatus}</span>
            {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
            <ul>
                {messageHistory
                    .map((message, idx) => <span key={idx}>{message ? message.data : null}</span>)}
            </ul>
        </div>
    );
}
