import fetch from 'cross-fetch';
import {API_DEFINE_CLIENT, APIClient} from "../v2/api/v2";

export const getBlogTable = async <T>(blogId: string): Promise<T[]> => {
    // console.log(`https://notion-api.splitbee.io/v1/table/${blogId}`)
    console.log(`https://notion-api.splitbee.io/v1/table/${blogId}`)
    // @ts-ignore
    return fetch(`https://notion-api.splitbee.io/v1/table/${blogId}`).then(res =>
        res.json()
    );
}

export interface BlogItem {
    id: string,
    name: string,
    date?: string,
    tags?: string[]
}

export const v2GetBlogList: API_DEFINE_CLIENT<{id: string}, {id: string, title: string, date: string, tags: string[]}[]> = (data)  =>  {
    // @ts-ignore
    return async (client: APIClient) => {
        const r = await getBlogTable(data?.id ?? '')
        console.log('r', r)
        return r as {id: string, title: string, date: string, tags: string[]}[];
    }
}
