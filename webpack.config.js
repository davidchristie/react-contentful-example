const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const extractText = new ExtractTextPlugin({
  disable: process.env.NODE_ENV === 'development',
  filename: '[name].[contenthash].css'
})

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  devtool: 'eval-source-map',
  entry: {
    client: path.resolve('client')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        test: /\.css$/,
        use: extractText.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('build'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('assets', 'index.html')
    }),
    extractText
  ]
}
