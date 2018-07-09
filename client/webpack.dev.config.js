const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
  entry: './docs/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      mdbreact: path.resolve('./src/index')
    }
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.gif(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/gif' }
    ]
  },
  devServer: {
    historyApiFallback: true,
    // proxy: {
    //   "*": "http://[::1]:3001",
    // },
    proxy: { 
      "*": "http://[::1]:3001",
      '/api/**': { 
        target: 'http://[::1]/api/', 
        secure: false, 
        logLevel: 'debug' 
      } 
    }

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin({
  //     template: 'public/index.html'
  //   })
  //   ]
};

module.exports = config;
