import * as React from 'react'
import { View} from '@fower/remax'
import { ProductCard, Tag, Cell, Empty, List, Tabs } from 'react-vant/2x';
import {setConfig} from "@fower/core";
import {getStorageSync, navigate, remConfig} from "@/platform";
import {useQuery} from "react-query";
import {defaultApi, useDefaultApi} from "@/apis/client";
import {EnumRoutes} from "@/consts";
import {ConstTab, PageTab} from "@/components/PageTab";
import {getRedirectPage, InnerRouteVipOrderPage} from "@/app.config";

setConfig(remConfig)

export const getOpenAuthStorage = () => getStorageSync('AUTH_USER')

export default () => {
    const {data} = useQuery(EnumRoutes.VipShopOrders, () => useDefaultApi(defaultApi.postApiV1ShandianSimpleOrderGet)({
        authorization: getOpenAuthStorage()
    }));
    console.log('data', data)
    return (
        <View >

            <Tabs >
                <Tabs.TabPane title="全部">
                    {
                        data?.records?.length === 0 && (
                            <Empty description="暂无内容" />
                        )
                    }
                    <List>
                        {
                            data?.records?.map(record => (
                                <ProductCard
                                    onClick={() => {
                                        navigate({
                                            url: `${getRedirectPage(InnerRouteVipOrderPage)}?id=${record.orderId}`,
                                        })
                                    }}
                                    num={record.buyNum}
                                    price={record.paidMoney}
                                    desc={record.orderStatus}
                                    title={record.title}
                                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                                />
                            ))
                        }
                    </List>
                </Tabs.TabPane>
                <Tabs.TabPane title="权益订单">
                    {
                        data?.records?.length === 0 && (
                            <Empty description="暂无内容" />
                        )
                    }
                    <List>
                        {
                            data?.records?.map(record => (
                                <ProductCard
                                    onClick={() => {
                                        navigate({
                                            url: `${getRedirectPage(InnerRouteVipOrderPage)}?id=${record.orderId}`,
                                        })
                                    }}
                                    num={record.buyNum}
                                    price={record.paidMoney}
                                    desc={record.orderStatus}
                                    title={record.title}
                                    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                                />
                            ))
                        }
                    </List>
                </Tabs.TabPane>
            </Tabs>

            <PageTab selectedTab={ConstTab.Current} />
        </View>
    )
}
