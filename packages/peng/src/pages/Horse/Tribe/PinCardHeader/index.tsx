import {FunctionComponent, memo} from "react"
import {useQuery} from "react-query";
import { Button } from "@mantine/core";
import {HashLong} from "kun-shared/built/fetch";
import toast from "react-hot-toast";
import {ReactQueryKeys} from "../../../../shared/context";
import {defaultApi} from "../../../../react-query/api";
import {useDefaultApi, useMutationDefaultApi} from "../../../../components/Comment/useMuationDefault";

export const PinCardHeader: FunctionComponent<{ series: string }> = memo(({
                                                                              series
                                                                          }) => {
    const {mutateAsync: mutateDeletePinCard} = useMutationDefaultApi(defaultApi.postApiV1PinCard50Delete)

    const {data} = useQuery([ReactQueryKeys.getHeaderPin,series], () => useDefaultApi(defaultApi.getApiV1PinCard50List)({
            seriesId: series
    }))

    return (
        <>
            {(data?.records ?? []).map(r => (<>
                <Button onClick={() => {
                    const a = {
                        seriesId: series as unknown as HashLong,
                        postId:  r.postId
                    }
                    console.log('xx',a)
                    mutateDeletePinCard({
                        reqDeleteKunPinCard: {
                            seriesId: series,
                            postId:  r.postId
                        }
                    }, {
                        onSuccess: () => {
                            toast.success('ok');
                        }
                    })
                }}>click</Button>
                r.postId</>))}
        </>
    )
})