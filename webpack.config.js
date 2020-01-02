const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var path = require("path");

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
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
              output: {
                comments: false,
              },
            },
          })],
      },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.jsx?$/,
                exclude: [/node_modules/, /build/],
                use: "eslint-loader"
            },
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
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: '../assets',
            toType: 'dir'
        }]),
        new CopyWebpackPlugin([
            {
                from: 'src/manifest.json',
                to: '../manifest.json',
                toType: 'file'
            },
            {
                from: 'src/options.html',
                to: '../options.html',
                toType: 'file'
            }
        ]),
        new MiniCssExtractPlugin({
            filename: "../css/styles.css",
            chunkFilename: "[id].css"
        }),
        new WebpackNotifierPlugin({
            title: 'Webpack Making Noise',
            skipFirstNotification: false,
            contentImage: path.join(__dirname, 'src/assets/webpack-notification.png'),
            excludeWarnings: true
        }),

        // new BundleAnalyzerPlugin()
    ],
    watchOptions: {                  
        ignored: ['build/**/*.js', 'node_modules'],
        aggregateTimeout: 300
      },
};