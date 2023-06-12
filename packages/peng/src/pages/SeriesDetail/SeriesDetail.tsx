import {ModelRetRecord} from "kun-shared/built/apis/model";
import {checkIfSuccess} from "kun-shared/built/apis/check-if-success";
import {memo, useEffect } from "react";
import {Heading, Flex, Container, Divider} from "@chakra-ui/react"
import {HorseSeriesWithMetaCustom} from "kun-shared/built/apis/HorseSeriesWithMetaCustom";
import {getSeriesMetaDetail, RetSeriesRecordDetail} from "kun-shared/built/apis/get-series-detail";
import {getParameter} from "kun-tools/built/common/get-parameter";
import {Helmet} from "react-helmet";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import {useIsomorphicEffect} from "@mantine/hooks";
import {AsyncComponent} from "../../tool";
import {useSeriesStore} from "./Context";
import {Header} from "../../components/Header";
import {SeriesCardMeta} from "../../components/SeriesCardMeta";
import {SeriesSummaryCard} from "../../components/SeriesCardMeta/SeriesSummrayCard";
import {SeriesTags} from "../../components/SeriesCardMeta/SeriesTags";
import {AuthorCard} from "../../components/AuthorCard";
import {SeriesCardSummary} from "../../components/SeriesCardSummary";
import {KunFooter} from "../../components/Footer";


const SeriesDetail: AsyncComponent<{info ?: ModelRetRecord<RetSeriesRecordDetail>}> = ({info}) => {

    // TODO check if series meta ok
    console.log('info', info);

    const setSeriesMeta = useSeriesStore(r => r.setSeriesMeta)
    const seriesMeta = useSeriesStore(r => r.seriesMeta)
    const getSubscripStatus = useSeriesStore(r => r.getSubscriptionOption)
    const seriesSubscriptionOpt = useSeriesStore(r => r.seriesSubscriptionOpt)

    const v = async () => {
        const id = getParameter('id');
        if(id != null){
            await getSubscripStatus(id)
            const retItem =await getSeriesMetaDetail(id)
            if(checkIfSuccess(retItem)) {
                setSeriesMeta(retItem.record)
            }
        }
    }
    useIsomorphicEffect( () => {
        v()
    },[])

    if(seriesMeta == null) {
        return null;
    }

    return (
        <>
            <Helmet title={`${seriesMeta?.series?.title ?? ''}`} />
            <Header/>
            <Container maxW="container.lg">
                <Flex>
                    <Container maxWidth="container.md" pt={6} >
                        <SeriesCardMeta series={seriesMeta} />

                        <Heading as="h5" size="sm">
                            文章
                        </Heading>
                        <Divider orientation="horizontal" />
                        <SeriesCardSummary cards={seriesMeta.cards} />
                        
                        <Heading as="h5" size="sm">
                            作者
                        </Heading>
                        <Divider orientation="horizontal" />
                        <AuthorCard
                            authorId={seriesMeta.authorProfile.userId}
                            name={seriesMeta.authorProfile.brandName ?? ''}
                            description={seriesMeta.authorProfile.brandDescription ?? ''}
                            coverImageUrl={getKunImageUrl(seriesMeta.authorProfile.brandAvatarName ?? '')} />
                        <Heading as="h5" size="sm">
                           标签
                        </Heading>
                        <Divider orientation="horizontal" />
                        <SeriesTags tags={['学习']}/>

                    </Container>
                    <Container pt="20px">
                        <SeriesSummaryCard
                            seriesType={seriesMeta.series.seriesType}
                            subscribed={seriesSubscriptionOpt?.record != null} price={seriesMeta.series.price ?? 0} article={(seriesMeta.series as HorseSeriesWithMetaCustom).cardCount ?? 0 } />
                    </Container>
                </Flex>
            </Container>
            <KunFooter/>
        </>
    )
}

// SeriesDetail.getInitialProps = async  (url ?: string ) => {
//     const id = getParameter('id', url);
//     if(id != null) {
//         const r = await getSeriesDetail(id)
//         return {info: r}
//     }
//     return {}
// }

export default memo(SeriesDetail);
