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
 * @interface StarbuckDetailOpenDetail
 */
export interface StarbuckDetailOpenDetail {
    /**
     * 
     * @type {string}
     * @memberof StarbuckDetailOpenDetail
     */
    localTime: string;
    /**
     * 
     * @type {boolean}
     * @memberof StarbuckDetailOpenDetail
     */
    open: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StarbuckDetailOpenDetail
     */
    open24Hours: boolean;
    /**
     * 
     * @type {string}
     * @memberof StarbuckDetailOpenDetail
     */
    openTime: string;
    /**
     * 
     * @type {string}
     * @memberof StarbuckDetailOpenDetail
     */
    closeTime: string;
}

export function StarbuckDetailOpenDetailFromJSON(json: any): StarbuckDetailOpenDetail {
    return StarbuckDetailOpenDetailFromJSONTyped(json, false);
}

export function StarbuckDetailOpenDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarbuckDetailOpenDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localTime': json['localTime'],
        'open': json['open'],
        'open24Hours': json['open24Hours'],
        'openTime': json['openTime'],
        'closeTime': json['closeTime'],
    };
}

export function StarbuckDetailOpenDetailToJSON(value?: StarbuckDetailOpenDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'localTime': value.localTime,
        'open': value.open,
        'open24Hours': value.open24Hours,
        'openTime': value.openTime,
        'closeTime': value.closeTime,
    };
}
