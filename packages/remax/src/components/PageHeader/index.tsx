import { View } from "@fower/remax";
import {getRem, navigate} from "@/platform";
import {FC} from "react";
import * as React from "react"
import {navigateBack} from "@remax/web";
import {IndexPage} from "@/app.config";

export const PageHeader: FC = () => {
    const handleBack= async () => {
        await navigateBack()
    }

    const navigateHome= async () => {
        console.log('home');
        navigate({
            url: IndexPage
        })
    }

    return (
        <View alignItems="center" justifyContent="space-between" w-375 h-52 pl-25 pr-25 style={{
            backgroundColor: 'white'
        }}>
            <View w-40 h-40 onTap={() => {
                    handleBack();
                }} />

            <View w-40 h-40 onTap={() => {
                navigateHome();
            }} />
        </View>
    )
}
