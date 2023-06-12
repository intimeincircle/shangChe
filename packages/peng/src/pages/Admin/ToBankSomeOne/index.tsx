
import {getAuthLocalStorageItem, getLocalStorageItem} from "kun-tools/built/common/req";
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { TextInput, Button, Box, Group } from '@mantine/core';
import {useMutationDefaultApi} from "../../../components/Comment/useMuationDefault";
import {defaultApi} from "../../../react-query/api";

const schema = z.object({
    name: z.string().min(2, { message: 'Name should have at least 2 letters' }),
});

export function ToBankSomeOne() {

    const form = useForm({
        schema: zodResolver(schema),
        initialValues: {
            name: '',
        },
    });

    const {mutate}= useMutationDefaultApi(defaultApi.postApiV1TapirAdmin50SecurityCreate)

    return (
        <Box sx={{ maxWidth: 340 }} mx="auto">
            <form onSubmit={form.onSubmit((values) => {
                mutate({
                    authorization: getAuthLocalStorageItem('AUTH'),
                    reqMarkUserDanger: {
                        userId: values.name
                    }
                })
            })}>
                <TextInput
                    required
                    label="请输入user_id"
                    placeholder="John Doe"
                    mt="sm"
                    {...form.getInputProps('name')}
                />

                <Group position="right" mt="xl">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
}
