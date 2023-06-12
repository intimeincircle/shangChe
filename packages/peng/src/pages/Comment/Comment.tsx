import { memo } from "react";
import { useQueryParams } from "../../app/params";
import {getChildCommentList, getQueryCommentItem, usePrefetch} from "../../react-query/core";

function Page(): JSX.Element {
    const params = useQueryParams() as {
        postId: string
        channelId: number
        commentId: string
    };
    const a = usePrefetch(params, getQueryCommentItem)
    const a1 = usePrefetch(params, getChildCommentList)
    return (<div>xxx {JSON.stringify(a)} {JSON.stringify(a1)}</div>)
}

export default memo(Page)
