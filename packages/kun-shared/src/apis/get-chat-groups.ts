import { get, post } from "./request";
import {ChatGroupByUserReturn} from "../src_managed/ChatGroupByUserReturn";
import {NoSqlPagingListData} from "../common/NoSqlPagingListData";
import {RetItem} from "./item";

export const requestGetChatGroups = async (): Promise<NoSqlPagingListData<ChatGroupByUserReturn>> => post("/api/chat/v1/50/groups", {});

export const requestGetChatUnReadCount = async (): Promise<RetItem<number>> => get("/api/chat/v1/50/unReadCnt");
