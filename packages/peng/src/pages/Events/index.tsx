import {FC} from "react";
import loadable from "@loadable/component";

import { Loading } from "../../components";

const Comp = loadable(() => import(/* webpackChunkName: "Event" */ "./Events"), {
    fallback: <Loading />,
});

 const A:FC = () => (
        <Comp />
);

export default A