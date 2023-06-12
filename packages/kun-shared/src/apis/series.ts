import {get} from "kun-tools/built/common/req";
import {HorseSeries} from "../src_managed/HorseSeries";
import {NoSqlPagingListDataPageMark} from "../common/NoSqlPagingListDataPageMark";
import {PaginationApi} from "./pagination";
import {LearnCardWithTitleReturn} from "../src_managed/LearnCardWithTitleReturn";
import {HorseSeriesReturn} from "../src_managed/HorseSeriesReturn";
import {HorseCategoryWithChild} from "../src_managed/HorseCategoryWithChild";
import { SeriesSubscriptionReturn } from "../src_managed/SeriesSubscriptionReturn";
import {HorseCardReturn} from "../src_managed/HorseCardReturn";
import {AuditSeriesVersionReturn} from "../src_managed/AuditSeriesVersionReturn";

export const getSeriesByAuthorGetByPageMark: PaginationApi<{ id: string }, HorseSeries> = async (props, pageMark): Promise<NoSqlPagingListDataPageMark<HorseSeries>> =>
    get<NoSqlPagingListDataPageMark<HorseSeries>>("/api/horse/v1/series/get_by_author", {
        ...props,
        ...pageMark,
    });

export const getCurrentLearningList: PaginationApi<{}, LearnCardWithTitleReturn> = async (_, pageMark): Promise<NoSqlPagingListDataPageMark<LearnCardWithTitleReturn>> =>
    get("/api/horse/v1/card/learn/currentLearning", {
        ...pageMark,
    });


export const getSubscribeSeries: PaginationApi<{}, SeriesSubscriptionReturn> = async (_, pageMark): Promise<NoSqlPagingListDataPageMark<SeriesSubscriptionReturn>> =>
    get("/api/horse/v1/series/getSubscribeList", {
        ...pageMark,
    });


export const getPublicSeries: PaginationApi<{
    categoryId ?: number
    subCategoryId ?: number
}, HorseSeriesReturn> = async (parameters, pageMark) =>
    get("/api/horse/v1/series/getPublicList", {
        ...parameters,
        ...pageMark,
    });

export const getMyCreatedSeries: PaginationApi<{
}, HorseSeriesReturn> = async (parameters, pageMark) =>
    get("/api/horse/v1/series/my", {
        ...parameters,
        ...pageMark,
    });

// export const getMyCreatedSeries: PaginationApi<ReqDeleteSeries, HorseSeriesReturn> = async (parameters, pageMark) =>
//     post("/api/horse/v1/series/my", {
//         ...parameters,
//         ...pageMark,
//     });

export const getSeriesCategories: PaginationApi<{
}, HorseCategoryWithChild> = async (parameters, pageMark) =>
    get("/api/horse/v1/series/categories", {
        ...parameters,
        ...pageMark,
    });

export const getCardsBySeries: PaginationApi<{
    seriesId: string;
}, HorseCardReturn> = async (parameters, pageMark) =>
    get("/api/horse/v1/card/cards_by_page_mark", {
        ...parameters,
        ...pageMark,
    });

export const getAuditList: PaginationApi<{
}, AuditSeriesVersionReturn> = async (parameters, pageMark) =>
    get("/api/horse/v1/series/listAuditList", {
        ...parameters,
        ...pageMark,
    });
