
import loadable from "@loadable/component";
import { Loading } from "../components";
import {AsyncComponent} from "../tool";

type A<T> = Promise<{ readonly default: AsyncComponent<T> }>;

export function getComponent<T>(component: A<T>): React.FunctionComponent<T> {

    const Component = loadable(/* #__LOADABLE__ */ () => component , {
        fallback: <Loading />,
    }) as any;

    return  (props) => (
            <Component {...props} />
    ) as any;

}