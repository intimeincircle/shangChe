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
export const EnumStarbuckBuyWay = {
    GrouponCard: 'GROUPON_CARD',
    Item: 'ITEM'
} as const;
export type EnumStarbuckBuyWay = typeof EnumStarbuckBuyWay[keyof typeof EnumStarbuckBuyWay];


export function EnumStarbuckBuyWayFromJSON(json: any): EnumStarbuckBuyWay {
    return EnumStarbuckBuyWayFromJSONTyped(json, false);
}

export function EnumStarbuckBuyWayFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumStarbuckBuyWay {
    return json as EnumStarbuckBuyWay;
}

export function EnumStarbuckBuyWayToJSON(value?: EnumStarbuckBuyWay | null): any {
    return value as any;
}
