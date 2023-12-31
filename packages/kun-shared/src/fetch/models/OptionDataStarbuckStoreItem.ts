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
    StarbuckStoreItem,
    StarbuckStoreItemFromJSON,
    StarbuckStoreItemFromJSONTyped,
    StarbuckStoreItemToJSON,
} from './StarbuckStoreItem';

/**
 * 
 * @export
 * @interface OptionDataStarbuckStoreItem
 */
export interface OptionDataStarbuckStoreItem {
    /**
     * 
     * @type {ConstantMSG}
     * @memberof OptionDataStarbuckStoreItem
     */
    code: ConstantMSG;
    /**
     * 
     * @type {string}
     * @memberof OptionDataStarbuckStoreItem
     */
    msg: string;
    /**
     * 
     * @type {StarbuckStoreItem}
     * @memberof OptionDataStarbuckStoreItem
     */
    record?: StarbuckStoreItem;
}

export function OptionDataStarbuckStoreItemFromJSON(json: any): OptionDataStarbuckStoreItem {
    return OptionDataStarbuckStoreItemFromJSONTyped(json, false);
}

export function OptionDataStarbuckStoreItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionDataStarbuckStoreItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': ConstantMSGFromJSON(json['code']),
        'msg': json['msg'],
        'record': !exists(json, 'record') ? undefined : StarbuckStoreItemFromJSON(json['record']),
    };
}

export function OptionDataStarbuckStoreItemToJSON(value?: OptionDataStarbuckStoreItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': ConstantMSGToJSON(value.code),
        'msg': value.msg,
        'record': StarbuckStoreItemToJSON(value.record),
    };
}

