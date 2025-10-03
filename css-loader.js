const cssLoaders = [
  {
    test: /\.module\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            namedExport: false,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: ['postcss-simple-vars', 'postcss-nested'],
          },
        },
      },
    ],
  },
  {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },

      {
        loader: 'sass-loader',
        options: {
          api: 'modern',
        },
      },
    ],
  },
  {
    test: /\.css$/,
    exclude: /\.module\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: ['postcss-simple-vars', 'postcss-nested'],
          },
        },
      },
    ],
  },
];

module.exports = cssLoaders;
