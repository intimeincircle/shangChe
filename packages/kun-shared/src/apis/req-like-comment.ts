import { post, ReqData } from "./request";

export interface ReqLikeCommentItem extends ReqData {
    commentId: string;
    isLike: boolean;
}

export const reqLikeComment = async (data: ReqLikeCommentItem): Promise<void> => post("/api/comment/v1/50/dianZan", data);
