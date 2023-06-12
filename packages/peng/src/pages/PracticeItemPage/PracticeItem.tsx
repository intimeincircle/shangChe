import {FunctionComponent, memo} from "react";
import {getAuthLocalStorageItem} from "kun-tools/built/common/req";
import { useQuery } from "react-query";
import { Scaffold } from "../../components/Scaffold";
import { useDefaultApi } from "../../components/Comment/useMuationDefault";
import {defaultApi} from "../../react-query/api";
import {useQueryParamType} from "../../app/params";

const Comp: FunctionComponent = () =>  {
    const query = useQueryParamType<{
        seriesId: string;
        postId: string;
        exerciseId: string;
    }>()
    const {data} = useQuery(['p'],() => useDefaultApi(defaultApi.postApiV1TapirHorseExerciseItem)({
        authorization: getAuthLocalStorageItem('AUTH'),
        reqGetExerciseItem: query
    }))

    return (
        <Scaffold title="Pratice">
            <div>
                {JSON.stringify(data)}
                ddddddddddddddd
            </div>
        </Scaffold>
    )
}

export default memo(Comp);
