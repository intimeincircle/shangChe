/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import loadable from "@loadable/component";

import { Loading } from "../../components";

const MyCreated = loadable(/* #__LOADABLE__ */  () => import("./Message"), {
    fallback: <Loading />,
});

export default function loadableComponent(props) {
  return   <MyCreated {...props} />
};
