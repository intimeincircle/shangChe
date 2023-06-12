import { post} from "./request";
import { RetItem } from "./login";


export const reqDeleteSeries = async (seriesId: string): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/series/delete", { seriesId });

