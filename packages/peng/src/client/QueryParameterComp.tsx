import {FunctionComponent} from "react";
import {QueryParameterContext} from "../app/params";

let isSever = false
try {
    isSever = typeof window === 'undefined'
}catch (e) {
    isSever = true
}

export const QueryParameterComp: FunctionComponent<{ value?: Record<string, string> }> = ({children, value}) => (
        <QueryParameterContext.Provider value={isSever ? value as Record<string, string> : undefined}>
            {children}
        </QueryParameterContext.Provider>
    )