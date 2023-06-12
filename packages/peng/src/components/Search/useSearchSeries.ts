import {useQuery} from "react-query";
import {ReactQueryKeys} from "../../shared/context";
import {requestSearchByEs, requestSearchCard, requestV2SearchTribe} from "../../apis/web";
import { useDefaultApi } from "../Comment/useMuationDefault";
import {defaultApi} from "../../react-query/api";

export const useSearchCardListByEs = (name: string) => useQuery([
        ReactQueryKeys.getCardListSearchByEs,
        name
    ], () => requestSearchByEs({
        query: name,
    }))

export const useSearchSeries = (name: string) => useQuery([
    ReactQueryKeys.getBlogList,
    name
], () => requestV2SearchTribe({
    name
}))


export const useSearchCardList = (name: string) => useQuery([
    ReactQueryKeys.getCardList,
    name
], () => requestSearchCard({
    query: name,
}))

export const useSearchCardAndSeries = (name: string) => useQuery([
    ReactQueryKeys.getApiV1Search50Horse,
    name
], () => defaultApi.getApiV1Search50Horse.bind(defaultApi)({
    query: name
}))
