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
    devtool: 'source-map'
};