import { get, ReqData } from "./request";
import { ModelRetNoRecords } from "./model";

export interface ReqListExercise extends ReqData {
    seriesId: string;
    postId: string;
}

export interface ExerciseItem {
    channelId: number;
    postId: string;
    seriesId: string;
    practiceId: string;
    practiceUserId: string;
    practiceUserName: string;
    likeCount ?: number;
    commentCount ?: number;

    practiceUserAvatar: string;
    createAt: number;
    exerciseType: string;
    title: string;
    answer: string;
    seriesName?: string;
    seriesType?: string;
    postTitle?: string;
    score?: 1;
}

export const reqListPractice = async (data: ReqListExercise): Promise<ModelRetNoRecords<ExerciseItem>> => get("/api/comment/v1/50/practice/list", data);
