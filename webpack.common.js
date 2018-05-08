const {resolve} = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            './src/app/index.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {babelrc: true},
                }, {
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                    },
                }],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ title: 'TruSet', template: 'src/app/index.html' }),
    ],
    output: {
        filename: '[name].[hash].bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
    }
}
