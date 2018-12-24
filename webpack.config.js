const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


var path = require("path");

module.exports = {
    entry: './src/js/eventpage.js',
    output: {
        path: path.resolve(__dirname, "build/js"),
        filename: "eventpage.js",
        publicPath: "/build"
    },
    module: {
        rules: [{
                enforce: "pre",
                test: /\.js$/,
                exclude: [/node_modules/, /third-party/, /build/],
                use: "eslint-loader"
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["es2015"] }
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
    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: '../assets',
            toType: 'dir'
        }]),
        new CopyWebpackPlugin([{
            from: 'src/chrome-extension.iml',
            to: '../chrome-extension.iml',
            toType: 'file'
        }]),
        new CopyWebpackPlugin([{
            from: 'src/manifest.json',
            to: '../manifest.json',
            toType: 'file'
        }]),
        new CopyWebpackPlugin([{
            from: 'src/popup.html',
            to: '../popup.html',
            toType: 'file'
        }]),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "../css/styles.css",
            chunkFilename: "[id].css"
        })
    ]
};