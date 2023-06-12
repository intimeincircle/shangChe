import * as React from 'react'
import {debounce} from "lodash";
import { View } from '@fower/remax'
import {getMyChatGroup} from "@/apis/index";
import {ConstTab, PageTab} from "@/components/PageTab";
import {useQuery} from "react-query";
import {navigate} from "@/platform";
import {getRedirectPage, InnerRouteVipItemPage} from "@/app.config";
import {Cell, Search, Toast, Image, Loading, Empty, Flex, Tag, Typography } from 'react-vant/2x';
import {useState} from "react";
import {EnumRoutes} from "@/consts";
import {defaultApi, useDefaultApi} from "@/apis/client";
import {useUserLogin} from "@/pages/profile";
import {format} from "mathjs";

export const getConvertVipShopPrice = (price: number) => Number(format(price + 0.1, {
        precision: 2
    }));

export default () => {

    const {data} = useQuery('chat', () => getMyChatGroup({
    }))

    const [value, setValue] = useState('');

    const debounceSetChange = debounce(setValue, 2000)

    useUserLogin()

    const {data: shopItems, isFetching: isLoading } = useQuery([EnumRoutes.VipShopGoods,value], () => useDefaultApi(defaultApi.postApiV1ShandianVipShopGoods)({
        name: value ==='' ? undefined : value,
    }), {
        enabled: value !==''
    });
    return (
        <View>

            <View onTap={() => {
                navigate({
                    url: `/pages/t/index`,
                })
            }}>ximalay</View>

            <Search
                value={value}
                onChange={debounceSetChange}
                placeholder="请输入搜索关键词"
                showAction
                onSearch={(val) => {
                    Toast(val);
                    setValue(val);
                }}
                onCancel={() => {
                    setValue('');
                }}
                onClear={() => {
                    setValue('');
                }}
            />

            <View onTap={() => {
                navigate({
                    url: `/pages/t/index`,
                })
            }}>ximalay</View>

            { (!isLoading) && (value === '') &&
                <View px-10 py-10>
                    <Typography.Title level={4}>推荐</Typography.Title>

                    <Flex justify="start" gutter={14}>
                        <Flex.Item>
                            <Tag plain type="primary" onClick={() => {
                                debounceSetChange('话费')
                            }}>
                                话费
                            </Tag>
                        </Flex.Item>

                        <Flex.Item>
                            <Tag plain type="primary" onClick={() => {
                                debounceSetChange('喜马拉雅')
                            }}>
                                喜马拉雅
                            </Tag>
                        </Flex.Item>

                        <Flex.Item>
                            <Tag plain type="primary" onClick={() => {
                                debounceSetChange('视频')
                            }}>
                                视频
                            </Tag>
                        </Flex.Item>
                    </Flex>
                </View>
            }

            {
                isLoading && (
                    <Flex justify="center">
                        <Loading type="ball" />
                    </Flex>
                )
            }

            {
               !isLoading && shopItems?.records?.length ===0 && (
                    <Empty />
                )
            }

            <View>
                { !isLoading && shopItems?.records?.map(item => (
                        <Cell
                            center
                            key={item.goodsid}
                            title={`${item.goodsname}`}
                            label={`¥${getConvertVipShopPrice(Number(item.goodsprice))}`}
                            icon={
                                <Image
                                    width={44}
                                    height={44}
                                    src={item.imgurl}
                                    round
                                />
                            }
                            onClick={() => {
                                navigate({
                                    url: `${getRedirectPage(InnerRouteVipItemPage)}?id=${item.goodsid}`,
                                })
                            }}
                            clickable
                            isLink
                        />
                    ))
                }
            </View>
            {/* <LoadingComponent loading={isLoading} > */}
            {/*    { */}
            {/*        (data?.records ?? []).map(r => ( */}
            {/*            <View onTap={() =>{ */}
            {/*                navigate({ */}
            {/*                    url: `${DirectChatPage}?${queryString.stringify({ */}
            {/*                        groupId: r.groupId */}
            {/*                    })}`, */}
            {/*                }) */}
            {/*            }}> */}
            {/*                {r.starterId} */}
            {/*                {r.groupName} */}
            {/*            </View> */}
            {/*        )) */}
            {/*    } */}
            {/* </LoadingComponent> */}
            <PageTab selectedTab={ConstTab.Chat} />
        </View>
    )
}

