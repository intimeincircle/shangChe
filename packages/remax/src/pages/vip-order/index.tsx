import * as React from 'react'
import { View} from '@fower/remax'
import { navigateBack } from 'remax/one';
import {setConfig} from "@fower/core";
import {NavBar, Toast, Typography, Empty, Flex, Loading} from 'react-vant/2x';
import {remConfig} from "@/platform";
import {useQuery} from "react-query";
import {defaultApi, useDefaultApi} from "@/apis/client";
import {EnumRoutes} from "@/consts";
import {useQuery as useRouteQuery} from "remax";
import {getOpenAuthStorage} from "@/pages/vip-orders";
import Barcode from "react-jsbarcode";
import "./style.less"

setConfig(remConfig)

export default () => {
    const {id} = useRouteQuery<{id: string}>();

    const {data, isFetching} = useQuery([EnumRoutes.VipShopGood, id], () => useDefaultApi(defaultApi.postApiV1ShandianVipShopOrderOrderid)({
        authorization: getOpenAuthStorage(),
        orderId: id
    }), {
        staleTime: 1000 * 60 * 30, // 30minutes
        cacheTime: 1000 * 60 * 30 // 30minutes
    });

    // @ts-ignore
    return (
        <View>
            <NavBar
                title={data?.record?.title}
                leftText="返回"
                onClickLeft={() => {
                    navigateBack();
                }}
            />


            {
                isFetching && (
                    <Flex justify="center">
                        <Loading type="ball" />
                    </Flex>
                )
            }

            {
                data?.record == null && (
                    <Empty description="暂无内容" />
                )
            }

            {
                data?.record != null && (
                    <View px={13}>
                            <Typography.Title level={3}>
                                订单状态
                            </Typography.Title>

                            <Typography.Text>
                                {
                                    data?.record?.orderStatus
                                }
                            </Typography.Text>

                            <Typography.Title level={3}>
                                订单标题
                            </Typography.Title>

                            <Typography.Text>
                                {
                                    data?.record?.title
                                }
                            </Typography.Text>

                        </View>
                )
            }
            <Flex justify="center">
                {
                    data?.record?.cardlists?.map(item => (
                        <Barcode  className="scale"
                            value={item} options={{
                            width: 2
                        }}/>
                    ))
                }
            </Flex>
        </View>
    )
}
