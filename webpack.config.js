const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const AntdMomentWebpackPlugin = require('@ant-design/moment-webpack-plugin');
const BUILD_MODE = process.env.ENV || 'dev';
const PRODUCTION = BUILD_MODE !== 'dev';
const { loadConfig } = require('./tools/env');
const NotificationPlugin = require('./tools/notification');
const CssLoaders = require('./css-loader');

const BUILD_ENV = process.env.ENV || 'dev';

const BUILD_CONFIG = loadConfig(BUILD_ENV);

const config = (module.exports = {
  ignoreWarnings: [
    warning => {
      // Ignoring Bootstrap SCSS deprecation warning for percentage units in abs() function
      const msg = warning.message;
      return (
        (msg.includes('Deprecation Warning') && msg.includes('_rfs.scss') && msg.includes('$dividend: abs($dividend)')) ||
        msg.includes('Deprecation Warning') ||
        msg.includes('sass-loader')
      );
    },
  ],
  entry: path.join(__dirname, 'src', 'index.ts'),
  entry: ['whatwg-fetch', 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only', path.join(__dirname, 'src', 'index.ts')],
  target: 'web',
  devtool: PRODUCTION ? false : 'inline-source-map',
  mode: PRODUCTION ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@config': path.resolve(__dirname, 'src/config'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@business': path.resolve(__dirname, 'src/business'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg|ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[ext]',
            esModule: false,
            emitFile: true,
          },
        },
      },
      ...CssLoaders,
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    clean: {
      keep: /embed\//, // Preserve embed folder
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new webpack.DefinePlugin({
      'process.env.BUILD_MODE': JSON.stringify(BUILD_MODE),
      'process.env.BUILD_ENV': JSON.stringify(BUILD_ENV),
      'process.env.BUILD_CONFIG': JSON.stringify(BUILD_CONFIG),
      'process.env.NODE_ENV': JSON.stringify(PRODUCTION ? 'production' : 'development'),
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: 'assets/**/*', context: path.resolve(__dirname, 'src') }],
    }),
    new AntdMomentWebpackPlugin(),
    new NotificationPlugin(),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'build/'),
    },
    historyApiFallback: true,
    compress: false,
    port: '6007',
    allowedHosts: ['merchantportal.local'],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
  },

  optimization: {},
});

if (PRODUCTION) {
  const terserPlugin = new TerserPlugin({
    // cache: true,
    parallel: true,
    // sourceMap: false,
    extractComments: false,
    terserOptions: {},
  });

  config.optimization.minimizer = [terserPlugin];
}
