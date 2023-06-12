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
    KunShandianOrderTask,
    KunShandianOrderTaskFromJSON,
    KunShandianOrderTaskFromJSONTyped,
    KunShandianOrderTaskToJSON,
} from './KunShandianOrderTask';

/**
 * 
 * @export
 * @interface OptionDataKunShandianOrderTask
 */
export interface OptionDataKunShandianOrderTask {
    /**
     * 
     * @type {ConstantMSG}
     * @memberof OptionDataKunShandianOrderTask
     */
    code: ConstantMSG;
    /**
     * 
     * @type {string}
     * @memberof OptionDataKunShandianOrderTask
     */
    msg: string;
    /**
     * 
     * @type {KunShandianOrderTask}
     * @memberof OptionDataKunShandianOrderTask
     */
    record?: KunShandianOrderTask;
}

export function OptionDataKunShandianOrderTaskFromJSON(json: any): OptionDataKunShandianOrderTask {
    return OptionDataKunShandianOrderTaskFromJSONTyped(json, false);
}

export function OptionDataKunShandianOrderTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionDataKunShandianOrderTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': ConstantMSGFromJSON(json['code']),
        'msg': json['msg'],
        'record': !exists(json, 'record') ? undefined : KunShandianOrderTaskFromJSON(json['record']),
    };
}

export function OptionDataKunShandianOrderTaskToJSON(value?: OptionDataKunShandianOrderTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': ConstantMSGToJSON(value.code),
        'msg': value.msg,
        'record': KunShandianOrderTaskToJSON(value.record),
    };
}

