import {post} from 'kun-tools/built/common/req'
import { NoDataList } from '../common/NoDataList'
import { KunOffer } from '../src_managed/KunOffer'

export async function get_offer_by_author(author: string, auth?: string): Promise<NoDataList<KunOffer>> {
    return await post<NoDataList<KunOffer>>('/api/comment/offer/list_by_author', {author}, undefined, auth)
}