import {PaginationApi} from "./pagination";
import {get, post} from "kun-tools/built/common/req";
import {ContentCollection} from "../src_managed/ContentCollection";
import {RetItem} from "./login";
import {ReqCreateHorseCardCollection} from "../src_managed/ReqCreateHorseCardCollection";
import {ReqCheckCollected} from "../src_managed/ReqCheckCollected";
import {OptionData} from "../common/OptionData";
import {ContentMsgType} from "../src_managed/ContentMsgType";

export const getStarCollectionList: PaginationApi<{
    channelId: string,
    userId: string;
    msgType: ContentMsgType,
}, ContentCollection> = async (parameters, pageMark) =>
    get(`/collection/${parameters.channelId}v1/list`, {
        ...parameters,
        ...pageMark,
    });


export const createHorseCardCollection = async (data: ReqCreateHorseCardCollection): Promise<RetItem<void>> => post("/api/collection/v1/create/horseCard", data);

export const checkIfCollected = async (data: ReqCheckCollected): Promise<OptionData<boolean>> => post("/api/collection/v1/status", data);
