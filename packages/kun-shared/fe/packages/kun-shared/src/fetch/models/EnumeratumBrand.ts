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

/**
 * 
 * @export
 * @enum {string}
 */
export enum EnumeratumBrand {
    Kfc = 'KFC',
    Starbuck = 'STARBUCK'
}

export function EnumeratumBrandFromJSON(json: any): EnumeratumBrand {
    return EnumeratumBrandFromJSONTyped(json, false);
}

export function EnumeratumBrandFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumeratumBrand {
    return json as EnumeratumBrand;
}

export function EnumeratumBrandToJSON(value?: EnumeratumBrand | null): any {
    return value as any;
}

