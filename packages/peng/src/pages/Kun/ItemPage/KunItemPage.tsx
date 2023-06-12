import { memo } from "react";
import {useQueryParams} from "../../../app/params";
import {getKunArticleItem, usePrefetch} from "../../../react-query/core";

function KunItemPage(): JSX.Element {
    const params = useQueryParams() as {symbol: string,id: string};
    const a = usePrefetch(params, getKunArticleItem)
    return (<div>xxx {JSON.stringify(a)} </div>)
}

export default memo(KunItemPage)
