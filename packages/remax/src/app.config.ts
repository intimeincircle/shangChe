import {AppConfig as WechatAppConfig} from 'remax/wechat';
import {AppConfig as AliAppConfig} from 'remax/ali';
import {AppConfig as ToutiaoAppConfig} from 'remax/toutiao';

export const IndexPage = '/pages/index/index'
export const ChatPage = '/pages/chat/index'
export const ProfilePage = '/pages/profile/index'
export const SettingPage = '/pages/setting/index'
export const LoginPage = '/pages/login/index'
export const CurrentPage = '/pages/current/index'
export const ArticlePage = '/pages/article/index'
export const CreatedSeriesPage = '/pages/created_series/index'
export const DirectChatPage = '/pages/direct/index'
export const OrdersPage = '/pages/orders/index'
export const OrderPage = '/pages/order/index'
export const TaskPage = '/pages/task/index'
export const CardsPage = '/pages/cards/index'
export const CardPage = '/pages/card/index'
export const ItemsPage = '/pages/items/index'
export const VipItemsPage = '/pages/vip-items/index'

export const InnerCardPage = 'pages/card/index'
export const InnerRouteVipItemsPage = 'pages/vip-items/index'
export const InnerRouteVipItemPage = 'pages/vip-item/index'
export const InnerRoutePageT = 'pages/t/index'
export const InnerRouteVipOrdersPage = 'pages/vip-orders/index'
export const InnerRouteVipOrderPage = 'pages/vip-order/index'

type RoutePages = typeof InnerRouteVipItemsPage | typeof InnerRouteVipItemPage | typeof InnerRouteVipOrdersPage | typeof InnerRouteVipOrderPage | typeof InnerCardPage

export const getRedirectPage = (data: RoutePages ): string => `/${data}`

const pages = [
    InnerRouteVipItemsPage,
    InnerRouteVipItemPage,
    InnerRouteVipOrdersPage,
    InnerRouteVipOrderPage,
    'pages/items/index',
    'pages/index/index',
    'pages/t/index',
    'pages/article/index',
    'pages/direct/index',
    'pages/order/index',
    'pages/card/index',
    'pages/cards/index',
    'pages/task/index',
    'pages/orders/index',
    'pages/tall/index',
    'pages/created_series/index',
    'pages/setting/index',
    'pages/about/index',
    'pages/current/index',
    'pages/login/index',
    'pages/subscribed/index',
    'pages/chat/index',
    'pages/profile/index'];

const color = '#282c34';

const title = 'KUN'

export const wechat: WechatAppConfig = {
    pages,
    window: {
        navigationBarBackgroundColor: color,
        navigationBarTitleText: title,
    },
};

export const ali: AliAppConfig = {
    pages,
    window: {
        defaultTitle: title,
        titleBarColor: color,
    },
};

export const toutiao: ToutiaoAppConfig = {
    pages,
    window: {
        navigationBarTitleText: title,
        navigationBarBackgroundColor: color,
    },
};

export const web: unknown = {
    pages,
    title,
    window: {
        // 页面默认标题
        defaultTitle: 'Remax Web Template',
        // 是否全局开启下拉刷新
        pullRefresh: false,
        // 触底滚动的默认距离，单位 px
        reachBottomOffset: 50,
    },
};
