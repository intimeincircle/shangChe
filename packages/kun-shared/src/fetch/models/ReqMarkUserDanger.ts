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
 * @interface ReqMarkUserDanger
 */
export interface ReqMarkUserDanger {
    /**
     * 
     * @type {string}
     * @memberof ReqMarkUserDanger
     */
    userId: string;
}

export function ReqMarkUserDangerFromJSON(json: any): ReqMarkUserDanger {
    return ReqMarkUserDangerFromJSONTyped(json, false);
}

export function ReqMarkUserDangerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqMarkUserDanger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['userId'],
    };
}

export function ReqMarkUserDangerToJSON(value?: ReqMarkUserDanger | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId': value.userId,
    };
}
