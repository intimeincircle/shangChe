import { post } from "./request";
import { ModelRetRecords } from "./model";
import { SeekCardItem } from "./get-current-list";


export const reqLearnMore = async (): Promise<ModelRetRecords<SeekCardItem>> => post("/api/horse/v1/card/learn/more", {});
