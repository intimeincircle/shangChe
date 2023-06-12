import {post} from "../request";
import {ReqGetUserDetail} from "../../src_managed/ReqGetUserDetail";
import {OptionData} from "../../common/OptionData";
import {KunUser} from "../../src_managed/KunUser";

export const getUserProfileById = async (data: ReqGetUserDetail ): Promise<OptionData<KunUser>> => {
    return post("/api/horse/auth/v1/horse/detail", {
        ...data
    });
}
