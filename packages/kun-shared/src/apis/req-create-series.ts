import { RetItem } from "./login";
import { post, ReqData } from "./request";
import {ConstantSeriesType} from "../src_managed/ConstantSeriesType";

export interface ReqCreateSeries extends ReqData {
    title: string;
    description: string;
    seriesType: ConstantSeriesType;
}

export const reqCreateSeries = async (data: ReqCreateSeries): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/series/create", { ...data });
