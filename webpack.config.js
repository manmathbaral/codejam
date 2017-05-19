var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');


module.exports = {
  entry: {
    'polyfills': path.resolve(__dirname, "src/polyfills"),
	'vendor': path.resolve(__dirname, "src/vendor"),
	'app': [
		path.resolve(__dirname, "src/modules/main"),
		path.resolve(__dirname, "src/modules/app.module"),
		path.resolve(__dirname, "src/modules/app.component"),
	]
  },
  
  output: {
    path: path.resolve(__dirname,"./dist"),
    filename: '[name].js'
  },

  resolve: {
	extensions: ['', '.js', '.ts'],
    modulesDirectories: ['node_modules'],
    root: path.resolve(__dirname, 'src')
  },

  module: {
	 loaders: [
            //{ loader: 'raw', test: /\.(css|html)$/ },
            { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
        ]
    /*rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: path.join(__dirname,"tsconfig.json") }
          } 
		 , 'angular2-template-loader'
        ],
		exclude: [/node_modules\/(?!(ng2-.+|ngx-.+))/]
      },*/
      /*{
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'assets', 'css'),
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'assets', 'css'),
        loader: 'raw-loader'
      }
    ]*/
  },

  plugins: [
	new webpackUglifyJsPlugin({
	 cacheFolder: path.resolve(__dirname, 'dist/'),
	 debug: true,
	 minimize: true,
	 sourceMap: false,
	 output: {
		comments: false
	 },
	 compressor: {
		warnings: false
	 }
	})
    /*new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(__dirname,"src"), 
      {}
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'app', 'vendor']
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname,"src/index.html")
    })*/
  ]
};
