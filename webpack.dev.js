require('dotenv').config();

const config = require('./webpack.config.js');
const webpack = require('webpack');

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  port: process.env.PORT
};

config.mode = 'development';

module.exports = config;
