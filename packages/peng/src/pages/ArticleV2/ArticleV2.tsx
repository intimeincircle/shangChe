import {FunctionComponent} from "react";
import NoSSR from '@mpth/react-no-ssr';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, ScrollArea, Text, Transition } from '@mantine/core';
import ContentLoader from 'react-content-loader'
import {useQuery} from "react-query";
import {ENUM_POST_VIDEOInhabitant} from "kun-shared/built/src_managed/ENUM_POST_VIDEO";
import {ENUM_POST_AUDIOInhabitant} from "kun-shared/built/src_managed/ENUM_POST_AUDIO";
import { Search } from "@styled-icons/evil/Search";
import {VideoPlayerComponent} from "../../components/VideoComponent";
import {getPublicCard} from "../../apis/web";
import {AudioPlayerComponent} from "../AudioPlayer";
import {useQueryParams} from "../../app/params";
import {Scaffold} from "../../components/Scaffold";
// import {VideoPlayerComponent} from "../../components/VideoComponent";
// import {AudioPlayerComponent} from "../AudioPlayer";
// import {CommentList} from "../../components/Comment/CommentList";

function MyLoader() {
    return <ContentLoader/>
}

const ArticleV2: FunctionComponent = () => {
    const data1 = useQueryParams()

    const series = '30ykAAn8'
    const card = 'zoRdp1RM'

    const {data} = useQuery('series', () => getPublicCard({seriesId: series, id: card}), {})

    // console.log('data', data);
    // const record = data?.record

    // @ts-ignore
    // const { data } = useQuery('repoData', () =>
    //     // @ts-ignore
    //             get('https://api.github.com/repos/tannerlinsley/react-query').then(r => {
    //                 console.log('xxxxxx browser',r );
    //                 return r;
    //             }),
    //     )

    const [scroll, scrollTo] = useWindowScroll();
    console.log('repoData xxxxx', data)
    return (
        <Scaffold>
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}
            {JSON.stringify(data)}

            {/**/}
            <NoSSR>
                {
                    data?.record != null && (
                        <>
                            {
                                data?.record?.card?.postType === ENUM_POST_VIDEOInhabitant && (
                                    <NoSSR>
                                        <VideoPlayerComponent item={data?.record.card}/>
                                    </NoSSR>
                                )
                            }
                            {
                                data?.record?.card?.postType === ENUM_POST_AUDIOInhabitant && (
                                    <NoSSR>
                                        <AudioPlayerComponent item={data?.record?.card}/>
                                    </NoSSR>
                                )
                            }
                            {/* <CommentList seriesId={record.card.seriesId} postId={record.card.cardId}/> */}
                        </>
                    )
                }
            </NoSSR>
            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            leftIcon={<Search />}
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            Scroll to top
                        </Button>
                    )}
                </Transition>
            </Affix>
            <MyLoader/>
        </Scaffold>
    )
}

export default ArticleV2;
