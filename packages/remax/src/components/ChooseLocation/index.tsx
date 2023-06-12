import React, {useState} from "react";
import {Button} from "react-vant/2x";
import {getLocation, getStorageSync} from "@/platform";
import {View} from "@remax/one";
import {defaultApi, useMutationDefaultApi} from "@/apis/client";
import {checkIfSuccess} from "kun-shared/built/apis/check-if-success";
import {ReqCreateShandianOrder, StarbuckStore} from "kun-apis";
import {useLocalStorage} from "@/components/Storage";

export const  ChooseLocation = () => {

    const [value, setValue] = useLocalStorage<ReqCreateShandianOrder>('CARD', {
    })

    const {mutate} = useMutationDefaultApi(defaultApi.getApiV1OrderStarbuckSearch)

    const [stores, setStore] = useState<StarbuckStore[]>([])
    return (
        <View>
            <Button onClick={() => {
                getLocation({
                    success: (e) => {
                        // accuracy: 65
                        // errMsg: "getLocation:ok"
                        // horizontalAccuracy: 65
                        const {latitude} = e
                        const {longitude} = e

                        mutate( {
                            lat: latitude as unknown as string,
                            lon: longitude as unknown as string,
                        }, {
                            onSuccess: (data) => {
                                if(checkIfSuccess(data)) {
                                    setStore(data.record?.data ?? [])
                                }
                                console.log('data', data)
                            }
                        })
                    }
                })
            }}>
                定理位置
            </Button>
            <>
                {JSON.stringify(value)}
            </>
            {
                stores.map(item => (
                    <div>
                        {item.name}
                        {item.address?.streetAddressLine3}

                        <Button onClick={() => {
                            setValue({...value,
                                location:  {
                                    cityCode: item.address.postalCode,
                                    storeId: item.storeNumber,
                                    storeName : item.name,
                                    storeAddress: String(item.address)
                                }
                            })
                        }}>
                            setLocation
                        </Button>
                    </div>
                ))
            }
        </View>
    )
}

