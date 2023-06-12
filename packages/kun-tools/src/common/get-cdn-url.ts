import {WebConfig} from "./web-config";

export function getCdnUrl (url: string): string {
    return `${WebConfig.cdnUrl}/${url}`
}