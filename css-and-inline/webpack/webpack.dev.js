const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { sourceMap: true } },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    { loader: 'less-loader', options: { sourceMap: true } },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        open: true,
    },
});
