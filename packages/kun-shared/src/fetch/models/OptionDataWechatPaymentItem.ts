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
    WechatPaymentItem,
    WechatPaymentItemFromJSON,
    WechatPaymentItemFromJSONTyped,
    WechatPaymentItemToJSON,
} from './WechatPaymentItem';

/**
 * 
 * @export
 * @interface OptionDataWechatPaymentItem
 */
export interface OptionDataWechatPaymentItem {
    /**
     * 
     * @type {ConstantMSG}
     * @memberof OptionDataWechatPaymentItem
     */
    code: ConstantMSG;
    /**
     * 
     * @type {string}
     * @memberof OptionDataWechatPaymentItem
     */
    msg: string;
    /**
     * 
     * @type {WechatPaymentItem}
     * @memberof OptionDataWechatPaymentItem
     */
    record?: WechatPaymentItem;
}

export function OptionDataWechatPaymentItemFromJSON(json: any): OptionDataWechatPaymentItem {
    return OptionDataWechatPaymentItemFromJSONTyped(json, false);
}

export function OptionDataWechatPaymentItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionDataWechatPaymentItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': ConstantMSGFromJSON(json['code']),
        'msg': json['msg'],
        'record': !exists(json, 'record') ? undefined : WechatPaymentItemFromJSON(json['record']),
    };
}

export function OptionDataWechatPaymentItemToJSON(value?: OptionDataWechatPaymentItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': ConstantMSGToJSON(value.code),
        'msg': value.msg,
        'record': WechatPaymentItemToJSON(value.record),
    };
}

