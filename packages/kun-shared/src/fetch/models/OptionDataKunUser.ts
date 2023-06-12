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
    KunUser,
    KunUserFromJSON,
    KunUserFromJSONTyped,
    KunUserToJSON,
} from './KunUser';

/**
 * 
 * @export
 * @interface OptionDataKunUser
 */
export interface OptionDataKunUser {
    /**
     * 
     * @type {ConstantMSG}
     * @memberof OptionDataKunUser
     */
    code: ConstantMSG;
    /**
     * 
     * @type {string}
     * @memberof OptionDataKunUser
     */
    msg: string;
    /**
     * 
     * @type {KunUser}
     * @memberof OptionDataKunUser
     */
    record?: KunUser;
}

export function OptionDataKunUserFromJSON(json: any): OptionDataKunUser {
    return OptionDataKunUserFromJSONTyped(json, false);
}

export function OptionDataKunUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionDataKunUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': ConstantMSGFromJSON(json['code']),
        'msg': json['msg'],
        'record': !exists(json, 'record') ? undefined : KunUserFromJSON(json['record']),
    };
}

export function OptionDataKunUserToJSON(value?: OptionDataKunUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': ConstantMSGToJSON(value.code),
        'msg': value.msg,
        'record': KunUserToJSON(value.record),
    };
}
