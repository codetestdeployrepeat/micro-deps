const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;

module.exports = {
  entry: './src/micro-deps.js',
  output: {
    filename: 'assets/micro-deps/micro-deps.js',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[name].js',
  },
  mode: 'production',
  node: {
    fs: 'empty',
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  devtool: 'sourcemap',
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};
