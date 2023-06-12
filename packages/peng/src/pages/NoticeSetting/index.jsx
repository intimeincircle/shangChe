/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import loadable from "@loadable/component";

import { Loading } from "../../components";

const Comp = loadable(/* #__LOADABLE__ */ () => import("./NoticeSetting"), {
    fallback: <Loading />,
});

export default function loadableComponent(props) {
  return <Comp {...props} />
};
