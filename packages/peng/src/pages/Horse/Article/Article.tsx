import NoSSR from '@mpth/react-no-ssr';
import {Card, createStyles, Grid} from '@mantine/core';
import React, {FunctionComponent, useState} from 'react';
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
// import ContentLoader  from 'react-content-loader'
import {useMutation, useQuery} from "react-query";
import {ENUM_POST_VIDEOInhabitant} from "kun-shared/built/src_managed/ENUM_POST_VIDEO";
import {ENUM_POST_AUDIOInhabitant} from "kun-shared/built/src_managed/ENUM_POST_AUDIO";
import loadable from "@loadable/component";
import {Button, Flex } from '@chakra-ui/react';
import {POST_ASKInhabitant} from "kun-shared/built/src_managed/POST_ASK";
import {HashLong} from "kun-shared/built/src_managed/HashLong";
import toast from "react-hot-toast";
import { Scaffold } from '../../../components/Scaffold';
import {getPublicCard, requestLikeCardItem} from "../../../apis/web";
// import StickyBox from "react-sticky-box";
// const VideoPlayerComponent = lazy(() => import('../../../components/VideoComponent'));
// import VideoPlayerComponent from '../../../components/VideoComponent';

// const AudioPlayerComponent = lazy(() => import('../../AudioPlayer'));
// import   AudioPlayerComponent from '../../AudioPlayer';
import { AskCard } from '../../../components/AskCard';
import { useQueryParams } from '../../../app/params';
import {Loading} from "../../../components";
import {CommentList} from "../../../components/Comment/CommentList";
import {getQueryAuthorProfile, usePrefetch} from "../../../react-query/core";
import {useSeeUserDetail} from "../../../react-query/useUserSession";
import {UserCardImage} from "../../../components/UserCardImage";
import {getCheckedKunImageUrl} from "../../../components/SeriesCard";
import {PraticeListShow} from "./PraticeModal";
import {PracticeModal} from "../../PracticeModal";
import {PracticeCardList} from "./PracticeCardList";
import {useDefaultApi} from "../../../components/Comment/useMuationDefault";
import {defaultApi} from "../../../react-query/api";
import AudioPlayerComponent from '../../AudioPlayer';

const VideoPlayerComponent = loadable(/* VideoPlayer #__loadable__ */ () => import('../../../components/VideoComponent'), {
    fallback: <Loading />,
    ssr: false
});


// const MyLoader = () => <ContentLoader />

export const useStickyStyles = createStyles(() => ({
    root: {
        position: 'sticky',
        top: 1,
    },
}));

export const Items = {
    Article: 'Article'
}

export interface QueryParamsArticle {
    seriesId: string;
    id: string
}
const ArticleV2: FunctionComponent = () => {

    // Article : '/live/article/:seriesId/:id',
    const data1 = useQueryParams() as { seriesId: string; id: string }
    console.log('data1', data1)

    // const series =  '30ykAAn8'
    // const card = 'zoRdp1RM'

    //
    const {data} = useQuery(Items.Article, () => getPublicCard(data1), {})
    const {data: kunData} = usePrefetch({userId: data?.record?.card?.authorId ?? ''}, getQueryAuthorProfile, {
        enabled:  data?.record?.card?.authorId != null
    })

    const [visible, setVisible] = useState(false)
    const {data: userDetail} =useSeeUserDetail(data?.record?.card?.authorId)
    const {mutate: mutateLikeCard} = useMutation(requestLikeCardItem)
    const {mutate: mutateMarkPostRead} = useMutation(useDefaultApi(defaultApi.postApiV1CardRead50Markread))

    console.log('userDetail, userDetail', userDetail);

    console.log('kunData', kunData);

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

    // audioName: null
    // authorId: "2c11a460b04011e9be2d055852da15dd"
    // cardId: "7AnJMjRM"
    // cardOrder: 1
    // commentCount: 38
    const stickClasses = useStickyStyles()

    console.log('repoData xxxxx', data)
    return (
        <Scaffold title={data?.record?.card?.title ?? ''}>
            <Grid columns={24}>
                <Grid.Col span={18} >
                    <Flex direction="column">
                        {/* <Center w='100px' bg='green.500'> */}
                        {/*    <Text>Box 1</Text> */}
                        {/* </Center> */}
                        {/* <Square bg='blue.500' size='150px'> */}
                        {/*    <Text>Box 2</Text> */}
                        {/* </Square> */}
                        {/* <Box flex='1' bg='tomato'> */}
                        {/*    <Text>Box 3</Text> */}
                        {/* </Box> */}
                    <NoSSR>
                        <>
                            xx:{data?.record?.card?.postType}
                            xxx
                            {
                                data?.record != null && (
                                    <>
                                        {
                                            data?.record?.card?.postType === POST_ASKInhabitant && (
                                                <AskCard card={data?.record!}/>
                                            )
                                        }
                                        {
                                            data?.record?.card?.postType === ENUM_POST_VIDEOInhabitant && (
                                                <>
                                                    dddd
                                                    <VideoPlayerComponent item={data?.record.card}/>
                                                </>
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
                        </>
                    </NoSSR>

                        <Button onClick={() => {
                            mutateMarkPostRead({
                                authorization: localStorage.getItem('AUTH') ?? '',
                                reqMarkHorseRead: {
                                    seriesId: data1.seriesId,
                                    postId: data1.id
                                }
                            }, {
                                onSuccess: () => {
                                    toast.success('ok')
                                }
                            })
                        }}>
                            mutateMarkPostRead
                        </Button>
                        <Button onClick={() => {
                            setVisible(true)
                        }}>
                            practice
                        </Button>

                        <Button onClick={()  => {
                            mutateLikeCard({
                                feedId: data1.id,
                                seriesId: data1.seriesId,
                                isLike: true,
                                channelId: horseInhabitant.base
                            }, {
                                onSuccess: ( ) => {
                                    toast.success('ok')
                                }
                            })
                        }}> like Card</Button>

                        <PraticeListShow visible={visible} seriesId={data1.seriesId} cardId={data1.id}/>
                        <CommentList channelId={horseInhabitant.base} seriesId={data1.seriesId} postId={data1.id}/>
                        <PracticeCardList seriesId={data1.seriesId} cardId={data1.id} />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={6}>
                    {/* <StickyBox> */}
                        {
                            userDetail?.record != null && (
                                <UserCardImage
                                    className={stickClasses.classes.root}
                                    item={userDetail?.record!}
                                    image ={getCheckedKunImageUrl(userDetail?.record?.thumbnail)}
                                    name={userDetail?.record?.nickName ?? 'nickname'}
                                    avatar={getCheckedKunImageUrl(userDetail?.record?.thumbnail)} />
                            )
                        }
                    {/* </StickyBox> */}

                    <Card>
                        <PracticeModal seriesId={data1.seriesId} postId={data1.id} />
                    </Card>
                </Grid.Col>
            </Grid>
        </Scaffold>
    )
}

export default ArticleV2;
