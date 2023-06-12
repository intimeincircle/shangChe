import { RetItem } from "./login";
import { post, ReqData } from "./request";

export interface ReqDeletePractice extends ReqData {
  seriesId: string;
  postId: string;
  practiceId: string;
}

export const requestDeletePractice = async (data: ReqDeletePractice): Promise<RetItem<void>> => post<RetItem<void>>("/api/comment/v1/50/practice/delete", data);
