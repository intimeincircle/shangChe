import { get } from "./request";
import { RetItem } from "./login";

export const requestGetOrderStatus = async (orderId: number): Promise<RetItem<string>> => get("/api/horse/v1/series/orderStatus", {
  orderId,
});
