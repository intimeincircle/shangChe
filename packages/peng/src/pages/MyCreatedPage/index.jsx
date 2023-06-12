/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import loadable from "@loadable/component";

import { Loading } from "../../components";

const MyCreated = loadable(/* #__LOADABLE__ */  () => import("./MyCreated"), {
    fallback: <Loading />,
});

export default function loadableComponent(props) {
  return <MyCreated {...props} />
};
