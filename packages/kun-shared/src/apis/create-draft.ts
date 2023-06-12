import {RetItem} from "./login";
import {post} from "kun-tools/built/common/req";
import {ReqStoreDraft} from "../src_managed/ReqStoreDraft";
import {KunDraft} from "../src_managed/KunDraft";
import { OptionData } from "src/common/OptionData";

export const requestCreateDraft = async (data: ReqStoreDraft): Promise<RetItem<void>> =>
    post<RetItem<void>>(`/api/draft/create`, data);

export const getKunDraft = async (data: ReqStoreDraft): Promise<OptionData<KunDraft>> =>
    post(`/api/draft/get`, data);
