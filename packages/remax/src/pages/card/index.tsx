import * as React from 'react'
import {useCallback, useEffect} from "react";
import {useQuery} from "react-query";
import { View, Image, Text } from '@fower/remax'
import {navigate, wx} from "@/platform";
import {OrderPage} from "@/app.config";
import {Button, Dialog, Flex, Loading, NavBar} from "react-vant/2x";
import {SkeletonComponent} from "@/components/SkeletonComponent";
import {defaultApi, useDefaultApi, useMutationDefaultApi} from "@/apis/client";
import {useQuery as useRouteQuery} from 'remax';

import {useAppEvent} from "remax/macro";
// @ts-ignore
import styles from './styles.less';
import OrderStatus1Preparing from './status';

export const GET_ORDER = '/api/v1/shandian/taobao/order/get'
export const StarbuckItems = '/api/v1/shandian/taobao/starbuck-items'


export function isWechat() {
    return /MicroMessenger/i.test(window.navigator.userAgent);
}
// 添加图片教程
// http://localhost:3000/#/pages/card/index?uuid=7d587800d02511ecbd18c7a81d75d4a3

export default () => {

    const {uuid} = useRouteQuery<{uuid: string}>();
    const {data: items} = useQuery([StarbuckItems],() => useDefaultApi(defaultApi.getApiV1ShandianItemStarbuckList)({
        query: ''
    }))

    const {data,isLoading} = useQuery([GET_ORDER, uuid],() => useDefaultApi(defaultApi.getApiV1ShandianTaobaoOrderTaskGet)(
        {
            uuid: uuid as string
        }
    ))


    const {mutate: mutateAgentConfig} = useMutationDefaultApi(defaultApi.getApiAuthV1TapirFuwuhaoOpenSign)


    const config = useCallback(() => {
        mutateAgentConfig({
            url: window.location.href
        }, {
            onSuccess: (r) => {
                console.log('r', r)
                if(r.record !=null) {
                    const {appId, radon, sign, timestamp} = r.record
                    // @ts-ignore
                    wx.config({
                        debug: false,
                        appId,
                        // 'wx3232fc8bc7e66250', // 必填，公众号的唯一标识
                        timestamp, // 必填，生成签名的时间戳
                        nonceStr: radon, // 必填，生成签名的随机串
                        signature: sign,// 必填，签名
                        jsApiList: ['checkJsApi', 'chooseWXPay', 'getLocation'] // 必填，需要使用的JS接口列表
                    });

                }
            }
        });
    }, [mutateAgentConfig])

    useEffect(() => {
        config()
    }, [config])

    const order = data?.record?.data
    const productName = items?.records?.find(item => item.id === order?.starbuckItem)?.name ?? order?.starbuckItem
    const order1 = data?.record?.taskOpt

    if(order?.status && order?.status !== "CREATED") {
        return (
            <View>
                <NavBar
                    title={order?.title ?? '点单'}
                />
                <View px={13} pt={13}>
                    <OrderStatus1Preparing shandianOrder={order1} />
                </View>
            </View>
           )
    }

    return (
        <View>
            <NavBar
                title={order?.title ?? '点单'}
            />

            <View className={`flex-row ${styles.group_3}`} px={13} pt={13}>
                <Image
                    src="https://file.xunlianying.vip/starbuck/O1CN014mmECk1TjURlsZPbw_%21%21649292418.jpg_400x400.jpg"
                    className={`${styles.image_3}`}
                />
                <View className={`flex-col ${styles.group_4}`}>
                    <Text className={`${styles.text_5}`}>{productName ?? '咖啡'}</Text>
                    <Text className={`${styles.text_6}`}>代下单，仅需2~5分钟</Text>
                    <View className={`${styles.group_5}`}>
                        <Text className={`${styles.text_8}`}>{order?.title}</Text>
                    </View>
                </View>
            </View>

            <SkeletonComponent loading={isLoading} >
                <View px-15 py-10>
                    <Button round block onClick={() => {
                        if(isWechat()) {
                            wx.getLocation({
                                'type': 'gcj02',
                                success : (res)  => {
                                    const  {latitude} = res
                                    const {longitude} = res
                                    navigate({
                                        url: `${OrderPage}?uuid=${order?.orderId}&lon=${longitude}&lat=${latitude}`
                                    })
                                },
                            });
                        } else {
                            window.navigator.geolocation.getCurrentPosition(pos => {
                                    console.log('posxxxxxxxxx', pos)
                                    navigate({
                                        url: `${OrderPage}?uuid=${order?.orderId}&lon=${pos.coords.longitude}&lat=${pos.coords.latitude}`
                                    })
                                }, (error) => {
                                    console.log('posxxxxxxxxx', error)
                                    throw new Error(String(error.message))
                                    Dialog.alert({
                                        message: '请允许浏览器获取地理位置,并重试',
                                    })
                                },
                                {
                                    timeout: 10 * 1000,
                                    enableHighAccuracy: false,
                                })
                        }
                    }}>
                        选择餐厅
                    </Button>
                </View>
            </SkeletonComponent>
        </View>
    )
}
