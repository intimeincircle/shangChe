/* eslint-disable react/no-unstable-nested-components */
import {FunctionComponent, memo} from "react";
import {RetEvents} from "kun-shared/built/apis/getEventsByStock";
import {CartesianMarkerProps} from "@nivo/core";
import {ResponsiveLine, Serie} from "@nivo/line";
// import {StockChart} from "../A";
import {IOHLCData} from "../A/iOHLCData";
// import { StockChart } from "./C";

export const EventsB: FunctionComponent<{
    events: RetEvents[],
    dagtaLi: IOHLCData[], list: Serie[], markers: CartesianMarkerProps[]}> = memo(({events, dagtaLi, list, markers}) => (
    <>
        <div style={{margin: '30px auto', display: 'flex', justifyContent: 'center'}}>
            {/* <StockChart events={events} ratio={1} data={dagtaLi} width={1024} height={600} list={list} /> */}
        </div>
        <div  style={{ width: "100%", height:"500px"}}>
            <ResponsiveLine
                data={list}
                margin={{top: 50, right: 110, bottom: 50, left: 60}}
                sliceTooltip={({ slice }) => (
                    <div
                        style={{
                            background: 'white',
                            padding: '9px 12px',
                            border: '1px solid #ccc',
                        }}
                    >
                        {slice.points.map(point => (
                            <div
                                key={point.id}
                                style={{
                                    color: point.serieColor,
                                    padding: '3px 0',
                                }}
                            >
                                <strong>{point.data.xFormatted}</strong> [{point.data.yFormatted}]
                            </div>
                        ))}
                    </div>
                )}
                markers={markers}
                // xScale={{type: 'point'}}
                xScale={{
                    type: 'time',
                    format: '%Y-%m-%d',
                    useUTC: false,
                    precision: 'day',
                }}
                xFormat="time:%Y-%m-%d"
                yScale={{type: 'linear', stacked: true, reverse: false}}
                yFormat=" >-.2f"
                enableSlices="x"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    format: '%y-%m-%d',
                    tickValues: 'every 2 days',
                    // legend: 'time scale',
                    // legendOffset: -12,
                }}
                axisLeft={{
                    tickSize: 5,
                    // tickPadding: 5,
                    // tickRotation: 0,
                    // legend: 'count',
                    // legendOffset: -40,
                    // legendPosition: 'middle'
                }}
                // pointSize={10}
                // pointColor={{theme: 'background'}}
                // pointBorderWidth={2}
                // pointBorderColor={{from: 'serieColor'}}
                // pointLabelYOffset={-12}
            />
        </div>
    </>
))

