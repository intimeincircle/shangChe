import * as React from "react";
import {FC} from "react";
import {Loading} from "react-vant/2x";
import {View} from "@remax/one";

export const LoadingComponent: FC<{loading: boolean}> = ({loading, children}) => (
    <View>
            {
                    loading ? (
                        <Loading color="#FF7777"/>
                    ) : (
                        children
                    )
            }
    </View>)