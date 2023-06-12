// import { format } from "d3-format";
// import {ZoomButtons} from "@react-financial-charts/interactive";
// import { timeFormat } from "d3-time-format";
// import * as React from "react";
// import {LineSeries} from "@react-financial-charts/series";
// import {CurrentCoordinate} from "@react-financial-charts/coordinates";
// import {Serie} from "@nivo/line";
// import {RetEvents} from "kun-shared/built/apis/getEventsByStock";
// import dayjs from "dayjs";
// import {
//     ChartCanvas,
//     discontinuousTimeScaleProviderBuilder,
//     elderRay,
//     // ema,
//     Chart,
//     // CurrentCoordinate,
//     BarSeries,
//     CandlestickSeries,
//     // ElderRaySeries,
//     // LineSeries,
//     MovingAverageTooltip,
//     OHLCTooltip,
//     // SingleValueTooltip,
//     lastVisibleItemBasedZoomAnchor,
//     XAxis,
//     YAxis,
//     CrossHairCursor,
//     EdgeIndicator,
//     MouseCoordinateX,
//     MouseCoordinateY, ema, Annotate, LabelAnnotation,
// } from "./C";
// import {IOHLCData} from "./iOHLCData";
//
// interface StockChartProps {
//     events: RetEvents[],
//     readonly data: IOHLCData[];
//     readonly height: number;
//     readonly dateTimeFormat?: string;
//     readonly width: number;
//     list: Serie[];
//     readonly ratio: number;
// }
//
// const  margin = { left: 0, right: 48, top: 0, bottom: 38 };
// const  pricesDisplayFormat = format(".2f");
// const  xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(
//     (d: IOHLCData) => d.date,
// );
//
// const barChartExtents = (data: IOHLCData) => data.volume;
//
// const candleChartExtents = (data: IOHLCData) => [data.high, data.low];
// // xExtents={xExtents}
//
//
// const  yEdgeIndicator = (data: IOHLCData) => data.close;
//
// const  volumeColor = (data: IOHLCData) => data.close > data.open ? "rgba(38, 166, 154, 0.3)" : "rgba(239, 83, 80, 0.3)";
//
// const  volumeSeries = (data: IOHLCData) => {
//     console.log('data', data.volume);
//     return 100;
//    // return  data.volume;
// }
//
// console.log('volumeSeries ', volumeSeries)
//
// const openCloseColor = (data: IOHLCData) => data.close > data.open ? "#26a69a" : "#ef5350";
//
// export const  StockChart : React.FunctionComponent<StockChartProps>  = (props) => {
//
//     console.log('events', props.events)
//     console.log('events', props.events)
//     console.log('events', props.events)
//
//     const { data: initialData, dateTimeFormat = "%d %b", height, ratio, width } = props;
//     const ema12 = ema()
//         .id(1)
//         .options({ windowSize: 12 })
//         .merge((d: any, c: any) => {
//             console.log('d',d,
//                 'c', c
//             )
//             d.ema12 = c;
//         })
//         .accessor((d: any) => d.ema12);
//
//     // 0: {x: '2021-01-11', y: 89.5}
//
//     const l = props.list[1]?.data ?? [] ;
//     const l1 = l.map(r => r.y) as number[];
//     const candleChartExtents1 = () => [Number(Math.max(...l1)+5), Number(Math.min(...l.map(r => Number(r.y))))];
//
//     console.log('ema12', ema12);
//     console.log('props', props.list);
//
//     // const ema26 = ema()
//     //     .id(2)
//     //     .options({ windowSize: 26 })
//     //     .merge((d: any, c: any) => {
//     //         d.ema26 = c;
//     //     })
//     //     .accessor((d: any) => d.ema26);
//
//     const elder = elderRay();
//
//     const calculatedData = elder(ema12(initialData));
//
//     const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(calculatedData);
//
//     const max = xAccessor(data[data.length - 1]);
//     const min = xAccessor(data[Math.max(0, data.length - 100)]);
//     const xExtents = [min, max + 5];
//
//     const gridHeight = height - margin.top - margin.bottom;
//
//     const elderRayHeight = 100;
//     const elderRayOrigin = (_: number, h: number) => [0, h - elderRayHeight];
//     const barChartHeight = gridHeight / 4;
//     const barChartOrigin = (_: number, h: number) => [0, h - barChartHeight - elderRayHeight];
//     const chartHeight = gridHeight - elderRayHeight;
//
//     const timeDisplayFormat = timeFormat(dateTimeFormat);
//
//         return (
//     <ChartCanvas
//         height={height}
//         ratio={ratio}
//                 width={width}
//                 margin={margin}
//                 data={data}
//                 displayXAccessor={displayXAccessor}
//                 seriesName="Data"
//                 xScale={xScale}
//                 xAccessor={xAccessor}
//                 xExtents={xExtents}
//                 zoomAnchor={lastVisibleItemBasedZoomAnchor}
//             >
//                 <Chart id={2} height={barChartHeight} origin={barChartOrigin} yExtents={barChartExtents}>
//                     <BarSeries fillStyle={volumeColor} yAccessor={volumeSeries} />
//                 </Chart>
//                 <Chart id={3} height={chartHeight} yExtents={candleChartExtents}>
//
//                     <>
//                     {
//                         (props.events ?? []).map(r => (
//                             <Annotate with={LabelAnnotation} usingProps={{
//                                 text: `#${r.eventNameOpt.slice(0,8)}`,
//                                 tooltip: r.eventNameOpt ?? r.descriptionOpt,
//                                 y: ({ yScale, datum }: any) => yScale(datum.high),
//                             }} when={(e) => dayjs(e.date).format('YYYY-MM-DD') ===  dayjs(r.dateTime).format('YYYY-MM-DD')} />
//                         ))
//                     }
//                     </>
//
//
//                     <XAxis showGridLines  showTicks={false} showTickLabel={false} />
//                     <YAxis showGridLines tickFormat={pricesDisplayFormat} />
//
//                     <MouseCoordinateX displayFormat={timeDisplayFormat} />
//                     <MouseCoordinateY rectWidth={margin.right} displayFormat={pricesDisplayFormat} />
//
//                     <CandlestickSeries />
//                      {/* <LineSeries yAccessor={ema26.accessor()} strokeStyle={ema26.stroke()} /> */}
//                      {/* <CurrentCoordinate yAccessor={ema26.accessor()} fillStyle={ema26.stroke()} /> */}
//                      <LineSeries yAccessor={ema12.accessor()} strokeStyle={ema12.stroke()} />
//                      <CurrentCoordinate yAccessor={ema12.accessor()} fillStyle={ema12.stroke()} />
//                     <MouseCoordinateY rectWidth={margin.right} displayFormat={pricesDisplayFormat} />
//                     <EdgeIndicator
//                         itemType="last"
//                         rectWidth={margin.right}
//                         fill={openCloseColor}
//                         lineStroke={openCloseColor}
//                         displayFormat={pricesDisplayFormat}
//                         yAccessor={yEdgeIndicator}
//                     />
//                     <MovingAverageTooltip
//                         origin={[8, 24]}
//                         options={[
//                             // {
//                             //     yAccessor: ema26.accessor(),
//                             //     type: "EMA",
//                             //     stroke: ema26.stroke(),
//                             //     windowSize: ema26.options().windowSize,
//                             // },
//                             {
//                                 yAccessor: ema12.accessor(),
//                                 type: "EMA",
//                                 stroke: ema12.stroke(),
//                                 windowSize: ema12.options().windowSize,
//                             },
//                         ]}
//                     />
//
//                     <ZoomButtons />
//                     <OHLCTooltip origin={[8, 16]} />
//                 </Chart>
//                 <Chart
//                     id={4}
//                     height={barChartHeight}
//                     yExtents={candleChartExtents1}
//                     origin={elderRayOrigin}
//                     // yExtents={[0, elder.accessor()]}
//                     // origin={elderRayOrigin}
//                     padding={{ top: 8, bottom: 20 }}
//                 >
//                     {/* close: 62.05 */}
//                     {/* date: Fri Jan 07 2022 00:00:00 GMT+0800 (中国标准时间) {} */}
//                     {/* elderRay: */}
//                     {/* bearPower: -6.675384615384608 */}
//                     {/* bullPower: -2.7853846153846007 */}
//                     {/* [[Prototype]]: Object */}
//                     {/* ema12: 67.36182373143652 */}
//                     {/* high: 65.68 */}
//                     {/* idx: */}
//                     {/* date: Fri Jan 07 2022 00:00:00 GMT+0800 (中国标准时间) */}
//                     {/* [[Prototype]]: Object */}
//                     {/* format: ƒ (date) */}
//                     {/* toString: ƒ () */}
//                     {/* length: 1 */}
//                     {/* name: "" */}
//                     {/* prototype: {constructor: ƒ} */}
//                     {/* arguments: (...) */}
//                     {/* caller: (...) */}
//                     {/* [[FunctionLocation]]: locale.js?7727:171 */}
//                     {/* [[Prototype]]: ƒ () */}
//                     {/* [[Scopes]]: Scopes[5] */}
//                     {/* index: 241 */}
//                     {/* level: 14 */}
//                     {/* [[Prototype]]: Object */}
//                     {/* low: 61.79 */}
//                     {/* open: 65.34 */}
//                     {/* outstanding_share: 737904992 */}
//                     {/* turnover: 1.92 */}
//                     {/* volume: 117133 */}
//
//                     <LineSeries yAccessor={(x) => Number(l[(l.length - initialData.length) + x.idx.index]?.y ?? 0)} strokeStyle={ema12.stroke()} />
//
//                      <XAxis showGridLines gridLinesStrokeStyle="#e0e3eb" />
//                      <YAxis showGridLines tickFormat={pricesDisplayFormat} />
//                      {/* <YAxis ticks={4} tickFormat={pricesDisplayFormat} /> */}
//
//                      <MouseCoordinateX displayFormat={timeDisplayFormat} />
//                      <MouseCoordinateY rectWidth={margin.right} displayFormat={pricesDisplayFormat} />
//
//                      {/* <ElderRaySeries yAccessor={elder.accessor()} /> */}
//
//                     {/* <SingleValueTooltip */}
//                     {/*    yAccessor={elder.accessor()} */}
//                     {/*    yLabel="Elder Ray" */}
//                     {/*    yDisplayFormat={(d: any) => */}
//                     {/*        `${pricesDisplayFormat(d.bullPower)}, ${pricesDisplayFormat(d.bearPower)}` */}
//                     {/*    } */}
//                     {/*    origin={[8, 16]} */}
//                     {/* /> */}
//                 </Chart>
//         {/* <Chart */}
//         {/*    id={5} */}
//         {/*    height={barChartHeight} */}
//         {/*    yExtents={candleChartExtents} */}
//         {/*    origin={elderRayOrigin} */}
//         {/*    // yExtents={[0, elder.accessor()]} */}
//         {/*    // origin={elderRayOrigin} */}
//         {/*    padding={{ top: 8, bottom: 20 }} */}
//         {/* > */}
//         {/*    <LineSeries yAccessor={ema12.accessor()} strokeStyle={ema12.stroke()} /> */}
//
//         {/*    <XAxis showGridLines gridLinesStrokeStyle="#e0e3eb" /> */}
//         {/*    <YAxis showGridLines tickFormat={pricesDisplayFormat} /> */}
//         {/*    /!*<YAxis ticks={4} tickFormat={pricesDisplayFormat} />*!/ */}
//
//         {/*    <MouseCoordinateX displayFormat={timeDisplayFormat} /> */}
//         {/*    <MouseCoordinateY rectWidth={margin.right} displayFormat={pricesDisplayFormat} /> */}
//
//         {/*    /!*<ElderRaySeries yAccessor={elder.accessor()} />*!/ */}
//
//         {/*    /!* <SingleValueTooltip *!/ */}
//         {/*    /!*    yAccessor={elder.accessor()} *!/ */}
//         {/*    /!*    yLabel="Elder Ray" *!/ */}
//         {/*    /!*    yDisplayFormat={(d: any) => *!/ */}
//         {/*    /!*        `${pricesDisplayFormat(d.bullPower)}, ${pricesDisplayFormat(d.bearPower)}` *!/ */}
//         {/*    /!*    } *!/ */}
//         {/*    /!*    origin={[8, 16]} *!/ */}
//         {/*    /!* /> *!/ */}
//         {/* </Chart> */}
//         <CrossHairCursor />
//     </ChartCanvas>
//         );
// }
