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

    const mutate = useMutationDefaultApi(defaultApi.postApiV1VipShopOrderStart)

    const [ref, { set, get, getAll, clear, submit }] = hooks.useFormSmart();

    const {data, isLoading} = useQuery([EnumRoutes.VipShopGood, id], () => useDefaultApi(defaultApi.postApiV1ShandianVipShopItemGoodid)({
        goodid: Number(id)
    }), {
        staleTime: 1000 * 60 * 30, // 30minutes
        cacheTime: 1000 * 60 * 30 // 30minutes
    });

    console.log('data', data);
    console.log('data', data);
    console.log('data', data);

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

    const price = data?.record?.goodsdetails?.goodsprice

    const handleFinish = useCallback((values: Record<string, string>) => {
        console.log('values', values)
        const a = Object.entries(values)
        const b = a.sort((r, r1) => {
            console.log('r', r)
            console.log('r', typeof r)
            return Number(r[0]) - Number(r1[0])
        })

        if(!price) {
            return
        }

        mutate.mutate({
            authorization: getStorageSync('AUTH_USER'),
            reqStartVipOrder: {
                'buyNum': 1,
                'goodsid': id,
                'title': data?.record?.goodsdetails?.goodsname ?? 'VIP商品',
                'paidMoney': getConvertVipShopPrice(price),
                'description': data?.record?.goodsdetails?.goodsname ?? '',
                'attachments': b.map(r => r[1])
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
    }, [data?.record?.goodsdetails?.goodsname, id, mutate, price])

    // @ts-ignore
    return (
        <View >
            <NavBar
                title={data?.record?.goodsdetails?.goodsname}
                leftText="返回"
                onClickLeft={() => {
                    navigateBack();
                }}
            />
            {
                data?.record ==null && isLoading && (
                    <Skeleton title />
                )
            }
            {
                data?.record == null && !isLoading && (
                    <Empty description="暂无内容" />
                )
            }
            {
                data?.record != null && !isLoading && (
                    <View>

                        <View px={20} pt={10}>
                            <Typography.Title level={3} className="rv-multi-ellipsis--l2">
                                {
                                    data?.record?.goodsdetails?.goodsname
                                }
                            </Typography.Title>
                            <Interweave content={data?.record?.goodsdetails?.details ?? '正常下单即可，下单前有疑问可直接在公众号留言'} />
                        </View>

                            <View>
                                <Form ref={ref as any}
                                    // footer={
                                    //     <div style={{ margin: '16px 16px 0' }}>
                                    //         <Button round nativeType="submit" type="primary" block>
                                    //             提交
                                    //         </Button>
                                    //     </div>
                                    // }
                                    onFinish={handleFinish}>
                                    {
                                        data?.record?.goodsdetails?.attach?.map((attach, index) => (
                                            <Form.Item key={attach.title}
                                                       name={index.toString()} label={attach.title}>
                                                <Field />
                                            </Form.Item>
                                        ))
                                    }
                                </Form>

                            </View>
                        </View>
                )
            }

            {
                price != null && (
                    <SubmitBar
                        onSubmit={() => {
                            Toast.loading({
                                message: '加载中...',
                                forbidClick: true,
                                loadingType: 'spinner',
                            })
                            submit()
                        }}
                        price={yanToFen(getConvertVipShopPrice(price))}
                        buttonText="提交"
                    />
                )
            }
        </View>
    )
}
