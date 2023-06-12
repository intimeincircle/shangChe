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
 * @interface ReqUpdateSeriesPrice
 */
export interface ReqUpdateSeriesPrice {
    /**
     * 
     * @type {HashLong}
     * @memberof ReqUpdateSeriesPrice
     */
    seriesId: HashLong;
    /**
     * 
     * @type {number}
     * @memberof ReqUpdateSeriesPrice
     */
    price: number;
}

export function ReqUpdateSeriesPriceFromJSON(json: any): ReqUpdateSeriesPrice {
    return ReqUpdateSeriesPriceFromJSONTyped(json, false);
}

export function ReqUpdateSeriesPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqUpdateSeriesPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'seriesId': HashLongFromJSON(json['seriesId']),
        'price': json['price'],
    };
}

export function ReqUpdateSeriesPriceToJSON(value?: ReqUpdateSeriesPrice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'seriesId': HashLongToJSON(value.seriesId),
        'price': value.price,
    };
}
