import {FunctionComponent, memo} from "react";
import {useHistory} from "react-router";
import {css} from "@emotion/react";
import {requestCreateHorseCardSubmit} from "kun-shared/built/apis/create-card";
import {
    Box,
    Button,
    Heading,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {Form, Formik} from "formik";
import {InputField} from "../../../components/InputField";
import {ConstKunTheme} from "../../../app/theme";
import {getMessageSuccess} from "../../../navigators";
import {CONSTANT_ROUTES} from "../../../routes/CONST_ROUTES";
import {NavigationMessageInfo} from "../../../navigators/NavigationMessageInfo";
import {checkIfAuthSuccess} from "../../../util/check-auth-success";

interface Props {
    seriesId: string
}

export const CreateShareLink: FunctionComponent<Props> = memo(({seriesId}) => {
    const history = useHistory();
    const initialValues = {url: '', description: ''};

    return (
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
                                    title: values.description,
                                    link: values.url,
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
                                        <InputField name="url" label="url" type="text" />
                                        <InputField name="description" label="description" type="text" textarea/>

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
    );
});

