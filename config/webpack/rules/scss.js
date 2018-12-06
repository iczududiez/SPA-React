const config = require('../base/config');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const settings = {
  production: {
    test: /\.scss$/,
    include: config.srcDir,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        'sass-loader',
      ],
    }),
  },
  development: {
    test: /\.scss$/,
    include: config.srcDir,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  }
}

module.exports = settings[process.env.NODE_ENV]