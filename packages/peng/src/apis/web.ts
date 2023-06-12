import {
    API_DEFINE_CLIENT,
    checkIfCollectionStatus,
    v2AddCollectionStar,
    v2CreateAudit,
    v2CreateComment,
    // v2CreateConcern,
    v2CreateHorseCardSubmit,
    v2CreateKunSymbol,
    v2GetAuthorProfileById,
    v2GetCommentDetail,
    v2GetConcern,
    // v2GetConcernStatus,
    v2GetCurrentLearningList,
    v2GetKunCommentChildList,
    v2GetKunContentDetail,
    v2GetKunItem,
    v2GetPublicCard,
    v2GetQiniuToken,
    v2GetSeriesMetaDetail,
    v2GetUserSession,
    v2ListComments,
    v2ListKunContent,
    v2ReqLogin,
    v2SearchSymbol,
    v2ShareKunCard,
    v2GetCollectionList,
    getCardsBySeries,
    requestSearchTribe,
    getNotionPage,
    getNotionTable,
    updateProfile,
    changeNickName,
    requestDeleteSeries,
    v2GetUserDetail1,
    v2UploadImage,
    v2UpdateSeries,
    v2ChangeSlogan,
    v2ChangeAvatar,
    v2GetUserDetailInfo,
    v2DeleteCommentItem,
    deleteCardsBySeries,
    requestCreateExcercise,
    requestListExcercise,
    requestDeleteExcercise,
    requestSendContent,
    requestGetGroupDetail,
    requestDeleteMessage,
    requestGetChatMessage,
    requestAddDiscuss,
    checkSeriesAvaiable,
    v2SymbolCheckNameAviable,
    v2SeriesMembers,
    v2SearchSeriesMembers,
    requestLikeMessage,
    requestListConcern,
    requestCreateConcern,
    requestConcernStatus,
    createHorseCard,
    listPracticeCard,
    deletePracticeCard,
    createPracticeCard,
    likeCardItem,
    getPaymentBalance,
    searchPublicSearch, searchCard, searchCardByEs
} from "kun-shared/built/v2/api/v2";


import {v2GetBlogList} from "kun-shared/built/apis/getKunTable";
import {httpClient} from "../http/request";

/**
 * @param client
 * @param httpClient1
 */
export const integrateWithHttp = <T, R>(request: API_DEFINE_CLIENT<T, R>) =>  (data: T) => request(data)(httpClient)

export const shareKunCard = integrateWithHttp(v2ShareKunCard)
export const createCardSubmit = integrateWithHttp(v2CreateHorseCardSubmit)
export const createAuditSubmit= integrateWithHttp(v2CreateAudit)
export const getCurrentLearningList = integrateWithHttp(v2GetCurrentLearningList)
export const createSymbol =  integrateWithHttp(v2CreateKunSymbol)
export const listContentInSymbol =  integrateWithHttp(v2ListKunContent)
export const getQiniuToken = integrateWithHttp(v2GetQiniuToken)
export const getKunItem = integrateWithHttp (v2GetKunItem)
export const listConcerns = integrateWithHttp(v2GetConcern)
// export const getUserConcornStatus = integrateWithHttp(v2GetConcernStatus)
export const reqGetAuthorProfile = integrateWithHttp(v2GetAuthorProfileById)
export const reqGetSeriesDetail = integrateWithHttp(v2GetSeriesMetaDetail)
export const reqCreateComment2 =integrateWithHttp(v2CreateComment)
export const reqV2GetCommentItem= integrateWithHttp(v2GetCommentDetail)
export const reqGetKunItem = integrateWithHttp(v2GetKunContentDetail)
export const reqGetChildCommentList = integrateWithHttp(v2GetKunCommentChildList)
export const getV2CommentList = integrateWithHttp(v2ListComments)
export const requestV2GetCollectionList = integrateWithHttp(v2GetCollectionList)
export const requestAddCollectionStar = integrateWithHttp(v2AddCollectionStar)
export const requestCheckIfCollectionStatus = integrateWithHttp(checkIfCollectionStatus)
export const requestGetCardsBySeries = integrateWithHttp(getCardsBySeries)
export const getUserSession = integrateWithHttp(v2GetUserSession)
export const web = integrateWithHttp(v2ReqLogin)

export const getById = integrateWithHttp(v2ReqLogin)

export const getBlogById = integrateWithHttp(v2GetBlogList)
export const searchSymbol= integrateWithHttp(v2SearchSymbol)
export const getPublicCard = integrateWithHttp(v2GetPublicCard)
export const requestV2SearchTribe = integrateWithHttp(requestSearchTribe)
export const requestNotionBlogDetail = integrateWithHttp(getNotionPage)
export const requestV2UpdateProfile = integrateWithHttp(updateProfile)
export const requestV2NotionTable = integrateWithHttp(getNotionTable)
export const requestChangeNickName = integrateWithHttp(changeNickName)
export const requestV2DeleteSeries = integrateWithHttp(requestDeleteSeries)
export const requestV2UserDetail = integrateWithHttp(v2GetUserDetail1)
export const requestV2v2UploadImage = integrateWithHttp(v2UploadImage)
export const requestV2UpdateSeries = integrateWithHttp(v2UpdateSeries)
export const requestV2UpdateAvatar = integrateWithHttp(v2ChangeAvatar)
export const requestV2ChangeSlogan = integrateWithHttp(v2ChangeSlogan)
export const requestV2GetUserDetailInfo = integrateWithHttp(v2GetUserDetailInfo)
export const requestV2DeleteComment = integrateWithHttp(v2DeleteCommentItem)
export const requestDeleteCardsBySeries = integrateWithHttp(deleteCardsBySeries)
export const requestV2CreateExercise = integrateWithHttp(requestCreateExcercise)
export const requestV2ListExcecise = integrateWithHttp(requestListExcercise)
export const requestV2ListDeleteExcercise = integrateWithHttp(requestDeleteExcercise)
export const requestV2GetGroupDetail = integrateWithHttp(requestGetGroupDetail)
export const requestV2SendContent = integrateWithHttp(requestSendContent)
export const requestV2DeleteMessage = integrateWithHttp(requestDeleteMessage)
export const requestV2GetChatMessage = integrateWithHttp(requestGetChatMessage)
export const requestV2AddDiscuss = integrateWithHttp(requestAddDiscuss)
export const requestCheckSeriesAvaiable = integrateWithHttp(checkSeriesAvaiable)
export const requestv2SymbolCheckNameAviable = integrateWithHttp(v2SymbolCheckNameAviable)
export const requestv2SeriesMembers = integrateWithHttp(v2SeriesMembers)
export const requestv2SearchSeriesMembers = integrateWithHttp(v2SearchSeriesMembers)
export const requestv2RequestLikeMessage = integrateWithHttp(requestLikeMessage)
export const requestv2ListConcern = integrateWithHttp(requestListConcern)
export const requestv2CreateConcern = integrateWithHttp(requestCreateConcern)
export const requestv2ConcernStatus = integrateWithHttp(requestConcernStatus)
export const requestV2CreateHorsecard = integrateWithHttp(createHorseCard)
export const requestListPracticeCard = integrateWithHttp(listPracticeCard)
export const requestDeletePracticeCard = integrateWithHttp(deletePracticeCard)
export const requestCreatePracticeCard = integrateWithHttp(createPracticeCard)
export const requestLikeCardItem = integrateWithHttp(likeCardItem)
export const requestGetPaymentBalance = integrateWithHttp(getPaymentBalance)
export const requestSearchPublicSearch = integrateWithHttp(searchPublicSearch)
export const requestSearchCard = integrateWithHttp(searchCard)
export const requestSearchByEs = integrateWithHttp(searchCardByEs)


