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
    ChatGroupByUser,
    ChatGroupByUserFromJSON,
    ChatGroupByUserFromJSONTyped,
    ChatGroupByUserToJSON,
} from './ChatGroupByUser';
import {
    KunChatGroup,
    KunChatGroupFromJSON,
    KunChatGroupFromJSONTyped,
    KunChatGroupToJSON,
} from './KunChatGroup';

/**
 * 
 * @export
 * @interface ABGroup
 */
export interface ABGroup {
    /**
     * 
     * @type {KunChatGroup}
     * @memberof ABGroup
     */
    a?: KunChatGroup;
    /**
     * 
     * @type {ChatGroupByUser}
     * @memberof ABGroup
     */
    b: ChatGroupByUser;
}

export function ABGroupFromJSON(json: any): ABGroup {
    return ABGroupFromJSONTyped(json, false);
}

export function ABGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): ABGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'a': !exists(json, 'a') ? undefined : KunChatGroupFromJSON(json['a']),
        'b': ChatGroupByUserFromJSON(json['b']),
    };
}

export function ABGroupToJSON(value?: ABGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'a': KunChatGroupToJSON(value.a),
        'b': ChatGroupByUserToJSON(value.b),
    };
}

