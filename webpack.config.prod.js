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
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {loader: "css-loader", options: { modules: true }}
        })
      },
      { 
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      { 
        test: /\.(png|jpg|gif)$/, 
        use: { loader: 'url-loader', options: { limit: 100000 }}, 
      },
      { 
        test: /\.woff|\.woff2|\.svg|.eot|\.ttf/, 
        use: { loader: 'url-loader', options: { limit: 100000, prefix: 'fonts' }}, 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }}
    ),
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor'] }),
    new ExtractTextPlugin({filename: 'bundle.css', disable: false, allChunks: true}),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({title: 'react-start-kit'})
  ]
};