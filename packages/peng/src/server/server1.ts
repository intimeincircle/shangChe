import path from "path";
import logger from "morgan";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import hpp from "hpp";
import chalk from "chalk";
import cookie from "cookie-parser"
import {getBlogTable} from "kun-shared/built/apis/getKunTable";
import universalCookieMiddleware from 'universal-cookie-express';
import {fetchNotionPage} from "../notion-server/notion"
import ssr from "./ssr";
import config from "../config";
import {newServerClient} from "../react-query/core";
import {ReactQueryKeys} from "../shared/context";
import "portable-fetch"

const app = express();

// describe
// Use helmet to secure Express with various HTTP headers
app.use(helmet({contentSecurityPolicy: false}));
// Prevent HTTP parameter pollution
app.use(hpp());
app.use(cookie());
app.use(universalCookieMiddleware());
// Compress all requests
app.use(compression());

// Use for http request debug (show errors only)
app.use(logger("dev", {skip: (_, res) => res.statusCode < 400}));
// app.use(favicon(path.resolve(process.cwd(), "public/favicon.ico")));

app.use('/live', express.static(path.resolve(process.cwd(), 'public/live')))

app.get('/notion/table', async (req, res) => {
    const id = req.query.name
    const dd = [ReactQueryKeys.getBlogList, String(id)]
    try {
        await newServerClient.prefetchQuery(dd, async () => getBlogTable(id as string), {
            staleTime: 60 * 1000 * 50 * 24,
            cacheTime: 60 * 1000 * 50 * 24
        })

        const r = newServerClient.getQueryData(dd)
        if (r == null) {
            res.status(404).send("Not Found :(");
        } else {
            res.json(r)
        }
    } catch (e) {
        res.status(404).send("Not Found :(");
    }
})

app.get('/notion/page', async (req, res) => {
    const id = req.query.name
    try {
        const dd = [ReactQueryKeys.getNotionBlog, String(id)]

        await newServerClient.prefetchQuery(dd, async () => {
            console.log('notion page {}')
            return fetchNotionPage(id as string)
        }, {
            staleTime: 60 * 1000 * 50 * 24,
            cacheTime: 60 * 1000 * 50 * 24
        })
        const r = newServerClient.getQueryData(dd)
        // const r1 = await fetchNotionPage(id as string);

        if (r == null) {
            res.status(404).send("Not Found :(");
        } else {
            res.json(r)
        }
    } catch (e) {
        res.status(404).send("Not Found :(");
    }
})

console.log(process.env.NODE_ENV)

app.get("*", ssr);
// Use React server-side rendering middleware

// @ts-expect-error
app.listen(config.PORT, config.HOST, (error) => {
    if (error) console.error(chalk.red(`==> 😭  OMG!!! ${error}`));
});
