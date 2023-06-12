import { post, ReqData } from "./request";
import { RetItem } from "./login";

export const reqSubscribeSeries: (seriesId: string) => Promise<RetItem<void>> = async (seriesId: string) => post<RetItem<void>>("/api/horse/v1/series/subscribe", {
  seriesId,
} as unknown as ReqData);
