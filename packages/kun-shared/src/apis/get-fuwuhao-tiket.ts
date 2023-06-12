import { ModelRetRecord } from "./model";
import { get } from "./request";

export interface RetSignData {
  url: string;
  sign: string;
  timestamp: number;
  radon: string;
  appId: string;
}

export const requestGetSignToken = async (url: string): Promise<ModelRetRecord<RetSignData>> => get("/api/auth/v1/50/getToken", {
  url,
});
