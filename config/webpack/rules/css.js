const ExtractTextPlugin = require('extract-text-webpack-plugin');

const settings = {
  production: {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    },
  development: {
    test: /\.css$/,
    include: /node-modules/,
    use: [
      'style-loader',
      'css-loader',
    ],
  }
}

module.exports = settings[process.env.NODE_ENV]