import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

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
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param authorization 
     */
    public getApiV1Chat50ChatGroups(authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataABGroup> {
        const result = this.api.getApiV1Chat50ChatGroups(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiV1Chat50ChatGroupsUser(authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataLqUser> {
        const result = this.api.getApiV1Chat50ChatGroupsUser(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiV1ConcernPractice52List(authorization: string, _options?: Configuration): Promise<KunExerciseList> {
        const result = this.api.getApiV1ConcernPractice52List(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param timestamp 
     * @param aopic 
     * @param sign 
     * @param fromPlatform 
     */
    public getApiV1OrderStarbuckIncoming(timestamp: string, aopic: string, sign: string, fromPlatform?: string, _options?: Configuration): Promise<A1Return> {
        const result = this.api.getApiV1OrderStarbuckIncoming(timestamp, aopic, sign, fromPlatform, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param lat 
     * @param lon 
     */
    public getApiV1OrderStarbuckSearch(authorization: string, lat: string, lon: string, _options?: Configuration): Promise<StarbuckStoreItem> {
        const result = this.api.getApiV1OrderStarbuckSearch(authorization, lat, lon, _options);
        return result.toPromise();
    }

    /**
     * @param seriesId 
     */
    public getApiV1PinCard50List(seriesId: string, _options?: Configuration): Promise<NoSqlPagingListDataKunCard> {
        const result = this.api.getApiV1PinCard50List(seriesId, _options);
        return result.toPromise();
    }

    /**
     * @param seriesId 
     */
    public getApiV1PinCard60List(seriesId: string, _options?: Configuration): Promise<NoSqlPagingListDataKunCard> {
        const result = this.api.getApiV1PinCard60List(seriesId, _options);
        return result.toPromise();
    }

    /**
     * @param query 
     */
    public getApiV1Search50Horse(query: string, _options?: Configuration): Promise<OptionDataListListCommonSearchContent> {
        const result = this.api.getApiV1Search50Horse(query, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param query 
     */
    public getApiV1ShandianBranchList(authorization: string, query: string, _options?: Configuration): Promise<NoSqlPagingListDataShandianBrandItem> {
        const result = this.api.getApiV1ShandianBranchList(authorization, query, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param status 
     */
    public getApiV1ShandianItemOrderListByStatus(authorization: string, status?: EnumeratumShandianOrderAllStatus, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkShandianOrder> {
        const result = this.api.getApiV1ShandianItemOrderListByStatus(authorization, status, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param ip 
     * @param input 
     */
    public getApiV1ShandianItemOrderTextCreate(authorization: string, ip: string, input: string, _options?: Configuration): Promise<OptionDataReqCreateShandianOrder> {
        const result = this.api.getApiV1ShandianItemOrderTextCreate(authorization, ip, input, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param status 
     */
    public getApiV1ShandianItemOrderUser(authorization: string, status?: EnumeratumShandianOrderAllStatus, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkShandianOrder> {
        const result = this.api.getApiV1ShandianItemOrderUser(authorization, status, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param query 
     */
    public getApiV1ShandianItemStarbuckList(authorization: string, query: string, _options?: Configuration): Promise<NoSqlPagingListDataShandianItem> {
        const result = this.api.getApiV1ShandianItemStarbuckList(authorization, query, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getApiV1ShandianShandianOrderGet(id: number, _options?: Configuration): Promise<OptionDataShandianOrder> {
        const result = this.api.getApiV1ShandianShandianOrderGet(id, _options);
        return result.toPromise();
    }

    /**
     * @param uuid 
     */
    public getApiV1ShandianTaobaoOrderGet(uuid: string, _options?: Configuration): Promise<OptionDataStarbuckPaidOrder> {
        const result = this.api.getApiV1ShandianTaobaoOrderGet(uuid, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiV1TapirHorseMembers(authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataLqUser> {
        const result = this.api.getApiV1TapirHorseMembers(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param ip 
     */
    public getApiV1ToolsIpGet(ip: string, _options?: Configuration): Promise<OptionDataIpInfoItem> {
        const result = this.api.getApiV1ToolsIpGet(ip, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqGetHistoryMessage 
     */
    public postApiTapirV1Chat50ChatMessagesHistory(authorization: string, reqGetHistoryMessage: ReqGetHistoryMessage, _options?: Configuration): Promise<NoSqlPagingListDataKunMessageReturn> {
        const result = this.api.postApiTapirV1Chat50ChatMessagesHistory(authorization, reqGetHistoryMessage, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqGetHistoryMessage 
     */
    public postApiTapirV1Chat60ChatMessagesHistory(authorization: string, reqGetHistoryMessage: ReqGetHistoryMessage, _options?: Configuration): Promise<NoSqlPagingListDataKunMessageReturn> {
        const result = this.api.postApiTapirV1Chat60ChatMessagesHistory(authorization, reqGetHistoryMessage, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param getRtcToken 
     */
    public postApiTapirV1RtcChatRtcTokenGet(authorization: string, getRtcToken: GetRtcToken, _options?: Configuration): Promise<OptionDataString> {
        const result = this.api.postApiTapirV1RtcChatRtcTokenGet(authorization, getRtcToken, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqMarkHorseRead 
     */
    public postApiV1CardRead50Markread(authorization: string, reqMarkHorseRead: ReqMarkHorseRead, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1CardRead50Markread(authorization, reqMarkHorseRead, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqStartChat 
     */
    public postApiV1Chat50ChatGroup(authorization: string, reqStartChat: ReqStartChat, _options?: Configuration): Promise<OptionDataUUID> {
        const result = this.api.postApiV1Chat50ChatGroup(authorization, reqStartChat, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqStartChat 
     */
    public postApiV1Chat60ChatGroup(authorization: string, reqStartChat: ReqStartChat, _options?: Configuration): Promise<OptionDataUUID> {
        const result = this.api.postApiV1Chat60ChatGroup(authorization, reqStartChat, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqCreateConcern 
     */
    public postApiV1Concern50Create(authorization: string, reqCreateConcern: ReqCreateConcern, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1Concern50Create(authorization, reqCreateConcern, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqCreateConcern 
     */
    public postApiV1Concern52Create(authorization: string, reqCreateConcern: ReqCreateConcern, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1Concern52Create(authorization, reqCreateConcern, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqCreateConcern 
     */
    public postApiV1Concern62Create(authorization: string, reqCreateConcern: ReqCreateConcern, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1Concern62Create(authorization, reqCreateConcern, _options);
        return result.toPromise();
    }

    /**
     * @param reqUpdateSeriesPrice 
     */
    public postApiV1HorseSeriesPrice(reqUpdateSeriesPrice: ReqUpdateSeriesPrice, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1HorseSeriesPrice(reqUpdateSeriesPrice, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param query 
     * @param reqUpdatePracticeAppraise 
     */
    public postApiV1Order50PaymentList(authorization: string, query: string, reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise, _options?: Configuration): Promise<ListPaymentHistory> {
        const result = this.api.postApiV1Order50PaymentList(authorization, query, reqUpdatePracticeAppraise, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param id 
     */
    public postApiV1OrderStarbuckGet(authorization: string, id: number, _options?: Configuration): Promise<StarbuckStoreDetailADT> {
        const result = this.api.postApiV1OrderStarbuckGet(authorization, id, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreateKunPinCard 
     * @param hi 
     */
    public postApiV1PinCard50Create(reqCreateKunPinCard: ReqCreateKunPinCard, hi?: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1PinCard50Create(reqCreateKunPinCard, hi, _options);
        return result.toPromise();
    }

    /**
     * @param reqDeleteKunPinCard 
     */
    public postApiV1PinCard50Delete(reqDeleteKunPinCard: ReqDeleteKunPinCard, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1PinCard50Delete(reqDeleteKunPinCard, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreateKunPinCard 
     * @param hi 
     */
    public postApiV1PinCard60Create(reqCreateKunPinCard: ReqCreateKunPinCard, hi?: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1PinCard60Create(reqCreateKunPinCard, hi, _options);
        return result.toPromise();
    }

    /**
     * @param reqDeleteKunPinCard 
     */
    public postApiV1PinCard60Delete(reqDeleteKunPinCard: ReqDeleteKunPinCard, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1PinCard60Delete(reqDeleteKunPinCard, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqCreateShandianOrder 
     */
    public postApiV1ShandianItemOrderCreate(authorization: string, reqCreateShandianOrder: ReqCreateShandianOrder, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1ShandianItemOrderCreate(authorization, reqCreateShandianOrder, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqAddDeliverMessage 
     */
    public postApiV1ShandianItemOrderDelivery(authorization: string, reqAddDeliverMessage: ReqAddDeliverMessage, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1ShandianItemOrderDelivery(authorization, reqAddDeliverMessage, _options);
        return result.toPromise();
    }

    /**
     * @param addStarbuckGrouponTicket 
     */
    public postApiV1ShandianTaobaoOrderCreate(addStarbuckGrouponTicket: AddStarbuckGrouponTicket, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1ShandianTaobaoOrderCreate(addStarbuckGrouponTicket, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqMarkUserDanger 
     */
    public postApiV1TapirAdmin50SecurityCreate(authorization: string, reqMarkUserDanger: ReqMarkUserDanger, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirAdmin50SecurityCreate(authorization, reqMarkUserDanger, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqUpdateAudioLog 
     */
    public postApiV1TapirCardDio50OffsetCreate(authorization: string, reqUpdateAudioLog: ReqUpdateAudioLog, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirCardDio50OffsetCreate(authorization, reqUpdateAudioLog, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqGetAudioLog 
     */
    public postApiV1TapirCardDio50OffsetGet(authorization: string, reqGetAudioLog: ReqGetAudioLog, _options?: Configuration): Promise<OptionDataKunAudioReadLog> {
        const result = this.api.postApiV1TapirCardDio50OffsetGet(authorization, reqGetAudioLog, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqUpdateAudioLog 
     */
    public postApiV1TapirCardDio60OffsetCreate(authorization: string, reqUpdateAudioLog: ReqUpdateAudioLog, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirCardDio60OffsetCreate(authorization, reqUpdateAudioLog, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqGetAudioLog 
     */
    public postApiV1TapirCardDio60OffsetGet(authorization: string, reqGetAudioLog: ReqGetAudioLog, _options?: Configuration): Promise<OptionDataKunAudioReadLog> {
        const result = this.api.postApiV1TapirCardDio60OffsetGet(authorization, reqGetAudioLog, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqCreateCardComment1 
     */
    public postApiV1TapirHorseCommentCreate(authorization: string, reqCreateCardComment1: ReqCreateCardComment1, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirHorseCommentCreate(authorization, reqCreateCardComment1, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqGetExerciseItem 
     */
    public postApiV1TapirHorseExerciseItem(authorization: string, reqGetExerciseItem: ReqGetExerciseItem, _options?: Configuration): Promise<OptionDataKunExercise> {
        const result = this.api.postApiV1TapirHorseExerciseItem(authorization, reqGetExerciseItem, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqCreatePracticeComment 
     */
    public postApiV1TapirHorsePraticeCommentCreate(authorization: string, reqCreatePracticeComment: ReqCreatePracticeComment, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirHorsePraticeCommentCreate(authorization, reqCreatePracticeComment, _options);
        return result.toPromise();
    }

    /**
     */
    public postApiV1TapirHorseSeriesGetpubliclist(_options?: Configuration): Promise<NoSqlPagingListHorseSeriesReturn> {
        const result = this.api.postApiV1TapirHorseSeriesGetpubliclist(_options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqQuerySeriesHorse 
     */
    public postApiV1TapirHorseSeriesQuery(authorization: string, reqQuerySeriesHorse: ReqQuerySeriesHorse, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn> {
        const result = this.api.postApiV1TapirHorseSeriesQuery(authorization, reqQuerySeriesHorse, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param reqUpdatePracticeAppraise 
     */
    public postApiV1TapirPracticeAppriseCreate(authorization: string, reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirPracticeAppriseCreate(authorization, reqUpdatePracticeAppraise, _options);
        return result.toPromise();
    }


}



