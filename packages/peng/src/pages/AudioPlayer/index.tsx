// import * as React from "react";
import loadable from "@loadable/component";
import {FunctionComponent, memo} from "react";
import NoSSR from "@mpth/react-no-ssr";
import {HorseCardReturn} from "kun-shared/built/src_managed/HorseCardReturn";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import { defaultApi } from "../../react-query/api";
import 'react-jinke-music-player/assets/index.css'
import {useMutationDefaultApi} from "../../components/Comment/useMuationDefault";

const ReactJkMusicPlayer = loadable(() => import("react-jinke-music-player"), {
    ssr: false
})

export const AudioPlayerComponent: FunctionComponent<{item: HorseCardReturn}> = memo(({item}) => {

        const postApiV1CardDio50Offset = useMutationDefaultApi(defaultApi.postApiV1TapirCardDio50OffsetCreate, {
            useErrorBoundary: false,
        })

        return (
            <NoSSR>
                <ReactJkMusicPlayer
                    onAudioProgress={({currentTime}) => {
                        postApiV1CardDio50Offset.mutate({
                            authorization: localStorage.getItem('AUTH') ?? '',
                            reqUpdateAudioLog: {
                                feedId: item.cardId,
                                offset: Math.ceil(currentTime)
                            }
                        })
                    }}
                    audioLists={[{
                        name: item.title,
                        musicSrc: getKunImageUrl(item.audioName ?? '')
                    }]} />
            </NoSSR>
        )
})

export default AudioPlayerComponent