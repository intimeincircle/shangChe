import {FunctionComponent, useState} from "react"
import {Button, TextInput } from "@mantine/core";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { Scaffold } from "../../components/Scaffold";
import {useQueryParamType} from "../../app/params";
import {getQueryGetSeriesDetail, usePrefetch} from "../../react-query/core";
import {useDefaultApi, useMutationDefaultApi} from "../../components/Comment/useMuationDefault";
import {defaultApi} from "../../react-query/api";

const  SeriesSetting: FunctionComponent = () => {
    const {id: seriesId } = useQueryParamType<{id: string}>()
    const {data: detail, queryKey} = usePrefetch({id: seriesId}, getQueryGetSeriesDetail)
    const {mutateAsync: mutateDeletePinCard} = useMutationDefaultApi(useDefaultApi(defaultApi.postApiV1HorseSeriesPrice))

    const [v, setV] = useState<string>('')
    
    const {t} = useTranslation()

    return (
        <Scaffold title={`${t('Setting')} ${detail?.record?.series?.title ?? ''}`}>
            {
                JSON.stringify(detail ?? '')
            }
            
            <TextInput value={v} onChange={(e) => {
                setV(e.target.value)
            }} />

            <Button onClick={() => {
                mutateDeletePinCard({
                    reqUpdateSeriesPrice: {
                        seriesId,
                        price: Number(v),
                    }
                }, {
                    onSuccess: () => {
                        toast.success('ok')
                    }
                })
            }}>onChange</Button>
        </Scaffold>
    )
}

export default SeriesSetting