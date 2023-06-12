
import "regenerator-runtime/runtime.js";

// import '@fower/remax'
import * as React from 'react'
import './app.css';
// import 'react-vant/lib/index.css';
import 'react-vant/2x/lib/styles';
// import 'react-vant/2x/bundle/index.min.css';
// import 'react-vant/dist/react-vant.css';
import {remConfig} from "@/platform";
import {QueryClientProvider} from "react-query";
import {QueryClient} from "react-query/core";
import {setConfig} from "@fower/core";
import  fundebug  from "fundebug-javascript"
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
    dsn: "https://6c683b58797a412195eed12e027ac7d1@o283255.ingest.sentry.io/6482511",
    // @ts-ignore
    integrations: [new BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});


// @ts-ignore
fundebug.apikey = "244baa5edb87ce771e38467113e1efb17cf3a35117789837d69d28b5227511bd";

setConfig(remConfig)

const client = new QueryClient()
const App: React.FC = props => <QueryClientProvider client={client}>{props.children}</QueryClientProvider>

export default App;
