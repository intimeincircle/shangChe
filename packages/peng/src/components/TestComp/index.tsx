import {FunctionComponent, useState} from "react";
import {ActionIcon, ScrollArea, TypographyStylesProvider} from "@mantine/core";
import { Search } from "@styled-icons/evil/Search";
// @ts-ignore
import LinesEllipsis from 'react-lines-ellipsis'
import {stripHexcode} from "emojibase";
import {Mention, MentionsInput} from 'react-mentions'
import {Calendar, Month } from '@mantine/dates';
import {HashtagMatcher, UrlMatcher} from "interweave-autolink";
import {Interweave} from "interweave";
import {css, Global} from "@emotion/react";
// First import locale data
import 'dayjs/locale/zh-cn';
import {EmojiMatcher, Path, useEmojiData} from "interweave-emoji";
import {BlogItem} from "kun-shared/built/apis/getKunTable";
import {Breadcrumb, Button, BreadcrumbItem, BreadcrumbLink} from '@chakra-ui/react';
import {EmojiPicker} from 'interweave-emoji-picker';
import {Presence} from "@chatscope/use-chat/dist/Presence";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import NoSSR from '@mpth/react-no-ssr';
import ContentLoader from 'react-content-loader'
import {nanoid} from "nanoid";
import {
    BasicStorage,
    ChatProvider,
    AutoDraft, User, UserStatus
} from "@chatscope/use-chat";
import {Screenshot} from "./Screenshot";
// import UploaderFile from "./Uploader";
import 'react-jinke-music-player/assets/index.css'
import {BaiduDownload} from "../BaiduDownload";
import {PengChat} from "../Chat";
import {E12xampleChatService} from "../Chat/C";
import {WebSocketDemo} from "../BA";
import {useQueryParams} from "../../app/params";
import {Header} from "../Header";
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";
import {BlogList} from "../BlogList";
import {TestTable} from "../TestTable";
import {SidebarContent} from "../Sidebar";

// const Pdf = loadable(() => import("./Pdf"), {
//     ssr: false
// }) ;

export const joeModel = new User(
    {
        id: '1',
        username: "Joe",
        firstName: "Joe",
        lastName: "Joe",
    }
)

const joe = new User({
    id: joeModel.username,
    presence: new Presence({status: UserStatus.Available, description: ""}),
    firstName: "",
    lastName: "",
    username: joeModel.username,
    email: "",
    avatar: joeModel.avatar,
    bio: ""
});


function MyLoader() {
    return <ContentLoader/>
}

const list: BlogItem[] = [
    {
        id: 'aaaaa1',
        name: 'title1',
        date: '2022-03-06',
        tags: [],
    },
    {
        id: 'aaaaa2',
        name: 'title2',
        date: '2022-03-06',
        tags: [],
    },
    {
        id: 'aaaaa',
        name: 'title',
        date: '2022-03-06',
        tags: [],
    },
    {
        id: 'aaaaa',
        name: 'title3',
        date: '2022-03-06',
        tags: [],
    },
    {
        id: 'aaaaa',
        name: 'title4',
        date: '2022-03-06',
        tags: [],
    },
    {
        id: 'aaaaa',
        name: 'title5',
        date: '2022-03-06',
        tags: [],
    },
]



// const a: Promise<FruitAmount> = c.getApiSwaggerWorld({
//     hi: 's',
//     world: 'xx',
// })

const TestComponent: FunctionComponent = () => {
    const data1 = useQueryParams()
    console.log('data1', data1)

    // const a: Promise<FruitAmount> = defaultApi.getApiSwaggerWorld({
    //     world: '1',
    //     hi: '1ddddd',
    //     authorization: getAuthLocalStorageItem('AUTH') ?? '12',
    //     lang: ''
    // })
    // console.log('a', a);
    // a.then((b) => console.log('a',b));

    const series = '30ykAAn8'
    const card = 'zoRdp1RM'

    // const {data} = useQuery('series', () => getPublicCard({seriesId: series, id: card}), {})

    // console.log('data', data);

    // @ts-ignore
    // const { data } = useQuery('repoData', () =>
    //     // @ts-ignore
    //             get('https://api.github.com/repos/tannerlinsley/react-query').then(r => {
    //                 console.log('xxxxxx browser',r );
    //                 return r;
    //             }),
    //     )
    const [mentionInput, setMentionInput] = useState('')


    // @ts-ignore
    const fetchUsers = (query, callback) => {
        if (!query) return
        // @ts-ignore
        // @ts-ignore
        fetch(`https://api.github.com/search/users?q=${query}`, {json: true})
            .then(res => res.json())
            .then(res =>
                res.items.map(user => ({display: user.login, id: user.login}))
            )
            .then(callback)
    }
    // Storage needs to generate id for messages and groups
    const messageIdGenerator = () => nanoid();
    const groupIdGenerator = () => nanoid();

// Create serviceFactory
    const serviceFactory = (storage, updateState) => new E12xampleChatService(storage, updateState);

    const chatStorage = new BasicStorage({groupIdGenerator, messageIdGenerator});

    const [_, source] = useEmojiData({compact: false, shortcodes: ['emojibase']});

    const abbbb = (hexcode: string, large: boolean) =>
        // @ts-ignore
        `https://cdn.jsdelivr.net/gh/joypixels/emoji-assets@latest/png/${
            large ? 64 : 32
        }/${stripHexcode(hexcode).toLowerCase()}.png`

    const html = "<body><h1>hello</h1><div>dd</div></body>"

    // console.log('repoData xxxxx', data)
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <TypographyStylesProvider>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </TypographyStylesProvider>

            <ActionIcon>
                <Search/>
            </ActionIcon>

            {/* <LoadingOverlay */}
            {/*    visible */}
            {/*    loaderProps={{ size: 'sm', color: 'pink', variant: 'bars' }} */}
            {/*    overlayOpacity={0.3} */}
            {/*    overlayColor="#c5c5c5" */}
            {/* /> */}

            <Calendar locale="de" />
            <Month locale="de" month={new Date()} />

            {/* <DatePicker */}
            {/*    // locale="zh-cn" */}
            {/*    placeholder="Выберите дату" */}
            {/*    label="Дата события" */}
            {/*    defaultValue={new Date()} */}
            {/* /> */}

            <ScrollArea style={{ height: 250 }}>
                a
                a
                a
                Charizard (Pokémon)
                a
            </ScrollArea>

            <Interweave
                emojiSource={source}
                content="Smiley faces :) ;p :>]"
                matchers={[new EmojiMatcher('emoji', {convertEmoticon: true})]}
            />
            <Global
                styles={css`

                {
                  margin: 10px;
                }

                  .interweave-picker__picker {
                    height: 350px;
                    width: 280px;
                    background: #fff;
                    border-radius: 4px;
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
                    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-size: 14px;
                    line-height: 20px;
                  }

                  .interweave-picker__emojis-body::after,
                  .interweave-picker__picker::after {
                    display: block;
                    content: '';
                    clear: both;
                  }

                  .interweave-picker__groups {
                    height: 350px;
                    width: 50px;
                    padding: 13px;
                    border-right: 1px solid #e6ecf0;
                    border-top-left-radius: 4px;
                    float: left;
                  }

                  .interweave-picker__groups-list,
                  .interweave-picker__skin-tones-list {
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    justify-content: space-between;
                    height: 100%;
                  }

                  .interweave-picker__skin-tones-list {
                    flex-direction: row;
                    justify-content: flex-end;
                  }

                  .interweave-picker__group {
                    background: transparent;
                    border: 0;
                    padding: 0;
                    position: relative;
                    cursor: pointer;
                    filter: grayscale(100%);
                  }

                  .interweave-picker__group--active,
                  .interweave-picker__group:hover {
                    filter: none;
                  }

                  .interweave-picker__search {
                    float: left;
                    width: 230px;
                    padding: 8px;
                    background-color: #f5f8fa;
                    background-image: linear-gradient(#fff, #f5f8fa);
                    background-repeat: repeat-x;
                    border-bottom: 1px solid #e6ecf0;
                    border-radius: 4px 4px 0 0;
                  }

                  .interweave-picker__search-input {
                    padding: 4px 8px;
                    width: 100%;
                    background-color: #fff;
                    border: 1px solid #bdd5e5;
                    border-radius: 3px;
                    box-shadow: 0 0 0 1px #bdd5e5;
                    font-size: 14px;
                    line-height: 20px;
                    outline: none;
                  }

                  .interweave-picker__search-input::placeholder {
                    color: #657786;
                  }

                  .interweave-picker__emojis {
                    float: left;
                    width: 230px;
                    height: auto;
                    overflow-y: auto;
                    overflow-x: hidden;
                    position: relative;
                  }

                  .interweave-picker__emojis-body {
                    padding: 0 16px;
                  }

                  .interweave-picker__no-results,
                  .interweave-picker__emojis-header {
                    padding: 6px 18px;
                    color: #657786;
                    background: #fff;
                    border-bottom: 1px solid #e6ecf0;
                    font-weight: bold;
                  }

                  .interweave-picker__emojis-header {
                    padding: 3.25px 20px;
                  }

                  .interweave-picker__emoji {
                    background: transparent;
                    border: 0;
                    position: relative;
                    z-index: 1;
                    cursor: pointer;
                    float: left;
                    margin: 1.5px;
                    padding: 0;
                  }

                  .interweave-picker__emoji img {
                    display: block !important;
                  }

                  .interweave-picker__emoji:hover,
                  .interweave-picker__emoji--active {
                    transform: scale(1.5);
                  }

                  .interweave-picker__skin-tones {
                    float: left;
                    width: 230px;
                    border-top: 1px solid #e6ecf0;
                    padding: 0 26px;
                  }

                  .interweave-picker__skin-tone {
                    border: 0;
                    border-radius: 2px;
                    display: inline-block;
                    height: 17px;
                    width: 17px;
                    position: relative;
                    margin-left: 4px;
                    cursor: pointer;
                  }

                  .interweave-picker__skin-tone[data-skin-tone='none'] {
                    background: #ffcc22;
                  }

                  .interweave-picker__skin-tone[data-skin-tone='light'] {
                    background: #fadcbc;
                  }

                  .interweave-picker__skin-tone[data-skin-tone='medium-light'] {
                    background: #e0bb95;
                  }

                  .interweave-picker__skin-tone[data-skin-tone='medium'] {
                    background: #bf8f68;
                  }

                  .interweave-picker__skin-tone[data-skin-tone='medium-dark'] {
                    background: #9b643d;
                  }

                  .interweave-picker__skin-tone[data-skin-tone='dark'] {
                    background: #5a463a;
                  }

                  .interweave-picker__skin-tone--active::after {
                    content: '✓';
                    color: #fff !important;
                    text-shadow: 0.5px 1.5px 0 rgba(0, 0, 0, 0.25);
                    display: block;
                    position: absolute;
                    top: 1px;
                    left: 3px;
                  }

                  .interweave-picker__picker {
                    position: 'absolute';
                    bottom: 100%;
                  }


                  .mentions {
                    margin: 1em 0;
                  }

                  .mentions--singleLine .mentions__control {
                    display: inline-block;
                    width: 130px;
                  }

                  .mentions--singleLine .mentions__highlighter {
                    padding: 1px;
                    border: 2px inset transparent;
                  }

                  .mentions--singleLine .mentions__input {
                    padding: 1px;
                    border: 2px inset;
                  }

                  .mentions--multiLine .mentions__control {
                    font-family: monospace;
                    font-size: 14pt;
                  }

                  .mentions--multiLine .mentions__highlighter {
                    border: 1px solid transparent;
                    padding: 9px;
                    min-height: 63px;
                  }

                  .mentions--multiLine .mentions__input {
                    border: 1px solid silver;
                    padding: 9px;
                    outline: 0;
                  }

                  .mentions__suggestions__list {
                    background-color: white;
                    border: 1px solid rgba(0, 0, 0, 0.15);
                    font-size: 10pt;
                  }

                  .mentions__suggestions__item {
                    padding: 5px 15px;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
                  }

                  .mentions__suggestions__item--focused {
                    background-color: #cee4e5;
                  }

                  .mentions__mention {
                    position: relative;
                    z-index: 1;
                    color: blue;
                    text-shadow: 1px 1px 1px white, 1px -1px 1px white, -1px 1px 1px white,
                      -1px -1px 1px white;
                    text-decoration: underline;
                    pointer-events: none;
                  }
                `}/>

            {/* <Interweave emojiSource={source} > */}
            {/* /!*    <Interweave content="This string contains <b>HTML</b> and will safely be rendered!" />;*!/ */}
            {/* /!*    <Interweave content="Emoji unicode character: 🌀" matchers={[new EmojiMatcher('emoji')]} />*!/ */}
            {/* </Interweave> */}


            <MentionsInput value={mentionInput} onChange={(v) => setMentionInput(v?.target?.value ?? '')}>
                <Mention
                    trigger="@"
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
                            {highlightedDisplay} {suggestion?.display} {search} {index} {focused? 'focused': 'none'}
                        </div>
                    )}
                    data={fetchUsers}
                />
            </MentionsInput>

            <Interweave
                newWindow
                content="This contains a URL, https://github.com/milesj/interweave, and a hashtag, #interweave, that will be converted to an anchor link!"
                matchers={[new UrlMatcher('url', {
                }), new HashtagMatcher('hashtag')]}
            />

            <SidebarContent onClose={() => {
                console.log('close')
            }}/>

            <LinesEllipsis
                text='long long text'
                maxLine='3'
                ellipsis='...'
                trimRight
                basedOn='letters'
            />

            <TestTable/>
            <Header/>
            <BlogList list={list}/>
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href={CONSTANT_ROUTES.Home}>Home</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <Button colorScheme='kun'>Click me</Button>

            <WebSocketDemo/>

            <ChatProvider serviceFactory={serviceFactory} storage={chatStorage} config={{
                typingThrottleTime: 250,
                typingDebounceTime: 900,
                debounceTyping: true,
                autoDraft: AutoDraft.Save || AutoDraft.Restore
            }}>
                <PengChat user={joe}/>
            </ChatProvider>

            {/* <UploaderFile */}
            {/* /> */}
            {/* {JSON.stringify(data)} */}
            <NoSSR>
                {/* <ReactJkMusicPlayer audioLists={[]} />, */}
                <div>ddd</div>
            </NoSSR>

            {/* <NoSSR> */}
            {/*    <Pdf/> */}
            {/* </NoSSR> */}

            <MyLoader/>
            <Screenshot/>

            <EmojiPicker
                onSelectEmoji={(x) => {
                    console.log('xxx', x)
                }}
                emojiPath={abbbb as unknown as Path}
                allowList={[
                    '1F332', // evergreen
                    '1F333', // deciduous
                    '1F334', // palm
                    '1F384', // christmas
                    '1F38B', // tanabata
                ]} emojiSize={24}
                emojiLargeSize={36}
            />

            <BaiduDownload name="download"/>
        </>
    )
}

export default TestComponent;