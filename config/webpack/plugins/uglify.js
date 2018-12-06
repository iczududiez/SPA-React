const webpack = require('webpack');

module.exports = new webpack.optimize.UglifyJsPlugin({
  output: {
    comments: false
  },
  mangle: false,
  sourceMap: true,
  compress: false,
  beautify: true,
});
