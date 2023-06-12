import path from "path";
import webpack from "webpack";
import {WebpackManifestPlugin} from "webpack-manifest-plugin";
import TerserPlugin from "terser-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import ImageMinimizerPlugin from "image-minimizer-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import LoadablePlugin from "@loadable/webpack-plugin";

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const svgToMiniDataURI = require('mini-svg-data-uri');

const isDev = process.env.NODE_ENV !== "production";
const isCi = process.env.ENV_CI === "true";

// const isDev =true
const getStyleLoaders = (sass) =>
    [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                importLoaders: sass ? 2 : 1,
                modules: {
                    auto: true,
                    localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64]",
                },
            },
        },
        {loader: "postcss-loader", options: {sourceMap: isDev}},
        sass && {loader: "sass-loader", options: {sourceMap: isDev}},
    ].filter(Boolean);


const optimization = isDev ? undefined : {
    minimize: true,
    minimizer: [
        new UglifyJsPlugin({}),
        new TerserPlugin({
            terserOptions: {
                parse: {
                    ecma: 8,
                },
                compress: {
                    ecma: 5,
                    drop_console: true,
                    inline: 2,
                    warnings: false,
                    comparisons: false,
                },
                output: {
                    ecma: 5,
                    comments: false,
                    ascii_only: true,
                },
            },
        })],
    splitChunks: {
        chunks: 'all',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        automaticNameDelimiter: '~',
        cacheGroups: {
            styles: {
                name: false,
                test: /\.css$/,
                chunks: 'all',
                enforce: true,
            },
        },
    },
    runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
}

// Webpack configuration
module.exports = {
     mode:   isDev ? "development" : "production",
    target: 'web',
    // TODO
    // devtool: "eval-source-map",
    devtool  : isDev && "eval-source-map",
    context: path.resolve(process.cwd()),
    entry: (isDev ? ["webpack-hot-middleware/client?reload=true&noInfo=false"] : []).concat([
        "./src/client/cli.tsx",
        "./src/client/pofill.ts",
        "./src/pdf.ts",
    ]),
    optimization,
    output: {
        path: isDev ? path.resolve(process.cwd(), "public/live/assets") : path.resolve(process.cwd(), "public/live/assets"),
        publicPath: isCi ? process.env.PUBLIC_DOMAIN +"/live/assets/" : "/live/assets/",
        filename: isDev ? "[name].js" : "[name].[contenthash].js",
        chunkFilename: isDev ? "[id].js" : "[id].[contenthash].js",
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: isDev,
                    // ... other options
                    plugins: [
                        "@loadable/babel-plugin",
                    ].filter(Boolean),
                },
            },
            // All output '.js' files will have any sourcemaps re-processed by source-map-loader.
            // So you can debug your output code as if it was TypeScript.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                use: getStyleLoaders(),
            },
            {
                test: /\.(scss|sass)$/,
                use: getStyleLoaders(true),
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: "asset",
            },
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            generator: (content) => svgToMiniDataURI(content.toString()),
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset",
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackManifestPlugin({
            fileName: path.resolve(process.cwd(), "public/live/assets/manifest.json"),
            filter: (file) => file.isInitial,
        }),
        new LoadablePlugin({
            writeToDisk: true,
            filename: "../loadable-stats.json",
        }),
        new CopyPlugin(
            {
                patterns: [
                    {
                        from: '../../node_modules/.pnpm/pdfjs-dist@2.9.359/node_modules/pdfjs-dist/build/pdf.worker.min.js',
                        to: 'pdf'
                    },
                    {
                        from: './src/assets',
                        to: ''
                    }
                ]
            }
        ),
        new MiniCssExtractPlugin({
            // Don't use hash in development, we need the persistent for "renderHtml.ts"
            filename: isDev ? "[name].css" : "[name].[contenthash].css",
            chunkFilename: isDev ? "[id].css" : "[id].[contenthash].css",
        }),
        // Setup global variables for client
        new webpack.DefinePlugin({
            __CLIENT__: true,
            __SERVER__: false,
            __DEV__: isDev,
            'process.env.BACKEND_DOMAIN': JSON.stringify('')
        }),
        new webpack.ProgressPlugin(),
        // TODO webpack
        isDev &&
        new ForkTsCheckerWebpackPlugin(),
        // // TODO  CompressionPlugin
        // Prepare compressed versions of assets to serve them with Content-Encoding
        !isDev && new CompressionPlugin(),
        !isDev &&
        new ImageMinimizerPlugin({
            // Lossless optimization with default option, feel free to experiment with options for better result for you
            // See https://github.com/webpack-contrib/image-minimizer-webpack-plugin#getting-started
            minimizerOptions: {
                plugins: [["gifsicle"], ["jpegtran"], ["optipng"], ["svgo"]],
            },
        }),
        // Visualize all of the webpack bundles
        // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin" for more configurations
        // isDev &&
        //   new BundleAnalyzerPlugin({
        //     analyzerMode: 'server'
        //       // process.env.NODE_ENV === "production" ? "server" : "disabled",
        //   }),
    ].filter(Boolean),
    externals: {
        'notion-client': 'commonjs2 notionClient',
        react: "React",
        "react-dom": "ReactDOM",
    },
    resolve: {
        mainFields: ['browser', 'module', 'main'],
        descriptionFiles: ["package.json"],
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"],
    },
};
