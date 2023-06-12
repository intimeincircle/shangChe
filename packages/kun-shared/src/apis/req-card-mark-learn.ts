import { post, ReqData } from "./request";
import { RetItem } from "./login";


export interface RequestMarkLearn extends ReqData {
    cardId: string;
    seriesId: string;
    score: number;
}

export const reqMarkLearn = async (data: RequestMarkLearn): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/card/learn/markLearn", data);
