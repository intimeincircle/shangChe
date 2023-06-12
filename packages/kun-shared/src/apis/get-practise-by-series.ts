import { ModelRetNoRecords } from "./model";
import { get, ReqData } from "./request";
import { ExerciseItem } from "./list-exercise";

interface ReqBySeriesSize extends ReqData {
    pageSize?: number;
}


interface GetBySeries extends ReqBySeriesSize {
    seriesId: string;
}

export const reqListPracticeBySeries = async (data: GetBySeries): Promise<ModelRetNoRecords<ExerciseItem>> => get("/api/comment/v1/50/practice/list_by_series", data);
