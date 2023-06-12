import * as React from 'react'
import { View } from '@fower/remax'
import {navigate} from "@/platform";
import {CreatedSeriesPage} from "@/app.config";
import {Card, Tabs} from "react-vant/2x";

import {useState} from "react";
import {useQuery} from "react-query";
import {getMyCreatedSeries} from "@/apis";
import {SkeletonComponent} from "@/components/SkeletonComponent";


export default () => {

    const [activeKey, setActiveKey] = useState('0')

    const {data,isLoading} = useQuery('my_created',() => getMyCreatedSeries({}))

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
                        r.title
                    ))
                }
            </SkeletonComponent>

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
        </View>
    )
}
