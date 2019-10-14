const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const configEnv = require('./config')
module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production'
  return {
    entry: ['@babel/polyfill', path.join(__dirname, './src/index.js')],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {}
        },
        {
          test: /\.css/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {}
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: './public/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new webpack.DefinePlugin({
        'process.env': configEnv[argv.mode]
      })
    ]
  }
}
