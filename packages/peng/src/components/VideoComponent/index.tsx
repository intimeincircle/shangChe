// import * as React from "react";
import {FunctionComponent, memo} from "react";
import {HorseCardReturn} from "kun-shared/built/src_managed/HorseCardReturn";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import Player from "griffith";
import NoSSR from "@mpth/react-no-ssr";

export const VideoPlayerComponent: FunctionComponent<{item: HorseCardReturn}> = memo(({item}) => {
    const sources = {
        hd: {
            id: item.cardId,
            play_url: getKunImageUrl(item.videoName ?? ''),
        },
        sd: {
            play_url: getKunImageUrl(item.videoName ?? ''),
            id: item.cardId,
        },
    }
        // musicSrc: (() => Promise<string>) | string
       return  (
           <NoSSR>
               ddddddddddddd
               inner
               inner
               inner
               inner
               inner
               <Player sources={sources} id={item.cardId} />
           </NoSSR>
    )
    
}

    // name: React.ReactNode
)

export default VideoPlayerComponent