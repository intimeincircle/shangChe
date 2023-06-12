import {RetItem} from "./item";
import {get} from "kun-tools/built/common/req";
import {KunProfile} from "../src_managed/KunProfile";

export const getAuthorProfileById = async (id: string): Promise<RetItem<KunProfile>> => get("/api/kun/profile/v1/50/get_by_id", {
    id
});
