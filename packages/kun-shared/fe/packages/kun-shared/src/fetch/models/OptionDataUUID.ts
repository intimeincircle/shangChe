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

/**
 * 
 * @export
 * @interface OptionDataUUID
 */
export interface OptionDataUUID {
    /**
     * 
     * @type {ConstantMSG}
     * @memberof OptionDataUUID
     */
    code: ConstantMSG;
    /**
     * 
     * @type {string}
     * @memberof OptionDataUUID
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof OptionDataUUID
     */
    record?: string;
}

export function OptionDataUUIDFromJSON(json: any): OptionDataUUID {
    return OptionDataUUIDFromJSONTyped(json, false);
}

export function OptionDataUUIDFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionDataUUID {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': ConstantMSGFromJSON(json['code']),
        'msg': json['msg'],
        'record': !exists(json, 'record') ? undefined : json['record'],
    };
}

export function OptionDataUUIDToJSON(value?: OptionDataUUID | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': ConstantMSGToJSON(value.code),
        'msg': value.msg,
        'record': value.record,
    };
}

