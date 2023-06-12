import { post, ReqData } from "./request";
import { RetItem } from "./item";

export interface BrandProfileItem extends ReqData {
    brandName?: string;
    brandDescription?: string;
}

export const requestUpdateBrandProfile = async (data: BrandProfileItem): Promise<RetItem<BrandProfileItem>> => post<RetItem<BrandProfileItem>>("/api/kun/profile/v1/50/updateProfile", data);
