import {FunctionComponent, memo, MutableRefObject, useCallback, useRef} from "react";
import {useMutation} from "react-query";
import * as qiniu from 'qiniu-js'
import * as hash from "object-hash";
import {
    Button,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import {debounce, throttle} from "lodash";
import {ReqCreateHorseCard} from "kun-shared/built/src_managed/ReqCreateHorseCard";
import {createCardSubmit} from "../../../apis/web";
import {useQueryQiniuToken} from "../../../react-query/useQiniuToken";
import {useQueryParams} from "../../../app/params";


const UploaderFileButton: FunctionComponent = memo(() => {
    const {isOpen, onOpen, onClose } = useDisclosure()
    const { data, isLoading } = useQueryQiniuToken()
    console.log('aaaaaaaaaaaaaaxxx', data)
    const mutation = useMutation((data1: ReqCreateHorseCard) => createCardSubmit(data1) )

    // @ts-ignore
    const {id: seriesId}: { id: string } = useQueryParams() as {id: string};

    console.log('data', data, seriesId)

    const fileRef: MutableRefObject<HTMLInputElement | null> = useRef<HTMLInputElement>(null)

    // @ts-ignore
    const oFileRef: MutableRefObject<Subscription|null> = useRef(null)

    const debounceClick = debounce(() => {
        fileRef.current?.click?.();
    }, 1000)


    const updateImage = useCallback(async (e) => {
        console.log('file');
        const file = e.target.files[0]
        console.log('file', file);
        if(file ==null ) {
            return;
        }
        const lastFix = file.name.split('.').pop();
        const hashName = hash.MD5(file);

        const observable =qiniu.upload(file, `test/${hashName}.${lastFix}`, data?.record ?? '')
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        const observer = {
            next(res: unknown){
                console.log('res', res);
            },
            error(err:unknown){
                console.error(err)
            },
            complete: async (res: {hash: string, key: string}) => {
                if(res.key.endsWith("mp3")) {
                    mutation.mutate({
                        seriesId,
                        title: 'xxx',
                        audioName: res.key,
                    }, {
                        onSuccess: () => {
                            console.log('xxx')
                        }
                    })
                    // audio
                } else if(res.key.endsWith("mp4")) {
                    mutation.mutate({
                        seriesId,
                        title: 'xxx',
                        videoName: res.key,
                    }, {
                        onSuccess: () => {
                            console.log('xxx')
                        }
                    })
                }else {
                    mutation.mutate({
                        seriesId,
                        title: 'xxx',
                        file: res.key,
                    }, {
                        onSuccess: () => {
                            console.log('xxx')
                        }
                    })

                }
                console.log('complete', res);
            }
        }
        oFileRef.current =  observable.subscribe(observer)
        // TODO send chat message
    }, [data?.record, mutation, seriesId])

    const debouncedUpdateImage = throttle(updateImage, 1000);

    // TODO unscribe 
    // useEffect(() => {
    //    
    // }, [])
    //
    if(isLoading) {
        return null
    }
    return (
        <div>
            {/* action="//jsonplaceholder.typicode.com/posts/" */}
            <Button onClick={onOpen}>Add Upload</Button>

            <input key="ok" type="file" ref={fileRef} onChange={debouncedUpdateImage}/>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Button onClick={debounceClick}>upload</Button>
                        {/* <Uploader */}
                        {/*    // action="/horse/v1/card/image/save" */}
                        {/*    headers={{ */}
                        {/*        'Authorization': localStorage.getItem('AUTH'), */}
                        {/*    }} */}
                        {/*    onUpload={async (f) => new Promise((r) => { */}
                        {/*        consle.log('f', f) */}
                        {/*        const observable = qiniu.upload(f, `test/`, data?.msg, { */}

                        {/*        }, { */}
                        {/*            useCdnDomain: true, */}
                        {/*            // rigion: qiniu.region.z2 */}
                        {/*        }) */}

                        {/*        // setTimeout(()  => { */}
                        {/*        //     console.log('f', f) */}
                        {/*        //     onClose() */}
                        {/*        //     r() */}
                        {/*        // }, 10) */}
                        {/*    })} */}
                        {/*    draggable> */}
                        {/*    <div style={styles}>Click or Drag files to this area to upload</div> */}
                        {/* </Uploader> */}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
})

export default UploaderFileButton