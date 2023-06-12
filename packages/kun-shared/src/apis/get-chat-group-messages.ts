import { ModelRetNoRecords } from "./model";
import { post } from "./request";
import {KunMessageReturn} from "../src_managed/KunMessageReturn";

export interface ReqGetMessages {
    pageState: string;
    name?: string;
    groupId?: string;
    timeUUID?: string;
}

export const requestGetChatMessages = async (data: ReqGetMessages): Promise<ModelRetNoRecords<KunMessageReturn>> => post<ModelRetNoRecords<KunMessageReturn>>("/api/chat/v1/50/messages", { ...data });
