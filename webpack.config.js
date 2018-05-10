const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
        rules: [
            { test: /\.(jsx?)$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
            { test: /\.(jpg|jpeg|gif|png|svg)$/, use: 'file-loader', exclude: /node_modules/ }
        ]
    },
}
