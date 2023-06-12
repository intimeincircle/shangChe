import * as React from "react";
import {FC} from "react";
import {Skeleton} from "react-vant/2x";
import { View } from "remax/one";

export const SkeletonComponent: FC<{repetitions ?: number, loading: boolean}> = ({loading,repetitions , children}) => (
        <View>
            {
                loading ? (
                    <Skeleton />
                ): (
                    children
                )
            }
        </View>
    )
