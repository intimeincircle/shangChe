import { get } from "./request";
import { ModelRetRecord } from "./model";

export interface RetCreateOrder {
    appId: string;
    nonceStr: string;
    timeStamp: number;
    orderId: number;
    package: string;
    paySign: string;
    signType: "MD5"|"SHA1";
}

export const requestGetOrder = async (seriesId: number): Promise<ModelRetRecord<RetCreateOrder>> => get("/api/horse/v1/series/buySeries", {
  seriesId,
});
