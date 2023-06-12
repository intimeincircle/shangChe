import {APIClient, RequestData} from "kun-shared/built/v2/api/v2";
import {navigateTo as navigate } from "@remax/web";
import queryString from "query-string"
import wx from '@tybys/jweixin'

// useQuery as useParams
const useParams = <T>(): T => {
    // eslint-disable-next-line no-restricted-globals
    const a = queryString.parse(location.search)
    console.log('a', a)
    return a as unknown as T;
}

async function postData(url = '', data = {}, method :'POST'|'GET' = 'POST') {
    // Default options are marked with *
    console.log('url', url);

    const urlLastfix =  method === 'GET' && data !=null && Object.keys(data).length > 0 ? `?${  queryString.stringify(data)}`: ''
    const AUTH = localStorage.getItem('AUTH') ?? ''

    const response = await fetch(
        `${url}${urlLastfix}`,
        {
        method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Authorization': AUTH
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: method ==='POST' ? JSON.stringify(data): null // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export const httpClient: APIClient = (data: {
    url: string,
    method: 'POST' | 'GET',
    json: boolean,
    options?: {
        baseUrl?: string|undefined,
    }
}) =>
     (body: RequestData) => postData(data?.options?.baseUrl ? `${data?.options?.baseUrl}${data.url}`: `${process.env.BACKEND_API}${data.url}`,body, data.method).then((r) => {
        console.log('body', body)
        console.log('body r', r)
        if(r.code !== 2001) {
            throw new Error(r.message)
        } else {
            return r;
        }
    })


export const remConfig = {
    unit: 'rem',
    inline: true,
    // theme,
    transformUnit: (value: string | number) => {
        console.log('va5', value)
        return `${  Number(value) /50 }rem`;
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

export const getRem = (value: number) => `${value /50  }rem`

export  const setStorageSync: (px: string, value: string) => void = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

const getStorageSync= <T = any>(key: string) => localStorage.getItem(key) as unknown as T;

export  const getLocation = (data:  WechatMiniprogram.LoginOption) =>  {
    console.log('xx')
}

export  const login = (data:  WechatMiniprogram.LoginOption) =>  {
    console.log('xx')
}
// eslint-disable-next-line @typescript-eslint/no-empty-function
 const getUserInfo=(data:  WechatMiniprogram.GetUserInfoOption) => {

}

export {navigate, useParams, getStorageSync, getUserInfo, wx }
