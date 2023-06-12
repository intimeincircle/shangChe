import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

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
     * @param url 
     */
    public getApiAuthV1TapirFuwuhaoOpenSign(url: string, _options?: Configuration): Promise<OptionDataRetccessTokenApp> {
        const result = this.api.getApiAuthV1TapirFuwuhaoOpenSign(url, _options);
        return result.toPromise();
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
    public getApiV1Chat50ChatGroupsUser(authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataKunUser> {
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
     * @param input 
     */
    public getApiV1KunSubscribed50Status(input: string, _options?: Configuration): Promise<OptionDataBoolean> {
        const result = this.api.getApiV1KunSubscribed50Status(input, _options);
        return result.toPromise();
    }

    /**
     * @param input 
     */
    public getApiV1KunSubscribed61Status(input: string, _options?: Configuration): Promise<OptionDataBoolean> {
        const result = this.api.getApiV1KunSubscribed61Status(input, _options);
        return result.toPromise();
    }

    /**
     * @param lat 
     * @param lon 
     */
    public getApiV1OrderKfcSearch(lat: string, lon: string, _options?: Configuration): Promise<NoSqlPagingListDataASearchStore> {
        const result = this.api.getApiV1OrderKfcSearch(lat, lon, _options);
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
     * @param lat 
     * @param lon 
     */
    public getApiV1OrderStarbuckSearch(lat: string, lon: string, _options?: Configuration): Promise<OptionDataStarbuckStoreItem> {
        const result = this.api.getApiV1OrderStarbuckSearch(lat, lon, _options);
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
     * @param card 
     */
    public getApiV1ShandianBenefitCardGet(authorization: string, card: EnumeratumBenifitCardItem, _options?: Configuration): Promise<OptionDataKunBenefitCard> {
        const result = this.api.getApiV1ShandianBenefitCardGet(authorization, card, _options);
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
     * @param input 
     */
    public getApiV1ShandianItemOrderTextCreate(authorization: string, input: string, _options?: Configuration): Promise<OptionDataReqCreateShandianOrder> {
        const result = this.api.getApiV1ShandianItemOrderTextCreate(authorization, input, _options);
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
     * @param query 
     */
    public getApiV1ShandianItemStarbuckList(query: string, _options?: Configuration): Promise<NoSqlPagingListDataShandianItem> {
        const result = this.api.getApiV1ShandianItemStarbuckList(query, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param status 
     */
    public getApiV1ShandianItemTaobaoListByStatus(authorization: string, status?: EnumeratumStarbuckOrderPaidStatus, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkStarbuckPaidOrder> {
        const result = this.api.getApiV1ShandianItemTaobaoListByStatus(authorization, status, _options);
        return result.toPromise();
    }

    /**
     * get kun order for shandian
     * @param id 
     */
    public getApiV1ShandianShandianOrderGet(id: number, _options?: Configuration): Promise<OptionDataShandianOrder> {
        const result = this.api.getApiV1ShandianShandianOrderGet(id, _options);
        return result.toPromise();
    }

    /**
     * @param reqStarbuckGroupon 
     * @param authorization 
     */
    public getApiV1ShandianShandianTaobaoGet(reqStarbuckGroupon: ReqStarbuckGroupon, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.getApiV1ShandianShandianTaobaoGet(reqStarbuckGroupon, authorization, _options);
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
     * get kun order & task for shandian
     * @param uuid 
     */
    public getApiV1ShandianTaobaoOrderTaskGet(uuid: string, _options?: Configuration): Promise<OptionDataKunShandianOrderTask> {
        const result = this.api.getApiV1ShandianTaobaoOrderTaskGet(uuid, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiV1TapirHorseMembers(authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataKunUser> {
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
     */
    public getApiV1UserShandianMiniuserSessionGet(authorization: string, _options?: Configuration): Promise<OptionDataKunUser> {
        const result = this.api.getApiV1UserShandianMiniuserSessionGet(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public getApiV1UserShandianOpenSessionGet(authorization: string, _options?: Configuration): Promise<OptionDataKunUser> {
        const result = this.api.getApiV1UserShandianOpenSessionGet(authorization, _options);
        return result.toPromise();
    }

    /**
     * @param code 
     */
    public postApiAuthV1TapirFuwuhaoOpenLogin(code: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiAuthV1TapirFuwuhaoOpenLogin(code, _options);
        return result.toPromise();
    }

    /**
     * @param reqGetHistoryMessage 
     * @param authorization 
     */
    public postApiTapirV1Chat50ChatMessagesHistory(reqGetHistoryMessage: ReqGetHistoryMessage, authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataKunMessageReturn> {
        const result = this.api.postApiTapirV1Chat50ChatMessagesHistory(reqGetHistoryMessage, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqGetHistoryMessage 
     * @param authorization 
     */
    public postApiTapirV1Chat60ChatMessagesHistory(reqGetHistoryMessage: ReqGetHistoryMessage, authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataKunMessageReturn> {
        const result = this.api.postApiTapirV1Chat60ChatMessagesHistory(reqGetHistoryMessage, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param getRtcToken 
     * @param authorization 
     */
    public postApiTapirV1RtcChatRtcTokenGet(getRtcToken: GetRtcToken, authorization: string, _options?: Configuration): Promise<OptionDataString> {
        const result = this.api.postApiTapirV1RtcChatRtcTokenGet(getRtcToken, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqMarkHorseRead 
     * @param authorization 
     */
    public postApiV1CardRead50Markread(reqMarkHorseRead: ReqMarkHorseRead, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1CardRead50Markread(reqMarkHorseRead, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqStartChat 
     * @param authorization 
     */
    public postApiV1Chat50ChatGroup(reqStartChat: ReqStartChat, authorization: string, _options?: Configuration): Promise<OptionDataUUID> {
        const result = this.api.postApiV1Chat50ChatGroup(reqStartChat, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqStartChat 
     * @param authorization 
     */
    public postApiV1Chat60ChatGroup(reqStartChat: ReqStartChat, authorization: string, _options?: Configuration): Promise<OptionDataUUID> {
        const result = this.api.postApiV1Chat60ChatGroup(reqStartChat, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreateConcern 
     * @param authorization 
     */
    public postApiV1Concern50Create(reqCreateConcern: ReqCreateConcern, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1Concern50Create(reqCreateConcern, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreateConcern 
     * @param authorization 
     */
    public postApiV1Concern52Create(reqCreateConcern: ReqCreateConcern, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1Concern52Create(reqCreateConcern, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreateConcern 
     * @param authorization 
     */
    public postApiV1Concern62Create(reqCreateConcern: ReqCreateConcern, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1Concern62Create(reqCreateConcern, authorization, _options);
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
     * @param reqUpdatePracticeAppraise 
     * @param authorization 
     * @param query 
     */
    public postApiV1Order50PaymentList(reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise, authorization: string, query: string, _options?: Configuration): Promise<ListPaymentHistory> {
        const result = this.api.postApiV1Order50PaymentList(reqUpdatePracticeAppraise, authorization, query, _options);
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
     * @param reqCreateShandianOrder 
     */
    public postApiV1ShandianAnonymousItemOrderCreate(reqCreateShandianOrder: ReqCreateShandianOrder, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1ShandianAnonymousItemOrderCreate(reqCreateShandianOrder, _options);
        return result.toPromise();
    }

    /**
     * @param aglosticCaigouItemSigned 
     * @param itemId 
     */
    public postApiV1ShandianAutoSignPaymentItemidCaigou(aglosticCaigouItemSigned: AglosticCaigouItemSigned, itemId: string, _options?: Configuration): Promise<OptionDataString> {
        const result = this.api.postApiV1ShandianAutoSignPaymentItemidCaigou(aglosticCaigouItemSigned, itemId, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreateShandianOrder 
     * @param authorization 
     */
    public postApiV1ShandianItemOrderCreate(reqCreateShandianOrder: ReqCreateShandianOrder, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1ShandianItemOrderCreate(reqCreateShandianOrder, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqAddDeliverMessage 
     * @param authorization 
     */
    public postApiV1ShandianItemOrderDelivery(reqAddDeliverMessage: ReqAddDeliverMessage, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1ShandianItemOrderDelivery(reqAddDeliverMessage, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param createPaymentHistory 
     * @param authorization 
     */
    public postApiV1ShandianShandianPaymentStart(createPaymentHistory: CreatePaymentHistory, authorization: string, _options?: Configuration): Promise<OptionDataWechatPaymentItem> {
        const result = this.api.postApiV1ShandianShandianPaymentStart(createPaymentHistory, authorization, _options);
        return result.toPromise();
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
    public postApiV1ShandianShopPaymentCallback(orderno: string, outorderno: string, userid: string, status: string, refundstatus: string, money: string, receipt: string, createTime: string, updateTime: string, timestamp: string, sign: string, refundmoney?: string, refundreceipt?: string, _options?: Configuration): Promise<string> {
        const result = this.api.postApiV1ShandianShopPaymentCallback(orderno, outorderno, userid, status, refundstatus, money, receipt, createTime, updateTime, timestamp, sign, refundmoney, refundreceipt, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     */
    public postApiV1ShandianSimpleOrderGet(authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataKunSimpleOrder> {
        const result = this.api.postApiV1ShandianSimpleOrderGet(authorization, _options);
        return result.toPromise();
    }

    /**
     * 下单咖啡获取确认链接
     * @param aglosticCaigouItemSignedAndStarkbuckItem 
     */
    public postApiV1ShandianStarbuckOrderCaigouCoffee(aglosticCaigouItemSignedAndStarkbuckItem: AglosticCaigouItemSignedAndStarkbuckItem, _options?: Configuration): Promise<OptionDataString> {
        const result = this.api.postApiV1ShandianStarbuckOrderCaigouCoffee(aglosticCaigouItemSignedAndStarkbuckItem, _options);
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
     * @param group 
     * @param name 
     */
    public postApiV1ShandianVipShopGoods(group?: number, name?: string, _options?: Configuration): Promise<NoSqlPagingListDataShopItemDescription> {
        const result = this.api.postApiV1ShandianVipShopGoods(group, name, _options);
        return result.toPromise();
    }

    /**
     */
    public postApiV1ShandianVipShopGroups(_options?: Configuration): Promise<NoSqlPagingListDataVipShopGroupItem> {
        const result = this.api.postApiV1ShandianVipShopGroups(_options);
        return result.toPromise();
    }

    /**
     * @param goodid 
     */
    public postApiV1ShandianVipShopItemGoodid(goodid: number, _options?: Configuration): Promise<OptionDataDetailRootInterface> {
        const result = this.api.postApiV1ShandianVipShopItemGoodid(goodid, _options);
        return result.toPromise();
    }

    /**
     * @param authorization 
     * @param orderId 
     */
    public postApiV1ShandianVipShopOrderOrderid(authorization: string, orderId: string, _options?: Configuration): Promise<OptionDataKunSimpleOrder> {
        const result = this.api.postApiV1ShandianVipShopOrderOrderid(authorization, orderId, _options);
        return result.toPromise();
    }

    /**
     * @param aglosticCaigouItem 
     * @param itemId 
     */
    public postApiV1ShandianXianyuPaymentItemidCaigou(aglosticCaigouItem: AglosticCaigouItem, itemId: string, _options?: Configuration): Promise<OptionDataString> {
        const result = this.api.postApiV1ShandianXianyuPaymentItemidCaigou(aglosticCaigouItem, itemId, _options);
        return result.toPromise();
    }

    /**
     * @param reqMarkUserDanger 
     * @param authorization 
     */
    public postApiV1TapirAdmin50SecurityCreate(reqMarkUserDanger: ReqMarkUserDanger, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirAdmin50SecurityCreate(reqMarkUserDanger, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqUpdateAudioLog 
     * @param authorization 
     */
    public postApiV1TapirCardDio50OffsetCreate(reqUpdateAudioLog: ReqUpdateAudioLog, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirCardDio50OffsetCreate(reqUpdateAudioLog, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqGetAudioLog 
     * @param authorization 
     */
    public postApiV1TapirCardDio50OffsetGet(reqGetAudioLog: ReqGetAudioLog, authorization: string, _options?: Configuration): Promise<OptionDataKunAudioReadLog> {
        const result = this.api.postApiV1TapirCardDio50OffsetGet(reqGetAudioLog, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqUpdateAudioLog 
     * @param authorization 
     */
    public postApiV1TapirCardDio60OffsetCreate(reqUpdateAudioLog: ReqUpdateAudioLog, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirCardDio60OffsetCreate(reqUpdateAudioLog, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqGetAudioLog 
     * @param authorization 
     */
    public postApiV1TapirCardDio60OffsetGet(reqGetAudioLog: ReqGetAudioLog, authorization: string, _options?: Configuration): Promise<OptionDataKunAudioReadLog> {
        const result = this.api.postApiV1TapirCardDio60OffsetGet(reqGetAudioLog, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreateCardComment1 
     * @param authorization 
     */
    public postApiV1TapirHorseCommentCreate(reqCreateCardComment1: ReqCreateCardComment1, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirHorseCommentCreate(reqCreateCardComment1, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqGetExerciseItem 
     * @param authorization 
     */
    public postApiV1TapirHorseExerciseItem(reqGetExerciseItem: ReqGetExerciseItem, authorization: string, _options?: Configuration): Promise<OptionDataKunExercise> {
        const result = this.api.postApiV1TapirHorseExerciseItem(reqGetExerciseItem, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreatePracticeComment 
     * @param authorization 
     */
    public postApiV1TapirHorsePraticeCommentCreate(reqCreatePracticeComment: ReqCreatePracticeComment, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirHorsePraticeCommentCreate(reqCreatePracticeComment, authorization, _options);
        return result.toPromise();
    }

    /**
     */
    public postApiV1TapirHorseSeriesGetpubliclist(_options?: Configuration): Promise<NoSqlPagingListHorseSeriesReturn> {
        const result = this.api.postApiV1TapirHorseSeriesGetpubliclist(_options);
        return result.toPromise();
    }

    /**
     * @param reqQuerySeriesHorse 
     * @param authorization 
     */
    public postApiV1TapirHorseSeriesQuery(reqQuerySeriesHorse: ReqQuerySeriesHorse, authorization: string, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn> {
        const result = this.api.postApiV1TapirHorseSeriesQuery(reqQuerySeriesHorse, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param code 
     */
    public postApiV1TapirMiniAppLogin(code: string, _options?: Configuration): Promise<OptionDataMiniAppLoginToken> {
        const result = this.api.postApiV1TapirMiniAppLogin(code, _options);
        return result.toPromise();
    }

    /**
     * @param getUserInfo 
     */
    public postApiV1TapirMiniAppUserinfoGet(getUserInfo: GetUserInfo, _options?: Configuration): Promise<OptionDataRetMiniAppUserItem> {
        const result = this.api.postApiV1TapirMiniAppUserinfoGet(getUserInfo, _options);
        return result.toPromise();
    }

    /**
     * @param reqUpdatePracticeAppraise 
     * @param authorization 
     */
    public postApiV1TapirPracticeAppriseCreate(reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise, authorization: string, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1TapirPracticeAppriseCreate(reqUpdatePracticeAppraise, authorization, _options);
        return result.toPromise();
    }

    /**
     * @param reqCreateShandianOrder 
     */
    public postApiV1Test(reqCreateShandianOrder: ReqCreateShandianOrder, _options?: Configuration): Promise<RetMsg> {
        const result = this.api.postApiV1Test(reqCreateShandianOrder, _options);
        return result.toPromise();
    }

    /**
     * @param reqStartVipOrder 
     * @param authorization 
     */
    public postApiV1VipShopOrderStart(reqStartVipOrder: ReqStartVipOrder, authorization: string, _options?: Configuration): Promise<OptionDataVipShopWechatPaymentItem> {
        const result = this.api.postApiV1VipShopOrderStart(reqStartVipOrder, authorization, _options);
        return result.toPromise();
    }


}



