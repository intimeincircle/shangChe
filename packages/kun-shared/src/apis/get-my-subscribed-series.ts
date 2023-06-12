import { get } from "./request";
import { ModelRetNoRecords } from "./model";

export interface UserItemSeries {
    id: number;
    userId: string;
    seriesId: number;
    seriesCover: string;
    subscribeAt: unknown;
    seriesName: string;
    paidMoney: number;
    seriesUpdateAt: unknown;
    dailyCount: number;
    isInPlan: boolean;
    shouldNotice: boolean;
    seriesVersion: number;
    seriesType: string;
    subscriptionCount: number;
    cardCount: number;
    learnCount: number;
}

export const requestUserSubscribeSeries = async (): Promise<ModelRetNoRecords<UserItemSeries>> => get<ModelRetNoRecords<UserItemSeries>>("/api/horse/v1/series/getSubscribeList");
