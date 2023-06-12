import {Accordion, ActionIcon, Button, Group, Menu, Modal, Text, Textarea, TextInput} from "@mantine/core"
import { Settings } from "@styled-icons/material";
import {Editable, EditableInput, EditablePreview} from "@chakra-ui/react";
import React, {FunctionComponent, memo, useMemo, useState} from "react";
import {Quiz} from '@styled-icons/material/Quiz'
import { useTranslation } from "react-i18next";
import {HorseCardReturn} from "kun-shared/built/src_managed/HorseCardReturn";
import {ReqCreateKunExercise} from "kun-shared/built/src_managed/ReqCreateKunExercise";
import {OPENInhabitant} from "kun-shared/built/src_managed/OPEN";
import {useMutation, useQuery, useQueryClient} from "react-query";
import { useForm } from "@mantine/form";
import {ConstantExerciseType} from "kun-shared/built/src_managed/ConstantExerciseType";
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
import { toast } from "react-hot-toast";
import {ReactQueryKeys} from "../../shared/context";
import {requestV2CreateExercise, requestV2ListDeleteExcercise, requestV2ListExcecise} from "../../apis/web";
import {AccordionLabel} from "./Data1";

export const PracticeModal: FunctionComponent<{
    postId: string,
    seriesId: string,
}> = memo(({postId, seriesId}) => {
    const [visible, setVisible] = useState(false)
    const [isFull, setFull] = useState(false)

    const [learning, setLearning] = useState<ReqCreateKunExercise|null>(null)
    const {mutateAsync} = useMutation(requestV2CreateExercise, {
        useErrorBoundary: false
    })

    const {mutateAsync: mutateDeleteExcercise} = useMutation(requestV2ListDeleteExcercise, {
        useErrorBoundary: false
    })

    const queryClient = useQueryClient();

    const key = useMemo(() => [ReactQueryKeys.getExcersice, seriesId, postId], [postId, seriesId])

    const {data: excerciseList } = useQuery(key, () => requestV2ListExcecise({
            postId,
            channelId: horseInhabitant.base,
            seriesId,
        }), {
            enabled: visible
        }
    )

    const form = useForm({
        initialValues: {
            postId,
            seriesId,
            exerciseType: OPENInhabitant as ConstantExerciseType,
            title: '',
            tags: [],
            tips: '',
            correct: [],
            options: [],
        },

        validate: {
        },
    });

    const items = useMemo(() => (excerciseList?.records ?? []).map((item1) => (
        <Accordion.Item label={<AccordionLabel label="label" image="" description="" />} key={item1.answer}>
            <Text size="sm">{item1.title}</Text>
            <Menu>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item icon={<Settings size={14} />}  onClick={async () => {
                  await mutateDeleteExcercise({
                        channelId: horseInhabitant.base,
                        seriesId: item1.seriesId,
                        postId: item1.postId,
                        id: item1.id,
                    })
                }}>Settings</Menu.Item>
            </Menu>
        </Accordion.Item>
    )), [excerciseList?.records, mutateDeleteExcercise]);

    const {t} = useTranslation()

    return (
        <>
            <Modal overflow="outside" size={isFull ? 'full': "lg"}
                   title={<ActionIcon onClick={() => {
                       setFull(!isFull)
                   }}>full</ActionIcon>}
                   opened={visible} onClose={() => {
                setVisible(false)
            }}>
                <Accordion initialItem={-1} iconPosition="right">
                    <Accordion.Item label={<AccordionLabel label="label" image="" description="" />} key="add">
                        <form onSubmit={form.onSubmit(async (values) =>{
                            await mutateAsync(({
                                ...values,
                                channelId: horseInhabitant.base
                            }), {
                                onSuccess: () => {
                                    toast.success('okkk')
                                    queryClient.invalidateQueries(key);
                                }
                            })

                        })}>
                            <TextInput
                                required
                                {...form.getInputProps('title')}
                            />
                            <Textarea
                                required
                                {...form.getInputProps('tips')}
                            />

                            <Group position="right" mt="md">
                                <Button type="submit">Submit</Button>
                            </Group>
                        </form>
                    </Accordion.Item>
                    {items}
                </Accordion>
                {
                    (excerciseList?.records ?? []).map(r => (
                        <div key={r.id}>
                            <Editable defaultValue={r.title} submitOnBlur onChange={(x) => {
                                console.log('x',x)
                            }}>
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                            {r.title}
                        </div>
                    ))
                }
                <Button>{t('Add Quiz')}</Button>


                <Menu>
                    <Menu.Label onClick={()=> {
                        setLearning({
                            postId,
                            seriesId,
                            exerciseType: OPENInhabitant,
                            title: '',
                            tags: [],
                            tips: '',
                            correct: [],
                            options: [],
                        })
                    }}>问答</Menu.Label>
                </Menu>
            </Modal>

            <ActionIcon title="Settings" onClick={() => {
                setVisible(true)
            }}>
                <Quiz size={18}/>
            </ActionIcon>
        </>
    )
})