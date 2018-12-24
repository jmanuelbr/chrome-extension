const CopyWebpackPlugin = require('copy-webpack-plugin')
 
module.exports = {
    entry: './src/js/eventpage.js',
    output: {
        path: './build/js',
        filename: 'eventpage.js'
    },
    externals: {
        "ramda": "R"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([
            {
              from: 'src/assets',
              to: '../assets',
              toType: 'dir'
            }
          ]),
          new CopyWebpackPlugin([
            {
              from: 'src/chrome-extension.iml',
              to: '../chrome-extension.iml',
              toType: 'file'
            }
          ]),
          new CopyWebpackPlugin([
            {
              from: 'src/manifest.json',
              to: '../manifest.json',
              toType: 'file'
            }
          ]),
          new CopyWebpackPlugin([
            {
              from: 'src/popup.html',
              to: '../popup.html',
              toType: 'file'
            }
          ])
      ]
};