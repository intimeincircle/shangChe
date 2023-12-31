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
 * @interface ReqCreateKunPinCard
 */
export interface ReqCreateKunPinCard {
    /**
     * 
     * @type {HashLong}
     * @memberof ReqCreateKunPinCard
     */
    seriesId: HashLong;
    /**
     * 
     * @type {string}
     * @memberof ReqCreateKunPinCard
     */
    postId: string;
}

export function ReqCreateKunPinCardFromJSON(json: any): ReqCreateKunPinCard {
    return ReqCreateKunPinCardFromJSONTyped(json, false);
}

export function ReqCreateKunPinCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqCreateKunPinCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'seriesId': HashLongFromJSON(json['seriesId']),
        'postId': json['postId'],
    };
}

export function ReqCreateKunPinCardToJSON(value?: ReqCreateKunPinCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'seriesId': HashLongToJSON(value.seriesId),
        'postId': value.postId,
    };
}

