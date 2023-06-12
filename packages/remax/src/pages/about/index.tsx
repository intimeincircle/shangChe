import * as React from 'react'

import { View } from '@fower/remax'
import {useEffect} from "react";
import {login} from "@/apis/index";
import {navigate} from "@/platform";
import {Tabs} from "react-vant/2x";


export default () => (
        <View >
            <View w-750 onTap={() => {
                navigate({
                    url: '/pages/index/index',
                });
            }}>
                about
                about
                about
            </View>

            <View h-200>
                about
            </View>
        </View>
    )
