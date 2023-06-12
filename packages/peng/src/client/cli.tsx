/* eslint-disable import/no-import-module-exports */
import {MantineProvider} from "@mantine/core";
import {CookiesProvider} from "react-cookie";
import {ErrorBoundary} from "react-error-boundary";
import React, {FunctionComponent, useState} from "react";
import {hydrate, render} from "react-dom";
import toast from 'react-hot-toast'
import {Hydrate, QueryCache, QueryClient, QueryClientProvider, QueryErrorResetBoundary} from "react-query";
import {renderRoutes, RouteConfig} from "react-router-config";
import {loadableReady} from "@loadable/component";
import {BrowserRouter} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";
import {KunError, LoginAuthError} from "kun-tools/built/common/error";
import {checkIsBrowser, checkIsServer} from "kun-tools/built/common/check-is-server";
import {ConstantMSG, RetMsg} from "kun-shared/built/fetch";
import routes from "../routes";
import {chakraTheme, mThem} from "../app/theme";
import {QueryParameterComp} from "./QueryParameterComp";
import {ReactQueryKeys} from "../shared/context";
import {LoginModal} from "../components/LoginModal";
import {I18nLanguageWrapper} from "../components/I18nLanguageWrapper";
import {mantine} from "./chakraKey";
import {ServerError} from "../components/500";

// @ts-ignore
const dehydratedStateClient = checkIsBrowser() ? window?.__REACT_QUERY_STATE__ : undefined;



// @ts-ignore
global.objectToJSON = JSON.stringify

// @ts-ignore
global.objectFromJSONTyped =(v)  => {
    if(
        typeof v ==='string'
    ) {
        return v;
    } 
    return JSON.parse(v)
    
}

// @ts-ignore
const renderMethod = module.hot ? render : hydrate;

const QueryClientWrapper: FunctionComponent = ({children}) => {
    const [s, setS] = useState(false)

    const [queryClient, _] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                retry: 0,
                useErrorBoundary: true
            },
            mutations: {
                useErrorBoundary: false,
                onError: (error) => {
                    if (error && error instanceof LoginAuthError) {
                        setS(true)
                    } else if (error && error instanceof KunError) {
                        toast.error(`${error.message}`)
                    } else {
                        toast.error(`${error}`)
                    }
                }
            }
        },
        queryCache: new QueryCache({
            onError: (error, query) => {
                setS(true)
                // 🎉 only show error toasts if we already have data in the cache
                if (query.queryKey?.[0] === ReactQueryKeys.userSession) {
                    return;
                }
                toast.error(`${error}`)
            },
        }),
    }))

    return (
        <QueryClientProvider client={queryClient}>
            {
                s && (
                    <LoginModal onClose={() => {
                        setS(false)
                    }}/>
                )
            }
            {

                children
            }
        </QueryClientProvider>
    )
}


const renderApp = (Routes: RouteConfig[]) => renderMethod(
    <QueryErrorResetBoundary>
        {({reset}) => (
            <ErrorBoundary
                onReset={reset}
                onError={async (e) => {
                    const a = e as unknown as {status: number}
                    const d3 = e as unknown as Response
                    if(a.status === 400) {
                        try {
                            const r  = await  d3.json() as RetMsg
                            if(r.code === ConstantMSG.NUMBER_4000) {
                                window.location.href = `/live/login?redirect=${encodeURIComponent(window.location.pathname)}`
                            }
                        } catch (e3) {
                            console.log('eee', e3)
                        }
                    }
                    console.log('eeeeeeeeeeeeeeeeeeeee', e);
                    if (e instanceof LoginAuthError && !checkIsServer()) {
                        window.location.href = `/live/login?redirect=${encodeURIComponent(window.location.pathname)}`
                    }
                }}
                fallbackRender={({resetErrorBoundary}) => (
                    <ServerError onClick={resetErrorBoundary}/>
                )}
            >
                <ChakraProvider theme={chakraTheme} resetCSS>
                        <MantineProvider theme={mThem} emotionOptions={{key: mantine}}>
                            <BrowserRouter>
                                <CookiesProvider>
                                    <I18nLanguageWrapper>
                                        <QueryClientWrapper>
                                            <Hydrate state={dehydratedStateClient}>
                                                <QueryParameterComp>
                                                    {renderRoutes(Routes)}
                                                </QueryParameterComp>
                                            </Hydrate>
                                        </QueryClientWrapper>
                                    </I18nLanguageWrapper>
                                </CookiesProvider>
                            </BrowserRouter>
                        </MantineProvider>
                </ChakraProvider>
            </ErrorBoundary>

        )}
    </QueryErrorResetBoundary>,
    document.getElementById("react-view"))

// loadable-component setup
loadableReady(() => renderApp(routes as RouteConfig[]));

if (__DEV__) {
// @ts-ignore
    if (module.hot) {
        // @ts-ignore
        module.hot.accept();
    }
}