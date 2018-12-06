const webpack = require('webpack');

module.exports = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.[hash].js',
  minChunks: function(module){
    return module.context && module.context.indexOf("node_modules") !== -1;
  },
});