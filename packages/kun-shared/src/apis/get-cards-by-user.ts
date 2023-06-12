import {get, ReqData} from "./request";
import {HorseCardReturn} from "../src_managed/HorseCardReturn";
import {PaginationApi} from "./pagination";

export interface ReqGetUserCards extends ReqData {
    id: string;
}

export const requestGetCardsByAuthorByMark: PaginationApi <ReqGetUserCards, HorseCardReturn> = async (props, pageMark) =>
    get("/api/horse/v1/card/get_by_author", {
        ...props,
        ...pageMark,
    });
