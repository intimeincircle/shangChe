import * as React from 'react'
import { View } from '@fower/remax'
import {getStorageSync} from "@/platform";
import {Button, Form} from "react-vant/2x";
import {SkeletonComponent} from "@/components/SkeletonComponent";
import {defaultApi, useDefaultApi, useMutationDefaultApi} from "@/apis/client";
import {useQuery as useRouteQuery} from 'remax';
import {useQuery} from "react-query";
import {checkIfSuccess} from "kun-shared/built/apis/check-if-success";
import {getIp} from "@/apis";

export default () => {
    const {id} = useRouteQuery<{id: string}>();

    const orderMuation = useMutationDefaultApi(defaultApi.postApiV1ShandianItemOrderDelivery)

    const {data,isLoading} = useQuery(['card', '1'],() => useDefaultApi(defaultApi.getApiV1ShandianShandianOrderGet)(
        {
            id: Number(id)
        }
    ))

    const {data: ipData} = useQuery(['ip'],() => getIp(), {
        staleTime: Infinity,
        cacheTime: Infinity
    })

    console.log('ipData', ipData);
    console.log('ipData', ipData);

    const handleFinish = (values: any) => {
        console.log('values', values);
        orderMuation.mutate({
            authorization: getStorageSync('AUTH'),
            reqAddDeliverMessage: {
                orderId: Number(id),
                remark: values.remark
            }
        }, {
            onSuccess: (e) => {
                if(checkIfSuccess(e)) {
                    console.log('e',e);
                }
            },
        })
    };

    return (
        <View>
            <View onTap={() => {
                console.log('error')
            }}>
                status: {data?.record?.orderStatus}
            </View>

            <View onTap={() => {
                console.log('error')
            }}>
                取餐号: {data?.record?.remark ?? '空'}
            </View>

            <Form onFinish={handleFinish}>
                <Form.Item
                    noStyle
                    name="remark"
                >
                    {/* <Cell label="input" placeholder="Please enter" border={false} /> */}
                </Form.Item>

                <Form.Item noStyle style={{ marginTop: 20, padding: '0 20px' }}>
                    <Button type="primary" size="large" >
                        Login
                    </Button>
                </Form.Item>
            </Form>
            <SkeletonComponent loading={isLoading} >
                <>
                    {JSON.stringify(data)}
                </>
            </SkeletonComponent>
        </View>
    )
}
