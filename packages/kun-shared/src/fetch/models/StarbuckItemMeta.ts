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
/**
 * 
 * @export
 * @interface StarbuckItemMeta
 */
export interface StarbuckItemMeta {
    /**
     * 
     * @type {number}
     * @memberof StarbuckItemMeta
     */
    total: number;
}

export function StarbuckItemMetaFromJSON(json: any): StarbuckItemMeta {
    return StarbuckItemMetaFromJSONTyped(json, false);
}

export function StarbuckItemMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarbuckItemMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': json['total'],
    };
}

export function StarbuckItemMetaToJSON(value?: StarbuckItemMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': value.total,
    };
}

