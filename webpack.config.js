const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist/index.js'),
    filename: 'index.js'
  },
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    port: 8080,
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      title: 'Frontend exercise 05',
      template: path.resolve(__dirname, 'public/index.html')
    }),
  ]
};