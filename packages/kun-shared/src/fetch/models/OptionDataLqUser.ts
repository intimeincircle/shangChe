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
    ConstantMSG,
    ConstantMSGFromJSON,
    ConstantMSGFromJSONTyped,
    ConstantMSGToJSON,
} from './ConstantMSG';
import {
    LqUser,
    LqUserFromJSON,
    LqUserFromJSONTyped,
    LqUserToJSON,
} from './LqUser';

/**
 * 
 * @export
 * @interface OptionDataLqUser
 */
export interface OptionDataLqUser {
    /**
     * 
     * @type {ConstantMSG}
     * @memberof OptionDataLqUser
     */
    code: ConstantMSG;
    /**
     * 
     * @type {string}
     * @memberof OptionDataLqUser
     */
    msg: string;
    /**
     * 
     * @type {LqUser}
     * @memberof OptionDataLqUser
     */
    record?: LqUser;
}

export function OptionDataLqUserFromJSON(json: any): OptionDataLqUser {
    return OptionDataLqUserFromJSONTyped(json, false);
}

export function OptionDataLqUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionDataLqUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': ConstantMSGFromJSON(json['code']),
        'msg': json['msg'],
        'record': !exists(json, 'record') ? undefined : LqUserFromJSON(json['record']),
    };
}

export function OptionDataLqUserToJSON(value?: OptionDataLqUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': ConstantMSGToJSON(value.code),
        'msg': value.msg,
        'record': LqUserToJSON(value.record),
    };
}

