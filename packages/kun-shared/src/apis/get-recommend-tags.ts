import { ModelRetNoRecords } from "./model";
import { get } from "./request";

export interface RecommendTag {
    string: string;
}
export const getRecommendTags = async (): Promise<ModelRetNoRecords<RecommendTag>> => get("/api/horse/v1/series/tags");
