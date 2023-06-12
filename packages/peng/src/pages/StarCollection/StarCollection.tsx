import {FunctionComponent, memo} from "react";
import {ContentMsgType} from "kun-shared/built/src_managed/ContentMsgType";
import {useQueryParams} from "../../app/params";
import {queryGetStarCollection, usePrefetch} from "../../react-query/core";
import { Scaffold } from "../../components/Scaffold";

const Comp: FunctionComponent = () =>  {

    const params = useQueryParams() as {
        channelId: string,
        userId: string;
        msgType ?: ContentMsgType,
    };
    const a = usePrefetch(params, queryGetStarCollection)
    return (
        <Scaffold title="收藏">
            <div>
                {JSON.stringify(a)}
                ddddddddddddddd
            </div>
        </Scaffold>
    )
}
export default memo(Comp);
