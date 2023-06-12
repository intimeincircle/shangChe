import { post, RequestFormData } from "./request";
import {GetCommentPageState} from "../src_managed/GetCommentPageState";
import {NoSqlPagingListData} from "../common/NoSqlPagingListData";
import {KunCommentWithDateHashLong} from "../src_managed/KunCommentWithDateHashLong";

export const requestGetCommentByPost = async (data: GetCommentPageState): Promise<NoSqlPagingListData<KunCommentWithDateHashLong>> => post("/api/comment/v1/50/comment/list", data as unknown as RequestFormData);
