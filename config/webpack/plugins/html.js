const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../base/config');

const settings = {
  production:
    new HtmlWebpackPlugin({
      template: `${config.srcDir}/index.html`,
      inject: true,
    }),
  development:
    new HtmlWebpackPlugin({
      template: `${config.srcDir}/index.html`,
      hash: true,
      chunks: ['index', 'vendor'],
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
      },
    })
}

module.exports = settings[process.env.NODE_ENV]