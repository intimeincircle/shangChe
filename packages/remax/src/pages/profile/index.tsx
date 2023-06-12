import * as React from 'react'
import {View} from '@fower/remax'
import {setStorageSync, useParams} from "@/platform";
import {ConstTab, PageTab} from "@/components/PageTab";
import {defaultApi, useMutationDefaultApi} from "@/apis/client";
import {checkIfSuccess} from "kun-shared/built/apis/check-if-success";
import {usePageEvent} from "@remax/runtime";
import {Cell, Notify, Toast} from 'react-vant/2x';

export const useUserLogin=() => {
    const query = useParams<{code: string}>()
    const {mutate} = useMutationDefaultApi(defaultApi.postApiAuthV1TapirFuwuhaoOpenLogin)

    usePageEvent('onLoad', () => {
        console.log('query', query);
        if(query?.code != null) {
            mutate({
                code: query.code
            }, {
                onSuccess: (x) => {
                    console.log('x', x)
                    if(checkIfSuccess(x)) {
                        setStorageSync('AUTH_USER', x.msg)
                    }else{
                        Notify.show({
                            message: `系统错误: ${x.msg}`
                        })
                    }
                },
                onError: (x) => {
                    Notify.show({
                        type: 'warning',
                        message: `登陆失败，请重试`
                    })
                }
            })
        }
    });
}


export default () => {
    const {mutate} = useMutationDefaultApi(defaultApi.postApiV1TapirMiniAppLogin)
    const {mutate: mutateUserInfo} = useMutationDefaultApi(defaultApi.postApiV1TapirMiniAppUserinfoGet)

    const query = useParams<{code: string}>()
    console.log('query', query);
    useUserLogin()

    return (
        <View >
            <Cell.Group title="关于">
                <Cell title="关于我们" isLink onClick={() => {
                    Toast.info('为你提供美食点单权益')
                }}/>
            </Cell.Group>

            {/* <Image round fit={el} width="100%" height="27vw" src={src} />{' '} */}
            
            {/* <View pl-25 pr-25> */}
            {/*    <Card onTap={() => { */}
            {/*        navigate({ */}
            {/*            url: CardsPage */}
            {/*        }); */}
            {/*    }}> */}
            {/*        <View>Cards</View> */}
            {/*    </Card> */}
            {/* </View> */}
            
            {/* <View pl-25 pr-25> */}
            {/*    <Card onTap={() => { */}
            {/*        navigate({ */}
            {/*            url: getRedirectPage(InnerRouteVipOrdersPage) */}
            {/*        }); */}
            {/*    }}> */}
            {/*        <View>My Vip Orders</View> */}
            {/*    </Card> */}
            {/* </View> */}
            
            {/* <View pl-25 pr-25> */}
            {/*    <Card onTap={() => { */}
            {/*        navigate({ */}
            {/*            url: CreatedSeriesPage */}
            {/*        }); */}
            {/*    }}> */}
            {/*        <View>My Series</View> */}
            {/*    </Card> */}
            {/* </View> */}
            
            {/* <View pl-15 pr-15 onTap={() => { */}
            {/*    navigate({ */}
            {/*        url:  LoginPage */}
            {/*    }); */}
            {/* }} */}
            {/* > */}
            {/*    <Button bgRed500 rounded-4 css={{ */}
            {/*        backgroundColor: '#00ccb2', */}
            {/*    }} white>登录</Button> */}
            {/* </View> */}
            
            {/* <View pl-15 pr-15 onTap={() => { */}
            {/*    getUserInfo({ */}
            {/*        withCredentials: true, */}
            {/*        success: (error) => { */}
            {/*            // 'appid': string; */}
            {/*            // 'sessionKey': string; */}
            {/*            // 'signature': string; */}
            {/*            // 'rowData': string; */}
            {/*            // 'encryptedData': string; */}
            {/*            // 'iv': string; */}
            {/*            mutateUserInfo( */}
            {/*                { */}
            {/*                    getUserInfo: { */}
            {/*                        'appid' : 'wx795e19f51f8fdedd', */}
            {/*                        'sessionKey': getStorageSync('SESSION_KEY'), */}
            {/*                        'signature': error.signature, */}
            {/*                        'rowData': error.rawData, */}
            {/*                        'encryptedData': error.encryptedData, */}
            {/*                        'iv': error.iv */}
            {/*                    } */}
            {/*            }) */}
            {/*            console.log('error', error) */}
            {/*        } */}
            {/*    }) */}
            {/* }} */}
            {/* > */}
            {/*    <Button bgRed500 rounded-4 css={{ */}
            {/*        backgroundColor: '#00ccb2', */}
            {/*    }} white>用户信息</Button> */}
            
            {/* </View> */}
            
            {/* <View pl-15 pr-15 onTap={() => { */}
            {/*    getLocation({ */}
            {/*        success: (e) => { */}
            {/*            console.log('e', e) */}
            {/*        } */}
            {/*    }) */}
            {/* }} */}
            {/* > */}
            {/*    <Button bgRed500 rounded-4 css={{ */}
            {/*        backgroundColor: '#00ccb2', */}
            {/*    }} white>地理位置</Button> */}
            {/* </View> */}
            
            
            {/* <View pl-15 pr-15 onTap={() => { */}
            {/*    login({ */}
            {/*        success: (error) => { */}
            {/*            const data = error.code as string */}
            {/*            mutate({ */}
            {/*               code: data */}
            {/*            }, { */}
            {/*                onSuccess: (e) => { */}
            {/*                    if(checkIfSuccess(e as unknown as RetItem<MiniAppLoginToken>) && e.record != null) { */}
            {/*                        setStorageSync('SESSION_KEY', e.record.sessionKey) */}
            {/*                    } */}
            {/*                } */}
            {/*            }) */}
            {/*            console.log('error', error) */}
            {/*        } */}
            {/*    }) */}
            {/* }} */}
            {/* > */}
            {/*    <Button bgRed500 rounded-4 css={{ */}
            {/*        backgroundColor: '#00ccb2', */}
            {/*    }} white>微信登录</Button> */}
            {/* </View> */}
            
            {/* <View pl-25 pr-25> */}
            {/*    <Card onTap={() => { */}
            {/*        navigate({ */}
            {/*            url: OrdersPage */}
            {/*        }); */}
            {/*    }}> */}
            {/*        <View>My OrdersPage</View> */}
            {/*    </Card> */}
            {/* </View> */}
            
            {/* <View > */}
            {/*    <View onTap={() => { */}
            {/*        navigate({ */}
            {/*            url: SettingPage */}
            {/*        }) */}
            {/*    }}> */}
            {/*        <Icon type="comment" size={getRem(20)}/> */}
            {/*    </View> */}
            {/*    profile */}
            {/* </View> */}
            {/* <Avatar url="https://smebimage.fuliaoyi.com/Fg3SWrMKpkqRMFN9VQeFzOFCbbLo" /> */}

            <PageTab selectedTab={ConstTab.Profile} />
        </View>
    )
}
