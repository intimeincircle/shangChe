import { get } from "./request";
import { ModelRetRecord } from "./model";

export enum ConstantAuditStatus {
    submitted = "submitted",
    passed = "passed",
    rejected = "rejected",
}

export interface SeriesAuditStatus {
    auditAt?: number;
    auditType: ConstantAuditStatus;
    id: string;
    releaseNote: string;
}

export const getAuditStatus = async (id: string): Promise<ModelRetRecord<SeriesAuditStatus>> => get("/api/horse/v1/series/auditStatus", {
  id,
});
