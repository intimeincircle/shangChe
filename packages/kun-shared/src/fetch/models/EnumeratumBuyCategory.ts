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
 */
export const EnumeratumBuyCategory = {
    VipChongzhi: 'VIP_CHONGZHI',
    VipSimple: 'VIP_SIMPLE',
    Diandan: 'DIANDAN'
} as const;
export type EnumeratumBuyCategory = typeof EnumeratumBuyCategory[keyof typeof EnumeratumBuyCategory];


export function EnumeratumBuyCategoryFromJSON(json: any): EnumeratumBuyCategory {
    return EnumeratumBuyCategoryFromJSONTyped(json, false);
}

export function EnumeratumBuyCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumeratumBuyCategory {
    return json as EnumeratumBuyCategory;
}

export function EnumeratumBuyCategoryToJSON(value?: EnumeratumBuyCategory | null): any {
    return value as any;
}
