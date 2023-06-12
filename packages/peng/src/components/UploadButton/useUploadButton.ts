import {RefObject} from "react";
import Uppy from "@uppy/core";
import FileInput from "@uppy/file-input";
import XHRUpload from "@uppy/xhr-upload";
import {checkIsServer} from "kun-tools/built/common/check-is-server";
import {getLocalStorageItem} from "kun-tools/built/common/req";
import {RetItem} from "kun-tools/built/common/item";
import { useEffectOnce } from "react-use";
import "@uppy/core/dist/style.css"
import '@uppy/dashboard/dist/style.css';
import '@uppy/file-input/dist/style.css';
import { CONST_BACKEND } from "../../react-query/api";

export const  useUploadButton = (ref: RefObject<Element>, onOk: (data: string) => void) => {


    useEffectOnce(()  => {
        console.log('xxxxxxxxxxxxx oo');
        const uppy = new Uppy({
            autoProceed: true
        })
        uppy.setOptions({
            locale: {
                strings: {
                    'chooseFiles': '上传图片',
                },
            },
        })
        uppy.use(XHRUpload, {
            endpoint: `${CONST_BACKEND}/api/horse/v1/card/image/save`,
            formData: true,
            fieldName: 'file',
            headers: () => {
                console.log('x');
                return {
                    authorization: !checkIsServer() ? getLocalStorageItem("AUTH") ?? 'mock' : 'mock'
                }
            },
            getResponseData: (v, item) => {
                const a = JSON.parse(v) as RetItem<string>;
                console.log('vvvvvvvvvvvvv', item);
                console.log('xx', item);
                console.log('a', a);
                onOk(a.msg)
            }
        })
        console.log('Uppy')
        uppy.use(FileInput, {
            // target: '.Uppy',
            target: ref.current as Element,
            inputName: 'Input',
            // target
        })

        return () => {
            uppy.close()
        }
    })
}