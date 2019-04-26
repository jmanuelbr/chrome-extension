const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');

var path = require("path");

module.exports = {
    entry: './src/js/content.js',
    output: {
        path: path.resolve(__dirname, "build/js"),
        filename: "content.js",
        publicPath: "/build"
    },
    module: {
        rules: [{
                enforce: "pre",
                test: /\.js$/,
                exclude: [/node_modules/, /build/],
                use: "eslint-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
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
        new CopyWebpackPlugin([{
            from: 'src/manifest.json',
            to: '../manifest.json',
            toType: 'file'
        }]),
        new CopyWebpackPlugin([{
            from: 'src/js/background.js',
            to: '../js/background.js',
            toType: 'file'
        }]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "../css/styles.css",
            chunkFilename: "[id].css"
        }),
        new WebpackNotifierPlugin({
            title: 'Webpack Making Noise',
            skipFirstNotification: true,
            contentImage: path.join(__dirname, 'webpack/webpack-notification.jpg'),
            excludeWarnings: true
        })
    ],
    watchOptions: {                  
        ignored: ['build/**/*.js', 'node_modules'],
        aggregateTimeout: 300
      }
      
};