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

import { EnumeratumConstantMsgFormat } from './EnumeratumConstantMsgFormat';
import { HttpFile } from '../http/http';

export class KunMessageReturn {
    'channelId': number;
    'groupId': string;
    'msgId': string;
    'createAt': number;
    'msgType': EnumeratumConstantMsgFormat;
    'fromUser'?: string;
    'fromUserName'?: string;
    'fromUserAvatar'?: string;
    'msgContent'?: string;
    'urlLink'?: string;
    'originContent'?: string;
    'likeCount'?: number;
    'parentMsgId'?: string;
    'parentMsg'?: KunMessageReturn;
    'obsoleted'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "channelId",
            "baseName": "channelId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "groupId",
            "baseName": "groupId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "msgId",
            "baseName": "msgId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "createAt",
            "baseName": "createAt",
            "type": "number",
            "format": ""
        },
        {
            "name": "msgType",
            "baseName": "msgType",
            "type": "EnumeratumConstantMsgFormat",
            "format": ""
        },
        {
            "name": "fromUser",
            "baseName": "fromUser",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "fromUserName",
            "baseName": "fromUserName",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromUserAvatar",
            "baseName": "fromUserAvatar",
            "type": "string",
            "format": ""
        },
        {
            "name": "msgContent",
            "baseName": "msgContent",
            "type": "string",
            "format": ""
        },
        {
            "name": "urlLink",
            "baseName": "urlLink",
            "type": "string",
            "format": ""
        },
        {
            "name": "originContent",
            "baseName": "originContent",
            "type": "string",
            "format": ""
        },
        {
            "name": "likeCount",
            "baseName": "likeCount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "parentMsgId",
            "baseName": "parentMsgId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "parentMsg",
            "baseName": "parentMsg",
            "type": "KunMessageReturn",
            "format": ""
        },
        {
            "name": "obsoleted",
            "baseName": "obsoleted",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return KunMessageReturn.attributeTypeMap;
    }

    public constructor() {
    }
}

