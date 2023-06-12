import * as React from 'react'
import {useCallback, useEffect, useState} from "react";
import {StarbuckStore} from "kun-apis/dist/models/StarbuckStore";
import {Button, Flex, Loading, Toast, Checkbox} from 'react-vant/2x';
import { View, Text } from '@fower/remax'
import {defaultApi, useDefaultApi, useMutationDefaultApi} from "@/apis/client";
import {useNativeEffect, useQuery as useRouteQuery} from 'remax';
import {useQuery} from "react-query";
import {getIp} from "@/apis";
import {navigate} from "@/platform";
import {getRedirectPage, InnerCardPage} from "@/app.config";
import {Dialog} from "react-vant";
// @ts-ignore
import styles from "./styles.less"


const geoEnabled = (): boolean => !(!window.navigator || !window.navigator.geolocation)


export default () => {
    const {uuid, lat, lon} = useRouteQuery<{uuid: string, lat?:string, lon?: string}>();

    const [loc, setLoc] = useState<{
        lon: string
        lat: string
    }>({
        lon: lon ?? '',
        lat: lat ?? ''
    })

    const {data: storesData, isFetching} = useQuery(['xx', lat, lon], () => defaultApi.getApiV1OrderStarbuckSearch({
        lon: lon ?? '',
        lat: lat?? ''
    }), {
        enabled: lon != null && lat !=null,
        staleTime: 5 * 1000 * 60,
        cacheTime: 5 * 1000 * 60,
    })

    useEffect(()  => {
        window.navigator.geolocation.getCurrentPosition(pos => {
                console.log('posxxxxxxxxx', pos)
            }, (error) => {
                console.log('posxxxxxxxxx', error)
            }
        )
    }, [])

    useNativeEffect(()  => {
        window.navigator.geolocation.getCurrentPosition(pos => {
            console.log('posxxxxxxxxx', pos)
        }, (error) => {
                console.log('posxxxxxxxxx', error)
            }
        )
    })

    const orderMuation = useMutationDefaultApi( defaultApi.postApiV1ShandianAnonymousItemOrderCreate)

    const {data,isLoading} = useQuery(['card', '1xxxxxxxxxxxx'],() => useDefaultApi(defaultApi.getApiV1ShandianTaobaoOrderGet)(
        {
            uuid
        }
    ))

    const {data: ipData} = useQuery(['ip'],() => getIp())

    const [visible, setVisible] = useState(false);

    const [store, setStore] = useState<StarbuckStore>()
    const handleStartOrder = useCallback(() => {
        if(!store) {
            console.log('store', store)
            return
        }
                    orderMuation.mutateAsync({
                        reqCreateShandianOrder:{
                            paidOrderId:  uuid,
                            items: [
                                {
                                    'brandEnum': "STARBUCK",
                                    'starbuckItem': data?.record?.starbuckItem,
                                    'count': 1,
                                }
                            ],
                            location: {
                                'cityCode':  20,
                                'storeId': Number(store.storeNumber),
                                'storeName': store.name,
                                'storeAddress': store.address.streetAddressLine1 + store.address.streetAddressLine2
                            }
                        },
                    }, {
                        onSuccess: () => {
                            console.log('eeeeeeeeeeeee')
                            Toast.info({
                                message: '提交成功',
                            })

                            navigate({
                                url: `${getRedirectPage(InnerCardPage)}?uuid=${uuid}`
                            })
                        }
                    })

                },  [data?.record?.starbuckItem, orderMuation, store, uuid])

    const a: StarbuckStore[] = [
        {

            storeNumber: 1,
            name: '横沙',
        },
        {

            storeNumber: 2,
            name: '横沙1',
        }
    ] as unknown as StarbuckStore[]

    return (
        <View>
            <View className={`flex-col ${styles.group_2}`} px={20} pt={20}>
                <View className="flex-col items-center">
                    <Text className={`${styles.text}`}>请确认</Text>
                    <Text className={`${styles.text_1}`}>是哪家店?</Text>
                </View>
                <View className={`flex-col ${styles.group_4}`}>
                    <Text className={`${styles.text_2}`}>
                        如果下面没有你想要下单的点，请尝试文字搜索
                    </Text>

                    {
                        isFetching && (
                            <View pt={12}>
                                <Flex justify="center" >
                                    <Loading type="ball" />
                                </Flex>
                            </View>
                        )
                    }

                    <View className={`flex-col ${styles.list}`}>
                        {storesData?.record?.data?.map((item, i) => (
                            <View  mb={16}
                                className={`${item.storeNumber === store?.storeNumber ? 'selected': ""} justify-between ${styles['list-item']}`} key={i} onTap={() => {
                                      setStore(item)
                                }}>
                                <View className="flex-col items-start">
                                    <Text className={`${styles.text_3}`}>{item.name}</Text>
                                    <Text w-240 className={`rv-ellipsis ${styles.text_5}`}>{item.address?.streetAddressLine3}</Text>
                                </View>

                                <Checkbox
                                    checked={item.storeNumber === store?.storeNumber}
                                    className={`${styles.image_5}`}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </View>


            <Dialog
                overlay={false}
                className={styles.orderModal}
                visible={orderMuation.isLoading}
                showCancelButton={false}
                showConfirmButton={false}
            >
                <View flex column justifyContent="center" p={12} alignItems="center" w-80 h-80>
                    <Loading />

                    <View pt={4}>
                        <Text white>
                            加载中...
                        </Text>
                    </View>
                </View>
            </Dialog>

            <View  style={{
                backgroundColor: 'white',
                position: "fixed",
                width:"100%",
                bottom:"0"
            }}  row alignItems="center" justifyContent="space-between">
                <View px-20 pb-13 w-375 pt-5>
                    <Button type="primary" block round onClick={handleStartOrder}>
                        提交
                    </Button>
                </View>
            </View>
        </View>
    )
}
