/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

/*
 * Due to this known issue: https://github.com/smooth-code/loadable-components/issues/173
 * Use .js extension for code-splitting file
 */
import React from "react";
import loadable from "@loadable/component";
import { Loading} from "../../../components";

const LoadableContent = loadable(/* #__LOADABLE__ */ () => import("./CreateSeries"), {
    fallback: <Loading />,
});

export default function loadableComponent(props) {
  return <LoadableContent {...props} />
};
