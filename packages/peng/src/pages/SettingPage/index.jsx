/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import loadable from "@loadable/component";

import { Loading } from "../../components";

const Comp = loadable(/* #__loadable__ */ () => import("./SettingPage"), {
    fallback: <Loading />,
});

export default function loadableComponent(props) {
  return  <Comp {...props} />
};
