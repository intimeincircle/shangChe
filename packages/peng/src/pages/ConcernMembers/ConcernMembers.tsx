import {useMutation, useQuery} from "react-query";
import React, {FunctionComponent, memo, useEffect, useState} from "react";
import Uppy from '@uppy/core'
import FileInput from '@uppy/file-input';
import XHRUpload from '@uppy/xhr-upload';
// const ProgressBar = require('@uppy/progress-bar')

import "@uppy/core/dist/style.css"
import '@uppy/dashboard/dist/style.css';
import '@uppy/file-input/dist/style.css';
import {Button} from "@mantine/core";
import {checkIsServer} from "kun-tools/built/common/check-is-server";
import {getAuthLocalStorageItem, getLocalStorageItem} from "kun-tools/built/common/req";
import {useModals} from "@mantine/modals";
import {useTranslation} from "react-i18next";
import {requestGetGroupDetail} from "kun-shared/built/v2/api/v2";
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
import {requestGetPrivateGroup} from "kun-shared/built/apis/send-sys-msg";
import {useMutationDefaultApi} from "../../components/Comment/useMuationDefault";
import {KunChatProvider} from "../Chat/KunChatProvider";
import {defaultApi} from "../../react-query/api";
import {DirectChat} from "../Chat/DirectChat";

const ConcernMembers: FunctionComponent = memo(() => {
    const [open, setOpen] = useState(false)
    const {data: ddddd} = useQuery(['xxxxxx'], () => defaultApi.getApiV1TapirHorseMembers.bind(defaultApi)({
        authorization: getAuthLocalStorageItem('AUTH'),
    }))

    // TODO add button;


    useEffect(() => {
        const uppy = new Uppy({
            autoProceed: true
        })
        uppy.setOptions({
            locale: {
                strings: {
                    'Choose files': '上传图片',
                    'chooseFiles': '上传图片',
                },
            },
        })
        console.log('Uppy')
        uppy.use(FileInput, {
            target: '.Uppy',
            inputName: 'Input',
            // target
        })
        uppy.use(XHRUpload, {
            endpoint: 'process.env.BACKEND_IMAGE_SAVE_URL,
            formData: true,
            fieldName: 'file',
            headers: () => {
                console.log('x');
                return {
                    authorization: !checkIsServer() ? getLocalStorageItem("AUTH") ?? 'mock' : 'mock'
                }
            },
            getResponseData: (v, item) => {
                const a = JSON.parse(v);
                console.log('v', item);
                console.log('a', a);
            }
        })
        return () => {
            uppy.close();
        }
    }, [])


    const modals = useModals();
    const {t} = useTranslation()
    const [groupId, setGroupId ] = useState<string>('')
    const [userId, setUserId ] = useState('')

    const {mutate: getPrivateChat} = useMutation(requestGetPrivateGroup)
    const {mutate: a1} = useMutationDefaultApi(defaultApi.postApiV1Chat50ChatGroup)

    const {data} = useQuery('userId', () => requestGetGroupDetail({
        channelId: horseInhabitant.base,
        groupId
    }), {
        enabled: groupId != null
    })

    const openConfirmModal = () => modals.openConfirmModal({
        title: t('Please confirm your action'),
        children: (
            <KunChatProvider>
                <DirectChat groupId={groupId} userId={userId} />
            </KunChatProvider>
        ),
        labels: { confirm: t('Confirm'), cancel: t('Cancel') },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => console.log('Confirmed'),
    });

    return (
        <>div

                  <>
            <div className="Uppy">
            </div>

            <div className="UppyProgressBar"/>

            {
                (ddddd?.records ?? []).map(r => (
                    <div>
                        <Button onClick={() => {
                            setUserId(r.userId)
                            a1({
                                authorization: getAuthLocalStorageItem('AUTH'),
                                reqStartChat: {
                                userId2: r.userId
                                }
                            }, {
                                onSuccess: (item) => {
                                    console.log('r', item)
                                    // groupId
                                    if(item.record !== undefined) {
                                        setGroupId(item.record ?? '')
                                        setTimeout(()  => {
                                            openConfirmModal()
                                        }, 20)
                                    }
                                }
                            })
                        }}>
                            私信
                        </Button>
                        {
                            r.userName
                        }
                    </div>
                ))
            }

            {groupId}
            {groupId}
            {groupId}

            <Button onClick={() => {
                setOpen(true)
            }}>open</Button>
            {JSON.stringify(ddddd)}
                  </>
        </>)
})
export default ConcernMembers
