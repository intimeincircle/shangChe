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
    ShandianItemCount,
    ShandianItemCountFromJSON,
    ShandianItemCountFromJSONTyped,
    ShandianItemCountToJSON,
} from './ShandianItemCount';
import {
    StarbuckStoreNameItem,
    StarbuckStoreNameItemFromJSON,
    StarbuckStoreNameItemFromJSONTyped,
    StarbuckStoreNameItemToJSON,
} from './StarbuckStoreNameItem';

/**
 * 
 * @export
 * @interface ReqCreateShandianOrder
 */
export interface ReqCreateShandianOrder {
    /**
     * 
     * @type {string}
     * @memberof ReqCreateShandianOrder
     */
    paidOrderId?: string;
    /**
     * 
     * @type {StarbuckStoreNameItem}
     * @memberof ReqCreateShandianOrder
     */
    location?: StarbuckStoreNameItem;
    /**
     * 
     * @type {Array<ShandianItemCount>}
     * @memberof ReqCreateShandianOrder
     */
    items?: Array<ShandianItemCount>;
}

export function ReqCreateShandianOrderFromJSON(json: any): ReqCreateShandianOrder {
    return ReqCreateShandianOrderFromJSONTyped(json, false);
}

export function ReqCreateShandianOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqCreateShandianOrder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paidOrderId': !exists(json, 'paidOrderId') ? undefined : json['paidOrderId'],
        'location': !exists(json, 'location') ? undefined : StarbuckStoreNameItemFromJSON(json['location']),
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(ShandianItemCountFromJSON)),
    };
}

export function ReqCreateShandianOrderToJSON(value?: ReqCreateShandianOrder | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'paidOrderId': value.paidOrderId,
        'location': StarbuckStoreNameItemToJSON(value.location),
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(ShandianItemCountToJSON)),
    };
}

