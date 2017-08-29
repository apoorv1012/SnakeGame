const path = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

var config = {
    entry: {
        vendor: ['lodash'],
        snake: './js/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'js')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, 'styles')
                ],
                loader: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'js'),
            path.resolve(__dirname, 'styles')
        ],
        extensions: ['.js', '.less']
    },
    devServer: {
        contentBase: __dirname
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            chunks: ['vendor']
        })
    ]
};

module.exports = config;