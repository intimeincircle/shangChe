import {KunMessageReturn} from "kun-shared/built/src_managed/KunMessageReturn";
import { Image ,Avatar, Button, createStyles, Group, Menu, Text} from '@mantine/core';
import {EnumMsgFormat_TEXTInhabitant} from "kun-shared/built/src_managed/EnumMsgFormat_TEXT";
import {EnumMsgFormat_IMAGEInhabitant} from "kun-shared/built/src_managed/EnumMsgFormat_IMAGE";
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
import {useTranslation} from "react-i18next";

import {Settings} from "@styled-icons/material";
import React, {useState} from "react";
import {useMutation, useQueryClient} from "react-query";
import {requestv2RequestLikeMessage} from "../../../apis/web";
import {defaultApi} from "../../../react-query/api";
import {ReactQueryKeys} from "../../../shared/context";
import {useMutationDefaultApi} from "../useMuationDefault";
import {getCheckedKunImageUrl} from "../../SeriesCard";

const useStyles = createStyles((theme) => ({
    body: {
        paddingLeft: 54,
        paddingTop: theme.spacing.sm,
    },
}));


interface MessageCardProps {
    postedAt: string;
    body: string;
    seriesId: string,
    item: KunMessageReturn;
    author: {
        name: string;
        image: string;
    };
    onHandled ?: () => void
}


export function MessageChatCard({seriesId, postedAt, body, author, item }: MessageCardProps) {
    const {classes} = useStyles();


    const queryClient = useQueryClient();
    const {mutateAsync: mutateRequestMessage} = useMutation(requestv2RequestLikeMessage)

    const {mutateAsync: mutatePinCard} = useMutationDefaultApi(defaultApi.postApiV1PinCard50Create)
    const {t} = useTranslation()

    const [isFavoute, setIsFavourite] = useState(false)
    return (
        <div>
            <Group>
                <Avatar src={author.image} alt={author.name} radius="xl"/>
                <div>
                    <Text size="sm">{author.name}</Text>
                    <Text size="xs" color="dimmed">
                        {postedAt}
                    </Text>
                </div>
            </Group>

            {item.msgType ?? 'msg'}

            {
                item.msgType === EnumMsgFormat_TEXTInhabitant && (
                    <Text className={classes.body} size="sm">
                        {body}
                    </Text>
                )
            }

            {
                item.msgType === EnumMsgFormat_IMAGEInhabitant && (
                <Image
                width={200}
                height={80}
                src={getCheckedKunImageUrl(item.msgContent)}
                />
                )
            }


            <Button onClick={async () => {
                await mutatePinCard({
                    reqCreateKunPinCard: {
                        seriesId,
                        postId: item.msgId
                    }
                }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries(ReactQueryKeys.getHeaderPin)
                    }
                })
            }}>Pin</Button>


            <Button onClick={async () => {
                await mutateRequestMessage({
                    channelId: horseInhabitant.base,
                    groupId: item.groupId,
                    messageId: item.msgId,
                    isLike: !isFavoute,
                }, {
                    onSuccess: () => {
                        setIsFavourite(!isFavoute)
                    }
                })
            }}>favourite book {isFavoute ? 'true': 'fasle'}</Button>

            <Menu trigger="hover">
                <Menu.Label>Application</Menu.Label>
                <Menu.Item onClick={async () => {
                    // await mutateAsync({
                    //     channelId: item.channelId,
                    //     post_id: item.postId,
                    //     comment_id: item.commentId
                    // }, {
                    //     onSuccess: () => {
                    //         toast.success(t('Operates successfully'));
                    //         onHandled()
                    //     }
                    // })
                }} icon={<Settings size={14}/>}>{t('Delete')}</Menu.Item>
            </Menu>
        </div>
    );
}
