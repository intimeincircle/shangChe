import React, {FunctionComponent, memo, useState} from "react";
import {useMutation, useQueryClient} from "react-query";
import {ReqUpdateProfile} from "kun-shared/built/apis/req-update-profile";
import {Box, Popover, PopoverTrigger,
    Button,
    ButtonGroup,
    Flex,
    PopoverArrow,
    Stack,
    FormControl,
    FormLabel,
    Input,
    InputProps,
    PopoverCloseButton, IconButton, PopoverContent, useDisclosure, Heading } from "@chakra-ui/react"
import {EditIcon} from "@chakra-ui/icons";
import  FocusLock from "react-focus-lock"
// eslint-disable-next-line camelcase
import {useTranslation} from "react-i18next";
import {useUserDetail, useUserSession} from "../../../react-query/useUserSession";
import {requestChangeNickName} from "../../../apis/web";
import {ReactQueryKeys} from "../../../shared/context";

interface CustomProps extends  InputProps  {
    label: string
}

const TextInput = React.forwardRef((props: CustomProps, ref: any) => {
    console.log('TxtInput');
    return (
        <FormControl>
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <Input ref={ref} id={props.id} {...props} />
        </FormControl>
    )
})

// 2. Create the form
const Form: FunctionComponent<{
    initialValue: string,
    firstFieldRef: React.MutableRefObject<typeof TextInput>,
    onSave ?: () => void,
    onCancel: ()=> void }> = (props) => {
    const [text, setTxt] = useState(props.initialValue);
    const queryClient = useQueryClient()

    const mutate = useMutation(requestChangeNickName)
    const saveForm = async (txt: string) => {
        console.log('text');
        return  mutate.mutateAsync({
            nickName: txt
        } as ReqUpdateProfile, {
            onSuccess: () => {
                queryClient.invalidateQueries(ReactQueryKeys.userDetail)
                props.onSave?.()
            }
        })
    }

    const {t}= useTranslation();
    return (
        <Stack spacing={4}>
            <TextInput
                label="用户名称"
                id="noticeTime"
                value = {text}
                ref={props.firstFieldRef}
                defaultValue={props.initialValue}
                onChange={(e) => setTxt(e.target.value)}
            />
            <ButtonGroup d="flex" justifyContent="flex-end">
                <Button variant="ghost" onClick={props.onCancel}>
                    {t('Cancel')}
                </Button>
                {/* <LoadingButton variant="solid" successToast={t('Operates successfully')} onSubmit={() => saveForm(text)}> */}
                {/*    {t('Save')} */}
                {/* </LoadingButton> */}
            </ButtonGroup>
        </Stack>
    )
}

const ChangeNickName: FunctionComponent = () => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef: React.MutableRefObject<any> = React.useRef<typeof Input>(null)
    const {data} = useUserDetail()

    return (
        <Flex alignItems="center">
            <Box d="inline-block" mr={3}>
                <Heading>
                    {
                        data?.data?.nickName ?? ''
                    }
                </Heading>
            </Box>
            <Popover
                isOpen={isOpen}
                initialFocusRef={firstFieldRef as any}
                onOpen={onOpen}
                onClose={onClose}
                placement="right"
                closeOnBlur={false}
            >
                <PopoverTrigger>
                    <IconButton aria-label="edit" size="sm" icon={<EditIcon />} />
                </PopoverTrigger>
                <PopoverContent p={5}>
                    <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <Form initialValue={data?.data?.nickName ?? ''} firstFieldRef={firstFieldRef}
                              onSave={() => {
                                  onClose();
                              }} onCancel={onClose} />
                    </FocusLock>
                </PopoverContent>
            </Popover>
        </Flex>
    );
};


export default memo(ChangeNickName);
