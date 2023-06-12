import {useQuery} from "react-query";
import {GetCommentPageState} from "kun-shared/built/src_managed/GetCommentPageState";
import {ReqGetGroup} from "kun-shared/built/src_managed/ReqGetGroup";
import {GetMsgByGroup1} from "kun-shared/built/src_managed/GetMsgByGroup1";
import {getV2CommentList} from "../../../apis/web";
import {ReactQueryKeys} from "../../../shared/context";
import {
    queryInfiniteCardCollection,
    queryInfiniteCardCommentList, queryInfiniteListGroupMessages,
    useInfiniteQueryPrefetch
} from "../../../react-query/core";

export const useCommentList  = (data1: GetCommentPageState & {
    channelId: number
}) => {
    const {data, isLoading} =  useQuery(ReactQueryKeys.CommentList,() => getV2CommentList(data1));
    return {data, isLoading};
}

export const useInfiniteCommentList  = (data1: GetCommentPageState & {
    channelId: number
}) => useInfiniteQueryPrefetch(data1, queryInfiniteCardCommentList)



export const useInfiniteGroupMessages  = (data1: GetMsgByGroup1 & {
    channelId: number
}) => useInfiniteQueryPrefetch(data1, queryInfiniteListGroupMessages)

