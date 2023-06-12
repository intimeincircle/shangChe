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
/**
 * 
 * @export
 * @interface ReqAddDeliverMessage
 */
export interface ReqAddDeliverMessage {
    /**
     * 
     * @type {number}
     * @memberof ReqAddDeliverMessage
     */
    orderId: number;
    /**
     * 
     * @type {string}
     * @memberof ReqAddDeliverMessage
     */
    remark: string;
    /**
     * 
     * @type {string}
     * @memberof ReqAddDeliverMessage
     */
    remarkImage?: string;
}

export function ReqAddDeliverMessageFromJSON(json: any): ReqAddDeliverMessage {
    return ReqAddDeliverMessageFromJSONTyped(json, false);
}

export function ReqAddDeliverMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqAddDeliverMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orderId': json['orderId'],
        'remark': json['remark'],
        'remarkImage': !exists(json, 'remarkImage') ? undefined : json['remarkImage'],
    };
}

export function ReqAddDeliverMessageToJSON(value?: ReqAddDeliverMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orderId': value.orderId,
        'remark': value.remark,
        'remarkImage': value.remarkImage,
    };
}

