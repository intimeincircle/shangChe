/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Loadable from "@loadable/component";
import { Loading } from "../../components";

const Comp = Loadable(/* #__LOADABLE__ */ () => import("./IndexPage"), {
    fallback: <Loading />,
});

export default function loadableComponent(props) {
  return   <Comp {...props} />
};
