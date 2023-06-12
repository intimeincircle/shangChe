import * as React from 'react'
import { View } from '@fower/remax'
import {getStorageSync, navigate} from "@/platform";
import {CreatedSeriesPage, TaskPage} from "@/app.config";
import {Card, Tabs} from "react-vant/2x";

import {useState} from "react";
import {useQuery} from "react-query";
import {SkeletonComponent} from "@/components/SkeletonComponent";
import {defaultApi} from "@/apis/client";
import {EnumeratumShandianOrderAllStatus} from "kun-apis";

export default () => {

    const [activeKey, setActiveKey] = useState<EnumeratumShandianOrderAllStatus>('CREATED')

    const {data,isLoading} = useQuery(['getApiV1ShandianItemOrderListByStatus', activeKey],() => defaultApi.getApiV1ShandianItemOrderListByStatus(
        {
            authorization: getStorageSync<string>('AUTH'),
            status: activeKey
        }
    ))

    const tabs4 = [
        {
            key: 'CREATED',
            title: 'Current',
        },
        {
            key: 'SELL_FINISHED',
            title: 'All',
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

            <View h-200>
                {/* <Tabs */}
                {/*    // fixed */}
                {/*    onTabClick={({ key }) => setActiveKey(key)} */}
                {/*    activeKey={activeKey} */}
                {/* > */}
                {/*    {tabs4.map(tab => ( */}
                {/*        <TabContent key={tab.key} tab={tab.title}> */}
                {/*            <Card key={tab.key}> */}
                {/*                <View>{`${tab.title} content`}</View> */}
                {/*            </Card> */}
                {/*        </TabContent> */}
                {/*    ))} */}
                {/* </Tabs> */}
            </View>
            <SkeletonComponent loading={isLoading} >
                <>
                    {
                        (data?.records ?? []).map(r => (
                            <View onTap={ ()=> {
                                navigate({
                                    url: `${TaskPage}?id=${r.id}`
                                });
                            }}>
                                {`${r?.id  }`}
                                {`${r?.location  }`}
                            </View>
                        ))
                    }
                </>
            </SkeletonComponent>
        </View>
    )
}
