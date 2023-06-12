import * as React from 'react'
import {View, Input, Image} from '@fower/remax'
import {FC, useState} from "react";
import {Card, Tabs} from "react-vant/2x";


export const BottomTabs: FC<{url: string}> = ({url}) => {

    const [selectedTab, setSelectedTab] = useState<string>();


    const tabs = [
        {
            key: '0',
            title: 'All',
        },
        {
            key: '1',
            title: 'Missed',
        },
    ];

    const updateKey=(key: string) => {
        setSelectedTab(key)
    }

    return (
        <>
        </>
    )
}
