import * as React from 'react'
import {View, Input, Button} from '@fower/remax'

export const SearchInput = () => (
        <View h-70 bgWhite border ml-15 mr-15 pl-10 pr-10 rounded-15 row alignItems="center" css={{
        borderColor: 'green'
        }}>
            <Input css={{
                border: 'none',
                flex: '1 1 auto',
                outline: 'none',
            }}/>
            <Button w-50 h-50 bgGreen500 rounded-10 css={{
                backgroundColor: '#5468ff',
            }} white>SO</Button>
        </View>
    )
