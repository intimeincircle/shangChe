import React, {FunctionComponent, memo, useCallback, useState} from "react";
import {getKunImageUrl} from "kun-shared/built/apis/get-kun-image";
import {requestUploadImage} from "kun-shared/built/apis/update-image";
import {useMutation, useQuery, useQueryClient} from "react-query";
import { Helmet } from "react-helmet";
import Cropper from "react-easy-crop";
import {
    Container,
    Box,
    Flex,
    VStack,
    StackDivider,
    Button,
    Heading,
    Badge,
    Avatar,
    Text,
    Editable, EditablePreview, EditableTextarea
} from '@chakra-ui/react';
import {useEffectAsync} from "kun-react-tools/built/hooks/use-async-effect";
import {reqGetAppConfig} from "kun-shared/built/apis/appconfig/req-get-appconfig";
// eslint-disable-next-line camelcase
import {EnumLqChannel_KUN_HorseInhabitant} from "kun-shared/built/src_managed/EnumLqChannel_KUN_Horse";
import {AppConfig} from "kun-shared/built/src_managed/AppConfig";
// @ts-ignore
import {useTranslation} from "react-i18next";
import {ReqUpdateSeries} from "kun-shared/built/src_managed/ReqUpdateSeries";
import {debounce} from "lodash";
import {defaultNavigations, Navigation} from "../../components/Navigation";
import {Header} from "../../components/Header";
import {checkIfAuthSuccess} from "../../util/check-auth-success";
import {getCroppedImgFile} from "./getImage";
import {getQiniuToken, requestV2ChangeSlogan, requestV2UpdateAvatar} from "../../apis/web";
import {useUserDetail, useUserSession} from "../../react-query/useUserSession";
import ChangeNickName from "./ChangeNickname";
import { Scaffold } from "../../components/Scaffold";
import {EditImage} from "../../components/EditImage";
import {ReactQueryKeys} from "../../shared/context";

const SettingPage: FunctionComponent = () => {
    const [setting, setSetting] = useState<AppConfig|undefined>(undefined);

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)

    const {data} = useQuery('qiniu-token', () => getQiniuToken({}))

    // const [crop, setCrop] = useState({ x: 0, y: 0 })
    // const [rotation, setRotation] = useState(0)
    // const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels1, setCroppedAreaPixels] = useState(null)


    const dogImg =
        'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000'


    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        console.log(croppedArea, croppedAreaPixels)
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])


    const refresh = async ():Promise<void> => {
        const  res = await reqGetAppConfig(EnumLqChannel_KUN_HorseInhabitant);
        if(checkIfAuthSuccess(res)) {
            console.log(res);
            setSetting(res.record)
        }
    }

    const onCrop = async () => {
        const croppedImage = await getCroppedImgFile(
            dogImg,
            croppedAreaPixels1 as any,
            0
        )

        const formData = new FormData();
        formData.append('file', croppedImage as Blob, "1.png");
        const a1= await requestUploadImage(formData);
        console.log('file, croppedImage', croppedImage)
        console.log('file, croppedImage', a1)
    }
    const {t} = useTranslation()
    const {data: userDetailInfo} = useUserDetail()

    const {mutate: mutateAvatar} = useMutation(requestV2UpdateAvatar)
    const {mutateAsync: mutateSlogan} = useMutation(requestV2ChangeSlogan)
    const queryClient = useQueryClient()

    useEffectAsync(async () => {
        await refresh();
    },[])

    const de = debounce(async (name: string) => {
            await mutateSlogan({
                slogan: name,
            }, {
                onSuccess: (x1) => {
                    console.log('x',x1)
                    queryClient.invalidateQueries(ReactQueryKeys.userDetail)
                }
            })
        }, 800)

    if(setting == null || userDetailInfo ==null) {
        return null;
    }

    return (
        <Scaffold title={t('Setting')}>
            <Container maxW="container.lg">
                <Flex direction="row" mt="24px">
                    <Box mr="32px">
                        <Navigation navigation={defaultNavigations} />
                    </Box>
                <Box minW="container.md" pt="24px" >
                    <VStack
                        width="100%"
                        spacing="24px"
                        divider={<StackDivider borderColor="gray.200" />}
                    >
                        <Flex mb={20}>
                            <EditImage url={getKunImageUrl(userDetailInfo?.record?.thumbnail ?? '')} onUpload={(image) => {
                                mutateAvatar({
                                    avatar: image
                                }, {
                                    onSuccess: () => {
                                        queryClient.invalidateQueries(ReactQueryKeys.userDetail)
                                    }
                                })
}}/>
                            <Avatar size="lg" src={getKunImageUrl(userDetailInfo?.record?.thumbnail ?? '')} />

                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    {
                                        userDetailInfo?.record?.nickName ?? userDetailInfo?.record?.userName ?? 'User'
                                    }
                                    <Editable defaultValue={userDetailInfo?.record?.slogan ?? '未填写签名'} submitOnBlur onChange={de}>
                                        <EditablePreview />
                                        <EditableTextarea />
                                    </Editable>

                                    <Badge ml='1' colorScheme='green'>
                                        New
                                    </Badge>
                                </Text>
                                <Text fontSize='sm'>{userDetailInfo?.record?.slogan ?? '未填写签名'}</Text>
                            </Box>
                        </Flex>

                        <Container maxW="container.lg">
                            <Flex justifyContent="space-between" >
                                <Heading as="h4" size="sm">
                                    {userDetailInfo?.record?.nickName}
                                </Heading>
                                <ChangeNickName  />
                            </Flex>
                        </Container>
                        {/* <Cropper */}
                        {/*    image="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000" */}
                        {/*    crop={crop} */}
                        {/*    zoom={zoom} */}
                        {/*    aspect={4 / 3} */}
                        {/*    onCropChange={setCrop} */}
                        {/*    onCropComplete={onCropComplete} */}
                        {/*    onZoomChange={setZoom} */}
                        {/* /> */}
                        <Button onClick={onCrop}>xxx</Button>
                    </VStack>
                    {/* { */}
                    {/* img && (<img src={img as unknown as string} />) } */}
                </Box>
                </Flex>
            </Container>
        </Scaffold>
    );
};


export default memo(SettingPage);
