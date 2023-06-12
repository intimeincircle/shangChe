module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    plugins: ["@typescript-eslint"],
    settings: {
        "import/resolver": {
            typescript: {},
        },
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    rules: {
        "global-require": "off",
        "no-use-before-define": "off",
        "no-console": "off",
        "no-underscore-dangle": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "import/prefer-default-export": "off",
        "react/no-unused-prop-types": "off",
        "no-param-reassign": "off",
        "react/react-in-jsx-scope": "off",
        "no-import-module-exports": "off",
        "react/jsx-props-no-spreading": "off",
        "react-hooks/rules-of-hooks": "off",
        "react/function-component-definition": "off",
        "react/no-array-index-key": "off",
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        ],
        "import/extensions": "off",
        "import/no-extraneous-dependencies": [
            "error",
            {
                devDependencies: true,
            },

        ],
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/destructuring-assignment": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "testing-library/no-node-access": "off",
        "no-shadow": "off",
        "camelcase": "off",
        "@typescript-eslint/no-shadow": "error",
        "testing-library/render-result-naming-convention": "off",
    },
    globals: {
        __CLIENT__: true,
        __SERVER__: true,
        __DEV__: true,
    },
};
