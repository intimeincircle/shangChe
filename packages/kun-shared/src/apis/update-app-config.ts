
import { post, ReqData } from "./request";

interface UpdateAppConfig extends ReqData {
    authorContractAgree?: 1;
}
export const updateAppConfig = async (data: UpdateAppConfig): Promise<void> => post("/api/kun/app_config/v1/50/update", data);
