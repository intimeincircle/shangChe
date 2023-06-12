/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import loadable from "@loadable/component";
import { Loading } from "../../components";

const Comp = loadable(/* #__LOADABLE__ */ () => import("./Chat"), {
    fallback: <Loading />,
});

export default function loadableComponent() {
  return <Comp />
};
