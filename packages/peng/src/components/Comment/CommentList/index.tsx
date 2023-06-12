import React, {FunctionComponent} from "react";
import {HashLong} from "kun-shared/built/src_managed/HashLong";
import {Settings} from "@styled-icons/material";
import {createStyles, Text, Avatar, Group, Button, Menu} from '@mantine/core';
import dayjs from "dayjs";

import {useMutation, useQueryClient} from "react-query";
import {KunCommentWithDateHashLong} from "kun-shared/built/src_managed/KunCommentWithDateHashLong";
import {useTranslation} from "react-i18next";
import toast from "react-hot-toast";
import {requestV2DeleteComment} from "../../../apis/web";
import {getCheckedKunImageUrl} from "../../SeriesCard";
import {useCommentList, useInfiniteCommentList} from "./useCommentList";
import {AddComment} from "../AddComment";

const useStyles = createStyles((theme) => ({
    body: {
        paddingLeft: 54,
        paddingTop: theme.spacing.sm,
    },
}));

interface CommentSimpleProps {
    postedAt: string;
    body: string;
    item: KunCommentWithDateHashLong;
    author: {
        name: string;
        image: string;
    };
    onHandled: () => void
}

export function CommentSimple({postedAt, body, author, item, onHandled}: CommentSimpleProps) {
    const {classes} = useStyles();

    const {mutateAsync} = useMutation(requestV2DeleteComment)

    const {t} = useTranslation()

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
            <Text className={classes.body} size="sm">
                {body}
            </Text>

            <Menu trigger="hover">
                <Menu.Label>Application</Menu.Label>
                <Menu.Item onClick={async () => {
                    await mutateAsync({
                        channelId: item.channelId,
                        post_id: item.postId,
                        comment_id: item.commentId
                    }, {
                        onSuccess: () => {
                            toast.success(t('Operates successfully'));
                            onHandled()
                        }
                    })
                }} icon={<Settings size={14}/>}>Settings</Menu.Item>
            </Menu>
        </div>
    );
}

export const CommentList: FunctionComponent<{
    channelId: number;
    seriesId: HashLong;
    postId: HashLong;
}> = ({postId, seriesId, channelId}) => {

    // const { data }  = useCommentList({
    //     channelId,
    //     postId,
    // })
    const queryClient = useQueryClient();
    const {data, fetchNextPage, hasNextPage, isFetching, queryKey} = useInfiniteCommentList({
        channelId,
        postId,
    })

    return (
        <>
            <AddComment seriesId={seriesId} postId={postId} onHandled={() => {
                queryClient.invalidateQueries(queryKey)
            }}/>
            {
                (data?.pages ?? []).map(r => r.records ?? []).flat(1).map(item => (
                    <div>
                        <CommentSimple
                            onHandled={() => {
                                queryClient.invalidateQueries(queryKey)
                            }}
                            item={item} author={{
                            name: item.commentUserName ?? 'Author',
                            image: getCheckedKunImageUrl(item.commentUserAvatarOpt ?? ''),
                        }} body={item.content} postedAt={dayjs(item.createAt).format('YYYY-MM-DD')}/>
                        {/* <AddComment seriesId={seriesId} postId={postId} parentCommentId={item.commentId} /> */}
                    </div>
                ))
            }
            <Button loading={isFetching} disabled={!hasNextPage} onClick={() => {
                fetchNextPage()
            }}>more</Button>
        </>
    )
}
