import { post, ReqData } from "./request";
import { RetItem } from "./item";


export interface RequestMarkRead extends ReqData {
    seriesId: string;
    postId: string
}

export const reqMarkRead = async (data: RequestMarkRead): Promise<RetItem<void>> => post<RetItem<void>>("/api/comment/v1/50/record/markRead", data);
