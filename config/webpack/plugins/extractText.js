const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = new ExtractTextPlugin({
  filename: '[name].[hash:8].css',
});
