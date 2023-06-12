import {FunctionComponent, useMemo, useState} from "react"
import toast from "react-hot-toast";
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
import {useMutation, useQuery} from "react-query";
import {Button, Heading } from "@chakra-ui/react";
import {Group, TextInput } from "@mantine/core";
import { getAuthLocalStorageItem } from "kun-tools/built/common/req";
import {ReactQueryKeys} from "../../../../shared/context";
import {requestCreatePracticeCard, requestV2ListExcecise} from "../../../../apis/web";
import {useMutationDefaultApi} from "../../../../components/Comment/useMuationDefault";
import {defaultApi} from "../../../../react-query/api";

/*
*
*  Next Step add practice
*  Next Step add practice
*  Next Step add practice
*  Next Step add practice
* */
export const PraticeListShow: FunctionComponent<{visible: boolean, seriesId: string, cardId: string}> = ({visible, seriesId, cardId}) => {
    const key = useMemo(() => [ReactQueryKeys.getExcersice, seriesId, cardId], [cardId, seriesId])

    const [state,setState] = useState<string>('')
    const {data: excerciseList } = useQuery(key, () => requestV2ListExcecise({
            postId: cardId,
            channelId: horseInhabitant.base,
            seriesId,
        }), {
            enabled: visible
        }
    )

    const {mutate: mutateCreatePracticeCard } = useMutation(requestCreatePracticeCard);

    const {mutate: mutateCreatePractice} = useMutationDefaultApi(defaultApi.postApiV1Concern52Create);

    const [addPratice, setAddPratice] = useState<string>('')

    // 获取学习记录
    return (
        <>
            {
                (excerciseList?.records ?? []).map(item => (
                    <>
                        <Heading sx={{
                            color: 'black'
                        }}>
                            {item.title}
                        </Heading>

                        <Button onClick={() => {
                            mutateCreatePractice({
                                authorization: getAuthLocalStorageItem('AUTH'),
                                reqCreateConcern: {
                                    isUUID: true,
                                    target: item.id,
                                    isLinked: true
                                }
                            }, {
                                onSuccess: () => {
                                    toast.success('Operate Successfully');
                                }
                            })
                        }}>稍后练习</Button>

                        <Heading>
                        {item.answer ?? 'empty'}
                        </Heading>
                        
                        <Button onClick={()=> {
                            console.log('add Solution')
                            setAddPratice(item.id)
                        }}>Add Solution</Button>

                        {
                            addPratice === item.id && (
                                <Group direction="column">
                                    <TextInput placeholder="回答" value={state} onChange={t => {
                                        setState(t.target.value)
                                    }} />
                                    <Button onClick={() => {
                                        // TODO   add file
                                        // postId: HashLong;
                                        // exerciseType: ConstantExerciseType;
                                        // exerciseId: string;
                                        // title: string;
                                        // answers?: ReadonlyArray<string>;
                                        // answer: string;
                                        // seriesId: HashLong;
                                        // richHtml?: string;
                                        // audio?: string;
                                        // video?: string;
                                        // images?: ReadonlyArray<string>;
                                        // seriesName?: string;
                                        // seriesType?: ConstantSeriesType;
                                        // postTitle?: string;
                                        mutateCreatePracticeCard({
                                            channelId: item.channelId,
                                            postId: cardId,
                                            seriesId,
                                            exerciseId: item.id,
                                            exerciseType: item.exerciseType,
                                            title: item.title,
                                            answer: state,
                                        })
                                    }}>submit</Button>
                                </Group>
                            )
                        }
                    </>
                ))
            }
        </>
    )
}