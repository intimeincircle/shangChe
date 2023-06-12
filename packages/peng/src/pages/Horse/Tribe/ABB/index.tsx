import {useMutation, useQueryClient} from "react-query";
import {EmojiMatcher, useEmojiData} from "interweave-emoji";
import dayjs from "dayjs";
import {Button} from "@mantine/core";
import React, {FunctionComponent} from "react";
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
import toast from "react-hot-toast";
import {useTranslation} from "react-i18next";
import {Interweave} from "interweave";
import {EnumMsgFormat_TEXTInhabitant} from "kun-shared/built/src_managed/EnumMsgFormat_TEXT";
import {requestV2DeleteMessage} from "../../../../apis/web";
import {PostEditIIII} from "../../../../components/PostEdit";
import {useInfiniteGroupMessages} from "../../../../components/Comment/CommentList/useCommentList";
import {UrlMatcher1} from "../../../../components/UrlA";
import {MessageChatCard} from "../../../../components/Comment/MessageCard";
import {HashtagMatcher1} from "../HashtagMatcher1/index";
import {UserMatcher1} from "../UserMather/index";
import {PinCardHeader} from "../PinCardHeader";

export const ListMessageApi: FunctionComponent<{ groupId: string, seriesId: string }> = ({groupId, seriesId}) => {

    const [_, source] = useEmojiData({compact: false, shortcodes: ['emojibase']});
    const queryClient = useQueryClient();
    const {mutate} = useMutation(requestV2DeleteMessage)


    const {data, fetchNextPage, hasNextPage, isFetching, queryKey} = useInfiniteGroupMessages({
        channelId: horseInhabitant.base,
        groupId,
    })

    const {t} = useTranslation()


    return (
        <div>
            <PostEditIIII groupId={groupId} seriesId={seriesId} onHandled={() => {
                queryClient.invalidateQueries(queryKey)
            }}/>
            <PinCardHeader series={seriesId}/>
            {
                (data?.pages?.map(r => r.records).flat(1) ?? []).map(item => (
                    <div>
                        <Button onClick={() => {
                            mutate({
                                msgId: item.msgId,
                                groupId: item.groupId,
                                channelId: horseInhabitant.base,
                            }, {
                                onSuccess: () => {
                                    toast.success(t('Operates successfully'))
                                    queryClient.invalidateQueries(queryKey)
                                }
                            })
                        }}>delete</Button>
                                <MessageChatCard
                                    seriesId={seriesId}
                                    item={item}
                                    author={{
                                        name: item.fromUserName ?? '',
                                        image: item.fromUserAvatar ?? ''
                                    }}
                                    body={item.originContent ?? ''}
                                    postedAt={dayjs(item.createAt).format('YYYY-MM-DD')}/>

                        {item.fromUser}
                        {item.fromUserName}

                        <Interweave
                            content={
                                `${item.msgContent}`
                            }
                            emojiSource={source}
                            newWindow
                            hashtagUrl={(hashtag: string) => `/live/kun/${hashtag}`}
                            matchers={[new UrlMatcher1('url'),
                                new EmojiMatcher('emoji', { convertUnicode: false}),
                                new UserMatcher1('user'),
                                new HashtagMatcher1('hashtag')]}
                        />
                    </div>
                ))
            }
            <Button onClick={() => fetchNextPage()}>
                add lon the
            </Button>
        </div>
    )
}