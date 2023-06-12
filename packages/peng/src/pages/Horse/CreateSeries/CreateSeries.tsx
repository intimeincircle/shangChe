import {FunctionComponent, memo} from "react";
import {useMutation} from "react-query";
import {ConstantSeriesType} from "kun-shared/built/src_managed/ConstantSeriesType";
import {checkIfSuccess, getFormError} from "kun-shared/built/apis/check-if-success";
import {Helmet} from "react-helmet";
import {readInhabitant} from "kun-shared/built/src_managed/read";
import {useHistory} from "react-router";
import {memoryInhabitant} from "kun-shared/built/src_managed/memory";
import {css} from "@emotion/react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    HStack,
    Radio,
    RadioGroup,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {Form, Formik} from "formik";
import {reqCreateSeries} from "kun-shared/built/apis/req-create-series";
import {InputField} from "../../../components/InputField";
import {Header} from "../../../components/Header";
import {KunFooter} from "../../../components/Footer";
import {getMessageSuccess} from "../../../navigators";
import {CONSTANT_ROUTES} from "../../../routes/CONST_ROUTES";
import {NavigationMessageInfo} from "../../../navigators/NavigationMessageInfo";

const options = [
    {
        value: readInhabitant,
        label: '阅读'
    },{
        value: memoryInhabitant,
        label: '记忆曲线'
    }
]

const CreateSeries: FunctionComponent = () => {

    const history = useHistory();
    const initialValues = {title: '', description: '', seriesType: readInhabitant};

    const createMutate = useMutation(reqCreateSeries, {
        useErrorBoundary: false
    })

    return (
        <>
            <Helmet title="Home"/>
            <Header/>
            <Flex
                w="100%"
                align="center"
                justify="center"
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
                    <Stack align="center">
                        <Heading fontSize="4xl">&nbsp;       添加新的合辑        &nbsp;</Heading>
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
                                createMutate.mutate({
                                    title: values.title,
                                    description: values.description,
                                    seriesType: values.seriesType as ConstantSeriesType,
                                }, {
                                    onSuccess: (data) => {
                                        if(checkIfSuccess(data)){
                                            history.push(getMessageSuccess(NavigationMessageInfo.CreateSuccess, CONSTANT_ROUTES.MySeries))
                                        } else {
                                            const formError: [string, string][] | null = getFormError(data)
                                            if (formError != null) {
                                                formError.forEach(item => {
                                                    actions.setFieldError(item[0], item[1])
                                                })
                                            }
                                        }
                                        actions.setSubmitting(false)
                                    }
                                })
                            }}
                        >
                            {(props: any) => (
                                <Form css={css`
                                min-width: 400px;
                                `}>
                                    <Stack spacing={4}>
                                        <InputField name="title" label="名称" type="text" />
                                        <FormControl as="fieldset">
                                            <FormLabel as="legend">选择类型</FormLabel>
                                            <RadioGroup defaultValue={readInhabitant} id="seriesType">
                                                <HStack spacing="24px">
                                                    {
                                                        options.map(option => (
                                                            <Radio key={option.value}
                                                                value={option.value}>{option.label}</Radio>
                                                        ))
                                                    }
                                                </HStack>
                                            </RadioGroup>
                                            <FormHelperText>如何不清楚，就选择阅读型.</FormHelperText>
                                        </FormControl>

                                        <InputField name="description" label="简介" type="text" textarea/>
                                        <Stack spacing={10}>
                                            <Button
                                                variant='link`'
                                                type="submit"
                                                isLoading={props.isSubmitting}
                                            >
                                                提交
                                            </Button>
                                            <Button
                                                variant='ghost'
                                            type="submit"
                                            isLoading={props.isSubmitting}
                                            >
                                            提交
                                        </Button>
                                        <Button
                                                variant='outline'
                                                type="submit"
                                                isLoading={props.isSubmitting}
                                            >
                                                提交
                                            </Button>
                                            <Button
                                                variant='solid'
                                                type="submit"
                                                isLoading={props.isSubmitting}
                                            >
                                                提交
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Stack>
            </Flex>
            <KunFooter/>
        </>
    );
};

export default memo(CreateSeries);
