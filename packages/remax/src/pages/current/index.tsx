import * as React from 'react'
import { View } from '@fower/remax'
import {ConstTab, PageTab} from "@/components/PageTab";
import {useQuery} from "react-query";
import {Loading} from "react-vant/2x";
import {getCurrentLearningList} from "@/apis";
import {navigate} from "@/platform";
import {ArticlePage} from "@/app.config";
import {usePageEvent} from "@remax/runtime";

export default () => {

    const {data, isLoading, error} = useQuery('query',  () => getCurrentLearningList({}))

    console.log('data', data)
    console.log('data', error)
    console.log('data', isLoading)

    usePageEvent('onLoad', (e) => {
        console.log('xxxxxxxxxxxxx',e);
    });

    return (
        <View>
            {
                data != null && (
                    <View>
                        {data.records.map(r => (
                            <View key={r.cardId} onTap={() => {
                                navigate({
                                    url:  `${ArticlePage}?series=${r.seriesId}&card=${r.cardId}`
                                })
                            }}>
                                {
                                    r.title
                                }
                            </View>
                        ))}
                        curren
                    </View>
                )
            }
            <PageTab selectedTab={ConstTab.Current} />
        </View>
    )
}
