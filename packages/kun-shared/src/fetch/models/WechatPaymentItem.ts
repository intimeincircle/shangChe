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
    HashLong,
    HashLongFromJSON,
    HashLongFromJSONTyped,
    HashLongToJSON,
} from './HashLong';

/**
 * 
 * @export
 * @interface WechatPaymentItem
 */
export interface WechatPaymentItem {
    /**
     * 
     * @type {number}
     * @memberof WechatPaymentItem
     */
    timeStamp: number;
    /**
     * 
     * @type {string}
     * @memberof WechatPaymentItem
     */
    appId: string;
    /**
     * 
     * @type {string}
     * @memberof WechatPaymentItem
     */
    nonceStr: string;
    /**
     * 
     * @type {string}
     * @memberof WechatPaymentItem
     */
    _package: string;
    /**
     * 
     * @type {string}
     * @memberof WechatPaymentItem
     */
    paySign: string;
    /**
     * 
     * @type {string}
     * @memberof WechatPaymentItem
     */
    signType: string;
    /**
     * 
     * @type {HashLong}
     * @memberof WechatPaymentItem
     */
    orderId: HashLong;
}

export function WechatPaymentItemFromJSON(json: any): WechatPaymentItem {
    return WechatPaymentItemFromJSONTyped(json, false);
}

export function WechatPaymentItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): WechatPaymentItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timeStamp': json['timeStamp'],
        'appId': json['appId'],
        'nonceStr': json['nonceStr'],
        '_package': json['package'],
        'paySign': json['paySign'],
        'signType': json['signType'],
        'orderId': HashLongFromJSON(json['orderId']),
    };
}

export function WechatPaymentItemToJSON(value?: WechatPaymentItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'timeStamp': value.timeStamp,
        'appId': value.appId,
        'nonceStr': value.nonceStr,
        'package': value._package,
        'paySign': value.paySign,
        'signType': value.signType,
        'orderId': HashLongToJSON(value.orderId),
    };
}

