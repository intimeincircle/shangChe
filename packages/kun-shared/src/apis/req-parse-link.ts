import { post } from "./request";
import { ModelRetRecord } from "./model";

export interface ReqParseLink {
    url: string;
}

export interface RetParseLink {
    url: string;
    title: string;
    content: string;
}

export const requestParseLink = async (url: string): Promise<ModelRetRecord<RetParseLink>> => post<ModelRetRecord<RetParseLink>>("/api/t4f/v1/parse", { url });
