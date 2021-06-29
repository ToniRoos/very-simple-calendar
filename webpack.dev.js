const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const basepath = "/";

module.exports = merge(common, {

    mode: "development",
    devtool: "source-map",
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
    }
});