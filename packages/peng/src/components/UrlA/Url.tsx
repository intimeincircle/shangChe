import { Group } from '@mantine/core';
import { UrlProps } from 'interweave-autolink';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@chakra-ui/react';
import {ExternalLink} from "@styled-icons/evil";

export function Url({ children, url, urlParts, ...props }: UrlProps) {
    let href = url;

    if (!href.match(/^https?:\/\//)) {
        href = `http://${href}`;
    }

    const {t} = useTranslation();
    return (
        <Group align="center" direction="row" noWrap spacing={0}>
            <ExternalLink size={12} />
            <Link {...props} href={href} isExternal color="blue">
                    {
                        t('Link')
                    }
        </Link>
        </Group>
    );
}