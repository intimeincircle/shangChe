import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { A1Return } from '../models/A1Return';
import { ABGroup } from '../models/ABGroup';
import { ASearchStore } from '../models/ASearchStore';
import { AddStarbuckGrouponTicket } from '../models/AddStarbuckGrouponTicket';
import { AglosticCaigouItem } from '../models/AglosticCaigouItem';
import { AglosticCaigouItemSigned } from '../models/AglosticCaigouItemSigned';
import { AglosticCaigouItemSignedAndStarkbuckItem } from '../models/AglosticCaigouItemSignedAndStarkbuckItem';
import { AttachItem } from '../models/AttachItem';
import { ChatGroupByUser } from '../models/ChatGroupByUser';
import { CommonSearchContent } from '../models/CommonSearchContent';
import { ConstantAppraiseType } from '../models/ConstantAppraiseType';
import { ConstantChargeType } from '../models/ConstantChargeType';
import { ConstantExerciseType } from '../models/ConstantExerciseType';
import { ConstantGenderStatus } from '../models/ConstantGenderStatus';
import { ConstantMSG } from '../models/ConstantMSG';
import { ConstantPaymentStatus } from '../models/ConstantPaymentStatus';
import { ConstantSeriesType } from '../models/ConstantSeriesType';
import { CreatePaymentHistory } from '../models/CreatePaymentHistory';
import { DetailAttach } from '../models/DetailAttach';
import { DetailRootInterface } from '../models/DetailRootInterface';
import { EnumStarbuckBuyWay } from '../models/EnumStarbuckBuyWay';
import { EnumTemperature } from '../models/EnumTemperature';
import { EnumeratumBenifitCardItem } from '../models/EnumeratumBenifitCardItem';
import { EnumeratumBrand } from '../models/EnumeratumBrand';
import { EnumeratumBuyCategory } from '../models/EnumeratumBuyCategory';
import { EnumeratumChatGroupType } from '../models/EnumeratumChatGroupType';
import { EnumeratumChatRole } from '../models/EnumeratumChatRole';
import { EnumeratumConstantMsgFormat } from '../models/EnumeratumConstantMsgFormat';
import { EnumeratumCupSize } from '../models/EnumeratumCupSize';
import { EnumeratumShandianOrderAllStatus } from '../models/EnumeratumShandianOrderAllStatus';
import { EnumeratumStarbuckCat } from '../models/EnumeratumStarbuckCat';
import { EnumeratumStarbuckItem } from '../models/EnumeratumStarbuckItem';
import { EnumeratumStarbuckOrderPaidStatus } from '../models/EnumeratumStarbuckOrderPaidStatus';
import { EnumeratumTradeWay } from '../models/EnumeratumTradeWay';
import { EnumeratumValidStatus } from '../models/EnumeratumValidStatus';
import { GetRtcToken } from '../models/GetRtcToken';
import { GetUserInfo } from '../models/GetUserInfo';
import { Goodsdetails } from '../models/Goodsdetails';
import { HashLong } from '../models/HashLong';
import { HorseSeriesReturn } from '../models/HorseSeriesReturn';
import { HorseSeriesSortType } from '../models/HorseSeriesSortType';
import { IpInfo } from '../models/IpInfo';
import { IpInfoItem } from '../models/IpInfoItem';
import { KunAudioReadLog } from '../models/KunAudioReadLog';
import { KunBenefitCard } from '../models/KunBenefitCard';
import { KunChatGroup } from '../models/KunChatGroup';
import { KunExercise } from '../models/KunExercise';
import { KunExerciseList } from '../models/KunExerciseList';
import { KunMessageReturn } from '../models/KunMessageReturn';
import { KunPinCard } from '../models/KunPinCard';
import { KunShandianOrderTask } from '../models/KunShandianOrderTask';
import { KunSimpleOrder } from '../models/KunSimpleOrder';
import { KunUser } from '../models/KunUser';
import { ListPaymentHistory } from '../models/ListPaymentHistory';
import { MiniAppLoginToken } from '../models/MiniAppLoginToken';
import { NoSqlPagingListDataABGroup } from '../models/NoSqlPagingListDataABGroup';
import { NoSqlPagingListDataASearchStore } from '../models/NoSqlPagingListDataASearchStore';
import { NoSqlPagingListDataKunCard } from '../models/NoSqlPagingListDataKunCard';
import { NoSqlPagingListDataKunMessageReturn } from '../models/NoSqlPagingListDataKunMessageReturn';
import { NoSqlPagingListDataKunSimpleOrder } from '../models/NoSqlPagingListDataKunSimpleOrder';
import { NoSqlPagingListDataKunUser } from '../models/NoSqlPagingListDataKunUser';
import { NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn } from '../models/NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn';
import { NoSqlPagingListDataPageMarkShandianOrder } from '../models/NoSqlPagingListDataPageMarkShandianOrder';
import { NoSqlPagingListDataPageMarkStarbuckPaidOrder } from '../models/NoSqlPagingListDataPageMarkStarbuckPaidOrder';
import { NoSqlPagingListDataShandianBrandItem } from '../models/NoSqlPagingListDataShandianBrandItem';
import { NoSqlPagingListDataShandianItem } from '../models/NoSqlPagingListDataShandianItem';
import { NoSqlPagingListDataShopItemDescription } from '../models/NoSqlPagingListDataShopItemDescription';
import { NoSqlPagingListDataVipShopGroupItem } from '../models/NoSqlPagingListDataVipShopGroupItem';
import { NoSqlPagingListHorseSeriesReturn } from '../models/NoSqlPagingListHorseSeriesReturn';
import { OptionDataBoolean } from '../models/OptionDataBoolean';
import { OptionDataDetailRootInterface } from '../models/OptionDataDetailRootInterface';
import { OptionDataIpInfoItem } from '../models/OptionDataIpInfoItem';
import { OptionDataKunAudioReadLog } from '../models/OptionDataKunAudioReadLog';
import { OptionDataKunBenefitCard } from '../models/OptionDataKunBenefitCard';
import { OptionDataKunExercise } from '../models/OptionDataKunExercise';
import { OptionDataKunShandianOrderTask } from '../models/OptionDataKunShandianOrderTask';
import { OptionDataKunSimpleOrder } from '../models/OptionDataKunSimpleOrder';
import { OptionDataKunUser } from '../models/OptionDataKunUser';
import { OptionDataListListCommonSearchContent } from '../models/OptionDataListListCommonSearchContent';
import { OptionDataMiniAppLoginToken } from '../models/OptionDataMiniAppLoginToken';
import { OptionDataReqCreateShandianOrder } from '../models/OptionDataReqCreateShandianOrder';
import { OptionDataRetMiniAppUserItem } from '../models/OptionDataRetMiniAppUserItem';
import { OptionDataRetccessTokenApp } from '../models/OptionDataRetccessTokenApp';
import { OptionDataShandianOrder } from '../models/OptionDataShandianOrder';
import { OptionDataStarbuckPaidOrder } from '../models/OptionDataStarbuckPaidOrder';
import { OptionDataStarbuckStoreItem } from '../models/OptionDataStarbuckStoreItem';
import { OptionDataString } from '../models/OptionDataString';
import { OptionDataUUID } from '../models/OptionDataUUID';
import { OptionDataVipShopWechatPaymentItem } from '../models/OptionDataVipShopWechatPaymentItem';
import { OptionDataWechatPaymentItem } from '../models/OptionDataWechatPaymentItem';
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
import { ReqStarbuckGroupon } from '../models/ReqStarbuckGroupon';
import { ReqStartChat } from '../models/ReqStartChat';
import { ReqStartVipOrder } from '../models/ReqStartVipOrder';
import { ReqUpdateAudioLog } from '../models/ReqUpdateAudioLog';
import { ReqUpdatePracticeAppraise } from '../models/ReqUpdatePracticeAppraise';
import { ReqUpdateSeriesPrice } from '../models/ReqUpdateSeriesPrice';
import { RetMiniAppUserItem } from '../models/RetMiniAppUserItem';
import { RetMsg } from '../models/RetMsg';
import { RetccessTokenApp } from '../models/RetccessTokenApp';
import { ShandianBrandItem } from '../models/ShandianBrandItem';
import { ShandianItem } from '../models/ShandianItem';
import { ShandianItemCount } from '../models/ShandianItemCount';
import { ShandianOrder } from '../models/ShandianOrder';
import { ShopItemDescription } from '../models/ShopItemDescription';
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
import { VipShopGroupItem } from '../models/VipShopGroupItem';
import { VipShopWechatPaymentItem } from '../models/VipShopWechatPaymentItem';
import { WechatPaymentItem } from '../models/WechatPaymentItem';

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
     * @param url 
     */
    public getApiAuthV1TapirFuwuhaoOpenSign(url: string, _options?: Configuration): Observable<OptionDataRetccessTokenApp> {
        const requestContextPromise = this.requestFactory.getApiAuthV1TapirFuwuhaoOpenSign(url, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiAuthV1TapirFuwuhaoOpenSign(rsp)));
            }));
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
    public getApiV1Chat50ChatGroupsUser(authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataKunUser> {
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
     * @param input 
     */
    public getApiV1KunSubscribed50Status(input: string, _options?: Configuration): Observable<OptionDataBoolean> {
        const requestContextPromise = this.requestFactory.getApiV1KunSubscribed50Status(input, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1KunSubscribed50Status(rsp)));
            }));
    }

    /**
     * @param input 
     */
    public getApiV1KunSubscribed61Status(input: string, _options?: Configuration): Observable<OptionDataBoolean> {
        const requestContextPromise = this.requestFactory.getApiV1KunSubscribed61Status(input, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1KunSubscribed61Status(rsp)));
            }));
    }

    /**
     * @param lat 
     * @param lon 
     */
    public getApiV1OrderKfcSearch(lat: string, lon: string, _options?: Configuration): Observable<NoSqlPagingListDataASearchStore> {
        const requestContextPromise = this.requestFactory.getApiV1OrderKfcSearch(lat, lon, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1OrderKfcSearch(rsp)));
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
     * @param lat 
     * @param lon 
     */
    public getApiV1OrderStarbuckSearch(lat: string, lon: string, _options?: Configuration): Observable<OptionDataStarbuckStoreItem> {
        const requestContextPromise = this.requestFactory.getApiV1OrderStarbuckSearch(lat, lon, _options);

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
     * @param card 
     */
    public getApiV1ShandianBenefitCardGet(authorization: string, card: EnumeratumBenifitCardItem, _options?: Configuration): Observable<OptionDataKunBenefitCard> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianBenefitCardGet(authorization, card, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianBenefitCardGet(rsp)));
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
     * @param input 
     */
    public getApiV1ShandianItemOrderTextCreate(authorization: string, input: string, _options?: Configuration): Observable<OptionDataReqCreateShandianOrder> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianItemOrderTextCreate(authorization, input, _options);

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
     * @param query 
     */
    public getApiV1ShandianItemStarbuckList(query: string, _options?: Configuration): Observable<NoSqlPagingListDataShandianItem> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianItemStarbuckList(query, _options);

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
     * @param authorization 
     * @param status 
     */
    public getApiV1ShandianItemTaobaoListByStatus(authorization: string, status?: EnumeratumStarbuckOrderPaidStatus, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkStarbuckPaidOrder> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianItemTaobaoListByStatus(authorization, status, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianItemTaobaoListByStatus(rsp)));
            }));
    }

    /**
     * get kun order for shandian
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
     * @param reqStarbuckGroupon 
     * @param authorization 
     */
    public getApiV1ShandianShandianTaobaoGet(reqStarbuckGroupon: ReqStarbuckGroupon, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianShandianTaobaoGet(reqStarbuckGroupon, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianShandianTaobaoGet(rsp)));
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
     * get kun order & task for shandian
     * @param uuid 
     */
    public getApiV1ShandianTaobaoOrderTaskGet(uuid: string, _options?: Configuration): Observable<OptionDataKunShandianOrderTask> {
        const requestContextPromise = this.requestFactory.getApiV1ShandianTaobaoOrderTaskGet(uuid, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1ShandianTaobaoOrderTaskGet(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiV1TapirHorseMembers(authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataKunUser> {
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
     */
    public getApiV1UserShandianMiniuserSessionGet(authorization: string, _options?: Configuration): Observable<OptionDataKunUser> {
        const requestContextPromise = this.requestFactory.getApiV1UserShandianMiniuserSessionGet(authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1UserShandianMiniuserSessionGet(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public getApiV1UserShandianOpenSessionGet(authorization: string, _options?: Configuration): Observable<OptionDataKunUser> {
        const requestContextPromise = this.requestFactory.getApiV1UserShandianOpenSessionGet(authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiV1UserShandianOpenSessionGet(rsp)));
            }));
    }

    /**
     * @param code 
     */
    public postApiAuthV1TapirFuwuhaoOpenLogin(code: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiAuthV1TapirFuwuhaoOpenLogin(code, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiAuthV1TapirFuwuhaoOpenLogin(rsp)));
            }));
    }

    /**
     * @param reqGetHistoryMessage 
     * @param authorization 
     */
    public postApiTapirV1Chat50ChatMessagesHistory(reqGetHistoryMessage: ReqGetHistoryMessage, authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataKunMessageReturn> {
        const requestContextPromise = this.requestFactory.postApiTapirV1Chat50ChatMessagesHistory(reqGetHistoryMessage, authorization, _options);

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
     * @param reqGetHistoryMessage 
     * @param authorization 
     */
    public postApiTapirV1Chat60ChatMessagesHistory(reqGetHistoryMessage: ReqGetHistoryMessage, authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataKunMessageReturn> {
        const requestContextPromise = this.requestFactory.postApiTapirV1Chat60ChatMessagesHistory(reqGetHistoryMessage, authorization, _options);

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
     * @param getRtcToken 
     * @param authorization 
     */
    public postApiTapirV1RtcChatRtcTokenGet(getRtcToken: GetRtcToken, authorization: string, _options?: Configuration): Observable<OptionDataString> {
        const requestContextPromise = this.requestFactory.postApiTapirV1RtcChatRtcTokenGet(getRtcToken, authorization, _options);

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
     * @param reqMarkHorseRead 
     * @param authorization 
     */
    public postApiV1CardRead50Markread(reqMarkHorseRead: ReqMarkHorseRead, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1CardRead50Markread(reqMarkHorseRead, authorization, _options);

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
     * @param reqStartChat 
     * @param authorization 
     */
    public postApiV1Chat50ChatGroup(reqStartChat: ReqStartChat, authorization: string, _options?: Configuration): Observable<OptionDataUUID> {
        const requestContextPromise = this.requestFactory.postApiV1Chat50ChatGroup(reqStartChat, authorization, _options);

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
     * @param reqStartChat 
     * @param authorization 
     */
    public postApiV1Chat60ChatGroup(reqStartChat: ReqStartChat, authorization: string, _options?: Configuration): Observable<OptionDataUUID> {
        const requestContextPromise = this.requestFactory.postApiV1Chat60ChatGroup(reqStartChat, authorization, _options);

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
     * @param reqCreateConcern 
     * @param authorization 
     */
    public postApiV1Concern50Create(reqCreateConcern: ReqCreateConcern, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1Concern50Create(reqCreateConcern, authorization, _options);

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
     * @param reqCreateConcern 
     * @param authorization 
     */
    public postApiV1Concern52Create(reqCreateConcern: ReqCreateConcern, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1Concern52Create(reqCreateConcern, authorization, _options);

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
     * @param reqCreateConcern 
     * @param authorization 
     */
    public postApiV1Concern62Create(reqCreateConcern: ReqCreateConcern, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1Concern62Create(reqCreateConcern, authorization, _options);

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
     * @param reqUpdatePracticeAppraise 
     * @param authorization 
     * @param query 
     */
    public postApiV1Order50PaymentList(reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise, authorization: string, query: string, _options?: Configuration): Observable<ListPaymentHistory> {
        const requestContextPromise = this.requestFactory.postApiV1Order50PaymentList(reqUpdatePracticeAppraise, authorization, query, _options);

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
     * @param reqCreateShandianOrder 
     */
    public postApiV1ShandianAnonymousItemOrderCreate(reqCreateShandianOrder: ReqCreateShandianOrder, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianAnonymousItemOrderCreate(reqCreateShandianOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianAnonymousItemOrderCreate(rsp)));
            }));
    }

    /**
     * @param aglosticCaigouItemSigned 
     * @param itemId 
     */
    public postApiV1ShandianAutoSignPaymentItemidCaigou(aglosticCaigouItemSigned: AglosticCaigouItemSigned, itemId: string, _options?: Configuration): Observable<OptionDataString> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianAutoSignPaymentItemidCaigou(aglosticCaigouItemSigned, itemId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianAutoSignPaymentItemidCaigou(rsp)));
            }));
    }

    /**
     * @param reqCreateShandianOrder 
     * @param authorization 
     */
    public postApiV1ShandianItemOrderCreate(reqCreateShandianOrder: ReqCreateShandianOrder, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianItemOrderCreate(reqCreateShandianOrder, authorization, _options);

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
     * @param reqAddDeliverMessage 
     * @param authorization 
     */
    public postApiV1ShandianItemOrderDelivery(reqAddDeliverMessage: ReqAddDeliverMessage, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianItemOrderDelivery(reqAddDeliverMessage, authorization, _options);

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
     * @param createPaymentHistory 
     * @param authorization 
     */
    public postApiV1ShandianShandianPaymentStart(createPaymentHistory: CreatePaymentHistory, authorization: string, _options?: Configuration): Observable<OptionDataWechatPaymentItem> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianShandianPaymentStart(createPaymentHistory, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianShandianPaymentStart(rsp)));
            }));
    }

    /**
     * @param orderno 
     * @param outorderno 
     * @param userid 
     * @param status 
     * @param refundstatus 
     * @param money 
     * @param receipt 
     * @param createTime 
     * @param updateTime 
     * @param timestamp 
     * @param sign 
     * @param refundmoney 
     * @param refundreceipt 
     */
    public postApiV1ShandianShopPaymentCallback(orderno: string, outorderno: string, userid: string, status: string, refundstatus: string, money: string, receipt: string, createTime: string, updateTime: string, timestamp: string, sign: string, refundmoney?: string, refundreceipt?: string, _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianShopPaymentCallback(orderno, outorderno, userid, status, refundstatus, money, receipt, createTime, updateTime, timestamp, sign, refundmoney, refundreceipt, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianShopPaymentCallback(rsp)));
            }));
    }

    /**
     * @param authorization 
     */
    public postApiV1ShandianSimpleOrderGet(authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataKunSimpleOrder> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianSimpleOrderGet(authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianSimpleOrderGet(rsp)));
            }));
    }

    /**
     * 下单咖啡获取确认链接
     * @param aglosticCaigouItemSignedAndStarkbuckItem 
     */
    public postApiV1ShandianStarbuckOrderCaigouCoffee(aglosticCaigouItemSignedAndStarkbuckItem: AglosticCaigouItemSignedAndStarkbuckItem, _options?: Configuration): Observable<OptionDataString> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianStarbuckOrderCaigouCoffee(aglosticCaigouItemSignedAndStarkbuckItem, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianStarbuckOrderCaigouCoffee(rsp)));
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
     * @param group 
     * @param name 
     */
    public postApiV1ShandianVipShopGoods(group?: number, name?: string, _options?: Configuration): Observable<NoSqlPagingListDataShopItemDescription> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianVipShopGoods(group, name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianVipShopGoods(rsp)));
            }));
    }

    /**
     */
    public postApiV1ShandianVipShopGroups(_options?: Configuration): Observable<NoSqlPagingListDataVipShopGroupItem> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianVipShopGroups(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianVipShopGroups(rsp)));
            }));
    }

    /**
     * @param goodid 
     */
    public postApiV1ShandianVipShopItemGoodid(goodid: number, _options?: Configuration): Observable<OptionDataDetailRootInterface> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianVipShopItemGoodid(goodid, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianVipShopItemGoodid(rsp)));
            }));
    }

    /**
     * @param authorization 
     * @param orderId 
     */
    public postApiV1ShandianVipShopOrderOrderid(authorization: string, orderId: string, _options?: Configuration): Observable<OptionDataKunSimpleOrder> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianVipShopOrderOrderid(authorization, orderId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianVipShopOrderOrderid(rsp)));
            }));
    }

    /**
     * @param aglosticCaigouItem 
     * @param itemId 
     */
    public postApiV1ShandianXianyuPaymentItemidCaigou(aglosticCaigouItem: AglosticCaigouItem, itemId: string, _options?: Configuration): Observable<OptionDataString> {
        const requestContextPromise = this.requestFactory.postApiV1ShandianXianyuPaymentItemidCaigou(aglosticCaigouItem, itemId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1ShandianXianyuPaymentItemidCaigou(rsp)));
            }));
    }

    /**
     * @param reqMarkUserDanger 
     * @param authorization 
     */
    public postApiV1TapirAdmin50SecurityCreate(reqMarkUserDanger: ReqMarkUserDanger, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirAdmin50SecurityCreate(reqMarkUserDanger, authorization, _options);

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
     * @param reqUpdateAudioLog 
     * @param authorization 
     */
    public postApiV1TapirCardDio50OffsetCreate(reqUpdateAudioLog: ReqUpdateAudioLog, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirCardDio50OffsetCreate(reqUpdateAudioLog, authorization, _options);

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
     * @param reqGetAudioLog 
     * @param authorization 
     */
    public postApiV1TapirCardDio50OffsetGet(reqGetAudioLog: ReqGetAudioLog, authorization: string, _options?: Configuration): Observable<OptionDataKunAudioReadLog> {
        const requestContextPromise = this.requestFactory.postApiV1TapirCardDio50OffsetGet(reqGetAudioLog, authorization, _options);

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
     * @param reqUpdateAudioLog 
     * @param authorization 
     */
    public postApiV1TapirCardDio60OffsetCreate(reqUpdateAudioLog: ReqUpdateAudioLog, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirCardDio60OffsetCreate(reqUpdateAudioLog, authorization, _options);

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
     * @param reqGetAudioLog 
     * @param authorization 
     */
    public postApiV1TapirCardDio60OffsetGet(reqGetAudioLog: ReqGetAudioLog, authorization: string, _options?: Configuration): Observable<OptionDataKunAudioReadLog> {
        const requestContextPromise = this.requestFactory.postApiV1TapirCardDio60OffsetGet(reqGetAudioLog, authorization, _options);

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
     * @param reqCreateCardComment1 
     * @param authorization 
     */
    public postApiV1TapirHorseCommentCreate(reqCreateCardComment1: ReqCreateCardComment1, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirHorseCommentCreate(reqCreateCardComment1, authorization, _options);

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
     * @param reqGetExerciseItem 
     * @param authorization 
     */
    public postApiV1TapirHorseExerciseItem(reqGetExerciseItem: ReqGetExerciseItem, authorization: string, _options?: Configuration): Observable<OptionDataKunExercise> {
        const requestContextPromise = this.requestFactory.postApiV1TapirHorseExerciseItem(reqGetExerciseItem, authorization, _options);

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
     * @param reqCreatePracticeComment 
     * @param authorization 
     */
    public postApiV1TapirHorsePraticeCommentCreate(reqCreatePracticeComment: ReqCreatePracticeComment, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirHorsePraticeCommentCreate(reqCreatePracticeComment, authorization, _options);

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
     * @param reqQuerySeriesHorse 
     * @param authorization 
     */
    public postApiV1TapirHorseSeriesQuery(reqQuerySeriesHorse: ReqQuerySeriesHorse, authorization: string, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn> {
        const requestContextPromise = this.requestFactory.postApiV1TapirHorseSeriesQuery(reqQuerySeriesHorse, authorization, _options);

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
     * @param code 
     */
    public postApiV1TapirMiniAppLogin(code: string, _options?: Configuration): Observable<OptionDataMiniAppLoginToken> {
        const requestContextPromise = this.requestFactory.postApiV1TapirMiniAppLogin(code, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirMiniAppLogin(rsp)));
            }));
    }

    /**
     * @param getUserInfo 
     */
    public postApiV1TapirMiniAppUserinfoGet(getUserInfo: GetUserInfo, _options?: Configuration): Observable<OptionDataRetMiniAppUserItem> {
        const requestContextPromise = this.requestFactory.postApiV1TapirMiniAppUserinfoGet(getUserInfo, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1TapirMiniAppUserinfoGet(rsp)));
            }));
    }

    /**
     * @param reqUpdatePracticeAppraise 
     * @param authorization 
     */
    public postApiV1TapirPracticeAppriseCreate(reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise, authorization: string, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1TapirPracticeAppriseCreate(reqUpdatePracticeAppraise, authorization, _options);

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

    /**
     * @param reqCreateShandianOrder 
     */
    public postApiV1Test(reqCreateShandianOrder: ReqCreateShandianOrder, _options?: Configuration): Observable<RetMsg> {
        const requestContextPromise = this.requestFactory.postApiV1Test(reqCreateShandianOrder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1Test(rsp)));
            }));
    }

    /**
     * @param reqStartVipOrder 
     * @param authorization 
     */
    public postApiV1VipShopOrderStart(reqStartVipOrder: ReqStartVipOrder, authorization: string, _options?: Configuration): Observable<OptionDataVipShopWechatPaymentItem> {
        const requestContextPromise = this.requestFactory.postApiV1VipShopOrderStart(reqStartVipOrder, authorization, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postApiV1VipShopOrderStart(rsp)));
            }));
    }

}
