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
export const ConstantAppraiseType = {
    Valuable: 'VALUABLE',
    Wonderful: 'WONDERFUL',
    Potential: 'POTENTIAL'
} as const;
export type ConstantAppraiseType = typeof ConstantAppraiseType[keyof typeof ConstantAppraiseType];


export function ConstantAppraiseTypeFromJSON(json: any): ConstantAppraiseType {
    return ConstantAppraiseTypeFromJSONTyped(json, false);
}

export function ConstantAppraiseTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstantAppraiseType {
    return json as ConstantAppraiseType;
}

export function ConstantAppraiseTypeToJSON(value?: ConstantAppraiseType | null): any {
    return value as any;
}

