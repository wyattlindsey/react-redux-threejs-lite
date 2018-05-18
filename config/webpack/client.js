'use strict'

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  context: path.resolve(__dirname, '../../src'),
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist'),
    compress: true,
    port: 3000,
  },
  devtool: 'cheap-module-source-map',
  entry: [require.resolve('../polyfills'), 'index.js'],
  output: {
    filename: 'assets/js/bundle.js',
    path: path.resolve(__dirname, '../../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
          presets: [
            require.resolve('babel-preset-react-app'),
            require.resolve('babel-preset-flow'),
          ],
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: '../public/favicon.ico',
        to: '../dist/favicon.ico',
      },
    ]),
    new HtmlWebpackPlugin({
      template: '../public/index.html',
    }),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, '../../src'),
      path.resolve(__dirname, '../../node_modules'),
    ],
  },
}
