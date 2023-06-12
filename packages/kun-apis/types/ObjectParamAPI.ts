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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetApiAuthV1TapirFuwuhaoOpenSignRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiAuthV1TapirFuwuhaoOpenSign
     */
    url: string
}

export interface DefaultApiGetApiV1Chat50ChatGroupsRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1Chat50ChatGroups
     */
    authorization: string
}

export interface DefaultApiGetApiV1Chat50ChatGroupsUserRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1Chat50ChatGroupsUser
     */
    authorization: string
}

export interface DefaultApiGetApiV1ConcernPractice52ListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ConcernPractice52List
     */
    authorization: string
}

export interface DefaultApiGetApiV1KunSubscribed50StatusRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1KunSubscribed50Status
     */
    input: string
}

export interface DefaultApiGetApiV1KunSubscribed61StatusRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1KunSubscribed61Status
     */
    input: string
}

export interface DefaultApiGetApiV1OrderKfcSearchRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1OrderKfcSearch
     */
    lat: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1OrderKfcSearch
     */
    lon: string
}

export interface DefaultApiGetApiV1OrderStarbuckIncomingRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1OrderStarbuckIncoming
     */
    timestamp: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1OrderStarbuckIncoming
     */
    aopic: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1OrderStarbuckIncoming
     */
    sign: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1OrderStarbuckIncoming
     */
    fromPlatform?: string
}

export interface DefaultApiGetApiV1OrderStarbuckSearchRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1OrderStarbuckSearch
     */
    lat: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1OrderStarbuckSearch
     */
    lon: string
}

export interface DefaultApiGetApiV1PinCard50ListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1PinCard50List
     */
    seriesId: string
}

export interface DefaultApiGetApiV1PinCard60ListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1PinCard60List
     */
    seriesId: string
}

export interface DefaultApiGetApiV1Search50HorseRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1Search50Horse
     */
    query: string
}

export interface DefaultApiGetApiV1ShandianBenefitCardGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianBenefitCardGet
     */
    authorization: string
    /**
     * 
     * @type EnumeratumBenifitCardItem
     * @memberof DefaultApigetApiV1ShandianBenefitCardGet
     */
    card: EnumeratumBenifitCardItem
}

export interface DefaultApiGetApiV1ShandianBranchListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianBranchList
     */
    authorization: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianBranchList
     */
    query: string
}

export interface DefaultApiGetApiV1ShandianItemOrderListByStatusRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianItemOrderListByStatus
     */
    authorization: string
    /**
     * 
     * @type EnumeratumShandianOrderAllStatus
     * @memberof DefaultApigetApiV1ShandianItemOrderListByStatus
     */
    status?: EnumeratumShandianOrderAllStatus
}

export interface DefaultApiGetApiV1ShandianItemOrderTextCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianItemOrderTextCreate
     */
    authorization: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianItemOrderTextCreate
     */
    input: string
}

export interface DefaultApiGetApiV1ShandianItemOrderUserRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianItemOrderUser
     */
    authorization: string
    /**
     * 
     * @type EnumeratumShandianOrderAllStatus
     * @memberof DefaultApigetApiV1ShandianItemOrderUser
     */
    status?: EnumeratumShandianOrderAllStatus
}

export interface DefaultApiGetApiV1ShandianItemStarbuckListRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianItemStarbuckList
     */
    query: string
}

export interface DefaultApiGetApiV1ShandianItemTaobaoListByStatusRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianItemTaobaoListByStatus
     */
    authorization: string
    /**
     * 
     * @type EnumeratumStarbuckOrderPaidStatus
     * @memberof DefaultApigetApiV1ShandianItemTaobaoListByStatus
     */
    status?: EnumeratumStarbuckOrderPaidStatus
}

export interface DefaultApiGetApiV1ShandianShandianOrderGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiV1ShandianShandianOrderGet
     */
    id: number
}

export interface DefaultApiGetApiV1ShandianShandianTaobaoGetRequest {
    /**
     * 
     * @type ReqStarbuckGroupon
     * @memberof DefaultApigetApiV1ShandianShandianTaobaoGet
     */
    reqStarbuckGroupon: ReqStarbuckGroupon
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianShandianTaobaoGet
     */
    authorization: string
}

export interface DefaultApiGetApiV1ShandianTaobaoOrderGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianTaobaoOrderGet
     */
    uuid: string
}

export interface DefaultApiGetApiV1ShandianTaobaoOrderTaskGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianTaobaoOrderTaskGet
     */
    uuid: string
}

export interface DefaultApiGetApiV1TapirHorseMembersRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1TapirHorseMembers
     */
    authorization: string
}

export interface DefaultApiGetApiV1ToolsIpGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ToolsIpGet
     */
    ip: string
}

export interface DefaultApiGetApiV1UserShandianMiniuserSessionGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1UserShandianMiniuserSessionGet
     */
    authorization: string
}

export interface DefaultApiGetApiV1UserShandianOpenSessionGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1UserShandianOpenSessionGet
     */
    authorization: string
}

export interface DefaultApiPostApiAuthV1TapirFuwuhaoOpenLoginRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiAuthV1TapirFuwuhaoOpenLogin
     */
    code: string
}

export interface DefaultApiPostApiTapirV1Chat50ChatMessagesHistoryRequest {
    /**
     * 
     * @type ReqGetHistoryMessage
     * @memberof DefaultApipostApiTapirV1Chat50ChatMessagesHistory
     */
    reqGetHistoryMessage: ReqGetHistoryMessage
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiTapirV1Chat50ChatMessagesHistory
     */
    authorization: string
}

export interface DefaultApiPostApiTapirV1Chat60ChatMessagesHistoryRequest {
    /**
     * 
     * @type ReqGetHistoryMessage
     * @memberof DefaultApipostApiTapirV1Chat60ChatMessagesHistory
     */
    reqGetHistoryMessage: ReqGetHistoryMessage
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiTapirV1Chat60ChatMessagesHistory
     */
    authorization: string
}

export interface DefaultApiPostApiTapirV1RtcChatRtcTokenGetRequest {
    /**
     * 
     * @type GetRtcToken
     * @memberof DefaultApipostApiTapirV1RtcChatRtcTokenGet
     */
    getRtcToken: GetRtcToken
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiTapirV1RtcChatRtcTokenGet
     */
    authorization: string
}

export interface DefaultApiPostApiV1CardRead50MarkreadRequest {
    /**
     * 
     * @type ReqMarkHorseRead
     * @memberof DefaultApipostApiV1CardRead50Markread
     */
    reqMarkHorseRead: ReqMarkHorseRead
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1CardRead50Markread
     */
    authorization: string
}

export interface DefaultApiPostApiV1Chat50ChatGroupRequest {
    /**
     * 
     * @type ReqStartChat
     * @memberof DefaultApipostApiV1Chat50ChatGroup
     */
    reqStartChat: ReqStartChat
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Chat50ChatGroup
     */
    authorization: string
}

export interface DefaultApiPostApiV1Chat60ChatGroupRequest {
    /**
     * 
     * @type ReqStartChat
     * @memberof DefaultApipostApiV1Chat60ChatGroup
     */
    reqStartChat: ReqStartChat
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Chat60ChatGroup
     */
    authorization: string
}

export interface DefaultApiPostApiV1Concern50CreateRequest {
    /**
     * 
     * @type ReqCreateConcern
     * @memberof DefaultApipostApiV1Concern50Create
     */
    reqCreateConcern: ReqCreateConcern
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Concern50Create
     */
    authorization: string
}

export interface DefaultApiPostApiV1Concern52CreateRequest {
    /**
     * 
     * @type ReqCreateConcern
     * @memberof DefaultApipostApiV1Concern52Create
     */
    reqCreateConcern: ReqCreateConcern
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Concern52Create
     */
    authorization: string
}

export interface DefaultApiPostApiV1Concern62CreateRequest {
    /**
     * 
     * @type ReqCreateConcern
     * @memberof DefaultApipostApiV1Concern62Create
     */
    reqCreateConcern: ReqCreateConcern
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Concern62Create
     */
    authorization: string
}

export interface DefaultApiPostApiV1HorseSeriesPriceRequest {
    /**
     * 
     * @type ReqUpdateSeriesPrice
     * @memberof DefaultApipostApiV1HorseSeriesPrice
     */
    reqUpdateSeriesPrice: ReqUpdateSeriesPrice
}

export interface DefaultApiPostApiV1Order50PaymentListRequest {
    /**
     * 
     * @type ReqUpdatePracticeAppraise
     * @memberof DefaultApipostApiV1Order50PaymentList
     */
    reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Order50PaymentList
     */
    authorization: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Order50PaymentList
     */
    query: string
}

export interface DefaultApiPostApiV1OrderStarbuckGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1OrderStarbuckGet
     */
    authorization: string
    /**
     * 
     * @type number
     * @memberof DefaultApipostApiV1OrderStarbuckGet
     */
    id: number
}

export interface DefaultApiPostApiV1PinCard50CreateRequest {
    /**
     * 
     * @type ReqCreateKunPinCard
     * @memberof DefaultApipostApiV1PinCard50Create
     */
    reqCreateKunPinCard: ReqCreateKunPinCard
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1PinCard50Create
     */
    hi?: string
}

export interface DefaultApiPostApiV1PinCard50DeleteRequest {
    /**
     * 
     * @type ReqDeleteKunPinCard
     * @memberof DefaultApipostApiV1PinCard50Delete
     */
    reqDeleteKunPinCard: ReqDeleteKunPinCard
}

export interface DefaultApiPostApiV1PinCard60CreateRequest {
    /**
     * 
     * @type ReqCreateKunPinCard
     * @memberof DefaultApipostApiV1PinCard60Create
     */
    reqCreateKunPinCard: ReqCreateKunPinCard
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1PinCard60Create
     */
    hi?: string
}

export interface DefaultApiPostApiV1PinCard60DeleteRequest {
    /**
     * 
     * @type ReqDeleteKunPinCard
     * @memberof DefaultApipostApiV1PinCard60Delete
     */
    reqDeleteKunPinCard: ReqDeleteKunPinCard
}

export interface DefaultApiPostApiV1ShandianAnonymousItemOrderCreateRequest {
    /**
     * 
     * @type ReqCreateShandianOrder
     * @memberof DefaultApipostApiV1ShandianAnonymousItemOrderCreate
     */
    reqCreateShandianOrder: ReqCreateShandianOrder
}

export interface DefaultApiPostApiV1ShandianAutoSignPaymentItemidCaigouRequest {
    /**
     * 
     * @type AglosticCaigouItemSigned
     * @memberof DefaultApipostApiV1ShandianAutoSignPaymentItemidCaigou
     */
    aglosticCaigouItemSigned: AglosticCaigouItemSigned
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianAutoSignPaymentItemidCaigou
     */
    itemId: string
}

export interface DefaultApiPostApiV1ShandianItemOrderCreateRequest {
    /**
     * 
     * @type ReqCreateShandianOrder
     * @memberof DefaultApipostApiV1ShandianItemOrderCreate
     */
    reqCreateShandianOrder: ReqCreateShandianOrder
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianItemOrderCreate
     */
    authorization: string
}

export interface DefaultApiPostApiV1ShandianItemOrderDeliveryRequest {
    /**
     * 
     * @type ReqAddDeliverMessage
     * @memberof DefaultApipostApiV1ShandianItemOrderDelivery
     */
    reqAddDeliverMessage: ReqAddDeliverMessage
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianItemOrderDelivery
     */
    authorization: string
}

export interface DefaultApiPostApiV1ShandianShandianPaymentStartRequest {
    /**
     * 
     * @type CreatePaymentHistory
     * @memberof DefaultApipostApiV1ShandianShandianPaymentStart
     */
    createPaymentHistory: CreatePaymentHistory
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShandianPaymentStart
     */
    authorization: string
}

export interface DefaultApiPostApiV1ShandianShopPaymentCallbackRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    orderno: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    outorderno: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    userid: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    status: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    refundstatus: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    money: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    receipt: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    createTime: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    updateTime: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    timestamp: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    sign: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    refundmoney?: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianShopPaymentCallback
     */
    refundreceipt?: string
}

export interface DefaultApiPostApiV1ShandianSimpleOrderGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianSimpleOrderGet
     */
    authorization: string
}

export interface DefaultApiPostApiV1ShandianStarbuckOrderCaigouCoffeeRequest {
    /**
     * 
     * @type AglosticCaigouItemSignedAndStarkbuckItem
     * @memberof DefaultApipostApiV1ShandianStarbuckOrderCaigouCoffee
     */
    aglosticCaigouItemSignedAndStarkbuckItem: AglosticCaigouItemSignedAndStarkbuckItem
}

export interface DefaultApiPostApiV1ShandianTaobaoOrderCreateRequest {
    /**
     * 
     * @type AddStarbuckGrouponTicket
     * @memberof DefaultApipostApiV1ShandianTaobaoOrderCreate
     */
    addStarbuckGrouponTicket: AddStarbuckGrouponTicket
}

export interface DefaultApiPostApiV1ShandianVipShopGoodsRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApipostApiV1ShandianVipShopGoods
     */
    group?: number
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianVipShopGoods
     */
    name?: string
}

export interface DefaultApiPostApiV1ShandianVipShopGroupsRequest {
}

export interface DefaultApiPostApiV1ShandianVipShopItemGoodidRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApipostApiV1ShandianVipShopItemGoodid
     */
    goodid: number
}

export interface DefaultApiPostApiV1ShandianVipShopOrderOrderidRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianVipShopOrderOrderid
     */
    authorization: string
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianVipShopOrderOrderid
     */
    orderId: string
}

export interface DefaultApiPostApiV1ShandianXianyuPaymentItemidCaigouRequest {
    /**
     * 
     * @type AglosticCaigouItem
     * @memberof DefaultApipostApiV1ShandianXianyuPaymentItemidCaigou
     */
    aglosticCaigouItem: AglosticCaigouItem
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianXianyuPaymentItemidCaigou
     */
    itemId: string
}

export interface DefaultApiPostApiV1TapirAdmin50SecurityCreateRequest {
    /**
     * 
     * @type ReqMarkUserDanger
     * @memberof DefaultApipostApiV1TapirAdmin50SecurityCreate
     */
    reqMarkUserDanger: ReqMarkUserDanger
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirAdmin50SecurityCreate
     */
    authorization: string
}

export interface DefaultApiPostApiV1TapirCardDio50OffsetCreateRequest {
    /**
     * 
     * @type ReqUpdateAudioLog
     * @memberof DefaultApipostApiV1TapirCardDio50OffsetCreate
     */
    reqUpdateAudioLog: ReqUpdateAudioLog
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirCardDio50OffsetCreate
     */
    authorization: string
}

export interface DefaultApiPostApiV1TapirCardDio50OffsetGetRequest {
    /**
     * 
     * @type ReqGetAudioLog
     * @memberof DefaultApipostApiV1TapirCardDio50OffsetGet
     */
    reqGetAudioLog: ReqGetAudioLog
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirCardDio50OffsetGet
     */
    authorization: string
}

export interface DefaultApiPostApiV1TapirCardDio60OffsetCreateRequest {
    /**
     * 
     * @type ReqUpdateAudioLog
     * @memberof DefaultApipostApiV1TapirCardDio60OffsetCreate
     */
    reqUpdateAudioLog: ReqUpdateAudioLog
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirCardDio60OffsetCreate
     */
    authorization: string
}

export interface DefaultApiPostApiV1TapirCardDio60OffsetGetRequest {
    /**
     * 
     * @type ReqGetAudioLog
     * @memberof DefaultApipostApiV1TapirCardDio60OffsetGet
     */
    reqGetAudioLog: ReqGetAudioLog
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirCardDio60OffsetGet
     */
    authorization: string
}

export interface DefaultApiPostApiV1TapirHorseCommentCreateRequest {
    /**
     * 
     * @type ReqCreateCardComment1
     * @memberof DefaultApipostApiV1TapirHorseCommentCreate
     */
    reqCreateCardComment1: ReqCreateCardComment1
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirHorseCommentCreate
     */
    authorization: string
}

export interface DefaultApiPostApiV1TapirHorseExerciseItemRequest {
    /**
     * 
     * @type ReqGetExerciseItem
     * @memberof DefaultApipostApiV1TapirHorseExerciseItem
     */
    reqGetExerciseItem: ReqGetExerciseItem
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirHorseExerciseItem
     */
    authorization: string
}

export interface DefaultApiPostApiV1TapirHorsePraticeCommentCreateRequest {
    /**
     * 
     * @type ReqCreatePracticeComment
     * @memberof DefaultApipostApiV1TapirHorsePraticeCommentCreate
     */
    reqCreatePracticeComment: ReqCreatePracticeComment
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirHorsePraticeCommentCreate
     */
    authorization: string
}

export interface DefaultApiPostApiV1TapirHorseSeriesGetpubliclistRequest {
}

export interface DefaultApiPostApiV1TapirHorseSeriesQueryRequest {
    /**
     * 
     * @type ReqQuerySeriesHorse
     * @memberof DefaultApipostApiV1TapirHorseSeriesQuery
     */
    reqQuerySeriesHorse: ReqQuerySeriesHorse
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirHorseSeriesQuery
     */
    authorization: string
}

export interface DefaultApiPostApiV1TapirMiniAppLoginRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirMiniAppLogin
     */
    code: string
}

export interface DefaultApiPostApiV1TapirMiniAppUserinfoGetRequest {
    /**
     * 
     * @type GetUserInfo
     * @memberof DefaultApipostApiV1TapirMiniAppUserinfoGet
     */
    getUserInfo: GetUserInfo
}

export interface DefaultApiPostApiV1TapirPracticeAppriseCreateRequest {
    /**
     * 
     * @type ReqUpdatePracticeAppraise
     * @memberof DefaultApipostApiV1TapirPracticeAppriseCreate
     */
    reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirPracticeAppriseCreate
     */
    authorization: string
}

export interface DefaultApiPostApiV1TestRequest {
    /**
     * 
     * @type ReqCreateShandianOrder
     * @memberof DefaultApipostApiV1Test
     */
    reqCreateShandianOrder: ReqCreateShandianOrder
}

export interface DefaultApiPostApiV1VipShopOrderStartRequest {
    /**
     * 
     * @type ReqStartVipOrder
     * @memberof DefaultApipostApiV1VipShopOrderStart
     */
    reqStartVipOrder: ReqStartVipOrder
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1VipShopOrderStart
     */
    authorization: string
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getApiAuthV1TapirFuwuhaoOpenSign(param: DefaultApiGetApiAuthV1TapirFuwuhaoOpenSignRequest, options?: Configuration): Promise<OptionDataRetccessTokenApp> {
        return this.api.getApiAuthV1TapirFuwuhaoOpenSign(param.url,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1Chat50ChatGroups(param: DefaultApiGetApiV1Chat50ChatGroupsRequest, options?: Configuration): Promise<NoSqlPagingListDataABGroup> {
        return this.api.getApiV1Chat50ChatGroups(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1Chat50ChatGroupsUser(param: DefaultApiGetApiV1Chat50ChatGroupsUserRequest, options?: Configuration): Promise<NoSqlPagingListDataKunUser> {
        return this.api.getApiV1Chat50ChatGroupsUser(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ConcernPractice52List(param: DefaultApiGetApiV1ConcernPractice52ListRequest, options?: Configuration): Promise<KunExerciseList> {
        return this.api.getApiV1ConcernPractice52List(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1KunSubscribed50Status(param: DefaultApiGetApiV1KunSubscribed50StatusRequest, options?: Configuration): Promise<OptionDataBoolean> {
        return this.api.getApiV1KunSubscribed50Status(param.input,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1KunSubscribed61Status(param: DefaultApiGetApiV1KunSubscribed61StatusRequest, options?: Configuration): Promise<OptionDataBoolean> {
        return this.api.getApiV1KunSubscribed61Status(param.input,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1OrderKfcSearch(param: DefaultApiGetApiV1OrderKfcSearchRequest, options?: Configuration): Promise<NoSqlPagingListDataASearchStore> {
        return this.api.getApiV1OrderKfcSearch(param.lat, param.lon,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1OrderStarbuckIncoming(param: DefaultApiGetApiV1OrderStarbuckIncomingRequest, options?: Configuration): Promise<A1Return> {
        return this.api.getApiV1OrderStarbuckIncoming(param.timestamp, param.aopic, param.sign, param.fromPlatform,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1OrderStarbuckSearch(param: DefaultApiGetApiV1OrderStarbuckSearchRequest, options?: Configuration): Promise<OptionDataStarbuckStoreItem> {
        return this.api.getApiV1OrderStarbuckSearch(param.lat, param.lon,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1PinCard50List(param: DefaultApiGetApiV1PinCard50ListRequest, options?: Configuration): Promise<NoSqlPagingListDataKunCard> {
        return this.api.getApiV1PinCard50List(param.seriesId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1PinCard60List(param: DefaultApiGetApiV1PinCard60ListRequest, options?: Configuration): Promise<NoSqlPagingListDataKunCard> {
        return this.api.getApiV1PinCard60List(param.seriesId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1Search50Horse(param: DefaultApiGetApiV1Search50HorseRequest, options?: Configuration): Promise<OptionDataListListCommonSearchContent> {
        return this.api.getApiV1Search50Horse(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianBenefitCardGet(param: DefaultApiGetApiV1ShandianBenefitCardGetRequest, options?: Configuration): Promise<OptionDataKunBenefitCard> {
        return this.api.getApiV1ShandianBenefitCardGet(param.authorization, param.card,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianBranchList(param: DefaultApiGetApiV1ShandianBranchListRequest, options?: Configuration): Promise<NoSqlPagingListDataShandianBrandItem> {
        return this.api.getApiV1ShandianBranchList(param.authorization, param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianItemOrderListByStatus(param: DefaultApiGetApiV1ShandianItemOrderListByStatusRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkShandianOrder> {
        return this.api.getApiV1ShandianItemOrderListByStatus(param.authorization, param.status,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianItemOrderTextCreate(param: DefaultApiGetApiV1ShandianItemOrderTextCreateRequest, options?: Configuration): Promise<OptionDataReqCreateShandianOrder> {
        return this.api.getApiV1ShandianItemOrderTextCreate(param.authorization, param.input,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianItemOrderUser(param: DefaultApiGetApiV1ShandianItemOrderUserRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkShandianOrder> {
        return this.api.getApiV1ShandianItemOrderUser(param.authorization, param.status,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianItemStarbuckList(param: DefaultApiGetApiV1ShandianItemStarbuckListRequest, options?: Configuration): Promise<NoSqlPagingListDataShandianItem> {
        return this.api.getApiV1ShandianItemStarbuckList(param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianItemTaobaoListByStatus(param: DefaultApiGetApiV1ShandianItemTaobaoListByStatusRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkStarbuckPaidOrder> {
        return this.api.getApiV1ShandianItemTaobaoListByStatus(param.authorization, param.status,  options).toPromise();
    }

    /**
     * get kun order for shandian
     * @param param the request object
     */
    public getApiV1ShandianShandianOrderGet(param: DefaultApiGetApiV1ShandianShandianOrderGetRequest, options?: Configuration): Promise<OptionDataShandianOrder> {
        return this.api.getApiV1ShandianShandianOrderGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianShandianTaobaoGet(param: DefaultApiGetApiV1ShandianShandianTaobaoGetRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.getApiV1ShandianShandianTaobaoGet(param.reqStarbuckGroupon, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianTaobaoOrderGet(param: DefaultApiGetApiV1ShandianTaobaoOrderGetRequest, options?: Configuration): Promise<OptionDataStarbuckPaidOrder> {
        return this.api.getApiV1ShandianTaobaoOrderGet(param.uuid,  options).toPromise();
    }

    /**
     * get kun order & task for shandian
     * @param param the request object
     */
    public getApiV1ShandianTaobaoOrderTaskGet(param: DefaultApiGetApiV1ShandianTaobaoOrderTaskGetRequest, options?: Configuration): Promise<OptionDataKunShandianOrderTask> {
        return this.api.getApiV1ShandianTaobaoOrderTaskGet(param.uuid,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1TapirHorseMembers(param: DefaultApiGetApiV1TapirHorseMembersRequest, options?: Configuration): Promise<NoSqlPagingListDataKunUser> {
        return this.api.getApiV1TapirHorseMembers(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ToolsIpGet(param: DefaultApiGetApiV1ToolsIpGetRequest, options?: Configuration): Promise<OptionDataIpInfoItem> {
        return this.api.getApiV1ToolsIpGet(param.ip,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1UserShandianMiniuserSessionGet(param: DefaultApiGetApiV1UserShandianMiniuserSessionGetRequest, options?: Configuration): Promise<OptionDataKunUser> {
        return this.api.getApiV1UserShandianMiniuserSessionGet(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1UserShandianOpenSessionGet(param: DefaultApiGetApiV1UserShandianOpenSessionGetRequest, options?: Configuration): Promise<OptionDataKunUser> {
        return this.api.getApiV1UserShandianOpenSessionGet(param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiAuthV1TapirFuwuhaoOpenLogin(param: DefaultApiPostApiAuthV1TapirFuwuhaoOpenLoginRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiAuthV1TapirFuwuhaoOpenLogin(param.code,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiTapirV1Chat50ChatMessagesHistory(param: DefaultApiPostApiTapirV1Chat50ChatMessagesHistoryRequest, options?: Configuration): Promise<NoSqlPagingListDataKunMessageReturn> {
        return this.api.postApiTapirV1Chat50ChatMessagesHistory(param.reqGetHistoryMessage, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiTapirV1Chat60ChatMessagesHistory(param: DefaultApiPostApiTapirV1Chat60ChatMessagesHistoryRequest, options?: Configuration): Promise<NoSqlPagingListDataKunMessageReturn> {
        return this.api.postApiTapirV1Chat60ChatMessagesHistory(param.reqGetHistoryMessage, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiTapirV1RtcChatRtcTokenGet(param: DefaultApiPostApiTapirV1RtcChatRtcTokenGetRequest, options?: Configuration): Promise<OptionDataString> {
        return this.api.postApiTapirV1RtcChatRtcTokenGet(param.getRtcToken, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1CardRead50Markread(param: DefaultApiPostApiV1CardRead50MarkreadRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1CardRead50Markread(param.reqMarkHorseRead, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Chat50ChatGroup(param: DefaultApiPostApiV1Chat50ChatGroupRequest, options?: Configuration): Promise<OptionDataUUID> {
        return this.api.postApiV1Chat50ChatGroup(param.reqStartChat, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Chat60ChatGroup(param: DefaultApiPostApiV1Chat60ChatGroupRequest, options?: Configuration): Promise<OptionDataUUID> {
        return this.api.postApiV1Chat60ChatGroup(param.reqStartChat, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Concern50Create(param: DefaultApiPostApiV1Concern50CreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1Concern50Create(param.reqCreateConcern, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Concern52Create(param: DefaultApiPostApiV1Concern52CreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1Concern52Create(param.reqCreateConcern, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Concern62Create(param: DefaultApiPostApiV1Concern62CreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1Concern62Create(param.reqCreateConcern, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1HorseSeriesPrice(param: DefaultApiPostApiV1HorseSeriesPriceRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1HorseSeriesPrice(param.reqUpdateSeriesPrice,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Order50PaymentList(param: DefaultApiPostApiV1Order50PaymentListRequest, options?: Configuration): Promise<ListPaymentHistory> {
        return this.api.postApiV1Order50PaymentList(param.reqUpdatePracticeAppraise, param.authorization, param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1OrderStarbuckGet(param: DefaultApiPostApiV1OrderStarbuckGetRequest, options?: Configuration): Promise<StarbuckStoreDetailADT> {
        return this.api.postApiV1OrderStarbuckGet(param.authorization, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1PinCard50Create(param: DefaultApiPostApiV1PinCard50CreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1PinCard50Create(param.reqCreateKunPinCard, param.hi,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1PinCard50Delete(param: DefaultApiPostApiV1PinCard50DeleteRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1PinCard50Delete(param.reqDeleteKunPinCard,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1PinCard60Create(param: DefaultApiPostApiV1PinCard60CreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1PinCard60Create(param.reqCreateKunPinCard, param.hi,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1PinCard60Delete(param: DefaultApiPostApiV1PinCard60DeleteRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1PinCard60Delete(param.reqDeleteKunPinCard,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianAnonymousItemOrderCreate(param: DefaultApiPostApiV1ShandianAnonymousItemOrderCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1ShandianAnonymousItemOrderCreate(param.reqCreateShandianOrder,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianAutoSignPaymentItemidCaigou(param: DefaultApiPostApiV1ShandianAutoSignPaymentItemidCaigouRequest, options?: Configuration): Promise<OptionDataString> {
        return this.api.postApiV1ShandianAutoSignPaymentItemidCaigou(param.aglosticCaigouItemSigned, param.itemId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianItemOrderCreate(param: DefaultApiPostApiV1ShandianItemOrderCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1ShandianItemOrderCreate(param.reqCreateShandianOrder, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianItemOrderDelivery(param: DefaultApiPostApiV1ShandianItemOrderDeliveryRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1ShandianItemOrderDelivery(param.reqAddDeliverMessage, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianShandianPaymentStart(param: DefaultApiPostApiV1ShandianShandianPaymentStartRequest, options?: Configuration): Promise<OptionDataWechatPaymentItem> {
        return this.api.postApiV1ShandianShandianPaymentStart(param.createPaymentHistory, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianShopPaymentCallback(param: DefaultApiPostApiV1ShandianShopPaymentCallbackRequest, options?: Configuration): Promise<string> {
        return this.api.postApiV1ShandianShopPaymentCallback(param.orderno, param.outorderno, param.userid, param.status, param.refundstatus, param.money, param.receipt, param.createTime, param.updateTime, param.timestamp, param.sign, param.refundmoney, param.refundreceipt,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianSimpleOrderGet(param: DefaultApiPostApiV1ShandianSimpleOrderGetRequest, options?: Configuration): Promise<NoSqlPagingListDataKunSimpleOrder> {
        return this.api.postApiV1ShandianSimpleOrderGet(param.authorization,  options).toPromise();
    }

    /**
     * 下单咖啡获取确认链接
     * @param param the request object
     */
    public postApiV1ShandianStarbuckOrderCaigouCoffee(param: DefaultApiPostApiV1ShandianStarbuckOrderCaigouCoffeeRequest, options?: Configuration): Promise<OptionDataString> {
        return this.api.postApiV1ShandianStarbuckOrderCaigouCoffee(param.aglosticCaigouItemSignedAndStarkbuckItem,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianTaobaoOrderCreate(param: DefaultApiPostApiV1ShandianTaobaoOrderCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1ShandianTaobaoOrderCreate(param.addStarbuckGrouponTicket,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianVipShopGoods(param: DefaultApiPostApiV1ShandianVipShopGoodsRequest = {}, options?: Configuration): Promise<NoSqlPagingListDataShopItemDescription> {
        return this.api.postApiV1ShandianVipShopGoods(param.group, param.name,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianVipShopGroups(param: DefaultApiPostApiV1ShandianVipShopGroupsRequest = {}, options?: Configuration): Promise<NoSqlPagingListDataVipShopGroupItem> {
        return this.api.postApiV1ShandianVipShopGroups( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianVipShopItemGoodid(param: DefaultApiPostApiV1ShandianVipShopItemGoodidRequest, options?: Configuration): Promise<OptionDataDetailRootInterface> {
        return this.api.postApiV1ShandianVipShopItemGoodid(param.goodid,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianVipShopOrderOrderid(param: DefaultApiPostApiV1ShandianVipShopOrderOrderidRequest, options?: Configuration): Promise<OptionDataKunSimpleOrder> {
        return this.api.postApiV1ShandianVipShopOrderOrderid(param.authorization, param.orderId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianXianyuPaymentItemidCaigou(param: DefaultApiPostApiV1ShandianXianyuPaymentItemidCaigouRequest, options?: Configuration): Promise<OptionDataString> {
        return this.api.postApiV1ShandianXianyuPaymentItemidCaigou(param.aglosticCaigouItem, param.itemId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirAdmin50SecurityCreate(param: DefaultApiPostApiV1TapirAdmin50SecurityCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirAdmin50SecurityCreate(param.reqMarkUserDanger, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirCardDio50OffsetCreate(param: DefaultApiPostApiV1TapirCardDio50OffsetCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirCardDio50OffsetCreate(param.reqUpdateAudioLog, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirCardDio50OffsetGet(param: DefaultApiPostApiV1TapirCardDio50OffsetGetRequest, options?: Configuration): Promise<OptionDataKunAudioReadLog> {
        return this.api.postApiV1TapirCardDio50OffsetGet(param.reqGetAudioLog, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirCardDio60OffsetCreate(param: DefaultApiPostApiV1TapirCardDio60OffsetCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirCardDio60OffsetCreate(param.reqUpdateAudioLog, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirCardDio60OffsetGet(param: DefaultApiPostApiV1TapirCardDio60OffsetGetRequest, options?: Configuration): Promise<OptionDataKunAudioReadLog> {
        return this.api.postApiV1TapirCardDio60OffsetGet(param.reqGetAudioLog, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirHorseCommentCreate(param: DefaultApiPostApiV1TapirHorseCommentCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirHorseCommentCreate(param.reqCreateCardComment1, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirHorseExerciseItem(param: DefaultApiPostApiV1TapirHorseExerciseItemRequest, options?: Configuration): Promise<OptionDataKunExercise> {
        return this.api.postApiV1TapirHorseExerciseItem(param.reqGetExerciseItem, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirHorsePraticeCommentCreate(param: DefaultApiPostApiV1TapirHorsePraticeCommentCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirHorsePraticeCommentCreate(param.reqCreatePracticeComment, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirHorseSeriesGetpubliclist(param: DefaultApiPostApiV1TapirHorseSeriesGetpubliclistRequest = {}, options?: Configuration): Promise<NoSqlPagingListHorseSeriesReturn> {
        return this.api.postApiV1TapirHorseSeriesGetpubliclist( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirHorseSeriesQuery(param: DefaultApiPostApiV1TapirHorseSeriesQueryRequest, options?: Configuration): Promise<NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn> {
        return this.api.postApiV1TapirHorseSeriesQuery(param.reqQuerySeriesHorse, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirMiniAppLogin(param: DefaultApiPostApiV1TapirMiniAppLoginRequest, options?: Configuration): Promise<OptionDataMiniAppLoginToken> {
        return this.api.postApiV1TapirMiniAppLogin(param.code,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirMiniAppUserinfoGet(param: DefaultApiPostApiV1TapirMiniAppUserinfoGetRequest, options?: Configuration): Promise<OptionDataRetMiniAppUserItem> {
        return this.api.postApiV1TapirMiniAppUserinfoGet(param.getUserInfo,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirPracticeAppriseCreate(param: DefaultApiPostApiV1TapirPracticeAppriseCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirPracticeAppriseCreate(param.reqUpdatePracticeAppraise, param.authorization,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Test(param: DefaultApiPostApiV1TestRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1Test(param.reqCreateShandianOrder,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1VipShopOrderStart(param: DefaultApiPostApiV1VipShopOrderStartRequest, options?: Configuration): Promise<OptionDataVipShopWechatPaymentItem> {
        return this.api.postApiV1VipShopOrderStart(param.reqStartVipOrder, param.authorization,  options).toPromise();
    }

}
