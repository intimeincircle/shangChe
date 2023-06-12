import { Express } from "express";
import {getBlogTable} from "kun-shared/built/apis/getKunTable";
import chalk from "chalk";
import config from "../config";
import fetchNotionPage from "../notion-server/notion";
import {ReactQueryKeys} from "../shared/context";
import {newServerClient} from "../react-query/core";

export default (app: Express): void => {
  const webpack = require("webpack");
  const webpackConfig = require("../../tools/webpack/config.babel");
  const compiler = webpack(webpackConfig);
  const instance = require("webpack-dev-middleware")(compiler, {
    headers: { "Access-Control-Allow-Origin": "*" },
    serverSideRender: true,
    publicPath: webpackConfig.output.publicPath,
  });

  app.get('/notion/table', async (req, res) => {
    const id = req.query.name
    const dd = [ReactQueryKeys.getBlogList, String(id)]
    try {
      await newServerClient.prefetchQuery(dd, async () => {
        await  getBlogTable(id as string)
      }, {
        staleTime: 60 * 1000 * 50 * 24,
        cacheTime: 60 * 1000 * 50 * 24
      })

      const r = newServerClient.getQueryData(dd)
      // try {
      //   await queryCache.prefetchQuery('posts', getPosts)
      //
      //   await aServerPrefetch({
      //     params: {
      //       name: id as string,
      //     }
      // });
      // const r = await getBlogTable(id as string);
      console.log('r', r)
      res.json(r)
    } catch (e) {
      res.status(404).send("Not Found :(");
    }
  })

  app.get('/notion/page', async (req, res) => {
    const id = req.query.name
    try {
      console.log('id id id', id)
      console.log('id id id', id)
      const dd = [ReactQueryKeys.getNotionBlog, String(id)]

      await newServerClient.prefetchQuery(dd, async () => {
        console.log('notion page {}')
        await  fetchNotionPage(id as string)
      }, {
        staleTime: 60 * 1000 * 50 * 24,
        cacheTime: 60 * 1000 * 50 * 24
      })
      const r = newServerClient.getQueryData(dd)
      // const r1 = await fetchNotionPage(id as string);

      console.log('r', r)
      res.json(r)
    } catch (e) {
      res.status(404).send("Not Found :(");
    }
  })

  app.use(instance);

  app.use(
    require("webpack-hot-middleware")(compiler, {
      // log: true,
      path: "/__webpack_hmr",
      heartbeat: 10 * 1000,
    })
  );

  instance.waitUntilValid(() => {
    const url = `http://${config.HOST}:${config.PORT}`;
    console.info(chalk.green(`==> 🌎  Listening at ${url}`));
  });
};
