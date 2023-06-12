import * as React from 'react'
import {useCallback, useEffect} from 'react'
import {Interweave} from 'interweave';
import {View} from '@fower/remax'
import {navigateBack} from 'remax/one';
import {setConfig} from "@fower/core";
import {Empty, Field, Form, hooks, NavBar, Notify, Skeleton, SubmitBar, Toast, Typography} from 'react-vant/2x';
import {getStorageSync, navigate, remConfig, wx} from "@/platform";
import {useQuery} from "react-query";
import {defaultApi, useDefaultApi, useMutationDefaultApi} from "@/apis/client";
import {EnumRoutes} from "@/consts";
import {useNativeEffect, useQuery as useRouteQuery} from "remax";
import {VipShopWechatPaymentItem} from "kun-apis";
// import {VipShopWechatPaymentItem} from "kun-apis/dist/models/VipShopWechatPaymentItem";
import {getRedirectPage, InnerRouteVipOrdersPage} from "@/app.config";
import {format} from "mathjs"
import {getConvertVipShopPrice} from "@/pages/chat";


setConfig(remConfig)

export const yanToFen = (data: number) => Number(format(data * 100, {precision: 14}))

export default () => {
    const {id} = useRouteQuery<{id: string}>();

    console.log('id',id)
    const mutate = useMutationDefaultApi(defaultApi.postApiV1VipShopOrderStart)

    const {mutate: mutateAgentConfig} = useMutationDefaultApi(defaultApi.getApiAuthV1TapirFuwuhaoOpenSign)
    const isLoading = false

    const data = {};
    console.log('isL',isLoading)
    console.log('isL',data)
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
                        appId,
                        // 'wx3232fc8bc7e66250', // 必填，公众号的唯一标识
                        timestamp, // 必填，生成签名的时间戳
                        nonceStr: radon, // 必填，生成签名的随机串
                        signature: sign,// 必填，签名
                        jsApiList: ['checkJsApi', 'chooseWXPay'] // 必填，需要使用的JS接口列表
                    });

                }
            }
        });
    }, [mutateAgentConfig])

    useEffect(() => {
        config()
    }, [config])
    // useAppEvent('onShow', config)

    useNativeEffect(() => {
        mutateAgentConfig({
            url: window.location.href
        }, {
            onSuccess: (r) => {
                console.log('r', r)
                if(r.record !=null) {
                    const {appId, radon, sign, timestamp, url} = r.record
                    // @ts-ignore
                    // wx.ready(() => {
                    //     console.log('xxxxxxx');
                    //     // mutateStart({
                    //     //     authorization: getStorageSync('AUTH'),
                    //     //     createPaymentHistory: {
                    //     //         money: 0.01,
                    //     //         channelId: 70,
                    //     //         userId: 'aea8c6cd5f5e8126b614edcd1cfe8a8e',
                    //     //         seriesId: 1,
                    //     //         createAt: (new Date()).getMilliseconds(),
                    //     //         title: '拿铁开封'
                    //     //     }
                    //     // })
                    // })

                    // @ts-ignore
                    wx.config({
                        appId,
                        // 'wx3232fc8bc7e66250', // 必填，公众号的唯一标识
                        timestamp, // 必填，生成签名的时间戳
                        nonceStr: radon, // 必填，生成签名的随机串
                        signature: sign,// 必填，签名
                        jsApiList: ['checkJsApi', 'chooseWXPay'] // 必填，需要使用的JS接口列表
                    });

                }

            }
        });

    }, [])

    const price = 9.9;

    const handleFinish = useCallback((values?: Record<string, string>) => {
        console.log('values', values);
        if(!price) {
            return
        }

        mutate.mutate({
            authorization: getStorageSync('AUTH_USER'),
            reqStartVipOrder: {
                'buyNum': 1,
                'goodsid': '9879',
                'title': "马上训练营-体验1日",
                'paidMoney': getConvertVipShopPrice(price),
                'description': "搞钱特急",
                'attachments': [], //b.map(r => r[1])
            }
        }, {
            onSuccess: (v) => {
                if(v.record != null) {
                    const a1: VipShopWechatPaymentItem = v.record
                    console.log('v', v)
                    // @ts-ignore
                    wx.chooseWXPay({
                        debug: true,
                        timestamp: a1.timeStamp,
                        nonceStr: a1.nonceStr,
                        package: a1._package,
                        signType: a1.signType,
                        paySign: a1.paySign,
                        success:  ()  => {
                            navigate({
                                url: getRedirectPage(InnerRouteVipOrdersPage)
                            })
                        }
                    });
            } else {
                    Notify.show({
                        message: `操作有误: ${v.msg}`
                    })
                }
            },
            onError: (error) => {
                Notify.show({
                    message: `系统错误: ${String(error)}`
                })
            }
        })
    }, [mutate, price])

    // @ts-ignore
    return (
        <View >
            <NavBar
                title="购买"
                leftText="返回"
                onClickLeft={() => {
                    navigateBack();
                }}
            />
                    <View>

                        <View px={20} pt={10}>
                            <Typography.Title level={3} className="rv-multi-ellipsis--l2" />
                            <Interweave content="正常下单即可，下单前有疑问可直接在公众号留言" />
                        </View>

                            <View />
                        </View>
            {
                price != null && (
                    <SubmitBar
                        onSubmit={() => {
                            Toast.loading({
                                message: '加载中...',
                                forbidClick: true,
                                loadingType: 'spinner',
                            })
                            handleFinish()
                        }}
                        price={yanToFen(getConvertVipShopPrice(price))}
                        buttonText="提交"
                    />
                )
            }
        </View>
    )
}
