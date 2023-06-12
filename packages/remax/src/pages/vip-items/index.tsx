import * as React from 'react'
import { View} from '@fower/remax'
import {setConfig} from "@fower/core";

import {navigate, remConfig} from "@/platform";
import {useQuery} from "react-query";
import {defaultApi, useDefaultApi} from "@/apis/client";
import {EnumRoutes} from "@/consts";
import {getRedirectPage, InnerRouteVipItemPage} from "@/app.config";

setConfig(remConfig)

export default () => {
    const {data} = useQuery(EnumRoutes.VipShopGoods, () => useDefaultApi(defaultApi.postApiV1ShandianVipShopGoods)({}));

    console.log('data', data)

    return (
        <View >


            <View onTap={() => {
                navigate({
                    url: `/pages/t/index`,
                })
            }}>ttttt</View>


            <View onTap={() => {
                navigate({
                    url: `/t`,
                })
            }}>ttttt</View>

            <View onTap={() => {
                navigate({
                    url: `/t`,
                })
            }}>ttttt</View>

            <View onTap={() => {
                navigate({
                    url: `/t`,
                })
            }}>ttttt</View>

            <View onTap={() => {
                navigate({
                    url: `/t`,
                })
            }}>ttttt</View>

            <View>
                {
                    data?.records?.map(item => (
                        <View onTap={() => {
                            navigate({
                                url: `${getRedirectPage(InnerRouteVipItemPage)}?id=${item.goodsid}`,
                            })
                        }}>{item.goodsname}</View>
                    ))
                }
            </View>

        </View>
    )
}
