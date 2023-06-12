import {post, RequestFormData} from "./request";

interface ReqUpdateCardOrder {
    cardId: string;
    versionId: number;
     order: string;
}

export interface ReqSortCard {
    seriesId: string;
    list: ReqUpdateCardOrder[];
}

export const reqSortCard = async (data: ReqSortCard): Promise<void> => await post("/api/horse/v1/card/sort", data as unknown as RequestFormData);
