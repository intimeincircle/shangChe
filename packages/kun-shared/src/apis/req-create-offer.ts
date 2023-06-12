import {post} from 'kun-tools/built/common/req'
import { ReqCreateOffer } from '../src_managed/ReqCreateOffer';

export async function createOffer(data: ReqCreateOffer, auth?: string){
    return await post('/api/comment/offer/create', data, undefined, auth).then(r => {
        console.log('............')
        console.log(r);
        return r;
    });
}