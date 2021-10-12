
const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackplugin({
            filename: 'index.html',
            template: './src/index.html',
            
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};