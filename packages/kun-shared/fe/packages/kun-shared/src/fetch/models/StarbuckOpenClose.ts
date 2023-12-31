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
 * @interface StarbuckOpenClose
 */
export interface StarbuckOpenClose {
    /**
     * 
     * @type {string}
     * @memberof StarbuckOpenClose
     */
    closeTime: string;
    /**
     * 
     * @type {string}
     * @memberof StarbuckOpenClose
     */
    openTime: string;
}

export function StarbuckOpenCloseFromJSON(json: any): StarbuckOpenClose {
    return StarbuckOpenCloseFromJSONTyped(json, false);
}

export function StarbuckOpenCloseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarbuckOpenClose {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'closeTime': json['closeTime'],
        'openTime': json['openTime'],
    };
}

export function StarbuckOpenCloseToJSON(value?: StarbuckOpenClose | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'closeTime': value.closeTime,
        'openTime': value.openTime,
    };
}

