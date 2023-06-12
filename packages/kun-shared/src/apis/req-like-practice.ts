import { post, ReqData } from "./request";

export interface ReqLikePractice extends ReqData {
    feedId: string;
    seriesId: string;
    practiceId: string;
    isLike: boolean;
}

export const reqLikePractice = async (data: ReqLikePractice): Promise<void> => post("/api/comment/v1/50/practice/dianZan", data);
