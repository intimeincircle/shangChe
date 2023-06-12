import React, { useContext } from "react";
import {useParams} from "react-router";

export const QueryParameterContext = React.createContext<Record<string, string> | undefined>({});


let isSever = false
try {
    isSever = typeof window === 'undefined'
}catch (e) {
    isSever = true
}

export const useQueryParams = () => {
    const b = useParams()
    const a = useContext(QueryParameterContext)
    return isSever ? a :  b;
}

export function useQueryParamType<T>(): T {
    const b = useParams()
    const a = useContext(QueryParameterContext)
    return (isSever ? a :  b) as T;
}
