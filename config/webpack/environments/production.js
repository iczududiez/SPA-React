const config = require('../base/config');

const PluginUglify = require('../plugins/uglify');
const PluginBundleAnalyzer = require('../plugins/bundleAnalyzer');
const PluginExtractText = require('../plugins/extractText');

module.exports = {
  devtool: 'source-map',
  plugins: [
    PluginExtractText,
    PluginUglify,
    PluginBundleAnalyzer,
  ],
};
