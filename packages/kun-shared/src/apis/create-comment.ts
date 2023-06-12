import { RetItem } from "./login";
import { post } from "./request";
import {ReqCreateCardComment} from "../src_managed/ReqCreateCardComment";

export const requestCreateComment = async (data: ReqCreateCardComment): Promise<RetItem<void>> => post<RetItem<void>>("/api/horse/v1/card/comment/create", data);

