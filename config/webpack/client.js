'use strict'

const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'

module.export = {
  mode: isProduction ? 'production' : 'development',
  context: path.resolve(__dirname, '../../src'),
  devServer: {
    contentBase: path.resolve(__dirname, '../../dist'),
    compress: true,
    port: 3000,
  },
  devtool: 'cheap-module-source-map',
  entry: [require.resolve('../polyfills'), 'index.js'],

}
