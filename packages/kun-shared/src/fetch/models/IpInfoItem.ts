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
    IpInfo,
    IpInfoFromJSON,
    IpInfoFromJSONTyped,
    IpInfoToJSON,
} from './IpInfo';

/**
 * 
 * @export
 * @interface IpInfoItem
 */
export interface IpInfoItem {
    /**
     * 
     * @type {number}
     * @memberof IpInfoItem
     */
    code: number;
    /**
     * 
     * @type {IpInfo}
     * @memberof IpInfoItem
     */
    data: IpInfo;
}

export function IpInfoItemFromJSON(json: any): IpInfoItem {
    return IpInfoItemFromJSONTyped(json, false);
}

export function IpInfoItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): IpInfoItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'data': IpInfoFromJSON(json['data']),
    };
}

export function IpInfoItemToJSON(value?: IpInfoItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'data': IpInfoToJSON(value.data),
    };
}

