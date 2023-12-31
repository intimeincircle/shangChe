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
 * @interface ReqStartChat
 */
export interface ReqStartChat {
    /**
     * 
     * @type {string}
     * @memberof ReqStartChat
     */
    userId2: string;
}

export function ReqStartChatFromJSON(json: any): ReqStartChat {
    return ReqStartChatFromJSONTyped(json, false);
}

export function ReqStartChatFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqStartChat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId2': json['userId2'],
    };
}

export function ReqStartChatToJSON(value?: ReqStartChat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'userId2': value.userId2,
    };
}

