import React from 'react';
import { createStyles, Card, Image, Avatar, Text, Group, Menu, Badge } from '@mantine/core';
import { Settings } from '@styled-icons/material';
import {useMutation} from 'react-query';
import {HorseCardReturn} from "kun-shared/built/src_managed/HorseCardReturn";
import {PracticeModal} from "../../pages/PracticeModal";
import {requestDeleteCardsBySeries} from "../../apis/web";

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    title: {
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1.2,
    },

    body: {
        padding: theme.spacing.md,
    },
}));

interface ArticleCardVerticalProps {
    item: HorseCardReturn,
    image: string;
    category: string;
    title: string;
    date: string;
    onHandled: ( ) =>void;
    author: {
        name: string;
        avatar: string;
    };
}

export function ArticleCardVertical({
    item,
                                        image,
                                        category,
                                        title,
                                        date,
                                        author,
    onHandled,
                                    }: ArticleCardVerticalProps) {
    const { classes } = useStyles();
    const {mutateAsync} = useMutation(requestDeleteCardsBySeries)

    return (
        <Card withBorder radius="md" className={classes.card}>
            <Group noWrap spacing={0}>
                <Image src={image} height={140} width={140} />
                <div className={classes.body}>
                    <Text transform="uppercase" color="dimmed" weight={700} size="xs">
                        {category}
                    </Text>
                    <Text className={classes.title} mt="xs" mb="md">
                        {title}
                    </Text>
                    <Group noWrap spacing="xs">
                        <Group spacing="xs" noWrap>
                            <Avatar size={20} src={author.avatar} />
                            <Text size="xs">{author.name}</Text>
                        </Group>
                        <Text size="xs" color="dimmed">
                            •
                        </Text>
                        <Text size="xs" color="dimmed">
                            {date}
                        </Text>


                        <Badge component="a" href="https://mantine.dev" variant="outline">
                            0 卡片
                        </Badge>

                        <div>
                            时间
                        </div>

                        <PracticeModal seriesId={item.seriesId} postId={item.cardId} />

                        <Menu>
                            <Menu.Item onClick={async () => {
                               await mutateAsync({
                                    seriesId: item.seriesId,
                                    cardId: item.cardId
                                },{
                                   onSuccess: () => {
                                       onHandled();
                                   }
                               })
                            }} icon={<Settings size={14} />}>Delete</Menu.Item>
                        </Menu>
                    </Group>
                </div>
            </Group>
        </Card>
    );
}