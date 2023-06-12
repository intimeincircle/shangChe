import {RetItem} from "kun-tools/built/common/item";
import {get, post} from "kun-tools/built/common/req";

import {AppConfig} from "../../src_managed/AppConfig";
import {ReqUpdateConfig} from "../../src_managed/ReqUpdateConfig";
import {EnumLqChannel} from "../../src_managed/EnumLqChannel";

export const reqGetAppConfig = async (channel: EnumLqChannel): Promise<RetItem<AppConfig>> => get(`/api/kun/app_config/v1/${channel}/get`)

export const updateAppConfig = async (channel: EnumLqChannel, data: ReqUpdateConfig): Promise<RetItem<string>> => post(`/api/kun/app_config/v1/${channel}/update`, data)
