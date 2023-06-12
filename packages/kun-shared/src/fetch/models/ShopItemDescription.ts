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
    AttachItem,
    AttachItemFromJSON,
    AttachItemFromJSONTyped,
    AttachItemToJSON,
} from './AttachItem';

/**
 * 
 * @export
 * @interface ShopItemDescription
 */
export interface ShopItemDescription {
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    groupname: string;
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    groupimgurl: string;
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    brandname: string;
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    brandimgurl: string;
    /**
     * 
     * @type {number}
     * @memberof ShopItemDescription
     */
    goodsid: number;
    /**
     * 
     * @type {number}
     * @memberof ShopItemDescription
     */
    attachgroupid: number;
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    goodsname: string;
    /**
     * 
     * @type {number}
     * @memberof ShopItemDescription
     */
    goodsgroupid: number;
    /**
     * 
     * @type {number}
     * @memberof ShopItemDescription
     */
    stock: number;
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    goodsprice: string;
    /**
     * 
     * @type {number}
     * @memberof ShopItemDescription
     */
    goodsstatus: number;
    /**
     * 
     * @type {number}
     * @memberof ShopItemDescription
     */
    buyminnum: number;
    /**
     * 
     * @type {number}
     * @memberof ShopItemDescription
     */
    buymaxnum: number;
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    tiptext: string;
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    imgurl: string;
    /**
     * 
     * @type {number}
     * @memberof ShopItemDescription
     */
    goodstype: number;
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    goodstypetext: string;
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    msgboxtip: string;
    /**
     * 
     * @type {string}
     * @memberof ShopItemDescription
     */
    details: string;
    /**
     * 
     * @type {Array<AttachItem>}
     * @memberof ShopItemDescription
     */
    attach?: Array<AttachItem>;
}

export function ShopItemDescriptionFromJSON(json: any): ShopItemDescription {
    return ShopItemDescriptionFromJSONTyped(json, false);
}

export function ShopItemDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShopItemDescription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'groupname': json['groupname'],
        'groupimgurl': json['groupimgurl'],
        'brandname': json['brandname'],
        'brandimgurl': json['brandimgurl'],
        'goodsid': json['goodsid'],
        'attachgroupid': json['attachgroupid'],
        'goodsname': json['goodsname'],
        'goodsgroupid': json['goodsgroupid'],
        'stock': json['stock'],
        'goodsprice': json['goodsprice'],
        'goodsstatus': json['goodsstatus'],
        'buyminnum': json['buyminnum'],
        'buymaxnum': json['buymaxnum'],
        'tiptext': json['tiptext'],
        'imgurl': json['imgurl'],
        'goodstype': json['goodstype'],
        'goodstypetext': json['goodstypetext'],
        'msgboxtip': json['msgboxtip'],
        'details': json['details'],
        'attach': !exists(json, 'attach') ? undefined : ((json['attach'] as Array<any>).map(AttachItemFromJSON)),
    };
}

export function ShopItemDescriptionToJSON(value?: ShopItemDescription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'groupname': value.groupname,
        'groupimgurl': value.groupimgurl,
        'brandname': value.brandname,
        'brandimgurl': value.brandimgurl,
        'goodsid': value.goodsid,
        'attachgroupid': value.attachgroupid,
        'goodsname': value.goodsname,
        'goodsgroupid': value.goodsgroupid,
        'stock': value.stock,
        'goodsprice': value.goodsprice,
        'goodsstatus': value.goodsstatus,
        'buyminnum': value.buyminnum,
        'buymaxnum': value.buymaxnum,
        'tiptext': value.tiptext,
        'imgurl': value.imgurl,
        'goodstype': value.goodstype,
        'goodstypetext': value.goodstypetext,
        'msgboxtip': value.msgboxtip,
        'details': value.details,
        'attach': value.attach === undefined ? undefined : ((value.attach as Array<any>).map(AttachItemToJSON)),
    };
}
