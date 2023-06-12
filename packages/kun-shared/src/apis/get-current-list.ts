import { get } from "./request";
import { ModelRetRecords } from "./model";

export interface SeekCardItem {
    cardId: string;
    content: string;
    createAt: number;
    learnAt: number;
    level: number;
    nextLearnAt: number;
    postType: string;
    seriesId: string;
    seriesTitle: string;
    seriesType: string;
    seriesVersion: number;
    title: string;
    userId: string;
}

export const getCurrentLearningList = async (pageMark?: string): Promise<ModelRetRecords<SeekCardItem>> => get("/api/horse/v1/card/learn/current_page_mark", { pageMark });

