import { RetItem } from "./login";
import { get } from "./request";

export const requestGetPageTitle = async (title: string): Promise<RetItem<string>> => get("/api/horse/v1/tool/getTitle", { title });
