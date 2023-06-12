import path from "path";
import {minify} from "html-minifier-terser";
import {dehydrate, QueryClient, QueryClientProvider} from "react-query";
import {matchPath} from "react-router";
import {StaticRouter} from "react-router-dom";
import {ChunkExtractor} from "@loadable/server";
import {Helmet} from "react-helmet";
import chalk from "chalk";
import { injectHTML } from 'node-inject-html';
import {renderToStaticMarkup, renderToString} from "react-dom/server";
import {NextFunction, Request, Response} from "express";
import {CookiesProvider } from "react-cookie";
import Cookies from "universal-cookie";
import {createStylesServer, ServerStyles} from '@mantine/ssr';
import {QueryContext, routes} from "../routes";
import {AsyncComponent} from "../tool";
import {ServerApp} from "../app/serve-entry";
import {QueryParameterComp} from "../client/QueryParameterComp";
import {I18nLanguageWrapper} from "../components/I18nLanguageWrapper";
import {mantinCache} from "./cache1";
import { ServerStyleContext } from "./ServerStyleContext";
import {HtmlRender} from "./HtmlRender";

const Sentry=require("@sentry/node")

export default async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {

    const transaction = Sentry.startTransaction({
        op: "test",
        name: "server",
    });
    try {
        const statsFile = path.resolve(process.cwd(), "public/live/loadable-stats.json");
        const extractor = new ChunkExtractor({statsFile});
        const currentRoute = routes.find(route => matchPath(req.path, route)) as {
            component: AsyncComponent<any>,
            path?: string;
            getInitialProps?: (context: QueryContext<unknown>) => Promise<unknown>,
        };

        const queryClient = new QueryClient()

        const match = matchPath(req.path, {
            // You can share this string as a constant if you want
            path: currentRoute.path
        });
        const params = match?.params
        let props: unknown = {};
        if (currentRoute.getInitialProps != null) {
            props = await currentRoute.getInitialProps({
                    cookies: req.cookies as Record<string, string>,
                    params,
                    queryClient,
                }
            );
        }
        const pageComp: JSX.Element = <currentRoute.component {...props} />
        const dehydratedState = dehydrate(queryClient)
        const styleServer = createStylesServer(mantinCache)
        const staticContext: Record<string, any> = {};
        // const reqCookie= (req as unknown as { universalCookies: Cookies })

        const cookies = new Cookies(req.headers.cookie);

        const App = extractor.collectChunks(
            <StaticRouter location={req.path} context={staticContext}>
                <QueryClientProvider client={queryClient}>
                    <ServerStyleContext.Provider value={null}>
                        <CookiesProvider cookies={cookies}>
                            <I18nLanguageWrapper>
                                <ServerApp>
                                    <QueryParameterComp value={params as Record<string, string>}>
                                        {pageComp}
                                    </QueryParameterComp>
                                </ServerApp>
                            </I18nLanguageWrapper>`
                        </CookiesProvider>`
                    </ServerStyleContext.Provider>
                </QueryClientProvider>
            </StaticRouter>
        );
        const appText = renderToString(App)
        const chunks = styleServer.extractCriticalToChunks(appText)

        const htmlContent = renderToStaticMarkup(
            <ServerStyleContext.Provider value={chunks.styles}>
                <HtmlRender content={appText} styles={<ServerStyles html={appText} server={styleServer} />}/>
            </ServerStyleContext.Provider>
        );
        const head = Helmet.renderStatic();

        // Check if the render result contains a redirect, if so we need to set
        // the specific status and redirect header and end the response
        if (staticContext.url) {
            res.status(301).setHeader("Location", staticContext.url);
            res.end();

            return;
        }
        const status = staticContext.status === "404" ? 404 : 200;

        const h1 = injectHTML(htmlContent, {
        bodyEnd: `
        ${head.script.toString()}
        ${extractor.getScriptTags()}
         `,
        headEnd: `
        ${head.title.toString()}
        ${head.base.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
        <script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2867450,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
        <script>window.__REACT_QUERY_STATE__ = ${JSON.stringify(dehydratedState)}</script>
        `})

        const result = await minify(h1, {
            removeAttributeQuotes: true
        });

        // Pass the route and initial state into html template
        res
            .status(status)
            .send(`<!doctype html>\n${result}`);
        // .send(content);
    } catch (error) {
        Sentry.captureException(error);
        res.location('/live/internal-error');
        // .status(404)
        // res.status(404).send(`xxxxxxxxxxxx  Not Found :${String(error)}`);
        console.error(chalk.red(`==> 😭  Rendering routes error: ${error}`));
    }finally {
        transaction.finish();
    }

    next();
};
