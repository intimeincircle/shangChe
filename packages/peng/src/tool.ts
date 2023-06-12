import { Context } from "kun-tools/built/common/req";
import {FunctionComponent} from "react";

export interface AsyncComponent<T> extends FunctionComponent<T> {
    getInitialProps?: (context: Context<T>) => Promise<T>
}