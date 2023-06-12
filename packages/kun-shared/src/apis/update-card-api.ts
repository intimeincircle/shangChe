import { post, RequestFormData } from "./request";
import { Card } from "./get-card-by-id-and-version";
import { RetItem } from "./login";

export const requestUpdateCardItem = async (data: Card): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/card/update", data as unknown as RequestFormData);
