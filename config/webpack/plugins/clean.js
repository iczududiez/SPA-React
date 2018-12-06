const CleanWebpackPlugin= require('clean-webpack-plugin');
const config = require('../base/config');

module.exports = new CleanWebpackPlugin(['dist'], {
  root: config.rootDir,
  verbose: true,
});
