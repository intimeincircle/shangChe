import { post, ReqData } from "./request";
import { RetItem } from "./login";

export interface RequestCreatePractice extends ReqData {
    seriesId: string;
    exerciseId: string;
    answer: string;
    postId: string;
}

export const reqCreatePractice = async (data: RequestCreatePractice): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/card/learn/addPractice", data);
