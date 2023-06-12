import {PaginationApi} from "./pagination";
import {get} from "kun-tools/built/common/req";
import {HorseCardSearchItem} from "../src_managed/HorseCardSearchItem";

export const getCardByTag: PaginationApi<{
    tag: string
}, HorseCardSearchItem> = async (parameters, pageMark) =>
    get("/api/kun-search/v1/search/cardByTag", {
        ...parameters,
        ...pageMark,
    });
