/* eslint-disable jsx-a11y/anchor-is-valid */
import { Search } from '@styled-icons/evil/Search';
import {useTranslation} from "react-i18next";
import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';
import {FunctionComponent, ReactNode} from 'react';
import {ConstKunConfig} from "../../app/kun-config";
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";
import { KLink } from '../KLink';
import {chinese} from "../../i18n/zh_CN";
import {english} from "../../i18n/en_US";

function SocialButton({
                          children,
                          label,
                          href,
                      }: {
    children: ReactNode;
    label: string;
    href?: string;
}) {
  return <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded="full"
            w={8}
            h={8}
            cursor="pointer"
            as="a"
            href={href}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition="background 0.3s ease"
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
}

function ListHeader({ children }: { children: ReactNode }) {
  return <Text fontWeight="500" fontSize="lg" mb={2}>
            {children}
        </Text>
}

 export const KunFooter:FunctionComponent= () =>  {
    const  {t } = useTranslation()
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW="1000px" py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Text>{t(english._BrandName)}</Text>
                        </Box>
                        <Text fontSize="sm">
                            © 2021 翼行客深圳有限公司. All rights reserved
                        </Text>
                        <Stack direction="row" spacing={6}>
                             <SocialButton label="微博" href={ConstKunConfig.WeiboUrl} >
                                 { /* <Icon as={AiOutlineWeibo}/> */}
                             </SocialButton>
                            <SocialButton label="微信" >
                                { /* <Icon as={AiFillWechat}/> */ }
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align="flex-start">
                        <ListHeader>{t('About')}</ListHeader>
                        <KLink href={CONSTANT_ROUTES.About}>{t('About Us')}</KLink>
                        <KLink href="/live/blog/8ab50fae323f4f2c8864400979e215f4">{t('Blog')}</KLink>
                        <KLink href={CONSTANT_ROUTES.Timeline}>{t('Change Log')}</KLink>
                    </Stack>
                    <Stack align="flex-start">
                        <ListHeader>{t('Document')}</ListHeader>
                        <KLink href={CONSTANT_ROUTES.Help}>{t('Help Center')}</KLink>
                        <KLink href="#">{t('User Agreement')}</KLink>
                    </Stack>
                    <Stack align="flex-start">
                        <ListHeader>{t('Email Subscription')}</ListHeader>
                        <Stack direction="row">
                            <Input
                                placeholder={t('Please input the e-mail address')}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'white',
                                }}
                            />
                            <IconButton
                                aria-label={t(english['Email Subscription'])}
                                icon={<Icon as={Search}/>}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}