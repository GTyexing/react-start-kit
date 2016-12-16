var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8888
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8888',
    path.join(__dirname, 'app/main.js')
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, loaders: ['babel'], include: path.join(__dirname, 'app'), exclude: /node_modules/ },
      { test: /\.css$/, include: path.join(__dirname, 'app'), loader: 'style-loader!css-loader?modules' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
      { test: /\.woff|\.woff2|\.svg|.eot|\.ttf/, loader: 'url?prefix=font/&limit=10000' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8888' })
  ]
}