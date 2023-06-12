import { ModelRetRecords } from "./model";
import { post, ReqData } from "./request";

interface ReqGetMembers extends ReqData {
    seriesId: string;
}

interface RetMembers {
    userId: string;
    userAvatar: string;
    userName: string;
    subscribeAt: string;
}

export const getSubscribesMembers = async (data: ReqGetMembers): Promise<ModelRetRecords<RetMembers>> => post("/api/horse/v1/series/members", data);
