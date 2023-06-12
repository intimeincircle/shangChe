import React, {FunctionComponent, useState} from "react";
import {getParameter} from "kun-tools/built/common/get-parameter";
import NoSSR from "@mpth/react-no-ssr";
import dayjs from "dayjs";
import {
    getIndexEventsByStock, getIndexHistoryByStock, getPanmingByIndex,
    RetEvents
} from "kun-shared/built/apis/getEventsByStock";
import {useEffectAsync} from "kun-react-tools/built/hooks/use-async-effect";
import {Helmet} from "react-helmet";
import {useImmer} from "use-immer";
import {SimpleHeader} from "../../components/SimpleHeader";
import {KunFooter} from "../../components/Footer";
import {IOHLCData} from "../A/iOHLCData";
import { EventsB } from "../Events/B";

type Serie = any

type CartesianMarkerProps = any

const Events: FunctionComponent = () => {

    const [dagtaLi, setDaList] = useState<IOHLCData[]>([])
    const [eventsList, setEvents] = useState<RetEvents[]>([])
    // console.log('StockChart', StockChart);
    const [list, setList] = useImmer<Serie[]>([{
        id: 'fake corp. A',
        data: [
            { x: '2018-01-01', y: 7 },
        ],
    }])
    const [markers, setMarkers] = useImmer<CartesianMarkerProps[]>([{
        axis: 'x',
        value: dayjs('2018-01-06').toDate(),
        lineStyle: { stroke: '#b0413e', strokeWidth: 2 },
        legend: 'y ss  marker',
    }])

    useEffectAsync(async () => {
        const code = getParameter('code') ?? '603517'
        console.log('v', events);
        const history = await getIndexHistoryByStock(code)
        console.log('history', history)
        const Data = history.records.map(r => ({...r, date: dayjs(r.date)})).sort((a, b) => a.date.isAfter(b.date) ? 1: -1).map(r => ({
            x: dayjs(r.date).format('YYYY-MM-DD'),
            y: Number(r.close)
        }))

        const events = await getIndexEventsByStock(code)

        setEvents(events.records ?? [])

        const chaodie = await getPanmingByIndex(code)
        const Data11dd = history.records.map(r => ({...r, date: dayjs(r.date)})).sort((a, b) => a.date.isAfter(b.date) ? 1: -1).map(r => ({
            ...r,
            date: dayjs(r.date).toDate(),
        }))
        console.log('DadaDadaDadaDadaDadaDadaDadaDadaDada', Data11dd?.[0])
        console.log('DadaDadaDadaDadaDadaDadaDadaDadaDada', Data11dd)
        setDaList(Data11dd);
        const Data1 = chaodie.map(r => ({...r, date: dayjs(r.date)})).sort((a, b) => a.date.isAfter(b.date) ? 1: -1).map(r => ({
            x: dayjs(r.date).format('YYYY-MM-DD'),
            y: Number(r.value)
        }))
        console.log('D', Data)
        setMarkers(() => events.records.map(r => ({
            axis: 'x',
            value:new Date(r.dateTime),
            lineStyle: { stroke: '#b0413e', strokeWidth: 2 },
            legend: r.eventNameOpt
        })))

        setList(() => [
            {
                id: 'chaodie',
                data: Data1
            }
        ])
    }, [])

    return (
        <>
            <Helmet title="Events"/>
            <SimpleHeader/>
            <NoSSR>
                <EventsB events={eventsList} dagtaLi={dagtaLi} list={list as any} markers={markers as unknown as any} />
            </NoSSR>
            <KunFooter/>
        </>
    )
}
export default React.memo(Events)
