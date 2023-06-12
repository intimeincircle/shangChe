import { post, ReqData } from "./request";
import { RetItem } from "./item";

export interface ReqUpdateProfile extends ReqData {
    nickName: string;
    slogan: string;
    thumbnail: string;
    gender: string;
}

export const requestUpdateProfile = async (data: ReqUpdateProfile): Promise<RetItem<ReqUpdateProfile>> => post<RetItem<ReqUpdateProfile>>("/api/horse/auth/v1/horse/updateUserInfo", data);
