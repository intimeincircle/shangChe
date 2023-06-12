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
import {
    EnumeratumChatRole,
    EnumeratumChatRoleFromJSON,
    EnumeratumChatRoleFromJSONTyped,
    EnumeratumChatRoleToJSON,
} from './EnumeratumChatRole';

/**
 * 
 * @export
 * @interface GetRtcToken
 */
export interface GetRtcToken {
    /**
     * 
     * @type {string}
     * @memberof GetRtcToken
     */
    channelName: string;
    /**
     * 
     * @type {string}
     * @memberof GetRtcToken
     */
    userId: string;
    /**
     * 
     * @type {EnumeratumChatRole}
     * @memberof GetRtcToken
     */
    role: EnumeratumChatRole;
}

export function GetRtcTokenFromJSON(json: any): GetRtcToken {
    return GetRtcTokenFromJSONTyped(json, false);
}

export function GetRtcTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetRtcToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelName': json['channelName'],
        'userId': json['userId'],
        'role': EnumeratumChatRoleFromJSON(json['role']),
    };
}

export function GetRtcTokenToJSON(value?: GetRtcToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelName': value.channelName,
        'userId': value.userId,
        'role': EnumeratumChatRoleToJSON(value.role),
    };
}

