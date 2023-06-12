
import {get, post, ReqData, RequestFormData} from "kun-tools/built/common/req";
import {APIClient, RequestData} from "kun-shared/built/v2/api/v2";


export const httpClient: APIClient = (data: {
    url: string,
    method: 'POST' | 'GET',
    json: boolean,
}): (data: any, options?: {skipCheck?: boolean}) => Promise<unknown> => {
    
    if(data.method === 'POST') {
        return (body: RequestData) => post(data.url, body as unknown as RequestFormData, {
            isFormData: !data.json,
        })
    }

    return (body: RequestData, options?: {skipCheck?: boolean}) => get(data.url, body as unknown as ReqData, undefined, undefined, {
        skipCheck: options?.skipCheck
    })
}