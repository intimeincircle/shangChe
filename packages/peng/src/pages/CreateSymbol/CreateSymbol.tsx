import {FunctionComponent, memo, useState} from "react";
import {Helmet} from "react-helmet";
import {ReqCreateSymbolAndChannel} from "kun-shared/built/v2/api/v2";
import {useMutation} from "react-query";
import {kunInhabitant} from "kun-shared/built/src_managed/kun";
import {css} from "@emotion/react";
import {
    Box,
    Button,
    Flex,
    Heading,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {Form, Formik} from "formik";
import {Loader, TextInput } from "@mantine/core";
import {debounce} from "lodash";
import {ScTwitter, Search } from "@styled-icons/evil";
import { Header } from "../../components/Header";
import { KunFooter } from "../../components/Footer";
import {ConstKunTheme} from "../../app/theme";
import { InputField } from "../../components/InputField";
import {createSymbol, requestv2SymbolCheckNameAviable} from "../../apis/web";


const CreateSeries: FunctionComponent = () => {

    const initialValues = {name: '', symbol: ''};

    const mutate = useMutation(async (data: ReqCreateSymbolAndChannel)=> createSymbol(data))

    const [isOk, setIsok] = useState(false)
    const {mutateAsync: async2SymbolCheckNameAviable, isLoading} = useMutation(requestv2SymbolCheckNameAviable)


    const onChange = (name: string) => {
        async2SymbolCheckNameAviable({
            channelId: kunInhabitant.world,
            name,
        }, {
            onSuccess: (d) => {

                if(d.record) {
                    setIsok(d.record ?? false)
                }else {
                    setIsok(false)
                }
            }
        })
    }

    const changeH = debounce(onChange, 400)

    let m: JSX.Element | string;
    if (isLoading) {
        m = <Loader size="xs"/>;
    } else {
        m = isOk ? <Search/> : <ScTwitter/>;
    }

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
                        <Heading fontSize="4xl">&nbsp;       添加Node        &nbsp;</Heading>
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
                                const formValue = {
                                    channelId: kunInhabitant.world,
                                    ...values,
                                }
                                mutate.mutate(formValue, {
                                    onSuccess:() =>  console.log('ok') ,
                                    onError: () => {
                                        actions.setFieldError('name', 'wrong')
                                    }
                                })
                            }}
                        >
                            {(props: any) => (
                                <Form css={css`
                                min-width: 400px;
                                `}>
                                    <Stack spacing={4}>
                                        {/* <InputField name="name" label="名称" type="text" /> */}
                                        <TextInput onChange={(v) => changeH(v.target.value)}
                                            label="Your email" placeholder="Your email" rightSection={m} />
                                        
                                        <InputField name="symbol" label="symbol" type="text" />
                                        <Stack spacing={10}>
                                            <Button
                                                type="submit"
                                                isLoading={props.isSubmitting}
                                                bg={ConstKunTheme.primaryColor}
                                                color="white"
                                                _hover={{
                                                    bg:ConstKunTheme.primaryHoverColor,
                                                }}>
                                                登录
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
