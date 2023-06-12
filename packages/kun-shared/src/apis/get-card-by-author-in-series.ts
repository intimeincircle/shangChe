import { get } from "./request";
import { ModelRetRecords } from "./model";

export interface HorseCardItem1 {
    cardId?: string;
    seriesVersion: string;
    authorId: string;
    seriesId: string;
    title: string;
    postType: string;
    content: string;
    richHtml: string;
    delta?: string;
    audioName?: string;
    videoName?: string;
    imageNames?: string[];
    likeCount: number;
    commentCount: number;
    noteCount: number;
}

export const getCardByAuthorInSeries = async (seriesId: string, pageSize: number, pageNum: number):
    Promise<ModelRetRecords<HorseCardItem1>> => get<ModelRetRecords<HorseCardItem1>>(
      "/api/horse/v1/card/seePrivate",
      {
        id: seriesId,
        pageSize,
        pageNum,
      },
    );
