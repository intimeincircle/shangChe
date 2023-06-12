import { post } from "./request";
import { RetItem } from "./item";
import { RequestForm } from "./login-form";

export interface ReqCreatePostItem extends RequestForm {
    "seriesId": string;
    "content": string;
    title: string;
    "postType": "TEXT";
    videoName?: string;
}

export const postCreateCard = async (data: ReqCreatePostItem): Promise<RetItem<string>> => await post("/api/horse/v1/card/create", data);
