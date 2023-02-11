const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');


let path = require("path");

module.exports = {
    entry: {
        content: "./src/js/content.js",
        background: "./src/js/background.js",
        options: "./src/js/options/options.js"
    },
    output: {
        path: path.resolve(__dirname, "build/js"),
        filename: "[name].js",
        publicPath: "/build"
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()]
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        modules: [__dirname, 'src/js', 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: 'src/assets',
                to: '../assets',
                toType: 'dir'
            }]
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/manifest.json',
                    to: '../manifest.json',
                    toType: 'file'
                },
                {
                    from: 'src/options.html',
                    to: '../options.html',
                    toType: 'file'
                },
                {
                    from: 'src/vendors/chartist.css',
                    to: '../css/chartist.css',
                    toType: 'file'
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: "../css/styles.css",
            chunkFilename: "[id].css"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: {source: false}
        }),
        new ESLintPlugin({
            extensions: ['jsx', 'js']
        }),
        new WebpackNotifierPlugin({
            title: 'Webpack Making Noise',
            skipFirstNotification: false,
            contentImage: path.join(__dirname, 'src/assets/webpack-notification.png'),
            excludeWarnings: true
        })
    ],
    watchOptions: {
        ignored: ['build/**/*.js', 'node_modules'],
        aggregateTimeout: 300
    },
    target: "node"
};