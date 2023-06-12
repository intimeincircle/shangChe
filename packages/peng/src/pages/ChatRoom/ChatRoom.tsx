import React, {useEffect, FunctionComponent, useRef} from "react";
import ArRTC from 'ar-rtc-sdk';
import {useQuery} from "react-query";
import {getAuthLocalKey} from "kun-tools/built/common/req";
import {EnumeratumChatRole} from "kun-shared/built/fetch";
import {useQueryParamType} from "../../app/params";
import {useDefaultApi} from "../../components/Comment/useMuationDefault";
import {defaultApi} from "../../react-query/api";
import {useUserSession} from "../../react-query/useUserSession";

const rtcClient = ArRTC.createClient({ mode: "live", codec: "h264", role: 'host' });
const appId = '3ebce03bd53f96def9e7b6cdf226d64b';

const ChatRoom: FunctionComponent = () =>  {
    const { data } = useUserSession();
    const userId = data?.record?.userId

    const rHtmlRef = useRef<HTMLDivElement>(null);
    
    useEffect(()  => {
        rtcClient.on("user-published", async (user, mediaType) => {
            console.log('mmmmmmmmmmmmmmmmm', mediaType)
            console.log('mmmmmmmmmmmmmmmmm', user)
            if (mediaType === "video") {
                await rtcClient.subscribe(user, mediaType);

                if(rHtmlRef?.current != null) {
                    user?.videoTrack?.play?.(rHtmlRef.current!);
                }

                console.log('mmmmmmmmmmmmmmmmm', mediaType)
//                 const a = await ArRTC.getMicrophones()
//                 console.log('aaxxxxxxxxx', a)
//                 // 订阅远端用户的音频轨道
//                 await rtcClient.subscribe(user, mediaType);
//                 // 播放远端音频
//                 const localAudioTrack = await ArRTC.createMicrophoneAudioTrack();
// // // 麦克风音量减半
// //                 localAudioTrack.setVolume(50);
// // 麦克风音量增大一倍
//                 localAudioTrack.setVolume(200);
//
//                 user?.audioTrack?.play?.();
            }

            if (mediaType === "audio") {
                console.log('mmmmmmmmmmmmmmmmm', mediaType)
                // 订阅远端用户的音频轨道
                await rtcClient.subscribe(user, mediaType);
                // 播放远端音频
                const localAudioTrack = await ArRTC.createMicrophoneAudioTrack();
// // 麦克风音量减半
//                 localAudioTrack.setVolume(50);
// 麦克风音量增大一倍
                localAudioTrack.setVolume(200);

                user?.audioTrack?.play?.();
            }
        });
    }, []);

    const s = async () => {
        const b = await ArRTC.getCameras()
        console.log('aaxxxxxxxxx', b)
        // const a = await ArRTC.getMicrophones()
        // console.log('aaxxxxxxxxx', a)
        const videoTrack = await ArRTC.createCameraVideoTrack();
        const audioTrack = await ArRTC.createMicrophoneAudioTrack();
        rtcClient.publish([videoTrack, audioTrack]);
    }

    useEffect(()  => {
        // @ts-ignore
    }, [])

    const {roomId} = useQueryParamType<{
        roomId: string,
    }>()

    const {data: starbuckStore} = useQuery(['xxxxxxxxxx1'], () => useDefaultApi(defaultApi.postApiV1OrderStarbuckGet)({
        authorization: getAuthLocalKey(),
        id: 63051,
    }))

     useQuery(['xxxxxxxxxx'], () => useDefaultApi(defaultApi.postApiTapirV1RtcChatRtcTokenGet)({
        authorization: getAuthLocalKey(),
        getRtcToken: {
            role: EnumeratumChatRole.Publisher,
            userId: data?.record?.userId ?? '',
            channelName: roomId
        }
    }), {
        enabled:  data?.record?.userId != null,
        onSuccess: (r) => {
            if(r?.record != null) {
                // const tk = "0063ebce03bd53f96def9e7b6cdf226d64bIADRQidtwvbZt3jMGHuC5BBwFAuL90L0bB+BPuL6qtjTIp3hK+vkrHfUIgDDqO2b2PRsYgQAAQDUH3Z0AgDUH3Z0AwDUH3Z0BADUH3Z0"
                const tk = r?.record ?? ''

                rtcClient.join(appId, roomId,tk, userId).then((uid) => {
                    // eslint-disable-next-line @typescript-eslint/no-shadow
                    s().then(r => r);

                    // 加入成功
                    console.log('uid', uid)
                    console.log('uid', uid)
                    console.log('uid', uid)
                    console.log('uid', uid)
                });
            }
        }
    })

    useEffect(()  => {
        console.log('xxxx')
    }, [])

    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            {JSON.stringify(starbuckStore)}
            chat room
            <div id="local-player" ref={rHtmlRef} className="player" />
        </div>
    )
}



export default ChatRoom