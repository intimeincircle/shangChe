import { post, ReqData, RequestFormData } from "./request";
import { RetItem } from "./login";
import { getAuditStatus } from "./get-audit-status";

export interface ReqToAudit extends ReqData {
    seriesId: string;
    releaseNote?: string;
}

export interface ReqToPublish extends ReqData {
    seriesId: string;
    auditId: string;
    releaseNote?: string;
}

export const requestToAudit1 = async (data: ReqToAudit): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/series/toAudit", data as RequestFormData);
export const requestToPass = async (data: ReqToPublish): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/series/markPass", data as RequestFormData);


export const requestToAudit = async (data: ReqToAudit): Promise<RetItem<void>> => {
  await requestToAudit1(data);
  const auditData = await getAuditStatus(data.seriesId);
  const reqPublishData = {
    seriesId: data.seriesId,
    auditId: auditData.record.id,
  };
  return requestToPass(reqPublishData);
};
