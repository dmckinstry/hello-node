'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
process.traceDeprecation = true;

const outputPath = path.resolve(__dirname, '..', 'www');
const contextPath = path.resolve(__dirname, '..', 'src', 'client');

module.exports = {
  context: contextPath,
  entry: ['./app.js'],
  mode: 'development',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /.(sc|c)ss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",

          options: {
            sourceMap: true
          }
        }
        ]
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '<%= name %>',
      favicon: '../server/template/favicon.ico',
      template: '../server/template/index.html'
    })
  ]
};
