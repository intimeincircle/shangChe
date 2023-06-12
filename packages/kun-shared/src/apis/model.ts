
export interface ModelRetRecords<T> {
    records: T[];
    code: number;
    nextPageMark: string;
    msg: string;
    "pageSize": number;
    "total": number;
    "pageNum": number;
}

export interface ModelRetNoRecords<T> {
    nextPageMark: string;
    records: T[];
    code: number;
    msg: string;
    "pageSize": number;
    "total": number;
    "pageState": string;
}

export interface ModelRetRecord<T> {
    record: T;
    code: number;
    msg: string;
    "pageSize": number;
    "total": number;
    "pageState": string;
}

export interface ModelRetData<T> {
    data: T;
    code: number;
    msg: string;
    "pageSize": number;
    "total": number;
    "pageState": string;
}
