/** @jsxImportSource @emotion/react */
import { NotionRenderer } from 'react-notion-x'
import { checkIsServer } from 'kun-tools/built/common/check-is-server';
// core styles shared by all of react-notion-x (required)
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import {ExtendedRecordMap} from "notion-types";
import 'react-notion-x/src/styles.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

import 'rc-dropdown/assets/index.css'

import {useLocation} from "react-router";
import {memo, useMemo} from "react";
import {Helmet} from "react-helmet";
import {reactQuueryGetNotionBlog, usePrefetch} from "../../react-query/core";
import {useQueryParams} from "../../app/params";
import {CONSTANT_ROUTES} from "../../routes/CONST_ROUTES";

function KunPage(): JSX.Element {
    const {name} = useQueryParams() as {name: string};
    console.log('aaaaaaa', name);

    // const {data: notionData} = useQuery([ReactQueryKeys.notionPage, String(name)], () => mockFetchQuery({name}), {
    //     enabled: false
    // })
    const {data: notionData} = usePrefetch({name}, reactQuueryGetNotionBlog)
    //
    //
    // const { search } = useLocation();

    const domain = useMemo(() => {
        if(checkIsServer()) {
           return ""
        }
           return `${window.location.hostname}/live/p`
        
    }, [])

    return (
        <div>
         <Helmet title="首页"/>

            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href={CONSTANT_ROUTES.Home}>Home</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

         <NotionRenderer rootDomain={domain} recordMap={notionData as unknown as ExtendedRecordMap} fullPage darkMode={false} disableHeader />
    </div>
);
}

export default memo(KunPage);
