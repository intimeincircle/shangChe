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
    EnumTemperature,
    EnumTemperatureFromJSON,
    EnumTemperatureFromJSONTyped,
    EnumTemperatureToJSON,
} from './EnumTemperature';
import {
    EnumeratumBrand,
    EnumeratumBrandFromJSON,
    EnumeratumBrandFromJSONTyped,
    EnumeratumBrandToJSON,
} from './EnumeratumBrand';
import {
    EnumeratumCupSize,
    EnumeratumCupSizeFromJSON,
    EnumeratumCupSizeFromJSONTyped,
    EnumeratumCupSizeToJSON,
} from './EnumeratumCupSize';
import {
    EnumeratumStarbuckCat,
    EnumeratumStarbuckCatFromJSON,
    EnumeratumStarbuckCatFromJSONTyped,
    EnumeratumStarbuckCatToJSON,
} from './EnumeratumStarbuckCat';
import {
    EnumeratumStarbuckItem,
    EnumeratumStarbuckItemFromJSON,
    EnumeratumStarbuckItemFromJSONTyped,
    EnumeratumStarbuckItemToJSON,
} from './EnumeratumStarbuckItem';
import {
    EnumeratumTradeWay,
    EnumeratumTradeWayFromJSON,
    EnumeratumTradeWayFromJSONTyped,
    EnumeratumTradeWayToJSON,
} from './EnumeratumTradeWay';

/**
 * 
 * @export
 * @interface ShandianItem
 */
export interface ShandianItem {
    /**
     * 
     * @type {EnumeratumStarbuckItem}
     * @memberof ShandianItem
     */
    id: EnumeratumStarbuckItem;
    /**
     * 
     * @type {string}
     * @memberof ShandianItem
     */
    name: string;
    /**
     * 
     * @type {EnumeratumBrand}
     * @memberof ShandianItem
     */
    brandId: EnumeratumBrand;
    /**
     * 
     * @type {EnumeratumStarbuckCat}
     * @memberof ShandianItem
     */
    categoryId: EnumeratumStarbuckCat;
    /**
     * 
     * @type {number}
     * @memberof ShandianItem
     */
    price: number;
    /**
     * 
     * @type {string}
     * @memberof ShandianItem
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof ShandianItem
     */
    originPrice: number;
    /**
     * 
     * @type {Array<EnumeratumCupSize>}
     * @memberof ShandianItem
     */
    size?: Array<EnumeratumCupSize>;
    /**
     * 
     * @type {Array<EnumTemperature>}
     * @memberof ShandianItem
     */
    temperature?: Array<EnumTemperature>;
    /**
     * 
     * @type {Array<EnumeratumTradeWay>}
     * @memberof ShandianItem
     */
    tradWay?: Array<EnumeratumTradeWay>;
}

export function ShandianItemFromJSON(json: any): ShandianItem {
    return ShandianItemFromJSONTyped(json, false);
}

export function ShandianItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShandianItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': EnumeratumStarbuckItemFromJSON(json['id']),
        'name': json['name'],
        'brandId': EnumeratumBrandFromJSON(json['brandId']),
        'categoryId': EnumeratumStarbuckCatFromJSON(json['categoryId']),
        'price': json['price'],
        'imageUrl': !exists(json, 'imageUrl') ? undefined : json['imageUrl'],
        'originPrice': json['originPrice'],
        'size': !exists(json, 'size') ? undefined : ((json['size'] as Array<any>).map(EnumeratumCupSizeFromJSON)),
        'temperature': !exists(json, 'temperature') ? undefined : ((json['temperature'] as Array<any>).map(EnumTemperatureFromJSON)),
        'tradWay': !exists(json, 'tradWay') ? undefined : ((json['tradWay'] as Array<any>).map(EnumeratumTradeWayFromJSON)),
    };
}

export function ShandianItemToJSON(value?: ShandianItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': EnumeratumStarbuckItemToJSON(value.id),
        'name': value.name,
        'brandId': EnumeratumBrandToJSON(value.brandId),
        'categoryId': EnumeratumStarbuckCatToJSON(value.categoryId),
        'price': value.price,
        'imageUrl': value.imageUrl,
        'originPrice': value.originPrice,
        'size': value.size === undefined ? undefined : ((value.size as Array<any>).map(EnumeratumCupSizeToJSON)),
        'temperature': value.temperature === undefined ? undefined : ((value.temperature as Array<any>).map(EnumTemperatureToJSON)),
        'tradWay': value.tradWay === undefined ? undefined : ((value.tradWay as Array<any>).map(EnumeratumTradeWayToJSON)),
    };
}
