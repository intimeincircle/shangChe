import {ModelRetRecords} from "../../apis/model";
import {SeekCardItem} from "../../apis/get-current-list";
import {OptionData} from "../../common/OptionData";
import {HorseCardWithSeries} from "../../src_managed/HorseCardWithSeries";
import {HorseSeriesReturn} from "../../src_managed/HorseSeriesReturn";
import {ReqByPageMark} from "../../src_managed/ReqByPageMark";
import {NoSqlPagingListDataPageMark} from "../../common/NoSqlPagingListDataPageMark";
import {NoSqlPagingListData} from "../../common/NoSqlPagingListData";
import {ChatGroupByUserReturn} from "../../src_managed/ChatGroupByUserReturn";
import {KunMessageReturn} from "../../src_managed/KunMessageReturn";
import {ReqCreateHorseCard} from "../../src_managed/ReqCreateHorseCard";
import {ShareCard} from "../../src_managed/ShareCard";
import {KunSymbol} from "../../src_managed/KunSymbol";
import {ReqCreateSymbol} from "../../src_managed/ReqCreateSymbol";
import {KunSymbolContent} from "../../src_managed/KunSymbolContent";
import {horseInhabitant} from "../../src_managed/horse";
import {KunConcern} from "../../src_managed/KunConcern";
import {RetLqUser} from "../../src_managed/RetLqUser";
import {KunProfile} from "../../src_managed/KunProfile";
import {HorseSeriesFull} from "../../src_managed/HorseSeriesFull";
import {ReqCreateCardComment1} from "../../src_managed/ReqCreateCardComment1";
import {GetCommentPageState} from "../../src_managed/GetCommentPageState";
import {KunCommentWithDateHashLong} from "../../src_managed/KunCommentWithDateHashLong";
import {ReqByPagination} from "../../src_managed/ReqByPagination";
import {ChildKunComment} from "../../src_managed/ChildKunComment";
import {ContentMsgType} from "../../src_managed/ContentMsgType";
import {ContentCollection} from "../../src_managed/ContentCollection";
import {ReqCreateHorseCardCollection} from "../../src_managed/ReqCreateHorseCardCollection";
import {ReqCheckCollected} from "../../src_managed/ReqCheckCollected";
import {HorseCardReturn} from "../../src_managed/HorseCardReturn";
import {Series} from "../../apis/get-card-by-id-and-version";
import {ReqUpdateProfile} from "../../apis/req-update-profile";
import {ReqChangeNickName} from "../../src_managed/ReqChangeNickName";
import {ReqDeleteSeries} from "../../src_managed/ReqDeleteSeries";
import {ReqUpdateSeries} from "../../src_managed/ReqUpdateSeries";
import {ReqChangeAvatar} from "../../src_managed/ReqChangeAvatar";
import {ReqChangeSlogan} from "../../src_managed/ReqChangeSlogan";
import {ReqDeleteCommentByPostId} from "../../src_managed/ReqDeleteCommentByPostId";
import {ReqDeleteHorseCard} from "../../src_managed/ReqDeleteHorseCard";
import {ReqCreateKunExercise} from "../../src_managed/ReqCreateKunExercise";
import {KunExerciseReturn} from "../../src_managed/KunExerciseReturn";
import {ReqDeleteKunExercise} from "../../src_managed/ReqDeleteKunExercise";
import {KunExerciseUpdate} from "../../src_managed/KunExerciseUpdate";
import {ReqSendContentMsg} from "../../src_managed/ReqSendContentMsg";
import {KunChatGroup} from "../../src_managed/KunChatGroup";
import {ReqGetGroup} from "../../src_managed/ReqGetGroup";
import {ReqDeleteMsg} from "../../src_managed/ReqDeleteMsg";
import {GetMsgByGroup1} from "../../src_managed/GetMsgByGroup1";
import {ReqAddDiscussionByGroup} from "../../src_managed/ReqAddDiscussionByGroup";
import {RetSubscriptionUser} from "../../src_managed/RetSubscriptionUser";
import {NoSqlPagingListDataPageMarkDateTime} from "../../common/NoSqlPagingListDataPageMarkDateTime";
import {ReqLikeMessageId} from "../../src_managed/ReqLikeMessageId";
import {ReqCreateConcern} from "../../src_managed/ReqCreateConcern";
import {HashLong} from "../../common/HashLong";
import {ReqCreatePractice} from "../../src_managed/ReqCreatePractice";
import {ReqDeletePractice} from "../../apis/req-delete-practice";
import {KunPracticeReturn} from "../../src_managed/KunPracticeReturn";
import {ReqLikeFeed} from "../../src_managed/ReqLikeFeed";
import {UserBalance} from "../../src_managed/UserBalance";
import {PaginationApi} from "../../apis/pagination";
import {get} from "kun-tools/built/common/req";
import {KunUser} from "../../fetch";

export interface RetItem<T> {
    code: number;
    msg: string;
    record?: T;
    data?: T;
}

export interface RequestData {

}

export type APIClient = (options: {
    body: RequestData,
    url: string,
    method: 'POST' | 'GET',
    json: boolean,
    options?: {
        baseUrl?: string,
    }
}) => (
    body: RequestData,
    options?: {
        skipCheck?: boolean,
    }
)  =>  Promise<any>

export type API_DEFINE_CLIENT <T extends RequestData, R> = (data: T) => (client: APIClient) => Promise<R>;


export interface ReqLogin extends RequestData {
    user_name: String,
    password: String
}


export const v2ReqLogin: API_DEFINE_CLIENT<ReqLogin, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
       return client({
            body: data,
            method: "POST",
            url: '/api/horse/auth/v1/horse/login',
            json: true
        })(data)
    }
}
export const v2GetCurrentLearningList : API_DEFINE_CLIENT<{pageMark?: string}, ModelRetRecords<SeekCardItem>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: '/api/horse/v1/card/learn/currentLearning',
            json: true
        })(data)
    }
}

// ?id=5G4mbzy3&seriesId=30ykAAn8
export const v2GetArticle : API_DEFINE_CLIENT<{id: string, seriesId: string}, OptionData<HorseCardWithSeries>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: '/api/horse/v1/card/get_by_id',
            json: true
        })(data)
    }
}

export const v2SubscribedSeries : API_DEFINE_CLIENT<{id: string, seriesId: string}, OptionData<HorseCardWithSeries>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: '/api/horse/v1/card/get_by_id',
            json: true
        })(data)
    }
}

export const v2UpdateSeries : API_DEFINE_CLIENT<ReqUpdateSeries, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: '/api/horse/v1/series/update',
            json: true
        })(data)
    }
}

export const v2SubscribeSeries : API_DEFINE_CLIENT<{seriesId: string}, OptionData<HorseCardWithSeries>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: '/api/horse/v1/series/subscribe_series',
            json: true
        })(data)
    }
}

export const v2MyCreatedSeries: API_DEFINE_CLIENT<ReqByPageMark, NoSqlPagingListDataPageMark<HorseSeriesReturn>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: '/api/horse/v1/series/my',
            json: true
        })(data)
    }
}

export const v2GetMyChatGroup: API_DEFINE_CLIENT<ReqByPageMark, NoSqlPagingListData<ChatGroupByUserReturn>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: '/api/chat/v1/50/groups',
            json: true
        })(data)
    }
}

export interface  ReqByChatHistory extends  ReqByPageMark{
    groupId: string
}

export const v2GetMyChatHistory: API_DEFINE_CLIENT<ReqByChatHistory, NoSqlPagingListData<KunMessageReturn>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: '/api/chat/v1/50/history',
            json: true
        })(data)
    }
}


export interface ReqCreateAudit {
    seriesId: string;
}

// export const requestCreateAudit = async (data: ReqCreateAudit): Promise<RetItem<void>> => post<RetItem<void>>("/horse/v1/series/toAudit", data as unknown as RequestFormData);
export const v2CreateAudit: API_DEFINE_CLIENT<ReqCreateAudit, void> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: '/api/horse/v1/series/toAudit',
            json: true
        })(data)
    }
}


export const v2GetQiniuToken: API_DEFINE_CLIENT<{}, RetItem<null>> = (data: {})  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: '/api/horse/v1/qiniu/token',
            json: true
        })(data)
    }
}

export const v2CreateHorseCardSubmit: API_DEFINE_CLIENT<ReqCreateHorseCard, RetItem<string>> = (data: {})  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: "/api/horse/v1/card/createSubmit",
            json: true
        })(data)
    }
}

export const v2GetPublicCard: API_DEFINE_CLIENT<{
    seriesId: string, id: string
}, OptionData<HorseCardWithSeries>> = (data: {})  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/v1/card/public/get_by_id",
            json: true
        })(data)
    }
}

export const v2ShareKunCard: API_DEFINE_CLIENT<ShareCard, RetItem<void>> = (data: {})  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: "/api/horse/v1/card/share",
            json: true
        })(data)
    }
}


// TODO pagination
export interface AP {
    channelId: number;
    name: string;
}

export const v2ListKunContent: API_DEFINE_CLIENT<AP, NoSqlPagingListData<KunSymbolContent>> = (data: AP)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/claim/peng/v1/${data.channelId}/content/list`,
            json: true
        })(data)
    }
}

export const v2GetKunItem: API_DEFINE_CLIENT<AP, OptionData<KunSymbol>> = (data: AP)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/claim/peng/v1/${data.channelId}/detail`,
            json: true
        })(data)
    }
}


export const v2SearchSymbol: API_DEFINE_CLIENT<{name: string, channelId: number}, NoSqlPagingListData<KunSymbol>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/claim/peng/v1/${data.channelId}/symbol/list`,
            json: true
        })(data)
    }
}

export const v2SymbolCheckNameAviable: API_DEFINE_CLIENT<{name: string, channelId: number}, OptionData<boolean>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/claim/peng/v1/${data.channelId}/symbol/checkNameAviable`,
            json: true
        })(data)
    }
}

export const v2GetConcern: API_DEFINE_CLIENT<{pageState: string, channelId: number}, NoSqlPagingListData<KunConcern>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/v1/concern`,
            json: true
        })(data)
    }
}

export interface ReqCreateSymbolAndChannel extends ReqCreateSymbol{
    channelId: number
}


export const v2CreateKunSymbol: API_DEFINE_CLIENT<ReqCreateSymbolAndChannel, RetItem<void>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/claim/peng/v1/${data.channelId}/symbol/create`,
            json: true
        })(data)
    }
}

// export const v2CreateConcern: API_DEFINE_CLIENT<{channelId: number, target: string}, RetItem<void>> = (data)  =>  {
//     return (client: APIClient) => {
//         return client({
//             body: data,
//             method: "POST",
//             url: `/api/v1/concern?target=${data.target}`,
//             json: true
//         })(data)
//     }
// }

// export const v2GetConcernStatus: API_DEFINE_CLIENT<{target: string}, RetItem<KunConcern>> = (data)  =>  {
//     return (client: APIClient) => {
//         return client({
//             body: data,
//             method: "GET",
//             url: `/api/v1/concernStatus`,
//             json: true
//         })(data)
//     }
// }

export const v2GetUserDetailInfo : API_DEFINE_CLIENT<{
    userId: string;
}, RetItem<KunUser>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/auth/v1/horse/userDetail",
            json: true
        })(data)
    }
}


export const v2GetUserDetail1: API_DEFINE_CLIENT<{}, RetItem<RetLqUser>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/auth/v1/horse/mine",
            json: true
        })(data)
    }
}

export const v2UploadImage: API_DEFINE_CLIENT<FormData, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: "/api/horse/v1/card/image/save",
            json: false
        })(data)
    }
}

export const v2GetUserSession: API_DEFINE_CLIENT<{}, RetItem<KunUser>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/auth/v1/horse/userSession",
            json: true
        })(data)
    }
}

export const v2GetAuthorProfileById : API_DEFINE_CLIENT<{id: string, channelId?: number}, RetItem<KunProfile>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/kun/profile/v1/50/get_by_id",
            json: true
        })(data)
    }
}

export const v2SeriesMembers : API_DEFINE_CLIENT<{seriesId?: string} & ReqByPageMark, NoSqlPagingListDataPageMarkDateTime<RetSubscriptionUser>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/v1/series/members",
            json: true
        })(data)
    }
}

export const v2SearchSeriesMembers : API_DEFINE_CLIENT<{seriesId?: string, name?: string} & ReqByPageMark, NoSqlPagingListDataPageMarkDateTime<RetSubscriptionUser>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/v1/series/searchMember",
            json: true
        })(data)
    }
}

export const v2GetSeriesMetaDetail : API_DEFINE_CLIENT<{id: string}, RetItem<HorseSeriesFull>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/v1/series/get_series",
            json: true
        })(data)
    }
}

export const v2DeleteCommentItem : API_DEFINE_CLIENT<ReqDeleteCommentByPostId & {
    channelId: number
}, RetItem<void>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/comment/v1/${data.channelId}/comment/deleteByComment`,
            json: true
        })(data)
    }
}

export const likeCardItem : API_DEFINE_CLIENT<ReqLikeFeed & {
    channelId: number
}, RetItem<void>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/comment/v1/${data.channelId}/likeCard`,
            json: true
        })(data)
    }
}


const v2CreateComment : API_DEFINE_CLIENT<ReqCreateCardComment1, RetItem<void>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/comment/v1/${data.channelId}/comment/create`,
            json: true
        })(data)
    }
}

const v2ListComments : API_DEFINE_CLIENT<GetCommentPageState & {
    channelId: number
}, NoSqlPagingListData<KunCommentWithDateHashLong>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/comment/v1/${data.channelId}/comment/list`,
            json: true
        })(data)
    }
}

// TODO something
const v2GetCommentDetail : API_DEFINE_CLIENT<{
    postId: string
    channelId: number
    commentId: string
}, OptionData<KunSymbolContent>> = ({channelId, ...data})  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/comment/v1/${channelId}/comment/${channelId}/item`,
            json: true
        })(data)
    }
}

// TODO something
const v2GetKunContentDetail : API_DEFINE_CLIENT<{
    id: string
    symbol: string
    channelId: number
}, OptionData<KunSymbolContent>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/claim/peng/v1/${data.channelId}/content/item`,
            json: true
        })(data)
    }
}


// TODO something
const v2GetKunCommentChildList : API_DEFINE_CLIENT<ReqByPagination &{
    commentId: string
    postId: string
    channelId: number
}, NoSqlPagingListData<ChildKunComment>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/comment/v1/${data.channelId}/comment/${data.channelId}/childList`,
            json: true
        })(data)
    }
}


const v2GetCollectionList : API_DEFINE_CLIENT<ReqByPagination &{
    channelId: string,
    userId: string;
    msgType ?: ContentMsgType,
}, NoSqlPagingListData<ContentCollection>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/collection/${data.channelId}/v1/list`,
            json: true
        })(data)
    }
}

export const v2ChangeAvatar : API_DEFINE_CLIENT<ReqChangeAvatar, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/horse/auth/v1/horse/changeAvatar`,
            json: true
        })(data)
    }
}


export const v2ChangeSlogan : API_DEFINE_CLIENT<ReqChangeSlogan, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/horse/auth/v1/horse/changeSlogan`,
            json: true
        })(data)
    }
}

const changeNickName : API_DEFINE_CLIENT<ReqChangeNickName, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/horse/auth/v1/horse/changeNickName`,
            json: true
        })(data)
    }
}

const requestDeleteSeries : API_DEFINE_CLIENT<ReqDeleteSeries, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: "/api/horse/v1/series/delete",
            json: true
        })(data)
    }
}


export const checkSeriesAvaiable : API_DEFINE_CLIENT<{name: string}, OptionData<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/v1/series/checkAvaiable",
            json: true
        })(data)
    }
}


const updateProfile : API_DEFINE_CLIENT<ReqUpdateProfile, RetItem<ReqUpdateProfile>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/horse/auth/v1/horse/updateUserInfo`,
            json: true
        })(data)
    }
}

const v2AddCollectionStar : API_DEFINE_CLIENT<ReqCreateHorseCardCollection & {
    channelId: number
}, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/collection/${data.channelId}/v1/create/horseCard`,
            json: true
        })(data)
    }
}

const checkIfCollectionStatus : API_DEFINE_CLIENT<ReqCheckCollected & {
    channelId: number
}, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/collection/${data.channelId}/v1/status`,
            json: true
        })(data)
    }
}

const requestSearchTribe : API_DEFINE_CLIENT<ReqByPagination & {
    name: string;
    pageMark?: number|string;
}, NoSqlPagingListData<Series>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/v1/series/search",
            json: true
        })(data)
    }
}


export const requestAddDiscuss : API_DEFINE_CLIENT<ReqAddDiscussionByGroup, NoSqlPagingListData<Series>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: "/api/horse/v1/series/addDiscuss",
            json: true
        })(data)
    }
}


const getNotionPage : API_DEFINE_CLIENT<ReqByPagination & {
    name: string;
}, unknown> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/notion/page",
            json: true
        })(data, {
            skipCheck: true
        })
    }
}

const getNotionTable : API_DEFINE_CLIENT<ReqByPagination & {
    name: string;
}, unknown> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/notion/table",
            json: true
        })(data, {
            skipCheck: true
        })
    }
}

// pageState
export const deleteCardsBySeries : API_DEFINE_CLIENT<ReqDeleteHorseCard, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: "/api/horse/v1/card/delete",
            json: true
        })(data)
    }
}

const getCardsBySeries : API_DEFINE_CLIENT<ReqByPagination & {
    seriesId: string;
    pageMark?: number|string;
}, NoSqlPagingListData<HorseCardReturn>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/v1/card/cards_by_page_mark",
            json: true
        })(data)
    }
}

// pageState
export const requestCreateExcercise : API_DEFINE_CLIENT<ReqCreateKunExercise & {
    channelId: number;
}, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/comment/v1/${data.channelId}/exercise/create`,
            json: true
        })(data)
    }
}


// pageState
export const requestListExcercise : API_DEFINE_CLIENT< {
    postId: string;
    seriesId: string;
    channelId: number;
}, NoSqlPagingListDataPageMark<KunExerciseReturn>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/comment/v1/${data.channelId}/exercise/list`,
            json: true
        })(data)
    }
}

export const requestKunExerciseUpdate : API_DEFINE_CLIENT<KunExerciseUpdate & {
    channelId: number;
}, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/comment/v1/${data.channelId}/exercise/update`,
            json: true
        })(data)
    }
}

export const requestDeleteExcercise : API_DEFINE_CLIENT< ReqDeleteKunExercise & {
    channelId: number;
}, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/comment/v1/${data.channelId}/exercise/delete`,
            json: true
        })(data)
    }
}



export const requestSendContent : API_DEFINE_CLIENT< ReqSendContentMsg & {
    channelId: number;
}, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/chat/v1/${data.channelId}/sendContent`,
            json: true
        })(data)
    }
}


export const requestDeleteMessage : API_DEFINE_CLIENT< ReqDeleteMsg & {
    channelId: number;
}, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/chat/v1/${data.channelId}/delete`,
            json: true
        })(data)
    }
}


export const requestGetGroupDetail : API_DEFINE_CLIENT< ReqGetGroup & {
    channelId: number;
}, OptionData<KunChatGroup>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/chat/v1/${data.channelId}/groupDetail`,
            json: true
        })(data)
    }
}

export const requestGetChatMessage : API_DEFINE_CLIENT< GetMsgByGroup1 & {
    channelId: number;
}, NoSqlPagingListData<KunMessageReturn>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/chat/v1/${data.channelId}/messages1`,
            json: true
        })(data)
    }
}


export const requestLikeMessage : API_DEFINE_CLIENT< ReqLikeMessageId & {
    channelId: number;
}, RetItem<void>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/horse/v1/message/${data.channelId}/like`,
            json: true
        })(data)
    }
}

export const requestConcernStatus : API_DEFINE_CLIENT< {
    channelId: number,
    target: string
}, OptionData<KunConcern>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/v1/concern/${data.channelId}/concernStatus`,
            json: true
        })(data)
    }
}


export const requestCreateConcern : API_DEFINE_CLIENT< ReqCreateConcern &{
    channelId: number,
}, RetItem<void>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/v1/concern/${data.channelId}/concern`,
            json: true
        })(data)
    }
}

export const requestListConcern : API_DEFINE_CLIENT< {
    channelId: number,
}, NoSqlPagingListData<KunConcern>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/v1/concern/${data.channelId}/concern`,
            json: true
        })(data)
    }
}

export const createHorseCard : API_DEFINE_CLIENT<ReqCreateHorseCard, OptionData<HashLong>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: "/api/horse/v1/card/create",
            json: true
        })(data)
    }
}

export const createPracticeCard : API_DEFINE_CLIENT<ReqCreatePractice & {
    channelId: number
}, OptionData<HashLong>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/comment/v1/${data.channelId}/practice/create`,
            json: true
        })(data)
    }
}

export const deletePracticeCard : API_DEFINE_CLIENT<ReqDeletePractice & {
    channelId: number
}, OptionData<HashLong>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "POST",
            url: `/api/comment/v1/${data.channelId}/practice/delete`,
            json: true
        })(data)
    }
}

export const listPracticeCard : API_DEFINE_CLIENT<{
    postId: string,
    seriesId: string,
    channelId: number
}, NoSqlPagingListDataPageMark<KunPracticeReturn>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/comment/v1/${data.channelId}/practice/list`,
            json: true
        })(data)
    }
}

export const getPaymentBalance : API_DEFINE_CLIENT<{}, OptionData<UserBalance>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: `/api/horse/v1/payment/getBalance`,
            json: true
        })(data)
    }

}

export const searchPublicSearch : API_DEFINE_CLIENT<{
    name: string;
    seriesId: string;
}, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/v1/card/searchPublic",
            json: true
        })(data)
    }
}

export const searchCard : API_DEFINE_CLIENT<{
    query: string,
}, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/kun-search/v1/search/card",
            json: true
        })(data)
    }
}

export const searchCardByEs : API_DEFINE_CLIENT<{
    query: string,
}, RetItem<string>> = (data)  =>  {
    return (client: APIClient) => {
        return client({
            body: data,
            method: "GET",
            url: "/api/horse/v1/so/card",
            json: true
        })(data)
    }
}

// export const getPublicSeries: PaginationApi<{
//     categoryId ?: number
//     subCategoryId ?: number
// }, HorseSeriesReturn> = async (parameters, pageMark) =>
//     get("/api/horse/v1/series/getPublicList", {
//         ...parameters,
//         ...pageMark,
//     });

export const wsUrl = `/api/${horseInhabitant.base}/chat/ws`


export const v2GetIp: API_DEFINE_CLIENT<{}, {client_ip: string}> = (data: {})  =>  {
    return (client: APIClient) => {
        return client({
            method: "GET",
            body: data,
            // http://pv.sohu.com/cityjson
            // url: '/sdk/v2/get_gateway',
            url: '/api/t4f/v1/tools/v1/ip',
            json: true,
            options: {
                // http://pv.sohu.com/cityjson
                // baseUrl: "http://pv.sohu.com"
                // baseUrl: 'https://gamematrix.qq.com/'
            }
        })(data)
    }
}

export {requestDeleteSeries, changeNickName, getNotionTable, getNotionPage,updateProfile, requestSearchTribe,getCardsBySeries, v2GetCollectionList, v2CreateComment, v2ListComments, v2GetKunContentDetail, v2GetCommentDetail, v2GetKunCommentChildList, v2AddCollectionStar, checkIfCollectionStatus}