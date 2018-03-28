/* eslint-disable import/no-extraneous-dependencies */

const dotenv = require('dotenv');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

dotenv.config();

// Array of known environment variables whose value may be injected into the frontend as a key in
// process.env, allowing Node-like environment variable access in client-side logic.
const BUILD_ENV_VARS = [
  'NODE_ENV',
  'GIT_SHA',
  'REACT_ELEMENTAL_VERSION',
  'ROUTING_BASE_PATH',
  'CLIENT_SENTRY_DSN',
  'PIWIK_URL',
  'PIWIK_SITE_ID',
  'PIWIK_CLIENT_TRACKER_NAME',
  'PIWIK_SERVER_TRACKER_NAME',
];

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    main: './src/resources/templates/entry.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /src\/.+\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env': BUILD_ENV_VARS
        .filter((key) => key in process.env)
        .reduce((acc, key) =>
          Object.assign({}, acc, { [key]: JSON.stringify(process.env[key]) }), {}),
    }),
    new HTMLWebpackPlugin({
      template: 'src/resources/templates/index.html',
      inlineSource: '.js$',
    }),
    new HtmlWebpackInlineSourcePlugin(),
    isProduction && new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ].filter(Boolean),
  devServer: {
    historyApiFallback: true,
    publicPath: '/',
  },
};
