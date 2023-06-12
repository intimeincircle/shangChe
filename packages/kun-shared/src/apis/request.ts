
import {post, get} from 'kun-tools/built/common/req'

export {get, post}

export interface ReqData {
    [key: string]: string | boolean | number | unknown;
}


export type RequestFormData = ReqData| FormData
