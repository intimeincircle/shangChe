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

import { HashLong } from './HashLong';
import { HttpFile } from '../http/http';

export class ReqDeleteKunPinCard {
    'seriesId': HashLong;
    'postId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "seriesId",
            "baseName": "seriesId",
            "type": "HashLong",
            "format": ""
        },
        {
            "name": "postId",
            "baseName": "postId",
            "type": "string",
            "format": "uuid"
        }    ];

    static getAttributeTypeMap() {
        return ReqDeleteKunPinCard.attributeTypeMap;
    }

    public constructor() {
    }
}

