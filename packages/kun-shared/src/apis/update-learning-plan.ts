import { post, ReqData } from "./request";

export interface RetItem {
    code: string;
    msg: string;
}

export interface ReqSetLearningPlan extends ReqData {
    "dailyCount": number;
    "seriesId": number;
    "learningPlan": boolean;
}

export const requestUpdateLearningPlan = async (data: ReqSetLearningPlan): Promise<RetItem> => await post("/api/horse/v1/series/plan", data) as unknown as RetItem;
