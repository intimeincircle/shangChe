
import '@fower/remax'
import * as React from 'react'
import {setConfig, Theme} from '@fower/core'

import { Button } from 'react-vant/2x';
import './app.css';
// import 'react-vant/dist/react-vant.css';
// import 'react-vant/lib/index.css';
// import 'react-vant/es/styles';
import {remConfig} from "@/platform";
import {QueryClient} from "react-query/core";
import {QueryClientProvider} from "react-query";

setConfig({
    unit: 'rem',
    inline: true,
    // theme,
    transformUnit: (value: string | number) => {
        console.log('va5', value)
        return `${  Number(value) /50  }rem`;
    },
})


setConfig(remConfig)

const client = new QueryClient()

const App: React.FC = props => <QueryClientProvider client={client}>{props.children}</QueryClientProvider>

export default App;
