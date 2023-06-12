import { RetItem } from "./login";
import { get } from "./request";

export const requestParseHtml = async (url: string): Promise<RetItem<void>> => get<RetItem<void>>("/api/tools/link", { url });
