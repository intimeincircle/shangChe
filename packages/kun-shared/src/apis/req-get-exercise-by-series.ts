import { get, ReqData } from "./request";
import { ModelRetRecords } from "./model";

export interface ExerciseRecord {
  channelId: number;
  seriesId: string;
  postId: string;
  id: string;
  exerciseType: string;
  background?: string;
  title: string;
  tips?: string;
  tags: string[];
  correct: number[];
  options: string[];
  answer: string;
  editor: string;

  editorName: string;
  postTitle?: string;
  seriesName?: string;
  seriesType?: string;
  practice: {
    answer: string;
    correct: number[];
    practiceId: string;
  }
}

export const reqGetExerciseBySeries = async (seriesId: string, postId: string): Promise<ModelRetRecords<ExerciseRecord>> => get<ModelRetRecords<ExerciseRecord>>("/api/comment/v1/50/exercise/listWithUser", {
  seriesId,
  postId,
} as unknown as ReqData);
