import {get} from "kun-tools/built/common/req";
import { ModelRetRecords} from "./model";

const QUANT_PREFIX= ""
export interface RetEvents{
    dateTime: number
    eventNameOpt: string
    descriptionOpt: string
}

export const getEventsByStock = async (code: string): Promise<ModelRetRecords<RetEvents>> => get(`${QUANT_PREFIX}/quant/events`, {
    code
});

export const getIndexEventsByStock = async (code: string): Promise<ModelRetRecords<RetEvents>> => get(`${QUANT_PREFIX}/quant/index/events`, {
    code
});

export interface StockChaodie {
    date: number;
    chaodie: number;
}

export interface StockHistory {
    date: number;
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    turnover: number;
    outstanding_share: number
}

export interface StockHistory {
    date: number;
    open: number;
    close: number;
    high: number;
    low: number;
    volume: number;
    turnover: number;
    outstanding_share: number
}


export interface PanmingData {
    date: number;
    value: number;
}

export const getHistoryByStock = async (code: string): Promise<ModelRetRecords<StockHistory>> => get(`${QUANT_PREFIX}/quant/history`, {
    code: `s_${code}`
});


export const getIndexHistoryByStock = async (code: string): Promise<ModelRetRecords<StockHistory>> => get(`${QUANT_PREFIX}/quant/index/history`, {
    code,
});

export const getPanmingByIndex = async (code: string): Promise<Array<PanmingData>> => get(`${QUANT_PREFIX}/quant/index/panming`, {
    code: code
});

export const getChaodieByStock = async (code: string): Promise<ModelRetRecords<StockChaodie>> => get(`${QUANT_PREFIX}/quant/chaodie`, {
    code: code
});

// http://161.97.129.243:8081/quant/history?code=s_002739
