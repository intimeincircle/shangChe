import { get } from "./request";
import { Series } from "./get-card-by-id-and-version";
import { ModelRetRecords } from "./model";

export const reqSearchTribe = async (name: string): Promise<ModelRetRecords<Series>> => get<ModelRetRecords<Series>>("/api/horse/v1/series/search", {
  name,
});
