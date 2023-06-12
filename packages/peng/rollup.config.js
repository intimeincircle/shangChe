import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';

const extensions = ['.js', '.ts', '.tsx'];

export default {
    input: 'main.ts',
    extensions,
    plugins: [
        resolve({
            extensions,
        }),

        babel({
            extensions,
            babelHelpers: 'runtime',
            exclude: 'node_modules/**',
            plugins: [
                "@babel/plugin-syntax-dynamic-import",
                [
                    "@emotion",
                    {
                        "importSource":  "@emotion/react"
                    }
                ],
                "@loadable/babel-plugin",
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-modules-commonjs"
            ],
            presets: [
                [
                    "@babel/preset-env", {
                    modules: false
                }
                ],
                [
                    "@babel/preset-typescript", {
                    modules: false
                }

                ]
            ]
        }),
        typescript(),
    ],
    output: {
        file: 'bundle.js',
        sourceMap: true
    }
};
