import * as React from 'react'
import {Button, View } from '@fower/remax'
import {useMutation, useQuery} from "react-query";
import {defaultApi, useDefaultApi, useMutationDefaultApi} from "@/apis/client";
import {useLocalStorage} from "@/components/Storage";
import {ReqCreateShandianOrder, ShandianItem, ShandianItemCount} from "kun-apis";
import {ChooseLocation} from "@/components/ChooseLocation";
import {getStorageSync} from "@/platform";

export default () => {

    const [value, setValue] = useLocalStorage<ReqCreateShandianOrder>('CARD', {
    })


    const {data} = useQuery(['query-items'], () => useDefaultApi(defaultApi.getApiV1ShandianItemStarbuckList)(
        {
            query: "",
        }));

    console.log('data', data)
    console.log('data', value)

    const orderMuation = useMutationDefaultApi(defaultApi.postApiV1ShandianItemOrderCreate)

    return (
        <View>
            <View h-200>
                <Button onTap={() => {
                    orderMuation.mutate({
                        authorization: getStorageSync("AUTH"),
                        reqCreateShandianOrder: value,
                    }, {
                        onSuccess: (data1) => {
                            console.log('data', data1)
                        }
                    })
                }}>
                    xxxxxxxxxxxxxxxxxxx1
                 </Button>

                {
                    JSON.stringify(value)
                }

                 <ChooseLocation/>
                items
                {
                    (data?.records)?.map((r) => (
                        <div>
                            <Button onTap={() =>{
                                const item: ShandianItemCount[] = value?.items ?? []
                                const r333 = r;
                                const addd: ShandianItem = r
                                const id1 = r.id
                                const itemnew: ShandianItemCount = {
                                    brandEnum:r.brandId,
                                    starbuckItem: r.id,
                                    count: 1
                                }
                                setValue({
                                    ...value,
                                    items: item.concat(itemnew)
                                })
                            }}>Add to Cart </Button>

                            <Button>
                                Goto Choose Location
                            </Button>

                            <Button onTap={() =>{
                                setValue({
                                    name: 'b'
                                })
                            }}>Add</Button>
                            {r.name}
                            {r.name}
                        </div>
                    ))
                }
                {JSON.stringify(data)}
            </View>
        </View>
    )
}
