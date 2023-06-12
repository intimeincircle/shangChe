/* eslint-disable @typescript-eslint/no-empty-function */
import {APIClient, RequestData} from "kun-shared/built/v2/api/v2";
import { request,login, navigateTo as navigate, setStorageSync, getStorageSync, getLocation, getUserInfo} from 'remax/wechat';
import {usePageEvent} from "@remax/runtime";
import {useState} from "react";

interface ChooseWXPayOptions {
    timestamp: number;
    nonceStr: string;
    package: string;
    signType: 'SHA1' | 'MD5';
    paySign: string;
}

const wx: WechatMiniprogram.Wx  = {
    config: () => {

    },
    ready: (callback: () => void) => {

    },
    chooseWXPay:  (options: ChooseWXPayOptions) => {


    }
} as unknown as WechatMiniprogram.Wx

const  navigateTo= (data: {
    url: string
                    }) => {
    navigate({
        url: ''
    })
    console.log('a')
}
export const httpClient: APIClient = (data: {
    url: string,
    method: 'POST' | 'GET',
    json: boolean,
}): (data: any) => Promise<unknown> => {
    const AUTH=getStorageSync('AUTH')
    return (body: RequestData) => request({
        url: `${process.env.BACKEND_API}${data.url}`,
        method: data.method,
        header: {
            Authorization: AUTH
        },
        data: body,
    }).then((r) => {
        if(r.data.code !== 2001) {
            throw new Error('操作失败')
        }else {
            return  r.data;
        }
    })
}

export const remConfig = {
    unit: 'rem',
    inline: true,
    transformUnit: (value: string | number) => {
        console.log('value', value)
        return `${  Number(value) / 20  }rem`;
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 18,
        xl: 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
        '5xl': 48,
        '6xl': 60,
        '7xl': 72,
        '8xl': 96,
        '9xl': 128,
    },
    shadows: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0,0,0,0.01)',
        base: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
        md: '0 4px 8px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)',
        xl: '0 14px 24px rgba(0, 0, 0, 0.16), 0 0 2px rgba(0,0,0,0.02)',
        '2xl': '0 24px 48px rgba(0, 0, 0, 0.2), 0 0 2px rgba(0,0,0,0.02)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
    },
}

export const getRem = (value: number) => `${value /20  }rem`

const useParams = () => {
    const [params, setParams] = useState({})
    usePageEvent('onLoad', (e) => {
        setParams(e)
    });
    return params ?? {}
}

export {navigate, setStorageSync, useParams, getStorageSync,login, getUserInfo, wx, getLocation}
