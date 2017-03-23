var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './app',
    port: 8888
  },
  devtool: 'eval',
  entry: path.join(__dirname, 'app/main.js'),   
  output: {
    path: __dirname + '/build',
    chunkFilename: '[name].chunk.js',
    filename: 'bundle.js',
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
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    new OpenBrowserPlugin({ url: 'http://localhost:8888' })
  ]
}
