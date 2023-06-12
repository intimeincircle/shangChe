import { Anchor, Breadcrumbs } from "@mantine/core";
import {useTranslation} from "react-i18next";
import {useMemo} from "react";

export const BreadcrumbsLink = () => {
    const {t} = useTranslation()
    const items = useMemo(() => ([
        { title: t('Home'), href: '#' },
        { title: 'Mantine hooks', href: '#' },
        { title: 'use-id', href: '#' },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ))), [t])

   return (
        <Breadcrumbs>{items}</Breadcrumbs>
    )
}