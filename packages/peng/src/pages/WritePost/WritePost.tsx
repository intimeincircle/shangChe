/** @jsxImportSource @emotion/react */
import NoSSR from "@mpth/react-no-ssr";
import {useHistory} from "react-router";
import {FunctionComponent, memo, useRef, useState} from "react";
import {Helmet} from "react-helmet";
import {reqParseMarkdownContent} from "kun-shared/built/apis/req-parse-markdown-content";
import {requestCreateHorseCardSubmit} from "kun-shared/built/apis/create-card";
import {
    Button,
    Container, Input, useToast,
} from '@chakra-ui/react';
// import Vditor from 'vditor'
import { createReactEditorJS } from 'react-editor-js'
// import "vditor/dist/index.css";
import {useDidMount} from "kun-react-tools/built/hooks/use-dit-mount";
import { Scaffold } from "../../components/Scaffold";
import {KunFooter} from "../../components/Footer";
import {SimpleEditorHeader} from "../../components/SimpleEditorHeader";
import {execLoading} from "../../util/exec-loading";
import {checkIfAuthSuccess} from "../../util/check-auth-success";
import {getMessageSuccess, getNavigateTribe} from "../../navigators";
import {NavigationMessageInfo} from "../../navigators/NavigationMessageInfo";
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";


const ReactEditorJS = createReactEditorJS()

const WritePost: FunctionComponent = () => {

    const [title, setTitle] = useState<string>('')

    const editorRef: any = useRef(null);

    const [loading, setLoading] = useState(false)

    const history = useHistory();

    const onSave = () => {
        console.log('onSave')
    }

    const submitPost = async (seriesId: string, tags: string[]) => {
        const value = editorRef.current.getValue();
        await execLoading(
             async () => {
                 const parseResult = await reqParseMarkdownContent({content:value })
                 if(checkIfAuthSuccess(parseResult)) {
                     const content = parseResult.record
                     const rspCreate = await requestCreateHorseCardSubmit({
                         title,
                         seriesId,
                         richHtml: content,
                         content: value,
                         tags
                     });
                     if(checkIfAuthSuccess(rspCreate)) {
                         history.push(getMessageSuccess(NavigationMessageInfo.CreateCardSuccess,
                             CONSTANT_ROUTES.Write,  getNavigateTribe(seriesId)
                         ))
                     }
                     return rspCreate
                 }

                 return parseResult
             },
                     setLoading)
             }

    useDidMount(() => {
        let toolbar
        if (window.innerWidth < 768) {
            toolbar = [
                'emoji',
                'headings',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'list',
                'ordered-list',
                'check',
                'outdent',
                'indent',
                '|',
                'quote',
                'line',
                'code',
                'inline-code',
                'insert-before',
                'insert-after',
                '|',
                'upload',
                'record',
                'table',
                '|',
                'undo',
                'redo',
                '|',
                'edit-mode',
                'content-theme',
                'code-theme',
                'export',
                {
                    name: 'more',
                    toolbar: [
                        'fullscreen',
                        'both',
                        'preview',
                        'info',
                        'help',
                    ],
                }]
        }

        // editorRef.current = new Vditor('vditor', {
        //     // _lutePath: `http://192.168.0.107:9090/lute.min.js?${new Date().getTime()}`,
        //     // _lutePath: 'src/js/lute/lute.min.js',
        //     // cdn: "http://localhost:9000",
        //     toolbar,
        //     mode: 'ir',
        //     // ：sv, ir, wysiwyg
        //     // height: window.innerHeight + 100,
        //     height: window.innerHeight - 200,
        //     outline: {
        //         enable: true,
        //         position: 'right',
        //     },
        //     debugger: true,
        //     typewriterMode: true,
        //     placeholder: 'Hello, Vditor!',
        //     preview: {
        //         markdown: {
        //             toc: true,
        //             mark: true,
        //             footnotes: true,
        //             autoSpace: true,
        //         },
        //         math: {
        //             engine: 'KaTeX',
        //         },
        //     },
        //     toolbarConfig: {
        //         pin: true,
        //     },
        //     counter: {
        //         enable: true,
        //         type: 'text',
        //     },
        //     hint: {
        //         emojiPath: 'https://cdn.jsdelivr.net/npm/vditor@1.8.3/dist/images/emoji',
        //         emojiTail: '<a href="https://ld246.com/settings/function" target="_blank">设置常用表情</a>',
        //         emoji: {
        //             'sd': '💔',
        //             'j': 'https://unpkg.com/vditor@1.3.1/dist/images/emoji/j.png',
        //         },
        //         parse: false,
        //         extend: [
        //             {
        //                 key: '@',
        //                 hint: (key: string) => {
        //                     console.log(key)
        //                     if ('vanessa'.indexOf(key.toLocaleLowerCase()) > -1) {
        //                         return [
        //                             {
        //                                 value: '@Vanessa',
        //                                 html: '<img src="https://avatars0.githubusercontent.com/u/970828?s=60&v=4"/> Vanessa',
        //                             }]
        //                     }
        //                     return []
        //                 },
        //             },
        //             {
        //                 key: '#',
        //                 hint: (key: string) => {
        //                     console.log(key)
        //                     if ('vditor'.indexOf(key.toLocaleLowerCase()) > -1) {
        //                         return [
        //                             {
        //                                 value: '#Vditor',
        //                                 html: '<span style="color: #999;">#Vditor</span> ♏ 一款浏览器端的 Markdown 编辑器，支持所见即所得（富文本）、即时渲染（类似 Typora）和分屏预览模式。',
        //                             }]
        //                     }
        //                     return []
        //                 },
        //             }],
        //     },
        //     tab: '\t',
        //     upload: {
        //         accept: 'image/*,.mp3, .wav, .rar',
        //         token: 'test',
        //         url: '/api/upload/editor',
        //         linkToImgUrl: '/api/upload/fetch',
        //         filename (name: string) {
        //             console.log('name', name)
        //             // return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '').
        //             // replace(/[\\?\\/:|<>\\*\[\]\(\)\$%\{\}@~]/g, '').
        //             // replace('/\\s/g', '')
        //         },
        //     },
        // })
    })
  return  (
        <Scaffold title="Home">
            <Container maxW="container.lg" mt="24px" mb="24px">
            <SimpleEditorHeader onSelectSeries={async (series, tags) => {
                await submitPost(series.id, tags)
            }} loading={loading}/>
            <Button onClick={onSave}>保存</Button>
            </Container>

            <Container maxW="container.lg" mt="24px" mb="24px">
                <Input placeholder='请填写标题' mb="12px" onChange={(e) => setTitle(e.target.value)}/>
                <div id="vditor" />
            </Container>

            <SimpleEditorHeader onSelectSeries={async (series, tags) => {
                await submitPost(series.id, tags)
            }} loading={loading}/>

            <NoSSR>
                <ReactEditorJS  />
            </NoSSR>
        </Scaffold>
    );
}

export default memo(WritePost);
