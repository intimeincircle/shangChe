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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

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
    authorization: string
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
    ip: string
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
    authorization: string
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianItemStarbuckList
     */
    query: string
}

export interface DefaultApiGetApiV1ShandianShandianOrderGetRequest {
    /**
     * 
     * @type number
     * @memberof DefaultApigetApiV1ShandianShandianOrderGet
     */
    id: number
}

export interface DefaultApiGetApiV1ShandianTaobaoOrderGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApigetApiV1ShandianTaobaoOrderGet
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

export interface DefaultApiPostApiTapirV1Chat50ChatMessagesHistoryRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiTapirV1Chat50ChatMessagesHistory
     */
    authorization: string
    /**
     * 
     * @type ReqGetHistoryMessage
     * @memberof DefaultApipostApiTapirV1Chat50ChatMessagesHistory
     */
    reqGetHistoryMessage: ReqGetHistoryMessage
}

export interface DefaultApiPostApiTapirV1Chat60ChatMessagesHistoryRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiTapirV1Chat60ChatMessagesHistory
     */
    authorization: string
    /**
     * 
     * @type ReqGetHistoryMessage
     * @memberof DefaultApipostApiTapirV1Chat60ChatMessagesHistory
     */
    reqGetHistoryMessage: ReqGetHistoryMessage
}

export interface DefaultApiPostApiTapirV1RtcChatRtcTokenGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiTapirV1RtcChatRtcTokenGet
     */
    authorization: string
    /**
     * 
     * @type GetRtcToken
     * @memberof DefaultApipostApiTapirV1RtcChatRtcTokenGet
     */
    getRtcToken: GetRtcToken
}

export interface DefaultApiPostApiV1CardRead50MarkreadRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1CardRead50Markread
     */
    authorization: string
    /**
     * 
     * @type ReqMarkHorseRead
     * @memberof DefaultApipostApiV1CardRead50Markread
     */
    reqMarkHorseRead: ReqMarkHorseRead
}

export interface DefaultApiPostApiV1Chat50ChatGroupRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Chat50ChatGroup
     */
    authorization: string
    /**
     * 
     * @type ReqStartChat
     * @memberof DefaultApipostApiV1Chat50ChatGroup
     */
    reqStartChat: ReqStartChat
}

export interface DefaultApiPostApiV1Chat60ChatGroupRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Chat60ChatGroup
     */
    authorization: string
    /**
     * 
     * @type ReqStartChat
     * @memberof DefaultApipostApiV1Chat60ChatGroup
     */
    reqStartChat: ReqStartChat
}

export interface DefaultApiPostApiV1Concern50CreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Concern50Create
     */
    authorization: string
    /**
     * 
     * @type ReqCreateConcern
     * @memberof DefaultApipostApiV1Concern50Create
     */
    reqCreateConcern: ReqCreateConcern
}

export interface DefaultApiPostApiV1Concern52CreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Concern52Create
     */
    authorization: string
    /**
     * 
     * @type ReqCreateConcern
     * @memberof DefaultApipostApiV1Concern52Create
     */
    reqCreateConcern: ReqCreateConcern
}

export interface DefaultApiPostApiV1Concern62CreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1Concern62Create
     */
    authorization: string
    /**
     * 
     * @type ReqCreateConcern
     * @memberof DefaultApipostApiV1Concern62Create
     */
    reqCreateConcern: ReqCreateConcern
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
    /**
     * 
     * @type ReqUpdatePracticeAppraise
     * @memberof DefaultApipostApiV1Order50PaymentList
     */
    reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise
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

export interface DefaultApiPostApiV1ShandianItemOrderCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianItemOrderCreate
     */
    authorization: string
    /**
     * 
     * @type ReqCreateShandianOrder
     * @memberof DefaultApipostApiV1ShandianItemOrderCreate
     */
    reqCreateShandianOrder: ReqCreateShandianOrder
}

export interface DefaultApiPostApiV1ShandianItemOrderDeliveryRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1ShandianItemOrderDelivery
     */
    authorization: string
    /**
     * 
     * @type ReqAddDeliverMessage
     * @memberof DefaultApipostApiV1ShandianItemOrderDelivery
     */
    reqAddDeliverMessage: ReqAddDeliverMessage
}

export interface DefaultApiPostApiV1ShandianTaobaoOrderCreateRequest {
    /**
     * 
     * @type AddStarbuckGrouponTicket
     * @memberof DefaultApipostApiV1ShandianTaobaoOrderCreate
     */
    addStarbuckGrouponTicket: AddStarbuckGrouponTicket
}

export interface DefaultApiPostApiV1TapirAdmin50SecurityCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirAdmin50SecurityCreate
     */
    authorization: string
    /**
     * 
     * @type ReqMarkUserDanger
     * @memberof DefaultApipostApiV1TapirAdmin50SecurityCreate
     */
    reqMarkUserDanger: ReqMarkUserDanger
}

export interface DefaultApiPostApiV1TapirCardDio50OffsetCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirCardDio50OffsetCreate
     */
    authorization: string
    /**
     * 
     * @type ReqUpdateAudioLog
     * @memberof DefaultApipostApiV1TapirCardDio50OffsetCreate
     */
    reqUpdateAudioLog: ReqUpdateAudioLog
}

export interface DefaultApiPostApiV1TapirCardDio50OffsetGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirCardDio50OffsetGet
     */
    authorization: string
    /**
     * 
     * @type ReqGetAudioLog
     * @memberof DefaultApipostApiV1TapirCardDio50OffsetGet
     */
    reqGetAudioLog: ReqGetAudioLog
}

export interface DefaultApiPostApiV1TapirCardDio60OffsetCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirCardDio60OffsetCreate
     */
    authorization: string
    /**
     * 
     * @type ReqUpdateAudioLog
     * @memberof DefaultApipostApiV1TapirCardDio60OffsetCreate
     */
    reqUpdateAudioLog: ReqUpdateAudioLog
}

export interface DefaultApiPostApiV1TapirCardDio60OffsetGetRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirCardDio60OffsetGet
     */
    authorization: string
    /**
     * 
     * @type ReqGetAudioLog
     * @memberof DefaultApipostApiV1TapirCardDio60OffsetGet
     */
    reqGetAudioLog: ReqGetAudioLog
}

export interface DefaultApiPostApiV1TapirHorseCommentCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirHorseCommentCreate
     */
    authorization: string
    /**
     * 
     * @type ReqCreateCardComment1
     * @memberof DefaultApipostApiV1TapirHorseCommentCreate
     */
    reqCreateCardComment1: ReqCreateCardComment1
}

export interface DefaultApiPostApiV1TapirHorseExerciseItemRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirHorseExerciseItem
     */
    authorization: string
    /**
     * 
     * @type ReqGetExerciseItem
     * @memberof DefaultApipostApiV1TapirHorseExerciseItem
     */
    reqGetExerciseItem: ReqGetExerciseItem
}

export interface DefaultApiPostApiV1TapirHorsePraticeCommentCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirHorsePraticeCommentCreate
     */
    authorization: string
    /**
     * 
     * @type ReqCreatePracticeComment
     * @memberof DefaultApipostApiV1TapirHorsePraticeCommentCreate
     */
    reqCreatePracticeComment: ReqCreatePracticeComment
}

export interface DefaultApiPostApiV1TapirHorseSeriesGetpubliclistRequest {
}

export interface DefaultApiPostApiV1TapirHorseSeriesQueryRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirHorseSeriesQuery
     */
    authorization: string
    /**
     * 
     * @type ReqQuerySeriesHorse
     * @memberof DefaultApipostApiV1TapirHorseSeriesQuery
     */
    reqQuerySeriesHorse: ReqQuerySeriesHorse
}

export interface DefaultApiPostApiV1TapirPracticeAppriseCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApipostApiV1TapirPracticeAppriseCreate
     */
    authorization: string
    /**
     * 
     * @type ReqUpdatePracticeAppraise
     * @memberof DefaultApipostApiV1TapirPracticeAppriseCreate
     */
    reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
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
    public getApiV1Chat50ChatGroupsUser(param: DefaultApiGetApiV1Chat50ChatGroupsUserRequest, options?: Configuration): Promise<NoSqlPagingListDataLqUser> {
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
    public getApiV1OrderStarbuckIncoming(param: DefaultApiGetApiV1OrderStarbuckIncomingRequest, options?: Configuration): Promise<A1Return> {
        return this.api.getApiV1OrderStarbuckIncoming(param.timestamp, param.aopic, param.sign, param.fromPlatform,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1OrderStarbuckSearch(param: DefaultApiGetApiV1OrderStarbuckSearchRequest, options?: Configuration): Promise<StarbuckStoreItem> {
        return this.api.getApiV1OrderStarbuckSearch(param.authorization, param.lat, param.lon,  options).toPromise();
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
        return this.api.getApiV1ShandianItemOrderTextCreate(param.authorization, param.ip, param.input,  options).toPromise();
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
        return this.api.getApiV1ShandianItemStarbuckList(param.authorization, param.query,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianShandianOrderGet(param: DefaultApiGetApiV1ShandianShandianOrderGetRequest, options?: Configuration): Promise<OptionDataShandianOrder> {
        return this.api.getApiV1ShandianShandianOrderGet(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1ShandianTaobaoOrderGet(param: DefaultApiGetApiV1ShandianTaobaoOrderGetRequest, options?: Configuration): Promise<OptionDataStarbuckPaidOrder> {
        return this.api.getApiV1ShandianTaobaoOrderGet(param.uuid,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiV1TapirHorseMembers(param: DefaultApiGetApiV1TapirHorseMembersRequest, options?: Configuration): Promise<NoSqlPagingListDataLqUser> {
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
    public postApiTapirV1Chat50ChatMessagesHistory(param: DefaultApiPostApiTapirV1Chat50ChatMessagesHistoryRequest, options?: Configuration): Promise<NoSqlPagingListDataKunMessageReturn> {
        return this.api.postApiTapirV1Chat50ChatMessagesHistory(param.authorization, param.reqGetHistoryMessage,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiTapirV1Chat60ChatMessagesHistory(param: DefaultApiPostApiTapirV1Chat60ChatMessagesHistoryRequest, options?: Configuration): Promise<NoSqlPagingListDataKunMessageReturn> {
        return this.api.postApiTapirV1Chat60ChatMessagesHistory(param.authorization, param.reqGetHistoryMessage,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiTapirV1RtcChatRtcTokenGet(param: DefaultApiPostApiTapirV1RtcChatRtcTokenGetRequest, options?: Configuration): Promise<OptionDataString> {
        return this.api.postApiTapirV1RtcChatRtcTokenGet(param.authorization, param.getRtcToken,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1CardRead50Markread(param: DefaultApiPostApiV1CardRead50MarkreadRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1CardRead50Markread(param.authorization, param.reqMarkHorseRead,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Chat50ChatGroup(param: DefaultApiPostApiV1Chat50ChatGroupRequest, options?: Configuration): Promise<OptionDataUUID> {
        return this.api.postApiV1Chat50ChatGroup(param.authorization, param.reqStartChat,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Chat60ChatGroup(param: DefaultApiPostApiV1Chat60ChatGroupRequest, options?: Configuration): Promise<OptionDataUUID> {
        return this.api.postApiV1Chat60ChatGroup(param.authorization, param.reqStartChat,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Concern50Create(param: DefaultApiPostApiV1Concern50CreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1Concern50Create(param.authorization, param.reqCreateConcern,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Concern52Create(param: DefaultApiPostApiV1Concern52CreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1Concern52Create(param.authorization, param.reqCreateConcern,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1Concern62Create(param: DefaultApiPostApiV1Concern62CreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1Concern62Create(param.authorization, param.reqCreateConcern,  options).toPromise();
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
        return this.api.postApiV1Order50PaymentList(param.authorization, param.query, param.reqUpdatePracticeAppraise,  options).toPromise();
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
    public postApiV1ShandianItemOrderCreate(param: DefaultApiPostApiV1ShandianItemOrderCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1ShandianItemOrderCreate(param.authorization, param.reqCreateShandianOrder,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1ShandianItemOrderDelivery(param: DefaultApiPostApiV1ShandianItemOrderDeliveryRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1ShandianItemOrderDelivery(param.authorization, param.reqAddDeliverMessage,  options).toPromise();
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
    public postApiV1TapirAdmin50SecurityCreate(param: DefaultApiPostApiV1TapirAdmin50SecurityCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirAdmin50SecurityCreate(param.authorization, param.reqMarkUserDanger,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirCardDio50OffsetCreate(param: DefaultApiPostApiV1TapirCardDio50OffsetCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirCardDio50OffsetCreate(param.authorization, param.reqUpdateAudioLog,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirCardDio50OffsetGet(param: DefaultApiPostApiV1TapirCardDio50OffsetGetRequest, options?: Configuration): Promise<OptionDataKunAudioReadLog> {
        return this.api.postApiV1TapirCardDio50OffsetGet(param.authorization, param.reqGetAudioLog,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirCardDio60OffsetCreate(param: DefaultApiPostApiV1TapirCardDio60OffsetCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirCardDio60OffsetCreate(param.authorization, param.reqUpdateAudioLog,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirCardDio60OffsetGet(param: DefaultApiPostApiV1TapirCardDio60OffsetGetRequest, options?: Configuration): Promise<OptionDataKunAudioReadLog> {
        return this.api.postApiV1TapirCardDio60OffsetGet(param.authorization, param.reqGetAudioLog,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirHorseCommentCreate(param: DefaultApiPostApiV1TapirHorseCommentCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirHorseCommentCreate(param.authorization, param.reqCreateCardComment1,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirHorseExerciseItem(param: DefaultApiPostApiV1TapirHorseExerciseItemRequest, options?: Configuration): Promise<OptionDataKunExercise> {
        return this.api.postApiV1TapirHorseExerciseItem(param.authorization, param.reqGetExerciseItem,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirHorsePraticeCommentCreate(param: DefaultApiPostApiV1TapirHorsePraticeCommentCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirHorsePraticeCommentCreate(param.authorization, param.reqCreatePracticeComment,  options).toPromise();
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
        return this.api.postApiV1TapirHorseSeriesQuery(param.authorization, param.reqQuerySeriesHorse,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public postApiV1TapirPracticeAppriseCreate(param: DefaultApiPostApiV1TapirPracticeAppriseCreateRequest, options?: Configuration): Promise<RetMsg> {
        return this.api.postApiV1TapirPracticeAppriseCreate(param.authorization, param.reqUpdatePracticeAppraise,  options).toPromise();
    }

}
