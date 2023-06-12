import { getMyCreatedSeries } from "kun-shared/built/apis/series";
import {useQuery} from "react-query";
import {ReactQueryKeys} from "../../shared/context";

export const useMyCreatedSeries = () => {
    const {data,isLoading } = useQuery([ReactQueryKeys.getMyCreatedSeries],
        () => getMyCreatedSeries({}, {}), {
            staleTime: Infinity,
            cacheTime: Infinity
        })
    return {data, isLoading}
}