import create from 'zustand'
import produce from 'immer'

import {NoSqlPagingListData} from "kun-shared/built/common/NoSqlPagingListData";
import {ChatGroupByUserReturn} from "kun-shared/built/src_managed/ChatGroupByUserReturn";
import {getSeriesMetaDetail} from "kun-shared/built/apis/get-series-detail";
import {checkIfSuccess} from "kun-shared/built/apis/check-if-success";
import {HorseSeriesFull} from "kun-shared/built/src_managed/HorseSeriesFull";
import {getSubscribeSeriesStatus} from "kun-shared/built/apis/get-subscribe-series-status";
import {HashLong} from "kun-shared/built/src_managed/HashLong";
import {OptionData} from "kun-shared/built/src_managed/OptionData";
import {SeriesSubscription} from "kun-shared/built/src_managed/SeriesSubscription";

type SeriesDetailState  = {
    groups ?: NoSqlPagingListData<ChatGroupByUserReturn>,
    seriesMeta ?: HorseSeriesFull,
    seriesSubscriptionOpt?: OptionData<SeriesSubscription>,
    setGroups : (groups: NoSqlPagingListData<ChatGroupByUserReturn>)  => void,
    getSeries : (seriesId: string)  => void,
    getSubscriptionOption: (seriesId: string) => Promise<void>,
    setSeriesMeta : (series: HorseSeriesFull)  => void,
}

export const useSeriesStore = create<SeriesDetailState>(set =>
     ({
        set: (fn: (r: SeriesDetailState) => SeriesDetailState) => set(produce(fn)),
        seriesMeta: undefined,
        getSubscriptionOption: async (seriesId: string) => {
            const rspSubscription = await getSubscribeSeriesStatus({seriesId: seriesId as HashLong });
            set(produce(r => {
                r.seriesSubscriptionOpt = rspSubscription;
            }));
        },
         groups: undefined,
        getSeries: async (seriesId: string) => {
            const r1 = await getSeriesMetaDetail(seriesId);
            if (checkIfSuccess(r1)) {
                set(produce(r => {
                    r.seriesMeta = r1.record;
                }));
            }
        },
         setSeriesMeta : (series: HorseSeriesFull) => set(produce(r => {
             r.seriesMeta = series
         })),
        setGroups: (groups: NoSqlPagingListData<ChatGroupByUserReturn>) => set(produce(r => {
            r.groups = groups
        })),
    }));
