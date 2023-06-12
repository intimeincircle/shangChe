import { post, ReqData } from "./request";
import { RetItem } from "./item";

export interface RequestAddDiscuss extends ReqData {
    seriesId: string;
    content: string;
}

export const reqAddDiscuss = async (data: RequestAddDiscuss): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/series/addDiscuss", data);
