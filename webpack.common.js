const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    // favicon: "./src/images/favicon.ico"
});

module.exports = {

    entry: ["./src/index.tsx"],
    output: {
        filename: "[name].[contenthash:8].bundle.js",    // generated bundle file with hash in name, name will automaitcally included in index.html
        path: __dirname + "/dist"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },

    module: {
        rules: [

            {
                test: /\.jsx?$/,
                exclude: /(node_modules|test)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.tsx?$/,
                use: [
                    'ts-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "./images"
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',  // load font files
                    options: {
                        name: '[name].[contenthash:8].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            },
        ]
    },
    plugins: [
        htmlPlugin,
        new CopyWebpackPlugin([
            { from: './src/i18n', to: './i18n' }
        ])
    ]
};