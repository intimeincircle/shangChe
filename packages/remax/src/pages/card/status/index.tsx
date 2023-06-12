import * as React from 'react'
import dayjs from "dayjs";
import { Dialog } from 'react-vant/2x';
import { Text, Image } from "@remax/one";
import copy from 'copy-to-clipboard';
import { EnumeratumShandianOrderAllStatus, ShandianOrder } from 'kun-apis';
import { View} from "@fower/remax";

import {useQuery} from "react-query";
import {defaultApi, useDefaultApi} from "@/apis/client";
import {StarbuckItems} from "@/pages/card";
// @ts-ignore
import styles from "./styles.less"

const  getOrderStatus= (orderStatus?: EnumeratumShandianOrderAllStatus) => {
    switch (orderStatus) {
        case  "CREATED": {
            return "派单中"
        }
        case  "SELL_FINISHED": {
            return "已完成"
        }
        default: {
            return orderStatus
        }
    }
}

export default function OrderStatus1Preparing(props: {shandianOrder ?: ShandianOrder}) {

    const {data: items} = useQuery([StarbuckItems],() => useDefaultApi(defaultApi.getApiV1ShandianItemStarbuckList)({
        query: ''
    }))
    const orderStatusTExt =  getOrderStatus(props.shandianOrder?.orderStatus)
    return (
        <View className={`flex-col ${styles.group_6}`}>
            <View className={`flex-col items-center ${styles.section_1}`}>
                <Text className={`${styles.text_2}`}>派单中,最多仅需</Text>
                <Text className={`${styles.text_3}`}>10分钟</Text>
            </View>
            <View className={`flex-col ${styles.section_2}`}>
                <View className="justify-between">
                    <Text className={`${styles.text_4}`}>Order list and prices</Text>
                    <Image
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/629b62e45a7e3f0310233362/629b62ef51588f0011f75523/16544771860243141153.png"
                        className={`${styles.image_6}`}
                    />
                </View>
                <View className={`flex-col ${styles.group_8}`}>
                    {
                        props?.shandianOrder?.items?.map(item => {
                        const productName = items?.records?.find(item1 => item1.id === item.starbuckItem)?.name
                        return     (
                            <View className={`flex-row ${styles.group_9}`}>
                                <Image
                                    src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/629b62e45a7e3f0310233362/629b62ef51588f0011f75523/16544771860244560498.png"
                                    className={`${styles.image_7}`}
                                />
                                <View row flex={1} w-280 pr={10} justifyContent="space-between" >
                                        <Text className={`${styles.text_5}`}>{productName ?? (item.kfcItem ?? item.starbuckItem)}</Text>
                                        <Text className={`${styles.text_8}`}>X {item.count}</Text>
                                </View>
                            </View>
                        )
                    })}

                    <View className={`justify-between ${styles.group_10}`}>
                        <Text className={`${styles.text_10}`}>下单时间</Text>
                        <View className="flex-row">
                            <Text className={`${styles.text_11}`}>{dayjs(props?.shandianOrder?.createAt).format('YYYY-MM-DD HH:mm')}</Text>
                        </View>
                    </View>

                    <View className={`justify-between ${styles.group_12}`}>
                        <Text className={`${styles.text_13}`}>地址</Text>
                        <View className={`flex-row ${styles.group_13}`}>
                            <Text className={`${styles.text_15}`}>{props?.shandianOrder?.location ?? ''}</Text>
                        </View>
                    </View>

                    <View className={`${styles.divider}`}>{/***/}</View>
                    <View className={`justify-between ${styles.group_14}`}>
                        <Text className={`${styles.text_16}`}>订单状态</Text>
                        <View className={`flex-row ${styles.group_15}`}>
                            <Text className={`${styles.text_17}`}>{orderStatusTExt}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View className={`${styles.group_2}`} pt={13} onTap={() => {
                copy('17688927412')
                Dialog.alert({
                    message: '17688927412',
                    confirmButtonText: "已复制手机号"
                })
            }}>
                <Text className={`${styles.text}`}>如果有疑问? </Text>
                <Text className={`${styles.text_1}`}>联系客服</Text>
            </View>
        </View>
    );
}