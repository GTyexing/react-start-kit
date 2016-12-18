var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: {
    vendor: [ 'react', 'react-dom', 'react-router', 'redux' ],
    main: path.join(__dirname, 'app/main.js'),
  },
  output: {
    path: __dirname + '/build',
    chunkFilename: '[name].chunk.js',
    filename: '[name].[chunkhash].js',
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }}
    ),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('bundle.css', { disable: false, allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({title: 'wisdom-classroom'})
  ]
};