import {FunctionComponent} from "react";
import {z} from 'zod';
import {useTranslation} from "react-i18next";
import {useForm, zodResolver} from '@mantine/form';
import {Button, Checkbox, Text, Group} from '@mantine/core';
import {getParameter} from "kun-tools/built/common/get-parameter";
import {checkIfSuccess, getFormError} from "kun-shared/built/apis/check-if-success";
import {useMutation, useQueryClient} from "react-query";
import {useHistory, useParams} from "react-router";
import {useCookie} from "react-use";
import {
    Stack,
    Heading,
    Center, Container,
} from '@chakra-ui/react';
import {Form, Formik} from "formik";
import toast from "react-hot-toast";
import {useProfile} from "../../pages/LoginPage/use-profile";
import {InputField} from "../InputField";
import {web} from "../../apis/web";
import {ReactQueryKeys} from "../../shared/context";
import {KunLoadingOverlay} from "../LoadingOverlay";

interface LoginProps {
    onClose?: () => void
    redirectUrl?: string
}

const schema = z.object({
    name: z.string().min(2, {message: 'Name should have at least 2 letters'}),
    email: z.string().email({message: 'Invalid email'}),
    age: z.number().min(18, {message: 'You must be at least 18 to create an account'}),
});


export const LoginComp: FunctionComponent<LoginProps> = (props1) => {

    const loginMuation = useMutation(web, {
        useErrorBoundary: false
    })

    const initialValues = {user_name: '', password: ''};
    const route = useHistory()
    const [, updateCookie] = useCookie("userid");
    const {t} = useTranslation();
    const {setProfile} = useProfile();
    const queryClient = useQueryClient();
    const query = useParams() as { redirect: string }

    const form = useForm({
        schema: zodResolver(schema),
        initialValues: {
            name: '',
            email: '',
            age: 18,
        },
    });


    console.log(t('Log in'))
    console.log(t('Log in'))
    console.log(t('Log in'))
    console.log(t('Log in'))

    return (
        <KunLoadingOverlay visible={loginMuation.isLoading}>
            {/* spacing={8} */}
            <Stack py="10" mx="auto" maxW="sm">
                <Stack align="center">
                    <Heading fontSize="2xl">&nbsp;       {t('Log in')}        &nbsp;</Heading>
                </Stack>
                {/* <Box> */}
                {/*    <Box sx={{maxWidth: 340}} mx="auto"> */}
                {/* <form onSubmit={form.onSubmit((values) => { */}
                {/*    form.setFieldError('name', 'hello') */}
                {/*    console.log(values) */}
                {/* })}> */}
                {/*    <TextInput */}
                {/*        required */}
                {/*        label="Email" */}
                {/*        placeholder="example@mail.com" */}
                {/*        {...form.getInputProps('email')} */}
                {/*    /> */}
                {/*    <TextInput */}
                {/*        required */}
                {/*        label="Name" */}
                {/*        placeholder="John Doe" */}
                {/*        mt="sm" */}
                {/*        {...form.getInputProps('name')} */}
                {/*    /> */}
                {/*    <NumberInput */}
                {/*        required */}
                {/*        label="Age" */}
                {/*        placeholder="Your age" */}
                {/*        mt="sm" */}
                {/*        {...form.getInputProps('age')} */}
                {/*    /> */}

                {/*    <Group position="right" mt="xl"> */}
                {/*        <Button type="submit">Submit</Button> */}
                {/*    </Group> */}
                {/* </form> */}
                {/*    </Box> */}
                {/* </Box> */}

                <Container>
                    <Center>
                        <Container sx={{maxWidth: '340px'}}>
                            <Formik
                                initialValues={initialValues}
                                onSubmit={async (values, actions) => {
                                    console.log('eeeee');
                                    loginMuation.mutate({
                                        user_name: values.user_name,
                                        password: values.password
                                    }, {
                                        onSuccess: async (data) => {
                                            if (checkIfSuccess(data)) {
                                                console.log('xxx', data);
                                                // const gotProfile = await getUserSession({})
                                                localStorage.setItem('AUTH', data.msg)
                                                queryClient.invalidateQueries(ReactQueryKeys.userSession)
                                                // // TODO replace useQuery
                                                // if(checkIfSuccess(gotProfile) && gotProfile.record!=null) {
                                                //    setProfile(gotProfile.record)
                                                // }

                                                updateCookie(data.msg)
                                                if (props1?.onClose) {
                                                    props1.onClose?.()
                                                } else {
                                                    console.log('replace, url', props1.redirectUrl)
                                                    console.log('replace, url', query.redirect)
                                                    route.replace(props1.redirectUrl ?? decodeURIComponent(getParameter('redirect') ?? ''))
                                                }
                                            } else {
                                                console.log('xxxxxx')
                                                const formError: [string, string][] | null = getFormError(data)
                                                if (formError != null) {
                                                    formError.forEach(item => {
                                                        actions.setFieldError(item[0], item[1])
                                                    })
                                                } else {
                                                    actions.setFieldError('password', data.msg)
                                                    toast.error('fail')
                                                }
                                            }
                                        }
                                        // onError: (data: unknown) => {
                                        //     console.log('onError', data);
                                        //     actions.setFieldError('password', (data as {msg: string})?.msg)
                                        //     toast({
                                        //         title: "登录失败. onError",
                                        //         description: "&&&&&",
                                        //         status: 'warning',
                                        //         duration: 9000,
                                        //         isClosable: true,
                                        //     })
                                        // }
                                    })
                                    // console.error(values)
                                    // const r = await web({
                                    //     user_name: values.user_name,
                                    //     password: values.password
                                    // })
                                    // return
                                    // console.log('r', r);
                                    // if(!checkSuccessUtil(r)){
                                    //     actions.setFieldError('password', r.msg)
                                    //     throw new Error("xxxxxxx")
                                    // toast({
                                    //     title: "登录失败.",
                                    //     description: "&&&&&",
                                    //     status: 'warning',
                                    //     duration: 9000,
                                    //     isClosable: true,
                                    // })
                                    // }else {
                                    //     toast({
                                    //         title: "登录成功",
                                    //         description: "",
                                    //         status: "success",
                                    //         duration: 9000,
                                    //         isClosable: true,
                                    //     })
                                    //
                                    //     localStorage.setItem('AUTH', r.msg)
                                    //
                                    //     updateCookie(r.msg)
                                    //
                                    //     const gotProfile = await getUserSession({})
                                    //     if(checkIfSuccess(gotProfile) && gotProfile.record!=null) {
                                    //         setProfile(gotProfile.record)
                                    //     }
                                    //     props1.onClose?.()
                                    //     route.replace(CONSTANT_ROUTES.Home)
                                    // }
                                    actions.setSubmitting(false)
                                }}
                            >
                                {(props: any) => (
                                    <Form>
                                        <Stack spacing={4}>
                                            <InputField name="user_name" label={t('Account name')} type="text"/>
                                            <InputField name="password" label={t('Password')} type="password"/>
                                            <Stack spacing={10}>
                                                <Group direction="row">
                                                    <Checkbox>{t('Remember me')}</Checkbox>
                                                    <Text>
                                                        Forgot password?
                                                    </Text>
                                                </Group>
                                                <Button
                                                    loading={props.isSubmitting}
                                                    type="submit"
                                                    color="white">
                                                    {t('Log in')}
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Form>
                                )}
                            </Formik>
                        </Container>
                    </Center>
                </Container>
            </Stack>
        </KunLoadingOverlay>
    )
}

export default LoginComp