import {QueryClient} from "react-query";
import RouteAppWapper from "../app";
import {
  asyncHome,
  asyncWallet,
  asyncIndexEvents,
  asynSetting,
  asyncLogin,
  asyncSubscription,
  asyncMyCreated,
  NotFound,
  asyncCreateSeries,
  asyncChat,
  asyncSeriesDetail,
  asyncAdmin,
  asyncOrder,
  asyncSearch,
  asyncTimelines,
  asyncArticle,
  asyncMessage,
  asyncReadingList,
  asyncPublicSeries,
  asyncWritePost,
  asyncTribe,
  asyncAbout,
  asyncStarCollection,
  asyncPostByTag,
  asyncEditPost,
  asyncEvents,
  asyncNoticeSetting,
  asyncBaiduYunDownload,
  asyncPrivateChat,
  asyncTestComp,
  asyncArticleV2,
  asyncKunPage,
  asyncKunItemPage,
  asyncCreateSymbol,
  asyncCommentItem,
  asyncNotionPage,
  asyncBlog,
  asyncContracts,
  asyncSeriesSetting,
  async503,
  asyncConcernMembers,
  asyncPracticeList,
  asyncPracticeItemPage, asyncChatRoom
} from "../pages";

import {CONSTANT_ROUTES} from "./CONST_ROUTES";
import {Items, QueryParamsArticle} from "../pages/Horse/Article/Article";
import {getPublicCard} from "../apis/web";
import {
  aInfinitePrefetch,
  aPrefetch,
  aPrefetch1,
  getChildCommentList,
  getKunArticleItem,
  getQueryCommentItem,
  getQueryGetSeriesDetail,
  getQueryKunDetail,
  queryGetStarCollection,
  queryInfiniteCardCollection, reactQuueryGetNotionBlog, reactQuueryGetNotionTable, reactQuueryGetSeriesMember
} from "../react-query/core";

export interface QueryContext<T> {
  cookies: Record<string, string>
  params: T,
  queryClient: QueryClient
}

export const routes = [
  {
    path: CONSTANT_ROUTES.Test,
    exact: true,
    component: asyncTestComp,
  },
  {
    path: CONSTANT_ROUTES.Wallet,
    exact: true,
    component: asyncWallet,
  },
  {
    path: CONSTANT_ROUTES.PostCommentItem,
    exact: true,
    component: asyncCommentItem,
    getInitialProps: async  (context: QueryContext<{
      postId: string
      channelId: number
      commentId: string
    }>): Promise<void> => {
      await aPrefetch(context, getQueryCommentItem)
      await aPrefetch(context, getChildCommentList)
    }
  },
  {
    path: CONSTANT_ROUTES.KunItemPage,
    exact: true,
    component: asyncKunItemPage, // Add your route here
    getInitialProps: async  (context: QueryContext<{symbol: string, id: string}>): Promise<void> => {
      await aPrefetch(context, getKunArticleItem)
    }
  },
  {
    path: CONSTANT_ROUTES.ArticleV2,
    exact: true,
    component: asyncArticleV2, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Blog,
    exact: true,
    component: asyncBlog, // Add your route here
    getInitialProps: async  (context: QueryContext<{name: string}>): Promise<void> => {
      console.log('blog xxxxxx')
      await aPrefetch(context, reactQuueryGetNotionTable)
      // const context1 = {
      //   ...context,
      //   params: {
      //     id: "b0d79d4f7b584e68aea5137ddd476778"
      //   }
      // }
      // await aServerPrefetch(context1, queryGetBlogList, {
      //   staleTime: 24 * 1000 * 60 * 60,
      //   cacheTime: 24 * 1000 * 60 * 60,
      // })
      //
      // const key = queryGetBlogList.fun(context1?.params ?? {})
      // const a1 = (dayjs().add(7, 'day')).unix()
      // context.queryClient.setQueryData(key, newServerClient.getQueryData(key),{
      //   updatedAt: a1
      // })
    }
  },
  {
    path: CONSTANT_ROUTES.Notion,
    exact: true,
    component: asyncNotionPage, // Add your route here
    getInitialProps: aPrefetch1(reactQuueryGetNotionBlog)
  },
  {
    path: CONSTANT_ROUTES.SeriesSetting,
    exact: true,
    component: asyncSeriesSetting, // Add your route here
    getInitialProps: async  (context: QueryContext<{id: string}>): Promise<void> => {
      await aPrefetch(context, getQueryGetSeriesDetail)
    }
  },
  {
    path: CONSTANT_ROUTES.KunPage,
    exact: true,
    component: asyncKunPage, // Add your route here
    getInitialProps: async  (context: QueryContext<{name: string}>): Promise<void> => {
      await aPrefetch(context, getQueryKunDetail)
    }
  },
  {
    path: CONSTANT_ROUTES.CollectionAll,
    exact: true,
    component: asyncStarCollection, // Add your route here
    getInitialProps: aPrefetch1(queryGetStarCollection)
  },
  {
    path: CONSTANT_ROUTES.Collection,
    exact: true,
    component: asyncStarCollection, // Add your route here
    getInitialProps: aPrefetch1(queryGetStarCollection)
  },
  {
    path: CONSTANT_ROUTES.Write,
    exact: true,
    component: asyncWritePost,
  },
  {
    path: CONSTANT_ROUTES.EditPost,
    exact: true,
    component: asyncEditPost,
  },
  {
    path: CONSTANT_ROUTES.Home,
    exact: true,
    component: asyncHome,
  },
  {
    path: CONSTANT_ROUTES.BaiduYunDownload,
    exact: true,
    component: asyncBaiduYunDownload,
  },
  {
    path: CONSTANT_ROUTES.SeriesHome,
    exact: true,
    component: asyncTribe,
    getInitialProps: async  (context: QueryContext<{id: string}>): Promise<void> => {
      await aPrefetch(context, getQueryGetSeriesDetail)
      await aPrefetch(context, reactQuueryGetSeriesMember)
      const newContext : QueryContext<{seriesId: string}>= {...context,
        params: {
          seriesId: context.params.id
        },
      }
      await aInfinitePrefetch(newContext, queryInfiniteCardCollection)
    }
  },
  {
    path: CONSTANT_ROUTES.Tribe,
    exact: true,
    component: asyncTribe,
  },
  {
    path: CONSTANT_ROUTES.InternalError,
    exact: true,
    component: async503,
  },
  {
    path: CONSTANT_ROUTES.About,
    exact: true,
    component: asyncAbout,
  },
  // {
  //   path: CONSTANT_ROUTES.Author,
  //   exact: true,
  //   component: asyncUser,
  //   getInitialProps: async  (context: QueryContext<{userId: string}>): Promise<void> => {
  //     await aPrefetch(context, getQueryAuthorProfile)
  //   }
  // },
  {
    path: CONSTANT_ROUTES.CurrentLearning,
    exact: true,
    component: asyncReadingList,
  },
  {
    path: CONSTANT_ROUTES.Article,
    exact: true,
    component: asyncArticle,
    getInitialProps: async  (context: QueryContext<QueryParamsArticle>): Promise<void> => {
      console.log('context.', context.params)
      await context.queryClient.prefetchQuery(Items.Article, () => getPublicCard(context.params).then(r => {
        console.log('rxxx', r)
        return r;
      }))
    }
  },
  {
    path: CONSTANT_ROUTES.MessageSuccess,
    exact: true,
    component: asyncMessage,
  },
  // {
  //   path: CONSTANT_ROUTES.Article,
  //   exact: true,
  //   component: asyncArticle,
  // },
  {
    path: CONSTANT_ROUTES.ConcernMembers,
    exact: true,
    component: asyncConcernMembers,
  },
  {
    path: CONSTANT_ROUTES.IndexEvents,
    exact: true,
    component: asyncIndexEvents,
  },
  {
    path: CONSTANT_ROUTES.Admin,
    exact: true,
    component: asyncAdmin,
  },
  {
    path: CONSTANT_ROUTES.MySeries,
    exact: true,
    component: asyncMyCreated,
    // getInitialProps: async  (context: QueryContext<any>): Promise<{list: ModelRetRecords<Series>}> => {
    //   const r = await requestGetAllSeries(context)
    //   console.log('r', r);
    //   console.log('JSON.stringify', r);
    //   return {list: r}
    // }
  },
  {
    path: CONSTANT_ROUTES.Setting,
    exact: true,
    component: asynSetting,
  },
  {
    path: CONSTANT_ROUTES.SeriesDetail,
    exact: true,
    component: asyncSeriesDetail,
  },
  {
    path: CONSTANT_ROUTES.NoticeSetting,
    exact: true,
    component: asyncNoticeSetting,
  },
  {
    path: CONSTANT_ROUTES.MySubscription,
    exact: true,
    component: asyncSubscription,
  },
  {
    path: CONSTANT_ROUTES.CreateSeries,
    exact: true,
    component: asyncCreateSeries, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Discover,
    exact: true,
    component: asyncPublicSeries, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Home,
    exact: true,
    component: asyncPublicSeries, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Chat,
    exact: true,
    component: asyncChat, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Order,
    exact: true,
    component: asyncOrder, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Login,
    exact: true,
    component: asyncLogin, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.NotFound,
    exact: true,
    component: asyncHome, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Timeline,
    exact: true,
    component: asyncTimelines, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Events,
    exact: true,
    component: asyncEvents, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Search,
    exact: true,
    component: asyncSearch, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Tag,
    exact: true,
    component: asyncPostByTag, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.SymbolCreate,
    exact: true,
    component: asyncCreateSymbol, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Direct,
    exact: true,
    component: asyncPrivateChat, // Add your route here
  },
  {
    path: "/live/a/404",
    component: NotFound, // Add your route here
  },
  {
    path: "/live/404",
    component: NotFound, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.ExerciseList,
    exact: true,
    component: asyncPracticeList, // Add your route here
  },
  {
    path: CONSTANT_ROUTES.Contacts,
    exact: true,
    component: asyncContracts, // Add your route here
  },

  {
    path: CONSTANT_ROUTES.ChatRoom,
    exact: true,
    component: asyncChatRoom, // Add your route here
  },

  {
    path: CONSTANT_ROUTES.PracticePage,
    exact: true,
    component: asyncPracticeItemPage, // Add your route here
  },

  {
    path: "/",
    exact: true,
    component: asyncHome, // Add your route here
  },
  {
    path: "/404",
    component: NotFound, // Add your route here
  },
  {
    path: "*",
    component: asyncNotionPage, // Add your route here
  },
]

export default [
  {
    component: RouteAppWapper,
    routes,
  },
];
