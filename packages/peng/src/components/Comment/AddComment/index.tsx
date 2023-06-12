import {FunctionComponent} from "react";
import {HashLong} from "kun-shared/built/src_managed/HashLong";
import {Button, Input} from "@chakra-ui/react";
import {useImmer} from "use-immer";
import {useMutation, useQueryClient} from "react-query";
import {ReqCreateCardComment1} from "kun-shared/built/src_managed/ReqCreateCardComment1";
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
import {getAuthLocalStorageItem, getLocalStorageItem} from "kun-tools/built/common/req";
import {reqCreateComment2} from "../../../apis/web";
import {ReactQueryKeys} from "../../../shared/context";
import {defaultApi} from "../../../react-query/api";
import {useDefaultApi, useMutationDefaultApi} from "../useMuationDefault";

export const AddComment: FunctionComponent<{
    seriesId: HashLong;
    postId: HashLong;
    onHandled: () => void;
    parentCommentId ?: string
}> = ({seriesId, postId,onHandled, parentCommentId}) => {
    
    const [comment, setComment] = useImmer('');

    const queryClient = useQueryClient()

    const muate = useMutationDefaultApi(defaultApi.postApiV1TapirHorseCommentCreate)

    // const muate = useMutation((data: ReqCreateCardComment1) => reqCreateComment2(data) )

    return   (
        <>
            <Input value={comment} onChange={(v)=> {
               setComment(() =>   v.target.value)
            }} />

            <Button
                disabled={muate.isLoading}
                onClick={ async () => {
                    const a1 =     {
                             channelId: horseInhabitant.base,
                             seriesId,
                             postId,
                             content: comment,
                            images: [],
                            parentCommentId,
                            isCardAuthor : false,
                            isSeriesAuthor: false
                         }
                    await muate.mutateAsync({
                        authorization: getAuthLocalStorageItem('AUTH'),
                        reqCreateCardComment1: a1
                    }, {
                        onSuccess: async () => {
                            console.log('onSuccess onSuccess');
                            onHandled()
                            await queryClient.invalidateQueries(ReactQueryKeys.CommentList)
                        },
                        onError: async () => {
                            console.log('onComment onError');
                        }
                    })
            }}
            >
                添加
            </Button>
        </>
    )
}