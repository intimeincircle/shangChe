import { ModelRetRecord } from "./model";
import { get } from "./request";

export const requestGetExerciseCount = async (postId: string, seriesId: string): Promise<ModelRetRecord<number>> => get<ModelRetRecord<number>>("/api/comment/v1/50/exercise/count", {
  seriesId,
  postId,
});
