import { checkIsServer } from 'kun-tools/built/common/check-is-server';
import { NotionAPI } from 'notion-client'

// fetch the page's content, including all async blocks, collection queries, and signed urls
export const fetchNotionPage = async (name: string): Promise<any> => {
    if(checkIsServer()) {
        const api = new NotionAPI()
        const recordMap = await api.getPage(name ?? '3ec38031ae3642128a31af9d9bc228a3')
        console.log(recordMap);
        console.log(recordMap);
        console.log(recordMap);
        console.log(recordMap);
        return recordMap
    }
    return new Promise((r) => {
        r("")
    })
}

export default fetchNotionPage