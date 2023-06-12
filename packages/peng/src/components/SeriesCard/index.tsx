import React from 'react';
import {useMutation, useQueryClient} from "react-query";
import { createStyles, Card, Image, ActionIcon, Group, Text, Avatar, Badge, Menu } from '@mantine/core';
import {HorseSeriesReturn} from "kun-shared/built/src_managed/HorseSeriesReturn";
import {ExpandMore} from '@styled-icons/material/ExpandMore'
import {Settings} from "@styled-icons/material";
import {DeleteOutline} from "@styled-icons/material/DeleteOutline"
import { useTranslation } from 'react-i18next';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import { parseUrl } from 'kun-tools/built/common/parse-url';
import toast from 'react-hot-toast'
import {useModals} from "@mantine/modals";
import { generatePath } from 'react-router';
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";
import {requestV2DeleteSeries} from "../../apis/web";
import {ReactQueryKeys} from "../../shared/context";

export const getCheckedKunImageUrl = (url ?: string): string => {
    if(url == null) {
        return ''
    }
   return url.startsWith('https') ? url :`${process.env.CDN_IMG_URL}/${url}`;
}

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        // maxWidth: '370px',
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    footer: {
        padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },
}));

interface ArticleCardFooterProps {
    card: HorseSeriesReturn,
    // image: string;
    // category?: string;
    // footer: string;
    // author: {
    //     name: string;
    //     description: string;
    //     image: string;
    // };
}

export function ArticleCardFooter({
                                      // image,
    card,
                                      // category,
                                      // footer,
                                      // author,
                                  }: ArticleCardFooterProps) {
    const { classes, theme } = useStyles();

    const {mutate : deleteMutate} = useMutation(requestV2DeleteSeries)
    const queryClient = useQueryClient()

    const modals = useModals();
    const {t} = useTranslation()

    const openConfirmModal = () => modals.openConfirmModal({
        title: t('Please confirm your action'),
        children: (
            <Text size="sm">
                {
                    t('This action is so important that you are required to confirm it with a modal.')
                }
            </Text>
        ),
        labels: { confirm: t('Confirm'), cancel: t('Cancel') },
        onConfirm: () => {
            deleteMutate({
                seriesId: card.id,
            }, {
                onSuccess: () => {
                    queryClient.invalidateQueries(ReactQueryKeys.getMyCreatedSeries)
                    toast.success(t('Operates successfully'));
                }
            })
        },
    });

    // @ts-ignore
    // p="lg"
    return (
        <Card withBorder radius="md" className={classes.card}>
            <LinkBox>
                <Card.Section mb="sm">
                <Image src={getCheckedKunImageUrl(card?.coverImageName ?? 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80')} alt={card.title} height={180} />
            </Card.Section>

            <Badge>{card?.categoryName}</Badge>

            <LinkOverlay isExternal href={generatePath(CONSTANT_ROUTES.SeriesHome, {'id': card.id})}>
            <Text weight={700} className={classes.title} mt="xs">
                {card.title}
            </Text>
            </LinkOverlay>

            </LinkBox>
            {/* <Group mt="lg"> */}
            {/*    <Avatar src={author.image} radius="sm" /> */}
            {/*    <div> */}
            {/*        <Text weight={500}>{author.name}</Text> */}
            {/*        <Text size="xs" color="dimmed"> */}
            {/*            {author.description} */}
            {/*        </Text> */}
            {/*    </div> */}
            {/* </Group> */}

            <Card.Section className={classes.footer}>
                <Group position="apart">
                    {/* <Text size="xs" color="dimmed"> */}
                        {/* {footer} */}
                    {/* </Text> */}
                    <Group spacing={0}>
                        <Menu closeOnItemClick control={
                            <ActionIcon>
                                <ExpandMore size={18} color={theme.colors.gray[6]} />
                            </ActionIcon>
                        }>
                            <Menu.Item icon={<Settings size={14} />}>Settings</Menu.Item>
                            <Menu.Item icon={<DeleteOutline size={14} />} onClick={() => {
                                openConfirmModal?.()
                            }}>{t('Delete')}</Menu.Item>
                        </Menu>
                    </Group>
                </Group>
            </Card.Section>
        </Card>
    );
}
