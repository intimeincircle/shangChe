import fetch from 'cross-fetch';
import {checkIsServer} from "./check-is-server";
import {WebConfig} from "./web-config";
import {KunError, LoginAuthError} from "./error";
import {RetItem} from "./item";

declare var window: unknown

export interface Context<T> {
  cookies: Record<string, string>
  params: T
}

const baseUrl = typeof(window) === 'undefined' ? WebConfig.baseUrl: `${(window as any).location.origin.indexOf("localhost") > -1 ? WebConfig.baseUrl : (window as any).location.origin}`;

function checkAuthFail(data: {
    code: number;
}): boolean {
  return data.code === 4000 || data.code === 4001;
}

function checkSuccessUtil(data: {
    code: number;
}): boolean {
  return data.code === 2001;
}

function checkFormSuccessUtil(data: {
  code: number;
}): boolean {
  return data.code === 2001 || data.code === 6001;
}

export function navigate2Login(): void {
  (window as any).location.replace("/web/plume/login");
}

function postForm<T>(url: string, body: { [key: string]: string }): Promise<T> {
  const options = {
    method: "POST",
    body,
    headers: {
      authorization: `${getLocalStorageItem("AUTH")}`,
    },
  };
  return fetch(`${baseUrl}${url}`, options as unknown as RequestInit).then((res) => res.json() as unknown as T);
}

export function getCookie(context ?: {cookies: Record<string, string>}): string |undefined {
  if(typeof window == null) {
    return context?.cookies['userid']
  }else {
    return getLocalStorageItem("AUTH") as string|undefined

  }
}

function get<T>(url: string, queryObj?: ReqData, authorization ?:string, context ?: Context<unknown>, options1?: {
  skipCheck?: boolean
}): Promise<T> {
  // TODO replace with query-string
  const newUrl: string = queryObj != null ? `?${Object.keys(queryObj ?? {}).filter((item) => queryObj[item] != null).map((item: string) => `${item}=${queryObj[item]}`).join("&")}` : "";
  const urls = url.startsWith("http") ? url: `${baseUrl}${url}`;
  console.log('getCookie(context)', getCookie(context));

  const options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization:  authorization ?? getCookie(context),
    },
  };
  return fetch(`${urls}${newUrl}`, options as any).then(r => r.json()).then((item) => {
    console.log('item', item);
    // let resp = {
    //   code:3000,
    //   records: [],
    //   record: undefined,
    //   msg: ""
    // } as unknown as  T

    if(options1?.skipCheck!=true) {
      if (checkAuthFail(item)) {
        throw new LoginAuthError("4001");
      }
      if (!checkSuccessUtil(item)) {
        throw new KunError(item?.msg ?? 'Error');
      }
    }
    return item as T
  });
}


export interface ReqData {
    [key: string]: string | boolean | number | unknown;
}

export type RequestFormData = ReqData| FormData |object

let storage = new Map<string, string>();

export function getAuthLocalKey() : string {
  const key = 'AUTH'
  if (checkIsServer()) {
    return storage.get(key) as unknown as string
  } else {
    return localStorage.getItem(key) ?? 'auth'
  }
}

export function getAuthLocalStorageItem(key: string) : string {
  if (checkIsServer()) {
    return storage.get(key) as unknown as string
  } else {
    return localStorage.getItem(key) ?? 'auth'
  }
}

export function getLocalStorageItem(key: string) : string {
    if (checkIsServer()) {
     return storage.get(key) as unknown as string
    } else {
      return localStorage.getItem(key) ?? ''
    }
}

export function setLocalStorageItem(key: string, value: string): void {
  if(checkIsServer()){
    storage.set(key, value)
  }else {
    localStorage.setItem(key, value)
  }
}

export interface RequestOption {
  isFormData?: boolean;
  callback?: () => void;
  authorization?: string
}
function post<T>(url: string, data: RequestFormData, option?: RequestOption, authorization ?:string): Promise<T> {
  const header = {
    authorization: `${getLocalStorageItem("AUTH")}`,
  };
  const authorizationOption = option?.authorization ?? authorization
  const headerJson = {
    authorization: authorizationOption ?? `${getLocalStorageItem("AUTH")}`,
    "content-type": "application/json",
  };

  const options = {
    method: "POST",
    body: option?.isFormData !== true ? JSON.stringify(data) : data as FormData,
    headers: option?.isFormData !== true ? { ...header, ...headerJson } : header,
  };

  return fetch(`${baseUrl}${url}`, options).then((res) => res.json()).then((rr) => {
    const r = rr as RetItem<string>;
    if (checkAuthFail(r)) {
      throw new LoginAuthError("4001");
    }
    if (!checkFormSuccessUtil(r)) {
      throw new KunError(r?.msg ?? 'Error');
    }
    return rr;
  });
}

export {
  checkSuccessUtil, get, post, postForm,baseUrl, checkAuthFail
};
