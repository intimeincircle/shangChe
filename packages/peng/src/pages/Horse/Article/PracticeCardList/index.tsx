import { FunctionComponent } from "react";
import {ConstantAppraiseType} from "kun-shared/built/fetch";
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
import {useMutation, useQuery} from "react-query";
import {Button} from "@chakra-ui/react";
import {HashLong} from "kun-shared/built/src_managed/HashLong";
import toast from "react-hot-toast";
import {getAuthLocalStorageItem} from "kun-tools/built/common/req";
import {ReactQueryKeys} from "../../../../shared/context";
import {requestDeletePracticeCard, requestListPracticeCard} from "../../../../apis/web";
import {useMutationDefaultApi} from "../../../../components/Comment/useMuationDefault";
import {defaultApi} from "../../../../react-query/api";


export const PracticeCardList: FunctionComponent<{
    seriesId: string;
    cardId: string
}> = ({
    seriesId,
    cardId
                                                    }) => {

    const {mutate} = useMutation(requestDeletePracticeCard)
    const {mutate: mutateTapirCrate} = useMutationDefaultApi(defaultApi.postApiV1TapirPracticeAppriseCreate)
    const {data, } = useQuery([ReactQueryKeys.requestListPracticeCard],() => requestListPracticeCard({
        seriesId,
        postId: cardId,
        channelId: horseInhabitant.base
    }))
    return (
        <>
            list
            list
            list
            list
            list
            {
                (data?.records ?? []).map(r => (
                    <>
                        <div>{r.title}</div>
                        <Button onClick={() => {
                            mutateTapirCrate({
                                authorization: getAuthLocalStorageItem('AUTH'),
                                reqUpdatePracticeAppraise: {
                                    seriesId: r.seriesId as unknown as HashLong,
                                    postId:r.postId as unknown as HashLong,
                                    practiceId: r.practiceId,
                                    practiceUserId: r.practiceUserId,
                                    appraiseType: ConstantAppraiseType.Valuable,
                                }
                            })
                        }} >
                            优秀
                        </Button>
                        <Button onClick={() => {
                            mutate({
                                seriesId: r.seriesId,
                                postId: r.postId,
                                practiceId: r.exerciseId,
                                channelId: horseInhabitant.base
                            }, {
                                onSuccess: () => {
                                    toast.success("ok")
                                }
                            })
                        }}>delete add chat </Button>
                        <div>{r.answer}</div>
                    </>
                ))
            }
        </>
    )
}

function useMutate(): { mutate: any; } {
    throw new Error("Function not implemented.");
}
