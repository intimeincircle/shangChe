
import { post } from "./request";
import { RetItem } from "./item";
import {ReqSendMsg} from "../src_managed/ReqSendMsg";
import {SendSysMsg} from "../src_managed/SendSysMsg";
import {ReqSendContentMsg} from "../src_managed/ReqSendContentMsg";
import {ReqStartChat} from "../src_managed/ReqStartChat";
import {GetPrivateGroup} from "../src_managed/GetPrivateGroup";
import {KunChatGroup} from "../src_managed/KunChatGroup";
import {OptionData} from "../common/OptionData";
import {ReqGetGroup} from "../src_managed/ReqGetGroup";

export const requestSendSysMsg = async (data: SendSysMsg): Promise<RetItem<void>> => post("/api/chat/v1/50/sendSysMsg", data);
export const requestSendMsg = async (data: ReqSendMsg): Promise<RetItem<void>> => post("/api/chat/v1/50/send", data);



export const requestChatMsg = async (data: ReqSendContentMsg): Promise<RetItem<void>> => post("/api/chat/v1/50/sendContent", data);
export const requestStartChatMsg = async (data: ReqStartChat): Promise<RetItem<void>> => post("/api/chat/v1/50/start", data);
export const requestGetPrivateGroup = async (data: GetPrivateGroup): Promise<OptionData<KunChatGroup>> => post("/api/chat/v1/50/group", data);
export const requestGetGroupDetail = async (data: ReqGetGroup): Promise<OptionData<KunChatGroup>> => post("/api/chat/v1/50/groupDetail", data);

/**
 * 私信内容
 *
 */