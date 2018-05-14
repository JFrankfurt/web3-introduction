const {resolve} = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let FaviconsWebpackPlugin = require('favicons-webpack-plugin')

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
    new HtmlWebpackPlugin({title: 'Web3', template: './src/app/index.html'}),
    new FaviconsWebpackPlugin({
      logo: './src/app/static/eth.png',
      prefix: 'icons-[hash]/',
      emitStats: false,
      statsFilename: 'iconstats-[hash].json',
      persistentCache: true,
      inject: true,
      background: '#fff',
      title: 'eth-icon',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        favicons: true,
        firefox: true,
        twitter: true
      }
    })
  ],
  output: {
    filename: '[name].[hash].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
  }
}
