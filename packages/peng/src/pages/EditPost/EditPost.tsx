/** @jsxImportSource @emotion/react */
import {toast} from "react-hot-toast";
import {useMutation, useQuery} from "react-query";
import {FunctionComponent, memo, useEffect, useRef, useState} from "react";
import {Helmet} from "react-helmet";
import {reqParseMarkdownContent} from "kun-shared/built/apis/req-parse-markdown-content";
import {requestUpdateHorseCardSubmit} from "kun-shared/built/apis/create-card";
import {
    Button,
    Container, Input, useToast,
} from '@chakra-ui/react';
// import Vditor from 'vditor'
// import "vditor/dist/index.css";
import {useDidMount} from "kun-react-tools/built/hooks/use-dit-mount";
import {getCardById} from "kun-shared/built/apis/get-card-by-id-and-version";
import {KunFooter} from "../../components/Footer";
import {checkIfAuthSuccess} from "../../util/check-auth-success";

const EditPost: FunctionComponent = () => {

    const [title, setTitle] = useState<string>('')

    const editorRef: any = useRef(null);

    const seriesQueryId =  '1'
    const cardId =  '2'
    const toastr = useToast();

    const { data } = useQuery('edit-post', () => getCardById(seriesQueryId , cardId))

    useEffect(()  => {
        console.log('data', data);
        if(data?.record?.card?.richHtml != null) {
          const html = data?.record?.card?.content
          console.log('html', html)
          editorRef.current.setValue(html, true)
          setTitle(data?.record?.card.title);
        }
    }, [data])

    const {mutate, isLoading} =useMutation('modify', requestUpdateHorseCardSubmit)

    const submitPost = async () => {
        if(data?.record?.card == null) {
            return
        }
        const value = editorRef.current.getValue();
        // await execLoading(
        //     async () => {
        const parseResult = await reqParseMarkdownContent({content:value })
                if(checkIfAuthSuccess(parseResult)) {
                    const content = parseResult.record
                    await mutate({
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        ...data?.record?.card!,
                        title,
                        richHtml: content,
                        content: value,
                    },
                        {
                            onSuccess: (d) => {
                                console.log('d', d)
                                toast.success('Ok')
                            },
                            onError: (e) => {
                                toast.error(String(e))
                            }
                        }
                        );
                //     // TODO
                //     // if(checkIfAuthSuccess(rspCreate)) {
                //     //     history.push(getMessageSuccess(NavigationMessageInfo.CreateCardSuccess,
                //     //         CONSTANT_ROUTES.Write,  getNavigateTribe(data.record?.card.seriesId!)
                //     //     ))
                //     // }
                //     return rspCreate
                }
                // return parseResult
            // },
            // setLoading,
            // toastMsgFn(toastr))
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
            console.log('toolbar', toolbar)
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
        <>
            <Helmet title="Home"/>
            <Button isLoading={isLoading}  onClick={submitPost}>提交</Button>

            <Container maxW="container.lg" mt="24px" mb="24px">
                <Input placeholder='请填写标题' mb="12px"
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}/>
                <div id="vditor" />
            </Container>
            <KunFooter/>
            </>
    );
}

export default memo(EditPost);
