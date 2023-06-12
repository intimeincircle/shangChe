// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { A1Return } from '../models/A1Return';
import { AddStarbuckGrouponTicket } from '../models/AddStarbuckGrouponTicket';
import { AglosticCaigouItem } from '../models/AglosticCaigouItem';
import { AglosticCaigouItemSigned } from '../models/AglosticCaigouItemSigned';
import { AglosticCaigouItemSignedAndStarkbuckItem } from '../models/AglosticCaigouItemSignedAndStarkbuckItem';
import { CreatePaymentHistory } from '../models/CreatePaymentHistory';
import { EnumeratumBenifitCardItem } from '../models/EnumeratumBenifitCardItem';
import { EnumeratumShandianOrderAllStatus } from '../models/EnumeratumShandianOrderAllStatus';
import { EnumeratumStarbuckOrderPaidStatus } from '../models/EnumeratumStarbuckOrderPaidStatus';
import { GetRtcToken } from '../models/GetRtcToken';
import { GetUserInfo } from '../models/GetUserInfo';
import { KunExerciseList } from '../models/KunExerciseList';
import { ListPaymentHistory } from '../models/ListPaymentHistory';
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
import { RetMsg } from '../models/RetMsg';
import { StarbuckStoreDetailADT } from '../models/StarbuckStoreDetailADT';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param url 
     */
    public async getApiAuthV1TapirFuwuhaoOpenSign(url: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'url' is not null or undefined
        if (url === null || url === undefined) {
            throw new RequiredError("DefaultApi", "getApiAuthV1TapirFuwuhaoOpenSign", "url");
        }


        // Path Params
        const localVarPath = '/api-auth/v1/tapir/fuwuhao/open/sign';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (url !== undefined) {
            requestContext.setQueryParam("url", ObjectSerializer.serialize(url, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiV1Chat50ChatGroups(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1Chat50ChatGroups", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/chat/50/chat/groups';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiV1Chat50ChatGroupsUser(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1Chat50ChatGroupsUser", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/chat/50/chat/groups-user';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiV1ConcernPractice52List(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ConcernPractice52List", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/concern/practice/52/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param input 
     */
    public async getApiV1KunSubscribed50Status(input: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1KunSubscribed50Status", "input");
        }


        // Path Params
        const localVarPath = '/api/v1/kun/subscribed/50/status';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (input !== undefined) {
            requestContext.setQueryParam("input", ObjectSerializer.serialize(input, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param input 
     */
    public async getApiV1KunSubscribed61Status(input: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1KunSubscribed61Status", "input");
        }


        // Path Params
        const localVarPath = '/api/v1/kun/subscribed/61/status';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (input !== undefined) {
            requestContext.setQueryParam("input", ObjectSerializer.serialize(input, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param lat 
     * @param lon 
     */
    public async getApiV1OrderKfcSearch(lat: string, lon: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'lat' is not null or undefined
        if (lat === null || lat === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1OrderKfcSearch", "lat");
        }


        // verify required parameter 'lon' is not null or undefined
        if (lon === null || lon === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1OrderKfcSearch", "lon");
        }


        // Path Params
        const localVarPath = '/api/v1/order/kfc/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lat !== undefined) {
            requestContext.setQueryParam("lat", ObjectSerializer.serialize(lat, "string", ""));
        }

        // Query Params
        if (lon !== undefined) {
            requestContext.setQueryParam("lon", ObjectSerializer.serialize(lon, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param timestamp 
     * @param aopic 
     * @param sign 
     * @param fromPlatform 
     */
    public async getApiV1OrderStarbuckIncoming(timestamp: string, aopic: string, sign: string, fromPlatform?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'timestamp' is not null or undefined
        if (timestamp === null || timestamp === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1OrderStarbuckIncoming", "timestamp");
        }


        // verify required parameter 'aopic' is not null or undefined
        if (aopic === null || aopic === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1OrderStarbuckIncoming", "aopic");
        }


        // verify required parameter 'sign' is not null or undefined
        if (sign === null || sign === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1OrderStarbuckIncoming", "sign");
        }



        // Path Params
        const localVarPath = '/api/v1/order/starbuck/incoming';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fromPlatform !== undefined) {
            requestContext.setQueryParam("fromPlatform", ObjectSerializer.serialize(fromPlatform, "string", ""));
        }

        // Query Params
        if (timestamp !== undefined) {
            requestContext.setQueryParam("timestamp", ObjectSerializer.serialize(timestamp, "string", ""));
        }

        // Query Params
        if (aopic !== undefined) {
            requestContext.setQueryParam("aopic", ObjectSerializer.serialize(aopic, "string", ""));
        }

        // Query Params
        if (sign !== undefined) {
            requestContext.setQueryParam("sign", ObjectSerializer.serialize(sign, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param lat 
     * @param lon 
     */
    public async getApiV1OrderStarbuckSearch(lat: string, lon: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'lat' is not null or undefined
        if (lat === null || lat === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1OrderStarbuckSearch", "lat");
        }


        // verify required parameter 'lon' is not null or undefined
        if (lon === null || lon === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1OrderStarbuckSearch", "lon");
        }


        // Path Params
        const localVarPath = '/api/v1/order/starbuck/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lat !== undefined) {
            requestContext.setQueryParam("lat", ObjectSerializer.serialize(lat, "string", ""));
        }

        // Query Params
        if (lon !== undefined) {
            requestContext.setQueryParam("lon", ObjectSerializer.serialize(lon, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param seriesId 
     */
    public async getApiV1PinCard50List(seriesId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'seriesId' is not null or undefined
        if (seriesId === null || seriesId === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1PinCard50List", "seriesId");
        }


        // Path Params
        const localVarPath = '/api/v1/pin-card/50/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (seriesId !== undefined) {
            requestContext.setQueryParam("seriesId", ObjectSerializer.serialize(seriesId, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param seriesId 
     */
    public async getApiV1PinCard60List(seriesId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'seriesId' is not null or undefined
        if (seriesId === null || seriesId === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1PinCard60List", "seriesId");
        }


        // Path Params
        const localVarPath = '/api/v1/pin-card/60/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (seriesId !== undefined) {
            requestContext.setQueryParam("seriesId", ObjectSerializer.serialize(seriesId, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param query 
     */
    public async getApiV1Search50Horse(query: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1Search50Horse", "query");
        }


        // Path Params
        const localVarPath = '/api/v1/search/50/horse';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param card 
     */
    public async getApiV1ShandianBenefitCardGet(authorization: string, card: EnumeratumBenifitCardItem, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianBenefitCardGet", "authorization");
        }


        // verify required parameter 'card' is not null or undefined
        if (card === null || card === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianBenefitCardGet", "card");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/benefit-card/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (card !== undefined) {
            requestContext.setQueryParam("card", ObjectSerializer.serialize(card, "EnumeratumBenifitCardItem", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param query 
     */
    public async getApiV1ShandianBranchList(authorization: string, query: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianBranchList", "authorization");
        }


        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianBranchList", "query");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/branch/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param status 
     */
    public async getApiV1ShandianItemOrderListByStatus(authorization: string, status?: EnumeratumShandianOrderAllStatus, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianItemOrderListByStatus", "authorization");
        }



        // Path Params
        const localVarPath = '/api/v1/shandian/item/order/list_by_status';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "EnumeratumShandianOrderAllStatus", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param input 
     */
    public async getApiV1ShandianItemOrderTextCreate(authorization: string, input: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianItemOrderTextCreate", "authorization");
        }


        // verify required parameter 'input' is not null or undefined
        if (input === null || input === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianItemOrderTextCreate", "input");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/item/order/text/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (input !== undefined) {
            requestContext.setQueryParam("input", ObjectSerializer.serialize(input, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param status 
     */
    public async getApiV1ShandianItemOrderUser(authorization: string, status?: EnumeratumShandianOrderAllStatus, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianItemOrderUser", "authorization");
        }



        // Path Params
        const localVarPath = '/api/v1/shandian/item/order/user';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "EnumeratumShandianOrderAllStatus", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param query 
     */
    public async getApiV1ShandianItemStarbuckList(query: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianItemStarbuckList", "query");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/item/starbuck/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param status 
     */
    public async getApiV1ShandianItemTaobaoListByStatus(authorization: string, status?: EnumeratumStarbuckOrderPaidStatus, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianItemTaobaoListByStatus", "authorization");
        }



        // Path Params
        const localVarPath = '/api/v1/shandian/item/taobao/list_by_status';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (status !== undefined) {
            requestContext.setQueryParam("status", ObjectSerializer.serialize(status, "EnumeratumStarbuckOrderPaidStatus", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get kun order for shandian
     * @param id 
     */
    public async getApiV1ShandianShandianOrderGet(id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianShandianOrderGet", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/shandian/order/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "number", "int64"));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqStarbuckGroupon 
     * @param authorization 
     */
    public async getApiV1ShandianShandianTaobaoGet(reqStarbuckGroupon: ReqStarbuckGroupon, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqStarbuckGroupon' is not null or undefined
        if (reqStarbuckGroupon === null || reqStarbuckGroupon === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianShandianTaobaoGet", "reqStarbuckGroupon");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianShandianTaobaoGet", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/shandian/taobao/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqStarbuckGroupon, "ReqStarbuckGroupon", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param uuid 
     */
    public async getApiV1ShandianTaobaoOrderGet(uuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianTaobaoOrderGet", "uuid");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/taobao/order/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get kun order & task for shandian
     * @param uuid 
     */
    public async getApiV1ShandianTaobaoOrderTaskGet(uuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'uuid' is not null or undefined
        if (uuid === null || uuid === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ShandianTaobaoOrderTaskGet", "uuid");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/taobao/order-task/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (uuid !== undefined) {
            requestContext.setQueryParam("uuid", ObjectSerializer.serialize(uuid, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiV1TapirHorseMembers(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1TapirHorseMembers", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/horse/members';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param ip 
     */
    public async getApiV1ToolsIpGet(ip: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'ip' is not null or undefined
        if (ip === null || ip === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1ToolsIpGet", "ip");
        }


        // Path Params
        const localVarPath = '/api/v1/tools/ip/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (ip !== undefined) {
            requestContext.setQueryParam("ip", ObjectSerializer.serialize(ip, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiV1UserShandianMiniuserSessionGet(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1UserShandianMiniuserSessionGet", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/user/shandian-miniUser/session/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async getApiV1UserShandianOpenSessionGet(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "getApiV1UserShandianOpenSessionGet", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/user/shandian-open/session/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param code 
     */
    public async postApiAuthV1TapirFuwuhaoOpenLogin(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("DefaultApi", "postApiAuthV1TapirFuwuhaoOpenLogin", "code");
        }


        // Path Params
        const localVarPath = '/api-auth/v1/tapir/fuwuhao/open/login';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqGetHistoryMessage 
     * @param authorization 
     */
    public async postApiTapirV1Chat50ChatMessagesHistory(reqGetHistoryMessage: ReqGetHistoryMessage, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqGetHistoryMessage' is not null or undefined
        if (reqGetHistoryMessage === null || reqGetHistoryMessage === undefined) {
            throw new RequiredError("DefaultApi", "postApiTapirV1Chat50ChatMessagesHistory", "reqGetHistoryMessage");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiTapirV1Chat50ChatMessagesHistory", "authorization");
        }


        // Path Params
        const localVarPath = '/api/tapir/v1/chat/50/chat/messages/history';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqGetHistoryMessage, "ReqGetHistoryMessage", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqGetHistoryMessage 
     * @param authorization 
     */
    public async postApiTapirV1Chat60ChatMessagesHistory(reqGetHistoryMessage: ReqGetHistoryMessage, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqGetHistoryMessage' is not null or undefined
        if (reqGetHistoryMessage === null || reqGetHistoryMessage === undefined) {
            throw new RequiredError("DefaultApi", "postApiTapirV1Chat60ChatMessagesHistory", "reqGetHistoryMessage");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiTapirV1Chat60ChatMessagesHistory", "authorization");
        }


        // Path Params
        const localVarPath = '/api/tapir/v1/chat/60/chat/messages/history';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqGetHistoryMessage, "ReqGetHistoryMessage", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param getRtcToken 
     * @param authorization 
     */
    public async postApiTapirV1RtcChatRtcTokenGet(getRtcToken: GetRtcToken, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getRtcToken' is not null or undefined
        if (getRtcToken === null || getRtcToken === undefined) {
            throw new RequiredError("DefaultApi", "postApiTapirV1RtcChatRtcTokenGet", "getRtcToken");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiTapirV1RtcChatRtcTokenGet", "authorization");
        }


        // Path Params
        const localVarPath = '/api/tapir/v1/rtc/chat/rtc/token/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getRtcToken, "GetRtcToken", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqMarkHorseRead 
     * @param authorization 
     */
    public async postApiV1CardRead50Markread(reqMarkHorseRead: ReqMarkHorseRead, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqMarkHorseRead' is not null or undefined
        if (reqMarkHorseRead === null || reqMarkHorseRead === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1CardRead50Markread", "reqMarkHorseRead");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1CardRead50Markread", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/card/read/50/markRead';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqMarkHorseRead, "ReqMarkHorseRead", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqStartChat 
     * @param authorization 
     */
    public async postApiV1Chat50ChatGroup(reqStartChat: ReqStartChat, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqStartChat' is not null or undefined
        if (reqStartChat === null || reqStartChat === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Chat50ChatGroup", "reqStartChat");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Chat50ChatGroup", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/chat/50/chat/group';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqStartChat, "ReqStartChat", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqStartChat 
     * @param authorization 
     */
    public async postApiV1Chat60ChatGroup(reqStartChat: ReqStartChat, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqStartChat' is not null or undefined
        if (reqStartChat === null || reqStartChat === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Chat60ChatGroup", "reqStartChat");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Chat60ChatGroup", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/chat/60/chat/group';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqStartChat, "ReqStartChat", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqCreateConcern 
     * @param authorization 
     */
    public async postApiV1Concern50Create(reqCreateConcern: ReqCreateConcern, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateConcern' is not null or undefined
        if (reqCreateConcern === null || reqCreateConcern === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Concern50Create", "reqCreateConcern");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Concern50Create", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/concern/50/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateConcern, "ReqCreateConcern", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqCreateConcern 
     * @param authorization 
     */
    public async postApiV1Concern52Create(reqCreateConcern: ReqCreateConcern, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateConcern' is not null or undefined
        if (reqCreateConcern === null || reqCreateConcern === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Concern52Create", "reqCreateConcern");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Concern52Create", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/concern/52/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateConcern, "ReqCreateConcern", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqCreateConcern 
     * @param authorization 
     */
    public async postApiV1Concern62Create(reqCreateConcern: ReqCreateConcern, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateConcern' is not null or undefined
        if (reqCreateConcern === null || reqCreateConcern === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Concern62Create", "reqCreateConcern");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Concern62Create", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/concern/62/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateConcern, "ReqCreateConcern", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqUpdateSeriesPrice 
     */
    public async postApiV1HorseSeriesPrice(reqUpdateSeriesPrice: ReqUpdateSeriesPrice, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqUpdateSeriesPrice' is not null or undefined
        if (reqUpdateSeriesPrice === null || reqUpdateSeriesPrice === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1HorseSeriesPrice", "reqUpdateSeriesPrice");
        }


        // Path Params
        const localVarPath = '/api/v1/horse/series/price';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqUpdateSeriesPrice, "ReqUpdateSeriesPrice", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqUpdatePracticeAppraise 
     * @param authorization 
     * @param query 
     */
    public async postApiV1Order50PaymentList(reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise, authorization: string, query: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqUpdatePracticeAppraise' is not null or undefined
        if (reqUpdatePracticeAppraise === null || reqUpdatePracticeAppraise === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Order50PaymentList", "reqUpdatePracticeAppraise");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Order50PaymentList", "authorization");
        }


        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Order50PaymentList", "query");
        }


        // Path Params
        const localVarPath = '/api/v1/order/50/payment/list';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (query !== undefined) {
            requestContext.setQueryParam("query", ObjectSerializer.serialize(query, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqUpdatePracticeAppraise, "ReqUpdatePracticeAppraise", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param id 
     */
    public async postApiV1OrderStarbuckGet(authorization: string, id: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1OrderStarbuckGet", "authorization");
        }


        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1OrderStarbuckGet", "id");
        }


        // Path Params
        const localVarPath = '/api/v1/order/starbuck/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (id !== undefined) {
            requestContext.setQueryParam("id", ObjectSerializer.serialize(id, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqCreateKunPinCard 
     * @param hi 
     */
    public async postApiV1PinCard50Create(reqCreateKunPinCard: ReqCreateKunPinCard, hi?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateKunPinCard' is not null or undefined
        if (reqCreateKunPinCard === null || reqCreateKunPinCard === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1PinCard50Create", "reqCreateKunPinCard");
        }



        // Path Params
        const localVarPath = '/api/v1/pin-card/50/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (hi !== undefined) {
            requestContext.setQueryParam("hi", ObjectSerializer.serialize(hi, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateKunPinCard, "ReqCreateKunPinCard", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqDeleteKunPinCard 
     */
    public async postApiV1PinCard50Delete(reqDeleteKunPinCard: ReqDeleteKunPinCard, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqDeleteKunPinCard' is not null or undefined
        if (reqDeleteKunPinCard === null || reqDeleteKunPinCard === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1PinCard50Delete", "reqDeleteKunPinCard");
        }


        // Path Params
        const localVarPath = '/api/v1/pin-card/50/delete';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqDeleteKunPinCard, "ReqDeleteKunPinCard", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqCreateKunPinCard 
     * @param hi 
     */
    public async postApiV1PinCard60Create(reqCreateKunPinCard: ReqCreateKunPinCard, hi?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateKunPinCard' is not null or undefined
        if (reqCreateKunPinCard === null || reqCreateKunPinCard === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1PinCard60Create", "reqCreateKunPinCard");
        }



        // Path Params
        const localVarPath = '/api/v1/pin-card/60/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (hi !== undefined) {
            requestContext.setQueryParam("hi", ObjectSerializer.serialize(hi, "string", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateKunPinCard, "ReqCreateKunPinCard", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqDeleteKunPinCard 
     */
    public async postApiV1PinCard60Delete(reqDeleteKunPinCard: ReqDeleteKunPinCard, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqDeleteKunPinCard' is not null or undefined
        if (reqDeleteKunPinCard === null || reqDeleteKunPinCard === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1PinCard60Delete", "reqDeleteKunPinCard");
        }


        // Path Params
        const localVarPath = '/api/v1/pin-card/60/delete';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqDeleteKunPinCard, "ReqDeleteKunPinCard", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqCreateShandianOrder 
     */
    public async postApiV1ShandianAnonymousItemOrderCreate(reqCreateShandianOrder: ReqCreateShandianOrder, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateShandianOrder' is not null or undefined
        if (reqCreateShandianOrder === null || reqCreateShandianOrder === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianAnonymousItemOrderCreate", "reqCreateShandianOrder");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/anonymous/item/order/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateShandianOrder, "ReqCreateShandianOrder", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param aglosticCaigouItemSigned 
     * @param itemId 
     */
    public async postApiV1ShandianAutoSignPaymentItemidCaigou(aglosticCaigouItemSigned: AglosticCaigouItemSigned, itemId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'aglosticCaigouItemSigned' is not null or undefined
        if (aglosticCaigouItemSigned === null || aglosticCaigouItemSigned === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianAutoSignPaymentItemidCaigou", "aglosticCaigouItemSigned");
        }


        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianAutoSignPaymentItemidCaigou", "itemId");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/auto-sign/payment/{itemId}/caigou'
            .replace('{' + 'itemId' + '}', encodeURIComponent(String(itemId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(aglosticCaigouItemSigned, "AglosticCaigouItemSigned", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqCreateShandianOrder 
     * @param authorization 
     */
    public async postApiV1ShandianItemOrderCreate(reqCreateShandianOrder: ReqCreateShandianOrder, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateShandianOrder' is not null or undefined
        if (reqCreateShandianOrder === null || reqCreateShandianOrder === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianItemOrderCreate", "reqCreateShandianOrder");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianItemOrderCreate", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/item/order/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateShandianOrder, "ReqCreateShandianOrder", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqAddDeliverMessage 
     * @param authorization 
     */
    public async postApiV1ShandianItemOrderDelivery(reqAddDeliverMessage: ReqAddDeliverMessage, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqAddDeliverMessage' is not null or undefined
        if (reqAddDeliverMessage === null || reqAddDeliverMessage === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianItemOrderDelivery", "reqAddDeliverMessage");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianItemOrderDelivery", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/item/order/delivery';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqAddDeliverMessage, "ReqAddDeliverMessage", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param createPaymentHistory 
     * @param authorization 
     */
    public async postApiV1ShandianShandianPaymentStart(createPaymentHistory: CreatePaymentHistory, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'createPaymentHistory' is not null or undefined
        if (createPaymentHistory === null || createPaymentHistory === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShandianPaymentStart", "createPaymentHistory");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShandianPaymentStart", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/shandian/payment/start';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createPaymentHistory, "CreatePaymentHistory", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async postApiV1ShandianShopPaymentCallback(orderno: string, outorderno: string, userid: string, status: string, refundstatus: string, money: string, receipt: string, createTime: string, updateTime: string, timestamp: string, sign: string, refundmoney?: string, refundreceipt?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderno' is not null or undefined
        if (orderno === null || orderno === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "orderno");
        }


        // verify required parameter 'outorderno' is not null or undefined
        if (outorderno === null || outorderno === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "outorderno");
        }


        // verify required parameter 'userid' is not null or undefined
        if (userid === null || userid === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "userid");
        }


        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "status");
        }


        // verify required parameter 'refundstatus' is not null or undefined
        if (refundstatus === null || refundstatus === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "refundstatus");
        }


        // verify required parameter 'money' is not null or undefined
        if (money === null || money === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "money");
        }


        // verify required parameter 'receipt' is not null or undefined
        if (receipt === null || receipt === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "receipt");
        }


        // verify required parameter 'createTime' is not null or undefined
        if (createTime === null || createTime === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "createTime");
        }


        // verify required parameter 'updateTime' is not null or undefined
        if (updateTime === null || updateTime === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "updateTime");
        }


        // verify required parameter 'timestamp' is not null or undefined
        if (timestamp === null || timestamp === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "timestamp");
        }


        // verify required parameter 'sign' is not null or undefined
        if (sign === null || sign === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianShopPaymentCallback", "sign");
        }




        // Path Params
        const localVarPath = '/api/v1/shandian/shop/payment/callback';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'application/x-www-form-urlencoded',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (orderno !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('orderno', orderno as any);
        }
        if (outorderno !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('outorderno', outorderno as any);
        }
        if (userid !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('userid', userid as any);
        }
        if (status !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('status', status as any);
        }
        if (refundstatus !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('refundstatus', refundstatus as any);
        }
        if (money !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('money', money as any);
        }
        if (refundmoney !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('refundmoney', refundmoney as any);
        }
        if (receipt !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('receipt', receipt as any);
        }
        if (refundreceipt !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('refundreceipt', refundreceipt as any);
        }
        if (createTime !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('create_time', createTime as any);
        }
        if (updateTime !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('update_time', updateTime as any);
        }
        if (timestamp !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('timestamp', timestamp as any);
        }
        if (sign !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('sign', sign as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "application/x-www-form-urlencoded"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     */
    public async postApiV1ShandianSimpleOrderGet(authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianSimpleOrderGet", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/simple-order/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * 下单咖啡获取确认链接
     * @param aglosticCaigouItemSignedAndStarkbuckItem 
     */
    public async postApiV1ShandianStarbuckOrderCaigouCoffee(aglosticCaigouItemSignedAndStarkbuckItem: AglosticCaigouItemSignedAndStarkbuckItem, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'aglosticCaigouItemSignedAndStarkbuckItem' is not null or undefined
        if (aglosticCaigouItemSignedAndStarkbuckItem === null || aglosticCaigouItemSignedAndStarkbuckItem === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianStarbuckOrderCaigouCoffee", "aglosticCaigouItemSignedAndStarkbuckItem");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/starbuck/order/caigou/coffee';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(aglosticCaigouItemSignedAndStarkbuckItem, "AglosticCaigouItemSignedAndStarkbuckItem", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param addStarbuckGrouponTicket 
     */
    public async postApiV1ShandianTaobaoOrderCreate(addStarbuckGrouponTicket: AddStarbuckGrouponTicket, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'addStarbuckGrouponTicket' is not null or undefined
        if (addStarbuckGrouponTicket === null || addStarbuckGrouponTicket === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianTaobaoOrderCreate", "addStarbuckGrouponTicket");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/taobao/order/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(addStarbuckGrouponTicket, "AddStarbuckGrouponTicket", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param group 
     * @param name 
     */
    public async postApiV1ShandianVipShopGoods(group?: number, name?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/api/v1/shandian/vip-shop/goods';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (group !== undefined) {
            requestContext.setQueryParam("group", ObjectSerializer.serialize(group, "number", "int64"));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async postApiV1ShandianVipShopGroups(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/v1/shandian/vip-shop/groups';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param goodid 
     */
    public async postApiV1ShandianVipShopItemGoodid(goodid: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'goodid' is not null or undefined
        if (goodid === null || goodid === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianVipShopItemGoodid", "goodid");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/vip-shop/item/{goodid}'
            .replace('{' + 'goodid' + '}', encodeURIComponent(String(goodid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param authorization 
     * @param orderId 
     */
    public async postApiV1ShandianVipShopOrderOrderid(authorization: string, orderId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianVipShopOrderOrderid", "authorization");
        }


        // verify required parameter 'orderId' is not null or undefined
        if (orderId === null || orderId === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianVipShopOrderOrderid", "orderId");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/vip-shop/order/{orderId}'
            .replace('{' + 'orderId' + '}', encodeURIComponent(String(orderId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param aglosticCaigouItem 
     * @param itemId 
     */
    public async postApiV1ShandianXianyuPaymentItemidCaigou(aglosticCaigouItem: AglosticCaigouItem, itemId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'aglosticCaigouItem' is not null or undefined
        if (aglosticCaigouItem === null || aglosticCaigouItem === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianXianyuPaymentItemidCaigou", "aglosticCaigouItem");
        }


        // verify required parameter 'itemId' is not null or undefined
        if (itemId === null || itemId === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1ShandianXianyuPaymentItemidCaigou", "itemId");
        }


        // Path Params
        const localVarPath = '/api/v1/shandian/xianyu/payment/{itemId}/caigou'
            .replace('{' + 'itemId' + '}', encodeURIComponent(String(itemId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(aglosticCaigouItem, "AglosticCaigouItem", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqMarkUserDanger 
     * @param authorization 
     */
    public async postApiV1TapirAdmin50SecurityCreate(reqMarkUserDanger: ReqMarkUserDanger, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqMarkUserDanger' is not null or undefined
        if (reqMarkUserDanger === null || reqMarkUserDanger === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirAdmin50SecurityCreate", "reqMarkUserDanger");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirAdmin50SecurityCreate", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/admin/50/security/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqMarkUserDanger, "ReqMarkUserDanger", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqUpdateAudioLog 
     * @param authorization 
     */
    public async postApiV1TapirCardDio50OffsetCreate(reqUpdateAudioLog: ReqUpdateAudioLog, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqUpdateAudioLog' is not null or undefined
        if (reqUpdateAudioLog === null || reqUpdateAudioLog === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirCardDio50OffsetCreate", "reqUpdateAudioLog");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirCardDio50OffsetCreate", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/card/dio/50/offset/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqUpdateAudioLog, "ReqUpdateAudioLog", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqGetAudioLog 
     * @param authorization 
     */
    public async postApiV1TapirCardDio50OffsetGet(reqGetAudioLog: ReqGetAudioLog, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqGetAudioLog' is not null or undefined
        if (reqGetAudioLog === null || reqGetAudioLog === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirCardDio50OffsetGet", "reqGetAudioLog");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirCardDio50OffsetGet", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/card/dio/50/offset/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqGetAudioLog, "ReqGetAudioLog", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqUpdateAudioLog 
     * @param authorization 
     */
    public async postApiV1TapirCardDio60OffsetCreate(reqUpdateAudioLog: ReqUpdateAudioLog, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqUpdateAudioLog' is not null or undefined
        if (reqUpdateAudioLog === null || reqUpdateAudioLog === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirCardDio60OffsetCreate", "reqUpdateAudioLog");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirCardDio60OffsetCreate", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/card/dio/60/offset/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqUpdateAudioLog, "ReqUpdateAudioLog", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqGetAudioLog 
     * @param authorization 
     */
    public async postApiV1TapirCardDio60OffsetGet(reqGetAudioLog: ReqGetAudioLog, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqGetAudioLog' is not null or undefined
        if (reqGetAudioLog === null || reqGetAudioLog === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirCardDio60OffsetGet", "reqGetAudioLog");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirCardDio60OffsetGet", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/card/dio/60/offset/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqGetAudioLog, "ReqGetAudioLog", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqCreateCardComment1 
     * @param authorization 
     */
    public async postApiV1TapirHorseCommentCreate(reqCreateCardComment1: ReqCreateCardComment1, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateCardComment1' is not null or undefined
        if (reqCreateCardComment1 === null || reqCreateCardComment1 === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirHorseCommentCreate", "reqCreateCardComment1");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirHorseCommentCreate", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/horse/comment/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateCardComment1, "ReqCreateCardComment1", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqGetExerciseItem 
     * @param authorization 
     */
    public async postApiV1TapirHorseExerciseItem(reqGetExerciseItem: ReqGetExerciseItem, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqGetExerciseItem' is not null or undefined
        if (reqGetExerciseItem === null || reqGetExerciseItem === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirHorseExerciseItem", "reqGetExerciseItem");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirHorseExerciseItem", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/horse/exercise/item';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqGetExerciseItem, "ReqGetExerciseItem", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqCreatePracticeComment 
     * @param authorization 
     */
    public async postApiV1TapirHorsePraticeCommentCreate(reqCreatePracticeComment: ReqCreatePracticeComment, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreatePracticeComment' is not null or undefined
        if (reqCreatePracticeComment === null || reqCreatePracticeComment === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirHorsePraticeCommentCreate", "reqCreatePracticeComment");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirHorsePraticeCommentCreate", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/horse/pratice/comment/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreatePracticeComment, "ReqCreatePracticeComment", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async postApiV1TapirHorseSeriesGetpubliclist(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api/v1/tapir/horse/series/getPublicList';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqQuerySeriesHorse 
     * @param authorization 
     */
    public async postApiV1TapirHorseSeriesQuery(reqQuerySeriesHorse: ReqQuerySeriesHorse, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqQuerySeriesHorse' is not null or undefined
        if (reqQuerySeriesHorse === null || reqQuerySeriesHorse === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirHorseSeriesQuery", "reqQuerySeriesHorse");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirHorseSeriesQuery", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/horse/series/query';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqQuerySeriesHorse, "ReqQuerySeriesHorse", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param code 
     */
    public async postApiV1TapirMiniAppLogin(code: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirMiniAppLogin", "code");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/mini-app/login';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (code !== undefined) {
            requestContext.setQueryParam("code", ObjectSerializer.serialize(code, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param getUserInfo 
     */
    public async postApiV1TapirMiniAppUserinfoGet(getUserInfo: GetUserInfo, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'getUserInfo' is not null or undefined
        if (getUserInfo === null || getUserInfo === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirMiniAppUserinfoGet", "getUserInfo");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/mini-app/userInfo/get';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getUserInfo, "GetUserInfo", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqUpdatePracticeAppraise 
     * @param authorization 
     */
    public async postApiV1TapirPracticeAppriseCreate(reqUpdatePracticeAppraise: ReqUpdatePracticeAppraise, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqUpdatePracticeAppraise' is not null or undefined
        if (reqUpdatePracticeAppraise === null || reqUpdatePracticeAppraise === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirPracticeAppriseCreate", "reqUpdatePracticeAppraise");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1TapirPracticeAppriseCreate", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/tapir/practice/apprise/create';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqUpdatePracticeAppraise, "ReqUpdatePracticeAppraise", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqCreateShandianOrder 
     */
    public async postApiV1Test(reqCreateShandianOrder: ReqCreateShandianOrder, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqCreateShandianOrder' is not null or undefined
        if (reqCreateShandianOrder === null || reqCreateShandianOrder === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1Test", "reqCreateShandianOrder");
        }


        // Path Params
        const localVarPath = '/api/v1/test';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqCreateShandianOrder, "ReqCreateShandianOrder", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param reqStartVipOrder 
     * @param authorization 
     */
    public async postApiV1VipShopOrderStart(reqStartVipOrder: ReqStartVipOrder, authorization: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'reqStartVipOrder' is not null or undefined
        if (reqStartVipOrder === null || reqStartVipOrder === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1VipShopOrderStart", "reqStartVipOrder");
        }


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new RequiredError("DefaultApi", "postApiV1VipShopOrderStart", "authorization");
        }


        // Path Params
        const localVarPath = '/api/v1/vip/shop/order/start';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(reqStartVipOrder, "ReqStartVipOrder", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiAuthV1TapirFuwuhaoOpenSign
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiAuthV1TapirFuwuhaoOpenSign(response: ResponseContext): Promise<OptionDataRetccessTokenApp > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataRetccessTokenApp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataRetccessTokenApp", ""
            ) as OptionDataRetccessTokenApp;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter url", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataRetccessTokenApp = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataRetccessTokenApp", ""
            ) as OptionDataRetccessTokenApp;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1Chat50ChatGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1Chat50ChatGroups(response: ResponseContext): Promise<NoSqlPagingListDataABGroup > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataABGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataABGroup", ""
            ) as NoSqlPagingListDataABGroup;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataABGroup = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataABGroup", ""
            ) as NoSqlPagingListDataABGroup;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1Chat50ChatGroupsUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1Chat50ChatGroupsUser(response: ResponseContext): Promise<NoSqlPagingListDataKunUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataKunUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunUser", ""
            ) as NoSqlPagingListDataKunUser;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataKunUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunUser", ""
            ) as NoSqlPagingListDataKunUser;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ConcernPractice52List
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ConcernPractice52List(response: ResponseContext): Promise<KunExerciseList > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: KunExerciseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KunExerciseList", ""
            ) as KunExerciseList;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: KunExerciseList = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "KunExerciseList", ""
            ) as KunExerciseList;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1KunSubscribed50Status
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1KunSubscribed50Status(response: ResponseContext): Promise<OptionDataBoolean > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataBoolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataBoolean", ""
            ) as OptionDataBoolean;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter input", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataBoolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataBoolean", ""
            ) as OptionDataBoolean;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1KunSubscribed61Status
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1KunSubscribed61Status(response: ResponseContext): Promise<OptionDataBoolean > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataBoolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataBoolean", ""
            ) as OptionDataBoolean;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter input", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataBoolean = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataBoolean", ""
            ) as OptionDataBoolean;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1OrderKfcSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1OrderKfcSearch(response: ResponseContext): Promise<NoSqlPagingListDataASearchStore > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataASearchStore = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataASearchStore", ""
            ) as NoSqlPagingListDataASearchStore;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter lat, Invalid value for: query parameter lon", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataASearchStore = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataASearchStore", ""
            ) as NoSqlPagingListDataASearchStore;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1OrderStarbuckIncoming
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1OrderStarbuckIncoming(response: ResponseContext): Promise<A1Return > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: A1Return = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "A1Return", ""
            ) as A1Return;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter fromPlatform, Invalid value for: query parameter timestamp, Invalid value for: query parameter aopic, Invalid value for: query parameter sign, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: A1Return = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "A1Return", ""
            ) as A1Return;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1OrderStarbuckSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1OrderStarbuckSearch(response: ResponseContext): Promise<OptionDataStarbuckStoreItem > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataStarbuckStoreItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataStarbuckStoreItem", ""
            ) as OptionDataStarbuckStoreItem;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter lat, Invalid value for: query parameter lon", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataStarbuckStoreItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataStarbuckStoreItem", ""
            ) as OptionDataStarbuckStoreItem;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1PinCard50List
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1PinCard50List(response: ResponseContext): Promise<NoSqlPagingListDataKunCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataKunCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunCard", ""
            ) as NoSqlPagingListDataKunCard;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter seriesId", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataKunCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunCard", ""
            ) as NoSqlPagingListDataKunCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1PinCard60List
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1PinCard60List(response: ResponseContext): Promise<NoSqlPagingListDataKunCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataKunCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunCard", ""
            ) as NoSqlPagingListDataKunCard;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter seriesId", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataKunCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunCard", ""
            ) as NoSqlPagingListDataKunCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1Search50Horse
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1Search50Horse(response: ResponseContext): Promise<OptionDataListListCommonSearchContent > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataListListCommonSearchContent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataListListCommonSearchContent", ""
            ) as OptionDataListListCommonSearchContent;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter query", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataListListCommonSearchContent = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataListListCommonSearchContent", ""
            ) as OptionDataListListCommonSearchContent;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianBenefitCardGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianBenefitCardGet(response: ResponseContext): Promise<OptionDataKunBenefitCard > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataKunBenefitCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunBenefitCard", ""
            ) as OptionDataKunBenefitCard;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: query parameter card", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataKunBenefitCard = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunBenefitCard", ""
            ) as OptionDataKunBenefitCard;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianBranchList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianBranchList(response: ResponseContext): Promise<NoSqlPagingListDataShandianBrandItem > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataShandianBrandItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataShandianBrandItem", ""
            ) as NoSqlPagingListDataShandianBrandItem;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: query parameter query", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataShandianBrandItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataShandianBrandItem", ""
            ) as NoSqlPagingListDataShandianBrandItem;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianItemOrderListByStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianItemOrderListByStatus(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkShandianOrder > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkShandianOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkShandianOrder", ""
            ) as NoSqlPagingListDataPageMarkShandianOrder;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: query parameter status", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataPageMarkShandianOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkShandianOrder", ""
            ) as NoSqlPagingListDataPageMarkShandianOrder;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianItemOrderTextCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianItemOrderTextCreate(response: ResponseContext): Promise<OptionDataReqCreateShandianOrder > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataReqCreateShandianOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataReqCreateShandianOrder", ""
            ) as OptionDataReqCreateShandianOrder;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: query parameter input", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataReqCreateShandianOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataReqCreateShandianOrder", ""
            ) as OptionDataReqCreateShandianOrder;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianItemOrderUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianItemOrderUser(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkShandianOrder > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkShandianOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkShandianOrder", ""
            ) as NoSqlPagingListDataPageMarkShandianOrder;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: query parameter status", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataPageMarkShandianOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkShandianOrder", ""
            ) as NoSqlPagingListDataPageMarkShandianOrder;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianItemStarbuckList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianItemStarbuckList(response: ResponseContext): Promise<NoSqlPagingListDataShandianItem > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataShandianItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataShandianItem", ""
            ) as NoSqlPagingListDataShandianItem;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter query", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataShandianItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataShandianItem", ""
            ) as NoSqlPagingListDataShandianItem;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianItemTaobaoListByStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianItemTaobaoListByStatus(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkStarbuckPaidOrder > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkStarbuckPaidOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkStarbuckPaidOrder", ""
            ) as NoSqlPagingListDataPageMarkStarbuckPaidOrder;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: query parameter status", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataPageMarkStarbuckPaidOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkStarbuckPaidOrder", ""
            ) as NoSqlPagingListDataPageMarkStarbuckPaidOrder;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianShandianOrderGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianShandianOrderGet(response: ResponseContext): Promise<OptionDataShandianOrder > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataShandianOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataShandianOrder", ""
            ) as OptionDataShandianOrder;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter id", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataShandianOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataShandianOrder", ""
            ) as OptionDataShandianOrder;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianShandianTaobaoGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianShandianTaobaoGet(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianTaobaoOrderGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianTaobaoOrderGet(response: ResponseContext): Promise<OptionDataStarbuckPaidOrder > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataStarbuckPaidOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataStarbuckPaidOrder", ""
            ) as OptionDataStarbuckPaidOrder;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter uuid", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataStarbuckPaidOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataStarbuckPaidOrder", ""
            ) as OptionDataStarbuckPaidOrder;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ShandianTaobaoOrderTaskGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ShandianTaobaoOrderTaskGet(response: ResponseContext): Promise<OptionDataKunShandianOrderTask > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataKunShandianOrderTask = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunShandianOrderTask", ""
            ) as OptionDataKunShandianOrderTask;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter uuid", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataKunShandianOrderTask = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunShandianOrderTask", ""
            ) as OptionDataKunShandianOrderTask;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1TapirHorseMembers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1TapirHorseMembers(response: ResponseContext): Promise<NoSqlPagingListDataKunUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataKunUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunUser", ""
            ) as NoSqlPagingListDataKunUser;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataKunUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunUser", ""
            ) as NoSqlPagingListDataKunUser;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1ToolsIpGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1ToolsIpGet(response: ResponseContext): Promise<OptionDataIpInfoItem > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataIpInfoItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataIpInfoItem", ""
            ) as OptionDataIpInfoItem;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter ip", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataIpInfoItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataIpInfoItem", ""
            ) as OptionDataIpInfoItem;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1UserShandianMiniuserSessionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1UserShandianMiniuserSessionGet(response: ResponseContext): Promise<OptionDataKunUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataKunUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunUser", ""
            ) as OptionDataKunUser;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataKunUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunUser", ""
            ) as OptionDataKunUser;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiV1UserShandianOpenSessionGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiV1UserShandianOpenSessionGet(response: ResponseContext): Promise<OptionDataKunUser > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataKunUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunUser", ""
            ) as OptionDataKunUser;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataKunUser = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunUser", ""
            ) as OptionDataKunUser;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiAuthV1TapirFuwuhaoOpenLogin
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiAuthV1TapirFuwuhaoOpenLogin(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter code", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiTapirV1Chat50ChatMessagesHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiTapirV1Chat50ChatMessagesHistory(response: ResponseContext): Promise<NoSqlPagingListDataKunMessageReturn > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataKunMessageReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunMessageReturn", ""
            ) as NoSqlPagingListDataKunMessageReturn;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataKunMessageReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunMessageReturn", ""
            ) as NoSqlPagingListDataKunMessageReturn;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiTapirV1Chat60ChatMessagesHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiTapirV1Chat60ChatMessagesHistory(response: ResponseContext): Promise<NoSqlPagingListDataKunMessageReturn > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataKunMessageReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunMessageReturn", ""
            ) as NoSqlPagingListDataKunMessageReturn;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataKunMessageReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunMessageReturn", ""
            ) as NoSqlPagingListDataKunMessageReturn;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiTapirV1RtcChatRtcTokenGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiTapirV1RtcChatRtcTokenGet(response: ResponseContext): Promise<OptionDataString > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataString = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataString", ""
            ) as OptionDataString;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataString = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataString", ""
            ) as OptionDataString;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1CardRead50Markread
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1CardRead50Markread(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1Chat50ChatGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1Chat50ChatGroup(response: ResponseContext): Promise<OptionDataUUID > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataUUID = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataUUID", ""
            ) as OptionDataUUID;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataUUID = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataUUID", ""
            ) as OptionDataUUID;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1Chat60ChatGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1Chat60ChatGroup(response: ResponseContext): Promise<OptionDataUUID > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataUUID = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataUUID", ""
            ) as OptionDataUUID;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataUUID = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataUUID", ""
            ) as OptionDataUUID;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1Concern50Create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1Concern50Create(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1Concern52Create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1Concern52Create(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1Concern62Create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1Concern62Create(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1HorseSeriesPrice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1HorseSeriesPrice(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1Order50PaymentList
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1Order50PaymentList(response: ResponseContext): Promise<ListPaymentHistory > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ListPaymentHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPaymentHistory", ""
            ) as ListPaymentHistory;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: query parameter query, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ListPaymentHistory = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ListPaymentHistory", ""
            ) as ListPaymentHistory;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1OrderStarbuckGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1OrderStarbuckGet(response: ResponseContext): Promise<StarbuckStoreDetailADT > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StarbuckStoreDetailADT = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StarbuckStoreDetailADT", ""
            ) as StarbuckStoreDetailADT;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: query parameter id", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StarbuckStoreDetailADT = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StarbuckStoreDetailADT", ""
            ) as StarbuckStoreDetailADT;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1PinCard50Create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1PinCard50Create(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter hi, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1PinCard50Delete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1PinCard50Delete(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1PinCard60Create
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1PinCard60Create(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter hi, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1PinCard60Delete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1PinCard60Delete(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianAnonymousItemOrderCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianAnonymousItemOrderCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianAutoSignPaymentItemidCaigou
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianAutoSignPaymentItemidCaigou(response: ResponseContext): Promise<OptionDataString > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataString = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataString", ""
            ) as OptionDataString;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataString = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataString", ""
            ) as OptionDataString;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianItemOrderCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianItemOrderCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianItemOrderDelivery
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianItemOrderDelivery(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianShandianPaymentStart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianShandianPaymentStart(response: ResponseContext): Promise<OptionDataWechatPaymentItem > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataWechatPaymentItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataWechatPaymentItem", ""
            ) as OptionDataWechatPaymentItem;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataWechatPaymentItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataWechatPaymentItem", ""
            ) as OptionDataWechatPaymentItem;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianShopPaymentCallback
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianShopPaymentCallback(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianSimpleOrderGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianSimpleOrderGet(response: ResponseContext): Promise<NoSqlPagingListDataKunSimpleOrder > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataKunSimpleOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunSimpleOrder", ""
            ) as NoSqlPagingListDataKunSimpleOrder;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataKunSimpleOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataKunSimpleOrder", ""
            ) as NoSqlPagingListDataKunSimpleOrder;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianStarbuckOrderCaigouCoffee
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianStarbuckOrderCaigouCoffee(response: ResponseContext): Promise<OptionDataString > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataString = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataString", ""
            ) as OptionDataString;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataString = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataString", ""
            ) as OptionDataString;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianTaobaoOrderCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianTaobaoOrderCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianVipShopGoods
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianVipShopGoods(response: ResponseContext): Promise<NoSqlPagingListDataShopItemDescription > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataShopItemDescription = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataShopItemDescription", ""
            ) as NoSqlPagingListDataShopItemDescription;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter group, Invalid value for: query parameter name", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataShopItemDescription = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataShopItemDescription", ""
            ) as NoSqlPagingListDataShopItemDescription;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianVipShopGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianVipShopGroups(response: ResponseContext): Promise<NoSqlPagingListDataVipShopGroupItem > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataVipShopGroupItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataVipShopGroupItem", ""
            ) as NoSqlPagingListDataVipShopGroupItem;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataVipShopGroupItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataVipShopGroupItem", ""
            ) as NoSqlPagingListDataVipShopGroupItem;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianVipShopItemGoodid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianVipShopItemGoodid(response: ResponseContext): Promise<OptionDataDetailRootInterface > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataDetailRootInterface = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataDetailRootInterface", ""
            ) as OptionDataDetailRootInterface;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: path parameter goodid", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataDetailRootInterface = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataDetailRootInterface", ""
            ) as OptionDataDetailRootInterface;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianVipShopOrderOrderid
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianVipShopOrderOrderid(response: ResponseContext): Promise<OptionDataKunSimpleOrder > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataKunSimpleOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunSimpleOrder", ""
            ) as OptionDataKunSimpleOrder;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataKunSimpleOrder = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunSimpleOrder", ""
            ) as OptionDataKunSimpleOrder;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1ShandianXianyuPaymentItemidCaigou
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1ShandianXianyuPaymentItemidCaigou(response: ResponseContext): Promise<OptionDataString > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataString = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataString", ""
            ) as OptionDataString;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataString = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataString", ""
            ) as OptionDataString;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirAdmin50SecurityCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirAdmin50SecurityCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirCardDio50OffsetCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirCardDio50OffsetCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirCardDio50OffsetGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirCardDio50OffsetGet(response: ResponseContext): Promise<OptionDataKunAudioReadLog > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataKunAudioReadLog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunAudioReadLog", ""
            ) as OptionDataKunAudioReadLog;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataKunAudioReadLog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunAudioReadLog", ""
            ) as OptionDataKunAudioReadLog;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirCardDio60OffsetCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirCardDio60OffsetCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirCardDio60OffsetGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirCardDio60OffsetGet(response: ResponseContext): Promise<OptionDataKunAudioReadLog > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataKunAudioReadLog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunAudioReadLog", ""
            ) as OptionDataKunAudioReadLog;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataKunAudioReadLog = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunAudioReadLog", ""
            ) as OptionDataKunAudioReadLog;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirHorseCommentCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirHorseCommentCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirHorseExerciseItem
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirHorseExerciseItem(response: ResponseContext): Promise<OptionDataKunExercise > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataKunExercise = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunExercise", ""
            ) as OptionDataKunExercise;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataKunExercise = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataKunExercise", ""
            ) as OptionDataKunExercise;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirHorsePraticeCommentCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirHorsePraticeCommentCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirHorseSeriesGetpubliclist
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirHorseSeriesGetpubliclist(response: ResponseContext): Promise<NoSqlPagingListHorseSeriesReturn > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListHorseSeriesReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListHorseSeriesReturn", ""
            ) as NoSqlPagingListHorseSeriesReturn;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListHorseSeriesReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListHorseSeriesReturn", ""
            ) as NoSqlPagingListHorseSeriesReturn;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirHorseSeriesQuery
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirHorseSeriesQuery(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn", ""
            ) as NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn", ""
            ) as NoSqlPagingListDataPageMarkDateTimeHorseSeriesReturn;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirMiniAppLogin
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirMiniAppLogin(response: ResponseContext): Promise<OptionDataMiniAppLoginToken > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataMiniAppLoginToken = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataMiniAppLoginToken", ""
            ) as OptionDataMiniAppLoginToken;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: query parameter code", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataMiniAppLoginToken = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataMiniAppLoginToken", ""
            ) as OptionDataMiniAppLoginToken;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirMiniAppUserinfoGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirMiniAppUserinfoGet(response: ResponseContext): Promise<OptionDataRetMiniAppUserItem > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataRetMiniAppUserItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataRetMiniAppUserItem", ""
            ) as OptionDataRetMiniAppUserItem;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataRetMiniAppUserItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataRetMiniAppUserItem", ""
            ) as OptionDataRetMiniAppUserItem;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1TapirPracticeAppriseCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1TapirPracticeAppriseCreate(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1Test
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1Test(response: ResponseContext): Promise<RetMsg > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to postApiV1VipShopOrderStart
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async postApiV1VipShopOrderStart(response: ResponseContext): Promise<OptionDataVipShopWechatPaymentItem > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: OptionDataVipShopWechatPaymentItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataVipShopWechatPaymentItem", ""
            ) as OptionDataVipShopWechatPaymentItem;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(400, "Invalid value for: header Authorization, Invalid value for: body", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(0, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: OptionDataVipShopWechatPaymentItem = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "OptionDataVipShopWechatPaymentItem", ""
            ) as OptionDataVipShopWechatPaymentItem;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
