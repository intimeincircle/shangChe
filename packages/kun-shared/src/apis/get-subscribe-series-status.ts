import { post } from "./request";
import {ReqSubscribeSeries} from "../src_managed/ReqSubscribeSeries";
import {SeriesSubscription} from "../src_managed/SeriesSubscription";
import {OptionData} from "../src_managed/OptionData";

export const getSubscribeSeriesStatus = async (data: ReqSubscribeSeries): Promise<OptionData<SeriesSubscription>> => post("/api/horse/v1/series/subscribe_status", data);