import { post } from "./request";
import { RetItem } from "./login";

export interface ReqCreateFeedBack {
    content: string;
}

export const requestCreateFeedBack = async (data: ReqCreateFeedBack): Promise<RetItem<void>> => post<RetItem<void>>("/api/feedback/v1/50/link", { ...data });
