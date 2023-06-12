/**
 * title
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConstantMSG } from './ConstantMSG';
import { RetMiniAppUserItem } from './RetMiniAppUserItem';
import { HttpFile } from '../http/http';

export class OptionDataRetMiniAppUserItem {
    'code': ConstantMSG;
    'msg': string;
    'record'?: RetMiniAppUserItem;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "ConstantMSG",
            "format": ""
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string",
            "format": ""
        },
        {
            "name": "record",
            "baseName": "record",
            "type": "RetMiniAppUserItem",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OptionDataRetMiniAppUserItem.attributeTypeMap;
    }

    public constructor() {
    }
}
