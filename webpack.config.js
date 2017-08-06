const path = require('path')
const webpack = require('webpack')
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  "resolveLoader": {
    "modules": [
      "./node_modules"
    ]
  },
  entry: {
    app: [
      "./src/main.js"
    ],
  },
  output: {
    // path: path.resolve(__dirname, './public'),
    // publicPath: '',
    filename: 'bundle.js',
    chunkFilename: "[chunkhash].[id].chunk.js"
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.resource && module.resource.startsWith(nodeModules),
      filename: 'vendor.bundle.js',
      "chunks": [
        "main"
      ]
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new HtmlWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: 'src/index.html' },
      { from: 'service-worker.js'},
      { from: 'src/manifest.json'}
    ]),
    new webpack.ProvidePlugin({ riot: 'riot' }),
    // new webpack.optimize.UglifyJsPlugin({
    //   name: 'vendor',
    //   // sourceMap: true,
    //   minimize: true,
    //   compress: {
    //     warnings: false,
    //     screw_ie8: true,
    //     conditionals: true,
    //     unused: true,
    //     comparisons: true,
    //     sequences: true,
    //     dead_code: true,
    //     evaluate: true,
    //     if_return: true,
    //     join_vars: true,
    //   },
    //   output: {
    //     comments: false
    //   },
    // })
  ],
  module: {
    loaders: [
      {
        test: /\.tag\.html$/,
        exclude: /node_modules/,
        loader: 'riot-tag-loader',
        // options: {
        //   type: 'es6', // transpile the riot tags using babel
        //   hot: true,
        //   debug: false
        // }
      },
      {
        test: /\.tag\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["stage-3", "stage-2", "stage-1", "es2015"],
          plugins: ["autobind-class-methods", "babel-plugin-transform-class-properties"]
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["stage-3", "stage-2", "stage-1", "es2015"],
          plugins: ["autobind-class-methods", "babel-plugin-transform-class-properties"]
        },
      }
    ]
  }
}
