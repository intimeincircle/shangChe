/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import loadable from "@loadable/component";

import { Loading } from "../../components";

const Page = loadable(/* #__LOADABLE__ */  () => import("./PrivateChat"), {
    fallback: <Loading />,
});

export default function loadableComponent(props) {
  return  <Page {...props} />
};
