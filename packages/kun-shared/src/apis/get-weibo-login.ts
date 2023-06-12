import { get } from "./request";
import { RetItem } from "./login";

export const getWeiboLogin = async (code: string): Promise<RetItem<void>> => get<RetItem<void>>("/api/auth/v1/50/callback/weibo", {
  code,
});

export const getWechatLogin = async (code: string): Promise<RetItem<void>> => get<RetItem<void>>("/api/auth/v1/50/callback/wechat", {
  code,
});

export const getFuwuhaoLogin = async (code: string): Promise<RetItem<void>> => get<RetItem<void>>("/api/auth/v1/50/callback/fuwuhao", {
  code,
});
