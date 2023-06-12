import {
    ReqByChatHistory,
    ReqLogin,
    v2GetArticle,
    v2GetCurrentLearningList, v2GetIp, v2GetMyChatGroup, v2GetMyChatHistory, v2GetQiniuToken,
    v2MyCreatedSeries,
    v2ReqLogin
} from "kun-shared/built/v2/api/v2";
import {RetItem} from "kun-shared/built/apis/item";
import {httpClient} from "@/platform";
import {ReqByPageMark} from "kun-shared/built/src_managed/ReqByPageMark";


export const login: (data: ReqLogin) => Promise<RetItem<string>> = (data: ReqLogin) =>  v2ReqLogin(data)(httpClient)

export const getCurrentLearningList = (data:{pageMark?: string}) =>  v2GetCurrentLearningList(data)(httpClient)
export const getArticle = (data: {id: string, seriesId: string}) => v2GetArticle(data)(httpClient)
export const getMyCreatedSeries = (data: ReqByPageMark) => v2MyCreatedSeries(data)(httpClient)
export const getMyChatGroup = (data: ReqByPageMark) => v2GetMyChatGroup(data)(httpClient)
export const getMyChatHistory = (data: ReqByChatHistory) => v2GetMyChatHistory(data)(httpClient)
// @ts-ignore
export const getQiniuToken = (data: unknown) => v2GetQiniuToken(data)(httpClient)
export const getIp = () => v2GetIp({})(httpClient)
