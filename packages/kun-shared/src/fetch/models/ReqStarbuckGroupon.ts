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
    EnumeratumStarbuckItem,
    EnumeratumStarbuckItemFromJSON,
    EnumeratumStarbuckItemFromJSONTyped,
    EnumeratumStarbuckItemToJSON,
} from './EnumeratumStarbuckItem';

/**
 * 
 * @export
 * @interface ReqStarbuckGroupon
 */
export interface ReqStarbuckGroupon {
    /**
     * 
     * @type {string}
     * @memberof ReqStarbuckGroupon
     */
    userName: string;
    /**
     * 
     * @type {string}
     * @memberof ReqStarbuckGroupon
     */
    phone: string;
    /**
     * 
     * @type {EnumeratumStarbuckItem}
     * @memberof ReqStarbuckGroupon
     */
    item: EnumeratumStarbuckItem;
}

export function ReqStarbuckGrouponFromJSON(json: any): ReqStarbuckGroupon {
    return ReqStarbuckGrouponFromJSONTyped(json, false);
}

export function ReqStarbuckGrouponFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqStarbuckGroupon {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userName': json['userName'],
        'phone': json['phone'],
        'item': EnumeratumStarbuckItemFromJSON(json['item']),
    };
}

export function ReqStarbuckGrouponToJSON(value?: ReqStarbuckGroupon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userName': value.userName,
        'phone': value.phone,
        'item': EnumeratumStarbuckItemToJSON(value.item),
    };
}
