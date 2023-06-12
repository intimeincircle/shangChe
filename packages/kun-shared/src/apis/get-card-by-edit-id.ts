import { RetItem } from "./item";
import { get } from "./request";
import { GetCardInfoItemRecord } from "./get-card-by-id-and-version";

export const getCardByEditId = async (seriesId: string, id: string): Promise<RetItem<GetCardInfoItemRecord>> => get<RetItem<GetCardInfoItemRecord>>(`/horse/v1/card/get_by_edit_id?id=${id}&seriesId=${seriesId}`);
