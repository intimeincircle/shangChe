import * as React from 'react'
import { View } from '@fower/remax'
import {getStorageSync, navigate, wx} from "@/platform";
import {CardPage} from "@/app.config";
import {Button, Card, Tabs} from "react-vant/2x";
import {useState} from "react";
import {useQuery} from "react-query";
import {SkeletonComponent} from "@/components/SkeletonComponent";
import {defaultApi, useDefaultApi, useMutationDefaultApi} from "@/apis/client";
import {EnumeratumStarbuckOrderPaidStatus} from "kun-apis";
import {checkIfSuccess} from "kun-shared/built/apis/check-if-success";
import { useNativeEffect } from 'remax';


export default () => {

    const {mutate} = useMutationDefaultApi(defaultApi.getApiAuthV1TapirFuwuhaoOpenSign)

    const {mutate: mutateStart} = useMutationDefaultApi(defaultApi.postApiV1ShandianShandianPaymentStart)

    useNativeEffect(() => {
        mutate({
            url: window.location.href
        }, {
            onSuccess: (r) => {
                console.log('r', r)
                if(r.record !=null) {
                    const {appId, radon, sign, timestamp, url} = r.record

                    // @ts-ignore
                    wx.ready(() => {
                        console.log('xxxxxxx');
                        mutateStart({
                            authorization: getStorageSync('AUTH'),
                            createPaymentHistory: {
                                money: 0.01,
                                channelId: 70,
                                userId: 'aea8c6cd5f5e8126b614edcd1cfe8a8e',
                                seriesId: 1,
                                createAt: (new Date()).getMilliseconds(),
                                title: '拿铁开封'
                            }
                        })
                    })

                    // @ts-ignore
                    wx.config({
                        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
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

    const [activeKey, setActiveKey] = useState<EnumeratumStarbuckOrderPaidStatus|undefined>('CREATED')

    console.log('activateKey', activeKey)
    console.log('activateKey', activeKey)
    console.log('activateKey', typeof(activeKey));
    const {data,isLoading} = useQuery(['getApiV1ShandianItemTaobaoListByStatus', activeKey],() => useDefaultApi(defaultApi.getApiV1ShandianItemTaobaoListByStatus)(
        {
            authorization: getStorageSync<string>('AUTH'),
            status: activeKey ==null ? undefined : activeKey,
        }
    ))

    const tabs4 = [
        {
            key: 'CREATED',
            title: 'Current',
        },
        {
            key: undefined,
            title: 'All',
        },
    ];

    return (
        <View>

            <View h-200>
                <Tabs
                    // fixed
                    // onTabClick={({ key }) => {
                    //     setActiveKey(key)
                    // }}
                    // activeKey={activeKey}
                >
                    {/* {tabs4.map(tab => ( */}
                    {/*    <TabContent key={tab.key} tab={tab.title}> */}
                    {/*        <Card key={tab.key}> */}
                    {/*            <View>{`${tab.title} content`}</View> */}
                    {/*        </Card> */}
                    {/*    </TabContent> */}
                    {/* ))} */}
                </Tabs>
            </View>



            <View onTap={()=> {
                mutateStart({
                    authorization: getStorageSync('AUTH_USER'),
                    createPaymentHistory: {
                        money: 0.01,
                        channelId: 70,
                        userId: 'aea8c6cd5f5e8126b614edcd1cfe8a8e',
                        seriesId: 1,
                        createAt: (new Date()).getMilliseconds(),
                        title: '拿铁开封'
                    }
                }, {
                    onSuccess: (r) => {
                        const {record} = r;
                        if(checkIfSuccess(r) && record !=null) {
                            // @ts-ignore
                            wx.chooseWXPay({
                                timestamp: record.timeStamp,
                                nonceStr: record.nonceStr,
                                package: record._package,
                                signType: record.signType,
                                // 'SHA1' | 'MD5'
                                paySign: record.paySign,
                            })
                        }
                    }
                })
                mutateStart({
                    authorization: getStorageSync('AUTH'),
                    createPaymentHistory: {
                        money: 0.01,
                        channelId: 70,
                        userId: 'aea8c6cd5f5e8126b614edcd1cfe8a8e',
                        seriesId: 1,
                        createAt: (new Date()).getMilliseconds(),
                        title: '拿铁开封'
                    }
                }, {
                    onSuccess: (r) => {
                        const {record} = r;
                        if(checkIfSuccess(r) && record !=null) {

                            // 'timeStamp': number;
                            // 'appId': string;
                            // 'nonceStr': string;
                            // '_package': string;
                            // 'paySign': string;
                            // 'signType': string;
                            // 'orderId': HashLong;
                            // @ts-ignore
                            wx.chooseWXPay({
                                timestamp: record.timeStamp,
                                nonceStr: record.nonceStr,
                                package: record._package,
                                signType: record.signType,
                                // 'SHA1' | 'MD5'
                                paySign: record.paySign
                            })
                        }
                    }
                })
            }}>
                <Button>View button
                </Button>
                </View>


            <Button onClick={()=> {
                mutateStart({
                    authorization: getStorageSync('AUTH_USER'),
                    createPaymentHistory: {
                        money: 0.01,
                        channelId: 70,
                        userId: 'aea8c6cd5f5e8126b614edcd1cfe8a8e',
                        seriesId: 1,
                        createAt: (new Date()).getMilliseconds(),
                        title: '拿铁开封'
                    }
                }, {
                    onSuccess: (r) => {
                        const {record} = r;
                        if(checkIfSuccess(r) && record !=null) {
                            // @ts-ignore
                            wx.chooseWXPay({
                                timestamp: record.timeStamp,
                                nonceStr: record.nonceStr,
                                package: record._package,
                                signType: record.signType,
                                // 'SHA1' | 'MD5'
                                paySign: record.paySign,
                            })
                        }
                    }
                })
                mutateStart({
                    authorization: getStorageSync('AUTH'),
                    createPaymentHistory: {
                        money: 0.01,
                        channelId: 70,
                        userId: 'aea8c6cd5f5e8126b614edcd1cfe8a8e',
                        seriesId: 1,
                        createAt: (new Date()).getMilliseconds(),
                        title: '拿铁开封'
                    }
                }, {
                    onSuccess: (r) => {
                        const {record} = r;
                        if(checkIfSuccess(r) && record !=null) {

                            // 'timeStamp': number;
                            // 'appId': string;
                            // 'nonceStr': string;
                            // '_package': string;
                            // 'paySign': string;
                            // 'signType': string;
                            // 'orderId': HashLong;
                            // @ts-ignore
                            wx.chooseWXPay({
                                timestamp: record.timeStamp,
                                nonceStr: record.nonceStr,
                                package: record._package,
                                signType: record.signType,
                                // 'SHA1' | 'MD5'
                                paySign: record.paySign
                            })
                        }
                    }
                })
            }}>butotn button</Button>
            <View>
                xxxxxxxxx
            </View>
            <Button onClick={()=> {
                mutateStart({
                    authorization: getStorageSync('AUTH_USER'),
                    createPaymentHistory: {
                        money: 0.01,
                        channelId: 70,
                        userId: 'aea8c6cd5f5e8126b614edcd1cfe8a8e',
                        seriesId: 1,
                        createAt: (new Date()).getMilliseconds(),
                        title: '拿铁开封'
                    }
                })
            }}>button</Button>

            <SkeletonComponent loading={isLoading} >
                <>
                    {
                        (data?.records ?? []).map(r => (
                            <View onTap={ ()=> {
                                navigate({
                                    url: `${CardPage}?uuid=${r.orderId}`
                                });
                            }}>
                                {`${r?.status  }`}
                                {`${r?.title  }`}
                            </View>
                        ))
                    }
                </>
            </SkeletonComponent>
        </View>
    )
}
