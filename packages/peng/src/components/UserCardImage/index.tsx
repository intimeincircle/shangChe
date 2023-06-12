import React from 'react';
import clsx from 'clsx';
import {getAuthLocalStorageItem, getLocalStorageItem} from "kun-tools/built/common/req";
import { createStyles, Card, Avatar, Text, Group, Button } from '@mantine/core';
import {useQuery, useQueryClient} from 'react-query';
import {horseInhabitant} from "kun-shared/built/src_managed/horse";
import {RetLqUser} from "kun-shared/built/src_managed/RetLqUser";
import toast from 'react-hot-toast';
import {KunUser} from "kun-shared/built/fetch";
import {requestv2ConcernStatus} from "../../apis/web";
import {ReactQueryKeys} from "../../shared/context";
import {useMutationDefaultApi} from "../Comment/useMuationDefault";
import {defaultApi} from "../../react-query/api";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    avatar: {
        border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
}));

interface UserCardImageProps {
    image: string;
    avatar: string;
    name: string;
    job?: string;
    item?: KunUser;
    className?: string;
    stats?: { label: string; value: string }[];
}

export function UserCardImage({ image, avatar, name, job, stats, item, className }: UserCardImageProps) {
    const { classes, theme } = useStyles();

    console.log('item', item)

    const queryClient = useQueryClient();

    const {data} =useQuery([ReactQueryKeys.userSubscribe, item?.userId], () => requestv2ConcernStatus({
        channelId: horseInhabitant.base,
        target: encodeURIComponent(item?.userId ??'')
    }), {
        enabled: item?.userId !=null,
    })

    const {mutate} =useMutationDefaultApi(defaultApi.postApiV1Concern50Create)
    console.log('data data',data)

    const items = (stats ?? []).map((stat) => (
        <div key={stat.label}>
            <Text align="center" size="lg" weight={500}>
                {stat.value}
            </Text>
            <Text align="center" size="sm" color="dimmed">
                {stat.label}
            </Text>
        </div>
    ));

    // @ts-ignore
    return (
        <Card withBorder padding="xl" radius="md" className={clsx(classes.card, className)}>
            <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140 }} />
            <Avatar src={avatar} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
            <Text align="center" size="lg" weight={500} mt="sm">
                {name}
            </Text>
            {
                job && (
                    <Text align="center" size="sm" color="dimmed">
                        {job}
                    </Text>
                )

            }
            <Group mt="md" position="center" spacing={30}>
                {items}
            </Group>
            <Button
                fullWidth
                radius="md"
                mt="xl"
                size="md"
                onClick={() => {
                    mutate({
                        authorization: getAuthLocalStorageItem('AUTH')?? '',
                        reqCreateConcern:                    {
                        target: item?.userId ?? '',
                            isLinked: data?.record == null,
                        isUUID: true,
                    }
                    }, {
                        onSuccess: () => {
                            queryClient.invalidateQueries(ReactQueryKeys.userSubscribe)
                            toast.success('ok')
                        }
                    })
                }}
                // color={theme.colorScheme === 'dark' ? undefined : 'dark'}
            >
                {
                    String(data?.record)
                }
                Follow
            </Button>
        </Card>
    );
}