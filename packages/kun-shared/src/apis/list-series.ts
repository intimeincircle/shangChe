import { get } from "./request";

export interface SeriesRecord {
    id: string;
    title: string;
    authorId: string;
    seriesType: string;
    isAuthor: boolean;
    latestVersion: number;
    releaseVersion: number;
    description: string;
    learnPerDay: number;
    tags: unknown[];
    categoryId?: number;
    subCategoryId?: unknown;
    coverImageName?: string;
    chargeType: string;
    learningByAuthor: boolean;
    releaseUpdateAt: unknown;
    releaseCreateAt: unknown;
    createAt: unknown;
    categoryName?: unknown;
    cardCount: number;
    subscriptionCount: number;
    isDelete: boolean;
}

export interface RetListMySeries {
    code: string;
    msg: string;
    records: SeriesRecord[];
    pageSize: number;
    total: number;
    pageNum: number;
}

export const getMySeries = async (): Promise<RetListMySeries> => get<RetListMySeries>("/api/horse/v1/series/my");
