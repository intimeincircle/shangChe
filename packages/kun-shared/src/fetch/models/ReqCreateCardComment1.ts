/* tslint:disable */
/* eslint-disable */
/**
 * title
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    HashLong,
    HashLongFromJSON,
    HashLongFromJSONTyped,
    HashLongToJSON,
} from './HashLong';

/**
 * 
 * @export
 * @interface ReqCreateCardComment1
 */
export interface ReqCreateCardComment1 {
    /**
     * 
     * @type {number}
     * @memberof ReqCreateCardComment1
     */
    channelId: number;
    /**
     * 
     * @type {HashLong}
     * @memberof ReqCreateCardComment1
     */
    seriesId: HashLong;
    /**
     * 
     * @type {HashLong}
     * @memberof ReqCreateCardComment1
     */
    postId: HashLong;
    /**
     * 
     * @type {string}
     * @memberof ReqCreateCardComment1
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof ReqCreateCardComment1
     */
    firstCommentId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReqCreateCardComment1
     */
    parentCommentId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReqCreateCardComment1
     */
    images?: Array<string>;
}

export function ReqCreateCardComment1FromJSON(json: any): ReqCreateCardComment1 {
    return ReqCreateCardComment1FromJSONTyped(json, false);
}

export function ReqCreateCardComment1FromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqCreateCardComment1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelId': json['channelId'],
        'seriesId': HashLongFromJSON(json['seriesId']),
        'postId': HashLongFromJSON(json['postId']),
        'content': json['content'],
        'firstCommentId': !exists(json, 'firstCommentId') ? undefined : json['firstCommentId'],
        'parentCommentId': !exists(json, 'parentCommentId') ? undefined : json['parentCommentId'],
        'images': !exists(json, 'images') ? undefined : json['images'],
    };
}

export function ReqCreateCardComment1ToJSON(value?: ReqCreateCardComment1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelId': value.channelId,
        'seriesId': HashLongToJSON(value.seriesId),
        'postId': HashLongToJSON(value.postId),
        'content': value.content,
        'firstCommentId': value.firstCommentId,
        'parentCommentId': value.parentCommentId,
        'images': value.images,
    };
}

