import { View } from "@fower/remax";
import * as React from "react";
import {FC} from "react";
import {composeAtom} from "@fower/core";
import {getRem} from "@/platform";
import {ChatPage, CurrentPage, getRedirectPage, IndexPage, InnerRouteVipOrdersPage, ProfilePage} from "@/app.config";
import {redirectTo} from "@remax/one";
import { FriendsO, HomeO, Search, SettingO } from '@react-vant/icons';
import { Tabbar } from "react-vant/2x";

const Rsearch = () => <Search />
const RSetting = () => <SettingO />

composeAtom('formInput', {
    bg: 'white',
    rounded: 65,
    shadowGigantic: true,
    shadow: 'lg',
})

const Tab: FC<{selected: boolean, type: string, name: string}> = ({selected, type, name}) => (
    <View mt-8 red500={selected} >{name}</View>
)

export enum ConstTab {
    Home='Home',
    Chat='Chat',
    Current='Current',
    Profile='Profile',
}

export const PageTab: FC<{selectedTab: ConstTab}> = ({selectedTab: tab}) => {

    const onNavigatePage = async (page: ConstTab) => {
        console.log('page', page)
        switch (page) {
            case ConstTab.Home: {
                await redirectTo({
                    url: IndexPage
                })
                break;
            }
            case ConstTab.Chat: {
                    await redirectTo({
                    url: ChatPage
                })
                break;
            }
            case ConstTab.Profile: {
                console.log('ConstTab.Profile', ConstTab.Profile)
                await redirectTo({
                    url: ProfilePage
                })
                break;
            }

            case ConstTab.Current: {
                await redirectTo({
                    url: getRedirectPage(InnerRouteVipOrdersPage)
                })
                break;
            }
            default: {
                break;
            }
        }

    }

    return (
        <View  style={{
            backgroundColor: 'white',
            position: "fixed",
            width:"100%",
            bottom:"0"
        }}  pl-37 pr-27 row alignItems="center" justifyContent="space-between">

            <Tabbar value={tab} onChange={(v) => onNavigatePage(v as ConstTab)}>
                <Tabbar.Item name={ConstTab.Chat} icon={Rsearch}>搜索</Tabbar.Item>

                <Tabbar.Item name={ConstTab.Current} icon={Rsearch}>订单</Tabbar.Item>

                <Tabbar.Item name={ConstTab.Profile} icon={RSetting}>设置</Tabbar.Item>
            </Tabbar>

            {/* <View column alignItems="center" justifyContent="center" onTap={() => onNavigatePage(ConstTab.Home)}> */}
            {/*    <Tab selected={tab ===ConstTab.Home}  type="settings" name="Home" /> */}
            {/* </View> */}

            {/* <View column alignItems="center" justifyContent="center" onTap={() => onNavigatePage(ConstTab.Current)}> */}
            {/*    <Tab selected={tab ===ConstTab.Current}  type="coffee" name="Current" /> */}
            {/* </View> */}

            {/* <View column alignItems="center" justifyContent="center" onTap={() => onNavigatePage(ConstTab.Chat)}> */}
            {/*    <Tab selected={tab ===ConstTab.Chat}  type="comment" name="Chat" /> */}
            {/* </View> */}

            {/* <View column alignItems="center" justifyContent="center" onTap={() => onNavigatePage(ConstTab.Profile)}> */}
            {/*    <Tab selected={tab ===ConstTab.Profile}  type="settings" name="Mine" /> */}
            {/* </View> */}
        </View>
    )
}
