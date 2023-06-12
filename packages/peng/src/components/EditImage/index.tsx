import {FunctionComponent, useState} from "react";
import {Photo, Upload} from "@styled-icons/material";
import {useHover} from "@mantine/hooks";
import { Modal, Box, Button, Image, Overlay, Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import {useMutation} from "react-query";
import {primarySchema} from "../../app/theme";
import {requestV2v2UploadImage} from "../../apis/web";

function getIconColor(status: DropzoneStatus, theme: MantineTheme) {
    if (status.accepted) {
        return theme.colors[primarySchema][theme.colorScheme === 'dark' ? 4 : 6];
    } 
        if (status.rejected) {
            return theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6];
        } 
            return theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[7];

}

function ImageUploadIcon({
                             status,
                             ...props
                         }: React.ComponentProps<unknown> & { status: DropzoneStatus }) {
    if (status.accepted) {
        return <Upload {...props} />;
    }

    // if (status.rejected) {
    //     return <X {...props} />;
    // }

    return <Photo {...props} />;
}

export const dropzoneChildren = (status: DropzoneStatus, theme: MantineTheme) => (
    <Group position="center" spacing="xl" style={{ minHeight: 220, pointerEvents: 'none' }}>
        <ImageUploadIcon status={status} style={{ color: getIconColor(status, theme) }} size={80} />

        <div>
            <Text size="xl" inline>
                Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed 5mb
            </Text>
        </div>
    </Group>
);

export const EditImage: FunctionComponent<{url: string,onUpload: (file: string) => void}> = ({url, onUpload}) => {
    const {ref,hovered } = useHover()
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    const {mutateAsync, isLoading} =  useMutation(requestV2v2UploadImage)

    return (
        <>
            <Modal
                opened={opened}
                centered
                onClose={() => setOpened(false)}
                title="Introduce yourself!"
            >

                <Dropzone
                    disabled={isLoading}
                    onDrop={async (files) => {
                        const form = new FormData()
                        form.append(
                            'file', files[0])
                        console.log('form', form)
                        const a = await mutateAsync(form, {
                            onError: (e) => {
                                console.log('eee', e)
                            },
                            onSuccess: (data) => {
                                console.log('up', data);
                                const fileName = data.msg as string
                                setOpened(false)
                                onUpload(fileName)
                            }
                        })
                        console.log('accepted files', a)
                        console.log('accepted files', files)
                    }}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={3 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                >
                    {(status) => dropzoneChildren(status, theme)}
                </Dropzone>
            </Modal>

            <Box sx={{ height: '100px', width: '100px', position: 'relative' }}  ref={ref}>
                <Image src={url} height="100px" width="100px"/>
                {hovered && <Overlay opacity={0.6} color="#000" zIndex={5} >
                    <Button onClick={() =>{
                        setOpened(true)
                    }}>Edit</Button>
                </Overlay>}
            </Box>
        </>
    )
}