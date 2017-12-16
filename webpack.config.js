const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const copy = new CopyWebpackPlugin([
  {
    from: 'assets',
    ignore: [
      'index.html'
    ]
  }
])

const extractText = new ExtractTextPlugin({
  disable: process.env.NODE_ENV === 'development',
  filename: '[name].[contenthash].css'
})

const html = new HtmlWebpackPlugin({
  template: path.resolve('assets', 'index.html')
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
    html,
    extractText,
    copy
  ]
}
