/* eslint-disable */
import {kunInhabitant} from "kun-shared/built/src_managed/kun";
import {OptionData} from "kun-shared/built/common/OptionData";
import {KunSymbol} from "kun-shared/built/src_managed/KunSymbol";
import {HorseCardReturn} from "kun-shared/built/src_managed/HorseCardReturn";
import { KunProfile } from "kun-shared/built/src_managed/KunProfile";
import {RetItem} from "kun-shared/built/v2/api/v2";
import {HorseSeriesFull} from "kun-shared/built/src_managed/HorseSeriesFull";
import {QueryClient, useInfiniteQuery, useQuery} from "react-query";
import {useMemo} from "react";
import {KunSymbolContent} from "kun-shared/built/src_managed/KunSymbolContent";
import {ReqByPagination} from "kun-shared/built/src_managed/ReqByPagination";
import {NoSqlPagingListData} from "kun-shared/built/common/NoSqlPagingListData";
import {ChildKunComment} from "kun-shared/built/src_managed/ChildKunComment";
import {ContentMsgType} from "kun-shared/built/src_managed/ContentMsgType";
import {ContentCollection} from "kun-shared/built/src_managed/ContentCollection";
import {QueryContext} from "../routes";
import {ReactQueryKeys} from "../shared/context";
import {
    getBlogById,
    getKunItem, getV2CommentList,
    reqGetAuthorProfile,
    reqGetChildCommentList,
    reqGetKunItem,
    reqGetSeriesDetail,
    // requestBlogDetail,
    requestGetCardsBySeries,
    requestNotionBlogDetail, requestV2GetChatMessage,
    requestV2GetCollectionList,
    requestV2NotionTable, requestv2SeriesMembers,
    reqV2GetCommentItem
} from "../apis/web";
import {GetCommentPageState} from "kun-shared/built/src_managed/GetCommentPageState";
import {KunCommentWithDateHashLong} from "kun-shared/built/src_managed/KunCommentWithDateHashLong";
import {UseQueryOptions, UseQueryResult} from "react-query/types/react/types";
import {GetMsgByGroup1} from "kun-shared/built/src_managed/GetMsgByGroup1";
import {KunMessageReturn} from "kun-shared/built/src_managed/KunMessageReturn";
import {NoSqlPagingListDataPageMarkDateTime} from "kun-shared/built/common/NoSqlPagingListDataPageMarkDateTime";
import {RetSubscriptionUser} from "kun-shared/built/src_managed/RetSubscriptionUser";

export interface FunctionQuery<P, D> {
    fun: (a?: P) => string|string[],
    query: (a?: P & {
        pageParam?: string
    }) =>Promise<D>,
    options?: any
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
export const mockFetchQuery =<T>(data?: unknown) =>  new Promise((resolve) => {
    throw new Error();
    // resolve('' as unknown as T)
})

export const getQueryKunDetail: FunctionQuery<{name: string}, OptionData<KunSymbol>>  ={
    fun: () => ReactQueryKeys.kunDetail,
    query: (data) => getKunItem({
        channelId: kunInhabitant.world, name: data?.name ?? ''
    })
}

export const queryFetchNotionPage: FunctionQuery<{name: string}, OptionData<KunSymbol>>  ={
    fun: (data) => [ReactQueryKeys.notionPage, String(data?.name)],
    query: async (data) => {
       const {default: fetchData} = await import("../notion-server/notion")
       return fetchData(data?.name ?? '')
    }
}


export const getQueryAuthorProfile: FunctionQuery<{userId: string}, RetItem<KunProfile>>  ={
    fun: (data) => [ReactQueryKeys.AuthorProfile, data?.userId ?? ''],
    query: (data) => reqGetAuthorProfile({id: data?.userId ?? ''})
}


export const getQueryGetSeriesDetail: FunctionQuery<{id: string}, RetItem<HorseSeriesFull>>  ={
    fun: (data) => [ReactQueryKeys.getQueryGetSeriesDetail, data?.id ?? ''],
    query: (data) => reqGetSeriesDetail({id: data?.id ?? ''})
}

export const getKunArticleItem: FunctionQuery<{id: string, symbol: string},OptionData<KunSymbolContent>>  ={
    fun: (data) => [ReactQueryKeys.getKunItemDetail, data?.symbol ?? '', data?.id ?? ''],
    query: (data) => reqGetKunItem(({symbol: data?.symbol ?? '', id: data?.id ?? '',  channelId: kunInhabitant.world}))
}

export const getQueryCommentItem: FunctionQuery<{
    postId: string
    channelId: number
    commentId: string },OptionData<KunSymbolContent>>  ={
    fun: (data) => [ReactQueryKeys.getCommentItem, String(data?.channelId ?? ''),
        String(data?.postId ?? ''), String(data?.commentId ?? '')],
    query: (data) => reqV2GetCommentItem(data!)
}

export const getChildCommentList: FunctionQuery<ReqByPagination &{
    commentId: string
    postId: string
    channelId: number
},NoSqlPagingListData<ChildKunComment>>  ={
    fun: (data) => [ReactQueryKeys.getChildCommentItem, String(data?.channelId ?? ''),
        String(data?.postId ?? ''), String(data?.commentId ?? '')],
    query: (data) => reqGetChildCommentList(data!)
}

export const queryGetBlogList: FunctionQuery<ReqByPagination &{
    id: string,
},unknown[]>  ={
    fun: () => [ReactQueryKeys.getBlogList],
    query: (data) => getBlogById(data!)
}

export const queryGetStarCollection: FunctionQuery<ReqByPagination &{
    channelId: string,
    userId: string;
    msgType ?: ContentMsgType,
},NoSqlPagingListData<ContentCollection>>  ={
    fun: (data) => [ReactQueryKeys.getChildCommentItem, String(data?.channelId ?? ''),
        String(data?.userId ?? ''), String(data?.msgType ?? '')],
    query: (data) => requestV2GetCollectionList(data!)
}

export const queryInfiniteListGroupMessages: FunctionQuery< GetMsgByGroup1 & {
    channelId: number,
},NoSqlPagingListData<KunMessageReturn>>  ={
    fun: (data) => [ReactQueryKeys.getInfiniteMessage, String(data?.channelId ?? ''),
        String(data?.groupId ?? '')
    ],
    query: (data) => {
        console.log('data parameter', data);
        return requestV2GetChatMessage({
            ...(data!),
            pageState: data?.pageParam,
        })
    },
    options: {
        getNextPageParam: (lastPage: NoSqlPagingListData<unknown>) => {
            console.log('la', lastPage)
            return lastPage.pageState
        },
    }
}


export const queryInfiniteCardCommentList: FunctionQuery< GetCommentPageState & {
    channelId: number
},NoSqlPagingListData<KunCommentWithDateHashLong>>  ={
    fun: (data) => [ReactQueryKeys.getInfiniteCard, String(data?.channelId ?? ''),
        String(data?.postId ?? '')
    ],
    query: (data) => {
        console.log('data parameter', data);
        return getV2CommentList({
            ...(data!),
            pageState: data?.pageParam,
            // pageMark: data?.pageParam
        })
    },
    options: {
        getNextPageParam: (lastPage: NoSqlPagingListData<unknown>) => {
            console.log('la', lastPage)
            return lastPage.pageState
        },
    }
}


export const queryInfiniteCardCollection: FunctionQuery<{
    seriesId: string;
    pageMark?: number|string;
},NoSqlPagingListData<HorseCardReturn>>  ={
    fun: (data) => [ReactQueryKeys.getInfiniteCard, String(data?.seriesId ?? '')],
    query: (data) => {
        console.log('data parameter', data);
        return requestGetCardsBySeries({
            ...(data!),
            pageState: data?.pageParam,
            pageMark: data?.pageParam
        })
    },
    options: {
        getNextPageParam: (lastPage: NoSqlPagingListData<unknown>) => {
            console.log('la', lastPage)
            return lastPage.pageState
        },
    }
}

export const aPrefetch1 = <Q, T>( data: FunctionQuery<Q, T>) => (context: QueryContext<Q>) => aPrefetch(context, data)

export const aPrefetch2 = <Q, T>(d1: FunctionQuery<Q, T>, d2: FunctionQuery<Q, T>) => async  (context: QueryContext<Q>) => {
    await  aPrefetch(context, d1)
    await  aPrefetch(context, d2)
}

export const aPrefetch = <Q, T>(context: QueryContext<Q>, data: FunctionQuery<Q, T>) => {
    const a= context.params as unknown as Q
    const {queryClient} = context
    return queryClient.prefetchQuery(data.fun(a), () => data.query(a), {
        staleTime: Infinity,
        cacheTime: Infinity,
    })
}

export const newServerClient = new QueryClient()

export const aServerPrefetch = <Q, T>(context: QueryContext<Q>, data: FunctionQuery<Q, T>,
                                      options ?: {
    staleTime ?: number,
    cacheTime ?: number,
}
) => {
    const a= context.params as unknown as Q
    return newServerClient.prefetchQuery(data.fun(a), () => data.query(a), {
        staleTime: Infinity,
        cacheTime: Infinity,
        ...(options ?? {})
    })
}


export const aInfinitePrefetch = <Q, T>(context: QueryContext<Q>, data: FunctionQuery<Q, T>) => {
    const a= context.params as unknown as Q
    const key = data.fun(a)
    const {queryClient} = context
    return queryClient.prefetchInfiniteQuery(key,(object) => {
        console.log('ob', object);
        return data.query({...a, pageParam: object.pageParam})
    }, {
        ...(data.options ?? {}),
    })
}

export const usePrefetch = <P, D>(params: P, data: FunctionQuery<P, D>, options?: Omit<UseQueryOptions<unknown, unknown, D, string|string[]>, 'queryKey' | 'queryFn'>) : UseQueryResult<D, unknown> & {
    queryKey: string[]|string
}  => {
    const a = useMemo(() =>  data.fun(params), [data, params]);
    const data1 =  useQuery(a,() => data.query(params), {
        cacheTime: Infinity,
        staleTime: Infinity,
        ...(options ?? {}),
    })
    return useMemo(() => ({
        ...data1,
        queryKey: a,
    }), [a, data1])
}

export const useInfiniteQueryPrefetch = <Q, T>(params: Q, data: FunctionQuery<Q, T>) => {
    const a = useMemo(() =>  data.fun(params), [data, params]);
    console.log("aaaaaaaaa", a);
    const data1= useInfiniteQuery(a,(object) => {
        console.log('ob', object);
        return data.query({...params, pageParam: object.pageParam})
    }, {
        ...(data.options ?? {}),
    })
    return useMemo(() => ({...data1, queryKey: a}), [a, data1])
}


export const reactQuueryGetNotionBlog: FunctionQuery<{
    name: string,
},unknown>  ={
    fun: (data) => [ReactQueryKeys.getNotionBlog, String(data?.name)],
    query: (data) => requestNotionBlogDetail(data!)
}

export const reactQuueryGetNotionTable: FunctionQuery<{
    name: string,
},unknown>  ={
    fun: (data) => [ReactQueryKeys.getNotionTable, String(data?.name)],
    query: (data) => requestV2NotionTable(data!)
}

export const reactQuueryGetSeriesMember: FunctionQuery<{
    id: string,
},NoSqlPagingListDataPageMarkDateTime<RetSubscriptionUser>>  ={
    fun: (data) => [ReactQueryKeys.getSeriesMember, String(data?.id)],
    query: (data) => requestv2SeriesMembers({
        seriesId: data?.id !
    })
}

// export const queryInfiniteCardCommentList: FunctionQuery< GetCommentPageState & {
//     channelId: number
// },NoSqlPagingListData<KunCommentWithDateHashLong>>  ={
//     fun: (data) => [ReactQueryKeys.getInfiniteCard, String(data?.channelId ?? ''),
//         String(data?.postId ?? '')
//     ],
//     query: (data) => {
//         console.log('data parameter', data);
//         return getV2CommentList({
//             ...(data!),
//             pageState: data?.pageParam,
//             // pageMark: data?.pageParam
//         })
//     },
//     options: {
//         getNextPageParam: (lastPage: NoSqlPagingListData<unknown>) => {
//             console.log('la', lastPage)
//             return lastPage.pageState
//         },
//     }
// }
//
