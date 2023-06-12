import {FunctionComponent, memo} from "react";
import { getAuthLocalStorageItem } from "kun-tools/built/common/req";
import { Button } from "@mantine/core";
import {useHistory} from "react-router";
import {useQuery} from "react-query";
import { Scaffold } from "../../components/Scaffold";
import {useDefaultApi} from "../../components/Comment/useMuationDefault";
import {defaultApi} from "../../react-query/api";

const Comp: FunctionComponent = () =>  {

    const a = useQuery(['p'],() => useDefaultApi(defaultApi.getApiV1ConcernPractice52List)({
        authorization: getAuthLocalStorageItem('AUTH'),
    }))

    const history = useHistory();

    return (
        <Scaffold title="收藏">
            <div>
                {JSON.stringify(a)}
                {
                    (a.data?.records ??  []).map(item => (
                        <Button onClick={() => {
                                const href = `/live/practice/${item.seriesId}/${item.postId}/${item.id}`
                                window.open(href, '_blank');
                            }}>
                                {item.title}
                                {item.postTitle}
                                {item.seriesName}
                            </Button>
                    ))
                }
            </div>
        </Scaffold>
    )
}
export default memo(Comp);
