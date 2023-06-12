import {FunctionComponent} from "react";
import {useHistory, useParams} from "react-router";
import {
    ModalOverlay,
    ModalFooter,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
    Button,
    Modal, Stack, Heading, Text, Box, useColorModeValue,
} from '@chakra-ui/react';
import {css} from "@emotion/react";
import {Form, Formik} from "formik";
import {BAIDU_DOWNLOADInhabitant} from "kun-shared/built/src_managed/BAIDU_DOWNLOAD";
import {requestCreateHorseCardSubmit} from "kun-shared/built/apis/create-card";
import {checkIfAuthSuccess} from "../../../util/check-auth-success";
import {getMessageSuccess} from "../../../navigators";
import {NavigationMessageInfo} from "../../../navigators/NavigationMessageInfo";
import {CONSTANT_ROUTES} from "../../../routes/CONST_ROUTES";
import {InputField} from "../../InputField";
import {ConstKunTheme} from "../../../app/theme";
import {useQueryParams} from "../../../app/params";


export const CreateBaiduLInkButton: FunctionComponent= () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const {id: seriesId} = useQueryParams() as {id: string};

    const history = useHistory();

    const initialValues = {url: '', title: '', delta: ''};

    return (
        <>
            <Button onClick={onOpen}>Add Baidu Link</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                            <Stack align="center">
                                <Heading fontSize="4xl">&nbsp; 添加链接        &nbsp;</Heading>
                                <Text fontSize="lg" color="gray.600" />
                            </Stack>
                            <Box
                                rounded="lg"
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow="lg"
                                p={8}>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={async (values, actions) => {
                                        console.error(values)
                                        const r = await requestCreateHorseCardSubmit({
                                            seriesId,
                                            title: values.title,
                                            delta: values.delta,
                                            content: values.url,
                                            postType: BAIDU_DOWNLOADInhabitant
                                        })
                                        console.log('rx', r)
                                        if(!checkIfAuthSuccess(r)){
                                            console.log('set error', r)
                                            actions.setFieldError('title', r.msg)
                                        } else {
                                            console.log('ok ')
                                            history.push(getMessageSuccess(NavigationMessageInfo.CreateSuccess, CONSTANT_ROUTES.MySeries))
                                        }
                                        actions.setSubmitting(false)
                                    }}
                                >
                                    {(props: any) => (
                                        <Form css={css`
                                min-width: 400px;
                                `}>
                                            <Stack spacing={4}>
                                                <InputField name="title" label="title" type="text" />
                                                <InputField name="url" label="url" type="text" textarea/>
                                                <InputField name="delta" label="delta" type="text" />

                                                <Stack spacing={10}>
                                                    <Button
                                                        type="submit"
                                                        isLoading={props.isSubmitting}
                                                        bg={ConstKunTheme.primaryColor}
                                                        color="white"
                                                        _hover={{
                                                            bg:ConstKunTheme.primaryHoverColor,
                                                        }}>
                                                        添加
                                                    </Button>
                                                </Stack>
                                            </Stack>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
