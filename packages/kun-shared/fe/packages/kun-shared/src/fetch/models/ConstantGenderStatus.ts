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
export enum ConstantGenderStatus {
    _1 = '1',
    _2 = '2'
}

export function ConstantGenderStatusFromJSON(json: any): ConstantGenderStatus {
    return ConstantGenderStatusFromJSONTyped(json, false);
}

export function ConstantGenderStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstantGenderStatus {
    return json as ConstantGenderStatus;
}

export function ConstantGenderStatusToJSON(value?: ConstantGenderStatus | null): any {
    return value as any;
}

