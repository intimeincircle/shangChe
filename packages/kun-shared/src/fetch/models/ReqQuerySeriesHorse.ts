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
    ConstantChargeType,
    ConstantChargeTypeFromJSON,
    ConstantChargeTypeFromJSONTyped,
    ConstantChargeTypeToJSON,
} from './ConstantChargeType';
import {
    HorseSeriesSortType,
    HorseSeriesSortTypeFromJSON,
    HorseSeriesSortTypeFromJSONTyped,
    HorseSeriesSortTypeToJSON,
} from './HorseSeriesSortType';

/**
 * 
 * @export
 * @interface ReqQuerySeriesHorse
 */
export interface ReqQuerySeriesHorse {
    /**
     * 
     * @type {ConstantChargeType}
     * @memberof ReqQuerySeriesHorse
     */
    chargeType?: ConstantChargeType;
    /**
     * 
     * @type {HorseSeriesSortType}
     * @memberof ReqQuerySeriesHorse
     */
    seriesSortType?: HorseSeriesSortType;
    /**
     * 
     * @type {number}
     * @memberof ReqQuerySeriesHorse
     */
    categoryId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReqQuerySeriesHorse
     */
    subCategoryId?: number;
    /**
     * 
     * @type {number}
     * @memberof ReqQuerySeriesHorse
     */
    pageMark?: number;
    /**
     * 
     * @type {number}
     * @memberof ReqQuerySeriesHorse
     */
    pageSize?: number;
}

export function ReqQuerySeriesHorseFromJSON(json: any): ReqQuerySeriesHorse {
    return ReqQuerySeriesHorseFromJSONTyped(json, false);
}

export function ReqQuerySeriesHorseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReqQuerySeriesHorse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chargeType': !exists(json, 'chargeType') ? undefined : ConstantChargeTypeFromJSON(json['chargeType']),
        'seriesSortType': !exists(json, 'seriesSortType') ? undefined : HorseSeriesSortTypeFromJSON(json['seriesSortType']),
        'categoryId': !exists(json, 'categoryId') ? undefined : json['categoryId'],
        'subCategoryId': !exists(json, 'subCategoryId') ? undefined : json['subCategoryId'],
        'pageMark': !exists(json, 'pageMark') ? undefined : json['pageMark'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
    };
}

export function ReqQuerySeriesHorseToJSON(value?: ReqQuerySeriesHorse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chargeType': ConstantChargeTypeToJSON(value.chargeType),
        'seriesSortType': HorseSeriesSortTypeToJSON(value.seriesSortType),
        'categoryId': value.categoryId,
        'subCategoryId': value.subCategoryId,
        'pageMark': value.pageMark,
        'pageSize': value.pageSize,
    };
}

