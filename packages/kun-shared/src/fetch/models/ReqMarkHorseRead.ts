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
 * @interface ReqMarkHorseRead
 */
export interface ReqMarkHorseRead {
    /**
     * 
     * @type {HashLong}
     * @memberof ReqMarkHorseRead
     */
    seriesId: HashLong;
    /**
     * 
     * @type {HashLong}
     * @memberof ReqMarkHorseRead
     */
    postId: HashLong;
}

export function ReqMarkHorseReadFromJSON(json: any): ReqMarkHorseRead {
    return ReqMarkHorseReadFromJSONTyped(json, false);
}

export function ReqMarkHorseReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqMarkHorseRead {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'seriesId': HashLongFromJSON(json['seriesId']),
        'postId': HashLongFromJSON(json['postId']),
    };
}

export function ReqMarkHorseReadToJSON(value?: ReqMarkHorseRead | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'seriesId': HashLongToJSON(value.seriesId),
        'postId': HashLongToJSON(value.postId),
    };
}
