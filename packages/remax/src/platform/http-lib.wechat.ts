import {HttpLibrary, RequestContext, ResponseBody, ResponseContext} from "kun-apis";
import {getStorageSync, request} from "remax/wechat";
import {from} from "kun-apis/dist/rxjsStub";


export class IsomorphicFetchHttpLibrary1 implements HttpLibrary {
    // @ts-ignore
    // eslint-disable-next-line class-methods-use-this
    public  send(request1: RequestContext): Observable<ResponseContext> {
        const method = request1.getHttpMethod().toString();
        const body = request1.getBody();
        const AUTH = getStorageSync('AUTH')
        const a =  request({
            url: request1.getUrl(),
            method: method as any,
            header: {
                Authorization:  AUTH
            },
            // credentials: "same-origin",
            data: body,
        }).then((resp: any) => {
            console.log('r', resp)
            const body1 = {
                // eslint-disable-next-line no-promise-executor-return
                text: () => new Promise(r => r(JSON.stringify(resp.data))),
                binary: () => resp.blob()
            };

            const headers: { [name: string]: string } = {
                "Content-Type": "application/json",
                "content-type": resp.header['Content-Type']
            };
            return new ResponseContext(resp.statusCode, headers, body1 as ResponseBody);
        })
        return from<Promise<ResponseContext>>(a);
    }
}
const a = new IsomorphicFetchHttpLibrary1()
export const httpLibrary: HttpLibrary =a as unknown as  HttpLibrary
