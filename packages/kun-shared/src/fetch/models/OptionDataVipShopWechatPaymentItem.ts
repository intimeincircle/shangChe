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
    VipShopWechatPaymentItem,
    VipShopWechatPaymentItemFromJSON,
    VipShopWechatPaymentItemFromJSONTyped,
    VipShopWechatPaymentItemToJSON,
} from './VipShopWechatPaymentItem';

/**
 * 
 * @export
 * @interface OptionDataVipShopWechatPaymentItem
 */
export interface OptionDataVipShopWechatPaymentItem {
    /**
     * 
     * @type {ConstantMSG}
     * @memberof OptionDataVipShopWechatPaymentItem
     */
    code: ConstantMSG;
    /**
     * 
     * @type {string}
     * @memberof OptionDataVipShopWechatPaymentItem
     */
    msg: string;
    /**
     * 
     * @type {VipShopWechatPaymentItem}
     * @memberof OptionDataVipShopWechatPaymentItem
     */
    record?: VipShopWechatPaymentItem;
}

export function OptionDataVipShopWechatPaymentItemFromJSON(json: any): OptionDataVipShopWechatPaymentItem {
    return OptionDataVipShopWechatPaymentItemFromJSONTyped(json, false);
}

export function OptionDataVipShopWechatPaymentItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionDataVipShopWechatPaymentItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': ConstantMSGFromJSON(json['code']),
        'msg': json['msg'],
        'record': !exists(json, 'record') ? undefined : VipShopWechatPaymentItemFromJSON(json['record']),
    };
}

export function OptionDataVipShopWechatPaymentItemToJSON(value?: OptionDataVipShopWechatPaymentItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': ConstantMSGToJSON(value.code),
        'msg': value.msg,
        'record': VipShopWechatPaymentItemToJSON(value.record),
    };
}
