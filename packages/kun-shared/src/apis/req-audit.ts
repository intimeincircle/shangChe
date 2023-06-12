import { post, RequestFormData } from "./request";
import { RetItem } from "./login";

export interface ReqCreateAudit {
    seriesId: number;
}

export const requestCreateAudit = async (data: ReqCreateAudit): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/series/toAudit", data as unknown as RequestFormData);
