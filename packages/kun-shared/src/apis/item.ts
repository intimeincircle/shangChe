export interface RetItem<T> {

    code: number;
    msg: string;
    record?: T;
}

export interface RetItemString<T> {
    code: string;
    msg: string;
    record?: T;
}

