import { get } from "./request";
import { RetItem } from "./item";

export interface AuthorProfileItem {
    brandAvatarName?: string;
    brandName?: string;
    brandDescription?: string;
}

export const getAuthorProfile = async (): Promise<RetItem<AuthorProfileItem>> => get("/api/kun/profile/v1/50/get");
