import React from 'react';
import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import {useTranslation} from "react-i18next";
import {primarySchema} from "../../app/theme";

// @ts-ignore
const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: 80,
        paddingBottom: 120,
        height: '100vh',
        backgroundColor: theme.colors[primarySchema][6],
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 220,
        lineHeight: 1,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colors[primarySchema][3],

        [theme.fn.smallerThan('sm')]: {
            fontSize: 120,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: 38,
        color: theme.white,
        marginBottom: theme.spacing.xl * 1.5,
        [theme.fn.smallerThan('sm')]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 540,
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colors[primarySchema][1],
    },
}));

export function ServerError(props: {onClick ?: () =>void}) {
    const { classes } = useStyles();

    const {t} = useTranslation()

    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.label}>500</div>
                <Title className={classes.title}>{t('Oh no...')}</Title>
                {/* <Text size="lg" align="center" className={classes.description}> */}
                {/*    Our servers could not handle your request. Don&apos;t worry, our development team was */}
                {/*    already notified. Try refreshing the page. */}
                {/* </Text> */}
                <Group position="center">
                    <Button variant="white" color={primarySchema} size="md" onClick={props.onClick}>
                        {
                            t('Refresh')
                        }
                    </Button>
                </Group>
            </Container>
        </div>
    );
}