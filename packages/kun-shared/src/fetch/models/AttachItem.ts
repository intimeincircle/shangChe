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
 * @interface AttachItem
 */
export interface AttachItem {
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof AttachItem
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof AttachItem
     */
    tip: string;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    sort: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    merchantid: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    attachgroupid: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    type: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    verification: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    transform: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    dropdownboxgroupid: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    optiongroupid: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    attachtype: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    status: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    createTime: number;
    /**
     * 
     * @type {number}
     * @memberof AttachItem
     */
    updateTime: number;
}

export function AttachItemFromJSON(json: any): AttachItem {
    return AttachItemFromJSONTyped(json, false);
}

export function AttachItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'tip': json['tip'],
        'sort': json['sort'],
        'merchantid': json['merchantid'],
        'attachgroupid': json['attachgroupid'],
        'type': json['type'],
        'verification': json['verification'],
        'transform': json['transform'],
        'dropdownboxgroupid': json['dropdownboxgroupid'],
        'optiongroupid': json['optiongroupid'],
        'attachtype': json['attachtype'],
        'status': json['status'],
        'createTime': json['create_time'],
        'updateTime': json['update_time'],
    };
}

export function AttachItemToJSON(value?: AttachItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'tip': value.tip,
        'sort': value.sort,
        'merchantid': value.merchantid,
        'attachgroupid': value.attachgroupid,
        'type': value.type,
        'verification': value.verification,
        'transform': value.transform,
        'dropdownboxgroupid': value.dropdownboxgroupid,
        'optiongroupid': value.optiongroupid,
        'attachtype': value.attachtype,
        'status': value.status,
        'create_time': value.createTime,
        'update_time': value.updateTime,
    };
}

