import { post, ReqData } from "./request";
import { RetItem } from "./login";

export const reqDeleteExercise = async (id: string, seriesId: string, postId: string): Promise<RetItem<void>> => post<RetItem<void>>("/api/comment/v1/50/exercise/delete", {
  id,
  seriesId,
  postId,
} as unknown as ReqData);
