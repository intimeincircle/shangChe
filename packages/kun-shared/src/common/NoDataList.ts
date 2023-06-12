

export interface RdDataList<T> {
    records: T[],
}

export interface NoDataList<T> {
    records: T[],
    pageState ?: string;
}

export interface RetItem {
    code:  number,
    msg ?: string
}