const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CssLoaders = require('../css-loader');

const BUILD_MODE = process.env.ENV || 'dev';
const PRODUCTION = BUILD_MODE !== 'dev';
const { loadConfig } = require('../tools/env');

const BUILD_ENV = process.env.ENV || 'dev';
const BUILD_CONFIG = loadConfig(BUILD_ENV);

module.exports = [
  // Tiny loader script
  {
    name: 'loader',
    entry: path.resolve(__dirname, '../src/modules/embed/entry/loader.ts'),
    target: 'web',
    resolve: {
      extensions: ['.js', '.ts'],
    },
    module: {
      rules: [
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
      path: path.resolve(__dirname, '../build/embed'),
      filename: 's98embeddable.js',
      clean: false,
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      new webpack.DefinePlugin({
        'process.env.BUILD_MODE': JSON.stringify(BUILD_MODE),
        'process.env.BUILD_ENV': JSON.stringify(BUILD_ENV),
        'process.env.BUILD_CONFIG': JSON.stringify(BUILD_CONFIG),
        'process.env.NODE_ENV': JSON.stringify(PRODUCTION ? 'production' : 'development'),
      }),
    ],
    optimization: {
      minimize: PRODUCTION,
      ...(PRODUCTION && {
        minimizer: [
          new TerserPlugin({
            parallel: true,
            extractComments: false,
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
            },
          }),
        ],
      }),
    },
    mode: PRODUCTION ? 'production' : 'development',
    devtool: PRODUCTION ? false : 'inline-source-map',
  },

  // Main widget bundle
  {
    name: 'widget',
    entry: [
      'whatwg-fetch',
      'abortcontroller-polyfill/dist/abortcontroller-polyfill-only',
      path.resolve(__dirname, '../src/modules/embed/entry/widget-main.tsx'),
    ],
    target: 'web',
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        '@config': path.resolve(__dirname, '../src/config.ts'),
        '@core': path.resolve(__dirname, '../src/core'),
        '@business': path.resolve(__dirname, '../src/business'),
        '@modules': path.resolve(__dirname, '../src/modules'),
        '@styles': path.resolve(__dirname, '../src/styles'),
      },
      fallback: {
        process: require.resolve('process/browser'),
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
      path: path.resolve(__dirname, '../build/embed'),
      filename: 'widget.js',
      library: 'LendwizelyChatWidget',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      clean: false,
      publicPath: '/embed/',
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
        process: 'process/browser',
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
    ],
    optimization: {
      minimize: PRODUCTION,
      ...(PRODUCTION && {
        minimizer: [
          new TerserPlugin({
            parallel: true,
            extractComments: false,
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.warn', 'console.info'],
                passes: 3,
              },
              mangle: true,
            },
          }),
        ],
      }),
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Single chunk for the embed widget
          embed: {
            name: 'widget',
            chunks: 'all',
            enforce: true,
          },
        },
      },
      sideEffects: false,
    },
    mode: PRODUCTION ? 'production' : 'development',
    devtool: PRODUCTION ? false : 'inline-source-map',

    // Dev server for embed development
    devServer: {
      static: {
        directory: path.resolve(__dirname, '../public/embed'),
      },
      port: 8002,
      open: '/test.html',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
      },
      hot: true,
      liveReload: true,
    },
  },
];
