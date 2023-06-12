import {Box, Button, createStyles, TextInput} from "@mantine/core"
import NoSSR from "@mpth/react-no-ssr";
import {useTranslation} from "react-i18next";
import {FunctionComponent, useState} from "react";
import {useMutation} from "react-query";
import {EnumMsgFormat_TEXT, EnumMsgFormat_TEXTInhabitant} from "kun-shared/built/src_managed/EnumMsgFormat_TEXT";
import {ReqAddDiscussionByGroup} from "kun-shared/built/src_managed/ReqAddDiscussionByGroup";
import {Mention, MentionsInput, SuggestionDataItem} from "react-mentions";
import {kunInhabitant} from "kun-shared/built/src_managed/kun";
import {EmojiPicker} from "interweave-emoji-picker";
import {Path} from "interweave-emoji";
import {stripHexcode} from "emojibase";
import {EnumMsgFormat_IMAGE, EnumMsgFormat_IMAGEInhabitant} from "kun-shared/built/src_managed/EnumMsgFormat_IMAGE";
import {requestV2AddDiscuss, requestv2SearchSeriesMembers, searchSymbol} from "../../apis/web";
import {CreateAskModal} from "./CreateAskModal";
import UploadButton from "../UploadButton";

const useStyles = createStyles(() => ({
    mentions: {
        margin: '1em 0',
        background: 'red',
    }
}));

export const PostEditIIII: FunctionComponent<{ groupId: string, seriesId: string, onHandled: () => void }> = (props) => {

    const {t} = useTranslation();
    const [text, setText] = useState('')

    const {mutate, isLoading} = useMutation(requestV2AddDiscuss)


    const fetchMembers = async (query: string, callback: (data: SuggestionDataItem[]) => void) => {
        if (query === '') return;
        // eslint-disable-next-line consistent-return
        return requestv2SearchSeriesMembers({
            name: query,
            seriesId: props.seriesId,
        }).then((r) => (r.records ?? [])).then(list => list.map(item => ({
            display: `${item.userName}`,
            id: item.userId,
        }))).then(callback);
    }

    const fetchUsers = async (query: string, callback: (data: SuggestionDataItem[]) => void) => {
        if (query === '') return;
        // eslint-disable-next-line consistent-return
        return searchSymbol({
            name: query,
            channelId: kunInhabitant.world
        }).then((r) => (r.records ?? [])).then(list => list.map(item => ({
            display: `${item.title}`,
            id: item.symbol,
        }))).then(callback);
    }

    const classNames = useStyles();
    const a = (hexcode: string, large: boolean) =>
        // @ts-ignore
        `https://cdn.jsdelivr.net/gh/joypixels/emoji-assets@latest/png/${
            large ? 64 : 32
        }/${stripHexcode(hexcode).toLowerCase()}.png`

    return (
        <>
            <TextInput
                value={text}
                onChange={(texty) => {
                    setText(texty.target.value)
                }}/>

            <UploadButton 
                key="upload-button"
                onOk={(msg) => {
                console.log('ooooooooooooo',msg)
                mutate({
                    groupId: props.groupId,
                    seriesId: props.seriesId,
                    content: msg,
                    msgType: EnumMsgFormat_IMAGEInhabitant as EnumMsgFormat_IMAGE,
                } as ReqAddDiscussionByGroup, {
                    onSuccess: () => {
                        props.onHandled()
                    }
                })
            }} />

            <NoSSR>
                <CreateAskModal seriesId={props.seriesId}/>
            </NoSSR>

            <EmojiPicker
                onSelectEmoji={(x) => {
                    console.log('xxx', x)
                    setText(`${text}${x.primary_shortcode} ${x.emoji}`)
                }}
                emojiPath={a as unknown as Path}
                allowList={[
                    '1F332', // evergreen
                    '1F333', // deciduous
                    '1F334', // palm
                    '1F384', // christmas
                    '1F38B', // tanabata
                ]} emojiSize={24}
                emojiLargeSize={36}
            />

            <MentionsInput
                classNames={classNames.classes}
                value={text} onChange={(v) => setText(v?.target?.value ?? '')}>
                <Mention
                    markup="@[__display__](__id__)"
                    trigger="@"
                    displayTransform={(_, display) => `@${display}`}
                    onAdd={(e) => {
                        console.log('xxxxxx', e);
                    }}
                    renderSuggestion={(
                        suggestion,
                        search,
                        highlightedDisplay,
                        index,
                        focused
                    ) => (
                        <div className={`user ${focused ? 'focused' : ''}`}>
                            {highlightedDisplay} {suggestion?.display} {search} {index} {focused ? 'focused' : 'none'}
                        </div>
                    )}
                    data={fetchMembers}
                />
                <Mention
                    markup="#__display__ "
                    trigger="#"
                    displayTransform={(_, display) => `#${display}`}
                    onAdd={(e) => {
                        console.log('xxxxxx', e);
                    }}
                    renderSuggestion={(
                        suggestion,
                        search,
                        highlightedDisplay,
                        index,
                        focused
                    ) => (
                        <div className={`user ${focused ? 'focused' : ''}`}>
                            {highlightedDisplay} {suggestion?.display} {search} {index} {focused ? 'focused' : 'none'}
                        </div>
                    )}
                    data={fetchUsers}
                />
            </MentionsInput>
            <Box>
                <Button
                    loading={isLoading}
                    onClick={() => {
                        mutate({
                            groupId: props.groupId,
                            seriesId: props.seriesId,
                            content: text,
                            msgType: EnumMsgFormat_TEXTInhabitant as EnumMsgFormat_TEXT,
                            // channelId: horseInhabitant.base
                        } as ReqAddDiscussionByGroup, {
                            onSuccess: () => {
                                props.onHandled()
                            }
                        })
                    }}>{t('Add Post')}</Button>
            </Box>
        </>
    )
}
