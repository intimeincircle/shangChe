import { post, ReqData } from "./request";
import {KunMessageReturn} from "../src_managed/KunMessageReturn";
import {NoSqlPagingListData} from "../common/NoSqlPagingListData";

export interface ChatMessageRecord {
    groupId: string;
    msgId: string;
    createAt: number;
    fromUser?: unknown;
    fromUserName?: unknown;
    parentMsg: ChatMessageRecord;
    fromUserAvatar?: string;
    msgContent: string;
    msgType: string;
}

export interface GetByPaginate extends ReqData {
    pageState?: string;
    pageSize?: number;
}

export interface ReqGetChatHistory extends GetByPaginate {
    timeUUID?: string;
    groupId: string;
}

export const requestGetChatHistory = async (data: ReqGetChatHistory): Promise<NoSqlPagingListData<KunMessageReturn>> => post("/api/chat/v1/50/history", data as ReqData);
