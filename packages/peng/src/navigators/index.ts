import {parseUrl} from "kun-tools/built/common/parse-url";
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
import {CONSTANT_ROUTES} from "../routes/CONST_ROUTES";
import {NavigationMessageInfo} from "./NavigationMessageInfo";

export type BackendId = string | number

export  const NavigateMsgInfos: Record<string, {msg: string, button: string, buttonNext ?: string, subMessage?: string}> = {
    [NavigationMessageInfo.Ok]: {
       msg:  '操作成功',
       button: '回到首页',
    },
    [NavigationMessageInfo.CreateCardSuccess]: {
        msg:  'Post已添加',
        button: '继续编写',
        subMessage: '可能需要等待1~3minutes的审核时间',
        buttonNext: '查看'
    },
    [NavigationMessageInfo.CreateSuccess]: {
        msg:  '操作成功',
        button: '查看'
    }
}

// TODO get order url
export function getTagUrl(tag: string): string {
    return `/live/t/${tag}`
}

// TODO get order url
export function getMessageSuccess(msg: NavigationMessageInfo, url: string, urlNext ?: string): string {
    return parseUrl(CONSTANT_ROUTES.MessageSuccess, {
        msg,
        url,
        urlNext,
    })
}

// TODO get order url
export function getOrderUrl(orderId: number): string {
    return parseUrl(CONSTANT_ROUTES.Order, {
        id: orderId
    })
}

export function getNavigateTribe(id: BackendId): string {
    return `/live/s/${id}`;
}

export function getNavigateSeriesHome(id: BackendId): string {
    return `/live/s/${id}`;
}

// TODO get order url
export function getSeriesDetailUrl(id: BackendId): string {
    return parseUrl(CONSTANT_ROUTES.SeriesDetail, {
        id
    })
}

export function goToCollection(userId: string): string {
    // return parseUrl(CONSTANT_ROUTES.Collection, {
    //     userId,
    //     channelId: horseInhabitant.base
    // })
    //
    // Collection : '/live/:channelId/:userId/:msgType',
    return `/live/collection/${horseInhabitant.base}/${userId}`

}

export function goToDirectChat(group: string): string {
   return `/live/direct/${group}`;
}

export function goToUser(userId: string): string {
    return `/live/user/${userId}`
}

// TODO get order url
export function getEditArticleUrl(series: BackendId, card: BackendId): string {
    return parseUrl(CONSTANT_ROUTES.EditPost, {
        series,
        card
    })
}

// TODO get order url
export function getArticleUrl(series: BackendId, card: BackendId): string {
    return `/live/article/${series}/${card}`
}