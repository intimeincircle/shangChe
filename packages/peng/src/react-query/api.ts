import {Configuration, DefaultApi, RequestContext} from "kun-shared/built/fetch";
import {checkIsServer} from "kun-tools/built/common/check-is-server";
import {getLocalStorageItem} from "kun-tools/built/common/req";
import "portable-fetch"

export const CONST_BACKEND= 'http://www.oneone.fun'

export const defaultApi = new DefaultApi(new Configuration({
    basePath:CONST_BACKEND,
    middleware: [
        {
            pre: (context: RequestContext) => new Promise((resolve) => {
                context.init.headers = {
                    authorization: !checkIsServer() ? getLocalStorageItem("AUTH") ?? 'mock' : 'mock'
                }
                resolve();
            })
        }
    ],
    fetchApi: fetch,
    headers: {}
}))
