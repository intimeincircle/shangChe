import {FunctionComponent} from "react";
import { CurrentUserProvider } from "../state";


export const KunPage: FunctionComponent = ({children}) => (
        <CurrentUserProvider>
            {children}
        </CurrentUserProvider>
    )