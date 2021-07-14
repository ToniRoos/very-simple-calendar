const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {

    mode: "production",
    devtool: "source-map",
    entry: ["./src/Calendar.tsx"],
    output: {
        publicPath: './',
        filename: "index.js",    // generated bundle file with hash in name, name will automaitcally included in index.html
        path: __dirname + "/dist",
        libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS modules
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ],
            }
        ]
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react',
        }
    }
});