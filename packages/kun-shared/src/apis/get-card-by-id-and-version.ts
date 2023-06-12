import { RetItem } from "./item";
import { get } from "./request";
import {OptionData} from "../common/OptionData";
import {HorseCardWithSeries} from "../src_managed/HorseCardWithSeries";
import { ConstantPostType } from "../src_managed/ConstantPostType";

export type { ConstantPostType}

export interface Card {
    cardId: string;
    seriesId: string;
    createAt: number;
    updateAt: number;
    authorId: string;
    seriesVersion: number;
    title: string;
    postType: ConstantPostType;
    seq: number;
    content: string;
    richHtml?: string;
    delta?: unknown;
    audioName?: string;
    videoName: string;
    imageNames: unknown[];
    isDelete: boolean;
    likeCount: number;
    commentCount: number;
    noteCount: number;
}

export interface Series {
    id: string;
    title: string;
    name?: string;
    authorId: string;
    seriesType: string;
    isAuthor: boolean;
    latestVersion: number;
    releaseVersion: number;
    description?: unknown;
    learnPerDay: number;
    tags: unknown[];
    categoryId: number;
    subCategoryId?: unknown;
    coverImageName?: string;
    chargeType: string;
    learningByAuthor: boolean;
    releaseUpdateAt: number;
    releaseCreateAt: number;
    createAt: number;
    categoryName?: unknown;
    cardCount: number;
    subscriptionCount: number;
    isDelete: boolean;
}

export interface GetCardInfoItemRecord {
    card: Card;
    series: Series;
}


export const getCardByVersion = async (id: string, seriesVersion: string): Promise<RetItem<GetCardInfoItemRecord>> => get<RetItem<GetCardInfoItemRecord>>(`/horse/v1/card/get_by_version?id=${id}&seriesVersion=${seriesVersion}`);


export const getCardById = async (seriesId: string, id: string): Promise<OptionData<HorseCardWithSeries>> => get(`/horse/v1/card/get_by_id?id=${id}&seriesId=${seriesId}`);
