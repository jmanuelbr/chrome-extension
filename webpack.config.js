const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
    'dist',
];

// the clean options to use
let cleanOptions = {
    verbose: true,
    dry: false
};

module.exports = {
    entry: './src/js/eventpage.js',
    output: {
        filename: './js/eventpage.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/assets', to: './assets' },
            { from: './src/popup.html', to: './popup.html' },
            { from: './src/manifest.json', to: './manifest.json' },
            { from: './src/chrome-extension.iml', to: './chrome-extension.iml' }
        ]),
        new CleanWebpackPlugin(pathsToClean, cleanOptions)
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        }]
    }
};