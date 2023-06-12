import * as React from 'react'
import { View } from '@fower/remax'
import {useQuery} from "react-query";
import {getMyChatHistory} from "@/apis";
import {useParams} from "@/platform";
import {ReqByChatHistory} from "kun-shared/built/v2/api/v2";

export default () => {

    const {groupId} = useParams();
    console.log('ReqByChatHistory', groupId)

    const {data, isLoading, error} = useQuery(['query',groupId],  () => getMyChatHistory({
        groupId
    }))

    console.log('data', data)
    console.log('data', error)
    console.log('data', isLoading)

    return (
        <View>
            <View>direct</View>
            {
                (data?.records ?? []).map(r => (
                    <>
                        <View>{r.msgContent}</View>
                        <View>{r.fromUserName}</View>
                    </>
                ))
            }
        </View>
    )
}
