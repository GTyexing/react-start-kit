var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8888
  },
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8888',
    path.join(__dirname, 'app/main.js'),
  ],
  output: {
    path: __dirname + '/build',
    chunkFilename: '[name].chunk.js',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { 
        test: /\.js[x]?$/, 
        loaders: ['babel'], 
        include: path.join(__dirname, 'app'), 
        exclude: /node_modules/ 
      },
      { 
        test: /\.css$/, 
        include: path.join(__dirname, 'app'), 
        //wrong
        // loader: ExtractTextPlugin.extract('style-loader!css-loader?modules')
        loader: ExtractTextPlugin.extract( 'style-loader','css-loader?modules' )        
      },
      { 
        test: /\.(png|jpg|gif)$/, 
        loader: 'url-loader?limit=8192' 
      },
      { 
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf/, 
        loader: 'url?prefix=font/&limit=10000' 
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('bundle.css', { disable: false, allChunks: true }),
    new OpenBrowserPlugin({ url: 'http://localhost:8888' })
  ]
}
