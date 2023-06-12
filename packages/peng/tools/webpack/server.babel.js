import path from "path";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const svgToMiniDataURI = require('mini-svg-data-uri');

const isDev = process.env.NODE_ENV !== "production";

// Loaders for CSS and SASS
const getStyleLoaders = (sass) =>
    [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                importLoaders: sass ? 2 : 1,
                modules: {
                    auto: true,
                },
            },
        },
        {loader: "postcss-loader", options: {sourceMap: isDev}},
        sass && {loader: "sass-loader", options: {sourceMap: isDev}},
    ].filter(Boolean);

// Webpack configuration
module.exports = {
    mode: "production",
    target: 'node',
    context: path.resolve(process.cwd()),
    entry: ["./src/server/server1.ts"],
    node: {
        global: true
    },
    optimization: {
        sideEffects: true,
        minimize: false,
        minimizer: [],
    },
    output: {
        path: path.resolve("./server"),
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                loader: "babel-loader",
                options: {
                    plugins: [
                        "@loadable/babel-plugin"
                    ]
                },

                exclude: [/core-js/,
                    /@react-financial-charts\/annotations/,
                    /@react-financial-charts\/axes/,
                    /@react-financial-charts\/core/,
                    /@react-financial-charts\/utils/,
                    /@react-financial-charts\/series/,
                    /@react-financial-charts\/tooltip/,
                    /@react-financial-charts\/scales/,
                    /@react-financial-charts\/interactive/,
                    /@react-financial-charts\/coordinates/,
                    /@react-financial-charts\/indicators/,
                    /\bwebpack\/buildin\b/,
                    /\bwebpack\b/,
                    /\bd3-time-format\b/,
                    /d3-time-format/,
                    /d3-format/,
                    /\bd3-format\b/,
                    /\bd3-time\b/,
                    /lodash-es/,
                    /html-minifier/,
                    /html2canvas/,
                    /\breact-pdf\b/,
                    /pdfjs-dist/,
                    /\b@nivo\/line\b/,
                    /\b@nivo\/core\b/,
                    /htmlMinifier/,
                    /node_modules\/html-minifier/,
                    /html*minifier/,
                    /html*/,
                    /html-minifier-terser/,
                    /\bhtml-minifier\b/,
                    /\bpdfjs-dist\b/,
                    /@babel\/runtime/,
                    /regenerator-runtime/,
                ]
            },
            {
                test: /\.css$/,
                use: getStyleLoaders(),
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
        new MiniCssExtractPlugin({
            // Don't use hash in development, we need the persistent for "renderHtml.ts"
            filename: isDev ? "[name].css" : "[name].[contenthash].css",
            chunkFilename: isDev ? "[id].css" : "[id].[contenthash].css",
        }),
        // Setup global variables for client
        new webpack.DefinePlugin({
            __CLIENT__: false,
            __SERVER__: true,
            __DEV__: isDev,
        }),
        new webpack.ProgressPlugin(),
    ].filter(Boolean),
    externals: {
        'notion-client': 'commonjs2 notion-client',
        'pdfjs-dist': "commonjs2 pdfjs-dist",
        "html-minifier": "commonjs2 html-minifier",
        "react-pdf": "commonjs2 react-pdf",
        'watchpack': 'watchpack',
        'fsevents': "fsevents",
        'webpack': "webpack",
        'core-js': "core-js",
        'lodash-es': "lodash-es",
        'canvas': "canvas",
        'typescript': "typescript"
    },
    resolve: {
        modules: ["src", "node_modules"],
        descriptionFiles: ["package.json"],
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json"],
    },
};
