import { post, ReqData } from "./request";
import { RetItem } from "./item";

export interface RequestAccusation extends ReqData {
    content: string;
}

export const reqAccusation = async (data: RequestAccusation): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/tool/accusation", data);
