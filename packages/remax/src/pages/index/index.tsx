import * as React from 'react'
import { View} from '@fower/remax'
import {login} from "@/apis/index";
import {setConfig} from "@fower/core";

import {remConfig} from "@/platform";
import {useMutation} from "react-query";
import {ConstTab, PageTab} from "@/components/PageTab";
import {ReqLogin} from "kun-shared/built/v2/api/v2";
import { useAppEvent } from 'remax/macro';
import {usePageEvent} from "@remax/runtime";

setConfig(remConfig)

export default () => {
  const loginMuation = useMutation((body: ReqLogin) => login(body))

    useAppEvent('onShow', () => {
            loginMuation.mutate({
                user_name: 'caedman',
                password: 'caedman',
            }, {
                onSuccess: (e) => {
                    console.log('e', e);
                }
            })
    });

    usePageEvent('onLoad', () => {
        loginMuation.mutate({
            user_name: 'caedman',
            password: 'caedman',
        }, {
            onSuccess: (e) => {
                console.log('e', e);
            }
        })
    });


    return (
        <View >
        <PageTab selectedTab={ConstTab.Home} />
    </View>
  )
}
