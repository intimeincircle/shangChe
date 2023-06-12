import { RetItem } from "./item";
import { get } from "./request";

export interface AuthorProfileItem {
    brandName?: string;
    brandDescription?: string;
}

export const getBrandDescription = async (): Promise<RetItem<AuthorProfileItem>> => get<RetItem<AuthorProfileItem>>("/api/kun/profile/v1/50/get");
