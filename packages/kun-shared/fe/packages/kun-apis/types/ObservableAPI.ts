import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { A1Return } from '../models/A1Return';
import { ABGroup } from '../models/ABGroup';
import { AddStarbuckGrouponTicket } from '../models/AddStarbuckGrouponTicket';
import { ChatGroupByUser } from '../models/ChatGroupByUser';
import { CommonSearchContent } from '../models/CommonSearchContent';
import { ConstantAppraiseType } from '../models/ConstantAppraiseType';
import { ConstantChargeType } from '../models/ConstantChargeType';
import { ConstantExerciseType } from '../models/ConstantExerciseType';
import { ConstantGenderStatus } from '../models/ConstantGenderStatus';
import { ConstantMSG } from '../models/ConstantMSG';
import { ConstantPaymentStatus } from '../models/ConstantPaymentStatus';
import { ConstantSeriesType } from '../models/ConstantSeriesType';
import { EnumStarbuckBuyWay } from '../models/EnumStarbuckBuyWay';
import { EnumTemperature } from '../models/EnumTemperature';
import { EnumeratumBrand } from '../models/EnumeratumBrand';
import { EnumeratumChatGroupType } from '../models/EnumeratumChatGroupType';
import { EnumeratumChatRole } from '../models/EnumeratumChatRole';
import { EnumeratumConstantMsgFormat } from '../models/EnumeratumConstantMsgFormat';
import { EnumeratumCupSize } from '../models/EnumeratumCupSize';
import { EnumeratumShandianOrderAllStatus } from '../models/EnumeratumShandianOrderAllStatus';
import { EnumeratumStarItem } from '../models/EnumeratumStarItem';
import { EnumeratumStarbuckCat } from '../models/EnumeratumStarbuckCat';
import { EnumeratumStarbuckOrderPaidStatus } from '../models/EnumeratumStarbuckOrderPaidStatus';
import { EnumeratumTradeWay } from '../models/EnumeratumTradeWay';
import { GetRtcToken } from '../models/GetRtcToken';
import { HashLong } from '../models/HashLong';
import { HorseSeriesReturn } from '../models/HorseSeriesReturn';
import { HorseSeriesSortType } from '../models/HorseSeriesSortType';
import { IpInfo } from '../models/IpInfo';
import { IpInfoItem } from '../models/IpInfoItem';
import { KunAudioReadLog } from '../models/KunAudioReadLog';
import { KunChatGroup } from '../models/KunChatGroup';
import { KunExercise } from '../models/KunExercise';
import { KunExerciseList } from '../models/KunExerciseList';
import { KunMessageReturn } from '../models/KunMessageReturn';
import { KunPinCard } from '../models/KunPinCard';
import { ListPaymentHistory } from '../models/ListPaymentHistory';
import { LqUser } from '../models/LqUser';
import { NoSqlPagingListDataABGroup } from '../models/NoSqlPagingListDataABGroup';
import { NoSqlPagingListDataKunCard } from '../models/NoSqlPagingListDataKunCard';
import { NoSqlPagingListDataKunMessageReturn } from '../models/NoSqlPagingListDataKunMessageReturn';
import { NoSqlPagingListDataLqUser } from '../models/NoSqlPagingListDataLqUser';
import { NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn } from '../models/NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn';
import { NoSqlPagingListDataPageMarkShandianOrder } from '../models/NoSqlPagingListDataPageMarkShandianOrder';
import { NoSqlPagingListDataShandianBrandItem } from '../models/NoSqlPagingListDataShandianBrandItem';
import { NoSqlPagingListDataShandianItem } from '../models/NoSqlPagingListDataShandianItem';
import { NoSqlPagingListHorseSeriesReturn } from '../models/NoSqlPagingListHorseSeriesReturn';
import { OptionDataIpInfoItem } from '../models/OptionDataIpInfoItem';
import { OptionDataKunAudioReadLog } from '../models/OptionDataKunAudioReadLog';
import { OptionDataKunExercise } from '../models/OptionDataKunExercise';
import { OptionDataListListCommonSearchContent } from '../models/OptionDataListListCommonSearchContent';
import { OptionDataReqCreateShandianOrder } from '../models/OptionDataReqCreateShandianOrder';
import { OptionDataShandianOrder } from '../models/OptionDataShandianOrder';
import { OptionDataStarbuckPaidOrder } from '../models/OptionDataStarbuckPaidOrder';
import { OptionDataString } from '../models/OptionDataString';
import { OptionDataUUID } from '../models/OptionDataUUID';
import { PaymentHistory } from '../models/PaymentHistory';
import { ReqAddDeliverMessage } from '../models/ReqAddDeliverMessage';
import { ReqCreateCardComment1 } from '../models/ReqCreateCardComment1';
import { ReqCreateConcern } from '../models/ReqCreateConcern';
import { ReqCreateKunPinCard } from '../models/ReqCreateKunPinCard';
import { ReqCreatePracticeComment } from '../models/ReqCreatePracticeComment';
import { ReqCreateShandianOrder } from '../models/ReqCreateShandianOrder';
import { ReqDeleteKunPinCard } from '../models/ReqDeleteKunPinCard';
import { ReqGetAudioLog } from '../models/ReqGetAudioLog';
import { ReqGetExerciseItem } from '../models/ReqGetExerciseItem';
import { ReqGetHistoryMessage } from '../models/ReqGetHistoryMessage';
import { ReqMarkHorseRead } from '../models/ReqMarkHorseRead';
import { ReqMarkUserDanger } from '../models/ReqMarkUserDanger';
import { ReqQuerySeriesHorse } from '../models/ReqQuerySeriesHorse';
import { ReqStartChat } from '../models/ReqStartChat';
import { ReqUpdateAudioLog } from '../models/ReqUpdateAudioLog';
import { ReqUpdatePracticeAppraise } from '../models/ReqUpdatePracticeAppraise';
import { ReqUpdateSeriesPrice } from '../models/ReqUpdateSeriesPrice';
import { RetMsg } from '../models/RetMsg';
import { ShandianBrandItem } from '../models/ShandianBrandItem';
import { ShandianItem } from '../models/ShandianItem';
import { ShandianItemCount } from '../models/ShandianItemCount';
import { ShandianOrder } from '../models/ShandianOrder';
import { StarbuckAddress } from '../models/StarbuckAddress';
import { StarbuckDetailItem } from '../models/StarbuckDetailItem';
import { StarbuckDetailOpenDetail } from '../models/StarbuckDetailOpenDetail';
import { StarbuckItemMeta } from '../models/StarbuckItemMeta';
import { StarbuckLocation } from '../models/StarbuckLocation';
import { StarbuckOpenClose } from '../models/StarbuckOpenClose';
import { StarbuckPaidOrder } from '../models/StarbuckPaidOrder';
import { StarbuckStore } from '../models/StarbuckStore';
import { StarbuckStoreDetailADT } from '../models/StarbuckStoreDetailADT';
import { StarbuckStoreItem } from '../models/StarbuckStoreItem';
import { StarbuckStoreNameItem } from '../models/StarbuckStoreNameItem';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * @param authorization 
     */
    public getApiV1Chat50ChatGroups(authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataABGroup> {
        const requestContextPromise = this.requestFactory.getApiV1Chat50ChatGroups(authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1Chat50ChatGroups(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiV1Chat50ChatGroupsUser(authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataLqUser> {
        const requestContextPromise = this.requestFactory.getApiV1Chat50ChatGroupsUser(authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1Chat50ChatGroupsUser(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiV1ConcernPractice52List(authorization: string, _options?: Configuration): Observable<KunExerciseList> {
        const requestContextPromise = this.requestFactory.getApiV1ConcernPractice52List(authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ConcernPractice52List(rsp)));
            }));
    }

    /**
     * @param timestamp 
     * @param aopic 
     * @param sign 
     * @param fromPlatform 
     */
    public getApiV1OrderStarbuckIncoming(timestamp: string, aopic: string, sign: string, fromPlatform?: string, _options?: Configuration): Observable<A1Return> {
        const requestContextPromise = this.requestFactory.getApiV1OrderStarbuckIncoming(timestamp, aopic, sign, fromPlatform, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1OrderStarbuckIncoming(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param lat 
     * @param lon 
     */
    public getApiV1OrderStarbuckSearch(authorization: string, lat: string, lon: string, _options?: Configuration): Observable<StarbuckStoreItem> {
        const requestContextPromise = this.requestFactory.getApiV1OrderStarbuckSearch(authorization, lat, lon, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1OrderStarbuckSearch(rsp)));
            }));
    }

    /**
     * @param seriesId 
     */
    public getApiV1PinCard50List(seriesId: string, _options?: Configuration): Observable<NoSqlPagingListDataKunCard> {
        const requestContextPromise = this.requestFactory.getApiV1PinCard50List(seriesId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1PinCard50List(rsp)));
            }));
    }

    /**
     * @param seriesId 
     */
    public getApiV1PinCard60List(seriesId: string, _options?: Configuration): Observable<NoSqlPagingListDataKunCard> {
        const requestContextPromise = this.requestFactory.getApiV1PinCard60List(seriesId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1PinCard60List(rsp)));
            }));
    }

    /**
     * @param query 
     */
    public getApiV1Search50Horse(query: string, _options?: Configuration): Observable<OptionDataListListCommonSearchContent> {
        const requestContextPromise = this.requestFactory.getApiV1Search50Horse(query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1Search50Horse(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param query 
     */
    public getApiV1ShandianBranchList(authorization: string, query: string, _options?: Configuration): Observable<NoSqlPagingListDataShandianBrandItem> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianBranchList(authorization, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianBranchList(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param status 
     */
    public getApiV1ShandianItemOrderListByStatus(authorization: string, status?: EnumeratumShandianOrderAllStatus, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkShandianOrder> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianItemOrderListByStatus(authorization, status, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianItemOrderListByStatus(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param ip 
     * @param input 
     */
    public getApiV1ShandianItemOrderTextCreate(authorization: string, ip: string, input: string, _options?: Configuration): Observable<OptionDataReqCreateShandianOrder> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianItemOrderTextCreate(authorization, ip, input, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianItemOrderTextCreate(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param status 
     */
    public getApiV1ShandianItemOrderUser(authorization: string, status?: EnumeratumShandianOrderAllStatus, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkShandianOrder> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianItemOrderUser(authorization, status, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianItemOrderUser(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param query 
     */
    public getApiV1ShandianItemStarbuckList(authorization: string, query: string, _options?: Configuration): Observable<NoSqlPagingListDataShandianItem> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianItemStarbuckList(authorization, query, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianItemStarbuckList(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getApiV1ShandianShandianOrderGet(id: number, _options?: Configuration): Observable<OptionDataShandianOrder> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianShandianOrderGet(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianShandianOrderGet(rsp)));
            }));
    }

    /**
     * @param uuid 
     */
    public getApiV1ShandianTaobaoOrderGet(uuid: string, _options?: Configuration): Observable<OptionDataStarbuckPaidOrder> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianTaobaoOrderGet(uuid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianTaobaoOrderGet(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiV1TapirHorseMembers(authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataLqUser> {
        const requestContextPromise = this.requestFactory.getApiV1TapirHorseMembers(authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1TapirHorseMembers(rsp)));
            }));
    }

    /**
     * @param ip 
     */
    public getApiV1ToolsIpGet(ip: string, _options?: Configuration): Observable<OptionDataIpInfoItem> {
        const requestContextPromise = this.requestFactory.getApiV1ToolsIpGet(ip, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ToolsIpGet(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqGetHistoryMessage 
     */
    public postApiTapirV1Chat50ChatMessagesHistory(authorization: string, reqGetHistoryMessage: ReqGetHistoryMessage, _options?: Configuration): Observable<NoSqlPagingListDataKunMessageReturn> {
        const requestContextPromise = this.requestFactory.postApiTapirV1Chat50ChatMessagesHistory(authorization, reqGetHistoryMessage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiTapirV1Chat50ChatMessagesHistory(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqGetHistoryMessage 
     */
    public postApiTapirV1Chat60ChatMessagesHistory(authorization: string, reqGetHistoryMessage: ReqGetHistoryMessage, _options?: Configuration): Observable<NoSqlPagingListDataKunMessageReturn> {
        const requestContextPromise = this.requestFactory.postApiTapirV1Chat60ChatMessagesHistory(authorization, reqGetHistoryMessage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiTapirV1Chat60ChatMessagesHistory(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param getRtcToken 
     */
    public postApiTapirV1RtcChatRtcTokenGet(authorization: string, getRtcToken: GetRtcToken, _options?: Configuration): Observable<OptionDataString> {
        const requestContextPromise = this.requestFactory.postApiTapirV1RtcChatRtcTokenGet(authorization, getRtcToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiTapirV1RtcChatRtcTokenGet(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqMarkHorseRead 
     */
    public postApiV1CardRead50Markread(authorization: string, reqMarkHorseRead: ReqMarkHorseRead, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1CardRead50Markread(authorization, reqMarkHorseRead, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1CardRead50Markread(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqStartChat 
     */
    public postApiV1Chat50ChatGroup(authorization: string, reqStartChat: ReqStartChat, _options?: Configuration): Observable<OptionDataUUID> {
        const requestContextPromise = this.requestFactory.postApiV1Chat50ChatGroup(authorization, reqStartChat, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1Chat50ChatGroup(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqStartChat 
     */
    public postApiV1Chat60ChatGroup(authorization: string, reqStartChat: ReqStartChat, _options?: Configuration): Observable<OptionDataUUID> {
        const requestContextPromise = this.requestFactory.postApiV1Chat60ChatGroup(authorization, reqStartChat, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1Chat60ChatGroup(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqCreateConcern 
     */
    public postApiV1Concern50Create(authorization: string, reqCreateConcern: ReqCreateConcern, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1Concern50Create(authorization, reqCreateConcern, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1Concern50Create(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqCreateConcern 
     */
    public postApiV1Concern52Create(authorization: string, reqCreateConcern: ReqCreateConcern, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1Concern52Create(authorization, reqCreateConcern, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1Concern52Create(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqCreateConcern 
     */
    public postApiV1Concern62Create(authorization: string, reqCreateConcern: ReqCreateConcern, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1Concern62Create(authorization, reqCreateConcern, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1Concern62Create(rsp)));
            }));
    }

    /**
     * @param reqUpdateSeriesPrice 
     */
    public postApiV1HorseSeriesPrice(reqUpdateSeriesPrice: ReqUpdateSeriesPrice, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1HorseSeriesPrice(reqUpdateSeriesPrice, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1HorseSeriesPrice(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param query 
     * @param reqUpdatePracticeAppraise 
     */
    public postApiV1Order50PaymentList(authorization: string, query: string, reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise, _options?: Configuration): Observable<ListPaymentHistory> {
        const requestContextPromise = this.requestFactory.postApiV1Order50PaymentList(authorization, query, reqUpdatePracticeAppraise, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1Order50PaymentList(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param id 
     */
    public postApiV1OrderStarbuckGet(authorization: string, id: number, _options?: Configuration): Observable<StarbuckStoreDetailADT> {
        const requestContextPromise = this.requestFactory.postApiV1OrderStarbuckGet(authorization, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1OrderStarbuckGet(rsp)));
            }));
    }

    /**
     * @param reqCreateKunPinCard 
     * @param hi 
     */
    public postApiV1PinCard50Create(reqCreateKunPinCard: ReqCreateKunPinCard, hi?: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1PinCard50Create(reqCreateKunPinCard, hi, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1PinCard50Create(rsp)));
            }));
    }

    /**
     * @param reqDeleteKunPinCard 
     */
    public postApiV1PinCard50Delete(reqDeleteKunPinCard: ReqDeleteKunPinCard, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1PinCard50Delete(reqDeleteKunPinCard, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1PinCard50Delete(rsp)));
            }));
    }

    /**
     * @param reqCreateKunPinCard 
     * @param hi 
     */
    public postApiV1PinCard60Create(reqCreateKunPinCard: ReqCreateKunPinCard, hi?: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1PinCard60Create(reqCreateKunPinCard, hi, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1PinCard60Create(rsp)));
            }));
    }

    /**
     * @param reqDeleteKunPinCard 
     */
    public postApiV1PinCard60Delete(reqDeleteKunPinCard: ReqDeleteKunPinCard, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1PinCard60Delete(reqDeleteKunPinCard, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1PinCard60Delete(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqCreateShandianOrder 
     */
    public postApiV1ShandianItemOrderCreate(authorization: string, reqCreateShandianOrder: ReqCreateShandianOrder, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianItemOrderCreate(authorization, reqCreateShandianOrder, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianItemOrderCreate(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqAddDeliverMessage 
     */
    public postApiV1ShandianItemOrderDelivery(authorization: string, reqAddDeliverMessage: ReqAddDeliverMessage, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianItemOrderDelivery(authorization, reqAddDeliverMessage, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianItemOrderDelivery(rsp)));
            }));
    }

    /**
     * @param addStarbuckGrouponTicket 
     */
    public postApiV1ShandianTaobaoOrderCreate(addStarbuckGrouponTicket: AddStarbuckGrouponTicket, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianTaobaoOrderCreate(addStarbuckGrouponTicket, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianTaobaoOrderCreate(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqMarkUserDanger 
     */
    public postApiV1TapirAdmin50SecurityCreate(authorization: string, reqMarkUserDanger: ReqMarkUserDanger, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirAdmin50SecurityCreate(authorization, reqMarkUserDanger, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirAdmin50SecurityCreate(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqUpdateAudioLog 
     */
    public postApiV1TapirCardDio50OffsetCreate(authorization: string, reqUpdateAudioLog: ReqUpdateAudioLog, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirCardDio50OffsetCreate(authorization, reqUpdateAudioLog, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirCardDio50OffsetCreate(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqGetAudioLog 
     */
    public postApiV1TapirCardDio50OffsetGet(authorization: string, reqGetAudioLog: ReqGetAudioLog, _options?: Configuration): Observable<OptionDataKunAudioReadLog> {
        const requestContextPromise = this.requestFactory.postApiV1TapirCardDio50OffsetGet(authorization, reqGetAudioLog, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirCardDio50OffsetGet(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqUpdateAudioLog 
     */
    public postApiV1TapirCardDio60OffsetCreate(authorization: string, reqUpdateAudioLog: ReqUpdateAudioLog, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirCardDio60OffsetCreate(authorization, reqUpdateAudioLog, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirCardDio60OffsetCreate(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqGetAudioLog 
     */
    public postApiV1TapirCardDio60OffsetGet(authorization: string, reqGetAudioLog: ReqGetAudioLog, _options?: Configuration): Observable<OptionDataKunAudioReadLog> {
        const requestContextPromise = this.requestFactory.postApiV1TapirCardDio60OffsetGet(authorization, reqGetAudioLog, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirCardDio60OffsetGet(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqCreateCardComment1 
     */
    public postApiV1TapirHorseCommentCreate(authorization: string, reqCreateCardComment1: ReqCreateCardComment1, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirHorseCommentCreate(authorization, reqCreateCardComment1, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirHorseCommentCreate(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqGetExerciseItem 
     */
    public postApiV1TapirHorseExerciseItem(authorization: string, reqGetExerciseItem: ReqGetExerciseItem, _options?: Configuration): Observable<OptionDataKunExercise> {
        const requestContextPromise = this.requestFactory.postApiV1TapirHorseExerciseItem(authorization, reqGetExerciseItem, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirHorseExerciseItem(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqCreatePracticeComment 
     */
    public postApiV1TapirHorsePraticeCommentCreate(authorization: string, reqCreatePracticeComment: ReqCreatePracticeComment, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirHorsePraticeCommentCreate(authorization, reqCreatePracticeComment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirHorsePraticeCommentCreate(rsp)));
            }));
    }

    /**
     */
    public postApiV1TapirHorseSeriesGetpubliclist(_options?: Configuration): Observable<NoSqlPagingListHorseSeriesReturn> {
        const requestContextPromise = this.requestFactory.postApiV1TapirHorseSeriesGetpubliclist(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirHorseSeriesGetpubliclist(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqQuerySeriesHorse 
     */
    public postApiV1TapirHorseSeriesQuery(authorization: string, reqQuerySeriesHorse: ReqQuerySeriesHorse, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn> {
        const requestContextPromise = this.requestFactory.postApiV1TapirHorseSeriesQuery(authorization, reqQuerySeriesHorse, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirHorseSeriesQuery(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param reqUpdatePracticeAppraise 
     */
    public postApiV1TapirPracticeAppriseCreate(authorization: string, reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirPracticeAppriseCreate(authorization, reqUpdatePracticeAppraise, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirPracticeAppriseCreate(rsp)));
            }));
    }

}
