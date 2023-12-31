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
    StarbuckDetailItem,
    StarbuckDetailItemFromJSON,
    StarbuckDetailItemFromJSONTyped,
    StarbuckDetailItemToJSON,
} from './StarbuckDetailItem';

/**
 * 
 * @export
 * @interface StarbuckStoreDetailADT
 */
export interface StarbuckStoreDetailADT {
    /**
     * 
     * @type {Array<StarbuckDetailItem>}
     * @memberof StarbuckStoreDetailADT
     */
    data?: Array<StarbuckDetailItem>;
}

export function StarbuckStoreDetailADTFromJSON(json: any): StarbuckStoreDetailADT {
    return StarbuckStoreDetailADTFromJSONTyped(json, false);
}

export function StarbuckStoreDetailADTFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarbuckStoreDetailADT {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(StarbuckDetailItemFromJSON)),
    };
}

export function StarbuckStoreDetailADTToJSON(value?: StarbuckStoreDetailADT | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(StarbuckDetailItemToJSON)),
    };
}

