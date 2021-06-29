/**
* Require Browsersync along with webpack and middleware for it
*/

const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('http-proxy-middleware');

let hostName = "localhost";
let port = "8002";

if (process.argv[2] !== undefined) {
    hostName = process.argv[2];
}

if (process.argv[3] !== undefined) {
    port = process.argv[3];
}
const basepath = "/";

/**
* Require ./webpack.config.js and make a bundler from it
*/

const webpackConfig = require('./webpack.dev');
const bundler = webpack(webpackConfig);

// use proxy to get real data from API
const proxyOptions = {
    target: `http://${hostName}:${port}/`,
    changeOrigin: true
};

// add your proxy here
const backendProxy = proxy([""], proxyOptions);

/**
* Run Browsersync and use middleware for Hot Module Replacement
**/

browserSync.init({
    server: {
        baseDir: 'src',
        middleware: [
            webpackDevMiddleware(bundler, {
                // IMPORTANT: dev middleware can't access config, so we should
                // provide publicPath by ourselves
                publicPath: webpackConfig.output.publicPath,
                // pretty colored output
                stats: { colors: true }
                // for other settings see
                // http://webpack.github.io/docs/webpack-dev-middleware.html
            }),

            // bundler should be the same as above
            webpackHotMiddleware(bundler),
            backendProxy
        ]
    },
    startPath: `${basepath}`,
    // files to execute reloading
    files: [
        'src/**/*.scss',
        'src/*.html',
        'src/**/*.tsx',
        'src/**/*.ts',
        'src/**/*.jsx',
        'src/**/*.js',
        'src/**/*.json'
    ]
});