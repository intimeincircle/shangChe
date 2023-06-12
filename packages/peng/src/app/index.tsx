import {css, Global} from "@emotion/react";
import {Toaster} from "react-hot-toast";
import {RouteConfig, renderRoutes} from "react-router-config";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {Helmet} from "react-helmet";
import {Suspense} from "react";
import {ModalsProvider} from "@mantine/modals"
import config from "../config";
import {chakraTheme} from "./theme";
import "focus-visible/dist/focus-visible"

interface Route {
    route: { routes: RouteConfig[] };
}

function RouteAppWapper({route}: Route): JSX.Element {
    return (
    <ChakraProvider theme={chakraTheme} resetCSS>
        <ColorModeScript initialColorMode={chakraTheme.config.initialColorMode}/>
        <Helmet {...config.APP} />
        <Toaster/>
        <Global
            styles={css`
              .mock-input {
                border: red;
              }
            `}
        />
        <Suspense fallback="...">
            <ModalsProvider>
                {renderRoutes(route.routes)}
            </ModalsProvider>
        </Suspense>
    </ChakraProvider>)
}

export default RouteAppWapper;
