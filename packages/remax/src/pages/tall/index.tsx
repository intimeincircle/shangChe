import * as React from 'react'
import { View } from '@fower/remax'
import {navigate} from "@/platform";
import {CreatedSeriesPage} from "@/app.config";
import {Card, Tabs} from "react-vant/2x";

import {useState} from "react";
import {useQuery} from "react-query";
import {SkeletonComponent} from "@/components/SkeletonComponent";
import {getAuthLocalKey} from "kun-tools/built/common/req";
import {defaultApi, useDefaultApi} from "@/apis/client";

export default () => {

    const [activeKey, setActiveKey] = useState('0')

    const {data,isLoading} = useQuery('my_created1',() => useDefaultApi(defaultApi.getApiV1ShandianItemOrderListByStatus)(
        {
            authorization: getAuthLocalKey(),
        }
    ))

    console.log('data', data)

    console.log('isLoading', isLoading)

    const tabs4 = [
        {
            key: '0',
            title: 'All',
        },
        {
            key: '1',
            title: 'Read',
        },
        {
            key: '2',
            title: 'Missed',
        },
    ];

    return (
        <View>
            <View onTap={() => {
                navigate({
                    url: CreatedSeriesPage
                });
            }}>
                created_series
            </View>
            <SkeletonComponent loading={isLoading} >
                {
                    (data?.records ?? []).map(r => (
                        <>
                            {JSON.stringify(data)}
                        </>
                    ))
                }
            </SkeletonComponent>

            <View h-200>
                <Tabs
                >
                    {tabs4.map(tab => (
                            <Card key={tab.key}>
                                <View>{`${tab.title} tall`}</View>


                            </Card>
                    ))}
                </Tabs>
            </View>
        </View>
    )
}
