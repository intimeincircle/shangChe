import {useQuery} from "react-query";
import {getSubscribeSeries} from "kun-shared/built/apis/series";

export const useMySubscribedSeries = () => {
    const {data,isLoading } = useQuery(['subscribedSeries'],
        () => getSubscribeSeries({}, {}), {
        staleTime: Infinity,
        cacheTime: Infinity,
        useErrorBoundary: true
    })
    return {
        data,
        isLoading
    }
}