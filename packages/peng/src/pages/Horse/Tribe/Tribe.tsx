import React, {FunctionComponent, useMemo, useState} from "react";
import { generatePath, useHistory } from "react-router";
import {Chip, Chips, Grid, Paper} from "@mantine/core";
import {HorseSeriesFull} from "kun-shared/built/src_managed/HorseSeriesFull";
import {RetItem} from "kun-shared/built/apis/item";
import {HorseCardReturn} from "kun-shared/built/src_managed/HorseCardReturn";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {reqSubscribeSeries} from "kun-shared/built/apis/req-susbcribe-series";
import {getSubscribeSeriesStatus} from "kun-shared/built/apis/get-subscribe-series-status";
import {
    Avatar,
    AvatarGroup,
    Button,
    Editable,
    EditablePreview,
    EditableTextarea,
    Link,
    useDisclosure
} from "@chakra-ui/react";
import toast from "react-hot-toast";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import {ReqUpdateSeries} from "kun-shared/built/src_managed/ReqUpdateSeries";
import dayjs from "dayjs";
import {useQueryParams} from "../../../app/params";
// eslint-disable-next-line camelcase
import UploaderFileButton from "../../../components/TestComp/Uploader";
import {getArticleUrl} from "../../../navigators";
import {CreateLinkButton} from "../../../components/Modal";
import {CreateBaiduLInkButton} from "../../../components/Modal/CreateBaiduLInkButton";
import {ChooseKunSymbol} from "../../../components/ChooseKunSymbol";
import {
    getQueryGetSeriesDetail,
    queryInfiniteCardCollection, reactQuueryGetSeriesMember,
    useInfiniteQueryPrefetch,
    usePrefetch
} from "../../../react-query/core";
import {KLink} from "../../../components/KLink";
import {Scaffold} from "../../../components/Scaffold";
import {EditImage} from "../../../components/EditImage";
import {requestV2UpdateSeries} from "../../../apis/web";
import {UserCardImage} from "../../../components/UserCardImage";
import {ArticleCardVertical} from "../../../components/ArticleCardVertical";
import {getCheckedKunImageUrl} from "../../../components/SeriesCard";
import {useSeeUserDetail} from "../../../react-query/useUserSession";
import {BreadcrumbsLink} from "../../../components/PageHeader";
import {ListMessageApi} from "./ABB";
import {ScrollToTop} from "../../../components/ScrollToTop";
import {Members} from "./Members";
import Routes from "../../../routes";
import {CONSTANT_ROUTES} from "../../../routes/CONST_ROUTES";


const Tribe: FunctionComponent = () => {

    const {id} = useQueryParams() as { id: string };

    const {isOpen, onOpen, onClose} = useDisclosure()

    const [data, setData] = useState<HorseCardReturn | null>()

    const {data: detail, queryKey} = usePrefetch({id}, getQueryGetSeriesDetail)

    const {data: membersDetail} = usePrefetch({id}, reactQuueryGetSeriesMember)

    console.log('detail detail', detail)
    const groupId = useMemo(() => (detail?.record?.series?.groupId ?? '').replaceAll('-', ''), [detail?.record?.series?.groupId])
    const detail1 = detail as unknown as RetItem<HorseSeriesFull>

    const {data: userDetail} = useSeeUserDetail(detail1?.record?.series?.authorId)

    const {mutate} = useMutation(requestV2UpdateSeries)

    const {data: subscribeStatus} = useQuery(['subscribe', id],
        () => getSubscribeSeriesStatus({
                seriesId: id
            }
        )
    )

    const {
        data: seriesData,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        queryKey: queryKeyCardList,
    } = useInfiniteQueryPrefetch({
        seriesId: id,
    }, queryInfiniteCardCollection)

    const queryClient = useQueryClient()

    const mut = useMutation(reqSubscribeSeries, {
        useErrorBoundary: false,
    })

    const router = useHistory();

    const mutateAsyc = useMutation(requestV2UpdateSeries, {
        useErrorBoundary: false,
    })

    if (id == null || !detail) {
        return (<div>ddd</div>);
    }

    return (
        <Scaffold title={detail?.record?.series?.title ?? ''}>
            <Grid columns={24}>
                <Grid.Col span={18}>

                    <BreadcrumbsLink/>
                    <AvatarGroup size='md' max={2}>
                        {
                            (membersDetail?.records ?? []).map(item => (
                                <Avatar name={item.userName} src={getCheckedKunImageUrl(item.userAvatar)}/>
                            ))
                        }
                    </AvatarGroup>
                    <ListMessageApi groupId={groupId} seriesId={id}/>

                    <Button onClick={() => {
                        router.push(generatePath(CONSTANT_ROUTES.SeriesSetting, {
                            id,
                        }))
                    }}>
                        series
                    </Button>

                    <Paper shadow="xs" padding="md">
                        <Chips>
                            <Chip value="All">React</Chip>
                            <Chip value="react">React</Chip>
                            <Chip value="ng">Angular</Chip>
                            <Chip value="svelte">Svelte</Chip>
                            <Chip value="vue">Vue</Chip>
                        </Chips>
                    </Paper>
                    <div>
                        <Link isExternal href="https://baidu.com">
                            <h1>write {id} </h1>
                        </Link>

                        <CreateBaiduLInkButton/>

                        <CreateLinkButton/>
                        {
                            detail?.record?.series?.seriesType
                        }


                        <Editable defaultValue={detail?.record?.series?.title ?? 'title'} submitOnBlur
                                  onChange={async (x) => {
                                      await mutateAsyc.mutateAsync({
                                          ...(detail?.record?.series ?? {}),
                                          seriesId: detail?.record?.series.id!,
                                          title: x,
                                      } as ReqUpdateSeries, {
                                          onSuccess: (x1) => {
                                              console.log('x', x1)
                                              queryClient.invalidateQueries(queryKey)
                                          }
                                      })
                                      console.log('x', x)
                                      console.log('x', x)
                                      console.log('x', x)
                                  }}>
                            <EditablePreview/>
                            <EditableTextarea/>
                        </Editable>

                        {
                            detail?.record?.series?.title ?? 'title'
                        }
                        <div>
                            {subscribeStatus?.record == null ? '订阅' : '取消订阅'}
                        </div>

                        <div>
                            {subscribeStatus?.record == null ? (<Button onClick={() => {
                                mut.mutate(id, {
                                    onSuccess: () => {
                                        toast.success('已经成功订阅')
                                    }
                                });
                            }}>订阅</Button>) : '取消订阅'
                            }
                        </div>

                        <Button onClick={() => {
                            mut.mutate(id, {
                                onSuccess: () => {
                                    toast.success('已经成功订阅')
                                }
                            });
                        }}>订阅</Button>


                        <EditImage onUpload={(file) => {
                            console.log('upload file', file);
                            mutate({
                                ...detail!.record!.series,
                                seriesId: detail!.record!.series!.id,
                                coverImageName: file
                            }, {
                                onSuccess: () => {
                                    toast.success('更新成功')
                                    queryClient.invalidateQueries(queryKey)
                                }
                            })
                        }}
                                   url={getKunImageUrl(detail?.record?.series.coverImageName!)}> </EditImage>
                        <UploaderFileButton/>
                        <ChooseKunSymbol onClose={onClose} isOpen={isOpen} seriesId={data?.seriesId ?? ''}
                                         cardId={data?.cardId ?? ''}/>

                        {
                            (seriesData?.pages ?? []).map(list => (
                                <>
                                    {list.records.map(item => (
                                        <>
                                            <ArticleCardVertical
                                                item={item}
                                                onHandled={() => {
                                                    queryClient.invalidateQueries(queryKeyCardList)
                                                }}
                                                image={getCheckedKunImageUrl(item.imageNames?.[0] ?? '')}
                                                category="category"
                                                title={item.title}
                                                date={dayjs(item.createAt).format('YYYY-MM-DD')}
                                                author={{
                                                    name: 'authorName',
                                                    avatar: 'item.avatarName',
                                                }}
                                            />

                                            <KLink href={getArticleUrl(id, item.cardId)}
                                                   isExternal>
                                                <h1>{item.title}</h1>
                                            </KLink>
                                        </>
                                    ))}
                                </>
                            ))
                        }

                        {

                            hasNextPage && (
                                <Button onClick={() => fetchNextPage()}>加载更多</Button>
                            )
                        }
                    </div>
                </Grid.Col>

                <Grid.Col span={6}>
                    <UserCardImage
                        image={getCheckedKunImageUrl(userDetail?.record?.thumbnail)}
                        name={userDetail?.record?.nickName ?? 'nickname'}
                        avatar={getCheckedKunImageUrl(userDetail?.record?.thumbnail)}/>
                </Grid.Col>
            </Grid>
            <Members/>
            <ScrollToTop/>
            {/* <LoadMoreComp initialParameter={{seriesId: id}} render={record => ( */}
            {/*    <> */}
            {/*        <Link href={getArticleUrl(id, record.cardId)} */}
            {/*              isExternal> */}
            {/*            <h1>{record.title}</h1> */}
            {/*        </Link> */}


            {/*        { */}
            {/*            // eslint-disable-next-line camelcase */}
            {/*            record.postType === ENUM_POST_LINKInhabitant && ( */}
            {/*                <Link href={record.content} */}
            {/*                      isExternal> */}
            {/*                    <h1>链接： {record.content}</h1> */}
            {/*                </Link> */}
            {/*            ) */}
            {/*        } */}

            {/*        <Button onClick={() => { */}
            {/*            setData(record) */}
            {/*            onOpen(); */}
            {/*        }}> */}
            {/*            <h1>share</h1> */}
            {/*        </Button> */}

            {/*        <Link href={getEditArticleUrl(id, record.cardId)} */}
            {/*              isExternal> */}
            {/*            <h1>编辑</h1> */}
            {/*        </Link> */}
            {/*    </> */}
            {/*    )} api={getCardsBySeries} keyGetter={r => r.cardId}/> */}
        </Scaffold>
    )
}

export default React.memo(Tribe);
