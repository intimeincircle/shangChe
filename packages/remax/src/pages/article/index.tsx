import * as React from 'react'
import { View } from '@fower/remax'

import {navigate, useParams} from "@/platform";
import {getArticle} from "@/apis";
import {useQuery} from "react-query";
import {VideoComponent} from "@/platform/Video";

export default () => {
    const a= useParams() as {series: string,card: string};
    console.log('a useParams article', a)

    const reqBody  =  {
        seriesId: a.series,
        id: a.card
    }
    const {data,isLoading, error} = useQuery([a.series, a.card], () => getArticle(reqBody), {
        enabled: a.series !=null
    })
    //
    // console.log('data', data)
    // console.log('error', error)
    // console.log('isLoading', isLoading)


    return (
        <View>
            {/* <PageHeader /> */}
            <View>
                {
                    isLoading  && (
                        <View>
                        loading
                        </View>
                    )
                }
            </View>
            <VideoComponent src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"/>
            <View onTap={() => {
                navigate({
                    url: '/pages/index/index',
                });
            }}>
                article
            </View>

            <View h-200>
                article
            </View>
        </View>
    )
}
