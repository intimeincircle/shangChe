import { ModelRetRecord } from "./model";
import { get } from "./request";

interface AppConfig {
    authorContractAgree?: boolean;
}
export const getAppConfig = async (): Promise<ModelRetRecord<AppConfig>> => get("/api/kun/app_config/v1/50/get");
