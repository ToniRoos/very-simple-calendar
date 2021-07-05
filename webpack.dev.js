const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const basepath = "/";

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    // favicon: "./src/images/favicon.ico"
});

module.exports = merge(common, {

    mode: "development",
    devtool: "source-map",
    entry: ["./examples/index.tsx"],
    output: {
        publicPath: `${basepath}`
    },
    module: {
        rules: [
            {
                test: /\.(s?css)$/,
                use: [
                    {
                        loader: "style-loader" // inject CSS to page
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS modules
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [
        htmlPlugin
    ]
});