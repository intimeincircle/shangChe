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
 * @interface StarbuckAddress
 */
export interface StarbuckAddress {
    /**
     * 
     * @type {string}
     * @memberof StarbuckAddress
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof StarbuckAddress
     */
    streetAddressLine1: string;
    /**
     * 
     * @type {string}
     * @memberof StarbuckAddress
     */
    streetAddressLine2?: string;
    /**
     * 
     * @type {string}
     * @memberof StarbuckAddress
     */
    streetAddressLine3?: string;
    /**
     * 
     * @type {number}
     * @memberof StarbuckAddress
     */
    postalCode?: number;
}

export function StarbuckAddressFromJSON(json: any): StarbuckAddress {
    return StarbuckAddressFromJSONTyped(json, false);
}

export function StarbuckAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): StarbuckAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'city': json['city'],
        'streetAddressLine1': json['streetAddressLine1'],
        'streetAddressLine2': !exists(json, 'streetAddressLine2') ? undefined : json['streetAddressLine2'],
        'streetAddressLine3': !exists(json, 'streetAddressLine3') ? undefined : json['streetAddressLine3'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
    };
}

export function StarbuckAddressToJSON(value?: StarbuckAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'city': value.city,
        'streetAddressLine1': value.streetAddressLine1,
        'streetAddressLine2': value.streetAddressLine2,
        'streetAddressLine3': value.streetAddressLine3,
        'postalCode': value.postalCode,
    };
}

