import React, {FunctionComponent, memo, useState} from "react";
import {RetItem} from "kun-shared/built/apis/item";
import {AppConfig} from "kun-shared/built/src_managed/AppConfig";
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
    PopoverCloseButton, IconButton, PopoverContent, useDisclosure } from "@chakra-ui/react"
import {EditIcon} from "@chakra-ui/icons";
import  FocusLock from "react-focus-lock"
import {updateAppConfig} from "kun-shared/built/apis/appconfig/req-get-appconfig";
// eslint-disable-next-line camelcase
import {EnumLqChannel_KUN_HorseInhabitant} from "kun-shared/built/src_managed/EnumLqChannel_KUN_Horse";

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
    config: AppConfig,
    defaultNoticeTime: string,
    firstFieldRef: React.MutableRefObject<typeof TextInput>,
    onSave ?: () => void,
    onCancel: ()=> void }> = (props) => {
    const [text, setTxt] = useState(props.defaultNoticeTime);

    const saveForm = async (txt: string): Promise<RetItem<string>> => {
        const newConfig = {
            ...props.config,
            noticeTime: txt,
        }
        const r = await updateAppConfig(EnumLqChannel_KUN_HorseInhabitant, newConfig);
        props.onSave?.()
        return r;
    }

    return (
        <Stack spacing={4}>
            <TextInput
                label="提醒设置"
                id="noticeTime"
                value = {text}
                ref={props.firstFieldRef}
                defaultValue={props.defaultNoticeTime}
                onChange={(e) => setTxt(e.target.value)}
            />
            <ButtonGroup d="flex" justifyContent="flex-end">
                <Button variant="outline" onClick={props.onCancel}>
                    取消
                </Button>
                {/* <LoadingButton variant="solid" successToast="已保存" onSubmit={() => saveForm(text)}> */}
                {/*    保存 */}
                {/* </LoadingButton> */}
            </ButtonGroup>
        </Stack>
    )
}

const ChangeNoticeTime: FunctionComponent<{config: AppConfig, onRefresh: () => void}> = (props) => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const firstFieldRef: React.MutableRefObject<any> = React.useRef<typeof Input>(null)

    return (
            <Flex alignItems="center">
                <Box d="inline-block" mr={3}>
                    {props.config.noticeTime}
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
                            <Form config={props.config} defaultNoticeTime={props.config.noticeTime ?? '08:00'} firstFieldRef={firstFieldRef}
                                  onSave={() => {
                                      props.onRefresh?.()
                                      onClose();
                                  }} onCancel={onClose} />
                        </FocusLock>
                    </PopoverContent>
                </Popover>
            </Flex>
    );
};


export default memo(ChangeNoticeTime);
