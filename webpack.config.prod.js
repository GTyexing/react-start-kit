var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    path.join(__dirname, 'app/main.js'),
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
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }}
    ),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ]
};