/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Loadable from "@loadable/component";
import { Loading } from "../../../components";

const Login = Loadable(/* #__LOADABLE__ */ () => import("./KunItemPage"), {
    fallback: <Loading />,
});

export default function loadableComponent(props) {
  return   <Login {...props} />
};
