import { post, RequestFormData } from "./request";
import { RetItem } from "./login";
import {ReqMarkAuditPass} from "../src_managed/ReqMarkAuditPass";

export const requestMarkPass = async (data: ReqMarkAuditPass): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/series/markPass", data as unknown as RequestFormData);
