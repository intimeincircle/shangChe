import { ModelRetRecord } from "./model";
import { get } from "./request";
import {HorseSeriesFull} from "../src_managed/HorseSeriesFull";

export interface SeriesInfoData {
    wechatImageName: string;
    id: string;
    visible: boolean;
    groupId: string;
    aim: string;
    title: string;
    authorId: string;
    seriesType: string;
    isAuthor: boolean;
    latestVersion: number;
    releaseVersion: number;
    description: string;
    learnPerDay: number;
    tags: unknown[];
    categoryId: number;
    subCategoryId: number;
    price?: unknown;
    coverImageName: string;
    chargeType: string;
    learningByAuthor: boolean;
    releaseUpdateAt: number;
    releaseCreateAt: number;
    createAt: number;
    categoryName: string;
    cardCount: number;
    subscriptionCount: number;
    descriptionDelta: string;
    discountPrice?: unknown;
    appriseScore?: unknown;
    appriseNum?: unknown;
}

export interface AuthorProfile {
    channelId: number;
    userId: string;
    brandName: string;
    brandDescription?: unknown;
    brandAvatarName: string;
    provinceId?: unknown;
    provinceName?: unknown;
    cityId?: unknown;
    cityName?: unknown;
}

export interface CardInfos {
    cardId: string;
    seriesId: string;
    authorId: string;
    seriesVersion: number;
    title: string;
    postType: string;
    seq: number;
    updateAt: number;
    content: string;
    richHtml?: unknown;
    delta?: unknown;
    audioName?: unknown;
    videoName?: string;
    imageNames: unknown[];
    isDelete: boolean;
    likeCount: number;
    read: boolean;
    commentCount: number;
    noteCount: number;
}

export interface Record2 {
    channelId: number;
    feedId: string;
    appraiseScore: number;
    createAt: number;
    commentUserName: string;
    commentUserAvatar: string;
    userId: string;
    comment?: unknown;
}

export interface Comments {
    code: string;
    msg: string;
    records: Record2[];
    pageSize: number;
    pageState?: unknown;
}

export interface RetSeriesRecordDetail {
    series: SeriesInfoData;
    authorProfile: AuthorProfile;
    cards: CardInfos[];
    comments: Comments;
}

export const getSeriesDetail = async (id: string): Promise<ModelRetRecord<RetSeriesRecordDetail>> => get<ModelRetRecord<RetSeriesRecordDetail>>(`/api/horse/v1/series/detail?id=${id}`);

export const getSeriesMetaDetail = async (id: string): Promise<ModelRetRecord<HorseSeriesFull>> => get<ModelRetRecord<HorseSeriesFull>>(`/api/horse/v1/series/get_series?id=${id}`);
