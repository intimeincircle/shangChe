/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Loadable from "@loadable/component";
import { Loading } from "../../components";

const Login = Loadable(/* #__LOADABLE__ */ () => import("./LoginPage"), {
    fallback: <Loading />,
});

// </ErrorBoundary>
// <ErrorBoundary>
 export default function getComponent(props) {
  return <Login {...props} />
};
