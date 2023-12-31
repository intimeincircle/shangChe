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
    ShandianOrder,
    ShandianOrderFromJSON,
    ShandianOrderFromJSONTyped,
    ShandianOrderToJSON,
} from './ShandianOrder';
import {
    StarbuckPaidOrder,
    StarbuckPaidOrderFromJSON,
    StarbuckPaidOrderFromJSONTyped,
    StarbuckPaidOrderToJSON,
} from './StarbuckPaidOrder';

/**
 * 
 * @export
 * @interface KunShandianOrderTask
 */
export interface KunShandianOrderTask {
    /**
     * 
     * @type {StarbuckPaidOrder}
     * @memberof KunShandianOrderTask
     */
    data: StarbuckPaidOrder;
    /**
     * 
     * @type {ShandianOrder}
     * @memberof KunShandianOrderTask
     */
    taskOpt?: ShandianOrder;
}

export function KunShandianOrderTaskFromJSON(json: any): KunShandianOrderTask {
    return KunShandianOrderTaskFromJSONTyped(json, false);
}

export function KunShandianOrderTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): KunShandianOrderTask {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': StarbuckPaidOrderFromJSON(json['data']),
        'taskOpt': !exists(json, 'taskOpt') ? undefined : ShandianOrderFromJSON(json['taskOpt']),
    };
}

export function KunShandianOrderTaskToJSON(value?: KunShandianOrderTask | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': StarbuckPaidOrderToJSON(value.data),
        'taskOpt': ShandianOrderToJSON(value.taskOpt),
    };
}

