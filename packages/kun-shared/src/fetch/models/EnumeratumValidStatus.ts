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
export const EnumeratumValidStatus = {
    Valid: 'VALID',
    InValid: 'IN_VALID'
} as const;
export type EnumeratumValidStatus = typeof EnumeratumValidStatus[keyof typeof EnumeratumValidStatus];


export function EnumeratumValidStatusFromJSON(json: any): EnumeratumValidStatus {
    return EnumeratumValidStatusFromJSONTyped(json, false);
}

export function EnumeratumValidStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnumeratumValidStatus {
    return json as EnumeratumValidStatus;
}

export function EnumeratumValidStatusToJSON(value?: EnumeratumValidStatus | null): any {
    return value as any;
}

