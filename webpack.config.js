const CopyWebpackPlugin = require('copy-webpack-plugin');

 
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
                enforce: "pre",
                test: /\.js$/,
                exclude: [/node_modules/,/third-party/,/build/],
                loader: "eslint-loader"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                loaders: [
                    {
						loader: 'file-loader',
						options: {
							name: 'css/[name].blocks.css',
						}
					},
                    "style-loader", "css-loader", "sass-loader"]
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