import {post} from "kun-tools/built/common/req";
import {ReqCreateCardComment1} from "../src_managed/ReqCreateCardComment1";
import {OptionData} from "../common/OptionData";
import {KunCommentWithDate} from "../src_managed/KunCommentWithDate";

export const requestCreateChildComment = async (data: ReqCreateCardComment1): Promise<OptionData<KunCommentWithDate>> => post("/api/comment/v1/50/comment/create", data);
