import path from "path";
import Cookies from "universal-cookie";
import {StaticRouter} from "react-router-dom";
import {matchPath} from "react-router";
import {ChunkExtractor} from "@loadable/server";
import {Helmet} from "react-helmet";
import chalk from "chalk";
import {renderToString} from "react-dom/server";
import {dehydrate, QueryClient} from "react-query";
import createCache from '@emotion/cache'
import {CacheProvider} from '@emotion/react';
import {Request, Response, NextFunction} from "express";
import createEmotionServer from '@emotion/server/create-instance'
import {CookiesProvider} from "react-cookie";
import renderHtml from "./renderHtml";
import {QueryContext, routes} from "../routes";
import {AsyncComponent} from "../tool";
import {QueryParameterComp} from "../client/QueryParameterComp";
import {ServerApp} from "../app/serve-entry";
import {I18nLanguageWrapper} from "../components/I18nLanguageWrapper";

const cache = createCache({
        key: 'css',
        stylisPlugins: []
    }
)


const {extractCritical} = createEmotionServer(cache)

export default async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const currentRoute = routes.find(route => matchPath(req.path, route)) as {
            component: AsyncComponent<any>,
            path: string,
            getInitialProps?: (context: QueryContext<unknown>) => Promise<unknown>,
        };

        const match = matchPath(req.path, {
            // You can share this string as a constant if you want
            path: currentRoute.path
        });
        const params = match?.params


        // const branch = matchRoutes(routes as any, req.path);
        const statsFile = path.resolve(process.cwd(), "public/live/loadable-stats.json");
        const extractor = new ChunkExtractor({statsFile});
        // eslint-disable-next-line react/jsx-no-useless-fragment
        const Comp = (<></>);

        const queryClient = new QueryClient()

        const dehydratedState = dehydrate(queryClient)

        const staticContext: Record<string, any> = {};
        const App = extractor.collectChunks(
            <StaticRouter location={req.path} context={staticContext}>
                <CookiesProvider cookies={(req as unknown as { universalCookies: Cookies }).universalCookies}>
                    <I18nLanguageWrapper>
                        <ServerApp>
                            <QueryParameterComp value={params as Record<string, string>}>
                                {Comp}
                            </QueryParameterComp>
                        </ServerApp>
                    </I18nLanguageWrapper>
                </CookiesProvider>
            </StaticRouter>
        );
        const element = (
            <CacheProvider value={cache}>
                {App}
            </CacheProvider>
        )
        const {html: htmlContent, css, ids} = extractCritical(renderToString(element))
        // see: https://github.com/nfl/react-helmet#server-usage
        const head = Helmet.renderStatic();

        // Check if the render result contains a redirect, if so we need to set
        // the specific status and redirect header and end the response
        if (staticContext.url) {
            res.status(301).setHeader("Location", staticContext.url);
            res.end();

            return;
        }
        // Check page status
        const status = staticContext.status === "404" ? 404 : 200;

        // Pass the route and initial state into html template
        const content = await renderHtml(dehydratedState, head, extractor, htmlContent, {}, css, ids)
        res
            .status(status)
            .send(content);
    } catch (error) {
        res.status(404).send("Not Found :(");
        console.error(chalk.red(`==> 😭  Rendering routes error: ${error}`));
    }

    next();
};

