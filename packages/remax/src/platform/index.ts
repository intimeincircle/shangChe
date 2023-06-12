import {APIClient} from "kun-shared/built/v2/api/v2";
import ChooseWXPayOptions = wx.ChooseWXPayOptions;

export declare const httpClient: APIClient

export declare const  remConfig : {
    unit: 'rem',

}

export declare const getRem: (px: number) => string
export declare const navigate: (data: {url: string}) => void;


export declare const chooseWXPay:  (options: ChooseWXPayOptions) => void;
export declare const getUserInfo:(data:  WechatMiniprogram.GetUserInfoOption) => void
export declare const login:(data:  WechatMiniprogram.LoginOption) => void

export declare const getStorageSync: <T = any>(key: string) => T;
export declare const setStorageSync: (px: string, value: string) => void

export declare const getLocation: <T = any>(data: WechatMiniprogram.GetLocationOption) => void;

export declare const useParams: <T =any>() => T
export declare const wx: WechatMiniprogram.Wx
