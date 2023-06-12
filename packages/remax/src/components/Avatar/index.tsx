import * as React from 'react'
import {View, Image} from '@fower/remax'
import {FC} from "react";
import {composeAtom} from "@fower/core";

composeAtom('formInput', {
    bg: 'white',
    rounded: 65,
    shadowGigantic: true,
    shadow: 'lg',
})

export const Avatar: FC<{url: string}> = ({url}) => (
        // @ts-ignore
        <View formInput row w-130 h-130 alignItems='center' justifyContent='center'  alignContent="center" style={{
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12), 0 0 2px rgba(0,0,0,0.02)'
        }}>
            <Image w-110 h-110 rounded-55 src={url} />
        </View>
    )
