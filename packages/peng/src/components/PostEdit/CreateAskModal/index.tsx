import {Button, Group, Modal, Textarea, TextInput} from "@mantine/core";
import {FunctionComponent, memo, useMemo, useState} from "react"
// import * as pupa from 'pupa';
import  pupa from 'pupa';
import {useTranslation} from "react-i18next";
import {z} from 'zod';
import {useForm, zodResolver} from '@mantine/form';
import {useMutation} from "react-query";
import toast from "react-hot-toast";
import {POST_ASKInhabitant} from "kun-shared/built/src_managed/POST_ASK";
import {requestV2CreateHorsecard} from "../../../apis/web";
//
// pupa('The mobile number of {name} is {phone.mobile}', {
//     name: 'Sindre',
//     phone: {
//         mobile: '609 24 363'
//     }
// });
console.log('http://localhost:8000/live/s/jORNBRdE',pupa)

export const CreateAskModal: FunctionComponent<{
    seriesId: string
}> = memo(({seriesId}) => {

    const [opened, setOpened] = useState(false);
    const {mutate:mutateCreateData} =useMutation(requestV2CreateHorsecard)

    const {t} = useTranslation()

    const schema = useMemo(()=> z.object({
        title: z.string().min(6, { message: pupa(t('{0} should have at least {1} letters'), [t('title'), 6]) }),
    }), [t]);

    const form = useForm({
        schema: zodResolver(schema),
        initialValues: {
            title: '',
            content: '',
        },
    });


    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Introduce yourself!"
            >
                <form onSubmit={form.onSubmit((values) => { // seriesId: HashLong;
                    // title: string;
                    // richHtml?: string;
                    // delta?: string;
                    // content?: string;
                    // link?: string;
                    // imageNames?: ReadonlyArray<string>;
                    // videoName?: string;
                    // file?: string;
                    // audioName?: string;
                    // tags?: ReadonlyArray<string>;
                    // postType?: ConstantPostType;
                    mutateCreateData({
                        seriesId,
                        title: values.title,
                        content: values.content,
                        postType: POST_ASKInhabitant
                    }, {
                        onSuccess: () => {
                            setOpened(false);
                            toast.success('ok')
                        }
                    })
                    console.log(values)
                })}>
                    <TextInput
                        required
                        placeholder="example@mail.com"
                        {...form.getInputProps('title')}
                    />
                    <Textarea
                        label="Name"
                        placeholder="John Doe"
                        mt="sm"
                        {...form.getInputProps('content')}
                    />
                    <Group position="right" mt="xl">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Modal>

            <Group position="center">
                <Button onClick={() => setOpened(true)}>Open Modal</Button>
            </Group>
        </>
    );
});