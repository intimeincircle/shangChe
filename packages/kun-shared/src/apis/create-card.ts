import {post, RequestFormData} from "./request";
import {ReqCreateHorseCard} from "../src_managed/ReqCreateHorseCard";
import {RetItem} from "./item";
import {ReqUpdateHorseCard} from "../src_managed/ReqUpdateHorseCard";

export const requestCreateHorseCard = async (data: ReqCreateHorseCard): Promise<RetItem<string>> => post("/api/horse/v1/card/create", data as unknown as RequestFormData);

export const requestCreateHorseCardSubmit = async (data: ReqCreateHorseCard): Promise<RetItem<string>> => post("/api/horse/v1/card/createSubmit", data as unknown as RequestFormData);

export const requestUpdateHorseCardSubmit = async (data: ReqUpdateHorseCard): Promise<RetItem<string>> => post("/api/horse/v1/card/updateSubmit", data);
