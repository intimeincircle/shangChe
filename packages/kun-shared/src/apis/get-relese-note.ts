import { ModelRetRecords } from "./model";
import { get } from "./request";

export interface AuditVersion {
    id: number;
    seriesName: string;
    seriesId: number;
    seriesType: string;
    seriesVersion: number;
    authorId: string;
    submitAt: number;
    auditType: string;
    auditAt: number;
    tags: string[];
    cardCount: number;
    reviewOpinion?: number;
    releaseNote: string;
}

export const reqGetHistory = async (id: string): Promise<ModelRetRecords<AuditVersion>> => get("/api/horse/v1/series/release_notes", {
  id,
});
