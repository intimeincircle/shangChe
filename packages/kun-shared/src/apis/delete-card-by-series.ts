import { RetItem } from "./login";
import { post } from "./request";

export const reqDeleteCard = async (cardId: string, seriesId: string): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/card/delete", {
  seriesId,
  cardId,
});
