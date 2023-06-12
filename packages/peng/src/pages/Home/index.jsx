/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */

import loadable from "@loadable/component";

import { Loading } from "../../components";

const Home = loadable(/* #__LOADABLE__ */ () => import("./Home"), {
  fallback: <Loading />,
});

export default function loadableComponent(props) {
  return  <Home {...props} />
};
