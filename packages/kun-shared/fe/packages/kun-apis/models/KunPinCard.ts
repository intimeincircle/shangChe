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

import { HttpFile } from '../http/http';

export class KunPinCard {
    'channelId': number;
    'seriesId': string;
    'postId': string;
    'cardOrder': number;
    'title': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelId",
            "baseName": "channelId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "seriesId",
            "baseName": "seriesId",
            "type": "string",
            "format": ""
        },
        {
            "name": "postId",
            "baseName": "postId",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardOrder",
            "baseName": "cardOrder",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return KunPinCard.attributeTypeMap;
    }

    public constructor() {
    }
}

