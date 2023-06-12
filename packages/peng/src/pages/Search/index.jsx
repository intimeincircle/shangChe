/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import loadable from "@loadable/component";
import { Loading } from "../../components";

const Login = loadable(/* #__LOADABLE__ */ () => import("./Search"), {
    fallback: <Loading />,
});

export default function loadableComponent(props) {
  return <Login {...props} />
};
